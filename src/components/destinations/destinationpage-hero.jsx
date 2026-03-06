"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

export function DestinationPageHero({ data }) {
    const [currentImage, setCurrentImage] = useState(0)

    const heroImages = data?.images || []

    useEffect(() => {
        if (heroImages.length === 0) return
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [heroImages.length])

    if (!data) return null;

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: custom * 0.2, ease: "easeOut" }
        })
    }

    return (
        <section className="relative h-screen min-h-[750px] overflow-hidden">
            {/* Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.08 }}
                        transition={{ duration: 8, ease: "linear" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-foreground/70 via-foreground/30 to-foreground/80" />
            <div className="absolute inset-0 bg-linear-to-r from-foreground/50 via-transparent to-foreground/50" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-accent/40 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    {data.badge && (
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8"
                        >
                            <Star size={14} className="text-accent fill-accent" />
                            <span className="text-white/90 text-sm font-medium tracking-wide">
                                {data.badge}
                            </span>
                            <Star size={14} className="text-accent fill-accent" />
                        </motion.div>
                    )}

                    {/* Headline */}
                    {data.headline && (
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.05] mb-6 text-balance"
                        >
                            {data.headline}
                            {data.headlineItalic && (
                                <>
                                    <br />
                                    <span className="italic font-normal">{data.headlineItalic}</span>
                                </>
                            )}
                        </motion.h1>
                    )}

                    {/* Subheadline */}
                    {data.subheadline && (
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="text-white/90 text-base  max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
                        >
                            {data.subheadline}
                        </motion.p>
                    )}

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-10 py-6 text-sm bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300  shadow-lg shadow-accent/20"
                        >
                            <Link href="#contact">Start Planning Your Wedding</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full px-8 py-6 text-sm border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                        >
                            <Link href="#venues">Explore Venues</Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2">
                    {heroImages.map((_, index) => (
                        <button
                            type="button"
                            key={`indicator-${index}`}
                            onClick={() => setCurrentImage(index)}
                            className={`h-1 cursor-pointer rounded-full transition-all duration-500 ${currentImage === index
                                ? "w-10 bg-accent"
                                : "w-4 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="absolute bottom-0 left-0 right-0 hidden lg:block">
                <div className="container mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-between py-6 border-t border-white/15"
                    >
                        {(data.stats || []).map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="font-serif text-2xl text-white mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-white/50 text-xs tracking-widest uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

