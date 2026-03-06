"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const defaultContent = {
  title: "Where Desert Landscapes Meet the Sea And Love Stories Begin",
  description:
    "Imagine exchanging vows with golden cliffs behind you, the Pacific Ocean shimmering beside you, and the iconic Arch rising in the distance. Los Cabos is one of the world's most breathtaking wedding destinations, where dramatic natural beauty, luxury hospitality, and effortless accessibility come together for unforgettable celebrations.",
  subDescription:
    "Los Cabos isn't simply a wedding location, it's a destination designed for unforgettable moments.",
  primaryCtaText: "Start Planning Your Los Cabos Wedding",
  primaryCtaHref: "#contact",
  secondaryCtaText: "Speak With a Destination Wedding Specialist",
  secondaryCtaHref: "#contact",
  gallery: [
    "/images/mexico/cities/los-cabos/hero/hero-1.jpg",
    "/images/mexico/cities/los-cabos/hero/slide-2.jpg",
    "/images/mexico/cities/los-cabos/hero/slide-3.jpg",
  ],
  backgroundImage: "/lp/playa/banner2.jpg",
}

export function LosCabosHero({ content = defaultContent }) {
  const gallery = content.gallery?.length ? content.gallery : defaultContent.gallery
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!gallery.length) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gallery.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [gallery.length])

  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      {gallery.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />

      <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 text-balance">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-3xl">
            {content.description}
          </p>
          {content.subDescription && (
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl">
              {content.subDescription}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={content.primaryCtaHref || "#contact"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              {content.primaryCtaText}
              <ArrowRight size={15} />
            </a>

            <a
              href={content.secondaryCtaHref || "#contact"}
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              {content.secondaryCtaText}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 lg:right-8 hidden md:flex items-center gap-2">
          {gallery.map((_, index) => (
            <button
              type="button"
              key={`los-cabos-hero-${index}`}
              onClick={() => setCurrentImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentImage === index ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Hero image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
