import React from 'react'
import Link from 'next/link'
import Bannersection from '../../components/Bannersection'

export const metadata = { robots: { index: false, follow: false } }

const page = () => {
    return (
        <main>
            <Bannersection
                image="/images/destinations/hero-banner.jpg"
                title="Thank You"
                description="Your request has been received. Our destination wedding team will connect with you shortly."
            />

            <section className="section-padding bg-white">
                <div className="container max-w-4xl text-center">
                    <h1 className="section-title mb-4">We Appreciate Your Inquiry</h1>
                    <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        Thank you for reaching out to DestinationPick. Our experts are reviewing your details and
                        will get back to you with personalized options for your celebration.
                    </p>

                    <div className="bg-background border border-border rounded-xl p-6 md:p-8">
                        <h2 className="font-serif text-3xl text-foreground mb-4">What Happens Next?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            You can expect a call or email from our team soon to discuss your preferred destination,
                            dates, and wedding vision.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
