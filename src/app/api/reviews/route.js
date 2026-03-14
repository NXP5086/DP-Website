export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACE_ID

    if (!apiKey || !placeId) {
        return Response.json({ error: 'Missing configuration' }, { status: 500 })
    }

    try {
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
            { next: { revalidate: 86400 } } // cache for 24 hours
        )
        const data = await res.json()

        if (data.status !== 'OK') {
            return Response.json({ error: data.status }, { status: 502 })
        }

        const reviews = (data.result.reviews || [])
            .filter((r) => r.rating >= 4)
            .slice(0, 6)

        return Response.json({
            reviews,
            rating: data.result.rating,
            total: data.result.user_ratings_total,
        })
    } catch (err) {
        return Response.json({ error: 'Failed to fetch reviews' }, { status: 500 })
    }
}
