"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Sun, Utensils, ShieldCheck, Globe, Palmtree, Star, Users } from "lucide-react"

export function CityAbout({ data }) {
  if (!data) return null

  // Helper to get array of description paragraphs
  const descriptions = Array.isArray(data.description)
    ? data.description
    : [data.description]

  // Framer Motion variants for scroll animations
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {data.badge && (
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {data.badge}
            </p>
          )}
          {(data.heading || data.headingItalic) && (
            <h1 className="section-title mb-6 text-balance">
              {data.heading}
              {data.headingItalic && (
                <>
                  <br />
                  <span className="italic">{data.headingItalic}</span>
                </>
              )}
            </h1>
          )}
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-6" />
          {data.description && (
            <div className="text-muted-foreground leading-relaxed text-pretty space-y-4">
              {(Array.isArray(data.description) ? data.description : [data.description]).map((desc, i) => (
                <p key={i}>{renderTextWithLinks(desc, i)}</p>
              ))}
            </div>
          )}
        </motion.div>

        {/* Two-column layout: image + highlights list */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image collage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="transition-all duration-700 delay-200"
          >
            <div className="relative">
              <div className="aspect-4/5 rounded-2xl overflow-hidden">
                <img
                  src={data.images?.main || "/placeholder.svg"}
                  alt="Destination wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stats card */}
              {data.experienceBadge && (
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card border border-border rounded-xl p-5 shadow-xl">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-3xl text-foreground">{data.experienceBadge.value}</span>
                    <p className="text-xs text-muted-foreground mt-1">{data.experienceBadge.label}</p>
                  </div>
                </div>
              )}
              {/* Decorative accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" />
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="grid gap-4"
          >
            {data.highlights?.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || Star
              return (
                <motion.div
                  key={index}
                  className={`group flex gap-5 p-3 rounded-xl hover:bg-background transition-all duration-500`}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors duration-300">
                    <Icon className="text-muted-foreground group-hover:text-brand transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function renderTextWithLinks(text, keyPrefix) {
  if (typeof text !== "string") return text

  // Supports markdown-style links in JSON text: [anchor text](url)
  const linkPattern = /\[([^\]]+)\]\(([^)\s]+)\)/g
  const nodes = []
  let lastIndex = 0
  let match

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, href] = match
    const start = match.index
    const end = start + fullMatch.length

    if (start > lastIndex) {
      nodes.push(text.slice(lastIndex, start))
    }

    const isExternal = /^https?:\/\//.test(href)
    nodes.push(
      <a
        key={`${keyPrefix}-${start}`}
        href={href}
        className="text-brand underline underline-offset-4 hover:opacity-80 transition-opacity"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    )

    lastIndex = end
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length ? nodes : text
}

const iconMap = {
  plane: Plane,
  sun: Sun,
  utensils: Utensils,
  shield: ShieldCheck,
  globe: Globe,
  palmtree: Palmtree,
  star: Star,
  users: Users,
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12" /></svg>
  )
}
