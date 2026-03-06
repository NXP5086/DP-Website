const services = [
    "Venue Scouting",
    "Travel Planning",
    "Charter/Private Jets",
    "Resort Booking",
    "On-site Coordination",
    "Transportation",
    "Tours & Activities",
    "Concierge Service",
    "Event Design",
    "Vendor Management",
]

export function MarqueeStrip() {
    return (
        <div className="bg-primary py-4 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...services, ...services].map((service, index) => (
                    <span
                        key={`service-${index}`}
                        className="mx-8 text-primary-foreground text-sm tracking-[0.2em] uppercase flex items-center gap-8"
                    >
                        <span>{service}</span>
                        <span className="text-accent">✦</span>
                    </span>
                ))}
            </div>
        </div>
    )
}
