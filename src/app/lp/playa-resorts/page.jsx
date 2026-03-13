import React from 'react'

export const metadata = {
    title: "Playa Resorts | Hyatt Ziva Destination Wedding Packages | DestinationPick",
    description: "Plan your Indian destination wedding at Hyatt Ziva Cancun, Los Cabos, or Puerto Vallarta, or Dreams La Romana. Multi-resort planning through DestinationPick x Playa Resorts partnership.",
    keywords: "Playa Resorts wedding, Hyatt Ziva Cancun wedding, Hyatt Ziva Los Cabos wedding, Indian wedding Playa Resorts, destination wedding Hyatt",
    alternates: {
        canonical: "https://www.destinationpick.com/lp/playa-resorts/",
    },
    openGraph: {
        title: "Playa Resorts | Indian Wedding Packages | DestinationPick",
        description: "Four extraordinary Playa Resorts properties across Mexico & Dominican Republic. Expert Indian wedding planning through DestinationPick.",
        images: [{ url: "/lp/playa/banner1.jpg", width: 1200, height: 630, alt: "Playa Resorts Wedding" }],
    },
}

import { Hero } from '../components/Hero'
import { BookingBenefits } from '../components/BookingBenefits'
import { ComparisonTable } from '../components/ComparisonTable'
import { Resortssection } from '../components/Resortssection'
import { WhyCouplesChoose } from '../components/WhyCouplesChoose'
import { PlanningSection } from '../components/PlanningSection'
const heroContent = {
  gallery: [
    '/lp/playa/banner1.jpg',
    '/lp/playa/banner2.jpg',
    '/lp/playa/banner3.jpg',
  ],
  title: 'Luxury Destination Weddings in Mexico & Dominican Republic',
  description: 'Four extraordinary beachfront resorts. One dedicated wedding planning partner.',
  location: '',
  primaryCtaText: 'Start Planning Your Wedding',
  primaryTargetId: 'overview',
  secondaryCtaText: 'Check Resort Comparison',
  secondaryTargetId: 'comparison',
}

const bookingBenefitsContent = {
  title: 'Why Book Through DestinationPick x Playa Resorts?',
  descriptions: [
    'Planning a destination wedding means coordinating venues, guest rooms, decor, events, and logistics across countries.',
    'Through our exclusive collaboration with Playa Resorts, DestinationPick helps couples plan seamless, multi-day destination weddings at some of the most sought-after all-inclusive resorts in Cancun, Los Cabos, Puerto Vallarta, and the Dominican Republic.',
  ],
  image: "/lp/playa/couple.jpg",
  leadInText: 'Through DestinationPick x Playa Resorts, you get:',
  items: [
    "Direct access to Playa Resorts' wedding-ready properties",
    'Structured wedding packages including complimentary options (select inclusions apply)',
    'Multi-day celebration planning support',
    'Guest accommodation block strategy',
    'Single point of contact via DestinationPick',
    'All-inclusive luxury for every guest',
  ],
  outroText:
    'Instead of contacting multiple resorts individually, you get one streamlined planning experience.',
}

const comparisonTableContent = {
  title: 'Compare Playa Resorts Wedding Options',
  columns: ['Resort', 'Best For', 'Guest Strength', 'Adults-Only Section', 'Family Appeal'],
  rows: [
    {
      resort: 'Hyatt Ziva Cancun',
      bestFor: 'Rooftop + Luxury',
      guestStrength: '400',
      adultsOnlySection: 'Yes',
      familyAppeal: 'Strong',
    },
    {
      resort: 'Hyatt Ziva Los Cabos',
      bestFor: 'Large Multi-Day Weddings',
      guestStrength: '500',
      adultsOnlySection: 'Yes',
      familyAppeal: 'Strong',
    },
    {
      resort: 'Hyatt Ziva Puerto Vallarta',
      bestFor: 'Intimate Bay Setting',
      guestStrength: '500',
      adultsOnlySection: 'Limited',
      familyAppeal: 'Moderate',
    },
    {
      resort: 'Dreams La Romana',
      bestFor: 'Grand Ballroom + Families',
      guestStrength: '700',
      adultsOnlySection: 'Sectioned',
      familyAppeal: 'Very Strong',
    },
  ],
}

