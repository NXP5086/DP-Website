import DestinationpageSection from "../../components/DestinationpageSection"
import Fullbanner from "../../components/Fullbanner"
import LocationmapWrapper from "../../components/LocationmapWrapper"
import { motion } from "framer-motion"
export const metadata = {
    title: "Destination Weddings in Mexico & Punta Cana | All-Inclusive Packages",
    description: "Discover destination wedding packages in Cancun, Cabo San Lucas & Punta Cana. Beach venues, luxury resorts & stress-free planning in one place.",
    alternates: {
        canonical: "https://www.destinationpick.com/destinations",
    },
}
export default function DestinationsPage() {
    const revealVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <main className="min-h-screen bg-background">
            <Fullbanner />

            <section className="section-padding">
                <div className="container mx-auto px-4 lg:px-8">
                    <div
                        className="text-center mb-16"
                    >
                        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                            Explore Destinations
                        </p>
                        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground font-light leading-[1.15] mb-6 text-balance">
                            Best Locations for Destination Weddings, Tours, Events and More
                        </h1>
                        <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
                        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                            Discover our hand-picked selection of breathtaking wedding destinations.
                        </p>
                    </div>
                </div>
                <div
                    className="max-w-5xl mx-auto"
                >
                    <LocationmapWrapper />
                </div>
            </section>

            <DestinationpageSection />
        </main>
    )
}
