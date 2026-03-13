"use client"

import { motion } from "framer-motion"
import { Check, MapPin } from "lucide-react"
import Image from "next/image"

const defaultContent = {
  label: "Resort Overview",
  heading: "Why Grand Palladium Costa Mujeres is Perfect",
  headingItalic: "for Indian Weddings",
  description:
    "Indian weddings require scale, flexibility, and cultural understanding. Grand Palladium Costa Mujeres delivers all three - beautifully.",
  highlights: [
    "Host celebrations for up to 707 guests",
    "6 versatile event venues",
    "Unique in-resort canal boat system",
    "Dedicated Village plaza for Mehndi & Sangeet",
    "Beachfront mandap-ready ceremony setups",
    "On-site Indian cuisine options",
    "Luxury all-inclusive experience for every guest",
  ],
  location: "Costa Mujeres, Cancun, Mexico",
  image: "/images/mexico/cities/cancun/hotels/grand-palladium-costa-mujeres/main.jpg",
  imageAlt: "Grand Palladium Costa Mujeres overview",
  maxGuests: "300",
  rightTitle: "Signature Experiences",
  rightItems: ["The Canal Boat Procession", "The Village Plaza", "Thai-Inspired Architecture"],
}

export function Overview({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section id="overview" className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">{content.label}</p>
            <h2 className="section-title mb-6 text-balance">
              {content.heading}
              <br />
              <span className="italic">{content.headingItalic}</span>
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">{content.description}</p>

            <div className="space-y-3 mb-8">
              {content.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={14} className="text-brand" />
                  </div>
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-background rounded-xl px-5 py-4">
              <MapPin size={20} className="text-brand shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{content.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700 delay-200"
          >
            <div className="relative mb-8">
              <div className="lg:col-span-2  rounded-2xl overflow-hidden relative group">
                <Image src={content.image} alt={content.imageAlt} width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-5 py-3 shadow-lg">
                <p className="font-serif text-2xl text-foreground">{content.maxGuests}</p>
                <p className="text-xs text-muted-foreground">Max Guest Capacity</p>
              </div>
            </div>

            <h3 className="font-medium text-foreground mb-4">{content.rightTitle}</h3>
            <div className="grid grid-cols-2 gap-2">
              {content.rightItems.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 bg-background rounded-lg px-3 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
