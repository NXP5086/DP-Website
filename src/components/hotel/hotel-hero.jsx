"use client"

import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button"
import { Star, MapPin, Users, ArrowDown } from "lucide-react"
import Link from "next/link"
import { cn } from "../../lib/utils"

const tierBadge = {
  Budgeted: "bg-primary/20 text-primary-foreground border-primary/30",
  Premium: "bg-accent/20 text-accent-foreground border-accent/30",
  Luxury: "bg-white/20 text-white border-white/30",
}

export function HotelHero({ hotel }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const gallery = hotel?.hotelhero?.gallery || []

  useEffect(() => {
    if (!gallery?.length) return
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [gallery?.length])

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
          {/* Breadcrumb */}
          {/* <div
            className={`inline-flex items-center gap-2 text-white/60 text-sm mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/mexico" className="hover:text-white transition-colors">Mexico</Link>
            <span>/</span>
            <Link href="/mexico/cancun" className="hover:text-white transition-colors">Cancun</Link>
            <span>/</span>
            <span className="text-white/90">{hotel.name.split(" ").slice(0, 2).join(" ")}</span>
          </div> */}

          {/* Tier + Rating badge */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className={cn("text-xs font-semibold px-4 py-1.5 rounded-full border backdrop-blur-sm", tierBadge[hotel.hotelhero?.tier])}>
              {hotel.hotelhero?.tier}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white">
              <Star size={14} className="text-accent fill-accent" />
              {hotel.hotelhero?.rating} ({hotel.hotelhero?.reviewCount} reviews)
            </span>
          </div>


          <h1
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.05] mb-4 transition-all duration-700 text-balance ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "250ms" }}
          >
            {hotel.hotelhero.bannerHeading}
          </h1>


          <p
            className={`text-lg lg:text-lg text-white/80 mb-3 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "400ms" }}
          >
            {hotel.hotelhero?.tagline}
          </p>

          <div
            className={`flex items-center justify-center gap-2 text-white/60 mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <MapPin size={16} />
            <span className="text-sm">{hotel.location}</span>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "650ms" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              <Link href="#contact">{hotel.heroCtaPrimary || "Get a Free Wedding Quote"}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="#packages">{hotel.heroCtaSecondary || "View Wedding Packages"}</Link>
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-8 mt-12 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="text-center">
              <Users size={20} className="text-accent mx-auto mb-1" />
              <p className="font-serif text-xl text-white">Up to {hotel.maxGuests || 0}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{hotel.maxGuestsLabel || "Guests"}</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-xl text-white">{hotel.hotelweddingspaces?.count || 0}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{hotel.weddingSpacesLabel || "Event Spaces"}</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-xl text-white">{hotel.hoteloveriew?.amenities?.length || 0}+</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{hotel.amenitiesLabel || "Amenities"}</p>
            </div>
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