"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Plane, Building2, Car, PartyPopper, Users, Utensils, Shield, Stethoscope, CalendarDays } from "lucide-react"
import { cn } from "../../lib/utils"

const services = [
    {
        icon: MapPin,
        title: "Venue & Resort Selection",
        description:
            "Handpicked venues matched to your vision, guest count, and budget. Virtual tours and contract negotiation included.",
    },
    {
        icon: Building2,
        title: "Room Block Management",
        description:
            "Exclusive group rates, booking links, and accommodation coordination for your entire guest list.",
    },
    {
        icon: Plane,
        title: "Group Airfare & Transfers",
        description:
            "Negotiated flight rates from cities across the USA with seamless airport-to-resort transportation.",
    },
    {
        icon: Car,
        title: "Guest Transportation",
        description:
            "Airport pickups, hotel shuttles, and event-day transportation for a stress-free experience.",
    },
    {
        icon: Utensils,
        title: "Indian Catering Expertise",
        description:
            "Vegetarian, Jain, and regional Indian cuisine options. We connect you with the best caterers in Mexico.",
    },
    {
        icon: PartyPopper,
        title: "Tours & Activities",
        description:
            "Welcome dinners, tequila tastings, cenote excursions, and cultural tours for your wedding group.",
    },
    {
        icon: Users,
        title: "VIP & Family Management",
        description:
            "Dedicated support for elderly guests, VIPs, and family members with special requirements.",
    },
    {
        icon: Stethoscope,
        title: "Medical & Security",
        description:
            "On-call medical assistance and security arrangements for peace of mind throughout the celebration.",
    },
    {
        icon: CalendarDays,
        title: "On-Ground Coordination",
        description:
            "Our team on-site from arrival to checkout, coordinating with planners, hotel staff, and vendors.",
    },
    {
        icon: Shield,
        title: "Legal Guidance",
        description:
            "Complete assistance with legal requirements ensuring your wedding is officially recognized.",
    },
]

export function DestinationPageServices({ data }) {
    const [isVisible, setIsVisible] = useState(false)

    // Framer Motion animation variants
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    }

    return (
        <section id="services" className="section-padding bg-background relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
                >
                    <div className="lg:max-w-2xl">
                        <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                            {data?.badge || "End-to-End Services"}
                        </p>
                        <h2 className="section-title">
                            {data?.heading || "Effortless Weddings,"}
                            <br />
                            <span className="italic">{data?.headingItalic || "Tailored Just for You"}</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent rounded-full mb-6" />
                        <p className="text-muted-foreground text-pretty">
                            {data?.description || "Your wedding day should be as perfect as your love story. We offer bespoke packages covering every detail - allowing you to focus on celebrating with those you love."}
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <span className="font-serif text-4xl text-foreground">10+</span>
                            <p className="text-xs text-muted-foreground mt-1">Services</p>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="text-center">
                            <span className="font-serif text-4xl text-foreground">1</span>
                            <p className="text-xs text-muted-foreground mt-1">
                                Dedicated Team
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
                >
                    {(data?.items || services).map((service, index) => {
                        const Icon = service.icon || services[index]?.icon || MapPin
                        return (
                            <motion.div
                                key={service.title}
                                initial="hidden"
                                whileInView="visible"
                                variants={revealVariants}
                                className="group relative bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-brand/20 transition-all duration-500 cursor-default"
                            >
                                {/* Hover accent */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-hover:w-12 transition-all duration-300" />

                                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors duration-300">
                                    <Icon
                                        size={20}
                                        className="text-muted-foreground group-hover:text-brand transition-colors duration-300"
                                    />
                                </div>
                                <h3 className="font-medium text-foreground mb-2 text-sm">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
