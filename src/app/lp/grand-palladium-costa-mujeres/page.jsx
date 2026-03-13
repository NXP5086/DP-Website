import React from 'react'

export const metadata = {
    title: "Grand Palladium Costa Mujeres | Indian Wedding Packages Cancun | DestinationPick",
    description: "Host your grand Indian wedding at Grand Palladium Costa Mujeres, Cancun — featuring a signature canal boat system, 707-guest capacity, 6 event venues, and all-inclusive luxury. Expert planning by DestinationPick.",
    keywords: "Grand Palladium Costa Mujeres wedding, Indian wedding Cancun luxury resort, Costa Mujeres destination wedding, Grand Palladium wedding packages",
    alternates: {
        canonical: "https://www.destinationpick.com/lp/grand-palladium-costa-mujeres/",
    },
    openGraph: {
        title: "Grand Palladium Costa Mujeres | Indian Wedding Packages | DestinationPick",
        description: "707-guest capacity, unique canal boat system, and beachfront mandap setups. The ultimate Indian wedding destination in Cancun.",
        images: [{ url: "/lp/grand-palladium/palladium-img.jpg", width: 1200, height: 630, alt: "Grand Palladium Costa Mujeres Wedding" }],
    },
}

import { Hero } from '../components/Hero'
import { Overview } from '../components/Overview'
import { WeddingDetails } from '../components/Weddingdetails'
import { ResortHighlights } from '../components/ResortHighlights'
import { GrandPalladiumPlanningSection } from '../components/GrandPalladiumPlanningSection'

const heroContent = {
  gallery: [
    '/lp/grand-palladium/banner1.jpg',
    '/lp/grand-palladium/banner2.jpg',
    '/lp/grand-palladium/banner3.jpg',
  ],
  title: 'Host Your Grand Indian Wedding at Grand Palladium Costa Mujeres',
  description:
    "A luxury all-inclusive resort in Costa Mujeres, Cancun featuring a signature canal boat system, a private 'Village' plaza for themed celebrations, and multiple event venues designed for unforgettable multi-day Indian weddings.",
  location: 'Costa Mujeres, Cancun, Mexico',
  primaryCtaText: 'Get a Free Wedding Quote',
  primaryTargetId: 'contact',
  secondaryCtaText: 'View Wedding Packages',
  secondaryTargetId: 'packages',
}

const overviewContent = {
  label: 'Resort Overview',
  heading: 'Why Grand Palladium Costa Mujeres is Perfect',
  headingItalic: 'for Indian Weddings',
  description:
    'Indian weddings require scale, flexibility, and cultural understanding. Grand Palladium Costa Mujeres delivers all three - beautifully.',
  highlights: [
    'Host celebrations for up to 707 guests',
    '6 versatile event venues',
    'Unique in-resort canal boat system',
    'Dedicated Village plaza for Mehndi & Sangeet',
    'Beachfront mandap-ready ceremony setups',
    'On-site Indian cuisine options',
    'Luxury all-inclusive experience for every guest',
  ],
  location: 'Costa Mujeres, Cancun, Mexico',
  image: '/lp/grand-palladium/palladium-img.jpg',
  imageAlt: 'Grand Palladium Costa Mujeres overview',
  maxGuests: '300',
  rightTitle: 'Signature Experiences',
  rightItems: ['The Canal Boat Procession', 'The Village Plaza', 'Thai-Inspired Architecture'],
}

const weddingDetailsContent = {
  id: 'packages',
  label: 'Wedding Details',
  heading: 'Wedding Events',
  events: [
    { name: 'Mehndi & Haldi', description: 'Outdoor spaces ideal for colorful daytime rituals.' },
    { name: 'Sangeet Night', description: 'Ballroom and plaza options for dance floors and entertainment.' },
    { name: 'Wedding Ceremony', description: 'Private beachfront mandap setups overlooking the Caribbean Sea.' },
    { name: 'Reception', description: 'Elegant indoor ballroom or open-air celebration venues.' },
  ],
}

const resortHighlightsContent = {
  label: 'Resort Experience',
  heading: 'Grand Palladium Costa Mujeres Highlights',
  items: [
    {
      title: 'Resort Accommodations',
      description:
        '493 spacious suites including furnished balconies, hydro-massage bathtubs, swim-up options, and loft-style configurations.',
    },
    {
      title: 'Family Selection - VIP Upgrade',
      description:
        '172 Family Selection suites with private check-in, exclusive restaurant and pool access, dedicated butler/eButler service, priority reservations, and premium family amenities.',
    },
    {
      title: 'Dining & Celebration Options',
      description:
        'Multiple a la carte restaurants including Indian cuisine, international gourmet dining, extensive bar program, and customizable group dining arrangements.',
    },
    {
      title: 'Entertainment & Activities',
      description:
        'Daily live entertainment, fitness classes, Rafa Nadal Tennis Centre, beachfront activities, and Zentropia Palladium Spa & Wellness.',
    },
    {
      title: 'Spa & Relaxation',
      description:
        'Hydrotherapy circuits, couples treatments, and bridal grooming services at Zentropia Palladium Spa.',
    },
    {
      title: 'Explore Costa Mujeres',
      description: 'Beach clubs, coastal excursions, adventure parks, and Cancun nightlife options.',
    },
  ],
}

const planningContent = {
  id: 'contact',
  label: 'Start Planning',
  heading: 'Start Planning Your Indian Wedding',
  listTitle: 'Consultation Includes:',
  listItems: [
    'Dedicated wedding specialist',
    'Custom budget breakdown',
    'Venue walkthrough guidance',
    'No obligation consultation',
    'Indian wedding expertise',
  ],
  formContent: {
    title: 'Inquiry Form',
    ctaText: 'Get My Custom Wedding Proposal',
  },
}

const page = () => {
  return (
    <main>
      <Hero content={heroContent} />
      <Overview content={overviewContent} />

      <div className="">
        <WeddingDetails content={weddingDetailsContent} />
      </div>
      <ResortHighlights content={resortHighlightsContent} />
      <GrandPalladiumPlanningSection content={planningContent} />
    </main>
  )
}

export default page
