export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://navifencing.com";

export const company = {
  name: "Navi Fencing",
  phone: "+1-555-0199",
  displayPhone: "(555) 019-9000",
  whatsapp: "15550199",
  whatsappMessage:
    "Hi Navi Fencing, I need a quote for fencing materials and installation.",
  email: "quotes@navifencing.com",
  area: "homeowners and businesses across the local service area",
};

export type Faq = {
  question: string;
  answer: string;
};

export type SeoPage = {
  slug: string;
  title: string;
  navTitle: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  keywords: string[];
  intro: string;
  benefits: string[];
  process: string[];
  faqs: Faq[];
};

export const services: SeoPage[] = [
  {
    slug: "residential-fence-installation",
    title: "Residential Fence Installation",
    navTitle: "Residential",
    metaTitle: "Residential Fence Installation",
    description:
      "Custom residential fence installation for privacy, pets, pools, gardens, and curb appeal with clean layouts and durable materials.",
    eyebrow: "Home fence contractors",
    keywords: [
      "residential fence installation",
      "privacy fence installer",
      "backyard fence contractor",
      "home fencing company",
    ],
    intro:
      "A residential fence should feel natural to the home, protect the spaces that matter, and hold its line through weather and daily use. We plan every run, post, panel, and gate around how your property actually works.",
    benefits: [
      "Privacy fencing that screens patios, pools, pets, and family spaces.",
      "Gate placement planned for daily access, lawn care, and security.",
      "Material recommendations based on maintenance, budget, and style.",
      "Clean jobsite practices from layout through final walkthrough.",
    ],
    process: [
      "Measure property lines, slopes, access points, and visibility needs.",
      "Choose the best fence height, material, picket spacing, and gate hardware.",
      "Install posts, rails, panels, and gates with alignment checks at each stage.",
    ],
    faqs: [
      {
        question: "What is the best fence for backyard privacy?",
        answer:
          "Wood and vinyl privacy fences are the most common choices because they create a solid screen, offer flexible height options, and fit many home styles.",
      },
      {
        question: "Can you install a fence for dogs?",
        answer:
          "Yes. Pet fencing can include tighter picket spacing, secure gates, dig-resistant details, and heights matched to the dog and property.",
      },
      {
        question: "Do residential fences need permits?",
        answer:
          "Permit rules vary by location, fence height, corner visibility, pool code, and HOA requirements. We help identify the items that matter before installation starts.",
      },
    ],
  },
  {
    slug: "commercial-fencing",
    title: "Commercial Fencing",
    navTitle: "Commercial",
    metaTitle: "Commercial Fencing",
    description:
      "Commercial fencing for secure perimeters, access control, storage yards, storefronts, and business properties.",
    eyebrow: "Business perimeter security",
    keywords: [
      "commercial fencing",
      "security fence contractor",
      "business fence installation",
      "commercial gate installation",
    ],
    intro:
      "Commercial fencing needs to manage access, protect assets, and present a professional edge to customers and employees. We build practical fence systems for security, visibility, traffic flow, and long-term maintenance.",
    benefits: [
      "Secure perimeter layouts for offices, yards, warehouses, and service businesses.",
      "Gate planning for staff access, deliveries, equipment, and vehicles.",
      "Durable materials selected for exposure, visibility, and security needs.",
      "Clear scopes that help owners, managers, and contractors coordinate.",
    ],
    process: [
      "Review property use, access points, vehicle paths, and security priorities.",
      "Plan fence type, gate locations, hardware, and installation phasing.",
      "Install a clean, durable perimeter with minimal disruption to operations.",
    ],
    faqs: [
      {
        question: "What fence is best for commercial security?",
        answer:
          "Chain link, ornamental aluminum, steel, and privacy screening can all work. The best option depends on visibility, asset protection, access control, and budget.",
      },
      {
        question: "Can commercial fencing include gates?",
        answer:
          "Yes. Commercial projects can include walk gates, double drive gates, cantilever gates, and hardware selected for the site's traffic pattern.",
      },
      {
        question: "Do you work around business hours?",
        answer:
          "Project schedules can be planned to reduce disruption, protect customer access, and keep key areas usable while installation is underway.",
      },
    ],
  },
  {
    slug: "fence-repair",
    title: "Fence Repair & Replacement",
    navTitle: "Repair",
    metaTitle: "Fence Repair",
    description:
      "Fence repair for leaning posts, broken panels, storm damage, gate problems, aging sections, and partial fence replacement.",
    eyebrow: "Restore strength and alignment",
    keywords: [
      "fence repair",
      "fence replacement",
      "gate repair",
      "storm damage fence repair",
    ],
    intro:
      "A failing fence does not always need a full rebuild. We inspect the weak points, repair what is worth saving, and recommend replacement only when it gives better long-term value.",
    benefits: [
      "Post resets and replacements for leaning or unstable fence lines.",
      "Panel, picket, rail, and gate repairs matched to the existing fence.",
      "Storm damage repair for cracked, loose, or missing sections.",
      "Partial replacement plans when older areas are beyond repair.",
    ],
    process: [
      "Inspect the fence line, posts, panels, rails, and gate movement.",
      "Separate urgent safety issues from cosmetic and long-term repairs.",
      "Complete targeted repairs or phased replacement with matching materials.",
    ],
    faqs: [
      {
        question: "Can a leaning fence be repaired?",
        answer:
          "Often, yes. Leaning fences may need post resets, new concrete footings, rail repair, or selective replacement depending on soil, rot, and age.",
      },
      {
        question: "When should a fence be replaced instead of repaired?",
        answer:
          "Replacement usually makes more sense when many posts are failing, panels are brittle or rotten, or repair costs approach the value of a new fence.",
      },
      {
        question: "Do you repair gates?",
        answer:
          "Yes. Gate repair can include hinges, latches, sagging frames, dragging panels, alignment problems, and hardware upgrades.",
      },
    ],
  },
  {
    slug: "custom-gates",
    title: "Custom Gates",
    navTitle: "Gates",
    metaTitle: "Custom Gate Installation",
    description:
      "Custom gate installation for driveways, walkways, pools, yards, side entrances, and commercial access points.",
    eyebrow: "Access that works every day",
    keywords: [
      "custom gate installation",
      "driveway gate",
      "walk gate",
      "fence gate contractor",
    ],
    intro:
      "A good gate should swing cleanly, latch reliably, and match the fence around it. We build gates for everyday access, safety, and curb appeal.",
    benefits: [
      "Walk gates, double gates, pool gates, and driveway gate layouts.",
      "Hardware selected for weight, weather, use frequency, and security.",
      "Gate openings planned around people, pets, vehicles, and equipment.",
      "Design details that match wood, vinyl, aluminum, and chain link fences.",
    ],
    process: [
      "Measure the opening and review clearance, slope, and access direction.",
      "Select frame, latch, hinge, and lock details for the use case.",
      "Install, align, and test gate movement before completion.",
    ],
    faqs: [
      {
        question: "Can you add a gate to an existing fence?",
        answer:
          "Yes. Many existing fences can be modified with a new gate opening, reinforced posts, and matching hardware.",
      },
      {
        question: "Why does my fence gate sag?",
        answer:
          "Gate sag can come from undersized posts, loose hinges, heavy frames, soil movement, or hardware that no longer matches the gate weight.",
      },
      {
        question: "What gate is best for wide openings?",
        answer:
          "Double drive gates or reinforced custom frames are common for wide openings. The right choice depends on width, ground slope, and vehicle access.",
      },
    ],
  },
];

