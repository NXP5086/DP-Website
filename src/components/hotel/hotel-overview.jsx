"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, MapPin } from "lucide-react"
import Image from "next/image"

export function HotelOverview({ hotel }) {
  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section id="overview" className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {hotel.hoteloveriew?.label || "Resort Overview"}
            </p>
            {hotel.name && (
              <h2 className="section-title mb-6 text-balance">
                {hotel.hoteloveriew?.heading || "Why Choose"}
                <br />
                <span className="italic">{hotel.hoteloveriew?.headingItalic || hotel.name.split(" ").slice(0, 2).join(" ")}</span>
              </h2>
            )}
            <div className="h-1 w-20  bg-accent rounded-full mb-6" />
            {hotel.hoteloveriew?.longDescription && (
              <p className="text-muted-foreground leading-relaxed mb-8">
                {hotel.hoteloveriew?.longDescription}
              </p>
            )}

            {hotel.hoteloveriew?.highlights && hotel.hoteloveriew?.highlights.length > 0 && (
              <div className="space-y-3 mb-8">
                {hotel.hoteloveriew?.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Check size={14} className="text-brand" />
                    </div>
                    <span className="text-foreground text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {hotel.location && (
              <div className="flex items-center gap-3 bg-background rounded-xl px-5 py-4">
                <MapPin size={20} className="text-brand shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{hotel.location}</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700 delay-200"
          >
            <div className="relative mb-8">
              <div className="lg:col-span-2 aspect-4/3 rounded-2xl overflow-hidden relative group">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={`${hotel.name} overview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-5 py-3 shadow-lg">
                <p className="font-serif text-2xl text-foreground">{hotel.maxGuests}</p>
                <p className="text-xs text-muted-foreground">Max Guest Capacity</p>
              </div>
            </div>

            <h3 className="font-medium text-foreground mb-4">Resort Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {hotel.hoteloveriew?.amenities?.map((amenity) => (
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
