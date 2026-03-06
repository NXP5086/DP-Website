"use client"

import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
import { MapPin } from "lucide-react"

const defaultContent = {
  gallery: [
    "/images/mexico/cities/cancun/hotels/grand-palladium-costa-mujeres/gallery-1.jpg",
    "/images/mexico/cities/cancun/hotels/grand-palladium-costa-mujeres/gallery-2.jpg",
    "/images/mexico/cities/cancun/hotels/grand-palladium-costa-mujeres/gallery-3.jpg",
  ],
  title: "Host Your Grand Indian Wedding at Grand Palladium Costa Mujeres",
  description:
    "A luxury all-inclusive resort in Costa Mujeres, Cancun featuring a signature canal boat system, a private 'Village' plaza for themed celebrations, and multiple event venues designed for unforgettable multi-day Indian weddings.",
  location: "Costa Mujeres, Cancun, Mexico",
  primaryCtaText: "Start Planning Your Wedding",
  primaryTargetId: "contact",
  secondaryCtaText: "Check Resort Comparison",
  secondaryTargetId: "comparison",
}

export function Hero({ content = defaultContent }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const gallery = content.gallery?.length ? content.gallery : defaultContent.gallery

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    if (!gallery.length) return
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [gallery.length])

  return (
    <section className="relative h-screen min-h-[750px] overflow-hidden">
      {gallery.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: currentImage === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-8000"
            style={{
              backgroundImage: `url(${img})`,
              transform: currentImage === index ? "scale(1.06)" : "scale(1)",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.05] mb-4 transition-all duration-700 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "250ms" }}
          >
            {content.title}
          </h1>

          <p
            className={`text-lg lg:text-lg text-white/80 mb-3 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            {content.description}
          </p>

          {content.location && <div
            className={`flex items-center justify-center gap-2 text-white/60 mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <MapPin size={16} />
            <span className="text-sm">{content.location}</span>
          </div>}

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "650ms" }}
          >
            <Button
              size="lg"
              type="button"
              onClick={() => scrollToSection(content.primaryTargetId || "contact")}
              className="rounded-full px-10 py-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              {content.primaryCtaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              type="button"
              onClick={() => scrollToSection(content.secondaryTargetId || "packages")}
              className="rounded-full px-8 py-6 text-base border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              {content.secondaryCtaText}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-40 right-8 hidden lg:flex items-center gap-2">
          {gallery.map((_, index) => (
            <button
              type="button"
              key={`gal-${index}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1 rounded-full cursor-pointer transition-all duration-500 ${currentImage === index ? "w-10 bg-accent" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Gallery image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
