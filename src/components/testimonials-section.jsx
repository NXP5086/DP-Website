"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

const testimonials = [
    {
        id: 1,
        quote: "Stanley from DestinationPick organized our dream wedding in Cancun. Everything was perfect-from the flights to the resort. He went above and beyond to make sure every detail was taken care of. We couldn't have asked for a better experience!",
        author: "Serena Bhela",
        role: "Bride, Cancun Wedding",
        rating: 5,
    },
    {
        id: 2,
        quote: "We celebrated our friend's 40th birthday in Los Cabos and it was excellent. From staying at the Ziva Hyatt, tequila tasting to dinner at Jazz on the Rocks! Stanley and his company did amazing work to pull it all off flawlessly.",
        author: "Christine Bartlett",
        role: "Group Event, Los Cabos",
        rating: 5,
    },
    {
        id: 3,
        quote: "Worked with Stanley multiple times to plan vacations for my wife and myself. He is excellent and would highly recommend using him! Your trip will be seamlessly planned from getting picked up at the airport to having an excellent stay.",
        author: "Darshan Patel",
        role: "Repeat Client",
        rating: 5,
    },
    {
        id: 4,
        quote: "Stanley planned a great vacation for us in Cabo. Everything went seamlessly from the flights to transportation. Our resort was beautiful with spectacular beach views. We will never forget this trip and reminisce over it for years to come.",
        author: "Beckyannie Raju",
        role: "Cabo Getaway",
        rating: 5,
    },
    {
        id: 5,
        quote: "We had the most amazing experience working with DestinationPick. He went above and beyond to help our bachelorette party be the most relaxing and fun. He picked an amazing hotel with a great view and spa. Complete royalty treatment!",
        author: "Liz George",
        role: "Bachelorette Party",
        rating: 5,
    },
]

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const navigate = (direction) => {
        if (isAnimating) return
        setIsAnimating(true)

        if (direction === "next") {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        } else {
            setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        }

        setTimeout(() => setIsAnimating(false), 500)
    }

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(() => {
            navigate("next")
        }, 6000)
        return () => clearInterval(interval)
    }, [activeIndex, isAnimating])

    return (
        <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block text-brand font-medium text-sm tracking-widest uppercase mb-4">
                        Testimonials
                    </span>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Words from Our
                        <br />
                        <span className="italic">Happy Couples</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-accent mx-auto mb-2 rounded-full" />
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Quote Icon */}
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                            <Quote size={28} className="text-accent" />
                        </div>
                    </motion.div>

                    {/* Testimonial Content */}
                    <div className="relative min-h-[200px] mb-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className={cn(
                                    "absolute inset-0 transition-all duration-500 text-center",
                                    activeIndex === index
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8 pointer-events-none"
                                )}
                                initial={{ opacity: 0, translateY: 8 }}
                                animate={activeIndex === index ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="font-serif text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed mb-8 text-pretty">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <p className="font-medium text-foreground text-lg">{testimonial.author}</p>
                                    <p className="text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center mt-10 gap-4">
                        <motion.button
                            type="button"
                            onClick={() => navigate("prev")}
                            className="w-12 h-12 cursor-pointer rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
                            aria-label="Previous testimonial"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <ChevronLeft size={20} className="text-foreground" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex items-center gap-2 px-4">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={`dot-${index}`}
                                    type="button"
                                    onClick={() => !isAnimating && setActiveIndex(index)}
                                    className={cn(
                                        "h-2 cursor-pointer rounded-full transition-all duration-500",
                                        activeIndex === index
                                            ? "w-8 bg-accent"
                                            : "w-2 bg-border hover:bg-muted-foreground"
                                    )}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            type="button"
                            onClick={() => navigate("next")}
                            className="w-12 h-12 cursor-pointer rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
                            aria-label="Next testimonial"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <ChevronRight size={20} className="text-foreground" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
