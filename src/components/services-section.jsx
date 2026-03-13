"use client"

import { useState } from "react"
import { MapPin, Plane, Building2, Car, PartyPopper, Users, Sparkles, Calendar } from "lucide-react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

const services = [
    {
        icon: MapPin,
        title: "Venue Scouting",
        description: "We curate the perfect venue from our global network of luxury resorts, private villas, and historic estates.",
        image: "/images/services/venue-scouting.jpg",
    },
    {
        icon: Plane,
        title: "Group Airfare",
        description: "Negotiated rates and seamless booking for your entire wedding party, no matter the group size.",
        image: "/images/services/group-airfare.jpg",
    },
    {
        icon: Building2,
        title: "Resort Contracting",
        description: "Exclusive rates and room blocks at premium properties, ensuring the best value for your guests.",
        image: "/images/services/resort-contracting.jpg",
    },
    {
        icon: Car,
        title: "Transportation",
        description: "From airport pickups to wedding day shuttles, we coordinate all ground transportation.",
        image: "/images/services/transportation.jpg",
    },
    {
        icon: PartyPopper,
        title: "Tours & Activities",
        description: "Pre-wedding adventures, group excursions, and cultural experiences for your guests.",
        image: "/images/services/tours-activities.jpg",
    },
    {
        icon: Calendar,
        title: "On-site Coordination",
        description: "Our team is there with you, ensuring every moment unfolds flawlessly.",
        image: "/images/services/on-site-coordination.jpg",
    },
    {
        icon: Users,
        title: "Concierge  Service",
        description: "Dedicated personal assistance for you and VIP guests throughout your celebration.",
        image: "/images/services/concierge-service.jpg",
    },
    {
        icon: Sparkles,
        title: "Charter/Private Jets",
        description: "Custom décor, florals, and styling that reflect your unique love story.",
        image: "/images/services/private-jets.jpg",
    },
]

export function ServicesSection() {
    const [activeService, setActiveService] = useState(0)

    return (
        <section id="services" className="section-padding bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 origin-top-right hidden lg:block" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Content */}
                    <div>
                        <motion.p
                            className="text-accent text-sm tracking-[0.3em] uppercase mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            What We Offer
                        </motion.p>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            End-to-End Wedding
                            <br />
                            <span className="italic">Concierge Services</span>
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent rounded-full mb-6" />
                        <motion.p
                            className="text-muted-foreground leading-relaxed mb-10 max-w-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            From the moment you say "yes" to planning your destination wedding,
                            we handle every detail. Your only job? Show up and get married.
                        </motion.p>

                        {/* Service Image */}
                        <motion.div
                            className="relative aspect-4/3 rounded-xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image
                                src={services[activeService].image}
                                alt={services[activeService].title}
                                key={activeService}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white/80 text-sm mb-2">Featured Service</p>
                                <p className="font-serif text-2xl text-white">
                                    {services[activeService].title}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Service Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={service.title}
                                    className={cn(
                                        " p-6 rounded-xl transition-all duration-500 cursor-pointer group",
                                        activeService === index
                                            ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                                            : "bg-card hover:bg-secondary"
                                    )}
                                    onMouseEnter={() => setActiveService(index)}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                >
                                    <div
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                                            activeService === index
                                                ? "bg-primary-foreground/20"
                                                : "bg-accent/10 group-hover:bg-accent/20"
                                        )}
                                    >
                                        <Icon
                                            size={24}
                                            className={cn(
                                                "",
                                                activeService === index ? "text-primary-foreground" : "text-accent"
                                            )}
                                        />
                                    </div>
                                    <motion.h3
                                        className={cn(
                                            "font-medium text-lg mb-2",
                                            activeService === index ? "text-primary-foreground" : "text-foreground"
                                        )}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        className={cn(
                                            "text-sm leading-relaxed",
                                            activeService === index ? "text-primary-foreground/80" : "text-muted-foreground"
                                        )}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.7, delay: index * 0.1 }}
                                    >
                                        {service.description}
                                    </motion.p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}


