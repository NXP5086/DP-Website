import destinationData from "../../../../data/destinationData.json"
import { cityMeta } from "../../../../data/Metatags"
import { notFound } from "next/navigation"

import { CityHero } from "../../../../components/city/city-hero"
import { CityMarquee } from "../../../../components/city/city-marquee"
import { CityAbout } from "../../../../components/city/city-about"
import { CityHotels } from "../../../../components/city/city-hotels"
import { CityHighlights } from "../../../../components/city/city-highlights"
import { CityComparison } from "../../../../components/city/city-comparison"
import { CityCelebrations } from "../../../../components/city/city-celebrations"
import { CityServices } from "../../../../components/city/city-services"
import { CityTestimonials } from "../../../../components/city/city-testimonials"
import { CityFAQ } from "../../../../components/city/city-faq"
import { CityContact } from "../../../../components/city/city-contact"
import Citylocations from "../../../../components/city/Citylocations"

export function generateStaticParams() {
    const params = []
    destinationData.forEach((destination) => {
        destination.cities?.forEach((city) => {
            params.push({
                destination: destination.slug,
                cities: city.slug,
            })
        })
    })
    return params
}

export async function generateMetadata({ params }) {
    const { destination, cities } = await params
    const key = `${destination}/${cities}`
    const meta = cityMeta[key]

    const destObj = destinationData.find((d) => d.slug === destination)
    const cityObj = destObj?.cities?.find((c) => c.slug === cities)

    const fallbackTitle = cityObj
        ? `Indian Destination Weddings in ${cityObj.name} | Luxury Packages | DestinationPick`
        : "Destination Wedding City | DestinationPick"
    const fallbackDescription = cityObj
        ? `Plan your dream Indian destination wedding in ${cityObj.name} with DestinationPick. Expert planners, luxury resort packages & exclusive venues.`
        : "Plan your dream destination wedding with DestinationPick."

    return {
        title: meta?.title ?? fallbackTitle,
        description: meta?.description ?? fallbackDescription,
        keywords: meta?.keywords ?? "",
        alternates: {
            canonical: meta?.canonical ?? `https://www.destinationpick.com/destinations/${destination}/${cities}/`,
        },
        openGraph: {
            title: meta?.title ?? fallbackTitle,
            description: meta?.description ?? fallbackDescription,
            images: [{ url: `/banners/banner3.jpg`, width: 1200, height: 630, alt: `${cityObj?.name ?? cities} Destination Weddings` }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta?.title ?? fallbackTitle,
            description: meta?.description ?? fallbackDescription,
            images: [`/banners/banner3.jpg`],
        },
    }
}


export default async function CityPage({ params }) {
    const { destination, cities } = await params

    // Find the destination
    const destinationObj = destinationData.find((d) => d.slug === destination)
    if (!destinationObj) notFound()

    // Find the city within the destination
    const cityObj = destinationObj.cities?.find((c) => c.slug === cities)
    if (!cityObj) notFound()

    const cityData = cityObj.cityPageData

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.destinationpick.com/destinations/" },
            { "@type": "ListItem", "position": 3, "name": destinationObj.name, "item": `https://www.destinationpick.com/destinations/${destination}/` },
            { "@type": "ListItem", "position": 4, "name": cityObj.name, "item": `https://www.destinationpick.com/destinations/${destination}/${cities}/` },
        ],
    }

    const countryCode = destination === "bahamas" ? "BS" : destination === "dominican-republic" ? "DO" : "MX"

    const weddingServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Destination Wedding Planning",
        "name": `Destination Wedding Planning in ${cityObj.name}`,
        "description": `Expert destination wedding planning services in ${cityObj.name}, ${destinationObj.name}. All-inclusive packages, luxury resort venues, and end-to-end coordination for couples across the USA.`,
        "url": `https://www.destinationpick.com/destinations/${destination}/${cities}/`,
        "provider": {
            "@type": "TravelAgency",
            "name": "DestinationPick",
            "url": "https://www.destinationpick.com/",
            "telephone": "+1-917-913-4262",
        },
        "areaServed": {
            "@type": "City",
            "name": cityObj.name,
            "containedInPlace": {
                "@type": "Country",
                "addressCountry": countryCode,
            },
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `${cityObj.name} Wedding Packages`,
            "itemListElement": [
                { "@type": "Offer", "name": "All-Inclusive Wedding Package", "description": `Complete destination wedding package at luxury resorts in ${cityObj.name}` },
                { "@type": "Offer", "name": "Multi-Day Celebration Package", "description": "Mehndi, Haldi, Sangeet, Baraat & Reception coordination" },
                { "@type": "Offer", "name": "Free Venue Consultation", "price": "0", "priceCurrency": "USD" },
            ],
        },
    }

    return (
        <main className="min-h-screen bg-background">
            <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script id="wedding-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingServiceSchema) }} />
            <CityHero data={cityData.hero} />
            <CityMarquee data={cityData.marquee} />
            <CityAbout data={cityData.about} />
            {cityData.cityLocations && <Citylocations data={cityData.cityLocations} />}
            <CityHotels data={cityData.hotels} hotels={cityObj.hotels} destinationSlug={destination} citySlug={cities} />
            <CityHighlights data={cityData.highlights} />
            <CityFAQ data={cityData.faq} />
            <CityContact data={cityData.contact} />
        </main>
    )
}