"use client"

import { motion } from "framer-motion"

const defaultContent = {
  label: "Resort Experience",
  heading: "Grand Palladium Costa Mujeres Highlights",
  items: [
    {
      title: "Resort Accommodations",
      description:
        "493 spacious suites including furnished balconies, hydro-massage bathtubs, swim-up options, and loft-style configurations.",
    },
    {
      title: "Family Selection - VIP Upgrade",
      description:
        "172 Family Selection suites with private check-in, exclusive restaurant and pool access, dedicated butler/eButler service, priority reservations, and premium family amenities.",
    },
    {
      title: "Dining & Celebration Options",
      description:
        "Multiple a la carte restaurants including Indian cuisine, international gourmet dining, extensive bar program, and customizable group dining arrangements.",
    },
    {
      title: "Entertainment & Activities",
      description:
        "Daily live entertainment, fitness classes, Rafa Nadal Tennis Centre, beachfront activities, and Zentropia Palladium Spa & Wellness.",
    },
    {
      title: "Spa & Relaxation",
      description:
        "Hydrotherapy circuits, couples treatments, and bridal grooming services at Zentropia Palladium Spa.",
    },
    {
      title: "Explore Costa Mujeres",
      description:
        "Beach clubs, coastal excursions, adventure parks, and Cancun nightlife options.",
    },
  ],
}

export function ResortHighlights({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">{content.label}</p>
          <h2 className="section-title mb-6 text-balance">{content.heading}</h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              variants={revealVariants}
              style={{ transitionDelay: `${index * 80}ms` }}
              className="bg-background border border-border rounded-2xl p-6 lg:p-7"
            >
              <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
