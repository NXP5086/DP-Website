"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from "next/link"
import { ArrowRight, MapPin, BookOpen } from "lucide-react"
import { cn } from "../lib/utils"
import destinationData from "../data/destinationData.json"
import Image from "next/image"
const DestinationpageSection = () => {
    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }
    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinationData.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "0px" }}
                            variants={revealVariants}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={`/destinations/${destination.slug}`}
                                className={cn(
                                    "group relative aspect-4/5 rounded-xl overflow-hidden block lg:grid-cols-3 shadow-md hover:shadow-2xl transition-all duration-500"
                                )}
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={destination.cardImage || "/placeholder.svg"}
                                        alt={destination.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                                        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                                            <MapPin size={14} />
                                            <span>{destination.location}</span>
                                        </div>

                                        <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                                            {destination.name}
                                        </h3>

                                        <p className="text-white/80 text-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                            {destination.description}
                                        </p>

                                        <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                                            <ArrowRight size={18} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Internal link: Blog / Planning Guides */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mt-14"
            >
                <p className="text-muted-foreground text-sm mb-3">
                    Not sure where to start?
                </p>
                <Link
                    href="/blog/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/30 rounded-full px-6 py-2.5 hover:bg-accent/5 transition-colors"
                >
                    <BookOpen size={15} />
                    Read our Destination Wedding Planning Guides
                    <ArrowRight size={14} />
                </Link>
            </motion.div>
        </section>
    )
}

export default DestinationpageSection