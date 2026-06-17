import type { MetadataRoute } from "next";
import { siteUrl, products } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, priority: 1, changeFrequency: "monthly" },
    { url: `${siteUrl}/products`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteUrl}/about`, lastModified: now, priority: 0.7, changeFrequency: "yearly" },
    { url: `${siteUrl}/contact`, lastModified: now, priority: 0.8, changeFrequency: "yearly" },
    { url: `${siteUrl}/gallery`, lastModified: now, priority: 0.8, changeFrequency: "monthly" as const },
    ...products.map((p) => ({
      url: `${siteUrl}/products/${p.slug}`,
      lastModified: now,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    })),
  ];
}
