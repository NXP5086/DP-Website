import { notFound } from "next/navigation"
import destinationData from "../../../../../data/destinationData.json"
import { hotelMeta } from "../../../../../data/Metatags"

import { HotelHero } from "../../../../../components/hotel/hotel-hero"
import { HotelTrustScale } from "../../../../../components/hotel/hotel-trust-scale"
import { HotelWhyChoose } from "../../../../../components/hotel/hotel-why-choose"
import { HotelWeddingDetails } from "../../../../../components/hotel/hotel-wedding-details"
import { HotelAmenitiesAndActivities } from "../../../../../components/hotel/hotel-amenities-activities"
import { HotelPreferredClub } from "../../../../../components/hotel/hotel-preferred-club"
import { HotelOverview } from "../../../../../components/hotel/hotel-overview"
import { HotelWeddingSpaces } from "../../../../../components/hotel/hotel-wedding-spaces"
import { HotelPackages } from "../../../../../components/hotel/hotel-packages"
import { HotelApproachCTA } from "../../../../../components/hotel/hotel-approach-cta"
import { HotelTestimonial } from "../../../../../components/hotel/hotel-testimonial"
import { HotelNearby } from "../../../../../components/hotel/hotel-nearby"
import { HotelContact } from "../../../../../components/hotel/hotel-contact"

export async function generateStaticParams() {
    const params = []
    destinationData.forEach(dest => {
        dest.cities?.forEach(city => {
            city.hotels?.forEach(hotel => {
                params.push({
                    destination: dest.slug,
                    cities: city.slug,
                    hotels: hotel.slug,
                })
            })
        })
    })
    return params
}

