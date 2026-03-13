import { MetadataRoute } from "next"
import destinationData from "../data/destinationData.json"
import { blogPosts } from "../data/blogPosts"

const BASE_URL = "https://www.destinationpick.com"

// Update this date whenever content is meaningfully changed site-wide.
// Using a stable date (instead of `new Date()`) prevents Google from
// thinking every page is updated on every deploy.
const CONTENT_DATE = new Date("2026-03-14")

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
    // ── Static pages ──────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}/`, lastModified: CONTENT_DATE, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE_URL}/about-us/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/services/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/contact/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/our-team/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/destinations/`, lastModified: CONTENT_DATE, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/blog/`, lastModified: CONTENT_DATE, changeFrequency: "weekly", priority: 0.8 },
        // Partner landing pages — lower priority (conversion pages, not organic content)
        { url: `${BASE_URL}/lp/grand-palladium-costa-mujeres/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.4 },
        { url: `${BASE_URL}/lp/melia-resort/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.4 },
        { url: `${BASE_URL}/lp/playa-resorts/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.4 },
        { url: `${BASE_URL}/lp/dreams-macao-beach/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.4 },
        { url: `${BASE_URL}/lp/los-cabos-tourism-board/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.4 },
        // Airline partnership pages
        { url: `${BASE_URL}/british-airways/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/emirates/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/etihad-airways/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/qatar-airways/`, lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.6 },
    ]

    // ── Destination pages ──────────────────────────────────────
    const destinationPages: MetadataRoute.Sitemap = destinationData.map((dest) => ({
        url: `${BASE_URL}/destinations/${dest.slug}/`,
        lastModified: CONTENT_DATE,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        ...(dest.cardImage ? { images: [`${BASE_URL}${dest.cardImage}`] } : {}),
    }))

    // ── City pages ─────────────────────────────────────────────
    const cityPages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).map((city) => {
            const heroImages: string[] = (city.cityPageData as { hero?: { images?: string[] } } | undefined)?.hero?.images ?? []
            return {
                url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/`,
                lastModified: CONTENT_DATE,
                changeFrequency: "weekly" as const,
                priority: 0.7,
                ...(heroImages.length > 0 ? { images: heroImages.slice(0, 3).map((img) => `${BASE_URL}${img}`) } : {}),
            }
        })
    )

    // ── Hotel pages ────────────────────────────────────────────
    const hotelPages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).flatMap((city) =>
            (city.hotels ?? []).map((hotel) => ({
                url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/${hotel.slug}/`,
                lastModified: CONTENT_DATE,
                changeFrequency: "monthly" as const,
                priority: 0.6,
                ...(hotel.image ? { images: [`${BASE_URL}${hotel.image}`] } : {}),
            }))
        )
    )

    // ── City Wedding Guide pages (/destinations/[dest]/[city]/destination-wedding-guide/) ──
    const cityGuidePages: MetadataRoute.Sitemap = destinationData.flatMap((dest) =>
        (dest.cities ?? []).map((city) => ({
            url: `${BASE_URL}/destinations/${dest.slug}/${city.slug}/destination-wedding-guide/`,
            lastModified: CONTENT_DATE,
            changeFrequency: "monthly" as const,
            priority: 0.75,
        }))
    )

    // ── Destination Comparison pages (/compare/[slug]/) ──────────
    const comparisonPages: MetadataRoute.Sitemap = COMPARISON_SLUGS.map((slug) => ({
        url: `${BASE_URL}/compare/${slug}/`,
        lastModified: CONTENT_DATE,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }))

    // ── Blog post pages ───────────────────────────────────────────
    const blogPostPages: MetadataRoute.Sitemap = (blogPosts as Array<{ slug: string; date?: string; image?: string }>).map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}/`,
        lastModified: post.date ? new Date(post.date) : CONTENT_DATE,
        changeFrequency: "weekly" as const,
        priority: 0.65,
        ...(post.image ? { images: [`${BASE_URL}${post.image}`] } : {}),
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
