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

function WhatsAppIcon({ size = 18, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.827L.057 23.171a.75.75 0 0 0 .92.92l5.344-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.51-5.27-1.4l-.38-.22-3.17.87.88-3.1-.25-.4A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
    )
}

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/destinationpick/", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/destinationpick.us", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@destinationpick", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/destinationpickusa/", label: "LinkedIn" },
    { icon: WhatsAppIcon, href: "https://wa.me/19179134262", label: "WhatsApp" },
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
