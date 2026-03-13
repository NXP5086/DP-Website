"use client"

import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, CheckCircle2, Star, Shield } from "lucide-react"
import Weddingform from "../forms/Weddingform"
import Image from "next/image"
export function HotelContact({ hotel, contactInfo }) {


  // Define motion variants for animation
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  // Default benefits if not provided in JSON
  const benefits = hotel.hotelcontact?.benefits || contactInfo?.benefits || [
    `Dedicated ${hotel.name} specialist`,
    "Custom budget breakdown",
    "Virtual venue walkthrough",
    "No obligation consultation",
    "Indian wedding expertise"
  ]

  // Default contact info if not provided in JSON
  const infoItems = contactInfo?.info || [
    { label: "Call Us", value: "(917) 913-4262", icon: Phone },
    { label: "Email", value: "info.us@destinationpick.com", icon: Mail },
    { label: "Office", value: "New York, NY (USA)", icon: MapPin }
  ]

  const infoWithIcons = infoItems.map(item => {
    if (item.icon) return item;
    if (item.label.toLowerCase().includes('phone') || item.label.toLowerCase().includes('call')) return { ...item, icon: Phone };
    if (item.label.toLowerCase().includes('email')) return { ...item, icon: Mail };
    return { ...item, icon: MapPin };
  })

  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="absolute inset-0 opacity-[0.02]">
        <Image src={hotel.hotelhero?.gallery?.[0] || hotel.image || "/placeholder.svg"} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="reveal"
          >
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">
              {contactInfo?.badge || "Get Your Free Quote"}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-light leading-[1.15] mb-6 text-balance">
              {contactInfo?.heading || "Plan Your Wedding at"}
              <br />
              <span className="italic">
                {contactInfo?.headingItalic || hotel.name.split(" ").slice(0, 2).join(" ")}
              </span>
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {contactInfo?.description || `Book a complimentary consultation to get personalized pricing, venue walkthrough options, and a custom timeline for your celebration at ${hotel.name}.`}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            {/* <div className="space-y-5 mb-10">
              {infoWithIcons.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Icon size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div> */}

            {/* Trusted Partner */}
            <div className="bg-secondary rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-brand" />
                <span className="text-sm font-medium text-foreground">Trusted Partner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We are an official wedding partner of {hotel.name} with exclusive rates and priority booking access.
              </p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariants}
            className="reveal"
          >
            <Weddingform />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
