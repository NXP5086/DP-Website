"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"

const navLinks = [
    { href: "#venues", label: "Venues" },
    { href: "#services", label: "Services" },
    { href: "#celebrations", label: "Celebrations" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Get Quote" },
]

export function DestinationPageNavigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <nav className="flex items-center justify-between">
                        <Link href="/" className="group">
                            <span
                                className={cn(
                                    "font-serif text-2xl lg:text-3xl font-medium tracking-tight transition-colors",
                                    isScrolled ? "text-foreground" : "text-white"
                                )}
                            >
                                Destination
                                <span className="text-accent">Pick</span>
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-70 relative group",
                                        isScrolled ? "text-foreground" : "text-white"
                                    )}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <Button
                                asChild
                                className={cn(
                                    "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                                    isScrolled
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30"
                                )}
                            >
                                <Link href="#contact">Free Consultation</Link>
                            </Button>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 transition-colors",
                                isScrolled ? "text-foreground" : "text-white"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </nav>
                </div>
            </header>

            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-all duration-500",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 bg-foreground/95 backdrop-blur-md" />
                <nav className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-2xl font-serif text-white transition-all duration-500 hover:text-accent",
                                isMobileMenuOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            )}
                            style={{ transitionDelay: `${index * 75}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 rounded-full px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                        <Link href="#contact">Free Consultation</Link>
                    </Button>
                </nav>
            </div>
        </>
    )
}

