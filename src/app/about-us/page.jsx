import React from 'react'
import Bannersection from '../../components/Bannersection'

export const metadata = {
    title: "About DestinationPick | Cancun, Cabo & Punta Cana Wedding Experts",
    description: "DestinationPick helps couples plan unforgettable beach weddings in Mexico and Punta Cana with curated resorts, planners & all-inclusive packages.",
    keywords: "about DestinationPick, destination wedding experts, luxury travel agency Texas, wedding planning company USA, SJ Group of Companies, Stanley Alexander travel",
    alternates: {
        canonical: "https://www.destinationpick.com/about-us/",
    },
    openGraph: {
        title: "About DestinationPick | Cancun, Cabo & Punta Cana Wedding Experts",
        description: "DestinationPick helps couples plan unforgettable beach weddings in Mexico and Punta Cana with curated resorts, planners & all-inclusive packages.",
        images: [{ url: "/banners/banner1.jpg", width: 1200, height: 630, alt: "About DestinationPick" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About DestinationPick | Cancun, Cabo & Punta Cana Wedding Experts",
        description: "DestinationPick helps couples plan unforgettable beach weddings in Mexico and Punta Cana with curated resorts, planners & all-inclusive packages.",
        images: ["/banners/banner1.jpg"],
    },
}
const page = () => {
    return (
        <main>
            <Bannersection
                image="/banners/banner1.jpg"
                title="About Us"
                description="DestinationPick, a proud subsidiary of SJ Group of Companies, is dedicated to crafting bespoke travel experiences with a strong focus on personalized service and competitive wholesale pricing"
            />
            <section className='section-padding bg-white'>
                <div className="container">
                    <h1 className='section-title mb-4 text-center'>About DestinationPick</h1>
                    <div className="h-1 w-20 bg-accent mx-auto  rounded-full mb-6"></div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>DestinationPick, a proud subsidiary of SJ Group of Companies, is dedicated to crafting bespoke travel experiences with a strong focus on personalized service and competitive wholesale pricing. Founded by Stanley Alexander, our vision is supported by innovative technology, skilled teams, and extensive resources, all aimed at providing exceptional value and meaningful travel solutions for both leisure and corporate travelers.</p>
                        <p>We operate around the clock, supported by a global presence in the US, India, London, and Dubai, ensuring that we are always available to meet your travel needs. Our passion lies in offering a seamless, one-stop-shop platform for both business and leisure travel. Through our extensive global partnerships, we deliver innovative and versatile travel solutions that consistently exceed expectations.</p>
                        <p>As a trusted travel management company, DestinationPick offers unparalleled access to a wide range of domestic and international travel services. From international airlines and global hotel chains to resorts, cruise lines, tour operators, car rentals, and trip insurance providers, we leverage our strategic partnerships to bring you the best travel options available, ensuring a smooth and satisfying journey.</p>
                    </div>
                </div>
            </section>


            <section className="section-padding ">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-center mb-6">Our Services</h2>
                    <div className="h-1 w-24 bg-accent mx-auto rounded-full mb-8"></div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Destination Wedding Organiser</h3>
                            <p className="text-gray-600">Create magical moments with seamless destination wedding planning.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Corporate Event Planning</h3>
                            <p className="text-gray-600">Plan and execute corporate events that leave a lasting impression.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel and Tourism Planning</h3>
                            <p className="text-gray-600">Explore the world with tailored travel experiences.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Event Planning</h3>
                            <p className="text-gray-600">Seamless planning for events, no matter the location worldwide.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Private Travel Planning</h3>
                            <p className="text-gray-600">Exclusive travel plans customized just for you.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Holy Land Tours Packages</h3>
                            <p className="text-gray-600">Explore the sacred sights with personalized holy land tour packages.</p>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Goal</h2>
                            <div className="h-1 w-24 bg-accent  rounded-full mb-6"></div>
                            <p className=" text-gray-600 leading-relaxed">
                                Our goal at DestinationPick is simple yet profound: to offer our customers the perfect travel options that match their personal preferences. Leveraging our pricing influence and deep expertise in budgeted, premium, and luxury travel, we specialize in crafting surprising, extraordinary, and rewarding travel experiences. Whether it's a quick flight, a luxurious cruise, or a dream vacation, we're here to create journeys that resonate for a lifetime.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                            <h2 className="text-3xl font-semibold  text-gray-800 mb-6">Our Mission</h2>
                            <div className="h-1 w-24 bg-accent  rounded-full mb-6"></div>
                            <p className=" text-gray-600 leading-relaxed">
                                At DestinationPick, we embody our tagline—Experiences Redefined by personalizing, customizing, negotiating, and guaranteeing the perfect balance between world-class service and the best prices for our customers. We are committed to exceeding expectations, offering value-added services, and optimizing resources to ensure we're the most professional, efficient, and innovative travel facilitator possible. As a socially and ethically responsible corporate citizen, we strive to deliver beyond what's expected, making every journey with us uniquely exceptional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default page