"use client"

import { motion } from "framer-motion"
import { Users, Building2, Home, Utensils, Plane } from "lucide-react"

const iconMap = {
  users: Users,
  building: Building2,
  home: Home,
  utensils: Utensils,
  plane: Plane,
}

export function HotelTrustScale({ hotel }) {
  const trustScale = hotel?.hoteltrustscale

  if (!trustScale?.items?.length) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
            {trustScale.label || "Trust & Scale"}
          </p>
          <h2 className="section-title mb-6 text-balance">
            Why Book with
            <br />
            <span className="italic">{hotel.name}</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustScale.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Users
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all"
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Icon size={24} />
                  </div>
                </div>
                <p className="font-serif text-xl text-foreground font-medium mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
