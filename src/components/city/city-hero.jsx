"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../components/ui/button"
import { ArrowDown, Star, MapPin } from "lucide-react"
import Link from "next/link"

export function CityHero({ data }) {
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = data?.images || []

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroImages.length > 0) {
        setCurrentImage((prev) => (prev + 1) % heroImages.length)
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  if (!data) return null

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.15, ease: "easeOut" }
    })
  }

  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">
      <AnimatePresence mode="wait">
        {heroImages.map((img, index) => currentImage === index && (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {data.badge && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8"
            >
              <MapPin size={14} className="text-accent" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                {data.badge}
              </span>
              <Star size={14} className="text-accent fill-accent" />
            </motion.div>
          )}

          {data.headline && (
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.05] mb-6 text-balance"
            >
              {data.headline}
              {data.headlineItalic && (
                <>
                  <br />
                  <span className="italic font-normal">{data.headlineItalic}</span>
                </>
              )}
            </motion.h2>
          )}

          {data.subheadline && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {data.subheadline}
            </motion.p>
          )}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              <Link href="#hotels">Explore Hotels</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="#contact">Get Free Quote</Link>
            </Button>
          </motion.div>

          {data.stats && data.stats.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center justify-center gap-6 mt-12"
            >
              {data.stats.map((stat) => (
                <div key={stat.label} className="text-center px-3">
                  <p className="font-serif text-2xl text-white">{stat.value}</p>
                  <p className="text-white/50 text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              type="button"
              key={`ind-${index}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${currentImage === index ? "w-10 bg-accent" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
