"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import DreamsMacaoInquiryForm from "../../../components/forms/DreamsMacaoInquiryForm"

const defaultContent = {
  id: "contact",
  label: "Start Planning",
  heading: "Start Planning Your Indian Wedding",
  listTitle: "Consultation Includes:",
  listItems: [
    "Dedicated wedding specialist",
    "Custom budget breakdown",
    "Venue walkthrough guidance",
    "No obligation consultation",
    "Indian wedding expertise",
  ],
  formContent: {
    title: "Inquiry Form",
    ctaText: "Get My Custom Wedding Proposal",
  },
}

export function DreamsMacaoPlanningSection({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id={content.id || "contact"} className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" variants={revealVariants}>
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">{content.label}</p>
            <h2 className="section-title mb-6 text-balance">{content.heading}</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />

            <h3 className="font-serif text-2xl text-foreground mb-4">{content.listTitle}</h3>
            <div className="space-y-3">
              {content.listItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={revealVariants}>
            <DreamsMacaoInquiryForm content={content.formContent} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
