"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"

const defaultContent = {
  title: "Choose Your Destination",
  destinations: [],
  tabs: [],
}

const fallbackImage = "/images/cancun-beach-wedding.jpg"

export function DestinationTabbedResorts({ content = defaultContent }) {
  const tabs = Array.isArray(content?.tabs) ? content.tabs : []
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "")

  const selectedTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) || tabs[0]
  }, [activeTab, tabs])

  return (
    <section className="section-padding bg-background" id="resorts">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">{content.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {content.destinations?.map((destination) => (
              <div key={destination.title} className="rounded-2xl border border-border bg-card p-5 lg:p-6">
                <p className="text-lg font-semibold text-foreground mb-2">
                  {destination.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
              </div>
            ))}
          </div>

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

<div className="grid gap-8">
  {selectedTab?.resorts?.map((resort) => (
    <motion.article
      key={resort.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="grid lg:grid-cols-12">
        
        {/* Image */}
        <div className="relative lg:col-span-6 overflow-hidden">
          <img
            src={resort.image || fallbackImage}
            alt={resort.name}
            className="w-full h-[260px] lg:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-6 p-6 lg:p-8 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            {resort.name}
          </h3>

          {resort.location && (
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin size={14} />
              {resort.location}
            </p>
          )}

          <p className="text-lg font-medium text-foreground mb-2">
            {resort.tagline}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {resort.description}
          </p>

          {resort.whyChoose?.length > 0 && (
            <>
              <h4 className="text-sm tracking-wide uppercase text-muted-foreground mb-3">
                Why Couples Choose This Resort
              </h4>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {resort.whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-background py-2 px-4"
                  >
                    <p className="font-medium text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
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
</div>
        </div>
      </div>
    </section>
  )
}
