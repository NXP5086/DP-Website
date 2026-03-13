"use client"

import React from "react"
import { motion } from "framer-motion"
import Weddingform from "./forms/Weddingform"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactSection() {


    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    }

    return (
        <section id="contact" className="section-padding bg-background relative">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5">
                <Image
                    src="/images/contact/couple.jpg"
                    alt=""
                    fill
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
                        className="space-y-6 mb-10"
                    >
                        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                            Start Your Journey
                        </p>
                        <h2 className="section-title">
                            Ready to Plan Your
                            <br />
                            <span className="italic">Dream Wedding?</span>
                        </h2>
                        <div className="h-1 w-20 bg-accent mb-6 rounded-full" />
                        <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
                            Book a complimentary consultation call where you can learn about pricing,
                            promotions, and tips on planning your perfect destination wedding.
                        </p>

                        {/* Contact Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={revealVariants}
                            className="space-y-6 mb-10"
                        >
                            {[
                                { icon: Phone, label: "Call Us", value: "9179134262", href: "tel:+9179134262" },
                                { icon: Mail, label: "Email", value: "info.us@destinationpick.com", href: "mailto:info.us@destinationpick.com" },
                                { icon: MapPin, label: "Office", value: "1039 I-35E Suite 304 Carrolton, TX 75006" }
                            ].map((item) => {
                                const Icon = item.icon
                                const content = (
                                    <>
                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                        <p className="font-medium text-foreground">{item.value}</p>
                                    </>
                                )
                                return (
                                    <div key={item.label} className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                            <Icon size={20} className="text-accent" />
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
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={revealVariants}
                            className="flex items-center gap-4 pt-6 border-t border-border"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-background bg-secondary"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">100+ couples</span> have started
                                their journey with us this year
                            </p>
                        </motion.div>
                    </motion.div>


                    <div className="">
                        <Weddingform />
                    </div>

                </div>
            </div>
        </section>
    )
}


