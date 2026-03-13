"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
    destinations: [
        { label: "Destinations", href: "/destinations/" },
        { label: "Mexico", href: "/destinations/mexico/" },
        { label: "Dominican Republic", href: "/destinations/dominican-republic/" },
        { label: "Bahamas", href: "/destinations/bahamas/" },
    ],
    airlines: [
        { label: "British Airways", href: "/british-airways/" },
        { label: "Emirates", href: "/emirates/" },
        { label: "Etihad Airways", href: "/etihad-airways/" },
        { label: "Qatar Airways", href: "/qatar-airways/" },
    ],
    company: [
        { label: "About Us", href: "/about-us/" },
        { label: "Our Team", href: "/our-team/" },
        { label: "Services", href: "/services/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact", href: "/contact/" },
    ],
}

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/destinationpick/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/destinationpick.us", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@destinationpick", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/destinationpickusa/", label: "LinkedIn" },
]

export function Footer() {
    return (
        <footer className="bg-foreground text-background">


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <Link
                            href="/"
                            className="group inline-block mb-6 relative w-48 sm:w-56 h-12 mx-auto lg:mx-0"
                        >
                            <Image
                                src="/images/logo.webp"
                                alt="destination pick logo"
                                fill
                                className="object-contain"
                            />
                        </Link>

                        <p className="text-background/70 leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
                            Creating unforgettable destination weddings and travel experiences for over 30 years.
                            Your love story deserves a breathtaking backdrop.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 hover:border-background/40 transition-colors"
                                    >
                                        <Icon size={18} className="text-background/80" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Destinations */}
                    <div className="text-left">
                        <h4 className="font-medium text-lg text-background mb-4">
                            Destinations
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.destinations.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-background/60 hover:text-accent text-[15px] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-left">
                        <h4 className="font-medium text-lg text-background mb-4">
                            Popular Airlines
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.airlines.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-background/60 hover:text-accent text-[15px] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-left">
                        <h4 className="font-medium text-lg text-background mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-background/60 hover:text-accent text-[15px] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>


            {/* Bottom Bar */}
            <div className="border-t border-background/10">
                <div className="container mx-auto px-4 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
                        <p>© 2026 DestinationPick. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy-policy" className="hover:text-background transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-conditions" className="hover:text-background transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/user-agreement" className="hover:text-background transition-colors">
                                User Agreement
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Logo Watermark */}
            <div className="container mx-auto px-4 lg:px-8 pb-12 overflow-hidden">
                <p className="font-serif text-4xl lg:text-[6vw] text-background/5 leading-none text-center select-none">
                    DestinationPick
                </p>
            </div>
        </footer>
    )
}
