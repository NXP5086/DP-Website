'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Image from 'next/image'

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                />
            ))}
        </div>
    )
}

export default function GoogleReviews() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('/api/reviews')
            .then((r) => r.json())
            .then((d) => {
                if (d.error) setError(true)
                else setData(d)
            })
            .catch(() => setError(true))
    }, [])

    if (error || (data && data.reviews?.length === 0)) return null
    if (!data) return null // silently skip while loading — no skeleton flash on About page

    return (
        <section className="section-padding bg-gray-50">
            <div className="container">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="section-title text-center mb-2">What Couples Are Saying</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4"></div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <StarRating rating={Math.round(data.rating)} />
                        <span className="font-semibold text-gray-800">{data.rating}</span>
                        <span>· {data.total} reviews on Google</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.reviews.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-sm flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                {review.profile_photo_url ? (
                                    <Image
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                                        {review.author_name[0]}
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">{review.author_name}</p>
                                    <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                                </div>
                            </div>
                            <StarRating rating={review.rating} />
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
