"use client"

import { motion } from "framer-motion"

export function HotelWhyChoose({ hotel }) {
  const whyChoose = hotel?.hotelwhychoose

  if (!whyChoose) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="text-center"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {whyChoose.label}
            </p>
            <h2 className="section-title mb-6 text-balance">
              {whyChoose.heading}
            </h2>
            <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              {whyChoose.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
