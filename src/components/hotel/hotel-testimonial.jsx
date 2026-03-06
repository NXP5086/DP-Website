"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, Star, Users, Calendar } from "lucide-react"

export function HotelTestimonial({ hotel }) {
  if (!hotel.hoteltestimonial?.data) return null

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img src={hotel.hotelhero?.gallery[1] || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-foreground/90" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote size={48} className="text-accent/40 mx-auto mb-8" />

          <p className="font-serif text-2xl lg:text-4xl text-background leading-relaxed mb-8 text-pretty">
            "{hotel.hoteltestimonial.data.quote}"
          </p>

          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={`ts-${i}`} size={18} className="text-accent fill-accent" />
            ))}
          </div>

          <p className="font-serif text-xl text-background mb-1">
            {hotel.hoteltestimonial.data.couple}
          </p>
          <p className="text-background/50 text-sm mb-8">
            Married at {hotel.name}
          </p>

          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-accent" />
                <div className="text-left">
                  <span className="block font-serif text-lg text-background">
                    {hotel.hoteltestimonial.data.guests || hotel.maxGuests || "200+"}
                  </span>
                  <span className="text-xs text-background/50 uppercase tracking-wide">Guests</span>
                </div>
              </div>
            </div>
            <div className="w-px h-10 bg-background/15" />
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-accent" />
              <div className="text-left">
                <span className="block font-serif text-lg text-background">
                  {hotel.hoteltestimonial.data.events || hotel.hotelweddingspaces?.count || "4+"}
                </span>
                <span className="text-xs text-background/50 uppercase tracking-wide">Events</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
