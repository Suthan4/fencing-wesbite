// next.config.ts (or next.config.js) — OPTIMISED
// Place this at your project root

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // FIX: Add WebP and AVIF formats — AVIF is ~50% smaller than JPEG on mobile.
    // Next.js will serve AVIF to browsers that support it automatically.
    formats: ["image/avif", "image/webp"],

    // FIX: Tighten the device size breakpoints to avoid generating
    // unnecessarily large image variants. Mobile gets 640px max.
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 360],

    // FIX: Raise the minimum cache TTL to 1 week.
    // By default Next.js caches images for only 60s,
    // meaning mobile users refetch on every visit.
    minimumCacheTTL: 604800, // 7 days in seconds
  },

  // FIX: Enable compression if not already on (gzip/brotli for all responses)
  compress: true,

  // Optional: if you're on Vercel this is automatic.
  // If self-hosting, add this to get proper cache headers:
  async headers() {
    return [
      {
        // Cache all static assets aggressively
        source: "/(.*\\.(?:jpg|jpeg|png|webp|avif|svg|ico|woff2|woff|js|css))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // HTML pages — shorter cache so SEO changes propagate
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;