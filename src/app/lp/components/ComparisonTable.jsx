"use client"

import { motion } from "framer-motion"

const defaultContent = {
  title: "Compare Resort Options",
  columns: ["Resort", "Best For", "Guest Strength", "Adults-Only Section", "Family Appeal"],
  rows: [],
}

export function ComparisonTable({ content = defaultContent }) {
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="comparison" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={revealVariants}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title mb-6 text-balance text-center">{content.title}</h2>
          <div className="h-1 w-20 mx-auto bg-accent rounded-full mb-10" />

          <div  className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-muted/40">
                  {content.columns.map((column) => (
                    <th key={column} className="text-left px-5 py-4 text-sm font-semibold text-foreground">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, index) => (
                  <tr key={`${row.resort}-${index}`} className="border-t border-border">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{row.resort}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.bestFor}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.guestStrength}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.adultsOnlySection}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.familyAppeal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
