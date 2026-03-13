import { blogPosts } from "../../../data/blogPosts"

const BASE_URL = "https://www.destinationpick.com"

export async function GET() {
    const items = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((post) => {
            const pubDate = new Date(post.date).toUTCString()
            const url = `${BASE_URL}/blog/${post.slug}/`
            const image = `${BASE_URL}${post.image}`
            return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <enclosure url="${image}" type="image/jpeg" length="0"/>
    </item>`
        })
        .join("")

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>DestinationPick Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>Expert guides on destination weddings in Mexico, Punta Cana, Bahamas, and Los Cabos — resort comparisons, planning tips, cost breakdowns, and more.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE_URL}/favicon.webp</url>
      <title>DestinationPick Blog</title>
      <link>${BASE_URL}/blog/</link>
    </image>${items}
  </channel>
</rss>`

    return new Response(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
    })
}
