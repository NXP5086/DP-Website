import destinationData from "../../../data/destinationData.json"
import { destinationMeta } from "../../../data/Metatags"
import { notFound } from "next/navigation"

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
            canonical: meta?.canonical ?? `https://www.destinationpick.com/destinations/${destination}`,
        },
    }
}

export default async function MexicoPage({ params }) {
    const { destination } = await params
    const data = destinationData.find((d) => d.slug === destination)

    if (!data) notFound()

    const pageData = data.destinationPageData

    return (
        <main className="min-h-screen bg-background">
            <DestinationPageHero data={pageData.hero} />
            <DestinationPageMarquee data={pageData.marquee} />
            <DestinationPageAbout data={pageData.about} />
            <DestinationPageVenues data={pageData.venuesSection} destinationSlug={destination} />
            <DestinationPageFAQ data={pageData.faq} />
            <DestinationPageContact data={pageData.contact} />
        </main>
    )
}
