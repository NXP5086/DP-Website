"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function DestinationPageVenues({ data, destinationSlug }) {
    const [activeLocation, setActiveLocation] = useState(data?.locations[0].id)

    const locations = data?.locations || []
    const venuesByLocation = data?.venuesByLocation || {}

    const tierColors = {
        Budgeted: "bg-primary/10 text-primary",
        Premium: "bg-accent/10 text-accent",
        Luxury: "bg-foreground text-background",
    }

    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    if (locations.length === 0) return null

    const currentLocation = locations.find((l) => l.id === activeLocation) || locations[0]
    const currentVenues = venuesByLocation[activeLocation] || []

    return (
        <section id="venues" className="section-padding bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="text-center mb-16"
                >
                    <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                        Handpicked Venues
                    </p>
                    {(data.heading || data.headingItalic) && (
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground font-light leading-[1.15] mb-6 text-balance">
                            {data.heading}
                            {data.headingItalic && (
                                <>
                                    <br />
                                    <span className="italic">{data.headingItalic}</span>
                                </>
                            )}
                        </h2>
                    )}
                    <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
                    {data.description && (
                        <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                            {data.description}
                        </p>
                    )}
                </motion.div>

                {/* Location Selector */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="flex flex-wrap items-center justify-center gap-3 mb-12"
                >
                    {locations.map((loc) => (
                        <button
                            key={loc.id}
                            type="button"
                            onClick={() => setActiveLocation(loc.id)}
                            className={`  px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeLocation === loc.id
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                                }`}
                        >
                            {loc.label}
                        </button>
                    ))}
                </motion.div>

                {/* Location Details */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="grid lg:grid-cols-5 mb-14 rounded-2xl"
                >
                    {/* Location Image */}
                    <div className="lg:col-span-3 rounded-tl-2xl rounded-bl-2xl aspect-video overflow-hidden relative group">
                        <Image
                            src={currentLocation.image || "/placeholder.svg"}
                            alt={`${currentLocation.label} wedding venue`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="font-serif text-3xl text-white mb-2">
                                {currentLocation.label}
                            </h3>
                            <p className="text-white/80 text-sm max-w-md">
                                {currentLocation.description}
                            </p>
                        </div>
                    </div>

                    {/* Location Details Right */}
                    <div className="lg:col-span-2 rounded-tr-2xl rounded-br-2xl relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="bg-card h-full border border-border p-6 lg:p-8">
                            <h3 className="font-serif text-2xl text-foreground mb-3">
                                Why {currentLocation.label}?
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {currentLocation.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-3 bg-background rounded-lg">
                                    <span className="font-serif text-2xl text-foreground">
                                        {currentVenues.length}
                                    </span>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Partner Venues
                                    </p>
                                </div>
                                <div className="text-center p-3 bg-background rounded-lg">
                                    <span className="font-serif text-2xl text-foreground">
                                        500+
                                    </span>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Max Guests
                                    </p>
                                </div>
                            </div>

                            <Button
                                asChild
                                variant="outline"
                                className="w-fit md:absolute bottom-6 left-6 right-6 "
                            >
                                <Link href={`/destinations/${destinationSlug}/${activeLocation}`}>
                                    Explore {currentLocation.label}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
