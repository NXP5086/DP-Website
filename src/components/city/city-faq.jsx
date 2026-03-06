"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"


export function CityFAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(0)

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
                Common Questions
              </p>

              <h2 className="section-title">
                Everything You
                <br />
                <span className="italic">Need to Know</span>
              </h2>

              <div className="h-1 w-20 bg-accent rounded-full mb-6" />

              <p className="text-muted-foreground leading-relaxed mb-8">
                Planning a destination wedding raises many questions. Here are
                the most common ones from couples planning Indian weddings in
                Mexico.
              </p>

              <div className="bg-secondary rounded-xl p-6">
                <p className="text-sm text-foreground font-medium mb-2">
                  Still have questions?
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute consultation and get personalized
                  answers from our team.
                </p>

                <a
                  href="tel:+9179134262"
                  className="inline-flex text-sm font-medium text-brand hover:underline"
                >
                   Call Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="lg:col-span-3"
          >
            <div className="space-y-3">
              {(data?.items).map((faq, index) => (
                <div
                  key={faq.question}
                  className={cn(
                    "border border-border  rounded-xl overflow-hidden transition-all duration-300",
                    openIndex === index
                      ? "bg-card shadow-sm"
                      : "bg-transparent hover:bg-card/50"
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full cursor-pointer flex items-center justify-between p-5 text-left"
                  >
                    <span
                      className={cn(
                        "font-medium pr-4 transition-colors",
                        openIndex === index
                          ? "text-foreground"
                          : "text-foreground/80"
                      )}
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={cn(
                        "shrink-0 transition-all duration-300",
                        openIndex === index
                          ? "rotate-180 text-brand"
                          : "text-muted-foreground"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div
                      className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}