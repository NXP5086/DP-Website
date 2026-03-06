"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Globe, Shield, Handshake, Star } from "lucide-react"

const resortPartners = [
    { name: "Hyatt", properties: "Ziva Cancun, Ziva Los Cabos, Grand Los Cabos" },
    { name: "Marriott", properties: "Westin, W Hotels, JW Marriott" },
    { name: "Hilton", properties: "Waldorf Astoria, Conrad" },
    { name: "Four Seasons", properties: "Punta Mita" },
    { name: "Rosewood", properties: "Mayakoba" },
    { name: "Banyan Tree", properties: "Mayakoba" },
    { name: "Palladium", properties: "Grand Palladium Costa Mujeres" },
    { name: "Park Hyatt", properties: "Los Cabos at Cabo Del Sol" },
]

const vendorPartners = [
    { name: "Indian Caterers Network", category: "Catering" },
    { name: "Floral Design Co.", category: "Decor & Florals" },
    { name: "Live Dhol Players", category: "Entertainment" },
    { name: "Mandap Specialists", category: "Ceremony Design" },
]

const certifications = [
    {
        icon: Award,
        title: "Destination Wedding Specialist",
        org: "Certified by The Knot Pro",
    },
    {
        icon: Globe,
        title: "IATA Accredited Agency",
        org: "International Air Transport Association",
    },
    {
        icon: Shield,
        title: "ASTA Verified Member",
        org: "American Society of Travel Advisors",
    },
    {
        icon: Handshake,
        title: "Preferred Partner",
        org: "Leading Hotels of Mexico",
    },
]

export function DestinationPagePartners({ data }) {
    const [isVisible, setIsVisible] = useState(false)

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="text-center mb-16"
                >
                    <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                        Trusted Network
                    </p>
                    <h2 className="section-title">
                        {data?.heading || "Our Exclusive Partners"}
                        <br />
                        <span className="italic">{data?.headingItalic || "in Mexico"}</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {data?.description ||
                            "We collaborate with Mexico's finest resorts, vendors, and service providers to create an impeccable Indian wedding experience."}
                    </p>
                </motion.div>

                {/* Resort Partners */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="mb-16"
                >
                    <h3 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6 text-center">
                        Resort & Hotel Partners
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(data?.resortPartners || resortPartners).map((partner, index) => (
                            <div
                                key={partner.name}
                                className="group bg-card border border-border rounded-xl p-5 hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-hover:w-8 transition-all duration-300" />
                                <div className="flex items-center gap-2 mb-2">
                                    <Star size={12} className="text-accent fill-accent" />
                                    <span className="font-serif text-lg text-foreground group-hover:text-brand transition-colors">
                                        {partner.name}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {partner.properties}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Vendor Partners */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="mb-16"
                >
                    <h3 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6 text-center">
                        Specialty Vendors for Indian Weddings
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(data?.vendorPartners || vendorPartners).map((vendor, index) => (
                            <div
                                key={vendor.name}
                                className="bg-card border border-border rounded-xl p-5 text-center hover:border-brand/20 transition-all duration-300"
                            >
                                <span className="text-xs text-brand font-medium uppercase tracking-wider">
                                    {vendor.category}
                                </span>
                                <p className="font-medium text-foreground text-sm mt-2">
                                    {vendor.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="mb-16"
                >
                    <h3 className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6 text-center">
                        Certifications & Accreditations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.title}
                                className="group bg-card border border-border rounded-xl p-6 text-center hover:border-brand/20 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-muted mb-4 group-hover:bg-brand/10 transition-colors duration-300">
                                    <cert.icon className="w-6 h-6 text-brand" />
                                </div>
                                <h4 className="font-medium text-foreground mb-1 text-sm">
                                    {cert.title}
                                </h4>
                                <span className="text-xs text-muted-foreground">
                                    {cert.org}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
