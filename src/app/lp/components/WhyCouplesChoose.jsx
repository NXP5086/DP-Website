"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const defaultContent = {
  title: "Why Couples Choose DestinationPick",
  intro: "You're not just booking a resort, you're planning a multi-day celebration.",
  points: [
    "Guide you toward the right property",
    "Structure multi-day event timelines",
    "Clarify package inclusions",
    "Optimize guest room blocks",
    "Simplify cross-border planning",
  ],
  outro:
    "We help you avoid common destination wedding mistakes while maximizing value.",
}

export function WhyCouplesChoose({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-5xl mx-auto rounded-2xl border border-border bg-card p-6 lg:p-10"
        >
          <h2 className="section-title text-center mb-4">{content.title}</h2>
          <p className="text-muted-foreground text-center mb-8">{content.intro}</p>

          <p className="text-foreground font-medium mb-4">
            DestinationPick works directly with Playa Resorts to:
          </p>
          <div className="space-y-3 mb-8">
            {content.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-3"
              >
                <span className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Check size={14} />
                </span>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">{content.outro}</p>
        </motion.div>
      </div>
    </section>
  )
}
