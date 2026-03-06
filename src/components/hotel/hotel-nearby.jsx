"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import Link from "next/link"

export function HotelNearby({ hotel, otherHotels = [], destinationSlug, citySlug }) {
  const [isVisible, setIsVisible] = useState(false)

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  if (otherHotels.length === 0) return null

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Nearby Attractions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {hotel.hotelnearby?.label || "Nearby Attractions"}
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground font-light leading-[1.15] mb-8">
              {hotel.hotelnearby?.heading || "Explore"} <span className="italic">{hotel.hotelnearby?.headingItalic || "Around"}</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {hotel.hotelnearby?.description || "Turn your wedding into a vacation. These nearby attractions are perfect for group excursions, welcome events, or post-wedding adventures."}
            </p>
            <div className="space-y-3">
              {hotel.hotelnearby?.attractions?.map((attraction, idx) => {
                const name = typeof attraction === 'string' ? attraction : attraction.name;
                const description = typeof attraction === 'object' ? attraction.description : null;
                return (
                  <div key={idx} className="bg-background rounded-xl px-5 py-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-foreground block">{name}</span>
                        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Other Hotels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700 delay-200"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              Also in {citySlug?.charAt(0).toUpperCase() + citySlug?.slice(1)}
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground font-light leading-[1.15] mb-8">
              Other <span className="italic">Hotels</span>
            </h2>
            <div className="space-y-4">
              {otherHotels.map((other) => (
                <Link
                  key={other.slug}
                  href={`/destinations/${destinationSlug}/${citySlug}/${other.slug}`}
                  className="group flex items-center gap-4 bg-background rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <span className="font-serif text-lg font-medium">{other.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors truncate">
                      {other.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{other.tier} | Up to {other.maxGuests || 0} guests</p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full mt-6 rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-background bg-transparent group"
            >
              <Link href={`/destinations/${destinationSlug}/${citySlug}`} className="flex items-center justify-center gap-2">
                View All {citySlug?.charAt(0).toUpperCase() + citySlug?.slice(1)} Hotels
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
