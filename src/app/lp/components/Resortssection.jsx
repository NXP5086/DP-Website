"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react"

const defaultContent = {
  title: "The Resorts Wedding Collection",
  description:
    "Each resort offers a distinct vibe, from modern peninsula luxury to private bay intimacy to expansive ballroom celebrations.",
  destinations: [],
  tabs: [],
  resorts: [],
}

const fallbackImage = "/images/mexico/cancun/cancun-beach-wedding.jpg"

export function Resortssection({ content = defaultContent }) {
  const baseResorts = Array.isArray(content?.resorts) ? content.resorts : []
  const inputTabs = Array.isArray(content?.tabs) ? content.tabs : []
  const tabs = inputTabs.length
    ? inputTabs
    : [{ id: "all", label: "All Resorts", resorts: baseResorts }]

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  const selectedTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) || tabs[0]
  }, [activeTab, tabs])

  const resorts = Array.isArray(selectedTab?.resorts) ? selectedTab.resorts : []

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="section-padding bg-background" id="resorts">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="visible"
          animate="visible"
          variants={revealVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">{content.title}</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">{content.description}</p>
            <div className="h-1 w-24 mx-auto rounded-full bg-accent mt-6" />
          </div>

          {content.destinations?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {content.destinations.map((destination) => (
                <div key={destination.title} className="rounded-2xl border border-border bg-card p-5 lg:p-6">
                  <p className="text-lg font-semibold text-foreground mb-2">{destination.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>
              ))}
            </div>
          )}

          {tabs.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedTab?.id === tab.id
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-foreground border-border hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          <div className="grid gap-10">
            {resorts.map((resort, index) => (
              <motion.article
                key={resort.name}
                variants={cardVariants}
                className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-12 items-stretch">
                  <div
                    className={`relative overflow-hidden h-[300px] lg:h-full ${
                      index % 2 === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:order-2"
                    }`}
                  >
                    <Image
                      src={resort.image || fallbackImage}
                      alt={resort.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {resort.location && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 border border-white/20 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                          <MapPin size={13} />
                          {resort.location}
                        </span>
                      )}

                      {resort.collection && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                          <Sparkles size={13} />
                          {resort.collection}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`p-7 lg:p-10 flex flex-col justify-center ${
                      index % 2 === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:order-1"
                    }`}
                  >
                    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">{resort.name}</h3>

                    <p className="font-medium text-foreground/90 mb-3">{resort.tagline}</p>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resort.description}</p>

                    {resort.whyChoose?.length > 0 && (
                      <>
                        <h4 className="text-sm tracking-wide uppercase text-muted-foreground mb-4">
                          Why Couples Choose This Resort
                        </h4>

                        <div className="grid sm:grid-cols-2 gap-3 mb-7">
                          {resort.whyChoose.map((item) => (
                            <div
                              key={item.title}
                              className="rounded-xl border border-border bg-background px-4 py-3"
                            >
                              <p className="font-medium text-foreground mb-1">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {resort.idealFlow?.length > 0 && (
                      <div className="rounded-2xl border border-border bg-background p-5 mb-7">
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground mb-4">
                          <CalendarDays size={16} className="text-accent" />
                          Ideal Wedding Flow
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                          {resort.idealFlow.map((event, stepIndex) => (
                            <li key={event} className="flex items-start gap-3 text-muted-foreground">
                              <span className="mt-0.5 w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-semibold flex items-center justify-center shrink-0">
                                {stepIndex + 1}
                              </span>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {resort.ctaText && (
                      <a
                        href={resort.ctaHref || "#contact"}
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors duration-300 w-fit"
                      >
                        {resort.ctaText}
                        <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}

            {!resorts.length && (
              <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
                Resorts will appear here once data is passed to this section.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
