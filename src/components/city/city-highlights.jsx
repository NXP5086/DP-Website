"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { Plane, DollarSign, Umbrella, Users, Utensils, Activity, Sun, Star } from "lucide-react"

// Icon Map
const iconMap = {
  plane: Plane,
  dollar: DollarSign,
  beach: Umbrella,
  users: Users,
  utensils: Utensils,
  activity: Activity,
  sun: Sun,
  star: Star
}

export function CityHighlights({ data }) {
  const [activeId, setActiveId] = useState(0)

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  if (!data?.features || data.features.length === 0) return null

  const active = data.features[activeId]

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            Highlights
          </p>
          <h2 className="section-title mb-6 text-balance">
            {data.heading || "What Makes It"}
            <br />
            <span className="italic">{data.headingItalic || "Extraordinary"}</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
        </motion.div>

        {/* Image + Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="relative aspect-4/3 rounded-2xl overflow-hidden bg-muted group/img"
          >
            <img
              key={activeId}
              src={active.image || "/placeholder.svg"}
              alt={active.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover/img:scale-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-4 py-1.5 rounded-full mb-2">
                  {active.title}
                </span>
                <p className="text-white/90 text-sm max-w-xs">{active.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="grid gap-3"
          >
            {data.features.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveId(index)}
                className={cn(
                  "text-left p-5 rounded-xl cursor-pointer border transition-all duration-400",
                  activeId === index
                    ? "bg-card border-accent/30 shadow-lg"
                    : "bg-transparent border-border hover:bg-card/50"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={cn(
                        "font-medium transition-colors",
                        activeId === index ? "text-foreground" : "text-foreground/70"
                      )}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300",
                    activeId === index ? "bg-brand/10 text-brand scale-110" : "bg-muted text-muted-foreground"
                  )}>
                    <IconByName name={item.icon} size={16} />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function IconByName({ name, className, size }) {
  const Icon = iconMap[name] || Star
  return <Icon className={className} size={size} />
}
