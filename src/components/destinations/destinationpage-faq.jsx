"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const faqs = [
    {
        question: "How far in advance should we book our Mexico wedding?",
        answer:
            "We recommend booking 12-18 months in advance for the best venue availability and pricing, especially for peak season (November to April). However, we can also accommodate shorter timelines depending on guest count and venue preferences.",
    },
    {
        question: "Do you handle Indian catering and vegetarian menus?",
        answer:
            "Absolutely. We work with specialized Indian caterers in Mexico who understand the nuances of regional Indian cuisine. We can arrange fully vegetarian, Jain, and customized menus for all your events including the sangeet dinner, wedding lunch, and reception.",
    },
    {
        question: "Can you arrange a Pandit ji and mandap in Mexico?",
        answer:
            "Yes, we handle all religious ceremony arrangements. We can fly in a Pandit ji or connect you with priests based in Mexico. Custom mandap design, sacred fire setup (havan kund), and all ritual materials are coordinated by our team.",
    },
    {
        question: "What about travel arrangements for guests coming from different US cities?",
        answer:
            "We manage group airfare from multiple US cities with negotiated rates. Guests receive personalized booking links, travel guides, and we coordinate airport transfers so everyone arrives stress-free. We also provide weather and packing guides.",
    },
    {
        question: "How many events can we host over the wedding weekend?",
        answer:
            "Most of our couples host 3-5 events: welcome dinner, mehndi/haldi, sangeet, wedding ceremony, and reception. We coordinate the full multi-day itinerary with the resort, ensuring smooth transitions between events.",
    },
    {
        question: "What is the typical guest count for an Indian wedding in Mexico?",
        answer:
            "We handle weddings ranging from intimate 50-guest celebrations to grand 500+ guest events. Mexico's top resorts are well-equipped for large Indian weddings with dedicated event spaces, ballrooms, and outdoor ceremony areas.",
    },
    {
        question: "Is a destination wedding in Mexico legally valid?",
        answer:
            "Yes. We provide complete legal guidance to ensure your wedding is officially recognized. Our team assists with all required documentation, permits, and legal processes so you have complete peace of mind.",
    },
    {
        question: "What does your consultation include?",
        answer:
            "Our complimentary consultation covers your vision, budget discussion, venue recommendations, preliminary pricing, and a custom planning timeline. There's no obligation - it's our way of helping you understand what's possible for your dream wedding in Mexico.",
    },
]

export function DestinationPageFAQ({ data }) {
    const [openIndex, setOpenIndex] = useState(0)

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    }

    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Left sticky header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                        className="lg:col-span-2"
                    >
                        <div className="lg:sticky lg:top-32">
                            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                                Common Questions
                            </p>
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-light leading-[1.15] mb-6 text-balance">
                                Everything You
                                <br />
                                <span className="italic">Need to Know</span>
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full mb-6" />
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Planning a destination wedding raises many questions. Here are
                                the most common ones from couples planning Indian weddings in
                                Mexico.
                            </p>
                            <div className="bg-background rounded-xl p-6">
                                <p className="text-sm text-foreground font-medium mb-2">
                                    Still have questions?
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Book a free 30-minute consultation and get personalized answers
                                    from our team.
                                </p>
                                <a href="tel:+9179134262"
                                    className="inline-flex text-sm font-medium text-brand hover:underline"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right accordion */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={revealVariants}
                        className="lg:col-span-3"
                    >
                        <div className="space-y-3">
                            {(data?.items || faqs).map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={revealVariants}
                                    className={cn(
                                        "border border-border rounded-xl overflow-hidden transition-all duration-300",
                                        openIndex === index
                                            ? "bg-card shadow-sm"
                                            : "bg-transparent hover:bg-card/50"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(openIndex === index ? null : index)
                                        }
                                        className="w-full cursor-pointer flex items-center justify-between p-5 text-left"
                                    >
                                        <span
                                            className={cn(
                                                "font-medium pr-4 transition-colors",
                                                openIndex === index
                                                    ? "text-foreground"
                                                    : "text-foreground/80"
                                            )}
                                        >
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={cn(
                                                "shrink-0 transition-all duration-300",
                                                openIndex === index
                                                    ? "rotate-180 text-brand"
                                                    : "text-muted-foreground"
                                            )}
                                        />
                                    </button>
                                    <div
                                        className={cn(
                                            "overflow-hidden transition-all duration-300",
                                            openIndex === index
                                                ? "max-h-60 opacity-100"
                                                : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
