/**
 * research-topics.mjs
 * Analyses the site's existing content + optional GSC data to generate a
 * ranked list of blog topics that will best boost search rankings.
 *
 * Usage:
 *   npm run blog:topics
 *   npm run blog:topics -- --gsc scripts/gsc-export.csv
 *
 * GSC Export: In Google Search Console → Performance → Export → CSV
 * The CSV should have columns: Query, Clicks, Impressions, CTR, Position
 *
 * Requires: ANTHROPIC_API_KEY in .env.local
 */

import Anthropic from "@anthropic-ai/sdk"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")

// ── Load env ──────────────────────────────────────────────────────────────────
const envPath = path.join(ROOT, ".env.local")
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8")
    for (const line of envContent.split("\n")) {
        const [key, ...val] = line.split("=")
        if (key && val.length) process.env[key.trim()] = val.join("=").trim()
    }
}

if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌ Missing ANTHROPIC_API_KEY in .env.local")
    console.error("   Add: ANTHROPIC_API_KEY=sk-ant-...")
    process.exit(1)
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ── Parse args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const gscFlagIndex = args.indexOf("--gsc")
const gscCsvPath = gscFlagIndex !== -1 ? args[gscFlagIndex + 1] : null
const topicsCount = parseInt(args[args.indexOf("--count") + 1] || "20", 10)

// ── Load site data ────────────────────────────────────────────────────────────
const destinationData = JSON.parse(
    fs.readFileSync(path.join(ROOT, "src/data/destinationData.json"), "utf-8")
)

// Extract existing blog posts by dynamically importing the JS module
const { blogPosts } = await import("../src/data/blogPosts.js")

// Build site structure summary for Claude
const siteSummary = {
    company: "DestinationPick",
    niche: "Luxury Indian destination weddings + corporate travel management",
    location: "Based in Carrollton, Texas, USA",
    destinations: destinationData.map((d) => ({
        name: d.name,
        cities: (d.cities || []).map((c) => ({
            name: c.name,
            hotels: (c.hotels || []).map((h) => h.name),
        })),
    })),
    existingBlogSlugs: blogPosts.map((p) => p.slug),
    existingBlogTitles: blogPosts.map((p) => p.title),
    blogCategories: ["Destination Weddings", "Destinations", "Planning Tips", "Corporate Travel"],
}

