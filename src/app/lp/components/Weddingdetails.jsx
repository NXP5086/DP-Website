"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const defaultContent = {
  id: "packages",
  label: "Wedding Details",
  heading: "Wedding Events",
  description: "",
  events: [
    {
      name: "Mehndi & Haldi",
      description: "Outdoor spaces ideal for colorful daytime rituals.",
    },
    {
      name: "Sangeet Night",
      description: "Ballroom and plaza options for dance floors and entertainment.",
    },
    {
      name: "Wedding Ceremony",
      description: "Private beachfront mandap setups overlooking the Caribbean Sea.",
    },
    {
      name: "Reception",
      description: "Elegant indoor ballroom or open-air celebration venues.",
    },
  ],
}

export function WeddingDetails({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section id={content.id || "packages"} className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">{content.label}</p>
          <h2 className="section-title mb-6 text-balance">{content.heading}</h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
          {content.description ? <p className="text-muted-foreground max-w-2xl mx-auto">{content.description}</p> : null}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {content.events.map((event, index) => (
            <motion.div
              key={`${event.name}-${index}`}
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all"
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{event.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
