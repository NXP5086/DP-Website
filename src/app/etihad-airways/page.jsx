import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Bannersection from '../../components/Bannersection'
import Faqs from '../../components/Faqs'

export const metadata = {
    title: "Etihad Airways Flights | Book with DestinationPick",
    description: "Fly Etihad Airways for your destination wedding or luxury travel. DestinationPick coordinates group flights, travel logistics, and guest bookings for your celebration.",
    keywords: "Etihad Airways flights, Etihad group booking, Etihad destination wedding travel, book Etihad DestinationPick, Etihad luxury travel Abu Dhabi",
    alternates: { canonical: "https://www.destinationpick.com/etihad-airways/" },
    openGraph: {
        title: "Etihad Airways Flights | Book with DestinationPick",
        description: "Fly Etihad Airways for your destination wedding or luxury travel. DestinationPick coordinates group flights, travel logistics, and guest bookings for your celebration.",
        images: [{ url: "/banners/etihad-airways-banner.webp", width: 1200, height: 630, alt: "Etihad Airways with DestinationPick" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Etihad Airways Flights | Book with DestinationPick",
        description: "Fly Etihad Airways for your destination wedding or luxury travel. DestinationPick coordinates group flights and travel logistics.",
        images: ["/banners/etihad-airways-banner.webp"],
    },
}
const airlineSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "DestinationPick – Etihad Airways Bookings",
    "url": "https://www.destinationpick.com/etihad-airways/",
    "description": "DestinationPick specializes in group Etihad Airways bookings for destination weddings, corporate travel, and luxury trips.",
    "image": "https://www.destinationpick.com/banners/etihad-airways-banner.webp",
    "telephone": "+1-917-913-4262",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "1039 I-35E Suite 306",
        "addressLocality": "Carrollton",
        "addressRegion": "TX",
        "postalCode": "75006",
        "addressCountry": "US"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Etihad Airways Travel Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Etihad Airways Group Bookings" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Etihad Airways Business Class Upgrades" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Etihad Airways Destination Wedding Travel" } }
        ]
    }
}

