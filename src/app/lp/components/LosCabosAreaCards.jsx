"use client"

const fallbackImage = "/images/mexico/cities/los-cabos/about/main.jpg"

export function LosCabosAreaCards({ areas = [] }) {
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {areas.map((area) => (
        <article key={area.name} className="rounded-2xl p-5 lg:p-6 border border-border bg-card overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-semibold  mb-1">{area.name}</h3>
              <p className="text-xs font-medium  uppercase tracking-wide">{area.vibe}</p>
            </div>

          <div className="">
            <p className="text-muted-foreground leading-relaxed mb-2">{area.description}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{area.descriptionSecondary}</p>
            <p className="text-foreground font-medium mb-3">Perfect for:</p>
            <ul className="space-y-2">
              {area.perfectFor?.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
