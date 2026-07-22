import type { MetadataRoute } from "next";
import { siteUrl, products } from "@/lib/site";
import { locations } from "@/lib/locations";

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

  // District pages (e.g. /chennai, /coimbatore) are the primary local-SEO
  // landing pages, so they get a higher priority than the smaller area
  // pages nested under them (e.g. /tambaram, /porur).
  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${siteUrl}/${loc.slug}`,
    lastModified: now,
    priority: loc.kind === "district" ? 0.8 : 0.65,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...productPages, ...locationPages];
}