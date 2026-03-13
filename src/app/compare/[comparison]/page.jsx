import { notFound } from "next/navigation"
import Script from "next/script"
import Link from "next/link"
import destinationData from "../../../data/destinationData.json"

// All valid comparison slugs — format: [dest-a]-vs-[dest-b]
const COMPARISONS = [
    { slug: "mexico-vs-dominican-republic", a: "mexico", b: "dominican-republic" },
    { slug: "mexico-vs-bahamas", a: "mexico", b: "bahamas" },
    { slug: "dominican-republic-vs-bahamas", a: "dominican-republic", b: "bahamas" },
    { slug: "cancun-vs-punta-cana", a: "mexico", b: "dominican-republic", cityA: "cancun", cityB: "punta-cana" },
    { slug: "los-cabos-vs-punta-cana", a: "mexico", b: "dominican-republic", cityA: "los-cabos", cityB: "punta-cana" },
    { slug: "cancun-vs-bahamas", a: "mexico", b: "bahamas", cityA: "cancun" },
    { slug: "tulum-vs-punta-cana", a: "mexico", b: "dominican-republic", cityA: "tulum", cityB: "punta-cana" },
]

export async function generateStaticParams() {
    return COMPARISONS.map(c => ({ comparison: c.slug }))
}

function getDestInfo(slug) {
    return destinationData.find(d => d.slug === slug)
}

function getCityInfo(dest, citySlug) {
    if (!citySlug) return null
    return dest?.cities?.find(c => c.slug === citySlug)
}

const destDetails = {
    mexico: {
        emoji: "🇲🇽",
        tagline: "World-class resorts, ancient culture, diverse landscapes",
        pros: [
            "Largest selection of luxury all-inclusive resorts",
            "6 distinct wedding destinations (Cancun, Tulum, Los Cabos, Puerto Vallarta, San Miguel, Mexico City)",
            "Easy direct flights from all major US cities",
            "Lower cost-per-head at most resorts",
            "Diverse landscapes — beach, jungle, desert, hacienda",
            "Large Indian wedding community & experienced local vendors",
        ],
        cons: [
            "Hurricane season June–October",
            "Popular destinations can feel crowded in peak season",
        ],
        bestFor: "Couples who want the most resort options, diverse locations, and competitive pricing.",
        avgBudget: "$80K–$200K",
        flightTime: "3–5 hrs from major US cities",
        bestMonths: "November – April",
        resortCount: destinationData.find(d => d.slug === "mexico")?.cities?.reduce((a, c) => a + (c.hotels?.length ?? 0), 0) ?? 0,
    },
    "dominican-republic": {
        emoji: "🇩🇴",
        tagline: "Pristine Caribbean beaches, exclusive Cap Cana resorts",
        pros: [
            "Stunning Cap Cana & Punta Cana beaches",
            "World-class ultra-luxury resorts (Eden Roc, Zemi Miches)",
            "Warm Caribbean waters year-round",
            "Strong resort infrastructure for Indian weddings",
            "Exclusive, less-crowded beach settings",
        ],
        cons: [
            "Fewer destination options (primarily Punta Cana area)",
            "Hurricane risk August–October",
            "Fewer direct flights compared to Mexico",
        ],
        bestFor: "Couples seeking an exclusive, beachfront Caribbean experience with boutique luxury.",
        avgBudget: "$90K–$220K",
        flightTime: "3–4 hrs from Miami/NY",
        bestMonths: "December – March",
        resortCount: destinationData.find(d => d.slug === "dominican-republic")?.cities?.reduce((a, c) => a + (c.hotels?.length ?? 0), 0) ?? 0,
    },
    bahamas: {
        emoji: "🇧🇸",
        tagline: "Crystal turquoise waters, iconic Nassau luxury, Atlantis grandeur",
        pros: [
            "Iconic Atlantis Paradise Island — one of the world's most famous resort destinations",
            "Stunning turquoise water unlike anywhere in the Caribbean",
            "Close to US (1-hr flight from Miami)",
            "English-speaking island — no language barrier",
            "Baha Mar complex offers multiple luxury brands in one destination",
        ],
        cons: [
            "Higher overall cost than Mexico and Dominican Republic",
            "Fewer resort options",
            "Smaller island — less diversity in settings",
        ],
        bestFor: "Couples who want maximum wow factor, iconic venues, and proximity to the US East Coast.",
        avgBudget: "$120K–$300K",
        flightTime: "1 hr from Miami, 3 hrs from NYC",
        bestMonths: "December – April",
        resortCount: destinationData.find(d => d.slug === "bahamas")?.cities?.reduce((a, c) => a + (c.hotels?.length ?? 0), 0) ?? 0,
    },
}

