import React from 'react'
import Script from 'next/script'
import { MapPin, Phone, Mail } from 'lucide-react'
import Bannersection from '../../components/Bannersection'
import ContactForm from '../../components/forms/ContactForm'

export const metadata = {
    title: "Contact Us | Destination Wedding & Travel Planner in Texas",
    description: "Get in touch with DestinationPick — your luxury destination wedding and travel management specialists in Carrollton, TX. Call (917) 913-4262 or email info.us@destinationpick.com.",
    keywords: "contact destination wedding planner, travel agency Texas, destination wedding planner Carrollton TX, luxury travel agency USA",
    alternates: {
        canonical: "https://www.destinationpick.com/contact/",
    },
    openGraph: {
        title: "Contact DestinationPick | Luxury Destination Wedding & Travel Planner",
        description: "Reach out to our team of destination wedding and travel specialists. Based in Carrollton, TX. Available 24/7.",
        images: [{ url: "/banners/banner7.jpg", width: 1200, height: 630, alt: "Contact DestinationPick" }],
    },
}

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DestinationPick",
    "url": "https://www.destinationpick.com/",
    "logo": "https://www.destinationpick.com/favicon.webp",
    "image": "https://www.destinationpick.com/banners/banner1.jpg",
    "description": "DestinationPick is a luxury destination wedding and travel management company based in Carrollton, TX, serving couples and corporate clients across the USA and worldwide.",
    "telephone": "+1-917-913-4262",
    "email": "info.us@destinationpick.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "1039 I-35E Suite 304",
        "addressLocality": "Carrollton",
        "addressRegion": "TX",
        "postalCode": "75006",
        "addressCountry": "US",
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.954465,
        "longitude": -96.913953,
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$$",
    "sameAs": [
        "https://www.facebook.com/destinationpick",
        "https://www.instagram.com/destinationpick",
        "https://www.linkedin.com/company/destinationpick",
    ],
}

const page = () => {
    return (
        <main>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Bannersection
                image="/banners/banner7.jpg"
                title="Contact Us"
                description=""
            />

            <section className='section-padding'>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="">

                            <h2 className="section-title">Contact Us</h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                            <p className="section-description mb-10">We are here to help you with any questions or concerns you may have. Please fill out the form below and we will get back to you as soon as possible.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-accent w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">Address</p>
                                        <a href='https://www.google.com/maps' target="_blank" className="text-muted-foreground">1039 I-35E Suite 304 Carrolton, TX 75006</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-accent w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">Phone</p>
                                        <a href="tel:+9179134262" target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                                            (917) 913-4262
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-accent w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium mb-1">Email</p>
                                        <a href="mailto:info.us@destinationpick.com" target="_blank" className="text-muted-foreground hover:text-accent transition-colors">
                                            info.us@destinationpick.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-4 bg-white">
                            <h2 className='md:text-2xl text-xl font-semibold mb-5'>Reach Us Anytime</h2>
                            <ContactForm />

                        </div>
                    </div>
                </div>
            </section>


            <section className='section-padding'>
                <div className="max-w-6xl mx-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13391.476436096254!2d-96.913953!3d32.954465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e837c5c39bb3f%3A0x3378ef47a9ecc8ce!2sDestinationPick!5e0!3m2!1sen!2sin!4v1770883548503!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </section>
        </main>
    )
}

export default page