const playaResorts = [
  {
    name: 'Hyatt Ziva Cancun',
    location: 'Cancun, Mexico',
    collection: 'Playa Resorts Collection',
    tagline: 'Surrounded by the Sea. Designed for Celebration.',
    description:
      'Hyatt Ziva Cancun sits on a dramatic peninsula surrounded by turquoise waters on three sides, just 25 minutes from Cancun International Airport.',
    image: '/lp/playa/Hyatt-Ziva-Cancun.jpg',
    whyChoose: [
      {
        title: 'Iconic Rooftop & Beach Venues',
        description:
          'Host beachfront ceremonies and rooftop receptions with panoramic Caribbean views.',
      },
      {
        title: 'Luxury All-Suite Experience',
        description:
          '547 rooms and suites including swim-up categories and the adults-only Turquoize tower for elevated exclusivity.',
      },
      {
        title: 'Culinary Variety for Multi-Day Events',
        description:
          '18 restaurants, lounges, and bars allow you to curate welcome dinners, cocktail nights, and post-wedding brunches effortlessly.',
      },
    ],
    idealFlow: [
      'Mehndi or Welcome Dinner: Beach terrace',
      'Sangeet: Rooftop terrace or ballroom',
      'Wedding Ceremony: Private beachfront',
      'Reception: Rooftop sunset celebration or indoor ballroom',
    ],
    ctaText: 'Request Proposal for Hyatt Ziva Cancun',
    ctaHref: '#contact',
  },
  {
    name: 'Hyatt Ziva Los Cabos',
    location: 'San Jose del Cabo, Mexico',
    collection: 'Playa Resorts Collection',
    tagline: 'Baja Peninsula Grandeur with Large-Scale Event Capacity',
    description:
      'Located along the Sea of Cortez, Hyatt Ziva Los Cabos blends dramatic desert landscapes with expansive wedding infrastructure.',
    image: '/lp/playa/Hyatt-Ziva-Los-Cabos.jpg',
    whyChoose: [
      {
        title: 'Large-Scale Wedding Capacity',
        description:
          '591 rooms and over 35,000 sq ft of event space, ideal for 200-500 guest celebrations.',
      },
      {
        title: 'Flexible Ceremony Options',
        description:
          'Beachfront, gazebo, or ballroom venues designed for multi-day wedding flows.',
      },
      {
        title: 'Resort Experience for Every Guest',
        description:
          'Swim-up suites, adults-only areas, Zen Spa, floating fire pits, and a family water park.',
      },
    ],
    idealFlow: [
      'Haldi: Garden terrace',
      'Sangeet: Ballroom with production setup',
      'Ceremony: Gazebo or beach',
      'Reception: Grand ballroom or outdoor celebration',
    ],
    ctaText: 'Request Proposal for Hyatt Ziva Los Cabos',
    ctaHref: '#contact',
  },
  {
    name: 'Hyatt Ziva Puerto Vallarta',
    location: 'Puerto Vallarta, Mexico',
    collection: 'Playa Resorts Collection',
    tagline: 'Private Bay Weddings with Mountain & Ocean Views',
    description:
      'Nestled within a secluded cove just 20 minutes from the airport, Hyatt Ziva Puerto Vallarta offers an intimate yet dramatic setting.',
    image: '/lp/playa/Hyatt-Ziva-Puerto-Vallarta.jpg',
    whyChoose: [
      {
        title: 'Versatile Event Venues',
        description:
          'Beach, gazebo, sky penthouse terrace, and ballroom options for weddings up to 500 guests.',
      },
      {
        title: 'Private Bay Setting',
        description: 'An exclusive atmosphere ideal for destination wedding groups.',
      },
      {
        title: 'All-Inclusive Convenience',
        description: '335 rooms with flexible suite configurations for guest comfort.',
      },
    ],
    idealFlow: [
      'Welcome Event: Oceanfront terrace',
      'Sangeet: Sky penthouse terrace',
      'Ceremony: Beach or gazebo',
      'Reception: Ballroom or sunset terrace',
    ],
    ctaText: 'Request Proposal for Hyatt Ziva Puerto Vallarta',
    ctaHref: '#contact',
  },
  {
    name: 'Dreams La Romana Resort & Spa',
    location: 'Dominican Republic',
    collection: 'Playa Resorts Collection',
    tagline: 'Blue Flag Beach Elegance with Family-Friendly Appeal',
    description:
      "Located 45 minutes from Punta Cana International Airport, Dreams La Romana offers one of the Caribbean's most celebrated beaches.",
    image: '/lp/playa/Dreams-La-Romana-Resort.jpg',
    whyChoose: [
      {
        title: 'Grand Ballroom Capacity',
        description: 'Accommodates up to 750 guests theater-style, ideal for large celebrations.',
      },
      {
        title: 'Family-Friendly Amenities',
        description: '418 rooms, water park, lazy river, Kids Club, and Teen Zone.',
      },
      {
        title: 'Dining & Celebration Variety',
        description: '6 restaurants and 8 bars to host multi-event dining experiences.',
      },
    ],
    idealFlow: [
      'Mehndi: Outdoor terrace',
      'Sangeet: Ballroom or beachfront',
      'Ceremony: Private beach',
      'Reception: Ballroom or open-air celebration',
    ],
    ctaText: 'Request Proposal for Dreams La Romana',
    ctaHref: '#contact',
  },
]

