"use client"

import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HotelApproachCTA({ hotel }) {
  const approachCTA = hotel?.hotelapproachcta

  if (!approachCTA) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {approachCTA.label}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background font-light leading-[1.1] mb-6 text-balance">
            {approachCTA.heading}
          </h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-8" />
          {approachCTA.description && (
            <p className="text-background/80 leading-relaxed mb-10 text-lg">
              {approachCTA.description}
            </p>
          )}

          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 group"
          >
            <Link href="#contact" className="flex items-center gap-2">
              {approachCTA.cta || "Get Started"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
