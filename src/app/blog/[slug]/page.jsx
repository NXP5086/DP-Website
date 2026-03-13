import React from "react"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { blogPosts } from "../../../data/blogPosts"
import ContactForm from "../../../components/forms/ContactForm"

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) return { title: "Article Not Found" }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords,
        alternates: {
            canonical: `https://www.destinationpick.com/blog/${post.slug}/`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            creator: "@DestinationPick",
            site: "@DestinationPick",
        },
    }
}

// Strip HTML tags to plain text
function stripHtml(html) {
    return (html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
}

// Count words in HTML content
function getWordCount(html) {
    return stripHtml(html).split(/\s+/).filter(Boolean).length
}

// Extract FAQ question/answer pairs from HTML content
function extractFAQ(html) {
    if (!html) return []
    const headerMatch = html.match(/<h2[^>]*>[^<]*Frequently Asked[^<]*<\/h2>/i)
    if (!headerMatch) return []
    const afterFAQ = html.slice(html.indexOf(headerMatch[0]) + headerMatch[0].length)
    const nextH2Idx = afterFAQ.search(/<h2[^>]*>/)
    const section = nextH2Idx > 0 ? afterFAQ.slice(0, nextH2Idx) : afterFAQ
    const pairs = []
    const regex = /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi
    let match
    while ((match = regex.exec(section)) !== null) {
        const q = match[1].replace(/<[^>]+>/g, "").trim()
        const a = match[2].replace(/<[^>]+>/g, "").trim()
        if (q && a) pairs.push({ q, a })
    }
    return pairs
}

export default async function BlogArticlePage({ params }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)
    if (!post) notFound()

    const related = blogPosts
        .filter((p) => p.slug !== slug && p.category === post.category)
        .slice(0, 3)

    const faqPairs = extractFAQ(post.content || "")
    const wordCount = getWordCount(post.content || "")

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://www.destinationpick.com${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "wordCount": wordCount,
        "articleSection": post.category,
        "keywords": post.keywords,
        "author": post.author ? {
            "@type": "Person",
            "name": post.author.name,
            "jobTitle": post.author.title,
            "url": `https://www.destinationpick.com${post.author.url}`,
            "image": `https://www.destinationpick.com${post.author.image}`,
            "worksFor": {
                "@type": "Organization",
                "name": "DestinationPick",
                "url": "https://www.destinationpick.com/",
            },
        } : {
            "@type": "Organization",
            "name": "DestinationPick",
            "url": "https://www.destinationpick.com/",
        },
        "publisher": {
            "@type": "Organization",
            "name": "DestinationPick",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.destinationpick.com/favicon.webp",
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.destinationpick.com/blog/${post.slug}/`,
        },
    }

    const faqSchema = faqPairs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqPairs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a,
            },
        })),
    } : null

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.destinationpick.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.destinationpick.com/blog/" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.destinationpick.com/blog/${post.slug}/` },
        ],
    }

    return (
        <main>
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {faqSchema && <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

            {/* Hero image */}
            <div className="w-full h-64 md:h-96 overflow-hidden relative">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-end">
                    <div className="container pb-8">
                        <span className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-white/10 backdrop-blur px-3 py-1 rounded-full mb-3">
                            {post.category}
                        </span>
                        <h1 className="text-white font-serif text-2xl md:text-4xl font-bold max-w-3xl leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Article body */}
            <section className="section-padding">
                <div className="container max-w-3xl">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
                        <Link href="/" className="hover:text-accent">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-accent">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-600 truncate">{post.title}</span>
                    </nav>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                        <span>By <Link href={post.author?.url || "/our-team/"} className="font-semibold text-gray-700 hover:text-accent transition-colors">{post.author?.name || "DestinationPick"}</Link></span>
                        <span>·</span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>

                    {post.content ? (
                        /* Generated article content */
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    ) : (
                        /* Placeholder shown until content is generated */
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">{post.excerpt}</p>
                            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 my-8">
                                <p className="text-gray-700 font-medium mb-0">
                                    Ready to start planning? <Link href="/contact/" className="text-accent underline">Contact our team</Link> for a free consultation — we specialize in destination weddings across Mexico, Punta Cana, Bahamas, and beyond.
                                </p>
                            </div>
                            <p>
                                Planning a destination wedding is one of the most exciting decisions a couple can make — and one of the most complex. At DestinationPick, we&apos;ve helped hundreds of couples navigate the process from first inquiry to wedding day. This guide covers everything you need to know.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="section-padding bg-gray-50">
                    <div className="container">
                        <h2 className="section-title mb-2 text-center">Related Articles</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-10" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/blog/${p.slug}/`}
                                    className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="aspect-[16/9] overflow-hidden relative">
                                        <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="p-5">
                                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">{p.category}</span>
                                        <h3 className="font-serif text-base font-semibold text-gray-900 mt-1 group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA contact form */}
            <section className="section-padding bg-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="section-title mb-2">Start Planning Your Dream Wedding</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6" />
                    <p className="section-description mb-10">
                        Our destination wedding specialists are ready to help you plan the perfect celebration. No obligation — just expert guidance.
                    </p>
                    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-left">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )
}
