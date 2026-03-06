"use client"

import { useState } from "react"
import { ChevronDown, MessageSquare } from "lucide-react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

const faqs = [
    {
        question: "How far in advance should we start planning our destination wedding?",
        answer: "We recommend starting at least 12-18 months in advance for destination weddings. This allows ample time for venue selection, travel arrangements for you and your guests, and all the intricate details that make your day perfect. However, we've successfully planned beautiful weddings in months for more intimate celebrations.",
    },
    {
        question: "What's included in your end-to-end planning services?",
        answer: "Our comprehensive packages cover everything: destination research and venue curation, contract negotiations, travel coordination for you and all guests, accommodation bookings, vendor management (photographers, florists, musicians), timeline creation, on-site coordination, and post-wedding arrangements. We handle every detail so you can simply show up and celebrate.",
    },
    {
        question: "Do you help with guest travel arrangements?",
        answer: "Absolutely! We manage the entire guest experience, including group flight bookings with exclusive rates, hotel room blocks, welcome bags, shuttle services, and pre/post-wedding activities. We create a dedicated travel portal where guests can easily book and access all their trip information.",
    },
    {
        question: "What happens if something goes wrong during the wedding weekend?",
        answer: "Our team is with you on-site throughout your wedding weekend. We anticipate and prevent issues before they arise, but when the unexpected happens, we handle it seamlessly. From vendor no-shows to weather changes, we have backup plans and vendor relationships that ensure your celebration continues flawlessly.",
    },
    {
        question: "Can you work within our budget?",
        answer: "We work with couples across various budget ranges. During our discovery call, we discuss your vision and budget to create a realistic plan. We're transparent about costs and help you prioritize what matters most. Destination weddings can actually be more cost-effective than traditional weddings-we'll show you how.",
    },
    {
        question: "What destinations do you specialize in?",
        answer: "While we can plan weddings anywhere in the world, we have deep expertise and established vendor relationships in Mexico (Cancun, Cabo, Tulum), Caribbean islands, Italy, France, Greece, Bali, and Hawaii. These partnerships allow us to secure preferred rates and priority bookings for our couples.",
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Left Column - Header */}
                    <div>
                        <motion.span
                            className="inline-block text-brand font-medium text-sm tracking-widest uppercase mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            FAQs
                        </motion.span>
                        <motion.h2
                            className="section-title"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Questions We Get Asked Often
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent mb-6 rounded-full" />
                        <motion.p
                            className="text-muted-foreground mb-8 text-pretty"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            Planning a destination wedding comes with unique considerations.
                            Here are answers to the questions couples ask us most frequently.
                        </motion.p>

                        {/* CTA Card */}
                        <motion.div
                            className="bg-secondary/50 rounded-xl p-6 border border-border"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-foreground mb-2">
                                        Still have questions?
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Schedule a free 30-minute consultation call with our wedding specialists.
                                    </p>
                                    <Button className="bg-brand text-white hover:bg-brand/90">
                                        <a href="tel:+9179134262">
                                            Book a Call
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className={`border border-border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-secondary/30" : "bg-card hover:bg-secondary/20"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <button
                                        className="w-full px-6 py-5 cursor-pointer flex items-center justify-between text-left"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <motion.span
                                            className="font-medium text-foreground pr-4"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            {faq.question}
                                        </motion.span>
                                        <motion.div
                                            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-brand" : ""
                                                }`}
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown />
                                        </motion.div>
                                    </button>
                                    <motion.div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                            }`}
                                    >
                                        <motion.p
                                            className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: openIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
