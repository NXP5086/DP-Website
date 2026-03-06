"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { cn } from "../../lib/utils"


const tierColors = {
  Budgeted: "text-primary",
  Premium: "text-accent",
  Luxury: "text-foreground font-semibold",
}

export function CityComparison({ data }) {
  const [isVisible, setIsVisible] = useState(false)


  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  if (!data) return null

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            Compare Hotels
          </p>
          <h2 className="section-title mb-6 text-balance">
            {data.heading || "Find Your Perfect"}
            <br />
            <span className="italic">{data.headingItalic || "Venue Match"}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            {data.description || "Compare our partner hotels to find the one that fits your style and budget."}
          </p>
        </motion.div>

        {/* Comparison Table Placeholder or Dynamic Table if data exists */}
        {data.features && data.hotels ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="overflow-x-auto transition-all duration-700 delay-200"
          >
            {/* Table implementation would go here if data structure matches */}
            <p className="text-center text-muted-foreground p-8">Comparison table is being updated.</p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="flex flex-wrap justify-center gap-6 transition-all duration-700 delay-200"
          >
            {data.tiers?.map(tier => (
              <motion.div
                key={tier}
                className="bg-card border border-border rounded-xl p-6 min-w-[200px] text-center"
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                style={{ transitionDelay: `${200 + tier * 60}ms` }}
              >
                <h3 className={cn("text-lg font-bold mb-2", tierColors[tier] || "text-foreground")}>{tier}</h3>
                <p className="text-muted-foreground text-sm">Explore {tier} properties</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
