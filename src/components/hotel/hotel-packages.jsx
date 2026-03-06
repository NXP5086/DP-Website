"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"
import Link from "next/link"

export function HotelPackages({ hotel }) {
  const [isVisible, setIsVisible] = useState(false)

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            {hotel.hotelpackages?.label || "Wedding Packages"}
          </p>
          <h2 className="section-title mb-6 text-balance">
            {hotel.hotelpackages?.heading || "Curated Packages for"}
            <br />
            <span className="italic">{hotel.hotelpackages?.headingItalic || "Every Celebration"}</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            {hotel.hotelpackages?.description || "Choose a package that fits your vision, or let us create a fully custom plan. All packages are customizable."}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {hotel.hotelpackages?.items?.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl border p-6 lg:p-8 transition-all duration-700 flex flex-col",
                pkg.highlighted
                  ? "bg-foreground text-background border-foreground shadow-2xl lg:scale-105"
                  : "bg-card border-border hover:shadow-xl"
              )}
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn(
                  "font-serif text-2xl mb-1",
                  pkg.highlighted ? "text-background" : "text-foreground"
                )}>
                  {pkg.name}
                </h3>
                <p className={cn(
                  "text-sm mb-3",
                  pkg.highlighted ? "text-background/70" : "text-muted-foreground"
                )}>
                  {pkg.description}
                </p>
                {pkg.guests && (
                  <div className={cn(
                    "inline-block text-sm font-medium px-3 py-1 rounded-full",
                    pkg.highlighted ? "bg-background/15 text-background" : "bg-brand/10 text-brand"
                  )}>
                    {pkg.guests}
                  </div>
                )}
                {pkg.price && !pkg.guests && (
                  <div className={cn(
                    "font-medium",
                    pkg.highlighted ? "text-accent" : "text-brand"
                  )}>
                    {pkg.price}
                  </div>
                )}
              </div>

              {/* Includes */}
              {pkg.includes && pkg.includes.length > 0 && (
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={cn(
                          "shrink-0 mt-0.5",
                          pkg.highlighted ? "text-accent" : "text-brand"
                        )}
                      />
                      <span className={cn(
                        "text-sm",
                        pkg.highlighted ? "text-background/85" : "text-foreground"
                      )}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full py-5 group",
                    pkg.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                >
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    Get {pkg.name} Quote
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          {hotel.packagesFooter || "All packages are fully customizable. Prices vary based on season, guest count, and specific requirements. Contact us for a detailed quote."}
        </p>
      </div>
    </section>
  )
}
