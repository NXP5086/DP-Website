"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Weddingform from "../forms/Weddingform"
import {
    Phone,
    Mail,
    MapPin,
    CheckCircle2,
    Star,
    BookOpen,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CityContact({ data }) {
    const sectionRef = useRef(null)



    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-padding bg-white relative"
        >
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <Image
                    src="/images/mexico-hero-1.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                    >
                        <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                            Start Your Journey
                        </p>
                        <h2 className="section-title mb-6 text-balance">
                            {data?.heading || "Ready to Begin Your"}
                            <br />
                            <span className="italic">{data?.headingItalic || "Dream Wedding?"}</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent  rounded-full mb-6" />
                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
                            {data?.description || "Book a complimentary consultation call to discuss your Mexico wedding vision. Get pricing, venue recommendations, and a custom planning timeline - all for free."}
                        </p>

                        {/* Benefits */}
                        <div className="space-y-4 mb-10">
                            {(data?.benefits || [
                                "Exclusive vendor discounts",
                                "Custom budget planning",
                                "Free venue recommendations",
                                "No obligation consultation",
                                "Indian wedding specialists",
                            ]).map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2
                                        size={18}
                                        className="text-brand shrink-0"
                                    />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-5 mb-10">
                            {[
                                { icon: Phone, label: "Call Us", value: "9179134262", href: "tel:+9179134262" },
                                { icon: Mail, label: "Email", value: "info.us@destinationpick.com", href: "mailto:info.us@destinationpick.com" },
                                // { icon: MapPin, label: "Office", value: "1039 I-35E Suite 304 Carrolton, TX 75006" },
                            ].map((item) => {
                                const Icon = item.icon
                                const content = (
                                    <>
                                        <p className="text-xs text-muted-foreground">{item.label}</p>
                                        <p className="font-medium text-foreground text-sm">{item.value}</p>
                                    </>
                                )
                                return (
                                    <div key={item.label} className="flex items-center gap-4">
                                        <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center">
                                            <Icon size={18} className="text-brand" />
                                        </div>
                                        <div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="hover:text-accent hover:underline transition-colors"
                                                >
                                                    {content}
                                                </a>
                                            ) : (
                                                content
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Planning Guide Link */}
                        <Link
                            href="/blog/"
                            className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4 mb-8"
                        >
                            <BookOpen size={14} />
                            Read our destination wedding planning guides
                        </Link>

                        {/* Social Proof */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={revealVariants}
                            className="bg-background rounded-xl p-5"
                        >
                            <div className="flex items-center gap-1 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={`review-star-${i}`}
                                        size={14}
                                        className="text-accent fill-accent"
                                    />
                                ))}
                                <span className="text-sm font-medium text-foreground ml-2">
                                    5.0
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Rated 5 stars by 100+ couples across Google & The Knot
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                    >
                        <Weddingform />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
