"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "../lib/utils"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { openModal } from "../redux/slices/weddingPopupSlice"

const navLinks = [
    {
        href: "/about-us", label: "About",
        children: [
            { href: "/about-us", label: "About Us" },
            { href: "/our-team", label: "Our Team" },
        ],
    },
    { href: "/services", label: "Services" },
    { href: "/destinations", label: "Destinations" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
]

export function Navigation() {
    const dispatch = useDispatch()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null)

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
                        : "bg-black/50 py-5"
                )}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="group relative w-40 h-10">
                            <Image
                                src="/images/logo.webp"
                                alt="destination pick logo"
                                fill
                                priority
                                sizes="(max-width: 768px) 160px, 200px"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <div key={link.href} className="relative group h-full flex items-center">
                                    {link.children ? (
                                        // Dropdown Trigger (Desktop)
                                        <>
                                            <button
                                                className={cn(
                                                    "flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                                                    isScrolled ? "text-foreground" : "text-white"
                                                )}
                                            >
                                                {link.label}
                                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="bg-popover border border-border shadow-lg rounded-lg overflow-hidden w-[180px] p-1">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted/50 rounded-md transition-colors text-left"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        // Regular Link
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-70 relative group",
                                                isScrolled ? "text-foreground" : "text-white"
                                            )}
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                onClick={() => dispatch(openModal())}
                                id="book-consultation-btn-id"
                                className={cn(
                                    "book-consultation-btn rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
                                    isScrolled
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30"
                                )}
                            >
                                Book Consultation
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
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

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-all duration-500",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-xl" />

                <nav className="relative h-full flex flex-col items-center justify-center px-6 py-10 overflow-y-auto">
                    <div className="w-full max-w-sm flex flex-col gap-8">

                        {navLinks.map((link, index) => (
                            <div key={link.href} className="w-full text-center">
                                {link.children ? (
                                    /* Mobile Accordion */
                                    <div className="flex flex-col items-center">
                                        <button
                                            onClick={() =>
                                                setActiveDropdownIndex(
                                                    activeDropdownIndex === index ? null : index
                                                )
                                            }
                                            className={cn(
                                                "w-full flex items-center justify-between text-xl font-serif text-white tracking-wide",
                                                "transition-all duration-500 hover:text-accent",
                                                isMobileMenuOpen
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 translate-y-4"
                                            )}
                                            style={{ transitionDelay: `${index * 80}ms` }}
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown
                                                className={cn(
                                                    "w-5 h-5 transition-transform duration-300",
                                                    activeDropdownIndex === index && "rotate-180"
                                                )}
                                            />
                                        </button>

                                        {/* Submenu */}
                                        <div
                                            className={cn(
                                                "w-full overflow-hidden transition-all duration-300 ease-in-out",
                                                activeDropdownIndex === index
                                                    ? "max-h-96 opacity-100 mt-4"
                                                    : "max-h-0 opacity-0"
                                            )}
                                        >
                                            <div className="flex flex-col gap-3 pl-2 border-l border-white/15">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false)
                                                            setActiveDropdownIndex(null)
                                                        }}
                                                        className=" text-left text-white/70  hover:text-accent transition-colors"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Regular Link */
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "block text-lg text-left font-serif text-white tracking-wide",
                                            "transition-all duration-500 hover:text-accent",
                                            isMobileMenuOpen
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-4"
                                        )}
                                        style={{ transitionDelay: `${index * 80}ms` }}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Divider */}
                        <div className="h-px bg-white/15 my-4" />

                    </div>
                </nav>
            </div>

        </>
    )
}