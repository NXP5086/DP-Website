import React from 'react'
import Bannersection from '../../components/Bannersection'
const page = () => {
    return (
        <main>
            <Bannersection
                title="Services"
                description=""
                image="/banners/pp.webp"
            />
            <section className='section-padding'>
                <div className="container mb-10">
                    <h1 className='section-title mb-4 text-center'>Services</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                </div>



                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/corporate-travel.jpeg"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Corporate Travel
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">
                                At DestinationPick, we simplify corporate travel by handling every aspect, from flight bookings and hotel reservations to ground transportation and exclusive benefits. As the Best Corporate Travel Agency in the USA, we offer Business Travel Services designed to suit individual trips, group travel, and executive requirements, ensuring a seamless experience throughout.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Our services include account management, custom air and hotel programs, 24/7 traveler support, and flexible payment options. We also manage group airfare, private jet charters, premium hotel stays, and on-ground coordination, making business travel efficient and stress-free. Focus on your goals while we take care of the journey.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Corporate Travel Services Include:</h3>
                        <ul className="list-disc flex flex-wrap gap-x-10 gap-y-2 pl-6 text-gray-700 space-y-2">
                            <li>Strategic Account Manager</li>
                            <li>Air & Hotel Programs</li>
                            <li>Enhanced Hotel Benefits</li>
                            <li>Traveler Support</li>
                            <li>Easy Payment Solutions</li>
                            <li>Visa Services</li>
                            <li>Ground Transportation & Ancillary</li>
                        </ul>
                    </div>
                </div>


                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/touring.jpg"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Touring
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">Partnering with us means that we take care of every aspect of your tour, travel, and logistics, essentially becoming an extension of your team. On the road, you need a reliable team to manage complex itineraries, handle last-minute changes, and meet your every need. We provide privacy, confidentiality, discretion, and 24/7 support. Each tour is unique, so we offer personalized service customized to you, leveraging our global network to ensure the best rates and high-quality service every time</p>
                            <p className="text-gray-700 mb-6">Our services include global tour planning, managing VIPs and bands, production crew management, and flight and hotel arrangements. We also handle excess baggage, airport assistance, ground transportation, and ancillary services, as well as visa requirements. With us, you can focus on the experience while we handle the logistics.</p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Touring Services Include:</h3>
                        <ul className="list-disc flex flex-wrap gap-x-10 gap-y-2 pl-6 text-gray-700 space-y-2">
                            <li>Global Tour Planning</li>
                            <li>Manage VIP & Band</li>
                            <li>Production Crew Management</li>
                            <li>Flight & Hotel Management</li>
                            <li>Excess Baggage & Airport Assistance</li>
                            <li>Ground Transportation & Ancillary</li>
                            <li>Visa Services</li>
                        </ul>
                    </div>
                </div>



                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/events.jpeg"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Events
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">Looking for a reliable Global Event Planner? At DestinationPick, we specialize in making your dream events come true. Whether it’s a destination wedding, private celebration, or corporate event, our team takes care of every detail to ensure a flawless experience. From venue selection to complete event management, we handle everything with precision, creativity, and care.</p>
                            <p className="text-gray-700 mb-6">Be it an intimate gathering or a large-scale event, our expertise covers meetings, conferences, brand experiences, and more. With our seamless planning and execution, you can focus on enjoying your special moments while we bring your vision to life. Contact DestinationPick today for events that leave a lasting impression!</p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Touring Services Include:</h3>
                        <ul className="list-disc flex flex-wrap gap-x-10 gap-y-2 pl-6 text-gray-700 space-y-2">
                            <li>Meetings & Conferences</li>
                            <li>Incentives</li>
                            <li>Curated Events & Brand Experiences</li>
                            <li>Destination Weddings</li>
                            <li>Film Festivals</li>
                        </ul>
                    </div>
                </div>




                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/private-travel.jpeg"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Private Travel
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">At DestinationPick, our Private Travel Planner division specializes in creating luxurious and personalized travel experiences for high net-worth individuals and VIPs. With over two decades of experience, we ensure every detail is taken care of, from finding your perfect destination to securing a table at a Michelin-star restaurant. Our strong relationships with international airlines, top resorts, and hotels worldwide allow us to offer exclusive access and top-notch service wherever you go. Our network of accredited preferred suppliers guarantees the highest standards of quality, providing additional perks and amenities to enhance your journey.</p>
                            <p className="text-gray-700 mb-6">As your Private Travel Planner, we are committed to making your travel experience seamless and extraordinary. Our dedicated team offers comprehensive traveler support, ensuring assistance is available whenever needed. We only recommend destinations we know and trust, ensuring your trip is both safe and memorable. Let us handle the details while you enjoy a stress-free and luxurious escape tailored to your unique preferences.</p>
                        </div>
                    </div>

                    <div className="space-y-4 mt-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Touring Services Include:</h3>
                        <ul className="list-disc flex flex-wrap gap-x-10 gap-y-2 pl-6 text-gray-700 space-y-2">
                            <li>Accredited Preferred Suppliers</li>
                            <li>Additional perks & amenities</li>
                            <li>Traveller Support</li>
                        </ul>
                    </div>
                </div>



                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/holy-land.jpeg"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Holy Land Tours
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">At DestinationPick, our Holy Land Tours Packages offer unforgettable journeys to some of the most revered destinations. We meticulously plan trips to Israel, Tel Aviv, Jerusalem, the Dead Sea, and Eilat, ensuring a deeply enriching experience. As your Private Travel Planner, we handle every detail, from selecting the best accommodations to arranging guided tours of historical and religious sites. Our extensive knowledge and connections ensure that your pilgrimage is both meaningful and seamless.</p>
                            <p className="text-gray-700 mb-6">Our Holy Land Tours Packages provide a unique opportunity to explore sacred places with the highest level of comfort and convenience. We offer personalized itineraries that cater to your spiritual and travel needs, ensuring you visit significant landmarks and hidden gems. With our dedicated support and expert guidance, you can immerse yourself in the rich history and culture of these holy destinations, making your journey truly special and memorable.</p>
                        </div>
                    </div>

                </div>


                <div className="container px-4 md:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="h-full rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/mission-human.png"
                                    alt="Corporate Travel"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6">
                            <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">
                                Mission & Humanitarian
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="text-gray-700 mb-6">When you engage in a Mission & Humanitarian Travel, we become an extension of your mission. Our attention to detail and commitment to personable client relations assures your trip planning will be a rewarding experience.</p>
                            <p className="text-gray-700 mb-6">Our vast portfolio of flexible airfares, suite of products and caring services are designed to meet the unique needs of humanitarian, faith-based, and group travel. Our team’s credibility as the industry expert provides leverage when negotiating special fares and the flexible conditions you require. In addition, our pricing is incredibly competitive allowing your funds to be expended towards the goals of your mission project.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default page