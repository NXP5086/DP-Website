"use client"

import { motion } from "framer-motion"
import { Crown, Check } from "lucide-react"

export function HotelPreferredClub({ hotel }) {
  const preferredClub = hotel?.hotelpreferredclub

  if (!preferredClub) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-linear-to-b from-background to-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Crown size={28} />
              </div>
            </div>
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {preferredClub.label}
            </p>
            <h2 className="section-title mb-6 text-balance">
              Elevated Luxury for
              <br />
              <span className="italic">VIP Guests</span>
            </h2>
            <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
            {preferredClub.description && (
              <p className="text-muted-foreground leading-relaxed mb-8">
                {preferredClub.description}
              </p>
            )}
          </motion.div>

          {preferredClub.benefits && preferredClub.benefits.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="bg-card border border-accent/20 rounded-xl p-8 md:p-10"
            >
              <div className="space-y-4">
                {preferredClub.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-0.5">
                      <Check size={16} />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
