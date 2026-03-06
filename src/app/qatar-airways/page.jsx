import React from 'react'
import Bannersection from '../../components/Bannersection'
import Faqs from '../../components/Faqs'
const page = () => {


    const faq = [
        {
            question: "01. Qatar Airways Connectivity and Fleet Information",
            answer: `
        Aircraft Type: Airbus A320-200
        Count: 29
        Seating Capacity: 132,144

        Aircraft Type: Airbus A321-200
        Count: 3
        Seating Capacity: 182

        Aircraft Type: Airbus A330-200
        Count: 6
        Seating Capacity: 260

        Aircraft Type: Airbus A330-300
        Count: 8
        Seating Capacity: 295, 305

        Aircraft Type: Airbus A350-900
        Count: 34
        Seating Capacity: 283

        Aircraft Type: Airbus A350-1000
        Count: 19
        Seating Capacity: 327

        Aircraft Type: Airbus A380
        Count: 10
        Seating Capacity: 517

        Aircraft Type: Boeing 787-8
        Count: 30
        Seating Capacity: 254

        Aircraft Type: Boeing 787-9
        Count: 7
        Seating Capacity: 311

        Aircraft Type: Boeing 777-200LR
        Count: 9
        Seating Capacity: 276, 272

        Aircraft Type: Boeing 777-300ER
        Count: 48
        Seating Capacity: 354, 358, 412
        `
        },
        {
            question: "02. Qatar In-Flight Service",
            answer: `
        Qatar Airways believes in providing world-class services to their passengers.

        Economy:
        Enjoy a world of comfort and space when you travel with us. Whether you wish to dine, sleep or simply stretch out enjoying more than 4,000 wide-screen entertainment options, our spacious seats give you more than enough room to really enjoy your journey. Our award-winning cabin crew take care of the rest.

        Economy Class:
        Recline and relax in one of the widest seats in the industry, designed to bring you the ultimate in space and comfort. Make yourself comfortable beneath the warmth of a soft blanket and unwind in your own personal space. Whether you wish to dine, sleep or simply stretch out, our spacious seats give you more than enough room to really enjoy your journey.

        Business Class:
        Experience the world’s most memorable destinations with an unforgettable journey in the World’s Best Business Class, as recognised by 2019 Skytrax World Airline Awards and 2019 TripAdvisor Travellers' Choice Awards. At Qatar Airways, we strive for excellence in everything we do. It is our attention to detail and unparalleled level of service that has made us who we are today. Home to one of the most innovative and modern fleets in the world, our spacious and comfortable seating, delectable cuisine and extensive entertainment options, make flying with us a truly remarkable experience.

        Our first-ever cabin to offer aft and forward-facing seats, takes cabin innovation to an entirely new level, thanks to its quad configuration. Cabin interiors are designed in our signature colours of burgundy and grey, enhanced with elegant and warm rose gold detailing. Our seats have been thoughtfully dressed in the latest and finest fabrics, to optimise your comfort. The media panel also comes with an all-access power port, with USB, HDMI and NFC capabilities for your convenience.

        First Class:
        Settle into your seat and enjoy unparalleled comfort and complete privacy. Our spacious First Class is designed for you to feel well-rested and refreshed throughout your journey. You will be provided with ample stowage options and an ultra-comfortable fully lie-flat bed.

        Travel First Class and relish the myriad of exclusive offerings, handpicked by us to make your travel experience unforgettable. Our award-winning cabin crew look after your every need and deliver the world-class service you expect. From signature dishes to Bric's amenity kits and designer lounge wear by The White Company, Qatar Airways pampers you from check-in to destination. The new age of airline dining revolves around you. Relish sumptuous cuisine designed by the best chefs in the world and savour expertly served exclusive vintages. An on-demand à la carte menu lets you enjoy mouth-watering dishes whenever you like.
        `
        },
        {
            question: "03. Qatar Airways Flight Status",
            answer: `
        Qatar Airways has a lot of international routes to offer, some of which include Brisbane, Melbourne, Perth, Sydney, Vienna, Baku, Manama, Chittagong, Dhaka, Bridgetown, Minsk, Brussels, Campinas, Sao Paulo, Hong Kong, Shanghai, Chengdu, Cairo, Addis Ababa, Paris, Tbilisi, Manila, Moscow, Medina, Jeddah, Riyadh and more.
        `
        },
        {
            question: "04. Qatar Airways Baggage Allowance",
            answer: `
        Qatar Airways has specific baggage allowance rules for different classes:

        For Carry-On Baggage:
        Economy Class: One piece with a weight limit of 7kg (15 lbs)
        Business and First Class: Two pieces, with a total weight of 12 kg (26 lbs)

        For Checked-In Baggage:
        Diamond First Class passengers are allowed up to 110 lb/50 kg
        Pearl Business Class passengers are allowed up to 88 lb/40 kg
        Coral Economy Class passengers are allowed up to 66 lb/30 kg

        Each class is allowed two pieces of checked-in baggage whose total weight should not exceed the allowed limits.
        `
        },
        {
            question: "05. Qatar Airways Web Check-in",
            answer: `
        Qatar Airways provides an easy and efficient web check-in process for all passengers. You can check-in online up to 48 hours before your flight and obtain your boarding pass without the need to visit the check-in counter.
        `
        },
        {
            question: "06. Qatar Airways Offers and Discounts",
            answer: `
        Qatar Airways provides various offers and discounts, especially on their official website. You can find seasonal promotions, special fare deals, and discount codes that suit travelers of all preferences. Keep an eye out for these offers, as they can be updated regularly to help you save on your next trip.
        `
        }
    ];




    return (
        <main>
            <Bannersection
                image="/banners/qatar-airways-banner.webp"
                title="About Qatar Airways"
                description=""
            />


            <section className="section-padding ">
                <div className="container mx-auto px-4 md:px-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">About Qatar Airways</h3>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    Qatar Airways is proud to be one of the youngest global airlines to serve all six continents, and thanks to our customers’ response to our offerings, we are also the world’s fastest-growing airline. We connect more than 140 destinations on the map every day, with a fleet of the latest-generation aircraft, and an unrivalled level of service from our home and hub, the Five-star airport, Hamad International Airport in Doha, the State of Qatar.</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <img src="/images/qatar.webp" alt="Qatar Airways" className="rounded-lg shadow-lg object-cover" />
                        </div>
                    </div>
                </div>


            </section>


            <section className='section-padding bg-white'>
                <div className="container">
                    <h3 className='section-title text-center'>FAQ'S</h3>
                    <div className="h-1 w-20 bg-accent  rounded-full mb-6 mx-auto"></div>
                </div>

                <Faqs faqs={faq} />
            </section>

        </main>
    )
}

export default page