// ── Load GSC data if provided ─────────────────────────────────────────────────
let gscData = null
if (gscCsvPath) {
    const fullGscPath = path.resolve(gscCsvPath)
    if (!fs.existsSync(fullGscPath)) {
        console.warn(`⚠️  GSC file not found at ${fullGscPath} — running without GSC data`)
    } else {
        const csvContent = fs.readFileSync(fullGscPath, "utf-8")
        const lines = csvContent.trim().split("\n").slice(1) // skip header
        gscData = lines
            .map((line) => {
                const cols = line.split(",")
                return {
                    query: cols[0]?.replace(/"/g, "").trim(),
                    clicks: parseInt(cols[1] || "0"),
                    impressions: parseInt(cols[2] || "0"),
                    ctr: cols[3]?.trim(),
                    position: parseFloat(cols[4] || "0"),
                }
            })
            .filter((r) => r.query && r.impressions > 0)
            .sort((a, b) => b.impressions - a.impressions)
            .slice(0, 100) // top 100 queries by impressions
        console.log(`✅ Loaded ${gscData.length} queries from GSC data`)
    }
}

// ── Build prompt ──────────────────────────────────────────────────────────────
const gscSection = gscData
    ? `
GOOGLE SEARCH CONSOLE DATA (real queries bringing traffic to the site):
${gscData.map((r) => `- "${r.query}" | ${r.impressions} impressions | pos ${r.position.toFixed(1)}`).join("\n")}

Priority rules for GSC-informed topics:
- Queries with position 5-20 and 50+ impressions: create articles to push these to top 3
- Queries with high impressions but no dedicated article: create that article
- Queries showing user intent not covered by existing pages: prioritize these
`
    : `
No GSC data provided. Base topic selection on:
- Keyword gaps in the existing site structure
- High-intent queries your target audience (Indian-American couples planning destination weddings) would search
- Low-competition long-tail keywords that a newer site can rank for
`

const prompt = `You are an expert SEO strategist for DestinationPick, a luxury Indian destination wedding planning company.

SITE STRUCTURE:
${JSON.stringify(siteSummary, null, 2)}

${gscSection}

TASK: Generate ${topicsCount} blog post topics ranked by their potential to boost search rankings.

PRIORITISE topics that:
1. Target high-intent, specific queries (e.g. "how much does a destination wedding at secrets cancun cost")
2. Have low competition — longer, more specific phrases a newer site can rank for
3. Complement existing pages (link to destination/hotel pages naturally)
4. Cover gaps in the existing blog (don't duplicate existing titles)
5. Target the Indian-American destination wedding niche specifically where possible
6. Include seasonal/timely angles (2026 guides, current year data)

CATEGORIES to cover (aim for a mix):
- Destination Weddings (highest priority — core business)
- Destinations (city/resort specific guides)
- Planning Tips (timeline, budget, logistics)
- Corporate Travel (secondary vertical)

Respond with ONLY a valid JSON array. No explanation, no markdown. Example format:
[
  {
    "title": "How Much Does a Destination Wedding at Secrets Maroma Beach Cost in 2026?",
    "keyword": "secrets maroma beach wedding cost",
    "category": "Destination Weddings",
    "priority": 10,
    "reason": "High-intent cost query with low competition; existing hotel page provides internal link target",
    "suggestedSlug": "secrets-maroma-beach-wedding-cost",
    "suggestedImage": "/banners/banner2.jpg"
  }
]

Available images to suggest from: /banners/banner1.jpg, /banners/banner2.jpg, /banners/banner3.jpg, /banners/banner4.jpg, /banners/banner5.jpg, /images/mexico/hero/slide-1.jpg, /images/dominican-republic/about/main.jpg, /images/bahamas/about/main.jpg`

// ── Call Claude ───────────────────────────────────────────────────────────────
console.log("🔍 Researching best topics for DestinationPick blog...")
console.log(gscData ? "   Using site analysis + GSC data" : "   Using site analysis (no GSC data)")
console.log("")

const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
})

const responseText = message.content[0].text.trim()

// ── Parse response ────────────────────────────────────────────────────────────
let newTopics
try {
    // Handle cases where Claude wraps in ```json``` blocks
    const cleaned = responseText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim()
    newTopics = JSON.parse(cleaned)
} catch (e) {
    console.error("❌ Failed to parse Claude's response as JSON")
    console.error(responseText.slice(0, 500))
    process.exit(1)
}

// ── Merge with existing queue ─────────────────────────────────────────────────
const queuePath = path.join(__dirname, "topic-queue.json")
const existing = JSON.parse(fs.readFileSync(queuePath, "utf-8"))

// Avoid adding topics that already exist in queue or are completed
const existingSlugs = new Set([
    ...existing.queue.map((t) => t.suggestedSlug),
    ...existing.completed.map((t) => t.suggestedSlug),
    ...blogPosts.map((p) => p.slug),
])

const filtered = newTopics
    .filter((t) => !existingSlugs.has(t.suggestedSlug))
    .map((t) => ({ ...t, status: "pending", addedAt: new Date().toISOString() }))

existing.queue = [...existing.queue, ...filtered].sort((a, b) => b.priority - a.priority)
existing.lastResearched = new Date().toISOString()

fs.writeFileSync(queuePath, JSON.stringify(existing, null, 2))

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`✅ Added ${filtered.length} new topics to the queue`)
console.log(`📋 Total pending: ${existing.queue.filter((t) => t.status === "pending").length} topics`)
console.log("")
console.log("Top 5 topics by priority:")
existing.queue
    .filter((t) => t.status === "pending")
    .slice(0, 5)
    .forEach((t, i) => {
        console.log(`  ${i + 1}. [${t.priority}/10] ${t.title}`)
        console.log(`     Keyword: "${t.keyword}"`)
    })
console.log("")
console.log('Run "npm run blog:generate" to write the next article.')
