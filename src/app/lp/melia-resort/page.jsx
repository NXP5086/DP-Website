import React from 'react'

export const metadata = {
    title: "Paradisus Melia Resorts | Indian Destination Wedding Packages | DestinationPick",
    description: "Plan a luxury Indian destination wedding at Paradisus Cancun, Paradisus Playa del Carmen, Paradisus La Perla, or Paradisus Palma Real. Expert multi-resort planning by DestinationPick.",
    keywords: "Paradisus wedding packages, Melia resorts wedding, Indian wedding Paradisus Cancun, Paradisus Punta Cana wedding, destination wedding Melia",
    alternates: {
        canonical: "https://www.destinationpick.com/lp/melia-resort/",
    },
    openGraph: {
        title: "Paradisus Melia Resorts | Indian Wedding Packages | DestinationPick",
        description: "Four iconic Paradisus beachfront resorts in Mexico & Dominican Republic. One expert Indian wedding planning partner.",
        images: [{ url: "/lp/melia/banner1.jpg", width: 1200, height: 630, alt: "Paradisus Melia Resort Wedding" }],
    },
}

import { Hero } from '../components/Hero'
import { BookingBenefits } from '../components/BookingBenefits'
import { ComparisonTable } from '../components/ComparisonTable'
import { WhyCouplesChoose } from '../components/WhyCouplesChoose'
import { PlanningSection } from '../components/PlanningSection'
import { DestinationTabbedResorts } from '../components/DestinationTabbedResorts'
import { LandingFaq } from '../components/LandingFaq'
const heroContent = {
  gallery: [
    '/lp/melia/banner1.jpg',
    '/lp/melia/banner2.jpg',
    '/lp/melia/banner3.jpg',
    '/lp/melia/banner4.jpg',
  ],
  title: 'Luxury Paradisus Destination Weddings in Mexico & Dominican Republic',
  description: 'Four iconic beachfront resorts. One expert wedding planning partner.',
  location: '',
  primaryCtaText: 'Start Planning Your Wedding',
  primaryTargetId: 'overview',
  secondaryCtaText: 'Request Resort Comparison',
  secondaryTargetId: 'comparison',
}

const bookingBenefitsContent = {
  title: 'Why Plan Your Paradisus Wedding Through DestinationPick?',
  descriptions: [
    'Planning a destination wedding involves more than choosing a beach.',
    'Through our exclusive collaboration with Melia Resorts - Paradisus Collection, DestinationPick helps you plan seamless, multi-day destination weddings in Mexico and the Dominican Republic.',
    'From rooftop celebrations in Cancun to private Riviera Maya beachfront ceremonies and grand Punta Cana ballroom receptions, we help you compare, choose, and plan with confidence.',
    'You need the right venue, guest room strategy, event flow, premium upgrades, and coordination across countries.',
  ],
  leadInText: 'Through DestinationPick x Melia Resorts, you get:',
  items: [
    'Direct access to Romance by Paradisus wedding programs',
    'Premium options like The Reserve (adults-only luxury)',
    'Family-focused upgrades through Family Concierge (select resorts)',
    'Multi-day wedding flow structuring',
    'Guest accommodation block planning',
    'One dedicated planning advisory team',
  ],
  outroText:
    'Instead of contacting multiple resorts individually, you get one streamlined experience with curated recommendations.',
    image:"/lp/melia/couple.jpg"
}

