"use client"

const defaultContent = {
  title: "Ceremony & Reception Settings",
  subtitle: "Los Cabos offers a range of venue styles to suit your vision:",
  settings: [],
  beyondTitle: "Beyond the Wedding Day",
  beyondDescription:
    "A Los Cabos wedding is more than a ceremony; it's a multi-day celebration.",
  beyondLead: "Treat your guests to:",
  beyondItems: [],
  outro: "Turn your wedding into a vacation your guests will never forget.",
}

export function LosCabosWeddingExperiences({ content = defaultContent }) {
  const settings = Array.isArray(content?.settings) ? content.settings : []
  const beyondItems = Array.isArray(content?.beyondItems) ? content.beyondItems : []

  return (
    <section className="section-padding bg-muted/30" id="experiences">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-4 text-center">{content.title}</h2>
          <p className="text-center text-muted-foreground mb-10">{content.subtitle}</p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-14">
            {settings.map((setting) => (
              <article key={setting.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{setting.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{setting.description}</p>
              </article>
            ))}
          </div>

          <div id="contact" className="rounded-3xl border border-border bg-card p-6 lg:p-9">
            <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3">{content.beyondTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">{content.beyondDescription}</p>
            <p className="text-foreground font-medium mb-4">{content.beyondLead}</p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {beyondItems.map((item) => (
                <li key={item} className="rounded-xl border border-border bg-background px-4 py-3 text-foreground">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">{content.outro}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
