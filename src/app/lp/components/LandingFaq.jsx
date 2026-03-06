"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const defaultContent = {
  title: "Frequently Asked Questions",
  faqs: [],
}

export function LandingFaq({ content = defaultContent }) {
  const faqs = Array.isArray(content?.faqs) ? content.faqs : []
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-10">{content.title || defaultContent.title}</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="rounded-2xl border border-border bg-background overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className={`${isOpen ? "block" : "hidden"} px-5 pb-5`}>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
