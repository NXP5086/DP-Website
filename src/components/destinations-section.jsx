"use client"

import { useState } from "react"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const destinations = [
    {
        id: 1,
        link: "/destinations/mexico",
        name: "Mexico",
        location: "Cancun, Los Cabos, Puerto Vallarta",
        image: "/images/mexico/mexico.jpg",
        description: "Turquoise waters and ancient Mayan charm",
    },
    {
        id: 2,
        link: "/destinations/dominican-republic",
        name: "Dominican Republic",
        location: "Punta Cana",
        image: "/images/dominican-republic/overview/home-card.jpg",
        description: "Romance in rolling hills and coastal villages",
    },
    {
        id: 3,
        link: "/destinations/bahamas",
        name: "Bahamas",
        location: "Nassau, Paradise Island",
        image: "/images/bahamas/overview/home-card.jpg",
        description: "Timeless elegance and vineyard celebrations",
    }
]

export function DestinationsSection() {
    const [hoveredId, setHoveredId] = useState(null)

    return (
        <section id="destinations" className="section-padding bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        className="text-accent text-sm tracking-[0.3em] uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Explore Destinations
                    </motion.p>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Dream Locations for Your
                        <br />
                        <span className="italic">Perfect Day</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
                    <motion.p
                        className="max-w-2xl mx-auto text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        From tropical paradises to historic European estates, discover the world's
                        most breathtaking venues for your destination wedding.
                    </motion.p>
                </div>

                {/* Destination Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <Link
                            key={destination.id}
                            href={destination.link}
                            className="block"
                        >
                            <motion.div
                                className="group relative aspect-4/5 rounded-xl overflow-hidden cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredId(destination.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Image */}
                                <Image
                                    src={destination.image || "/placeholder.svg"}
                                    alt={destination.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                                        <MapPin size={14} />
                                        <span>{destination.location}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                                        {destination.name}
                                    </h3>



                                    {/* Arrow */}
                                    <motion.div
                                        className={cn(
                                            "pointer-events-none absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center",
                                            hoveredId === destination.id
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-75"
                                        )}
                                        initial={false}
                                        animate={{
                                            opacity: hoveredId === destination.id ? 1 : 0,
                                            scale: hoveredId === destination.id ? 1 : 0.75,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight size={18} className="text-white" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <Button
                        asChild
                        variant="outline"
                        className="mt-auto w-fit"
                    >
                        <Link href="/destinations" className="flex items-center gap-2">
                            View All Destinations
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section >
    )
}


