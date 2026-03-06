"use client"

import { motion } from "framer-motion"

const Hotelpartners = [
    { name: "Marriott International", category: "Hotels & Resorts" },
    { name: "Four Seasons", category: "Luxury Accommodations" },
    { name: "The Ritz-Carlton", category: "Luxury Accommodations" },
    { name: "Hyatt Hotels", category: "Hotels & Resorts" },
    { name: "Sandals Resorts", category: "Destination Resorts" },
    { name: "Hilton Hotels", category: "Hotels & Resorts" },
]

const Airlinepartners = [
    { name: "American Airlines", category: "Travel Partner" },
    { name: "Delta Air Lines", category: "Travel Partner" },
    { name: "United Airlines", category: "Travel Partner" },
    { name: "Emirates", category: "Travel Partner" },
]

export function PartnersSection() {

    return (
        <section className="section-padding bg-card">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block text-brand font-medium text-sm tracking-widest uppercase mb-4">
                        Trusted Partnerships
                    </span>
                    <h2 className="section-title">
                        Industry-Leading Partners
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        We collaborate with the world's finest hotels, airlines, and resorts
                        to deliver exceptional destination wedding experiences.
                    </p>
                </motion.div>

                {/* Stay Partners */}
                <div>
                    <h4 className="text-2xl font-bold text-left mb-4">Stay Partners</h4>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-6"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {Hotelpartners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                className="group relative bg-background border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                                style={{ transitionDelay: `${index * 50}ms` }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Subtle red accent line on hover */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-hover:w-12 transition-all duration-300" />

                                <span className="font-serif text-lg text-foreground mb-1 group-hover:text-brand transition-colors duration-300">
                                    {partner.name}
                                </span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                    {partner.category}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Travel Partners */}
                <div className="mt-16">
                    <h4 className="text-2xl font-bold text-left mb-4">Travel Partners</h4>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-5 gap-6"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {Airlinepartners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                className="group relative bg-background border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                                style={{ transitionDelay: `${index * 50}ms` }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Subtle red accent line on hover */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand group-hover:w-12 transition-all duration-300" />

                                <span className="font-serif text-lg text-foreground mb-1 group-hover:text-brand transition-colors duration-300">
                                    {partner.name}
                                </span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                    {partner.category}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
