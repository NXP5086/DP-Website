import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Bannersection from '../../components/Bannersection'
import Faqs from '../../components/Faqs'

export const metadata = {
    title: "Emirates Flights | Book with DestinationPick",
    description: "Fly Emirates for your destination wedding or luxury travel. DestinationPick manages group bookings, upgrades, and full travel coordination for weddings and corporate events.",
    keywords: "Emirates flights, Emirates group booking, Emirates destination wedding travel, book Emirates DestinationPick, Emirates luxury travel",
    alternates: { canonical: "https://www.destinationpick.com/emirates/" },
    openGraph: {
        title: "Emirates Flights | Book with DestinationPick",
        description: "Fly Emirates for your destination wedding or luxury travel. DestinationPick manages group bookings, upgrades, and full travel coordination for weddings and corporate events.",
        images: [{ url: "/banners/emirates-airlines-banner.webp", width: 1200, height: 630, alt: "Emirates Airlines with DestinationPick" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Emirates Flights | Book with DestinationPick",
        description: "Fly Emirates for your destination wedding or luxury travel. DestinationPick manages group bookings and full travel coordination.",
        images: ["/banners/emirates-airlines-banner.webp"],
    },
}
const airlineSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "DestinationPick – Emirates Bookings",
    "url": "https://www.destinationpick.com/emirates/",
    "description": "DestinationPick specializes in group Emirates bookings for destination weddings, corporate travel, and luxury trips.",
    "image": "https://www.destinationpick.com/banners/emirates-airlines-banner.webp",
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
        "name": "Emirates Travel Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emirates Group Bookings" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emirates Business Class Upgrades" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emirates Destination Wedding Travel" } }
        ]
    }
}

