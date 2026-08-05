// src/lib/services.ts
// Data model for the services catalogue (installation & fencing-type
// services, as opposed to /lib/site.ts's `products`, which is the raw
// material catalogue). Powers /services and /services/[slug].

import type { Faq } from "@/lib/site";
import { company, siteUrl } from "@/lib/site";
import type { LocationEntry } from "@/lib/locations";

export type ServiceCategory =
  | "Wire & Mesh Fencing"
  | "Posts & Structural"
  | "Agricultural & Farm"
  | "Property Type"
  | "Boundary & Security"
  | "Gates"
  | "Repair & Maintenance";

export const serviceCategories: ServiceCategory[] = [
  "Wire & Mesh Fencing",
  "Posts & Structural",
  "Agricultural & Farm",
  "Property Type",
  "Boundary & Security",
  "Gates",
  "Repair & Maintenance",
];

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Short, location-free description used in cards / fallback SEO copy. */
  blurb: string;
  icon: string;
}

export const services: Service[] = [
  // Wire & Mesh Fencing
  { slug: "chain-link-fencing", title: "Chain Link Fencing", category: "Wire & Mesh Fencing", icon: "🔗",
    blurb: "Galvanised chain link supply and installation for compounds, yards and boundary walls." },
  { slug: "gi-chain-link-fencing", title: "GI Chain Link Fencing", category: "Wire & Mesh Fencing", icon: "🔗",
    blurb: "Hot-dip galvanised iron chain link for long-term corrosion resistance in every climate." },
  { slug: "pvc-coated-chain-link-fencing", title: "PVC Coated Chain Link Fencing", category: "Wire & Mesh Fencing", icon: "🌿",
    blurb: "PVC-coated chain link in green or black for a cleaner finish with extra weather protection." },
  { slug: "barbed-wire-fencing", title: "Barbed Wire Fencing", category: "Wire & Mesh Fencing", icon: "🪢",
    blurb: "Classic galvanised barbed wire installation for cost-effective farm and compound boundaries." },
  { slug: "concertina-coil-fencing", title: "Concertina Coil Fencing", category: "Wire & Mesh Fencing", icon: "🌀",
    blurb: "High-security razor concertina coil for walls, gates and industrial perimeters." },
  { slug: "razor-wire-fencing", title: "Razor Wire Fencing", category: "Wire & Mesh Fencing", icon: "⚡",
    blurb: "Flat razor wire tape installation for maximum-deterrent perimeter security." },
  { slug: "weld-mesh-fencing", title: "Weld Mesh Fencing", category: "Wire & Mesh Fencing", icon: "🔳",
    blurb: "Rigid welded mesh panel fencing for a structured, uniform boundary line." },
  { slug: "solar-fencing", title: "Solar Fencing", category: "Wire & Mesh Fencing", icon: "☀️",
    blurb: "Solar-powered energiser fencing for farms and estates needing wildlife and intruder deterrence." },
  { slug: "lastic-sheet-fencing", title: "Lastic Sheet Fencing", category: "Wire & Mesh Fencing", icon: "🟦",
    blurb: "Durable plastic sheet screening for privacy and windbreak alongside your fence line." },

  // Posts & Structural
  { slug: "steel-fencing", title: "Steel Fencing", category: "Posts & Structural", icon: "🏗️",
    blurb: "Heavy-duty steel fencing systems built for industrial and high-load boundaries." },
  { slug: "square-pipe-fencing", title: "Square Pipe Fencing", category: "Posts & Structural", icon: "📐",
    blurb: "Square GI/MS pipe fencing frames for a clean, modern compound boundary." },
  { slug: "ms-angle-fencing", title: "MS Angle Fencing", category: "Posts & Structural", icon: "📐",
    blurb: "Mild-steel angle post fencing for reliable, budget-friendly structural support." },
  { slug: "gi-angle-fencing", title: "GI Angle Fencing", category: "Posts & Structural", icon: "📐",
    blurb: "Galvanised iron angle posts that resist rust while carrying chain link and mesh runs." },
  { slug: "rcc-pole-fencing", title: "RCC Pole Fencing", category: "Posts & Structural", icon: "🏗️",
    blurb: "Pre-cast RCC pole fencing for permanent, low-maintenance farm and site boundaries." },
  { slug: "concrete-pole-fencing", title: "Concrete Pole Fencing", category: "Posts & Structural", icon: "🏗️",
    blurb: "Solid concrete pole installation for long-lasting boundary and compound fencing." },
  { slug: "cement-post-fencing", title: "Cement Post Fencing", category: "Posts & Structural", icon: "🏗️",
    blurb: "Pre-cast cement posts that resist termites and moisture for rural and urban plots." },
  { slug: "stone-pillar-fencing", title: "Stone Pillar Fencing", category: "Posts & Structural", icon: "⬜",
    blurb: "Natural stone pillar fencing for a traditional, permanent boundary marker." },
  { slug: "readymade-compound", title: "Readymade Compound", category: "Posts & Structural", icon: "🧱",
    blurb: "Pre-fabricated compound wall and fencing panels for fast, low-mess site setup." },
  { slug: "stump-fencing", title: "Stump Fencing", category: "Posts & Structural", icon: "🪵",
    blurb: "Lightweight stump-post fencing, a quick and economical option for rural boundaries." },

  // Agricultural & Farm
  { slug: "agricultural-land-fencing", title: "Agricultural Land Fencing", category: "Agricultural & Farm", icon: "🌾",
    blurb: "Full-perimeter fencing for agricultural plots to keep crops and land secure." },
  { slug: "garden-fencing", title: "Garden Fencing", category: "Agricultural & Farm", icon: "🌱",
    blurb: "Neat, low-height fencing for home gardens, lawns and landscaped plots." },
  { slug: "farm-fencing", title: "Farm Fencing", category: "Agricultural & Farm", icon: "🚜",
    blurb: "Durable perimeter fencing for farms, protecting land, livestock and equipment." },
  { slug: "estate-fencing", title: "Estate Fencing", category: "Agricultural & Farm", icon: "🏡",
    blurb: "Large-perimeter fencing for private estates, farmhouses and plantation land." },
  { slug: "poultry-farm-fencing", title: "Poultry Farm Fencing", category: "Agricultural & Farm", icon: "🐔",
    blurb: "Predator-proof mesh fencing designed for poultry farm enclosures." },
  { slug: "goat-farm-fencing", title: "Goat Farm Fencing", category: "Agricultural & Farm", icon: "🐐",
    blurb: "Sturdy enclosure fencing sized to contain goats and small livestock safely." },
  { slug: "cattle-farm-fencing", title: "Cattle Farm Fencing", category: "Agricultural & Farm", icon: "🐄",
    blurb: "Heavy-gauge fencing built to hold cattle and larger livestock securely." },

  // Property Type
  { slug: "residential-fencing", title: "Residential Fencing", category: "Property Type", icon: "🏠",
    blurb: "Privacy and security fencing for homes, villas and residential compounds." },
  { slug: "commercial-fencing", title: "Commercial Fencing", category: "Property Type", icon: "🏢",
    blurb: "Perimeter fencing for offices, retail sites and commercial complexes." },
  { slug: "industrial-fencing", title: "Industrial Fencing", category: "Property Type", icon: "🏭",
    blurb: "High-security industrial perimeter fencing for plants and processing sites." },
  { slug: "factory-fencing", title: "Factory Fencing", category: "Property Type", icon: "🏭",
    blurb: "Robust boundary fencing for factory premises and manufacturing yards." },
  { slug: "warehouse-fencing", title: "Warehouse Fencing", category: "Property Type", icon: "📦",
    blurb: "Secure perimeter fencing for warehouses and storage & logistics yards." },
  { slug: "school-college-fencing", title: "School & College Fencing", category: "Property Type", icon: "🏫",
    blurb: "Safe, tamper-resistant boundary fencing for school and college campuses." },
  { slug: "sports-ground-fencing", title: "Sports Ground Fencing", category: "Property Type", icon: "🏟️",
    blurb: "Chain link and mesh fencing sized for stadiums, courts and sports grounds." },
  { slug: "solar-plant-fencing", title: "Solar Plant Fencing", category: "Property Type", icon: "🔆",
    blurb: "High-security perimeter fencing purpose-built for solar power plant sites." },

  // Boundary & Security
  { slug: "boundary-fencing", title: "Boundary Fencing", category: "Boundary & Security", icon: "🧭",
    blurb: "General-purpose boundary fencing to clearly and securely mark your property line." },
  { slug: "perimeter-security-fencing", title: "Perimeter Security Fencing", category: "Boundary & Security", icon: "🛡️",
    blurb: "Layered high-security perimeter fencing combining mesh, coil and wire toppings." },

  // Gates
  { slug: "gate-fabrication", title: "Gate Fabrication", category: "Gates", icon: "⚙️",
    blurb: "Custom steel gate fabrication built to match your fencing and boundary wall." },
  { slug: "gate-installation", title: "Gate Installation", category: "Gates", icon: "🚪",
    blurb: "Professional fitting of compound, farm and industrial gates on-site." },
  { slug: "sliding-gate-installation", title: "Sliding Gate Installation", category: "Gates", icon: "🚪",
    blurb: "Sliding gate installation with track and hardware for wide entrances." },
  { slug: "swing-gate-installation", title: "Swing Gate Installation", category: "Gates", icon: "🚪",
    blurb: "Swing gate installation for driveways, compounds and pedestrian entry points." },

  // Repair & Maintenance
  { slug: "fence-repair", title: "Fence Repair", category: "Repair & Maintenance", icon: "🔧",
    blurb: "Quick repair of damaged, sagging or storm-hit fencing to restore security." },
  { slug: "fence-maintenance", title: "Fence Maintenance", category: "Repair & Maintenance", icon: "🧰",
    blurb: "Scheduled tensioning, rust treatment and upkeep to extend your fence's life." },
  { slug: "fence-replacement", title: "Fence Replacement", category: "Repair & Maintenance", icon: "🔁",
    blurb: "Full replacement of worn-out fencing with updated materials and posts." },
  { slug: "old-fence-removal", title: "Old Fence Removal", category: "Repair & Maintenance", icon: "🗑️",
    blurb: "Safe removal and disposal of old fencing ahead of a new installation." },
  { slug: "site-survey-installation", title: "Site Survey & Installation", category: "Repair & Maintenance", icon: "📋",
    blurb: "Free on-site measurement and survey followed by expert end-to-end installation." },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function relatedServices(slug: string, limit = 3): Service[] {
  const current = services.find((s) => s.slug === slug);
  if (!current) return [];
  return services
    .filter((s) => s.slug !== slug && s.category === current.category)
    .slice(0, limit);
}

export function serviceJsonLd(service: Service, location: LocationEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} in ${location.name}`,
    description: `${service.blurb} Supplied and installed by ${company.name} in ${location.name}.`,
    provider: { "@type": "LocalBusiness", name: company.name },
    areaServed: location.name,
    url: `${siteUrl}/services/${service.slug}`,
  };
}

/** Answer-first FAQ block for a service page, with the visitor's detected
 *  location worked in for AEO/local-SEO relevance. */
export function serviceFaqs(service: Service, location: LocationEntry): Faq[] {
  return [
    {
      question: `Does ${company.name} provide ${service.title.toLowerCase()} in ${location.name}?`,
      answer: `Yes — ${company.name} supplies and installs ${service.title.toLowerCase()} in ${location.name} and across Tamil Nadu, with a free site visit before every quote.`,
    },
    {
      question: `How much does ${service.title.toLowerCase()} cost in ${location.name}?`,
      answer: `Cost depends on the length, height and material chosen, so we don't quote a fixed rate online. ${company.name} gives a free site measurement and a clear per-foot quote, usually within 24–48 hours.`,
    },
    {
      question: `How long does ${service.title.toLowerCase()} installation take?`,
      answer: `Most ${service.title.toLowerCase()} projects in ${location.name} are completed within a few days of the site visit, depending on the total length and site access.`,
    },
    {
      question: `Do you only install, or also supply the material?`,
      answer: `${company.name} handles both — we supply the fencing material and provide expert installation with our own crew, so there's a single point of contact for the whole job.`,
    },
  ];
}