const destinationTabsContent = {
  title: 'Choose Your Destination',
  destinations: [
    {
      flag: '🇲🇽',
      title: 'Mexico - 3 Distinct Paradisus Experiences',
      description:
        'Cancun and Riviera Maya offer modern architecture, beachfront ceremony setups, rooftop venues, and flexible multi-event spaces. Whether you prefer a vibrant resort atmosphere or an adults-only boutique-style celebration, Mexico offers variety within one wedding portfolio.',
    },
    {
      flag: '🇩🇴',
      title: 'Dominican Republic - Punta Cana Elegance',
      description:
        "Punta Cana blends expansive beachfront beauty with grand ballroom capacity and premium hospitality, ideal for larger wedding celebrations.",
    },
  ],
  tabs: [
    {
      id: 'mexico',
      label: 'Mexico Resorts',
      resorts: [
        {
          name: 'PARADISUS CANCUN',
          location: 'Cancun, Mexico',
          tagline: 'Iconic Architecture Surrounded by the Sea',
          description:
            'Paradisus Cancun sits on a breathtaking peninsula surrounded by turquoise waters. Recognized as an AAA Four Diamond property, it delivers both aesthetic impact and premium wedding infrastructure.',
          image: '/lp/melia/Paradisus-Cancun.jpg',
          whyChoose: [
            {
              title: 'Striking Ceremony Settings',
              description: 'Beachfront venues and elegant terraces ideal for sunset ceremonies.',
            },
            {
              title: 'Premium Upgrade Options',
              description:
                'The Reserve: adults-only luxury within the resort. Family Concierge: elevated family experience for guests traveling with children.',
            },
            {
              title: 'Culinary Variety for Multi-Day Events',
              description:
                'Multiple restaurants and bars make welcome dinners, rehearsal evenings, and post-wedding brunches effortless.',
            },
          ],
          idealFlow: [
            'Welcome Dinner - Terrace or beachfront',
            'Mehndi / Haldi - Outdoor garden-style setup',
            'Ceremony - Private beach',
            'Reception - Ballroom or elevated terrace',
          ],
          ctaText: 'Request Proposal for Paradisus Cancun',
          ctaHref: '#contact',
        },
        {
          name: 'PARADISUS PLAYA DEL CARMEN',
          location: 'Riviera Maya, Mexico',
          tagline: 'Family-Friendly Luxury in the Heart of Riviera Maya',
          description:
            'Paradisus Playa del Carmen offers a balanced environment ideal for weddings where guests range from children to grandparents.',
          image: '/lp/melia/Paradisus-Playa-del-Carmen.jpg',
          whyChoose: [
            {
              title: 'Romance by Paradisus Wedding Program',
              description: 'From simple ceremonies to sophisticated multi-event celebrations.',
            },
            {
              title: 'Extensive Dining Variety',
              description: 'Over 20 restaurants and bars across the resort complex.',
            },
            {
              title: 'Flexible Celebration Spaces',
              description: 'Beachfront setups, garden areas, and ballroom options.',
            },
          ],
          idealFlow: [
            'Welcome Night - Garden terrace',
            'Sangeet - Ballroom or open-air space',
            'Ceremony - Beachfront',
            'Reception - Ballroom or poolside terrace',
          ],
          ctaText: 'Request Proposal for Paradisus Playa del Carmen',
          ctaHref: '#contact',
        },
        {
          name: 'PARADISUS LA PERLA - Adults Only',
          location: 'Riviera Maya, Mexico',
          tagline: 'Chic Adults-Only Weddings with Elevated Privacy',
          description:
            'Paradisus La Perla is an adults-only sanctuary within Riviera Maya, perfect for intimate, sophisticated wedding groups.',
          image: '/lp/melia/Paradisus-La-Perla.jpg',
          whyChoose: [
            {
              title: 'Adults-Only Atmosphere',
              description: 'Refined, boutique-style environment ideal for stylish celebrations.',
            },
            {
              title: 'Personalized Service',
              description: 'Premium butler service and curated guest experiences.',
            },
            {
              title: 'Wellness & Spa Integration',
              description: 'Perfect for wedding weekends that include relaxation and spa rituals.',
            },
          ],
          idealFlow: [
            'Welcome Cocktails - Lounge terrace',
            'Sangeet - Private event space',
            'Ceremony - Beachfront',
            'Reception - Elegant terrace under the stars',
          ],
          ctaText: 'Request Proposal for Paradisus La Perla',
          ctaHref: '#contact',
        },
      ],
    },
    {
      id: 'dominican-republic',
      label: 'Dominican Republic Resorts',
      resorts: [
        {
          name: 'PARADISUS PALMA REAL',
          location: 'Punta Cana, Dominican Republic',
          tagline: 'Grand Caribbean Celebrations with Resort-Scale Flexibility',
          description:
            "Paradisus Palma Real offers one of Punta Cana's most celebrated beachfront locations, blending resort-scale infrastructure with elegant wedding services.",
          image: '/lp/melia/Paradisus-Palma-Real.jpg',
          whyChoose: [
            {
              title: 'Romance by Paradisus Expertise',
              description: 'Structured wedding planning support with customizable options.',
            },
            {
              title: 'Adults-Only Premium Option',
              description: 'The Reserve for elevated privacy and exclusivity.',
            },
            {
              title: 'Expansive Celebration Spaces',
              description: 'Large ballroom capacity ideal for high-guest-count weddings.',
            },
            {
              title: 'Family-Friendly Amenities',
              description: 'Kids and teen programming for multi-generational celebrations.',
            },
          ],
          idealFlow: [
            'Mehndi - Outdoor terrace',
            'Sangeet - Ballroom with production setup',
            'Ceremony - Beachfront',
            'Reception - Grand ballroom or open-air event',
          ],
          ctaText: 'Request Proposal for Paradisus Palma Real',
          ctaHref: '#contact',
        },
      ],
    },
  ],
}

