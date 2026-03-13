import destinationData from "../../../data/destinationData.json"
import { destinationMeta } from "../../../data/Metatags"
import { notFound } from "next/navigation"
import Link from "next/link"

const DESTINATION_COMPARISONS = {
    "mexico": [
        { label: "Mexico vs Dominican Republic", href: "/compare/mexico-vs-dominican-republic/" },
        { label: "Mexico vs Bahamas", href: "/compare/mexico-vs-bahamas/" },
        { label: "Cancun vs Punta Cana", href: "/compare/cancun-vs-punta-cana/" },
        { label: "Los Cabos vs Punta Cana", href: "/compare/los-cabos-vs-punta-cana/" },
    ],
    "dominican-republic": [
        { label: "Dominican Republic vs Mexico", href: "/compare/mexico-vs-dominican-republic/" },
        { label: "Dominican Republic vs Bahamas", href: "/compare/dominican-republic-vs-bahamas/" },
        { label: "Punta Cana vs Cancun", href: "/compare/cancun-vs-punta-cana/" },
        { label: "Punta Cana vs Los Cabos", href: "/compare/los-cabos-vs-punta-cana/" },
    ],
    "bahamas": [
        { label: "Bahamas vs Mexico", href: "/compare/mexico-vs-bahamas/" },
        { label: "Bahamas vs Dominican Republic", href: "/compare/dominican-republic-vs-bahamas/" },
        { label: "Bahamas vs Cancun", href: "/compare/cancun-vs-bahamas/" },
    ],
}

import { DestinationPageHero } from "../../../components/destinations/destinationpage-hero"
import { DestinationPageMarquee } from "../../../components/destinations/destinationpage-marquee"
import { DestinationPageAbout } from "../../../components/destinations/destinationpage-about"
import { DestinationPageVenues } from "../../../components/destinations/destinationpage-venues"
import { DestinationPageCelebrations } from "../../../components/destinations/destinationpage-celebrations"
import { DestinationPageServices } from "../../../components/destinations/destinationpage-services"
import { DestinationPageTestimonials } from "../../../components/destinations/destinationpage-testimonials"
import { DestinationPagePartners } from "../../../components/destinations/destinationpage-partners"
import { DestinationPageFAQ } from "../../../components/destinations/destinationpage-faq"
import { DestinationPageContact } from "../../../components/destinations/destinationpage-contact"

export function generateStaticParams() {
    return destinationData.map(d => ({
        destination: d.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { destination } = await params
    const meta = destinationMeta[destination]
    const data = destinationData.find((d) => d.slug === destination)

    // Fallback metadata if destination not in metaTags file yet
    const fallbackTitle = data
        ? `${data.name} Destination Weddings | Luxury Packages | DestinationPick`
        : "Destination Weddings | DestinationPick"
    const fallbackDescription = data
        ? `Plan your dream destination wedding in ${data.name} with DestinationPick. All-inclusive luxury packages, expert planners & exclusive venues.`
        : "Plan your dream destination wedding with DestinationPick."

    return {
        title: meta?.title ?? fallbackTitle,
        description: meta?.description ?? fallbackDescription,
        keywords: meta?.keywords ?? "",
        alternates: {
            canonical: meta?.canonical ?? `https://www.destinationpick.com/destinations/${destination}/`,
        },
        openGraph: {
            title: meta?.title ?? fallbackTitle,
            description: meta?.description ?? fallbackDescription,
            images: [{ url: `/banners/banner2.jpg`, width: 1200, height: 630, alt: `${data?.name ?? destination} Destination Weddings` }],
        },
    }
}

export default async function MexicoPage({ params }) {
    const { destination } = await params
    const data = destinationData.find((d) => d.slug === destination)

    if (!data) notFound()

    const pageData = data.destinationPageData

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.destinationpick.com/destinations/" },
            { "@type": "ListItem", "position": 3, "name": data.name, "item": `https://www.destinationpick.com/destinations/${destination}/` },
        ],
    }

    return (
        <main className="min-h-screen bg-background">
            <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <DestinationPageHero data={pageData.hero} />
            <DestinationPageMarquee data={pageData.marquee} />
            <DestinationPageAbout data={pageData.about} />
            <DestinationPageVenues data={pageData.venuesSection} destinationSlug={destination} />
            {DESTINATION_COMPARISONS[destination] && (
                <section className="section-padding bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">Helpful Comparisons</p>
                        <h2 className="font-serif text-2xl lg:text-3xl text-foreground font-light mb-8">
                            Compare {data.name} With Other Destinations
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {DESTINATION_COMPARISONS[destination].map((comp) => (
                                <Link
                                    key={comp.href}
                                    href={comp.href}
                                    className="px-5 py-2.5 border border-border rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                >
                                    {comp.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <DestinationPageFAQ data={pageData.faq} />
            <DestinationPageContact data={pageData.contact} />
        </main>
    )
}
