/**
 * generate-article.mjs
 * Takes the next topic from topic-queue.json, calls Claude API to generate
 * a full SEO-optimised article, and appends it to src/data/blogPosts.js.
 *
 * Usage:
 *   npm run blog:generate              — generates one article (next in queue)
 *   npm run blog:generate -- --all     — generates all pending topics
 *   npm run blog:generate -- --slug "my-custom-slug"  — generates specific topic by slug
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
const generateAll = args.includes("--all")
const specificSlug = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null

// ── Load data ─────────────────────────────────────────────────────────────────
const destinationData = JSON.parse(
    fs.readFileSync(path.join(ROOT, "src/data/destinationData.json"), "utf-8")
)
const { blogPosts } = await import("../src/data/blogPosts.js")
const queuePath = path.join(__dirname, "topic-queue.json")
const queue = JSON.parse(fs.readFileSync(queuePath, "utf-8"))

// ── Build internal links reference ───────────────────────────────────────────
const serviceLinks = [
    { text: "destination wedding planning services", url: "/services/" },
    { text: "contact our team for a free consultation", url: "/contact/" },
    { text: "destination weddings in Mexico", url: "/destinations/mexico/" },
    { text: "destination weddings in the Dominican Republic", url: "/destinations/dominican-republic/" },
    { text: "destination weddings in the Bahamas", url: "/destinations/bahamas/" },
]

const cityLinks = destinationData.flatMap((dest) =>
    (dest.cities || []).map((city) => ({
        text: `destination weddings in ${city.name}`,
        url: `/destinations/${dest.slug}/${city.slug}/`,
    }))
)

const hotelLinks = destinationData.flatMap((dest) =>
    (dest.cities || []).flatMap((city) =>
        (city.hotels || []).map((hotel) => ({
            text: hotel.name,
            url: `/destinations/${dest.slug}/${city.slug}/${hotel.slug}/`,
        }))
    )
)

const blogLinks = blogPosts.map((p) => ({
    text: p.title,
    url: `/blog/${p.slug}/`,
}))

// All links kept unsorted — filtered by relevance at prompt-build time
const allInternalLinks = [...serviceLinks, ...cityLinks, ...hotelLinks, ...blogLinks]

// ── Build site context string ─────────────────────────────────────────────────
function buildSiteContext(topic) {
    // Build preferred hotels grouped by destination + city for the prompt
    const preferredHotelsList = destinationData.map((d) => {
        const cityLines = (d.cities || []).map((c) => {
            const hotels = (c.hotels || []).map((h) => h.name).join(", ")
            return `    ${c.name}: ${hotels}`
        }).join("\n")
        return `  ${d.name}:\n${cityLines}`
    }).join("\n")

    // Pick the most relevant internal links for this topic
    const topicText = `${topic.title} ${topic.suggestedSlug} ${topic.category}`.toLowerCase()
    const relevantLinks = allInternalLinks
        .filter((l) => {
            // Always include service + contact links
            if (l.url === "/services/" || l.url === "/contact/") return true
            // Include links whose text overlaps with topic keywords
            const linkText = l.text.toLowerCase()
            return topicText.split(/\s+/).some((word) => word.length > 4 && linkText.includes(word))
        })
        .slice(0, 30)

    // Fallback: if too few relevant links, pad with service + city links
    const linksToShow = relevantLinks.length >= 8
        ? relevantLinks
        : [...serviceLinks, ...cityLinks].slice(0, 15)

    return `Company: DestinationPick (destinationpick.com)
Niche: Luxury Indian destination weddings + corporate travel management
Location: Carrollton, Texas, USA
Phone: +1-917-913-4262
Tone: Expert, warm, luxury-focused, trustworthy — like advice from a knowledgeable friend

PREFERRED PARTNER HOTELS — feature these prominently and first when recommending properties:
${preferredHotelsList}

Internal links to use naturally throughout the article (include 4–6 of these):
${linksToShow.map((l) => `  "${l.text}" → ${l.url}`).join("\n")}`
}

// ── Author profiles ───────────────────────────────────────────────────────────
const AUTHORS = {
    stanley: {
        name: "Stanley Alexander",
        title: "Founder & CEO",
        url: "/our-team/",
        image: "/members/StanleyAlexander.webp",
    },
    lucy: {
        name: "Lucy Martinez",
        title: "Operations Associate – Cancun",
        url: "/our-team/",
        image: "/members/lucy-img.webp",
    },
    wendy: {
        name: "Wendy Del Rosario",
        title: "Operations Associate",
        url: "/our-team/",
        image: "/members/Wendy.jpg",
    },
}

function assignAuthor(topic) {
    const text = `${topic.title} ${topic.suggestedSlug} ${topic.category}`.toLowerCase()
    if (text.includes("punta cana") || text.includes("dominican") || text.includes("bavaro") || text.includes("dr ")) {
        return AUTHORS.wendy
    }
    if (
        text.includes("cancun") || text.includes("riviera maya") || text.includes("tulum") ||
        text.includes("los cabos") || text.includes("cabo") || text.includes("puerto vallarta") ||
        text.includes("mexico") || text.includes("playa del carmen")
    ) {
        return AUTHORS.lucy
    }
    return AUTHORS.stanley
}

// ── Calculate read time ───────────────────────────────────────────────────────
function calcReadTime(html) {
    const text = html.replace(/<[^>]+>/g, " ")
    const words = text.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 220)
    return `${minutes} min read`
}

// ── Generate article for a single topic ──────────────────────────────────────
async function generateArticle(topic) {
    console.log(`\n✍️  Generating: "${topic.title}"`)
    console.log(`   Keyword: "${topic.keyword}"`)
    console.log(`   Category: ${topic.category}`)

    const siteContext = buildSiteContext(topic)

    const prompt = `You are an expert SEO content writer for DestinationPick, a luxury Indian destination wedding planning company.

${siteContext}

ARTICLE TO WRITE:
- Title (H1 — do NOT include in output): ${topic.title}
- Primary keyword: "${topic.keyword}"
- Category: ${topic.category}
- Target length: 1,800–2,200 words

SEO REQUIREMENTS:
- Use the primary keyword naturally 4–6 times throughout the article
- Include 3–4 semantic/related keyword variations in subheadings
- First paragraph (150–200 words) must directly answer the searcher's question and contain the primary keyword within the first 100 words
- Include a FAQ section at the end with 4–5 questions — these capture "People Also Ask" boxes in Google
- Include 3–5 internal links using the provided URLs (use descriptive anchor text, not "click here")
- End with a paragraph encouraging readers to contact DestinationPick

STRUCTURE:
1. Opening paragraph — answer the query immediately, include primary keyword
2. 4–6 H2 sections covering the topic comprehensively (use keyword variations in H2s)
3. Use H3 subsections, bullet lists, or numbered lists where they add clarity
4. FAQ section — MUST follow this exact format for schema markup to work:
   <h2>Frequently Asked Questions</h2>
   <h3>Question one?</h3>
   <p>Answer to question one.</p>
   <h3>Question two?</h3>
   <p>Answer to question two.</p>
   Include 4–5 FAQ pairs. Each <h3> must be immediately followed by a single <p> answer.
   Do NOT put any text between the FAQ <h2> and the first <h3>.
5. Closing paragraph with CTA to contact DestinationPick

HOTEL & RESORT MENTIONS:
- When recommending or listing hotels/resorts, always feature our Preferred Partner Hotels first and with more detail when relevant (they are our partner properties)
- You may also mention other well-known properties (e.g. Sandals, Iberostar, Hard Rock, Breathless, Excellence, Secrets, Royalton, Dreams, etc.) for SEO completeness and to make the article feel comprehensive and unbiased — but keep those mentions brief
- Never list ONLY preferred hotels — always include at least a couple of well-known non-partner properties so the article reads as genuinely authoritative, not promotional

HTML RULES (critical — follow exactly):
- Output ONLY the article body HTML — no <html>, <head>, <body>, <article>, or <h1> tags
- Use ONLY these tags: <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>
- Internal links: <a href="/destinations/mexico/">destination weddings in Mexico</a>
- Do NOT use <div>, <span>, <section>, <br>, or any other tags
- Do NOT use markdown (no **, no ##, no -)
- Do NOT mention competitors by name

RESPOND WITH VALID JSON ONLY. No explanation, no markdown code blocks. Exactly this format:
{
  "content": "<p>Full HTML article body here...</p>",
  "excerpt": "One sentence summary, 140–160 characters, includes primary keyword",
  "keywords": "primary keyword, variation 1, variation 2, variation 3",
  "metaTitle": "SEO title under 60 characters including primary keyword"
}`

    const message = await client.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 16000,
        messages: [{ role: "user", content: prompt }],
    })

    const responseText = message.content[0].text.trim()

    // Detect truncation — model hit token limit mid-response
    if (message.stop_reason === "max_tokens") {
        throw new Error("Response was truncated (hit max_tokens). Article not saved.")
    }

    let parsed
    try {
        const cleaned = responseText.replace(/^```json\n?/, "").replace(/\n?```$/, "").trim()
        parsed = JSON.parse(cleaned)
    } catch (e) {
        console.error("❌ Failed to parse Claude response as JSON for topic:", topic.title)
        console.error("Raw response (first 500 chars):", responseText.slice(0, 500))
        throw e
    }

    // ── Content validation ──────────────────────────────────────────────────
    const wordCount = parsed.content
        ? parsed.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length
        : 0

    if (wordCount < 1200) {
        throw new Error(`Generated article is too short (${wordCount} words). Minimum is 1,200. Article not saved.`)
    }

    if (!parsed.content.toLowerCase().includes("frequently asked")) {
        console.warn("   ⚠️  Warning: FAQ section not detected in generated content. Check output.")
    }

    if (!/<a\s+href=/.test(parsed.content)) {
        console.warn("   ⚠️  Warning: No internal links found in generated content.")
    }

    console.log(`   📊 Word count: ${wordCount}`)

    const today = new Date().toISOString().split("T")[0]

    return {
        slug: topic.suggestedSlug,
        title: topic.title,
        metaTitle: parsed.metaTitle || topic.title,
        excerpt: parsed.excerpt,
        category: topic.category,
        date: today,
        image: topic.suggestedImage || "/banners/banner1.jpg",
        keywords: parsed.keywords,
        readTime: calcReadTime(parsed.content),
        author: assignAuthor(topic),
        content: parsed.content,
    }
}

// ── Append post to blogPosts.js ───────────────────────────────────────────────
function appendToBlogPosts(post) {
    const filePath = path.join(ROOT, "src/data/blogPosts.js")
    let fileContent = fs.readFileSync(filePath, "utf-8")

    // Find insertion point: just before "\nexport const blogCategories"
    const insertionPoint = fileContent.indexOf("\nexport const blogCategories")
    if (insertionPoint === -1) {
        throw new Error("Could not find insertion point in blogPosts.js")
    }

    // Build the new post entry as a JS object literal
    const authorEntry = post.author
        ? `        author: { name: ${JSON.stringify(post.author.name)}, title: ${JSON.stringify(post.author.title)}, url: ${JSON.stringify(post.author.url)}, image: ${JSON.stringify(post.author.image)} },`
        : ""

    const postEntry = `    {
        slug: ${JSON.stringify(post.slug)},
        title: ${JSON.stringify(post.title)},
        metaTitle: ${JSON.stringify(post.metaTitle)},
        excerpt: ${JSON.stringify(post.excerpt)},
        category: ${JSON.stringify(post.category)},
        date: ${JSON.stringify(post.date)},
        image: ${JSON.stringify(post.image)},
        keywords: ${JSON.stringify(post.keywords)},
        readTime: ${JSON.stringify(post.readTime)},
${authorEntry}
        content: ${JSON.stringify(post.content)},
    },`

    // Insert before the blogCategories export
    const updatedContent =
        fileContent.slice(0, insertionPoint) +
        "\n" + postEntry +
        fileContent.slice(insertionPoint)

    fs.writeFileSync(filePath, updatedContent, "utf-8")
    console.log(`   ✅ Added to blogPosts.js`)
}

// ── Mark topic as complete in queue ──────────────────────────────────────────
function markComplete(topic) {
    queue.queue = queue.queue.filter((t) => t.suggestedSlug !== topic.suggestedSlug)
    queue.completed.push({ ...topic, status: "completed", completedAt: new Date().toISOString() })
    fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2))
}

// ── Main ──────────────────────────────────────────────────────────────────────
const existingSlugs = new Set(blogPosts.map((p) => p.slug))

// Determine which topics to process
let topicsToProcess = []

if (specificSlug) {
    const found = queue.queue.find((t) => t.suggestedSlug === specificSlug)
    if (!found) {
        console.error(`❌ No pending topic with slug "${specificSlug}" found in queue`)
        process.exit(1)
    }
    topicsToProcess = [found]
} else if (generateAll) {
    topicsToProcess = queue.queue.filter((t) => t.status === "pending")
    if (topicsToProcess.length === 0) {
        console.log("📭 No pending topics in queue. Run `npm run blog:topics` first.")
        process.exit(0)
    }
    console.log(`🚀 Generating all ${topicsToProcess.length} pending articles...`)
} else {
    // Default: generate next single topic
    const next = queue.queue.find((t) => t.status === "pending")
    if (!next) {
        console.log("📭 No pending topics in queue. Run `npm run blog:topics` first.")
        process.exit(0)
    }
    topicsToProcess = [next]
}

// Process each topic
let successCount = 0
for (const topic of topicsToProcess) {
    if (existingSlugs.has(topic.suggestedSlug)) {
        console.log(`⏭️  Skipping "${topic.title}" — slug already exists in blogPosts.js`)
        markComplete(topic)
        continue
    }

    try {
        const post = await generateArticle(topic)
        appendToBlogPosts(post)
        markComplete(topic)
        existingSlugs.add(post.slug)
        successCount++

        console.log(`   📝 Read time: ${post.readTime}`)
        console.log(`   🔗 URL: http://localhost:3000/blog/${post.slug}/`)

        // Small delay between API calls to avoid rate limiting
        if (generateAll && topicsToProcess.indexOf(topic) < topicsToProcess.length - 1) {
            await new Promise((r) => setTimeout(r, 2000))
        }
    } catch (err) {
        console.error(`   ❌ Failed to generate article: ${err.message}`)
        if (!generateAll) process.exit(1)
    }
}

console.log(`\n✅ Done. ${successCount} article(s) generated.`)
console.log(`📋 ${queue.queue.filter((t) => t.status === "pending").length} topics remaining in queue.`)
if (successCount > 0) {
    console.log("\nNext steps:")
    console.log("  1. Review the generated content in src/data/blogPosts.js")
    console.log("  2. git push → Vercel auto-deploys")
    console.log("  3. Run `npm run blog:generate` again for the next article")
}
