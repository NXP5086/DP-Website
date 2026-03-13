import { MetadataRoute } from "next"
import destinationData from "../data/destinationData.json"
import { blogPosts } from "../data/blogPosts"

const BASE_URL = "https://www.destinationpick.com"

// All valid comparison slugs — must match compare/[comparison]/page.jsx
const COMPARISON_SLUGS = [
    "mexico-vs-dominican-republic",
    "mexico-vs-bahamas",
    "dominican-republic-vs-bahamas",
    "cancun-vs-punta-cana",
    "los-cabos-vs-punta-cana",
    "cancun-vs-bahamas",
    "tulum-vs-punta-cana",
]

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    // ── Static pages ──────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/our-team/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/destinations/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        // Partner landing pages
        { url: `${BASE_URL}/lp/grand-palladium-costa-mujeres/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/lp/melia-resort/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/lp/playa-resorts/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/lp/dreams-macao-beach/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/lp/los-cabos-tourism-board/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        // Airline partnership pages
        { url: `${BASE_URL}/british-airways/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/emirates/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/etihad-airways/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/qatar-airways/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ]

    // ── Destination pages ──────────────────────────────────────
    const destinationPages: MetadataRoute.Sitemap = destinationData.map((dest) => ({
        url: `${BASE_URL}/destinations/${dest.slug}/`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    // ── City pages ─────────────────────────────────────────────
    const cityPages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).map((city) => ({
            url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }))
    )

    // ── Hotel pages ────────────────────────────────────────────
    const hotelPages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).flatMap((city) =>
            (city.hotels ?? []).map((hotel) => ({
                url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/${hotel.slug}/`,
                lastModified: now,
                changeFrequency: "monthly" as const,
                priority: 0.6,
            }))
        )
    )

    // ── City Wedding Guide pages (/destinations/[dest]/[city]/destination-wedding-guide/) ──
    const cityGuidePages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).map((city) => ({
            url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/destination-wedding-guide/`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.75,
        }))
    )

    // ── Destination Comparison pages (/compare/[slug]/) ──────────
    const comparisonPages: MetadataRoute.Sitemap = COMPARISON_SLUGS.map((slug) => ({
        url: `${BASE_URL}/compare/${slug}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }))

    // ── Blog post pages ───────────────────────────────────────────
    const blogPostPages: MetadataRoute.Sitemap = (blogPosts as Array<{ slug: string; date?: string }>).map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}/`,
        lastModified: post.date ? new Date(post.date) : now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }))

    return [
        ...staticPages,
        ...destinationPages,
        ...cityPages,
        ...hotelPages,
        ...cityGuidePages,
        ...comparisonPages,
        ...blogPostPages,
    ]
}
