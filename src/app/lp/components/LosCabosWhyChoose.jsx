"use client"

import { Plane, MapPinned, Building2, Gem } from "lucide-react"

const defaultContent = {
  title: "Why Choose Los Cabos for Your Destination Wedding?",
  intro:
    "Located at the southern tip of the Baja Peninsula in Los Cabos, this world-renowned destination blends desert, sea, and sky in a way few places on earth can.",
  highlights: [],
}

const iconMap = {
  backdrop: MapPinned,
  venues: Building2,
  accessibility: Plane,
  professionals: Gem,
}

export function LosCabosWhyChoose({ content = defaultContent }) {
  const highlights = Array.isArray(content?.highlights) ? content.highlights : []

  return (
    <section className="section-padding bg-background" id="overview">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title mb-4">{content.title}</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">{content.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon] || MapPinned

              return (
                <article key={item.title} className="rounded-2xl border border-border bg-card overflow-hidden">
                  {item.image && (
                    <div className="relative aspect-[16/9]">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="p-6 lg:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent mb-4">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
