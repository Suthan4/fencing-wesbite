export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://navifencing.in";

export const company = {
  name: "Navi Fencing",
  phone: "+919176337014",
  displayPhone: "+91 91763 37014",
  phones: ["+919176337014", "+918248055188", "+919597722813"],
  displayPhones: ["+91 91763 37014", "+91 82480 55188", "+91 95977 22813"],
  whatsapp: "919176337014",
  whatsappMessage:
    "Hi Navi Fencing, I need a quote for fencing materials and installation.",
  email: "quotes@navifencing.in",
  area: "Chennai and across Tamil Nadu",
  tagline: "Secure Boundaries. Modern Fencing. Expert Installation.",
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
    metaTitle: "Residential Fence Installation in Chennai",
    description:
      "Custom residential fence installation across Chennai and Tamil Nadu for privacy, pets, security, and curb appeal with durable materials.",
    eyebrow: "Home fencing specialists",
    keywords: [
      "residential fence installation Chennai",
      "privacy fence installer Tamil Nadu",
      "home fencing company Chennai",
      "backyard fence contractor",
    ],
    intro:
      "A residential fence should feel natural to the home, protect the spaces that matter, and hold its line through weather and daily use. We plan every run, post, panel, and gate around how your property actually works.",
    benefits: [
      "Privacy fencing that screens patios, terraces, and family spaces.",
      "Gate placement planned for daily access, vehicles, and security.",
      "Material recommendations based on maintenance, budget, and style.",
      "Clean jobsite practices from layout through final walkthrough.",
    ],
    process: [
      "Measure property lines, slopes, access points, and visibility needs.",
      "Choose the best fence height, material, spacing, and gate hardware.",
      "Install posts, rails, panels, and gates with alignment checks at each stage.",
    ],
    faqs: [
      {
        question: "What is the best fence for residential privacy in Chennai?",
        answer:
          "PVC chainlink and welded mesh fences are popular choices in Chennai as they offer solid privacy, flexible height options, and withstand the local climate well.",
      },
      {
        question: "Can you install a fence for compound walls?",
        answer:
          "Yes. We install cement posts, barbed wire, concertina coil, and razor wire toppers for compound wall security across residential properties.",
      },
      {
        question: "Do residential fences need permits in Tamil Nadu?",
        answer:
          "Permit rules vary by corporation and municipality. We help identify the items that matter before installation starts.",
      },
    ],
  },
  {
    slug: "commercial-fencing",
    title: "Commercial Fencing",
    navTitle: "Commercial",
    metaTitle: "Commercial Fencing in Chennai & Tamil Nadu",
    description:
      "Commercial fencing for secure perimeters, access control, storage yards, factories, and business properties across Tamil Nadu.",
    eyebrow: "Business perimeter security",
    keywords: [
      "commercial fencing Chennai",
      "security fence contractor Tamil Nadu",
      "business fence installation",
      "factory perimeter fencing",
    ],
    intro:
      "Commercial fencing needs to manage access, protect assets, and present a professional edge. We build practical fence systems for security, visibility, traffic flow, and long-term maintenance.",
    benefits: [
      "Secure perimeter layouts for factories, yards, and warehouses.",
      "Gate planning for staff access, deliveries, and heavy vehicles.",
      "Durable materials selected for Tamil Nadu's climate and security needs.",
      "Clear scopes that help owners, managers, and contractors coordinate.",
    ],
    process: [
      "Review property use, access points, vehicle paths, and security priorities.",
      "Plan fence type, gate locations, hardware, and installation phasing.",
      "Install a clean, durable perimeter with minimal disruption to operations.",
    ],
    faqs: [
      {
        question: "What fence is best for commercial security in Tamil Nadu?",
        answer:
          "Chain link, welded mesh, concertina coil, and razor wire on Y angles are commonly used for commercial perimeters. The best option depends on security level and budget.",
      },
      {
        question: "Can commercial fencing include heavy gates?",
        answer:
          "Yes. Commercial projects can include walk gates, double drive gates, sliding gates, and hardware selected for the site's traffic.",
      },
      {
        question: "Do you work across all of Tamil Nadu?",
        answer:
          "Yes. We serve Chennai and all major cities and districts across Tamil Nadu for commercial fencing projects.",
      },
    ],
  },
  {
    slug: "fence-repair",
    title: "Fence Repair & Replacement",
    navTitle: "Repair",
    metaTitle: "Fence Repair & Replacement in Chennai",
    description:
      "Fence repair for leaning posts, broken mesh, storm damage, gate problems, and partial fence replacement across Chennai and Tamil Nadu.",
    eyebrow: "Restore strength and alignment",
    keywords: [
      "fence repair Chennai",
      "fence replacement Tamil Nadu",
      "gate repair Chennai",
      "storm damage fence repair",
    ],
    intro:
      "A failing fence does not always need a full rebuild. We inspect the weak points, repair what is worth saving, and recommend replacement only when it gives better long-term value.",
    benefits: [
      "Post resets and replacements for leaning or unstable fence lines.",
      "Mesh, wire, and gate repairs matched to the existing fence.",
      "Storm damage repair for loose or missing sections.",
      "Partial replacement plans when older areas are beyond repair.",
    ],
    process: [
      "Inspect the fence line, posts, panels, rails, and gate movement.",
      "Separate urgent safety issues from cosmetic and long-term repairs.",
      "Complete targeted repairs or phased replacement with matching materials.",
    ],
    faqs: [
      {
        question: "Can a leaning cement post fence be repaired?",
        answer:
          "Often yes. Leaning fences may need post resets, new concrete footings, or selective replacement depending on soil condition and age.",
      },
      {
        question: "When should a fence be replaced instead of repaired?",
        answer:
          "Replacement usually makes more sense when many posts are failing, mesh is corroded, or repair costs approach the value of a new fence.",
      },
      {
        question: "Do you repair gates?",
        answer:
          "Yes. Gate repair covers hinges, latches, sagging frames, alignment problems, and hardware upgrades.",
      },
    ],
  },
  {
    slug: "custom-gates",
    title: "Custom Gates",
    navTitle: "Gates",
    metaTitle: "Custom Gate Installation in Chennai & Tamil Nadu",
    description:
      "Custom gate installation for driveways, compounds, factories, walkways, and commercial access points across Tamil Nadu.",
    eyebrow: "Access that works every day",
    keywords: [
      "custom gate installation Chennai",
      "driveway gate Tamil Nadu",
      "compound gate",
      "sliding gate installation",
    ],
    intro:
      "A good gate should swing cleanly, latch reliably, and match the fence around it. We build gates for everyday access, safety, and long-term performance.",
    benefits: [
      "Walk gates, double gates, sliding gates, and driveway gate layouts.",
      "Hardware selected for weight, weather, use frequency, and security.",
      "Gate openings planned around people, vehicles, and equipment.",
      "Design details that match chain link, mesh, and welded fence systems.",
    ],
    process: [
      "Measure the opening and review clearance, slope, and access direction.",
      "Select frame, latch, hinge, and lock details for the use case.",
      "Install, align, and test gate movement before completion.",
    ],
    faqs: [
      {
        question: "Can you add a gate to an existing compound fence?",
        answer:
          "Yes. Many existing fences can be modified with a new gate opening, reinforced posts, and matching hardware.",
      },
      {
        question: "Why does my compound gate sag?",
        answer:
          "Gate sag can come from undersized posts, loose hinges, heavy frames, or hardware that no longer matches the gate weight.",
      },
      {
        question: "What gate is best for factory or warehouse access?",
        answer:
          "Sliding gates or reinforced double drive gates are common for wide industrial openings. The right choice depends on width, vehicle type, and ground condition.",
      },
    ],
  },
];

