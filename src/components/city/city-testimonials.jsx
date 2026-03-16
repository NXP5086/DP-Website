"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Play } from "lucide-react"
import { cn } from "../../lib/utils"
import Image from "next/image"

const stories = [
    {
        id: 1,
        couple: "Zach & Saumya",
        location: "Cancun",
        quote:
            "Stanley from DestinationPick organized our dream wedding in Cancun. Everything was perfect - from the flights to the resort. He went above and beyond to make sure every detail was taken care of. We couldn't have asked for a better experience!",
        image: "/images/mexico/mexico-hero-1.jpg",
        guests: 250,
        events: 4,
    },
    {
        id: 2,
        couple: "Jay & Hinal",
        location: "Los Cabos",
        quote:
            "Our Los Cabos wedding was beyond our wildest dreams. The team handled everything from our baraat on the beach to the sangeet under the stars. Our guests still talk about it!",
        image: "/images/mexico/mexico-venue-cabos.jpg",
        guests: 180,
        events: 3,
    },
    {
        id: 3,
        couple: "Mit & Priya",
        location: "Cancun",
        quote:
            "Planning a destination wedding from the USA felt overwhelming until we found DestinationPick. They understood our Indian traditions perfectly and made Mexico feel like home for our families.",
        image: "/images/mexico/mexico-hero-3.jpg",
        guests: 300,
        events: 5,
    },
]

export function CityTestimonials({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const navigate = (direction) => {
        if (isAnimating) return
        setIsAnimating(true)
        const storyCount = (data?.stories || stories).length
        if (direction === "next") {
            setActiveIndex((prev) => (prev + 1) % storyCount)
        } else {
            setActiveIndex(
                (prev) => (prev - 1 + storyCount) % storyCount
            )
        }
        setTimeout(() => setIsAnimating(false), 600)
    }

    useEffect(() => {
        const interval = setInterval(() => navigate("next"), 7000)
        return () => clearInterval(interval)
    }, [activeIndex])

    const active = (data?.stories || stories)[activeIndex] || (data?.stories || stories)[0]

    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    return (
        <section
            id="testimonials"
            className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden"
        >
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src={active.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover transition-opacity duration-700"
                />
            </div>
            <div className="absolute inset-0 bg-foreground/90" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                        Real Love Stories
                    </p>
                    <h2 className="section-title text-background">
                        See What Our
                        <br />
                        <span className="italic">Couples Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariants}
                    className="max-w-5xl mx-auto transition-all duration-700 delay-200"
                >
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Image Side */}
                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                            <Image
                                src={active.image || "/placeholder.svg"}
                                alt={`${active.couple} wedding`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-transparent to-transparent" />

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    type="button"
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30"
                                    aria-label="Play video"
                                >
                                    <Play size={24} className="text-white fill-white ml-1" />
                                </button>
                            </div>

                            {/* Couple info overlay */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                <div>
                                    <h3 className="font-serif text-2xl text-white">
                                        {active.couple}
                                    </h3>
                                    <p className="text-white/70 text-sm">{active.location}</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                                        <span className="block font-serif text-lg text-white">
                                            {active.guests}
                                        </span>
                                        <span className="text-[10px] text-white/60 uppercase">
                                            Guests
                                        </span>
                                    </div>
                                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                                        <span className="block font-serif text-lg text-white">
                                            {active.events}
                                        </span>
                                        <span className="text-[10px] text-white/60 uppercase">
                                            Events
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quote Side */}
                        <div>
                            <Quote size={40} className="text-accent/40 mb-6" />
                            <p className="font-serif text-xl lg:text-2xl text-background leading-relaxed mb-8 text-pretty">
                                "{active.quote}"
                            </p>
                            <div className="flex items-center gap-3 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={`star-${i}`}
                                        size={16}
                                        className="text-accent fill-accent"
                                    />
                                ))}
                            </div>
                            <p className="font-medium text-background text-lg">
                                {active.couple}
                            </p>
                            <p className="text-background/50">{active.location}, Mexico</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-12">
                        <button
                            type="button"
                            onClick={() => navigate("prev")}
                            className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                            aria-label="Previous story"
                        >
                            <ChevronLeft size={20} className="text-background" />
                        </button>

                        <div className="flex items-center gap-2">
                            {(data?.stories || stories).map((_, index) => (
                                <button
                                    key={`dot-${index}`}
                                    type="button"
                                    onClick={() => !isAnimating && setActiveIndex(index)}
                                    className={cn(
                                        "h-2 rounded-full transition-all duration-500",
                                        activeIndex === index
                                            ? "w-10 bg-accent"
                                            : "w-2 bg-background/30 hover:bg-background/50"
                                    )}
                                    aria-label={`Go to story ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate("next")}
                            className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                            aria-label="Next story"
                        >
                            <ChevronRight size={20} className="text-background" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
