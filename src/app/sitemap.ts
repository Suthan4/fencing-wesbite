import type { MetadataRoute } from "next";
import { siteUrl, products } from "@/lib/site";
import { locations, isPrimaryLocation } from "@/lib/locations";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, priority: 1, changeFrequency: "monthly" },
    { url: `${siteUrl}/products`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteUrl}/locations`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteUrl}/about`, lastModified: now, priority: 0.7, changeFrequency: "yearly" },
    { url: `${siteUrl}/contact`, lastModified: now, priority: 0.8, changeFrequency: "yearly" },
    { url: `${siteUrl}/gallery`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

    const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  // District pages (e.g. /chennai, /coimbatore) are the primary local-SEO
  // landing pages, so they get a higher priority than the smaller area
  // pages nested under them (e.g. /tambaram, /porur).
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${siteUrl}/${loc.slug}`,
    lastModified: now,
    priority: isPrimaryLocation(loc.slug) ? 0.95 : loc.kind === "district" ? 0.8 : 0.65,
    changeFrequency: "monthly",
  }));

    // Service x location combo pages (e.g. /services/chain-link-fencing/coimbatore).
  // District-level combos are pre-rendered at build time and get a higher
  // priority; area-level combos are rendered on first crawl/visit and
  // cached (see dynamicParams in that route), so they get a lower
  // priority/changeFrequency to nudge Google toward the district combos
  // first. ~45 services x 212 locations ≈ 9,540 URLs — comfortably under
  // the 50k-URL single-sitemap limit.
  const serviceLocationPages: MetadataRoute.Sitemap = services.flatMap((s) =>
    locations.map((loc) => ({
      url: `${siteUrl}/services/${s.slug}/${loc.slug}`,
      lastModified: now,
      priority: isPrimaryLocation(loc.slug) ? 0.9 : loc.kind === "district" ? 0.75 : 0.55,
      changeFrequency: "monthly" as const,
    })),
  );

  return [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages
  ];
}