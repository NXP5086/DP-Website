"use client"

import { motion } from "framer-motion"
import { Utensils, Sparkles, Gamepad2 } from "lucide-react"

export function HotelAmenitiesAndActivities({ hotel }) {
  const resortExperience = hotel?.hotelresortexperience
  const dining = hotel?.hoteldining
  const spa = hotel?.hotelspawellness
  const activities = hotel?.hotelactivities

  if (!resortExperience && !dining && !spa && !activities) return null

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  const sections = [
    {
      title: "Resort Experience",
      icon: "home",
      content: resortExperience?.description,
      data: resortExperience
    },
    {
      title: "Dining & Celebrations",
      icon: "utensils",
      content: dining?.description,
      highlights: dining?.highlights,
      data: dining
    },
    {
      title: "Spa & Relaxation",
      icon: "sparkles",
      content: spa?.description,
      services: spa?.services,
      data: spa
    },
    {
      title: "Guest Activities",
      icon: "activities",
      content: activities?.description,
      activities: activities?.items,
      data: activities
    }
  ]

  const iconMap = {
    home: () => <span className="text-2xl">🏨</span>,
    utensils: () => <Utensils size={24} />,
    sparkles: () => <Sparkles size={24} />,
    activities: () => <Gamepad2 size={24} />
  }

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6 text-balance">
            World-Class
            <br />
            <span className="italic">Amenities & Experiences</span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            section.data && (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={revealVariants}
                className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all"
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {section.icon === "home" ? (
                      <span className="text-2xl">🏨</span>
                    ) : section.icon === "utensils" ? (
                      <Utensils size={24} />
                    ) : section.icon === "sparkles" ? (
                      <Sparkles size={24} />
                    ) : (
                      <Gamepad2 size={24} />
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-foreground">
                    {section.title}
                  </h3>
                </div>
                
                {section.content && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}

                {section.highlights && section.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {section.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.services && section.services.length > 0 && (
                  <ul className="space-y-2">
                    {section.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.activities && section.activities.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {section.activities.map((item, i) => (
                      <div key={i} className="bg-card rounded-lg p-3 border border-border/50 text-center">
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
