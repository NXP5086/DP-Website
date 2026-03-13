import React from 'react'
import Image from "next/image"

export function DreamsMacaoTrustScale({ items }) {
  return (
    <section id="overview" className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4 text-center">Trust & Scale</p>
          <h2 className="section-title text-center mb-10 text-balance">Dreams Macao Beach at a Glance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <article
                key={item}
                className="rounded-xl border border-border bg-background px-5 py-4 text-foreground"
              >
                <p className="leading-relaxed">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function DreamsMacaoExperience({ content }) {
  const {
    introTitle,
    introDescription,
    venueTitle,
    events,
    resortTitle,
    resortDescription,
    diningTitle,
    diningDescription,
    spaTitle,
    spaDescription,
    activitiesTitle,
    activitiesDescription,
    preferredClubTitle,
    preferredClubDescription,
    image,
    imageAlt,
  } = content

  return (
    <section id="packages" className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <div>
            <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">Why Dreams Macao Beach</p>
            <h2 className="section-title mb-6">{introTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{introDescription}</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border">
            <Image src={image} alt={imageAlt} width={800} height={600} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8 md:col-span-2">
            <h3 className="font-serif text-2xl text-foreground mb-4">{venueTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {events.map((event) => (
                <div key={event.title} className="rounded-xl bg-background border border-border px-4 py-4">
                  <p className="font-medium text-foreground mb-1">{event.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="font-serif text-2xl text-foreground mb-3">{resortTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{resortDescription}</p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="font-serif text-2xl text-foreground mb-3">{diningTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{diningDescription}</p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="font-serif text-2xl text-foreground mb-3">{spaTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{spaDescription}</p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="font-serif text-2xl text-foreground mb-3">{activitiesTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{activitiesDescription}</p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 lg:p-8 md:col-span-2">
            <h3 className="font-serif text-2xl text-foreground mb-3">{preferredClubTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">{preferredClubDescription}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export function DreamsMacaoTestimonial({ quote, cta }) {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-background p-8 lg:p-12 text-center">
          <p className="text-brand text-sm tracking-[0.3em] uppercase mb-4">Testimonial</p>
          <blockquote className="font-serif text-2xl text-foreground leading-relaxed mb-8">
            {quote}
          </blockquote>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              {cta.primary}
            </a>
            <a
              href="#packages"
              className="rounded-full px-8 py-3 border border-border text-foreground hover:bg-muted transition-colors"
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
