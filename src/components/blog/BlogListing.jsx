"use client"
import React, { useState } from "react"
import Link from "next/link"
import { blogCategories } from "../../data/blogPosts"

export default function BlogListing({ posts }) {
    const [activeCategory, setActiveCategory] = useState("All")

    const filtered = activeCategory === "All"
        ? posts
        : posts.filter((p) => p.category === activeCategory)

    return (
        <>
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {blogCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeCategory === cat
                                ? "bg-accent text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}/`}
                        className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                    {post.category}
                                </span>
                                <span className="text-xs text-gray-400">{post.readTime}</span>
                            </div>
                            <h2 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                            <div className="mt-4 text-sm text-gray-400">
                                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
