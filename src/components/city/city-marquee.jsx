export function CityMarquee({ data }) {
    const items = data?.items || []

    return (
        <div className="bg-foreground py-4 overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span
                        key={`${item}-${i}`}
                        className="flex items-center gap-8 text-background/80 text-sm font-medium tracking-widest uppercase"
                    >
                        <span>{item}</span>
                        <span className="w-2 h-2 rounded-full bg-accent/60" />
                    </span>
                ))}
            </div>
        </div>
    )
}