const resortsSectionContent = {
  title: 'The Playa Resorts Wedding Collection',
  description:
    'Each resort offers a distinct vibe, from modern peninsula luxury to private bay intimacy to expansive ballroom celebrations.',
  destinations: [
    {
      title: 'Mexico - 3 Distinct Playa Experiences',
      description:
        'Cancun, Los Cabos, and Puerto Vallarta provide rooftop, beachfront, and bay-side venues for vibrant multi-day wedding celebrations.',
    },
    {
      title: 'Dominican Republic - Family-Friendly Grandeur',
      description:
        'Dreams La Romana blends Blue Flag beachfront beauty with high-capacity celebration spaces for grand Indian weddings.',
    },
  ],
  tabs: [
    {
      id: 'mexico',
      label: 'Mexico Resorts',
      resorts: playaResorts.filter((resort) => resort.location.includes('Mexico')),
    },
    {
      id: 'dominican-republic',
      label: 'Dominican Republic Resorts',
      resorts: playaResorts.filter((resort) => resort.location.includes('Dominican Republic')),
    },
  ],
  resorts: playaResorts,
}

const whyCouplesChooseContent = {
  title: 'Why Couples Choose DestinationPick',
  intro: "You're not just booking a resort, you're planning a multi-day celebration.",
  points: [
    'Guide you toward the right property',
    'Structure multi-day event timelines',
    'Clarify package inclusions',
    'Optimize guest room blocks',
    'Simplify cross-border planning',
  ],
  outro:
    'We help you avoid common destination wedding mistakes while maximizing value.',
}

const planningContent = {
  id: 'contact',
  label: 'Start Planning',
  heading: 'Start Planning Your Playa Resorts Wedding',
  formVariant: 'playa',
  listTitle: 'Tell us your vision and we’ll prepare',
  listItems: [
    'Resort recommendation',
    'Package overview',
    'Event flow plan',
    'Guest accommodation strategy',
    'Budget guidance',
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
      <BookingBenefits content={bookingBenefitsContent} />
      <WhyCouplesChoose content={whyCouplesChooseContent} />
      <Resortssection content={resortsSectionContent} />
      <ComparisonTable content={comparisonTableContent} />
      <PlanningSection content={planningContent} />
    </main>
  )
}

export default page
