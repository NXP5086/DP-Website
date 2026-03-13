"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useDispatch } from "react-redux"
import { openModal } from "../../redux/slices/weddingPopupSlice"
import Image from "next/image"

export function DestinationPageAbout({ data }) {
    const dispatch = useDispatch()
    const sectionRef = useRef(null)

    // Framer Motion variants for scroll animations
    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    if (!data) return null;

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-padding bg-white"
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                        className="relative"
                    >
                        <div className="grid grid-cols-12 gap-4">
                            {/* Main large image */}
                            <div className="col-span-7 aspect-3/4 rounded-xl overflow-hidden relative">
                                <Image
                                    src={data.images?.main || "/placeholder.svg"}
                                    alt={data.heading ? `${data.heading} destination wedding` : "Destination wedding venue"}
                                    fill
                                    sizes="(max-width: 1024px) 60vw, 35vw"
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Stacked images */}
                            <div className="col-span-5 flex flex-col gap-4">
                                <div className="aspect-square rounded-xl overflow-hidden relative">
                                    <Image
                                        src={data.images?.secondary1 || "/placeholder.svg"}
                                        alt={data.heading ? `${data.heading} wedding celebration` : "Wedding celebration"}
                                        fill
                                        sizes="(max-width: 1024px) 40vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="aspect-4/5 rounded-xl overflow-hidden relative">
                                    <Image
                                        src={data.images?.secondary2 || "/placeholder.svg"}
                                        alt={data.heading ? `${data.heading} luxury resort` : "Luxury wedding resort"}
                                        fill
                                        sizes="(max-width: 1024px) 40vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating experience badge */}
                        {data.experienceBadge && (
                            <div className="absolute -bottom-6 left-6 lg:-bottom-8 lg:left-12 bg-foreground text-background px-8 py-5 rounded-xl shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <span className="font-serif text-3xl lg:text-4xl font-bold text-accent">
                                            {data.experienceBadge.value}
                                        </span>
                                        <p className="text-background/70 text-sm mt-0.5">
                                            {data.experienceBadge.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                        className="lg:pl-4"
                    >
                        {data.badge && (
                            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                                {data.badge}
                            </p>
                        )}
                        {(data.heading || data.headingItalic) && (
                            <h2 className="section-title mb-6 text-balance">
                                {data.heading}
                                {data.headingItalic && (
                                    <>
                                        <br />
                                        <span className="italic">{data.headingItalic}</span>
                                    </>
                                )}
                            </h2>
                        )}
                        <div className="h-1 w-20 bg-accent  rounded-full mb-6" />
                        {data.description && (
                            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                                {(Array.isArray(data.description) ? data.description : [data.description]).map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        )}

                        {/* Highlights checklist */}
                        {data.highlights && data.highlights.length > 0 && (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={revealVariants}
                                className="grid sm:grid-cols-2 gap-3 mb-10"
                            >
                                {data.highlights.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2.5">
                                        <CheckCircle2
                                            size={18}
                                            className="text-brand mt-0.5 shrink-0"
                                        />
                                        <span className="text-sm text-foreground">
                                            {typeof item === 'string' ? item : item.title}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        <Button
                            variant="outline"
                            onClick={() => dispatch(openModal())}
                            className="group"
                        >
                            <span className="flex items-center gap-2">
                                Plan Your {data.headingItalic || "Perfect"} Wedding
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
