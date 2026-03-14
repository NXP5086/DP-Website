import React from 'react'
import Bannersection from '../../components/Bannersection'
import Link from 'next/link'
import ConsultationButton from '../../components/ConsultationButton'
import { Shield, Heart, Globe, Star } from 'lucide-react'

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

const values = [
    {
        icon: Heart,
        title: "Personalization",
        description: "Every wedding is as unique as the couple. We build every detail around you — not a template.",
    },
    {
        icon: Shield,
        title: "Transparency",
        description: "No hidden fees, no surprise add-ons. You'll always know exactly what you're getting and what you're paying.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "With offices in the US, India, London, and Dubai, we have eyes on every destination you're considering.",
    },
    {
        icon: Star,
        title: "True Advocacy",
        description: "We work for you — not the resort. Our relationships mean better upgrades, perks, and responsiveness when it matters most.",
    },
]

const stats = [
    { value: "30+", label: "Years of Experience" },
    { value: "500+", label: "Couples Served" },
    { value: "15+", label: "Destinations" },
    { value: "4", label: "Global Offices" },
]

export default function AboutPage() {
    return (
        <main>
            <Bannersection
                image="/banners/banner1.jpg"
                title="Our Story"
                description="We started DestinationPick because planning a destination wedding should feel as magical as the day itself."
            />

            {/* Origin / Why We Started */}
            <section className="section-padding bg-white">
                <div className="container">
                    <h1 className="section-title mb-4 text-center">Why We Do This</h1>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
                    <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            Planning a destination wedding is one of the most exciting things you&apos;ll ever do — and one of the most overwhelming. Which resort actually delivers on its promises? Who&apos;s looking out for your guests when flights get complicated? How do you negotiate group rates without spending weeks on hold?
                        </p>
                        <p>
                            DestinationPick was founded by Stanley Alexander with one clear purpose: to be the advocate couples never had. Backed by the global infrastructure of SJ Group of Companies and decades of travel industry relationships, we give couples direct access to the resorts, planners, and logistics that make a destination wedding truly seamless.
                        </p>
                        <p>
                            We don&apos;t just book trips. We build experiences — and we stay with you every step of the way, from the moment you start dreaming to the last dance of your reception.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="section-padding bg-primary text-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</div>
                                <div className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-white">
                <div className="container">
                    <h2 className="section-title text-center mb-4">What We Stand For</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-10"></div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="bg-gray-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-transform duration-200">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team CTA */}
            <section className="section-padding bg-gray-50">
                <div className="container text-center">
                    <h2 className="section-title mb-4">The People Behind Your Perfect Day</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                        Our team brings together destination specialists, logistics experts, and wedding planners who genuinely love what they do.
                    </p>
                    <Link
                        href="/our-team"
                        className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                        Meet the Team
                    </Link>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding bg-white">
                <div className="container text-center">
                    <h2 className="section-title mb-4">Ready to Start Planning?</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                        Let&apos;s talk about your vision. A free consultation is the first step toward the wedding you&apos;ve always imagined.
                    </p>
                    <ConsultationButton className="bg-primary text-white font-semibold px-10 py-4 text-lg rounded-full hover:bg-primary/90 transition-colors duration-200">
                        Book a Free Consultation
                    </ConsultationButton>
                </div>
            </section>
        </main>
    )
}
