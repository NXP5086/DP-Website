"use client"

import Image from "next/image"
import { Instagram, Heart, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

const instagramPosts = [
    {
        image: "/instapost/1.jpeg",
        likes: "2,847",
        comments: "156",
    },
    {
        image: "/instapost/2.jpeg",
        likes: "3,412",
        comments: "203",
    },
    {
        image: "/instapost/3.jpeg",
        likes: "4,129",
        comments: "287",
    },
    {
        image: "/instapost/4.jpeg",
        likes: "2,156",
        comments: "142",
    },
    {
        image: "/instapost/5.jpeg",
        likes: "5,203",
        comments: "312",
    },
    {
        image: "/instapost/6.jpeg",
        likes: "3,891",
        comments: "198",
    },
]

export function InstagramSection() {
    return (
        <section className="section-padding bg-card overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand via-pink-500 to-orange-400 flex items-center justify-center">
                                <Instagram className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-brand font-medium text-sm tracking-widest uppercase">
                                @destinationpick
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2 text-balance">
                            Follow Our Journey
                        </h2>
                        <p className="text-muted-foreground">
                            Real moments from real weddings. Get inspired for your big day.
                        </p>
                    </div>
                    <Button asChild variant="outline">
                        <a href="https://www.instagram.com/destinationpick/" className="flex items-center gap-2">
                            Follow on Instagram
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>

                {/* Instagram Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={index}
                            href="https://instagram.com/destinationpick"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-lg"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt="Instagram post"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-5 h-5 fill-brand text-brand" />
                                        <span className="text-sm font-medium">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-5 h-5" />
                                        <span className="text-sm font-medium">{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Hashtag Strip */}
                <motion.div
                    className="mt-10 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    {["#DestinationWedding", "#WeddingTravel", "#SayYesInParadise", "#LuxuryWedding", "#WeddingGoals"].map(
                        (tag) => (
                            <motion.span
                                key={tag}
                                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-muted-foreground hover:text-brand hover:border-brand/30 transition-colors cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                {tag}
                            </motion.span>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    )
}
