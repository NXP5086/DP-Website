"use client"
import { useState } from "react"
import { Star, Users, MapPin, ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const tierColors = {
  Budgeted: "bg-primary/10 text-primary",
  Premium: "bg-accent/10 text-accent",
  Luxury: "bg-foreground text-background",
}

export function CityHotels({ data, hotels, destinationSlug, citySlug }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const hotelsToDisplay = (hotels && hotels.length > 0) ? hotels : (data?.venues || [])
  if (hotelsToDisplay.length === 0) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="hotels" className="section-padding bg-background min-h-[400px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            Handpicked Hotels
          </p>
          {(data?.heading || data?.headingItalic) && (
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground font-light leading-[1.15] mb-6 text-balance">
              {data?.heading}
              {data?.headingItalic && (
                <>
                  <br />
                  <span className="italic">{data?.headingItalic}</span>
                </>
              )}
            </h2>
          )}
          <div className="h-1 w-20 mx-auto bg-accent  rounded-full mb-6" />
          {data?.description && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {data?.description}
            </p>
          )}
        </motion.div>

        {/* Tier legend */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {["Budgeted", "Premium", "Luxury"].map((tier) => (
            <span key={tier} className={cn("text-xs font-medium px-4 py-2 rounded-full", tierColors[tier])}>
              {tier}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-8">
          {hotelsToDisplay.map((hotel, index) => {
            const hotelSlug = hotel.slug || hotel.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={revealVariants}
                transition={{ delay: index * 0.05 }}
                key={index}
                className="w-full"
              >
                <Link
                  href={`/destinations/${destinationSlug}/${citySlug}/${hotelSlug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-card border border-border/60 hover:border-accent/30 shadow-sm hover:shadow-2xl transition-all duration-500">

                    <div className="grid lg:grid-cols-5">

                      {/* Image */}
                      <div className="lg:col-span-2 relative h-64 lg:h-full overflow-hidden">
                        <Image
                          src={hotel.image || "/placeholder.svg"}
                          alt={hotel.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

                        {/* Tier badge */}
                        {hotel.tier && (
                          <div className="absolute top-4 left-4">
                            <span
                              className={cn(
                                "text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg",
                                tierColors[hotel.tier] || tierColors.Premium
                              )}
                            >
                              {hotel.tier}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-3 p-6 lg:p-10 flex flex-col justify-between">
                        <div>
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-accent transition-colors">
                                {hotel.name}
                              </h3>

                              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                                {hotel.location && (
                                  <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    {hotel.location}
                                  </div>
                                )}
                                {hotel.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star size={14} className="text-accent fill-accent" />
                                    <span className="font-medium text-foreground">
                                      {hotel.rating}
                                    </span>
                                    {hotel.reviewCount && (
                                      <span className="text-xs">
                                        ({hotel.reviewCount})
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Arrow */}
                            <div
                              className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${hoveredIndex === index
                                ? "bg-accent border-accent text-accent-foreground"
                                : "border-border text-muted-foreground"
                                }`}
                            >
                              <ArrowRight
                                size={18}
                                className={`transition-transform ${hoveredIndex === index ? "translate-x-1" : ""
                                  }`}
                              />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-6">
                            {hotel.description || hotel.highlight || "Experience luxury and tradition combined."}
                          </p>

                          {/* Highlights */}
                          {hotel.highlight && !hotel.description && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              <span className="text-xs px-3 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20">
                                {hotel.highlight}
                              </span>
                            </div>
                          )}

                          {hotel.highlights && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {hotel.highlights.slice(0, 4).map((h) => (
                                <span
                                  key={h}
                                  className="text-xs px-3 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20"
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap   items-center gap-6 pt-5 border-t border-border/60">
                          {(hotel.guests || hotel.maxGuests) && (
                            <div className="flex items-center gap-2 text-sm">
                              <Users size={16} className="text-muted-foreground" />
                              <span className="font-medium">
                                Up to {hotel.guests || hotel.maxGuests} guests
                              </span>
                            </div>
                          )}

                          {hotel.weddingSpaces && (
                            <div className="text-sm text-muted-foreground">
                              {hotel.weddingSpaces} wedding venues
                            </div>
                          )}

                          <div className="md:ml-auto flex items-center gap-2 md:text-sm font-medium text-accent group-hover:gap-3 transition-all">
                            View Resort <ChevronRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