const destNames = { mexico: "Mexico", "dominican-republic": "Dominican Republic", bahamas: "Bahamas" }
const cityNames = { cancun: "Cancun", tulum: "Tulum", "los-cabos": "Los Cabos", "punta-cana": "Punta Cana", "nassau-paradise-island": "Nassau" }

export async function generateMetadata({ params }) {
    const { comparison } = await params
    const comp = COMPARISONS.find(c => c.slug === comparison)
    if (!comp) return { title: "Comparison Not Found" }

    const nameA = comp.cityA ? cityNames[comp.cityA] : destNames[comp.a]
    const nameB = comp.cityB ? cityNames[comp.cityB] : destNames[comp.b]

    const title = `${nameA} vs ${nameB} for Indian Destination Weddings 2025 | DestinationPick`
    const description = `${nameA} vs ${nameB} for your Indian destination wedding — detailed comparison of resorts, costs, weather, guest experience & more. Expert insight from DestinationPick.`
    const keywords = `${nameA} vs ${nameB} wedding, ${nameA} destination wedding vs ${nameB}, Indian wedding ${nameA} or ${nameB}, best destination wedding location, ${nameA} ${nameB} comparison`

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.destinationpick.com/compare/${comparison}/`,
        },
        openGraph: {
            title,
            description,
            images: [{ url: "https://www.destinationpick.com/banners/banner1.jpg", width: 1200, height: 630 }],
        },
    }
}

export default async function ComparisonPage({ params }) {
    const { comparison } = await params
    const comp = COMPARISONS.find(c => c.slug === comparison)
    if (!comp) notFound()

    const destA = getDestInfo(comp.a)
    const destB = getDestInfo(comp.b)
    const infoA = destDetails[comp.a]
    const infoB = destDetails[comp.b]

    const nameA = comp.cityA ? cityNames[comp.cityA] : destNames[comp.a]
    const nameB = comp.cityB ? cityNames[comp.cityB] : destNames[comp.b]
    const fullNameA = destNames[comp.a]
    const fullNameB = destNames[comp.b]

    const hotelsA = comp.cityA
        ? (destA?.cities?.find(c => c.slug === comp.cityA)?.hotels ?? [])
        : (destA?.cities?.flatMap(c => c.hotels ?? []) ?? [])
    const hotelsB = comp.cityB
        ? (destB?.cities?.find(c => c.slug === comp.cityB)?.hotels ?? [])
        : (destB?.cities?.flatMap(c => c.hotels ?? []) ?? [])

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destination Comparisons", "item": "https://www.destinationpick.com/compare/" },
            { "@type": "ListItem", "position": 3, "name": `${nameA} vs ${nameB}`, "item": `https://www.destinationpick.com/compare/${comparison}/` },
        ],
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Which is better for an Indian destination wedding — ${nameA} or ${nameB}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Both ${nameA} and ${nameB} are excellent choices for Indian destination weddings. ${nameA} offers ${infoA.pros[0].toLowerCase()} while ${nameB} is known for ${infoB.pros[0].toLowerCase()}. The best choice depends on your guest count, budget, and vision. DestinationPick can help you compare options specific to your needs.`,
                },
            },
            {
                "@type": "Question",
                "name": `Is ${nameA} or ${nameB} cheaper for a destination wedding?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${nameA} typically starts around ${infoA.avgBudget} while ${nameB} averages ${infoB.avgBudget}. Costs depend heavily on guest count, resort selection, and number of event days. Contact DestinationPick for a personalized cost comparison.`,
                },
            },
            {
                "@type": "Question",
                "name": `How far is ${nameA} vs ${nameB} from the US?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${fullNameA}: ${infoA.flightTime}. ${fullNameB}: ${infoB.flightTime}. Both are easily reachable for US-based Indian families.`,
                },
            },
            {
                "@type": "Question",
                "name": `What is the best time of year for a wedding in ${nameA} vs ${nameB}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${fullNameA} is best during ${infoA.bestMonths}. ${fullNameB} is ideal during ${infoB.bestMonths}. Both should be booked well in advance for peak-season dates.`,
                },
            },
        ],
    }

    return (
        <main className="min-h-screen bg-background">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative bg-black py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/banners/banner2.jpg')] bg-cover bg-center opacity-30" />
                <div className="relative max-w-5xl mx-auto text-center">
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-6">Destination Comparison</p>
                    <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                        {nameA}<br />
                        <span className="text-primary italic">vs</span><br />
                        {nameB}
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Which destination is right for your Indian wedding? An expert comparison of resorts, costs,
                        weather, and guest experience — from DestinationPick's planning team.
                    </p>
                </div>
            </section>

            {/* Side-by-Side Cards */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <p className="text-primary text-sm uppercase tracking-widest mb-3 text-center">At a Glance</p>
                <h2 className="font-serif text-4xl font-light text-foreground text-center mb-12">
                    {nameA} <em>vs</em> {nameB}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { name: nameA, dest: comp.a, info: infoA, hotels: hotelsA },
                        { name: nameB, dest: comp.b, info: infoB, hotels: hotelsB },
                    ].map(({ name, dest, info, hotels }) => (
                        <div key={dest} className="border border-border bg-card overflow-hidden">
                            <div className="bg-primary p-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-3xl">{info.emoji}</span>
                                    <h3 className="font-serif text-2xl font-light text-white">{name}</h3>
                                </div>
                                <p className="text-white/70 text-sm">{info.tagline}</p>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4 text-sm border-b border-border pb-6">
                                    {[
                                        { label: "Avg. Budget", val: info.avgBudget },
                                        { label: "Flight Time", val: info.flightTime },
                                        { label: "Best Months", val: info.bestMonths },
                                        { label: "Resort Options", val: `${hotels.length} available` },
                                    ].map(({ label, val }) => (
                                        <div key={label}>
                                            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{label}</p>
                                            <p className="text-foreground font-medium text-sm">{val}</p>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Highlights</p>
                                    <ul className="space-y-2">
                                        {info.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <span className="text-primary flex-shrink-0 mt-0.5">—</span>
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Considerations</p>
                                    <ul className="space-y-2">
                                        {info.cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <span className="text-muted-foreground flex-shrink-0 mt-0.5">→</span>
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border border-border p-4">
                                    <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-1">Best For</p>
                                    <p className="text-muted-foreground text-sm">{info.bestFor}</p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    href={`/destinations/${dest}/`}
                                    className="block w-full text-center bg-primary text-white font-semibold py-3 hover:bg-primary/90 transition-colors text-sm uppercase tracking-widest"
                                >
                                    Explore {name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Breakdown */}
            <section className="bg-secondary py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-primary text-sm uppercase tracking-widest mb-3 text-center">Head to Head</p>
                    <h2 className="font-serif text-4xl font-light text-foreground text-center mb-12">
                        Detailed Comparison
                    </h2>
                    <div className="space-y-3">
                        {[
                            {
                                category: "Resort Selection",
                                a: `${hotelsA.length} luxury resorts — ${infoA.pros[0]}`,
                                b: `${hotelsB.length} luxury resorts — ${infoB.pros[0]}`,
                                winner: hotelsA.length >= hotelsB.length ? nameA : nameB,
                            },
                            { category: "Budget", a: infoA.avgBudget, b: infoB.avgBudget, winner: "Depends on resort" },
                            { category: "Flight Accessibility", a: infoA.flightTime, b: infoB.flightTime, winner: null },
                            { category: "Best Season", a: infoA.bestMonths, b: infoB.bestMonths, winner: null },
                            {
                                category: "Indian Wedding Experience",
                                a: "Extensive Indian wedding community with experienced local vendors",
                                b: "Growing market with resorts increasingly catering to Indian weddings",
                                winner: null,
                            },
                        ].map((row, i) => (
                            <div key={i} className="bg-background border border-border overflow-hidden">
                                <div className="bg-foreground px-6 py-3 flex items-center justify-between">
                                    <span className="font-medium text-background text-sm uppercase tracking-widest">{row.category}</span>
                                    {row.winner && (
                                        <span className="text-xs bg-primary text-white font-semibold px-3 py-1">{row.winner} Edge</span>
                                    )}
                                </div>
                                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                                    <div className="p-5">
                                        <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-2">{nameA}</p>
                                        <p className="text-muted-foreground text-sm">{row.a}</p>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-2">{nameB}</p>
                                        <p className="text-muted-foreground text-sm">{row.b}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-primary text-sm uppercase tracking-widest mb-3 text-center">Common Questions</p>
                    <h2 className="font-serif text-4xl font-light text-foreground text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="border border-border p-6">
                                <h3 className="font-medium text-foreground mb-3">{faq.name}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Our Expert Advice</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
                        Still Deciding Between<br /><em>{nameA} and {nameB}?</em>
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Our destination wedding specialists have planned weddings in both destinations.
                        Book a free consultation and we will help you choose the perfect location for your vision and budget.
                    </p>
                    <Link
                        href="/contact/"
                        className="inline-block bg-white text-primary font-semibold px-10 py-4 hover:bg-secondary transition-colors uppercase tracking-widest text-sm"
                    >
                        Get a Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    )
}