export async function generateMetadata({ params }) {
    const { destination, cities, hotels: slug } = await params
    const key = `${destination}/${cities}/${slug}`
    const meta = hotelMeta[key]

    const dest = destinationData.find(d => d.slug === destination)
    const city = dest?.cities?.find(c => c.slug === cities)
    const hotel = city?.hotels?.find(h => h.slug === slug)

    if (!hotel) return { title: "Hotel Not Found" }

    const fallbackTitle = `Indian Wedding at ${hotel.name} | DestinationPick`
    const fallbackDescription = `Plan your dream Indian wedding at ${hotel.name} in ${city.name}. Expert planning, luxury venues & all-inclusive packages by DestinationPick.`
    const fallbackKeywords = `${hotel.name} wedding, Indian wedding ${hotel.name}, ${city?.name} wedding venue, destination wedding ${destination}`

    const hotelImage = hotel.images?.main
        ? `https://www.destinationpick.com${hotel.images.main}`
        : `https://www.destinationpick.com/banners/banner1.jpg`

    return {
        title: meta?.title ?? fallbackTitle,
        description: meta?.description ?? fallbackDescription,
        keywords: meta?.keywords ?? fallbackKeywords,
        alternates: {
            canonical: meta?.canonical ?? `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}/`,
        },
        openGraph: {
            title: meta?.title ?? fallbackTitle,
            description: meta?.description ?? fallbackDescription,
            images: [{ url: hotelImage, width: 1200, height: 630, alt: `${hotel.name} Destination Wedding` }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta?.title ?? fallbackTitle,
            description: meta?.description ?? fallbackDescription,
            images: [hotelImage],
        },
    }
}

export default async function HotelPage({ params }) {
    const { destination, cities, hotels: slug } = await params
    const dest = destinationData.find(d => d.slug === destination)
    const city = dest?.cities?.find(c => c.slug === cities)
    const hotel = city?.hotels?.find(h => h.slug === slug)

    if (!hotel) {
        notFound()
    }

    const otherHotels = city.hotels.filter(h => h.slug !== slug).slice(0, 3)

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.destinationpick.com/destinations/" },
            { "@type": "ListItem", "position": 3, "name": dest.name, "item": `https://www.destinationpick.com/destinations/${destination}/` },
            { "@type": "ListItem", "position": 4, "name": city.name, "item": `https://www.destinationpick.com/destinations/${destination}/${cities}/` },
            { "@type": "ListItem", "position": 5, "name": hotel.name, "item": `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}/` },
        ],
    }

    const lodgingSchema = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": hotel.name,
        "description": hotel.overview ?? `${hotel.name} is a luxury resort in ${city.name} offering destination wedding packages.`,
        "url": `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}/`,
        ...(hotel.images?.main && { "image": `https://www.destinationpick.com${hotel.images.main}` }),
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressCountry": destination === "bahamas" ? "BS" : destination === "dominican-republic" ? "DO" : "MX",
        },
        "touristType": "Couples, Wedding Guests",
    }

    const weddingVenueSchema = {
        "@context": "https://schema.org",
        "@type": "EventVenue",
        "name": `${hotel.name} — Destination Wedding Venue`,
        "description": `${hotel.name} in ${city.name} offers all-inclusive destination wedding packages with dedicated event spaces, beach ceremonies, and luxury accommodations for couples from the USA.`,
        "url": `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}/`,
        ...(hotel.images?.main && { "image": `https://www.destinationpick.com${hotel.images.main}` }),
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressCountry": destination === "bahamas" ? "BS" : destination === "dominican-republic" ? "DO" : "MX",
        },
        "maximumAttendeeCapacity": hotel.maxGuests ?? 500,
        "amenityFeature": hotel.hoteloveriew?.amenities?.map(a => ({ "@type": "LocationFeatureSpecification", "name": a, "value": true })) ?? [],
        "containedInPlace": {
            "@type": "LodgingBusiness",
            "name": hotel.name,
        },
    }

    const aggregateOfferSchema = {
        "@context": "https://schema.org",
        "@type": "AggregateOffer",
        "name": `Destination Wedding Packages at ${hotel.name}`,
        "description": `All-inclusive destination wedding packages at ${hotel.name} in ${city.name}, curated by DestinationPick.`,
        "url": `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}/`,
        "priceCurrency": "USD",
        "offerCount": hotel.packages?.length ?? 3,
        "offers": hotel.packages?.map(pkg => ({
            "@type": "Offer",
            "name": pkg.name,
            "description": pkg.description ?? `${pkg.name} at ${hotel.name}`,
            "priceCurrency": "USD",
            ...(pkg.price && { "price": pkg.price }),
        })) ?? [
            { "@type": "Offer", "name": "All-Inclusive Wedding Package", "description": `Complete destination wedding package at ${hotel.name}` },
            { "@type": "Offer", "name": "Beach Ceremony Package", "description": `Private beach wedding ceremony at ${hotel.name}` },
            { "@type": "Offer", "name": "Free Wedding Consultation", "price": "0", "priceCurrency": "USD" },
        ],
        "seller": {
            "@type": "TravelAgency",
            "name": "DestinationPick",
            "url": "https://www.destinationpick.com/",
            "telephone": "+1-917-913-4262",
        },
    }

    return (
        <main className="min-h-screen bg-background">
            <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script id="lodging-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
            <script id="wedding-venue-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingVenueSchema) }} />
            <script id="aggregate-offer-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }} />
            <HotelHero hotel={hotel} />
            <HotelTrustScale hotel={hotel} />
            <HotelWhyChoose hotel={hotel} />
            <HotelWeddingDetails hotel={hotel} />
            <HotelOverview hotel={hotel} />
            <HotelWeddingSpaces hotel={hotel} />
            <HotelAmenitiesAndActivities hotel={hotel} />
            <HotelPreferredClub hotel={hotel} />
            <HotelPackages hotel={hotel} />
            <HotelApproachCTA hotel={hotel} />
            <HotelTestimonial hotel={hotel} />
            <HotelNearby hotel={hotel} otherHotels={otherHotels} citySlug={cities} destinationSlug={destination} />
            <HotelContact hotel={hotel} contactInfo={city?.contact} />
        </main>
    )
}