const page = () => {


    const faq = [

        {
            question: "01. Emirates Connectivity and Fleet Information",
            answer: `
            Until September 2017, the main airlines of Emirates have quite a few aircraft that offer a variety of destinations. The fleet information of Emirates is as below:
            - Airbus A380-800 with 103 active aircrafts
            - Boeing 777-200LR with 10 active aircrafts
            - Boeing 777-300 with 3 active aircrafts
            - Boeing 777-300ER with 138 active aircrafts
            The total number of aircrafts of Emirates is 254. Even with such less fleet, Emirates is one of the top twenty airlines in the world and manages to cover a great area across continents providing not only amazing, world-class services but also a maximum comfort to the passengers that are flying with Emirates and who keep coming back, thanks to their services!
        `
        },
        {
            question: "02. Emirates In-Flight Service",
            answer: `
            Emirates believes in providing world-class services to their passengers.
            
            For Business Class flights:
            - In-flight entertainment with a lot of channels and movies in HD are available. Cabins are cozy, and there is a lot of legroom. A night kit is provided for free and the guaranteed window or aisle access with adjustable head and footrests and comfortable pillow, a workstation with personal reading light, top-rated entertainment, and a dedicated washroom is available.
            - Freshly cooked gourmet meals are served to the business class passengers on flights that are longer than ninety minutes.

            For Economy Class:
            - In-flight entertainment is available in the form of magazines, newspapers and TV shows and movies. Good legroom and lighting available to give comfort along with a kit containing a pillow and headphones are provided.
            - Meals and beverages that are freshly cooked are served in flights that will last ninety minutes or more.
        `
        },
        {
            question: "03. Emirates Flight Status",
            answer: `
            Emirates has a lot of international routes to offer some of which include Kabul, Algiers, Luanda, Buenos Aires, Adelaide, Brisbane, Melbourne, Perth, Sydney, Vienna, Baku, Manama, Dhaka, Brussels, Sao Paulo, Toronto, Rio de Janeiro, Santiago, Beijing, Shanghai, Moroni, Zagreb, Cairo, Prague, Copenhagen, Denpasar and more.
        `
        },
        {
            question: "04. Emirates Baggage Allowance",
            answer: `
            Emirates has certain rules regarding the baggage allowance, which are:

            For Carry-on Baggage:
            - First Class and Business Class customers are allowed only two pieces of carry-on baggage which can be one briefcase plus one handbag or one garment bag. The briefcase cannot exceed 18 x 14 x8 inches (45 x 35 x 20 centimeters); the handbag may not exceed 22 x 15 x 8 inches (55 x 38 x 20 centimeters); the garment bag can be no more than 8 inches (20 centimeters) thick when folded. The weight of each piece must not exceed 7 kilograms (15 lbs), or excess baggage charges would apply.
            - Economy Class customers are permitted one piece of carry-on baggage that should not exceed 22 x 15 x 8 inches (55 x 38 x 20 centimeters) and must weigh no more than 7 kilograms (15 lbs).

            For Checked-In Baggage:
            - Economy Baggage Allowance is 2 pieces
            - Maximum Dimensions allowed are 62 linear inches/158 cm (length + width + height)
            - Maximum Weight allowed for Economy Class Passengers is 50 lb/23 kg
            - Business/First Baggage Allowance is 2 pieces
            - Maximum Dimensions allowed are 62 linear inches/158 cm (length + width + height)
            - Maximum Weight allowed for Business/First Class Passengers is 70 lb/32 kg
        `
        },
        {
            question: "05. Emirates Web Check-in",
            answer: `
            Emirates has an easy web check-in for all of its passengers. You must do it at least 24 hours before boarding time.
        `
        },
        {
            question: "06. Emirates Offers and Discounts",
            answer: `
            Emirates offers and discounts are easily available on the website. They have a variety of offers and discounts to suit people from all walks of life and based on your destination; you will get the offer and the discount.
        `
        }
    ];



    return (
        <main>
            <Script id="airline-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airlineSchema) }} />
            <Bannersection
                image="/banners/emirates-airlines-banner.webp"
                title="About Emirates Airlines"
                description=""
            />


            <section className="section-padding ">
                <div className="container mx-auto px-4 md:px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-4">Emirates Airlines</h1>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>Emirates is a major airline in Dubai, United Arab Emirates. The Emirates is a subsidiary of The Emirates Group. The Emirates is completely owned and managed by the government of Investment Corporation of Dubai. Known as the largest airline of Middle East, Emirates operates over 3,600 flights per week from its hub at Dubai International Airport, to over 140 cities in 81 countries across six continents. The cargo activities are undertaken by Emirates SkyCargo. It was formed in March 1985 as a means to make up for the cut down of Gulf Air’s services with Dubai. They believe in offering world class services to their passengers along with the ultimate comfort levels while they fly with Emirates. This just goes to prove how amazing the services offered by Emirates are. They believe that the passengers need a homely space when flying and make sure that they get such a space. This is what matters in the end, happy passengers who are willing to fly with Emirates on every trip they take!</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <Image src="/images/british-airways-01.webp" alt="Emirates" width={600} height={400} className="rounded-lg shadow-lg" />
                        </div>
                    </div>



                </div>




                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">Why Emirates aren’t a part of any alliance</h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>The unique thing about Emirates is that it is not a part of any alliance, not even the three major ones, namely Sky Alliance, One World and SkyTeam. They did consider joining Star Alliance for a brief period in the year 2000 but opted to remain independent. The reason for this was revealed by the senior vice-president of the airline's commercial operations worldwide that the airline’s ability to react or act in the marketplace becomes hindered because a consensus will be required from all of the airline’s alliance partners. They offer world-class services and great infrastructural facilities independently. They provide better connections and facilities such as communication and whatnot, independently. They try their best to make travel seamless. This enables travelers to get the best benefits regarding services and assistance when flying with the esteemed airlines of Emirates.</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <Image src="/images/british-airways-01.webp" alt="Emirates" width={600} height={400} className="rounded-lg shadow-lg" />
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