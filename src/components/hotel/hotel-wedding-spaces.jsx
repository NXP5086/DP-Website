"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import Image from "next/image"

export function HotelWeddingSpaces({ hotel }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const active = hotel.hotelweddingspaces?.features[activeIndex]
  const activeTitle = typeof active === "string" ? active : active?.title

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            {hotel.hotelweddingspaces?.label || "Wedding Spaces"}
          </p>
          <h2 className="section-title mb-6 text-balance">
            {hotel.hotelweddingspaces?.heading || "Your Celebration"}
            <br />
            <span className="italic">{hotel.hotelweddingspaces?.headingItalic || "Venues"}</span>
          </h2>
          <div className="h-1 w-20  mx-auto bg-accent rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            {hotel.hotelweddingspaces?.description || `${hotel.hotelweddingspaces?.count} dedicated event spaces designed to host every element of your Indian wedding celebration.`}
          </p>
        </motion.div>

        {/* Two-column layout: image + highlights list */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image collage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700 delay-200"
          >
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-muted relative">
                <Image
                  src={hotel.hotelhero?.gallery[activeIndex % hotel.hotelhero?.gallery?.length] || "/placeholder.svg"}
                  alt={activeTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-all duration-700"
                />
              </div>
              {/* Floating stats card */}
              {hotel.experienceBadge && (
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card border border-border rounded-xl p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <span className="font-serif text-3xl text-foreground">{hotel.experienceBadge.value}</span>
                      <p className="text-xs text-muted-foreground mt-1">{hotel.experienceBadge.label}</p>
                    </div>
                    <div className="text-center">
                      <span className="font-serif text-3xl text-brand">4.9</span>
                      <p className="text-xs text-muted-foreground mt-1">Avg Rating</p>
                    </div>
                  </div>
                </div>
              )}
              {/* Decorative accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="grid gap-4"
          >
            {hotel.hotelweddingspaces?.features?.map((feature, index) => {
              const title = typeof feature === "string" ? feature : feature.title
              const description = typeof feature === "string" ? "" : feature.description

              return (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-full text-left p-5 lg:p-6 rounded-xl cursor-pointer border transition-all duration-400",
                    activeIndex === index
                      ? "bg-card border-accent/30 shadow-lg"
                      : "bg-transparent border-border hover:bg-card/50"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                      activeIndex === index
                        ? "bg-brand text-white"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={cn(
                        "font-medium mb-1 transition-colors",
                        activeIndex === index ? "text-foreground" : "text-foreground/70"
                      )}>
                        {title}
                      </h3>
                      {description && (
                        <p className={cn(
                          "text-sm leading-relaxed transition-all duration-300",
                          activeIndex === index
                            ? "text-muted-foreground max-h-40 opacity-100"
                            : "text-muted-foreground/60 max-h-0 overflow-hidden opacity-0 lg:max-h-40 lg:opacity-70"
                        )}>
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