export const materials: SeoPage[] = [
  {
    slug: "wood-fencing",
    title: "Wood Fencing",
    navTitle: "Wood",
    metaTitle: "Wood Fencing",
    description:
      "Wood fence installation for natural privacy, classic curb appeal, custom heights, gates, and decorative fence details.",
    eyebrow: "Warm, classic, private",
    keywords: ["wood fencing", "wood privacy fence", "cedar fence", "wood fence installer"],
    intro:
      "Wood fencing brings warmth, privacy, and design flexibility to a property. It is a strong choice for homeowners who want a natural look and custom details.",
    benefits: [
      "Excellent privacy with flexible heights and board patterns.",
      "Natural appearance that works with traditional and modern homes.",
      "Easy customization for caps, gates, trim, and decorative details.",
      "Repairable sections when individual boards or rails age.",
    ],
    process: [
      "Confirm layout, height, board style, and gate requirements.",
      "Set posts and rails for straight fence runs and stable corners.",
      "Install boards, trim, and hardware with a clean finished line.",
    ],
    faqs: [
      {
        question: "How long does a wood fence last?",
        answer:
          "A well-built wood fence can last many years with proper post setting, drainage, staining or sealing, and routine maintenance.",
      },
      {
        question: "Is wood good for privacy fencing?",
        answer:
          "Yes. Wood is one of the strongest choices for privacy because it can be built with solid boards and customized height.",
      },
      {
        question: "Can wood fencing be repaired?",
        answer:
          "Yes. Boards, rails, posts, and gates can often be repaired or replaced without rebuilding the entire fence.",
      },
    ],
  },
  {
    slug: "vinyl-fencing",
    title: "Vinyl Fencing",
    navTitle: "Vinyl",
    metaTitle: "Vinyl Fencing",
    description:
      "Vinyl fence installation for low-maintenance privacy, clean white lines, durable panels, and long-term curb appeal.",
    eyebrow: "Low maintenance privacy",
    keywords: ["vinyl fencing", "vinyl privacy fence", "PVC fence", "low maintenance fence"],
    intro:
      "Vinyl fencing is clean, durable, and easy to maintain. It is a smart option for privacy, pool areas, and properties where long-term appearance matters.",
    benefits: [
      "Low maintenance finish that does not need regular painting.",
      "Strong privacy panel options with crisp, consistent lines.",
      "Moisture-resistant material for many yard and pool applications.",
      "Clean appearance that pairs well with modern landscaping.",
    ],
    process: [
      "Review panel style, height, gate needs, and property conditions.",
      "Prepare a stable layout for posts, panels, corners, and transitions.",
      "Install panels and gates with attention to alignment and movement.",
    ],
    faqs: [
      {
        question: "Is vinyl fencing good for privacy?",
        answer:
          "Yes. Vinyl privacy panels create a solid screen and keep a consistent look with less maintenance than painted wood.",
      },
      {
        question: "Does vinyl fencing need painting?",
        answer:
          "No. Vinyl fencing is designed to keep its finish without regular painting or staining.",
      },
      {
        question: "Can vinyl fencing include gates?",
        answer:
          "Yes. Vinyl fence systems can include walk gates, wider access gates, and hardware matched to the panel style.",
      },
    ],
  },
  {
    slug: "aluminum-fencing",
    title: "Aluminum Fencing",
    navTitle: "Aluminum",
    metaTitle: "Aluminum Fencing",
    description:
      "Aluminum fence installation for ornamental boundaries, pools, front yards, gardens, and secure open-view fencing.",
    eyebrow: "Open view, refined edge",
    keywords: ["aluminum fencing", "ornamental fence", "pool fence", "decorative metal fence"],
    intro:
      "Aluminum fencing gives a property a refined boundary without blocking views. It is popular for pools, front yards, gardens, and decorative security.",
    benefits: [
      "Open-view design for yards, pools, landscaping, and entrances.",
      "Durable finish with less maintenance than many painted materials.",
      "Elegant curb appeal for homes, HOAs, and commercial properties.",
      "Gate options for walkways, pool areas, and access points.",
    ],
    process: [
      "Check grade changes, pool code needs, and layout visibility.",
      "Plan panel transitions, post spacing, gates, and hardware.",
      "Install with consistent spacing and clean alignment.",
    ],
    faqs: [
      {
        question: "Is aluminum fencing good for pools?",
        answer:
          "Aluminum fencing is commonly used around pools because it provides a secure boundary while preserving visibility. Local pool code still needs to be checked.",
      },
      {
        question: "Does aluminum fencing provide privacy?",
        answer:
          "Aluminum is better for security and visibility than privacy. If privacy is the priority, wood or vinyl may be a stronger fit.",
      },
      {
        question: "Is aluminum fencing low maintenance?",
        answer:
          "Yes. Aluminum fencing has a durable finish and usually needs less maintenance than wood.",
      },
    ],
  },
  {
    slug: "chain-link-fencing",
    title: "Chain Link Fencing",
    navTitle: "Chain Link",
    metaTitle: "Chain Link Fencing",
    description:
      "Chain link fence installation for secure yards, pets, storage areas, commercial perimeters, and budget-friendly property boundaries.",
    eyebrow: "Practical, secure, efficient",
    keywords: ["chain link fencing", "security fence", "pet fence", "commercial chain link fence"],
    intro:
      "Chain link fencing is practical, secure, and efficient for properties that need a durable boundary without blocking visibility.",
    benefits: [
      "Cost-effective perimeter security for homes and businesses.",
      "Great for pets, storage areas, side yards, and utility zones.",
      "Fast installation compared with many custom fence systems.",
      "Privacy slat and gate options for more control.",
    ],
    process: [
      "Measure the fence run, corner posts, terminal posts, and gate openings.",
      "Select height, mesh, coating, top rail, and privacy options.",
      "Install tensioned fabric, hardware, and gates for a secure finish.",
    ],
    faqs: [
      {
        question: "Is chain link fencing good for pets?",
        answer:
          "Yes. Chain link is a reliable pet fence when height, gate security, and bottom clearance are planned correctly.",
      },
      {
        question: "Can chain link fencing be private?",
        answer:
          "Chain link can include privacy slats or screening, though wood and vinyl are usually stronger full-privacy options.",
      },
      {
        question: "Is chain link good for commercial properties?",
        answer:
          "Yes. Chain link is widely used for commercial perimeters, storage areas, yards, and access control.",
      },
    ],
  },
];