export const materials: SeoPage[] = [
  {
    slug: "chain-link-fencing",
    title: "Chain Link Fencing",
    navTitle: "Chain Link",
    metaTitle: "Chain Link Fencing in Chennai & Tamil Nadu",
    description:
      "Chain link fence installation for secure yards, compounds, storage areas, and budget-friendly property boundaries across Tamil Nadu.",
    eyebrow: "Practical, secure, efficient",
    keywords: ["chain link fencing Chennai", "security fence Tamil Nadu", "compound fencing"],
    intro:
      "Chain link fencing is practical, secure, and efficient for properties that need a durable boundary without blocking visibility.",
    benefits: [
      "Cost-effective perimeter security for homes and businesses.",
      "Great for compounds, storage areas, and utility zones.",
      "Fast installation compared with many custom fence systems.",
      "PVC coated variants for cleaner outdoor appearance.",
    ],
    process: [
      "Measure the fence run, corner posts, terminal posts, and gate openings.",
      "Select height, mesh gauge, coating, top rail, and privacy options.",
      "Install tensioned fabric, hardware, and gates for a secure finish.",
    ],
    faqs: [
      {
        question: "Is chain link fencing good for compound security?",
        answer:
          "Yes. Chain link is a reliable compound fence when height, gate security, and post spacing are planned correctly.",
      },
      {
        question: "What is the difference between chain link and twisted chain link?",
        answer:
          "Twisted chain link uses a twisted wire construction for stronger tensioning and improved durability over standard chain link.",
      },
      {
        question: "Is PVC chainlink better than galvanised?",
        answer:
          "PVC coated chainlink offers better corrosion resistance and a cleaner appearance, making it ideal for visible or coastal locations.",
      },
    ],
  },
  {
    slug: "barbed-wire-fencing",
    title: "Barbed Wire Fencing",
    navTitle: "Barbed Wire",
    metaTitle: "Barbed Wire Fencing in Chennai & Tamil Nadu",
    description:
      "Barbed wire and PVC barbed wire fencing for farm boundaries, compound security, and perimeter reinforcement across Tamil Nadu.",
    eyebrow: "Farm and compound security",
    keywords: ["barbed wire fencing Tamil Nadu", "farm fencing Chennai", "compound barbed wire"],
    intro:
      "Barbed wire fencing is a time-tested, cost-effective solution for agricultural land, farm boundaries, and compound perimeter security.",
    benefits: [
      "Strong deterrent for farm, agricultural, and compound boundaries.",
      "PVC coated variants for better weather and corrosion resistance.",
      "Can be installed on Y angles or cement posts for height and security.",
      "Cost-effective solution for large perimeter areas.",
    ],
    process: [
      "Assess perimeter length, post spacing, and required wire height.",
      "Select standard or PVC coated barbed wire for the environment.",
      "Install posts and string wire with correct tensioning.",
    ],
    faqs: [
      {
        question: "Is barbed wire fencing legal for residential compounds in Tamil Nadu?",
        answer:
          "Yes, barbed wire is commonly used on top of compound walls and fences for added security. Local bylaws may specify permitted heights.",
      },
      {
        question: "What is PVC barbed wire?",
        answer:
          "PVC barbed wire is galvanised barbed wire with a plastic coating for better corrosion resistance, used in coastal or high-moisture areas.",
      },
      {
        question: "How many strands of barbed wire do I need?",
        answer:
          "Typically 3–5 strands are used for residential and farm security. Higher-security installations use more strands or combine with razor wire.",
      },
    ],
  },
  {
    slug: "welded-mesh-fencing",
    title: "Welded Mesh Fencing",
    navTitle: "Welded Mesh",
    metaTitle: "Welded Mesh Fencing in Chennai & Tamil Nadu",
    description:
      "Welded mesh fencing for gardens, enclosures, partitions, cages, and practical protective fencing across Tamil Nadu.",
    eyebrow: "Versatile and durable",
    keywords: ["welded mesh fencing Chennai", "green mesh Tamil Nadu", "garden mesh fencing"],
    intro:
      "Welded mesh fencing is one of the most versatile solutions — suitable for gardens, partitions, poultry enclosures, and boundary protection.",
    benefits: [
      "Strong welded construction for gardens, enclosures, and partitions.",
      "Green mesh variant blends into landscaping and parks.",
      "Wide variety of mesh sizes and wire gauges available.",
      "Easy to install on posts, angles, or existing structures.",
    ],
    process: [
      "Select mesh size, wire gauge, and height for the application.",
      "Install posts or angle supports at required spacing.",
      "Fix and tension mesh panels to the frame.",
    ],
    faqs: [
      {
        question: "What is the difference between welded mesh and chain link?",
        answer:
          "Welded mesh has a rigid grid structure welded at each intersection, while chain link uses interlocked loops. Welded mesh is stiffer and better for enclosures.",
      },
      {
        question: "Is green mesh good for garden fencing?",
        answer:
          "Yes. Green PVC coated mesh blends naturally with garden and landscape settings, making it a popular choice for parks and residential gardens.",
      },
      {
        question: "Can welded mesh be used for poultry or animal enclosures?",
        answer:
          "Yes. Welded mesh is widely used for poultry farms, animal enclosures, and cages due to its strength and variety of mesh opening sizes.",
      },
    ],
  },
  {
    slug: "high-security-fencing",
    title: "High Security Fencing",
    navTitle: "High Security",
    metaTitle: "High Security Fencing – Concertina Coil & Razor Wire in Chennai",
    description:
      "Concertina coil and razor wire high-security fencing for industrial sites, compounds, restricted areas, and maximum deterrence in Tamil Nadu.",
    eyebrow: "Maximum deterrence",
    keywords: ["concertina coil Chennai", "razor wire Tamil Nadu", "high security fencing"],
    intro:
      "Concertina coil and razor wire deliver maximum security deterrence for high-risk perimeters, industrial sites, and restricted access zones.",
    benefits: [
      "Strong visual and physical deterrent for compound perimeters.",
      "Concertina coil and razor wire for layered security coverage.",
      "Installed on Y angles, cement posts, and compound walls.",
      "Used widely for factories, warehouses, and restricted areas.",
    ],
    process: [
      "Assess the perimeter security level and existing wall or fence.",
      "Select concertina coil diameter or razor wire type.",
      "Install with Y angles or direct wall mounting for maximum coverage.",
    ],
    faqs: [
      {
        question: "What is the difference between concertina coil and razor wire?",
        answer:
          "Concertina coil is a coiled wire that expands accordion-style across a perimeter. Razor wire is flat barbed tape stretched along fences or walls. Both provide high deterrence.",
      },
      {
        question: "Can concertina coil be installed on existing compound walls?",
        answer:
          "Yes. Concertina coil can be mounted directly on compound wall tops using Y angle brackets for immediate security enhancement.",
      },
      {
        question: "Is high security fencing used in residential areas?",
        answer:
          "Yes, particularly for large properties, farmhouses, and gated communities that require a higher level of perimeter security.",
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

const productSeeds: Array<[string, string, string, string]> = [
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
];

export const products: ProductPage[] = productSeeds.map(
  ([slug, title, category, purpose]) => ({
    slug,
    title,
    category,
    description: `${title} supplied by Navi Fencing for ${purpose}. Get material guidance, installation support, and quick quotes across Tamil Nadu.`,
    metaTitle: `${title} Supplier in Chennai`,
    keywords: [
      `${title.toLowerCase()} Chennai`,
      `${title.toLowerCase()} Tamil Nadu`,
      `${title.toLowerCase()} supplier`,
      `buy ${title.toLowerCase()}`,
    ],
    image: `/products/${slug}.png`,
    intro: `${title} is part of Navi Fencing's product range for ${purpose}. We help customers across Tamil Nadu compare the material, understand common uses, and get the right quantity with confidence.`,
    uses: [
      `${category} projects across Tamil Nadu`,
      "Boundary and compound perimeter work",
      "Residential, commercial, and industrial applications",
      "Material supply with installation guidance",
    ],
    specs: [
      "Available in standard and custom dimensions",
      "Suitable for Tamil Nadu's outdoor and coastal conditions",
      "Can be paired with posts, angles, mesh, wire, or accessories",
      "Quick delivery across Chennai and Tamil Nadu",
    ],
    faqs: [
      {
        question: `What is ${title} used for?`,
        answer: `${title} is commonly used for ${purpose}, depending on site conditions and the level of security, privacy, or finishing required.`,
      },
      {
        question: `Can Navi Fencing supply and install ${title} in Chennai?`,
        answer:
          "Yes. Navi Fencing supplies and installs across Chennai and Tamil Nadu with project planning and installation guidance included.",
      },
      {
        question: `How do I get a quote for ${title}?`,
        answer:
          "Share the approximate length, height, location, and intended use. Call or WhatsApp us and we'll recommend the right product combination and quantity.",
      },
    ],
  }),
);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getMaterial(slug: string) {
  return materials.find((m) => m.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    areaServed: "Tamil Nadu",
    description: company.tagline,
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
    areaServed: "Tamil Nadu",
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
    brand: { "@type": "Brand", name: company.name },
    category: product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: pageUrl(`/products/${product.slug}`),
      seller: { "@type": "LocalBusiness", name: company.name },
    },
  };
}

export function whatsappUrl() {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;
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