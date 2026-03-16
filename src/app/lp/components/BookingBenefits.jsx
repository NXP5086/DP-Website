"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

const defaultContent = {
  title: "Why Book Through DestinationPick x Playa Resorts?",
  descriptions: [
    "Planning a destination wedding means coordinating venues, guest rooms, decor, events, and logistics across countries.",
    "Through our exclusive collaboration with Playa Resorts, DestinationPick helps couples plan seamless, multi-day destination weddings at some of the most sought-after all-inclusive resorts in Cancun, Los Cabos, Puerto Vallarta, and the Dominican Republic.",
  ],
  leadInText: "Through DestinationPick x Playa Resorts, you get:",
  items: [
    "Direct access to Playa Resorts' wedding-ready properties",
    "Structured wedding packages including complimentary options (select inclusions apply)",
    "Multi-day celebration planning support",
    "Guest accommodation block strategy",
    "Single point of contact via DestinationPick",
    "All-inclusive luxury for every guest",
  ],
  outroText: "Instead of contacting multiple resorts individually, you get one streamlined planning experience.",
  image: "/images/about/abt1.jpg",
  imageAlt: "Destination wedding planning",
}

export function BookingBenefits({ content = defaultContent }) {
  const descriptions = Array.isArray(content?.descriptions) ? content.descriptions : []
  const items = Array.isArray(content?.items) ? content.items : []

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title">{content.title || defaultContent.title}</h2>
        <div className="space-y-3 mb-8">
          {descriptions.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="grid md:grid-cols-2 gap-4 lg:gap-12 items-start"
        >
          <div>
            {content.leadInText && <p className="text-foreground font-medium mb-4">{content.leadInText}</p>}

            {items.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-5 bg-background border border-border rounded-xl p-4">
                <span className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} />
                </span>
                <p className="text-foreground">{item}</p>
              </div>
            ))}

            {content.outroText && <p className="text-muted-foreground leading-relaxed mb-3">{content.outroText}</p>}
          </div>

          <div className="h-auto">
            <Image
              src={content.image || defaultContent.image}
              alt={content.imageAlt || defaultContent.imageAlt}
              width={600}
              height={400}
              className="w-full h-[60%] object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
