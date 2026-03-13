import React from 'react'

export const metadata = {
    title: "Dreams Macao Beach Punta Cana | Indian Wedding Packages | DestinationPick",
    description: "Plan your dream Indian wedding at Dreams Macao Beach Punta Cana — a luxury all-inclusive beachfront resort with 500 suites, 6 event venues, and expert Indian wedding coordination by DestinationPick.",
    keywords: "Dreams Macao Beach wedding, Indian wedding Punta Cana, Dreams Macao Beach packages, destination wedding Dominican Republic",
    alternates: {
        canonical: "https://www.destinationpick.com/lp/dreams-macao-beach/",
    },
    openGraph: {
        title: "Dreams Macao Beach Punta Cana | Indian Wedding Packages | DestinationPick",
        description: "Luxury beachfront resort with 500 suites and 6 wedding venues. Perfect for multi-day Indian weddings in Punta Cana.",
        images: [{ url: "/images/dominican-republic/cities/punta-cana/hotels/dreams-macao-beach/main.jpg", width: 1200, height: 630, alt: "Dreams Macao Beach Wedding" }],
    },
}

import { Hero } from '../components/Hero'
import {
  DreamsMacaoExperience,
  DreamsMacaoTestimonial,
  DreamsMacaoTrustScale,
} from '../components/DreamsMacaoSections'
import { DreamsMacaoPlanningSection } from '../components/DreamsMacaoPlanningSection'
const heroContent = {
  gallery: [
    '/images/dominican-republic/cities/punta-cana/hotels/dreams-macao-beach/main.jpg',
    '/images/dominican-republic/cities/punta-cana/hotels/dreams-macao-beach/gallery-1.jpg',
    '/images/dominican-republic/cities/punta-cana/hotels/dreams-macao-beach/gallery-2.jpg',
    '/images/dominican-republic/cities/punta-cana/venues/dreams-macao-beach.jpg',
  ],
  title: 'Your Dream Indian Wedding in Punta Cana Starts at Dreams Macao Beach',
  description:
    'A luxury all-inclusive beachfront resort with 500 suites, flexible wedding venues, and expert planners—perfect for multi-day Indian celebrations.',
  location: 'Punta Cana, Dominican Republic',
  primaryCtaText: 'Get a Free Wedding Quote',
  primaryTargetId: 'contact',
  secondaryCtaText: 'View Wedding Packages',
  secondaryTargetId: 'packages',
}

const trustScaleItems = [
  'Host weddings up to 500 guests',
  '6 indoor & outdoor event venues',
  '500 luxury all-suite rooms',
  '10 restaurants & 7 bars',
  '40 minutes from Punta Cana Airport',
]

const experienceContent = {
  introTitle: 'Built for Indian Destination Weddings',
  introDescription:
    'Dreams Macao Beach is designed to handle the scale, traditions, and flow of Indian weddings—from Mehndi and Haldi to Sangeet, pheras, and reception—all within one seamless beachfront resort experience.',
  venueTitle: 'WEDDING EVENTS & VENUES',
  events: [
    {
      title: 'Mehndi & Haldi',
      description: 'Bright outdoor spaces ideal for daytime rituals.',
    },
    {
      title: 'Sangeet Night',
      description: 'Indoor or open-air venues designed for music and dance.',
    },
    {
      title: 'Wedding Ceremony',
      description: 'Beachfront mandap setup on Playa Macao.',
    },
    {
      title: 'Reception',
      description: 'Elegant ballroom or starlit outdoor celebrations.',
    },
  ],
  resortTitle: 'RESORT EXPERIENCE',
  resortDescription:
    '500 luxury non-smoking suites, many with swim-out or ocean-view options. Unlimited-Luxury® includes gourmet dining, premium drinks, 24-hour room service, entertainment, and no hidden costs.',
  diningTitle: 'DINING & CELEBRATIONS',
  diningDescription:
    '10 restaurants and 7 bars offering global cuisines, private group dining, welcome dinners, and post-wedding brunch options.',
  spaTitle: 'SPA & RELAXATION',
  spaDescription:
    'Dreams Spa by Pevonia offers ocean-view treatments, hydrotherapy circuits, and bridal spa services—perfect for pre and post-wedding relaxation.',
  activitiesTitle: 'ACTIVITIES FOR GUESTS',
  activitiesDescription:
    'Water park, snorkeling, bowling alley, sports courts, Kids Club (3–12), and Teens Club (13–17). A destination wedding and vacation combined.',
  preferredClubTitle: 'PREFERRED CLUB',
  preferredClubDescription:
    'Private lounge access, adults-only pool, upgraded amenities, and dedicated concierge services for VIP guests.',
  image: '/images/dominican-republic/cities/punta-cana/about/main.jpg',
  imageAlt: 'Dreams Macao Beach wedding venue view',
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
const testimonialQuote =
  '"Our Indian destination wedding at Dreams Macao Beach was flawless. The venues, service, and guest experience exceeded expectations." - Priya & Sameer'

const ctaContent = {
  primary: 'Get a Free Wedding Quote',
  secondary: 'View Wedding Packages',
}

const Page = () => {
  return (
    <main>
      <Hero content={heroContent} />
      <DreamsMacaoTrustScale items={trustScaleItems} />
      <DreamsMacaoExperience content={experienceContent} />
      <DreamsMacaoTestimonial quote={testimonialQuote} cta={ctaContent} />
      <DreamsMacaoPlanningSection content={planningContent} />
    </main>
  )
}

export default Page