const comparisonTableContent = {
  title: 'Compare Paradisus Wedding Resorts',
  columns: ['Resort', 'Best For', 'Adults-Only Option', 'Family Focus', 'Atmosphere'],
  rows: [
    {
      resort: 'Paradisus Cancun',
      bestFor: 'Iconic Cancun weddings',
      guestStrength: 'The Reserve',
      adultsOnlySection: 'Family Concierge',
      familyAppeal: 'Vibrant & Premium',
    },
    {
      resort: 'Paradisus Playa del Carmen',
      bestFor: 'Balanced family weddings',
      guestStrength: 'Sectioned',
      adultsOnlySection: 'Strong',
      familyAppeal: 'Relaxed Riviera',
    },
    {
      resort: 'Paradisus La Perla',
      bestFor: 'Adults-only chic weddings',
      guestStrength: 'Fully Adults Only',
      adultsOnlySection: 'No',
      familyAppeal: 'Boutique & Elegant',
    },
    {
      resort: 'Paradisus Palma Real',
      bestFor: 'Large Punta Cana weddings',
      guestStrength: 'The Reserve',
      adultsOnlySection: 'Strong',
      familyAppeal: 'Grand Caribbean',
    },
  ],
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
  heading: 'Start Planning Your Paradisus Wedding',
  formVariant: 'melia',
  listTitle: 'Tell us about your wedding vision and we’ll prepare:',
  listItems: [
    'Personalized resort recommendation',
    'Wedding package overview',
    'Suggested event flow',
    'Guest accommodation plan',
    'Budget guidance',
  ],
  formContent: {
    title: 'Inquiry Form',
    ctaText: 'Get My Custom Wedding Proposal',
  },
}

const faqContent = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What is Romance by Paradisus?',
      answer:
        "It is Melia's structured wedding program offering tailored celebrations, from intimate beachfront ceremonies to sophisticated multi-day events.",
    },
    {
      question: 'Which resort is best for adults-only weddings?',
      answer:
        'Paradisus La Perla is fully adults-only. Paradisus Cancun and Paradisus Palma Real offer The Reserve adults-only sections.',
    },
    {
      question: 'Which resort is best for family-heavy guest lists?',
      answer:
        'Paradisus Playa del Carmen and Paradisus Palma Real offer strong family-friendly infrastructure.',
    },
    {
      question: 'Can these resorts host multi-day weddings?',
      answer: 'Yes. All four resorts support structured multi-event wedding flows.',
    },
  ],
}

const page = () => {
  return (
    <main>
      <Hero content={heroContent} />
      <BookingBenefits content={bookingBenefitsContent} />
      <WhyCouplesChoose content={whyCouplesChooseContent} />
      <DestinationTabbedResorts content={destinationTabsContent} />
      <ComparisonTable content={comparisonTableContent} />
      <LandingFaq content={faqContent} />
      <PlanningSection content={planningContent} />
    </main>
  )
}

export default page