const page = () => {


    const faq = [
        {
            question: "01. Etihad Airways Connectivity and Fleet Information",
            answer: `
            Until September 2017, the main airlines of Etihad Airways have quite a few aircraft that connect with a variety of destinations. The fleet information of Etihad Airways is as below:
            - Airbus A320-200 with 22 active aircrafts
            - Airbus A321-200 with 10 active aircrafts
            - Airbus A330-200 with 18 active aircrafts
            - Airbus A330-300 with 6 active aircrafts
            - Airbus A380-800 with 10 active aircrafts
            - Boeing 777-300ER with 19 active aircrafts
            - Boeing 787-9 with 20 active aircrafts
            The total number of aircrafts of Etihad Airways is 110. Even with such less fleet, Etihad Airways is one of the top twenty airlines in the world and manages to cover a great area across continents providing not only amazing, world-class services but also maximum comfort to the passengers that are flying with Etihad Airways and who keep coming back, thanks to their services!
        `
        },
        {
            question: "02. Etihad In-Flight Service",
            answer: `
            Etihad Airways believes in providing world-class services to their passengers.
            
            For Economy Class:
            - In-flight entertainment is available in the form of magazines, newspapers, TV shows, and movies. Good legroom and lighting available to give comfort along with a kit containing a pillow and headphones.
            - Meals and beverages that are freshly cooked are served on flights that will last ninety minutes or more.

            For Business Class:
            - In-flight entertainment with a lot of channels and movies in HD are available. Cabins are cozy, and there is a lot of legroom. A night kit is provided for free, and the guaranteed window or aisle access with adjustable head and footrests and comfortable pillow, a workstation with personal reading light, top-rated entertainment, and a dedicated washroom is available.
            - Freshly cooked gourmet meals are served to the business class passengers on flights that are longer than ninety minutes.
            - They also provide excellent ground services along with such amazing-flight services.
        `
        },
        {
            question: "03. Etihad Airways Flight Status",
            answer: `
            Etihad Airways has a lot of international routes to offer, some of which include Brisbane, Melbourne, Perth, Sydney, Vienna, Baku, Manama, Chittagong, Dhaka, Bridgetown, Minsk, Brussels, Campinas, Sao Paulo, Hong Kong, Shanghai, Chengdu, Cairo, Addis Ababa, Paris, Tbilisi, Manila, Moscow, Medina, Jeddah, Riyadh and more.
        `
        },
        {
            question: "04. Etihad Airways Baggage Allowance",
            answer: `
            Etihad Airways has certain rules regarding the baggage allowance, which are:

            For Carry-On Baggage:
            - Baggage Allowance is One piece
            - Maximum Dimensions allowed is 45 linear in/115 cm (length + width + height)
            - Maximum Weight allowed is 15 lb/7 kg

            Carry-on bag restrictions for Pearl Business and Diamond First Class:
            - Baggage Allowance is Two pieces
            - Maximum Dimensions for each bag allowed is 45 linear in/115 cm (length + width + height)
            - Maximum Combined Weight allowed is 26 lb/12 kg

            For Checked-In Baggage:
            - Diamond First Class passengers are allowed up to 110 lb/50 kg
            - Pearl Business Class passengers are allowed up to 88 lb/40 kg
            - Coral Economy Class passengers are allowed up to 66 lb/30 kg

            Each class is allowed two pieces of checked-in baggage whose total weight should not exceed the weight limits set by the airlines.
        `
        },
        {
            question: "05. Etihad Airways Web Check-in",
            answer: `
            Etihad Airways has an easy web check-in for all of its passengers. You must do it at least 24 hours before boarding time.
        `
        },
        {
            question: "06. Etihad Airways Offers and Discounts",
            answer: `
            Etihad Airways offers and discounts are easily available on the website. They have a variety of offers and discounts to suit people from all walks of life and based on your destination; you will get the offer and the discount.
        `
        }
    ];


    return (
        <main>
            <Script id="airline-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airlineSchema) }} />
            <Bannersection
                image="/banners/etihad-airways-banner.webp"
                title="About Etihad Airways"
                description=""
            />


            <section className="section-padding ">
                <div className="container mx-auto px-4 md:px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-4">About Etihad Airways</h1>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>Etihad Airways is known as the official flag carrier and the second largest airline of United Arab Etihad Airways, preceded by Etihad Airways. It is headquartered at and has an office in Khalifa City, Abu Dhabi, near Abu Dhabi International Airport. Etihad commenced operations in November 2003, which shows how relatively young the airline is. Operating more than 1,000 flights per week, the Etihad Airways provides a lot of services which amount up to over 120 passenger and cargo destinations in the Middle East, Africa, Europe, Asia, Australia and the Americas, with a fleet of 110. Etihad Airways was established as the second flag carrier of the United Arab Emirates. Etihad Airways in July 2003 by Royal Decree issued for getting an airline for Abu Dhabi. The airline carries over a hundred thousand passengers per month. They believe in offering world class services to their passengers along with the ultimate comfort levels while they fly with Etihad Airways. This just goes to prove how amazing the services offered by Etihad Airways are. They believe that the passengers need a homely space when flying and make sure that they get such a space. This is what matters in the end, happy passengers who are willing to fly with Etihad Airways on every trip they take!</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <Image src="/images/airlines/etihad1.webp" alt="Etihad Airways" width={600} height={400} className="rounded-lg shadow-lg object-cover" />
                        </div>
                    </div>



                </div>




                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">Etihad Airways and why they aren’t a part of any alliance</h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>The unique thing about Etihad Airways is that it is not a part of any alliance, not even the three major ones, namely Sky Alliance, OneWorld and SkyTeam. They followed the steps of Emirates in this way. The reason for this was revealed by the senior vice-president of the airline's commercial operations worldwide that the airline’s ability to react or act in the marketplace becomes hindered because a consensus will be required from all of the airline’s alliance partners. They offer world-class services and great infrastructural facilities independently. They provide better connections and facilities such as communication and what not, independently. They try their best to make travel seamless. This enables travellers to get the best benefits regarding services and assistance when flying with the esteemed airlines of Etihad Airways.</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <Image src="/images/airlines/etihad2.webp" alt="Etihad Airways" width={600} height={400} className="rounded-lg shadow-lg object-cover" />
                        </div>
                    </div>

                </div>
            </section>


            <section className='section-padding bg-white'>
                <div className="container">
                    <h2 className='section-title text-center'>FAQ'S</h2>
                    <div className="h-1 w-20 bg-accent  rounded-full mb-6 mx-auto"></div>
                </div>

                <Faqs faqs={faq} />
            </section>

        </main>
    )
}

export default page