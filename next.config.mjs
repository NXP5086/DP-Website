/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      // ── Renamed pages ──────────────────────────────────────────
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/new-blog", destination: "/blog/", permanent: true },
      { source: "/secondary-nav", destination: "/", permanent: true },

      // ── Old destination pages ───────────────────────────────────
      { source: "/mexico", destination: "/destinations/mexico/", permanent: true },
      { source: "/destination-weddings", destination: "/destinations/", permanent: true },

      // ── Old team/staff pages ────────────────────────────────────
      { source: "/abhishek-pappu", destination: "/our-team/", permanent: true },
      { source: "/abhishek-pappu.php", destination: "/our-team/", permanent: true },
      { source: "/nathan-paul.php", destination: "/our-team/", permanent: true },
      { source: "/anil-jospeh.php", destination: "/our-team/", permanent: true },
      { source: "/lucy-martinez.php", destination: "/our-team/", permanent: true },
      { source: "/nalleli-villaruel", destination: "/our-team/", permanent: true },
      { source: "/lindy-drew-chapman", destination: "/our-team/", permanent: true },

      // ── Old hotel pages ─────────────────────────────────────────
      { source: "/hyatt-ziva-los-cabos", destination: "/destinations/mexico/los-cabos/", permanent: true },
      { source: "/los-cabos-resorts", destination: "/destinations/mexico/los-cabos/", permanent: true },
      { source: "/hyatt-ziva-puerto-vallarta", destination: "/destinations/mexico/", permanent: true },
      { source: "/paradisus-la-perla", destination: "/destinations/mexico/", permanent: true },
      { source: "/dreams-riviera-cancun-resort-spa", destination: "/destinations/mexico/cancun/", permanent: true },
      { source: "/panama-jack-resort-cancun", destination: "/destinations/mexico/cancun/", permanent: true },

      // ── Old misc pages ──────────────────────────────────────────
      { source: "/private-travel", destination: "/services/", permanent: true },
      { source: "/private-travel.php", destination: "/services/", permanent: true },
      { source: "/corporate", destination: "/services/", permanent: true },
      { source: "/events", destination: "/services/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },

      // ── Old blog posts → /blog/ ─────────────────────────────────
      { source: "/blog/tina-sumit-wedding-hyatt-ziva-cancun", destination: "/blog/", permanent: true },
      { source: "/blog/tina-simit-wedding-hyatt-ziva-cancun", destination: "/blog/", permanent: true },
      { source: "/blog/4-beautiful-locations-in-italy-for-your-dreamy-destination-wedding", destination: "/blog/", permanent: true },
      { source: "/blog/visitportugal", destination: "/blog/", permanent: true },
      { source: "/blog/morocco-the-dream-destination-for-weddings", destination: "/blog/", permanent: true },
      { source: "/blog/bevin-susan-wedding-renaissance-aruba", destination: "/blog/", permanent: true },
      { source: "/blog/how-to-create-a-shopping-bot-for-free-no-coding-6", destination: "/blog/", permanent: true },
      { source: "/blog/david-alka-pueblo-bonito-los-cabos-wedding", destination: "/blog/", permanent: true },
      { source: "/blog/chris-rakhi-perfect-wedding-hilton-tulum-riviera-maya", destination: "/blog/", permanent: true },
      { source: "/blog/golf-course-destination-wedding-in-mexico-los-cabos", destination: "/blog/", permanent: true },
      { source: "/blog/7-reasons-to-get-married-in-mexico", destination: "/blog/", permanent: true },
      { source: "/blog/mit-and-priya-planet-hollywood-cancun", destination: "/blog/", permanent: true },
      { source: "/blog/indian-wedding-in-the-dominican-republic", destination: "/blog/", permanent: true },
      { source: "/blog/turkey-an-exotic-wedding-destination-with-rich-historical-culture", destination: "/blog/", permanent: true },
      { source: "/blog/top-5-hotels-to-pick-for-a-destination-wedding-in-rajasthan-india", destination: "/blog/", permanent: true },
      { source: "/blog/top-10-marriage-tips-newlywed-couples", destination: "/blog/", permanent: true },
      { source: "/blog/why-hyatt-ziva-los-cabos-is-our-top-pick-for-destination-wedding-in-mexico", destination: "/blog/", permanent: true },
      { source: "/blog/destination-weddings-in-bahamas-everything-you-need-to-know", destination: "/blog/", permanent: true },
      { source: "/blog/top-5-islands-for-your-destination-wedding-in-the-bahamas", destination: "/blog/", permanent: true },
      { source: "/blog/visitdubai", destination: "/blog/", permanent: true },
      { source: "/blog/vlog-on-with-stan-e2-michelle-pharr-strategic-account-manager-royal-caribbean", destination: "/blog/", permanent: true },
      { source: "/blog/getting-married-in-malta-luxury-wedding-destination", destination: "/blog/", permanent: true },
      { source: "/blog/top-restaurants-to-host-an-engagement-party-before-your-destination-wedding-in-los-cabos", destination: "/blog/", permanent: true },
      { source: "/blog/portugalculinary", destination: "/blog/", permanent: true },
      { source: "/blog/neha-callum-royal-wedding-celebration-fairmont-jaipur", destination: "/blog/", permanent: true },
      { source: "/blog/indian-destination-weddings-paris", destination: "/blog/", permanent: true },
      { source: "/blog/cancun-mexico-luxury-dream-wedding-destination-for-all-budgets", destination: "/blog/", permanent: true },
      { source: "/blog/why-jaipur-india-is-the-perfect-location-for-your-royal-wedding", destination: "/blog/", permanent: true },
      { source: "/blog/your-dream-indian-wedding-in-the-dominican-republic-cancun-planners-resorts-and-packages", destination: "/blog/", permanent: true },
      { source: "/blog/visitdominicanrepublic", destination: "/blog/", permanent: true },
      { source: "/blog/visitmontegobay", destination: "/blog/", permanent: true },
      { source: "/blog/visitjamaica", destination: "/blog/", permanent: true },
      { source: "/blog/best-outdoor-venues-for-your-cabo-dream-destination-wedding", destination: "/blog/", permanent: true },
      { source: "/blog/why-choose-cancun-for-your-wedding", destination: "/blog/", permanent: true },
      { source: "/blog/indian-destination-weddings-mexico", destination: "/blog/", permanent: true },
      { source: "/blog/everything-you-need-to-know-about-destination-weddings-in-paris-france", destination: "/blog/", permanent: true },
      { source: "/blog/family-vacation-to-singapore-beji-family", destination: "/blog/", permanent: true },

      // ── Additional old blog posts → /blog/ ─────────────────────
      { source: "/blog/nakita-eric-a-timeless-union-at-hyatt-ziva-los-cabos", destination: "/blog/", permanent: true },
      { source: "/blog/mexicocity", destination: "/blog/", permanent: true },
      { source: "/blog/client-experience-by-riyadh-jones-conference-by-destinationpick", destination: "/blog/", permanent: true },
      { source: "/blog/client-experience-by-nick-felix-meetings-by-destinationpick-marriott-dallas-las-colinas-2", destination: "/blog/", permanent: true },
      { source: "/blog/client-experience-conference-by-destinationpick-im-women", destination: "/blog/", permanent: true },
      { source: "/blog/symbolic-vs-subsymbolic-ai-paradigms-for-ai", destination: "/blog/", permanent: true },
      { source: "/blog/honeymoon-glen-hannahs-staying-at-the-movenpick-resort-kuredhivaru-maldives", destination: "/blog/", permanent: true },
      { source: "/blog/family-vacation-wedding-anniversary", destination: "/blog/", permanent: true },
      { source: "/blog/vlog-on-with-stan-e-4", destination: "/blog/", permanent: true },
      { source: "/blog/nakita-eric-a-timeless-union-at-hyatt-ziva-los-cabos-7", destination: "/blog/", permanent: true },
      { source: "/blog/nakita-eric-a-timeless-union-at-hyatt-ziva-los-cabos-14", destination: "/blog/", permanent: true },
      { source: "/blog/nakita-eric-a-timeless-union-at-hyatt-ziva-los-cabos-15", destination: "/blog/", permanent: true },

      // ── Additional old hotel/destination pages ──────────────────
      { source: "/planet-hollywood-cancun", destination: "/destinations/mexico/cancun/", permanent: true },
      { source: "/zotry-agua-punta-cana", destination: "/destinations/dominican-republic/punta-cana/", permanent: true },

      // ── Old blog subpages (image galleries) → /blog/ ───────────
      { source: "/blog/:slug/:image", destination: "/blog/", permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/((?!_next/static|_next/image|images|banners|favicon).*)",
        headers: [
          { key: "Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/banners/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ]
  },
}

export default nextConfig
