import { notFound } from "next/navigation"
import Script from "next/script"
import Link from "next/link"
import destinationData from "../../../../../data/destinationData.json"

export async function generateStaticParams() {
    const params = []
    destinationData.forEach(dest => {
        dest.cities?.forEach(city => {
            params.push({
                destination: dest.slug,
                cities: city.slug,
            })
        })
    })
    return params
}

export async function generateMetadata({ params }) {
    const { destination, cities } = await params
    const dest = destinationData.find(d => d.slug === destination)
    const city = dest?.cities?.find(c => c.slug === cities)

    if (!city) return { title: "Wedding Guide Not Found" }

    const destName = dest.name
    const cityName = city.name
    const hotelCount = city.hotels?.length ?? 0

    const title = `${cityName} Destination Wedding Guide 2025 | Indian Weddings | DestinationPick`
    const description = `Your complete guide to planning an Indian destination wedding in ${cityName}, ${destName}. Compare ${hotelCount} luxury resorts, venues, packages, costs & best months. Expert advice from DestinationPick.`
    const keywords = `${cityName} destination wedding, Indian wedding ${cityName}, ${cityName} wedding guide, ${cityName} wedding resorts, destination wedding ${cityName} ${destName}, ${cityName} Indian wedding packages, ${cityName} wedding planning`

    const heroImage = city.images?.hero ?? city.images?.card ?? `/banners/banner1.jpg`

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.destinationpick.com/destinations/${destination}/${cities}/destination-wedding-guide/`,
        },
        openGraph: {
            title,
            description,
            images: [{
                url: heroImage.startsWith("http") ? heroImage : `https://www.destinationpick.com${heroImage}`,
                width: 1200,
                height: 630,
                alt: `${cityName} Destination Wedding Guide`,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    }
}

const countryMap = { bahamas: "The Bahamas", "dominican-republic": "Dominican Republic", mexico: "Mexico" }

const seasonData = {
    mexico: {
        best: "November – April",
        avoid: "June – October (hurricane season)",
        notes: "The dry season offers perfect beach weather for outdoor ceremonies.",
    },
    "dominican-republic": {
        best: "December – March",
        avoid: "August – October (peak hurricane risk)",
        notes: "Winter months bring ideal temperatures and minimal rain.",
    },
    bahamas: {
        best: "December – April",
        avoid: "August – September (hurricane season)",
        notes: "Spring shoulder season offers great value with beautiful weather.",
    },
}

const budgetGuide = {
    mexico: { entry: "$50K", mid: "$100K–$200K", luxury: "$200K+" },
    "dominican-republic": { entry: "$45K", mid: "$90K–$180K", luxury: "$180K+" },
    bahamas: { entry: "$60K", mid: "$120K–$250K", luxury: "$250K+" },
}

