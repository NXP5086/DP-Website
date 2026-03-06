import React from 'react'
import Bannersection from '../../components/Bannersection'
import Faqs from '../../components/Faqs'
const page = () => {


    const faq = [
        {
            question: "01. British Airways Fleet Information",
            answer: `
            British Airways has a lot of aircrafts that fly towards offering maximum comfort and benefits to the passengers. The fleet information is as below:
            - Airbus A318-100 with 1 active aircraft
            - Airbus A319-100 with 44 active aircrafts
            - Airbus A320-200 with 68 active aircrafts
            - Airbus A320neo with 2 active aircrafts
            - Airbus A321-200 with 18 active aircrafts
            - Airbus A321neo with 10 aircrafts in order
            - Airbus A380-800 with 12 active aircrafts
            - Boeing 747-400 with 36 active aircrafts
            - Boeing 767-300ER with 7 active aircrafts
            - Boeing 777-200 with 3 active aircrafts
            - Boeing 777-200ER with 43 active aircrafts
            - Boeing 777-300ER with 12 active aircrafts
            - Boeing 787-8 with 9 active aircrafts
            - Boeing 787-9 with 17 active aircrafts
            The total number of aircrafts is 271.
        `
        },
        {
            question: "02. British Airways In-Flight Service",
            answer: `
            British Airways believes in providing world-class services to their passengers.

            For Business Class Flights:
            In-flight entertainment with a lot of channels and movies in HD are available. Cabins are cosy, and there is a lot of legroom. A night kit is provided for free, and the guaranteed window or aisle access with adjustable head and footrests and comfortable pillow, a workstation with personal reading light, top-rated entertainment, and a dedicated washroom is available.
            Freshly cooked gourmet meals are served to the business class passengers on long as well as short-haul flights.

            For Economy Class Flights:
            In-flight entertainment is available in the form of magazines, newspapers, TV shows, and movies. Good legroom and lighting are available to give comfort along with a kit containing a pillow and headphones.
            Meals and beverages that are freshly cooked are served on long as well as short-haul flights with a great variety to choose from.
        `
        },
        {
            question: "03. British Airways Flight Status",
            answer: `
            British Airways International Routes:
            British Airways has a lot of international routes to offer, some of which include Aarhus, Abu Dhabi, Accra, Alexandria, Agadir, Almaty, Amsterdam, Ankara, Annecy, Atlanta, Athens, Bologna, Blackpool, Baghdad, Dubai, Geneva, Hamburg, Glasgow, Havana, Johannesburg, Kingston, Kiev, Kalamata, Lyon, Madrid, Vienna, Waterford, Zurich and more.
        `
        },
        {
            question: "04. British Airways Baggage Allowance",
            answer: `
            British Airways has certain rules regarding the baggage allowance, which are:
            All customers are permitted to carry one piece of hand luggage and one small item (handbag, laptop) on board. Hand luggage must not exceed 56cm x 45cm x 25cm, and the small item must be no bigger than 40cm x 30cm x 15cm. Both items can weigh up to 23kg each.
            The amount of checked baggage each customer is allowed depends on your booking, the route, fare, and ticket type. Each piece of luggage must not be larger than 90cm x 75cm x 43cm including any pieces of the luggage that stick out (handles, wheels, etc.). Each piece of luggage has a weight allowance of either 23kg or 32kg depending on your route/ticket.
        `
        },
        {
            question: "05. British Airways Web Check-in",
            answer: `
            British Airways has an easy web check-in for all of its passengers. You must do it at least 24 hours before boarding time.
        `
        },
        {
            question: "06. British Airways Offers and Discounts",
            answer: `
            British Airways offers and discounts are easily available on the website. They have a variety of offers and discounts to suit people from all walks of life. Based on your destination, you will get the offer and the discount.
        `
        }
    ];


    return (
        <main>
            <Bannersection
                image="/banners/british-airways-banner.webp"
                title="About British Airways"
                description=""
            />


            <section className="section-padding ">
                <div className="container mx-auto px-4 md:px-6 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">British Airways</h3>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    British Airways is the largest airline in the United Kingdom. Founded in 1974, the airline was created as a result of the British government's establishment of a British Airways Board to manage the two nationalized airline corporations: British Overseas Airways Corporation (BOAC) and British European Airways (BEA), along with two regional airlines, Cambrian Airways from Cardiff and Northeast Airlines.
                                    Since its inception, British Airways has grown to be one of the leading global carriers. With world-class services, British Airways has attracted millions of passengers each year. The airline is headquartered at Waterside, Harmondsworth, near London Heathrow Airport.
                                    In 1981, the Conservative Thatcher government instructed British Airways to prepare for privatization. Sir John King, later Lord King, was appointed chairman with the responsibility of returning the airline to profitability. Despite efforts, British Airways remains a public sector airline to this day.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <img src="/images/british-airways-01.webp" alt="British Airways" className="rounded-lg shadow-lg" />
                        </div>
                    </div>



                </div>




                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-8">
                        {/* Left Column - Content */}
                        <div className=" px-4 py-6 rounded-lg mb-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-4">British Airways – OneWorld Member</h3>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>OneWorld was founded by British Airways in association with British Airways, Canadian Airlines (which left the alliance a few years later on merging with British Airways), Cathay Pacific, and Qantas in the year 1999. Each member has their style and distinctive culture of service. These alliance members have come together to provide better connections and facilities such as infrastructure, communication and whatnot. With only 13 members, OneWorld has come a long way.</p>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex justify-center">
                            <img src="/images/british-airways-01.webp" alt="British Airways" className="rounded-lg shadow-lg" />
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