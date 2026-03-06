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

    return {
        title: meta?.title ?? fallbackTitle,
        description: meta?.description ?? fallbackDescription,
        keywords: meta?.keywords ?? fallbackKeywords,
        alternates: {
            canonical: meta?.canonical ?? `https://www.destinationpick.com/destinations/${destination}/${cities}/${slug}`,
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

    return (
        <main className="min-h-screen bg-background">
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