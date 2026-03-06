"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { openModal } from "../redux/slices/weddingPopupSlice"

export function HeroSection() {
    const dispatch = useDispatch()

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: custom * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }
        })
    }

    return (
        <section className="relative h-screen min-h-175 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectPosition: 'center' }}
                >
                    <source
                        src="/videos/hero-background.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative max-w-[1340px] mx-auto h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
                <div className="w-full mx-auto font-sans">
                    {/* Overline */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        className="text-white/80 text-sm lg:text-base tracking-widest uppercase mb-6"
                    >
                        Your Love Story Deserves a Breathtaking Backdrop
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.1] mb-6 text-balance"
                    >
                        Destination Weddings,
                        <br />
                        <span className="italic font-normal">Crafted to Perfection</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
                    >
                        From Mexico to the Maldives, we orchestrate every detail of your dream celebration.
                        End-to-end luxury wedding planning for modern couples.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            onClick={() => dispatch(openModal())}
                            variant="secondary"
                            className="mt-auto w-fit px-5 py-5 text-black bg-white hover:bg-primary hover:text-primary-foreground group"
                        >
                            <span className="flex items-center gap-2 font-sans font-medium">
                                Start Planning
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="mt-auto w-fit px-5 py-5 bg-transparent border-white text-white hover:bg-primary hover:text-primary-foreground group"
                        >
                            <Link href="#stories" className="flex items-center gap-2 font-sans font-medium">
                                <Play size={18} className="fill-current" />
                                Watch Stories
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-32 right-8 hidden lg:flex items-center gap-2">
                    {/* Indicators can be removed if not needed */}
                </div>
            </div>

            {/* Stats Overlay - Desktop */}
            <div className="absolute max-w-[1340px] mx-auto bottom-0 left-0 right-0 hidden lg:block">
                <div className="container mx-auto px-8">
                    <div className="flex items-center justify-between py-6 border-t border-white/20">
                        {[{ value: "500+", label: "Destination Weddings" },
                        { value: "30+", label: "Years Experience" },
                        { value: "20k+", label: "Happy Guests" },
                        { value: "50+", label: "Corporate Events" }].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="font-serif text-3xl text-white mb-1">{stat.value}</p>
                                <p className="text-white/70 text-sm tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