export default async function CityWeddingGuidePage({ params }) {
    const { destination, cities } = await params
    const dest = destinationData.find(d => d.slug === destination)
    const city = dest?.cities?.find(c => c.slug === cities)

    if (!city) notFound()

    const destName = dest.name
    const cityName = city.name
    const hotels = city.hotels ?? []
    const country = countryMap[destination] ?? destName
    const seasons = seasonData[destination]
    const budget = budgetGuide[destination]

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.destinationpick.com/destinations/" },
            { "@type": "ListItem", "position": 3, "name": destName, "item": `https://www.destinationpick.com/destinations/${destination}/` },
            { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://www.destinationpick.com/destinations/${destination}/${cities}/` },
            { "@type": "ListItem", "position": 5, "name": `${cityName} Wedding Guide`, "item": `https://www.destinationpick.com/destinations/${destination}/${cities}/destination-wedding-guide/` },
        ],
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `How much does a destination wedding in ${cityName} cost?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": budget
                        ? `A destination wedding in ${cityName} typically starts around ${budget.entry} for an intimate celebration. Mid-range Indian weddings with 150–300 guests range from ${budget.mid}, while large luxury celebrations with 300+ guests often exceed ${budget.luxury}. DestinationPick provides detailed cost breakdowns during your free consultation.`
                        : `Costs vary based on guest count, resort, and event days. Contact DestinationPick for a personalized quote for your ${cityName} destination wedding.`,
                },
            },
            {
                "@type": "Question",
                "name": `What is the best time of year for a destination wedding in ${cityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": seasons
                        ? `The best months for a destination wedding in ${cityName} are ${seasons.best}. ${seasons.notes} We recommend avoiding ${seasons.avoid}.`
                        : `Contact DestinationPick for the best timing for your ${cityName} destination wedding based on your preferred dates.`,
                },
            },
            {
                "@type": "Question",
                "name": `How many hotels in ${cityName} can host an Indian wedding?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `DestinationPick works with ${hotels.length} luxury resorts in ${cityName} that are fully equipped to host Indian destination weddings, including multi-day ceremonies like Mehendi, Sangeet, Baraat, and the main wedding event.`,
                },
            },
            {
                "@type": "Question",
                "name": `Do I need a wedding planner for a destination wedding in ${cityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes. A destination wedding in ${cityName} involves coordinating between the resort, Indian vendors, guest travel, immigration paperwork, and cultural traditions. DestinationPick's full-service planning team handles all of this from start to finish, ensuring a stress-free experience.`,
                },
            },
            {
                "@type": "Question",
                "name": `Can we bring our own Indian vendors to ${cityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes. DestinationPick coordinates with imported Indian vendors for catering, decor, priests, and entertainment. We also have an established network of local vendors in ${cityName} who specialize in Indian weddings and can supplement your vision seamlessly.`,
                },
            },
        ],
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${cityName} Destination Wedding Guide 2025`,
        "description": `Complete guide to planning an Indian destination wedding in ${cityName}, ${country}.`,
        "author": { "@type": "Organization", "name": "DestinationPick" },
        "publisher": {
            "@type": "Organization",
            "name": "DestinationPick",
            "logo": { "@type": "ImageObject", "url": "https://www.destinationpick.com/logos/destinationpick-logo.png" },
        },
        "url": `https://www.destinationpick.com/destinations/${destination}/${cities}/destination-wedding-guide/`,
        "dateModified": "2025-01-01",
    }

    return (
        <main className="min-h-screen bg-background">
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Hero */}
            <section className="relative bg-black py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/banners/banner1.jpg')] bg-cover bg-center opacity-30" />
                <div className="relative max-w-5xl mx-auto">
                    <nav className="flex items-center gap-2 text-white/60 text-xs mb-8 flex-wrap uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/destinations/" className="hover:text-white transition-colors">Destinations</Link>
                        <span>/</span>
                        <Link href={`/destinations/${destination}/`} className="hover:text-white transition-colors">{destName}</Link>
                        <span>/</span>
                        <Link href={`/destinations/${destination}/${cities}/`} className="hover:text-white transition-colors">{cityName}</Link>
                        <span>/</span>
                        <span className="text-white">Wedding Guide</span>
                    </nav>
                    <p className="text-white/80 text-sm uppercase tracking-widest mb-4">Complete 2025 Guide</p>
                    <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                        {cityName}<br />
                        <span className="italic">Wedding Guide</span>
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
                        Everything you need to plan a luxury Indian destination wedding in {cityName}, {country} —
                        resorts, costs, best season, and expert planning from DestinationPick.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-white/30 text-white/80 text-sm px-4 py-2">{hotels.length} Luxury Resorts</span>
                        {seasons && <span className="border border-white/30 text-white/80 text-sm px-4 py-2">Best Season: {seasons.best}</span>}
                        <span className="border border-white/30 text-white/80 text-sm px-4 py-2">Indian Wedding Specialists</span>
                    </div>
                </div>
            </section>

            {/* Why This City */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <p className="text-primary text-sm uppercase tracking-widest mb-3">Why {cityName}</p>
                <h2 className="font-serif text-4xl font-light text-foreground mb-8">
                    The Perfect Setting for<br /><em>Your Indian Wedding</em>
                </h2>
                <div className="grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
                    <p>
                        {cityName} has become one of the most sought-after locations for Indian destination weddings in {country}.
                        With {hotels.length} world-class luxury resorts, breathtaking natural scenery, and easy international
                        flight connections from major US cities, {cityName} checks every box for couples seeking an unforgettable celebration.
                    </p>
                    <p>
                        Indian weddings in {cityName} typically span 3–5 days — Mehendi, Sangeet, Baraat, the main ceremony,
                        and a reception. The resorts here have the infrastructure and cultural experience to execute each event
                        flawlessly, from Indian chefs and priests to grand Baraat processions on the beach.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {[
                        { title: "Flight Access", desc: `Direct or one-stop flights from NYC, Chicago, Dallas, and LA make ${cityName} easily accessible for all your guests.` },
                        { title: "Resort Infrastructure", desc: `Luxury resorts in ${cityName} feature grand ballrooms, outdoor ceremony spaces, and dedicated Indian wedding coordinators.` },
                        { title: "Cultural Experience", desc: `Beyond the wedding, guests enjoy world-class beaches, cuisine, and local culture — making the entire trip a celebration.` },
                    ].map((item, i) => (
                        <div key={i} className="border border-border p-6">
                            <h3 className="font-serif text-lg font-medium text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Best Season */}
            {seasons && (
                <section className="bg-secondary py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <p className="text-primary text-sm uppercase tracking-widest mb-3">When to Go</p>
                        <h2 className="font-serif text-4xl font-light text-foreground mb-10">
                            Best Time for a Wedding<br /><em>in {cityName}</em>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-background border border-border p-6">
                                <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-2">Best Season</p>
                                <p className="font-serif text-xl text-foreground mb-2">{seasons.best}</p>
                                <p className="text-muted-foreground text-sm">{seasons.notes}</p>
                            </div>
                            <div className="bg-background border border-border p-6">
                                <p className="text-xs uppercase tracking-widest font-semibold mb-2 text-muted-foreground">Avoid</p>
                                <p className="font-serif text-xl text-foreground mb-2">{seasons.avoid}</p>
                                <p className="text-muted-foreground text-sm">Higher weather risk and potential resort closures.</p>
                            </div>
                            <div className="bg-primary p-6">
                                <p className="text-white/80 text-xs uppercase tracking-widest font-semibold mb-2">Pro Tip</p>
                                <p className="text-white text-sm leading-relaxed">Book 12–18 months in advance for peak-season dates to secure your preferred resort and room block.</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Budget Guide */}
            {budget && (
                <section className="max-w-5xl mx-auto px-6 py-20">
                    <p className="text-primary text-sm uppercase tracking-widest mb-3">Investment</p>
                    <h2 className="font-serif text-4xl font-light text-foreground mb-4">
                        How Much Does a Wedding<br /><em>in {cityName} Cost?</em>
                    </h2>
                    <p className="text-muted-foreground mb-10 max-w-xl">
                        Costs vary by guest count, resort tier, and number of event days. Here is a general framework.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { tier: "Intimate", range: budget.entry, guests: "50–100 guests", desc: "2-day celebration, one resort, intimate venue" },
                            { tier: "Classic", range: budget.mid, guests: "150–300 guests", desc: "3–5 day full Indian wedding, full resort buyout" },
                            { tier: "Grand", range: budget.luxury, guests: "300+ guests", desc: "5-day grand event, multiple venues, premium vendors" },
                        ].map((tier, i) => (
                            <div key={i} className={`border p-6 ${i === 2 ? "border-primary bg-primary/5" : "border-border"}`}>
                                <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">{tier.tier} Wedding</p>
                                <p className="font-serif text-3xl text-foreground mb-1">{tier.range}</p>
                                <p className="text-muted-foreground text-sm mb-3">{tier.guests}</p>
                                <p className="text-muted-foreground text-sm">{tier.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-muted-foreground text-xs mt-6">
                        * Estimates include venue fees, catering, decor, and coordination. Guest travel is separate. Contact us for a detailed quote.
                    </p>
                </section>
            )}

            {/* Hotels List */}
            {hotels.length > 0 && (
                <section className="bg-secondary py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <p className="text-primary text-sm uppercase tracking-widest mb-3">Partner Resorts</p>
                        <h2 className="font-serif text-4xl font-light text-foreground mb-4">
                            Top Wedding Resorts<br /><em>in {cityName}</em>
                        </h2>
                        <p className="text-muted-foreground mb-10">
                            DestinationPick partners with {hotels.length} luxury resorts in {cityName} — each fully equipped for grand Indian destination weddings.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {hotels.map((hotel) => (
                                <Link
                                    key={hotel.slug}
                                    href={`/destinations/${destination}/${cities}/${hotel.slug}/`}
                                    className="bg-background overflow-hidden border border-border hover:shadow-lg transition-shadow group"
                                >
                                    {hotel.image && (
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={hotel.image}
                                                alt={`${hotel.name} ${cityName} wedding`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">{hotel.name}</h3>
                                            {hotel.hotelhero?.tier && (
                                                <span className="text-xs bg-secondary text-secondary-foreground font-semibold px-2 py-1 flex-shrink-0">{hotel.hotelhero.tier}</span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-2">
                                            Up to {hotel.maxGuests} guests · {hotel.weddingSpaces} venues
                                        </p>
                                        {hotel.description && (
                                            <p className="text-muted-foreground text-sm line-clamp-2">{hotel.description}</p>
                                        )}
                                        <span className="text-primary text-sm font-semibold mt-4 block">View Hotel →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-primary text-sm uppercase tracking-widest mb-3 text-center">Common Questions</p>
                    <h2 className="font-serif text-4xl font-light text-foreground text-center mb-12">
                        {cityName} Wedding FAQs
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
                    <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Ready to Begin?</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
                        Start Planning Your<br /><em>{cityName} Wedding Today</em>
                    </h2>
                    <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                        Our destination wedding specialists have planned hundreds of Indian weddings in {cityName}.
                        Let us handle every detail so you can focus on celebrating.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact/"
                            className="bg-white text-primary font-semibold px-8 py-4 hover:bg-secondary transition-colors"
                        >
                            Get a Free Consultation
                        </Link>
                        <Link
                            href={`/destinations/${destination}/${cities}/`}
                            className="border border-white text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors"
                        >
                            Explore {cityName}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
