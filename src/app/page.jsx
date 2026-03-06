import { HeroSection } from "../components/hero-section"
import { MarqueeStrip } from "../components/marquee-strip"
import { AboutSection } from "../components/about-section"
import { DestinationsSection } from "../components/destinations-section"
import { ServicesSection } from "../components/services-section"
import { StoriesSection } from "../components/stories-section"
import { PartnersSection } from "../components/partners-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { FAQSection } from "../components/faq-section"
import { InstagramSection } from "../components/instagram-section"
import { ContactSection } from "../components/contact-section"

const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I choose the best travel destination for my vacation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choosing the right travel destination depends on your budget, travel season, and preferred experience such as luxury resorts, honeymoon trips, family vacations, or adventure travel. DestinationPick helps travelers compare destinations based on weather, resort quality, activities, and travel style so they can confidently select the ideal vacation spot.",
            },
        },
        {
            "@type": "Question",
            "name": "Which destinations are best for luxury all-inclusive resorts?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Luxury all-inclusive resorts are most popular in destinations like Cancun, Cabo, Punta Cana, and the Caribbean. DestinationPick features carefully selected resort options in these locations, helping travelers discover beachfront properties, gourmet dining experiences, spa retreats, and premium vacation packages.",
            },
        },
        {
            "@type": "Question",
            "name": "What are the most popular international destinations for honeymoon travel?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Popular honeymoon destinations include tropical beach resorts, romantic island escapes, and luxury coastal retreats. DestinationPick highlights top honeymoon-friendly destinations with private suites, sunset experiences, adults-only resorts, and curated honeymoon packages designed for unforgettable romantic getaways.",
            },
        },
        {
            "@type": "Question",
            "name": "When is the best time to visit popular beach destinations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best time to visit beach destinations typically falls during the dry season when temperatures are comfortable and rainfall is minimal. DestinationPick provides destination guides that outline seasonal travel insights, helping travelers avoid peak storm seasons while finding the best travel deals.",
            },
        },
        {
            "@type": "Question",
            "name": "Are destination wedding resorts available in international travel locations?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, many international destinations offer dedicated wedding resorts with comprehensive all-inclusive wedding packages. DestinationPick showcases top destination wedding locations where couples can explore beachfront venues, luxury accommodations, event planning services, and guest-friendly resort options.",
            },
        },
        {
            "@type": "Question",
            "name": "How can I compare travel destinations before booking a resort?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Comparing destinations involves evaluating resort categories, traveler reviews, pricing trends, flight access, and available experiences such as nightlife, cultural tours, or family activities. DestinationPick simplifies this comparison process by organizing destinations based on travel style, budget, and experience preferences.",
            },
        },
        {
            "@type": "Question",
            "name": "Which destinations offer the best family-friendly vacation experiences?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Family-friendly destinations typically feature all-inclusive resorts, kid-friendly amenities, water parks, safe beaches, and organized entertainment. DestinationPick helps families explore destinations that balance relaxation and activities, making vacation planning easier and more efficient.",
            },
        },
        {
            "@type": "Question",
            "name": "Can I find budget-friendly travel destinations with luxury experiences?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, several destinations offer a mix of affordable travel packages and premium resort experiences. DestinationPick guides travelers toward destinations where they can access luxury amenities, all-inclusive deals, and seasonal discounts without exceeding their travel budget.",
            },
        },
    ],
}

export const metadata = {
    title: "Destination Wedding Packages in Mexico & Punta Cana | DestinationPick",
    description: "Plan luxury destination weddings in Cancun, Cabo San Lucas & Punta Cana. Explore all-inclusive wedding packages, beach venues & expert planners.",
    alternates: {
        canonical: "https://www.destinationpick.com",
    },
}

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
            />
            <HeroSection />
            <MarqueeStrip />
            <AboutSection />
            <DestinationsSection />
            <ServicesSection />
            <StoriesSection />
            <PartnersSection />
            <TestimonialsSection />
            <FAQSection />
            <InstagramSection />
            <ContactSection />
        </main>
    )
}