export const allSeoPages = [...services, ...materials];

export type ProductPage = {
  slug: string;
  title: string;
  category: string;
  description: string;
  metaTitle: string;
  keywords: string[];
  image: string;
  intro: string;
  uses: string[];
  specs: string[];
  faqs: Faq[];
};

const productSeeds = [
  ["chain-link", "Chain Link", "Chain Link Fencing", "secure boundaries, yards, farms, and commercial perimeters"],
  ["twisted-chain-link", "Twisted Chain Link", "Chain Link Fencing", "strong fence runs, reliable tensioning, and durable boundary protection"],
  ["pvc-chainlink", "PVC Chainlink", "PVC Coated Fencing", "clean coated boundaries with better outdoor appearance and corrosion resistance"],
  ["barbed-wire", "Barbed Wire", "Security Wire", "farm fencing, compound protection, and perimeter reinforcement"],
  ["pvc-barbed-wire", "PVC Barbed Wire", "PVC Coated Security Wire", "coated security boundaries with a cleaner exterior finish"],
  ["concertina-coil", "Concertina Coil", "High Security Wire", "high-security compounds, walls, industrial sites, and restricted areas"],
  ["razor-wire", "Razor Wire", "High Security Wire", "maximum deterrence on compound walls, fences, and secure perimeters"],
  ["welded-mesh", "Welded Mesh", "Mesh Fencing", "gardens, partitions, enclosures, cages, and practical protective fencing"],
  ["green-mesh", "Green Mesh", "Coated Mesh Fencing", "gardens, landscapes, parks, and clean low-visibility boundary protection"],
  ["steel-angle", "Steel Angle", "Fence Supports", "fence frames, bracing, gate work, and structural installation support"],
  ["l-angle", "L Angle", "Fence Supports", "framing, mounting, bracing, and strong edge reinforcement"],
  ["y-angle", "Y Angle", "Security Fence Supports", "barbed wire, razor wire, concertina coil, and high-security fence top installation"],
  ["cement-post", "Cement Post", "Fence Posts", "durable farm, plot, mesh, and wire fencing support"],
  ["bend-post", "Bend Post", "Fence Posts", "angled support, security wire layouts, and custom fence reinforcement"],
  ["white-stone", "White Stone", "Landscape Stone", "clean fence-base finishing, garden edging, and bright landscape borders"],
  ["black-stone", "Black Stone", "Landscape Stone", "modern fence borders, landscape contrast, and premium outdoor finishing"],
  ["fiber-stumph", "Fiber Stumph", "Fence Accessories", "lightweight outdoor support, garden layouts, and practical fencing accessory use"],
  ["lactic-sheet", "Lactic Sheet", "Fence Accessories", "temporary covering, outdoor protection, and practical site-use applications"],
] as const;

