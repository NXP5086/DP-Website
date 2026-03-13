"use client"

import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <motion.div
                                    className="relative aspect-3/4 rounded-lg overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/abt1.jpg"
                                        alt="Bride getting ready"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                                <motion.div
                                    className="relative aspect-square rounded-lg overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/abt2.jpg"
                                        alt="Wedding couple"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <motion.div
                                    className="relative aspect-square rounded-lg overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/abt3.jpg"
                                        alt="Wedding table setting"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                                <motion.div
                                    className="relative aspect-3/4 rounded-lg overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Image
                                        src="/images/about/beach-wedding.jpg"
                                        alt="Beach wedding"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-right-12 bg-primary text-accent-foreground p-6 rounded-full w-32 h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center text-center shadow-xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="font-serif text-3xl lg:text-4xl font-bold">30+</span>
                            <span className="text-xs lg:text-sm leading-tight">Years of Magic</span>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-8">
                        <motion.p
                            className="text-accent text-sm tracking-[0.3em] uppercase mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            About DestinationPick
                        </motion.p>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Where Dreams Meet
                            <br />
                            <span className="italic">Destinations</span>
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent  rounded-full mb-6" />
                        <motion.div
                            className="space-y-4 text-muted-foreground leading-relaxed mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p>
                                At DestinationPick, we specialize in crafting unforgettable destination weddings. Whether you're envisioning a beachside ceremony in Mexico, a charming villa in France, or a vineyard celebration in Italy, we handle every detail to ensure your day is seamless and extraordinary. Let us manage everything, from venue scouting to booking travel for your guests, so you can focus on creating lasting memories.
                            </p>
                            <p>
                                From the sun-kissed beaches of Mexico to the romantic vineyards of France, the majestic palaces of India to the crystal waters of the Maldives—we handle every detail so you can focus on what matters most: celebrating your love.
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-2 gap-6 mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            {[{ title: "End-to-End Service", desc: "Complete wedding management" }, { title: "Global Network", desc: "Premium venues worldwide" }, { title: "Guest Experience", desc: "Travel & accommodation" }, { title: "Personal Touch", desc: "Dedicated planning team" }].map((feature) => (
                                <div key={feature.title} className="border-l-2 border-accent pl-4">
                                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>

                        <Button
                            asChild
                            variant="outline"
                            className="mt-auto w-fit group"
                        >
                            <Link href="/destinations" className="flex items-center gap-2">
                                Begin Your Journey
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
