"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const stories = [
    {
        id: 1,
        couple: "Bevin & Susan",
        location: "Aruba",
        venue: "Renaissance Aruba Resort ",
        image: "/images/stories/bevin-susan-renaissance-aruba-768x466.png",
        description: "Bevin and Susan’s wedding at Renaissance Aruba Resort was a remarkable celebration of their unwavering bond. ",
        featured: true,
    },
    {
        id: 2,
        couple: "Mit & Priya",
        location: "Cancun",
        venue: " Planet Hollywood Cancun",
        image: "/images/stories/mit-and-priya-planet-hollywood-cancun-33-768x466.png",
        description: "Mit and Priya’s wedding at Planet Hollywood Cancun was a magical journey of love and celebration. ",
        featured: false,
    },
    {
        id: 3,
        couple: "Nakita & Eric",
        location: "Los Cabos",
        venue: "Hyatt Ziva Los Cabos",
        image: "/images/stories/nakita-eric-a-timeless-union-at-hyatt-ziva-los-cabos-22-768x466.png",
        description: "Nakita and Eric’s wedding at Hyatt Ziva Los Cabos unfolded as a momentous occasion. ",
        featured: false,
    },
    {
        id: 4,
        couple: "Nisha & Adi",
        location: "Los Cabos",
        venue: "Paradisus Los Cabos",
        image: "/images/stories/nisha-adi.png",
        description: "Nisha and Adi’s love story culminated in an extraordinary celebration at Paradisus Los Cabos. ",
        featured: false,
    },
]

export function StoriesSection() {
    const [activeStory, setActiveStory] = useState(0)

    const featuredStory = stories[activeStory]

    return (
        <section id="stories" className="section-padding bg-foreground text-background">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                    <div>
                        <motion.p
                            className="text-accent text-sm tracking-[0.3em] uppercase mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Real Love Stories
                        </motion.p>
                        <motion.h2
                            className="section-title text-background"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Celebrate Your Journey-
                            <br />
                            <span className="italic">Let Us Immortalize the Magic</span>
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent  rounded-full" />
                    </div>
                    <Button
                        asChild
                        variant="outline"
                        className="mt-auto w-fit border-white text-white bg-transparent hover:bg-white hover:text-black group"
                    >
                        <Link href="" className="flex items-center gap-2">
                            View All Stories
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                {/* Featured Story */}
                <div className="grid lg:grid-cols-5 gap-8 mb-8">
                    {/* Main Image */}
                    <motion.div
                        className="lg:col-span-3 relative aspect-4/3 lg:aspect-16/10 rounded-xl overflow-hidden group cursor-pointer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src={featuredStory.image || "/placeholder.svg"}
                            alt={featuredStory.couple}
                            key={activeStory}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-foreground/20" />

                        {/* Story Info */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white/70 text-sm mb-2">{featuredStory.location}</p>
                            <h3 className="font-serif text-3xl lg:text-4xl text-white mb-2">
                                {featuredStory.couple}
                            </h3>
                            <p className="text-white/80 max-w-md">
                                {featuredStory.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Story List */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                className={cn(
                                    "flex gap-4 p-4 rounded-lg cursor-pointer transition-all duration-500",
                                    activeStory === index
                                        ? "bg-background/10"
                                        : "hover:bg-background/5"
                                )}
                                onClick={() => setActiveStory(index)}
                                onKeyDown={(e) => e.key === "Enter" && setActiveStory(index)}
                                role="button"
                                tabIndex={0}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                            >
                                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                    <img
                                        src={story.image || "/placeholder.svg"}
                                        alt={story.couple}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-background/60 text-xs mb-1">{story.location}</p>
                                    <h4 className="font-serif text-lg text-background mb-1 truncate">
                                        {story.couple}
                                    </h4>
                                    <p className="text-background/60 text-sm">{story.venue}</p>
                                </div>
                                <div
                                    className={cn(
                                        "w-2 h-2 rounded-full self-center transition-colors",
                                        activeStory === index ? "bg-accent" : "bg-background/20"
                                    )}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


