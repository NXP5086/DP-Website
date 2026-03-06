"use client"

import { Check } from "lucide-react"
import LosCabosInquiryForm from "../../../components/forms/LosCabosInquiryForm"

const defaultContent = {
  id: "plan-with-confidence",
  label: "Plan With Confidence",
  heading: "When you choose Los Cabos, you gain access to:",
  listItems: [
    "Established wedding venues",
    "Professional planners and vendors",
    "Flexible indoor & outdoor options",
    "Reliable infrastructure",
    "Stunning year-round scenery",
  ],
  summary:
    "The combination of natural beauty and experienced hospitality makes planning smooth and stress-free.",
  journeyTitle: "Begin Your Los Cabos Wedding Journey",
  journeyDescription:
    "Tell us about your wedding vision, and our destination specialists will connect you with the right venues and local experts to bring it to life.",
  formContent: {
    title: "Wedding Inquiry Form",
    ctaText: "Submit Inquiry",
  },
}

export function LosCabosPlanningSection({ content = defaultContent }) {
  const listItems = Array.isArray(content?.listItems) ? content.listItems : []

  return (
    <section id={content.id || "plan-with-confidence"} className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-brand text-sm tracking-[0.28em] uppercase mb-4">{content.label}</p>
            <h2 className="section-title mb-6 text-balance">{content.heading}</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-8" />

            <div className="space-y-3 mb-6">
              {listItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{content.summary}</p>

            <h3 className="font-serif text-2xl text-foreground mb-3">{content.journeyTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{content.journeyDescription}</p>
          </div>

          <div id="contact">
            <LosCabosInquiryForm content={content.formContent} />
          </div>
        </div>
      </div>
    </section>
  )
}
