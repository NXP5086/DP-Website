"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function DestinationPageCelebrations({ data }) {
    const [activeEvent, setActiveEvent] = useState(data?.events?.[0]?.id || "mehndi")
    const celebrations = data?.events

    const active = celebrations.find((c) => c.id === activeEvent) || celebrations[0]

    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    return (
        <section
            id="celebrations"
            className="section-padding bg-white"
        >
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="text-center mb-16"
                >
                    <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                        Your Celebrations
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground font-light leading-[1.15] mb-6 text-balance">
                        {data?.heading || "Every Ritual, Every Moment,"}
                        <br />
                        <span className="italic">{data?.headingItalic || "Flawlessly Executed"}</span>
                    </h2>
                    <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
                    <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {data?.description || "From the intimate haldi to the grand reception, we orchestrate every event of your multi-day celebration with cultural authenticity and Mexican luxury."}
                    </p>
                </motion.div>

                {/* Event Tabs */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {celebrations.map((event) => (
                        <button
                            key={event.id}
                            type="button"
                            onClick={() => setActiveEvent(event.id)}
                            className={cn(
                                "px-5 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-all duration-300",
                                activeEvent === event.id
                                    ? "bg-primary text-background"
                                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {event.title}
                        </button>
                    ))}
                </motion.div>

                {/* Active Event Detail */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                    {/* Image */}
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden group">
                        <img
                            key={active.id}
                            src={active.image || "/placeholder.svg"}
                            alt={active.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                                {active.title}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h3 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                            {active.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {active.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-4 mb-8">
                            <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">
                                What's Included
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {active.details.map((detail) => (
                                    <div
                                        key={detail}
                                        className="flex items-center gap-3 bg-background rounded-lg px-4 py-3"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                                        <span className="text-sm text-foreground">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative quote */}
                        <div className="border-l-2 border-accent pl-6 py-2">
                            <p className="font-serif text-lg text-foreground italic">
                                "We ensure your traditions are honored with the same love and
                                care - just in an extraordinary setting."
                            </p>
                            <p className="text-sm text-muted-foreground mt-2">
                                - DestinationPick Team
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
