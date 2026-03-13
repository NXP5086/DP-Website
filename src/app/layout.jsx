import React from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { ReduxProvider } from "../components/ReduxProvider";
import Weddingpopupform from "../components/forms/Weddingpopupform";
import Mobilebooknow from "../components/Mobilebooknow";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-serif",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL("https://www.destinationpick.com"),
    title: {
        default: "DestinationPick | Luxury Destination Weddings",
        template: "%s | DestinationPick",
    },
    description:
        "Your dream destination wedding awaits. End-to-end luxury wedding planning in Mexico, Punta Cana, Bahamas & beyond. Serving couples across the USA.",
    keywords:
        "destination wedding, luxury wedding planner, wedding travel, destination wedding packages, Mexico wedding, Punta Cana wedding, Bahamas wedding",
    icons: {
        icon: "/favicon.webp",
    },
    openGraph: {
        type: "website",
        siteName: "DestinationPick",
        title: "DestinationPick | Luxury Destination Weddings",
        description:
            "Your dream destination wedding awaits. End-to-end luxury wedding planning in Mexico, Punta Cana, Bahamas & beyond. Serving couples across the USA.",
        images: [
            {
                url: "/banners/banner1.jpg",
                width: 1200,
                height: 630,
                alt: "DestinationPick — Luxury Destination Weddings",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@destinationpick",
        title: "DestinationPick | Luxury Destination Weddings",
        description:
            "Your dream destination wedding awaits. End-to-end luxury wedding planning in Mexico, Punta Cana, Bahamas & beyond.",
        images: ["/banners/banner1.jpg"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
            <head>
                {/* Performance: preconnect to external origins */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                {/* Preload hero video poster for LCP */}
                <link rel="preload" as="image" href="/videos/video-poster.jpg" />

                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5RBLCS3');
            `,
                    }}
                />

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-FY83C3PSVX"
                    strategy="afterInteractive"
                />
                <Script
                    id="ga-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FY83C3PSVX');
            `,
                    }}
                />


                <script
                    id="organization-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "DestinationPick",
                            "url": "https://www.destinationpick.com/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.destinationpick.com/images/logo.webp",
                                "width": 400,
                                "height": 100,
                            },
                            "description": "DestinationPick is a luxury destination wedding and travel management company serving couples across the USA. Specializing in Mexico, Punta Cana, Bahamas, and beyond.",
                            "foundingDate": "2020",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "1039 I-35E Suite 304",
                                "addressLocality": "Carrollton",
                                "addressRegion": "TX",
                                "postalCode": "75006",
                                "addressCountry": "US",
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-917-913-4262",
                                "contactType": "Customer Service",
                                "areaServed": "Worldwide",
                                "availableLanguage": ["English"],
                            },
                            "sameAs": [
                                "https://www.facebook.com/destinationpick",
                                "https://www.instagram.com/destinationpick",
                                "https://www.linkedin.com/company/destinationpick",
                                "https://www.youtube.com/destinationpick",
                            ],
                        }),
                    }}
                />

                <script
                    id="travel-agency-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "TravelAgency",
                            "name": "DestinationPick",
                            "url": "https://www.destinationpick.com/",
                            "logo": "https://www.destinationpick.com/images/logo.webp",
                            "description":
                                "DestinationPick offers travel management, destination weddings, tours & event planning with expert concierge services across top global locations.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-917-913-4262",
                                "contactType": "Customer Service",
                                "availableLanguage": ["English"],
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "1039 I-35E Suite 304",
                                "addressLocality": "Carrollton",
                                "addressRegion": "TX",
                                "postalCode": "75006",
                                "addressCountry": "US",
                            },
                            "sameAs": [
                                "https://www.facebook.com/destinationpick",
                                "https://www.instagram.com/destinationpick",
                                "https://www.linkedin.com/company/destinationpick",
                                "https://www.youtube.com/destinationpick",
                            ],
                            "areaServed": ["Worldwide"],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Travel & Wedding Services",
                                "itemListElement": [
                                    { "@type": "Offer", "name": "Destination Weddings" },
                                    { "@type": "Offer", "name": "Private Travel Tours" },
                                    { "@type": "Offer", "name": "Corporate Travel" },
                                ],
                            },
                        }),
                    }}
                />

                <script
                    id="website-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "DestinationPick",
                            "url": "https://www.destinationpick.com/",
                        }),
                    }}
                />
            </head>

            <body className="font-sans antialiased">
                {/* GTM Noscript (also visible in Ctrl+U) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5RBLCS3"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>

                <ReduxProvider>
                    <Weddingpopupform />
                    <Navigation />
                    {children}
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                    <Mobilebooknow />
                </ReduxProvider>
            </body>
        </html>
    );
}