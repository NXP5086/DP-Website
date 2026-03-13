"use client"

import { LosCabosAreaCards } from "./LosCabosAreaCards"
import Image from "next/image"

const defaultContent = {
  title: "Why Los Cabos Is One of the World's Most Iconic Wedding Destinations",
  intro:
    "At the southern tip of Mexico's Baja Peninsula lies a place unlike anywhere else where the Pacific Ocean meets the Sea of Cortez, and dramatic landscapes create a breathtaking backdrop for your celebration.",
  introSecondary:
    "Here, a wedding becomes more than a single day. It becomes a multi-day experience your guests will never forget.",
  introImage: "/lp/los-cabos-tourism/about.jpg",
  exceptionalTitle: "What makes Los Cabos exceptional:",
  exceptionalPoints: [
    "Over 350 days of sunshine each year",
    "Stunning desert-meets-ocean scenery",
    "Easy international airport access",
    "Luxury beachfront resorts and private villas",
    "World-class dining and hospitality",
    "A balance of vibrant nightlife and serene escapes",
  ],
  beautyTitle: "The Beauty of Los Cabos",
  beautyDescription:
    "Los Cabos is composed of two distinct towns connected by a scenic coastal corridor each offering its own personality and wedding atmosphere.",
  beautySubDescription:
    "This allows you to choose the style that perfectly reflects your vision.",
  beautyImages: [
    "/images/mexico/cities/los-cabos/about/secondary1.jpg",
    "/images/mexico/cities/los-cabos/about/secondary2.jpg",
  ],
  areas: [
    {
      name: "Cabo San Lucas",
      vibe: "Energetic | Iconic | Oceanfront Glamour",
      image: "/images/mexico/cities/los-cabos/venues/viceroy-los-cabos.jpg",
      description:
        "Famous for its dramatic coastline and the iconic Arch, Cabo San Lucas is ideal for vibrant, high-energy celebrations.",
      descriptionSecondary:
        "Expect panoramic ocean views, marina-side venues, and rooftop terraces that glow at sunset.",
      perfectFor: [
        "Grand multi-day celebrations",
        "Beachfront ceremonies",
        "Rooftop sunset receptions",
        "Yacht welcome parties",
        "After-parties that last into the night",
      ],
    },
    {
      name: "San Jose del Cabo",
      vibe: "Romantic | Artistic | Timeless Elegance",
      image: "/images/mexico/cities/los-cabos/hotels/jw-marriott-los-cabos-beach-resort/main.jpg",
      description:
        "With cobblestone streets, colonial charm, and art-filled courtyards, San Jose offers a refined and intimate atmosphere.",
      descriptionSecondary:
        "It's ideal for those seeking sophistication and understated romance.",
      perfectFor: [
        "Courtyard ceremonies under string lights",
        "Boutique resort weddings",
        "Garden receptions",
        "Elegant rehearsal dinners",
        "Sunset celebrations with a relaxed charm",
      ],
    },
    {
      name: "The Tourist Corridor",
      vibe: "Private | Expansive | Ultra-Luxury",
      image: "/images/mexico/cities/los-cabos/venues/park-hyatt-cabo-del-sol.jpg",
      description:
        "Stretching between the two towns, the Corridor is home to some of the region's most exclusive resorts and cliffside venues.",
      descriptionSecondary: "This area blends privacy with grandeur.",
      perfectFor: [
        "Large guest counts",
        "Ocean-view lawn ceremonies",
        "Grand ballroom receptions",
        "Private villa buyouts",
        "High-production multi-day wedding events",
      ],
    },
  ],
  multiDayTitle: "A Destination Designed for Multi-Day Celebrations",
  multiDayDescription:
    "Los Cabos isn't just about the ceremony, it's about creating a full experience.",
  multiDayImage: "/lp/los-cabos-tourism/ocean-backdrops.jpg",
  imagineTitle: "Imagine:",
  imaginePoints: [
    "Welcome cocktails overlooking the marina",
    "A beachside pre-wedding celebration",
    "A sunset evening with ocean breezes",
    "A ceremony framed by desert cliffs",
    "A reception under the stars",
    "A farewell brunch by the sea",
  ],
  multiDayOutro:
    "Beyond the wedding, guests can enjoy golf, yacht charters, art walks, spa retreats, and curated excursions transforming your celebration into a vacation experience.",
  plannerTitle: "Why Plan Your Los Cabos Wedding with DestinationPick?",
  plannerDescription:
    "Planning a destination wedding requires expertise, coordination, and local insight.",
  plannerLead: "DestinationPick simplifies the process by helping you:",
  plannerImage: "/lp/los-cabos-tourism/ocean-backdrops.jpg",
  plannerPoints: [
    "Select the right area within Los Cabos",
    "Compare resorts and private venues",
    "Structure multi-day event timelines",
    "Optimize guest accommodations",
    "Coordinate vendors and logistics",
    "Avoid common destination planning challenges",
  ],
  plannerOutro:
    "You don't need to manage it alone. We turn Los Cabos into a seamless, beautifully executed wedding experience.",
}

export function LosCabosDestinationStory({ content = defaultContent }) {
  const exceptionalPoints = Array.isArray(content?.exceptionalPoints) ? content.exceptionalPoints : []
  const areas = Array.isArray(content?.areas) ? content.areas : []
  const imaginePoints = Array.isArray(content?.imaginePoints) ? content.imaginePoints : []
  const plannerPoints = Array.isArray(content?.plannerPoints) ? content.plannerPoints : []

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.08] mb-5 text-balance">
              {content.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">{content.intro}</p>
            <p className="text-muted-foreground leading-relaxed">{content.introSecondary}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 relative rounded-3xl border border-border overflow-hidden">
              <Image
                src={content.introImage}
                alt="Los Cabos destination view"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-6 lg:p-8">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.08]  mb-5">{content.exceptionalTitle}</h2>
              <ul className="space-y-3">
                {exceptionalPoints.map((point) => (
                  <li key={point} className="rounded-xl border border-border bg-background px-4 py-3 text-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-[1.08] mb-5  ">{content.beautyTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">{content.beautyDescription}</p>
            <p className="text-muted-foreground leading-relaxed">{content.beautySubDescription}</p>

          </div>

          <LosCabosAreaCards areas={areas} />

          <div id="experiences" className="rounded-3xl border border-border bg-muted/30 p-6 lg:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-[1.08] mb-5">{content.multiDayTitle}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{content.multiDayDescription}</p>
                <p className="text-foreground font-medium mb-3">{content.imagineTitle}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-5">
                  {imaginePoints.map((point) => (
                    <li key={point} className="rounded-xl border border-border bg-card px-4 py-3 text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">{content.multiDayOutro}</p>
              </div>
              <div className="relative lg:col-span-5 rounded-2xl overflow-hidden border border-border aspect-[4/5] lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src={content.multiDayImage}
                  alt="Los Cabos multi-day wedding experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div id="contact" className="rounded-3xl border border-border bg-card p-6 lg:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-[1.08] mb-5">{content.plannerTitle}</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">{content.plannerDescription}</p>
                <p className="text-foreground font-medium mb-4">{content.plannerLead}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-5">
                  {plannerPoints.map((point) => (
                    <li key={point} className="rounded-xl border border-border bg-background px-4 py-3 text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">{content.plannerOutro}</p>
              </div>
              <div className="relative lg:col-span-5 rounded-2xl overflow-hidden border border-border aspect-[16/10]">
                <Image
                  src={content.plannerImage}
                  alt="Los Cabos wedding planning support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