/**
 * FAQ block for the /services/[service]/[location] combo page. Distinct
 * copy from serviceFaqs() (which uses the *auto-detected* visitor
 * location) — this one is written for a specific, explicitly-chosen
 * location and district, so it can go one level more specific without
 * risking duplicate content across the two page types.
 */
export function serviceLocationFaqs(
  service: Service,
  location: LocationEntry,
): Faq[] {
  const areaLabel =
    location.kind === "area"
      ? `${location.name}, ${location.districtName} district`
      : `${location.name} district`;

  return [
    {
      question: `Who is the best ${service.title.toLowerCase()} contractor in ${location.name}?`,
      answer: `${company.name} is a Tamil Nadu-wide fencing contractor supplying and installing ${service.title.toLowerCase()} in ${areaLabel}, with a free site visit and clear per-foot quote before work begins.`,
    },
    {
      question: `What does ${service.title.toLowerCase()} cost in ${location.name}?`,
      answer: `Pricing depends on the length, height and material gauge, so we don't publish a fixed rate. Send us your site details on WhatsApp and we'll arrange a free measurement in ${location.name}, usually within 24–48 hours.`,
    },
    {
      question: `Do you supply the material and install ${service.title.toLowerCase()} in ${location.name}, or only one of the two?`,
      answer: `Both — ${company.name} supplies the fencing material and installs it with our own crew in ${location.name}, so you deal with a single contractor for the whole job.`,
    },
    {
      question: `Do you also serve areas near ${location.name}?`,
      answer:
        location.kind === "area"
          ? `Yes — alongside ${location.name}, we cover the rest of ${location.districtName} district and every other district in Tamil Nadu.`
          : `Yes — alongside ${location.name} district, we cover every other district across Tamil Nadu.`,
    },
  ];
}

export function serviceLocationJsonLd(service: Service, location: LocationEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} in ${location.name}`,
    description: `${service.blurb} Supplied and installed by ${company.name} in ${location.name}.`,
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: location.name,
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    areaServed: location.name,
    url: `${siteUrl}/services/${service.slug}/${location.slug}`,
  };
}