export const products: ProductPage[] = productSeeds.map(
  ([slug, title, category, purpose]) => ({
    slug,
    title,
    category,
    description: `${title} supplied by Navi Fencing for ${purpose}. Get clean material guidance, installation support, and quote-ready details.`,
    metaTitle: `${title} Supplier`,
    keywords: [
      title.toLowerCase(),
      `${title.toLowerCase()} fencing`,
      `${title.toLowerCase()} supplier`,
      `${category.toLowerCase()} product`,
    ],
    image: `/products/${slug}.png`,
    intro: `${title} is part of Navi Fencing's product range for ${purpose}. This page is built to help customers compare the material, understand common uses, and request the right quantity with confidence.`,
    uses: [
      `${category} projects`,
      "Boundary and perimeter work",
      "Residential, commercial, and site-use applications",
      "Material supply with installation guidance",
    ],
    specs: [
      "Quote-ready product guidance",
      "Suitable for outdoor fencing use",
      "Can be paired with posts, angles, mesh, wire, or accessories where required",
      "Dummy catalog image included for easy replacement",
    ],
    faqs: [
      {
        question: `What is ${title} used for?`,
        answer: `${title} is commonly used for ${purpose}, depending on site conditions and the level of security, privacy, or finishing required.`,
      },
      {
        question: `Can Navi Fencing supply and install ${title}?`,
        answer:
          "Yes. Navi Fencing can help with product selection, material planning, and installation guidance for matching fence systems.",
      },
      {
        question: `How do I request a quote for ${title}?`,
        answer:
          "Share the approximate length, height, location, and intended use. Navi Fencing can then recommend the right product combination and quantity.",
      },
    ],
  }),
);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getMaterial(slug: string) {
  return materials.find((material) => material.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function pageUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",
    areaServed: company.area,
    description:
      "Fence installation, fence repair, custom gates, residential fencing, commercial fencing, and material-specific fence services.",
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(page: SeoPage, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: pageUrl(path),
    provider: {
      "@type": "LocalBusiness",
      name: company.name,
      telephone: company.phone,
      url: siteUrl,
    },
    areaServed: company.area,
    serviceType: page.title,
  };
}

export function productJsonLd(product: ProductPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: `${siteUrl}${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: company.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: pageUrl(`/products/${product.slug}`),
      seller: {
        "@type": "LocalBusiness",
        name: company.name,
      },
    },
  };
}

export function whatsappUrl() {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    company.whatsappMessage,
  )}`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}
