import React from "react"

export const metadata = {
    title: "Destination Wedding in Los Cabos Mexico | Ultimate Wedding Guide | DestinationPick",
    description: "Plan the ultimate destination wedding in Los Cabos, Mexico. Desert cliffs, turquoise sea, 350+ days of sunshine. Expert wedding planning by DestinationPick in partnership with the Los Cabos Tourism Board.",
    keywords: "Los Cabos destination wedding, Cabo San Lucas wedding, San Jose del Cabo wedding, destination wedding Mexico Baja, Los Cabos wedding planner",
    alternates: {
        canonical: "https://www.destinationpick.com/lp/los-cabos-tourism-board/",
    },
    openGraph: {
        title: "Destination Wedding in Los Cabos Mexico | DestinationPick",
        description: "Where desert cliffs meet turquoise sea. Plan your dream destination wedding in Los Cabos with DestinationPick.",
        images: [{ url: "/lp/los-cabos-tourism/banner1.jpg", width: 1200, height: 630, alt: "Los Cabos Destination Wedding" }],
    },
}

import { Check } from "lucide-react"
import { LosCabosHero } from "../components/LosCabosHero"
import { LosCabosDestinationStory } from "../components/LosCabosDestinationStory"
import LosCabosInquiryForm from "../../../components/forms/LosCabosInquiryForm"
const heroContent = {
  title: "The Ultimate Destination Wedding in Los Cabos, Mexico",
  description:
    "Where golden desert cliffs meet the endless blue sea. Where sunsets feel cinematic. Where celebrations become legendary.",
  subDescription:
    "Los Cabos isn’t simply a wedding location, it's a destination designed for unforgettable moments.",
  primaryCtaText: "Start Planning Your Los Cabos Wedding",
  primaryCtaHref: "#contact",
  secondaryCtaText: "Explore Wedding Experiences",
  secondaryCtaHref: "#experiences",
  gallery: [
    "/lp/los-cabos-tourism/banner1.jpg",
    "/lp/los-cabos-tourism/banner2.jpg",
    "/lp/los-cabos-tourism/banner3.jpg",
  ],
}

const pageContent = {
  title: "Why Los Cabos Is One of the World’s Most Iconic Wedding Destinations",
  intro:
    "At the southern tip of Mexico’s Baja Peninsula lies a place unlike anywhere else where the Pacific Ocean meets the Sea of Cortez, and dramatic landscapes create a breathtaking backdrop for your celebration.",
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
  areas: [
    {
      name: "Cabo San Lucas",
      vibe: "Energetic • Iconic • Oceanfront Glamour",
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
      name: "San José del Cabo",
      vibe: "Romantic • Artistic • Timeless Elegance",
      image: "/images/mexico/cities/los-cabos/hotels/jw-marriott-los-cabos-beach-resort/main.jpg",
      description:
        "With cobblestone streets, colonial charm, and art-filled courtyards, San José offers a refined and intimate atmosphere.",
      descriptionSecondary:
        "It’s ideal for those seeking sophistication and understated romance.",
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
      vibe: "Private • Expansive • Ultra-Luxury",
      image: "/images/mexico/cities/los-cabos/venues/park-hyatt-cabo-del-sol.jpg",
      description:
        "Stretching between the two towns, the Corridor is home to some of the region’s most exclusive resorts and cliffside venues.",
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
    "Los Cabos isn’t just about the ceremony, it's about creating a full experience.",
  multiDayImage: "/lp/los-cabos-tourism/wedding-venues.jpg",
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
    "You don’t need to manage it alone. We turn Los Cabos into a seamless, beautifully executed wedding experience.",
}

const page = () => {
  return (
    <main>
      <LosCabosHero content={heroContent} />
      <LosCabosDestinationStory content={pageContent} />

      <section className="py-16 md:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <h2 className="section-title mb-6 text-balance">Start Planning Your Los Cabos Wedding</h2>
              <h3 className="font-serif text-2xl text-foreground mb-4">Share your vision and we’ll prepare</h3>
              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">Personalized location recommendation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">Curated venue shortlist</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">Event flow concept</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">Guest accommodation strategy</span>
                </div>
                                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Check size={16} />
                  </span>
                  <span className="text-foreground">Budget guidance</span>
                </div>
              </div>
            </div>
            <div className="">
              <LosCabosInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
