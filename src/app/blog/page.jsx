import React from "react"
import Bannersection from "../../components/Bannersection"
import BlogListing from "../../components/blog/BlogListing"
import { blogPosts } from "../../data/blogPosts"

export const metadata = {
    title: "Destination Wedding Blog | Planning Guides & Tips | DestinationPick",
    description: "Expert destination wedding planning guides for Mexico, Dominican Republic, Bahamas, and Cabo. Resort comparisons, Indian wedding tips, and cost breakdowns from DestinationPick.",
    keywords: "destination wedding blog, destination wedding planning, Indian destination wedding, destination wedding guide, wedding in Mexico, wedding in Punta Cana",
    alternates: {
        canonical: "https://www.destinationpick.com/blog/",
    },
    openGraph: {
        title: "Destination Wedding Blog | DestinationPick",
        description: "Expert destination wedding guides for Mexico, Punta Cana, Cabo, and the Bahamas. Resort comparisons, Indian wedding tips, and planning advice from DestinationPick.",
        type: "website",
        url: "https://www.destinationpick.com/blog/",
        images: [{ url: "/banners/banner1.jpg", width: 1200, height: 630, alt: "DestinationPick Destination Wedding Blog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Destination Wedding Blog | DestinationPick",
        description: "Expert destination wedding guides for Mexico, Punta Cana, Cabo, and the Bahamas.",
        images: ["/banners/banner1.jpg"],
        creator: "@DestinationPick",
        site: "@DestinationPick",
    },
}

export default function BlogPage() {
    return (
        <main>
            <Bannersection
                title="Destination Wedding Blog"
                description="Expert planning guides, resort comparisons, and destination spotlights for couples planning weddings in Mexico, Punta Cana, Cabo, and beyond."
                image="/banners/banner1.jpg"
            />

            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-10">
                        <h1 className="section-title mb-4">Destination Wedding Blog</h1>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
                        <p className="section-description max-w-2xl mx-auto">
                            Expert guides and planning advice for destination weddings in Mexico, the Dominican Republic, Bahamas, and Los Cabos.
                        </p>
                    </div>

                    <BlogListing posts={blogPosts} />
                </div>
            </section>
        </main>
    )
}
