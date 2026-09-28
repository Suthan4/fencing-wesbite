export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.navifencing.in";

export const company = {
  name: "Navi Fencing",
  legalName: "Navi Fencing",
  tagline: "Secure Boundaries. Modern Fencing. Expert Installation.",
  phones: ["+91 9094909918","+91 9150553077"],
  displayPhones: ["+91 9094909918","+91 9150553077"],
  whatsapp: "919094909918",
  whatsappMessage:
    "Hi Navi Fencing, I'd like a free consultation and quote for fencing.",
  email: "fencingnavi@gmail.com",
  area: "Avinashi · Tiruppur · Coimbatore · Across Tamil Nadu",
  city: "Avinashi",
  state: "Tamil Nadu",
};

export function whatsappUrl(message?: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message ?? company.whatsappMessage,
  )}`;
}

export type Product = {
  slug: string;
  title: string;
  category: ProductCategory;
  blurb: string;
  image: string;
  /** Optional richer detail used on /products/[slug] */
  details?: ProductDetails;
};

export type ProductDetails = {
  tagline: string;
  description: string;
  uses: string[];
  specs: { label: string; value: string }[];
  highlights: string[];
};

export type ProductCategory =
  | "Chain Link"
  | "Security Wire"
  | "Mesh"
  | "Steel & Supports"
  | "Posts"
  | "Stones & Sheets";

export const productCategories: ProductCategory[] = [
  "Chain Link",
  "Security Wire",
  "Mesh",
  "Steel & Supports",
  "Posts",
  "Stones & Sheets",
];

// All 19 products as provided by the client
export const products: Product[] = [
  {
    slug: "chain-link",
    title: "Chain Link",
    category: "Chain Link",
    blurb:
      "Galvanised chain link mesh for compounds, yards and boundary fencing.",
    image:
      "/products/chain-link.jpg",
  },
  {
    slug: "twisted-chain-link",
    title: "Twisted Chain Link",
    category: "Chain Link",
    blurb:
      "Tighter twisted weave for stronger tensioning and longer fence life.",
    image:
      "/products/twisted-chain-link.jpg",
  },
  {
    slug: "pvc-chainlink",
    title: "PVC Chainlink",
    category: "Chain Link",
    blurb:
      "PVC coated chain link in green/black — corrosion resistant and clean looking.",
    image:
      "/products/pvc-chainlink.jpg",
  },
  {
    slug: "barbed-wire",
    title: "Barbed Wire",
    category: "Security Wire",
    blurb: "Classic barbed wire for farm boundaries and compound topping.",
    image:
      "/products/barbed-wire.jpg",
  },
  {
    slug: "pvc-barbed-wire",
    title: "PVC Barbed Wire",
    category: "Security Wire",
    blurb: "PVC coated barbed wire for coastal and humid climates.",
    image:
      "/gallery/pvc-barbed-wire-20240402162909974.jpeg",
  },
  {
    slug: "barbed-wire-x-model",
    title: "Barbed Wire X Model",
    category: "Security Wire",
    blurb:
      "X-shaped barbed wire support for compound walls — strong angled bracing for multi-strand wire runs.",
    image:
      "/products/barbed-wire-x.jpeg",
  },
  {
    slug: "barbed-wire-u-model",
    title: "Barbed Wire U Model",
    category: "Security Wire",
    blurb:
      "U-shaped barbed wire bracket — compact wall-top fixing for boundary and compound security.",
    image:
      "/products/barbed-wire-u.jpeg",
  },
  {
    slug: "barbed-wire-vertical-model",
    title: "Barbed Wire Vertical Model",
    category: "Security Wire",
    blurb:
      "Vertical post-mounted barbed wire model for straight-line compound and farm boundary runs.",
    image:
      "/products/barbed-wire-vertical.jpeg",
  },
  {
    slug: "concertina-coil",
    title: "Concertina Coil", 
    category: "Security Wire",
    blurb:
      "High-security concertina razor coil for walls, gates and industrial sites.",
    image:
      "/products/concertina-coil.jpg",
  },
  {
    slug: "razor-wire",
    title: "Razor Wire",
    category: "Security Wire",
    blurb: "Flat razor wire — maximum deterrence for compound walls and gates.",
    image:
      "/products/razor-wire.jpg",
  },
  {
    slug: "welded-mesh",
    title: "Welded Mesh",
    category: "Mesh",
    blurb: "Rigid welded mesh panels for gardens, enclosures and partitions.",
    image:
      "/products/welded-mesh.jpeg",
  },
  {
    slug: "green-mesh",
    title: "Green Mesh",
    category: "Mesh",
    blurb: "PVC coated green mesh that blends into gardens and landscaping.",
    image:
      "/products/green-mesh.jpeg",
  },
  {
    slug: "steel",
    title: "Steel",
    category: "Steel & Supports",
    blurb:
      "Mild steel sections for fence frames, gates and structural supports.",
    image:
      "/products/steel.jpeg",
  },
  {
    slug: "angle",
    title: "Angle",
    category: "Steel & Supports",
    blurb: "Standard steel angles for bracing, framing and gate construction.",
    image:
      "/products/angle.jpg",
  },
  {
    slug: "l-angle",
    title: "L Angle",
    category: "Steel & Supports",
    blurb: "L shaped angle iron — corner posts, edges and mounting brackets.",
    image:
      "/products/l-angle.jpg",
  },
  {
    slug: "y-angle",
    title: "Y Angle",
    category: "Steel & Supports",
    blurb: "Y shaped angle for concertina coil and razor wire wall toppings.",
    image:
      "/products/y-angle.jpg",
  },
  {
    slug: "cement-post",
    title: "Cement Post",
    category: "Posts",
    blurb:
      "Precast cement posts — durable, low maintenance fencing pillars.",
    image:
      "/products/cement-post-ne.jpeg",
  },
  {
    slug: "bend-post",
    title: "Bend Post",
    category: "Posts",
    blurb: "Bend posts for angled compound runs and security wire support.",
    image:
      "/products/bend.jpeg",
  },
  {
    slug: "white-stone",
    title: "White Stone",
    category: "Stones & Sheets",
    blurb: "White stone for fence-base finishing and bright landscape borders.",
    image:
      "/gallery/IMG20201016163232.jpg",
  },
  {
    slug: "black-stone",
    title: "Black Stone",
    category: "Stones & Sheets",
    blurb:
      "Black stone for premium landscape contrast and outdoor finishing.",
    image:
      "/products/black-stone-ne.jpeg",
  },
  {
    slug: "fiber-stumph",
    title: "Fiber Stumph",
    category: "Stones & Sheets",
    blurb:
      "Lightweight fiber stumph for outdoor supports and garden layouts.",
    image:
      "/gallery/Shinestar-7-scaled.jpg",
  },
  {
    slug: "lactic-sheet",
    title: "Lactic Sheet",
    category: "Stones & Sheets",
    blurb:
      "Lactic sheet covering for temporary site protection and outdoor use.",
    image:
      "/gallery/8mm-plastic-lattice.jpg",
  },
];

export type Faq = { question: string; answer: string };

/** Detail content keyed by slug. Merged at runtime via getProduct(). */
const productDetailsMap: Record<string, ProductDetails> = {
  "chain-link": {
    tagline: "The classic, reliable boundary fence",
    description:
      "Galvanised chain link is the most practical fencing solution for compounds, yards and large boundary runs. The diamond weave allows airflow and visibility while keeping the perimeter secure.",
    uses: [
      "Compound walls & residential boundaries",
      "Schools, playgrounds and parks",
      "Storage yards and industrial sites",
      "Farm and agricultural land",
    ],
    specs: [
      { label: "Material", value: "Galvanised iron (GI)" },
      { label: "Mesh sizes", value: "2\" x 2\", 2.5\" x 2.5\", 3\" x 3\"" },
      { label: "Wire gauge", value: "10G / 12G / 14G" },
      { label: "Height", value: "3 ft to 12 ft (custom available)" },
    ],
    highlights: [
      "Cost-effective for long perimeters",
      "Tensioned for a clean straight line",
      "Pairs with cement, steel or Y angle posts",
    ],
  },
  "twisted-chain-link": {
    tagline: "Stronger weave, longer life",
    description:
      "Twisted chain link uses a tighter twisted-wire construction for better tensioning and improved durability. Recommended for higher-security or heavy-use perimeters.",
    uses: [
      "Industrial and factory perimeters",
      "High-traffic compound fencing",
      "Long boundary runs where slack must be avoided",
    ],
    specs: [
      { label: "Material", value: "GI twisted wire" },
      { label: "Mesh sizes", value: "Standard and custom" },
      { label: "Wire gauge", value: "10G / 12G" },
      { label: "Finish", value: "Galvanised, PVC available" },
    ],
    highlights: [
      "Tighter weave resists deformation",
      "Stronger tensioning, less sag",
      "Pairs with heavy-duty posts",
    ],
  },
  "pvc-chainlink": {
    tagline: "Coated. Cleaner. Corrosion-resistant.",
    description:
      "PVC coated chain link adds a colored plastic coating over galvanised wire — corrosion resistant, low maintenance and visually clean. Ideal for agricultural, residential and industrial applications across Avinashi, Tiruppur, and Coimbatore.",
    uses: [
      "Agricultural and residential boundaries",
      "Residential boundaries (green/black)",
      "Sports courts and tennis enclosures",
      "Park and garden fencing",
    ],
    specs: [
      { label: "Core", value: "GI wire" },
      { label: "Coating", value: "PVC – green, black, blue" },
      { label: "Mesh sizes", value: "2\" / 2.5\" / 3\"" },
      { label: "Lifespan", value: "Significantly longer vs bare GI" },
    ],
    highlights: [
      "Corrosion and rust resistant",
      "Looks cleaner against landscaping",
      "Available in green, black, blue",
    ],
  },
  "barbed-wire": {
    tagline: "The original perimeter deterrent",
    description:
      "Classic barbed wire — economical, fast to install and effective for farm boundaries, compound toppings and security perimeters.",
    uses: [
      "Farm and agricultural fencing",
      "Compound wall toppings",
      "Boundary reinforcement",
    ],
    specs: [
      { label: "Material", value: "Galvanised iron" },
      { label: "Wire gauge", value: "12G x 14G (double strand)" },
      { label: "Barb spacing", value: "3\" / 4\" / 5\"" },
      { label: "Coil length", value: "Standard rolls" },
    ],
    highlights: [
      "Low cost per metre",
      "Quick install on Y angles",
      "Pairs with cement posts",
    ],
  },
  "pvc-barbed-wire": {
    tagline: "Barbed wire built for long-term weather protection",
    description:
      "PVC coated barbed wire is galvanised barbed wire with a plastic coating — offering superior corrosion resistance and weather protection for properties in Avinashi, Tiruppur, and Coimbatore.",
    uses: [
      "Farm and estate boundaries",
      "Long-life security toppings",
      "Coloured perimeter reinforcement",
    ],
    specs: [
      { label: "Core", value: "GI barbed wire" },
      { label: "Coating", value: "PVC" },
      { label: "Colour", value: "Green / Black" },
      { label: "Lifespan", value: "Longer in humid climates" },
    ],
    highlights: [
      "Corrosion resistant",
      "Cleaner visual finish",
      "Long lifespan in coastal weather",
    ],
  },
  "concertina-coil": {
    tagline: "High-security razor concertina coil",
    description:
      "Concertina razor coil expands across a perimeter like an accordion, creating a physical and visual deterrent. The go-to choice for high-security compounds and walls.",
    uses: [
      "Compound wall toppings",
      "Industrial and warehouse perimeters",
      "Restricted access zones",
    ],
    specs: [
      { label: "Coil diameter", value: '450mm / 600mm / 730mm / 900mm' },
      { label: "Material", value: "Hot-dipped galvanised" },
      { label: "Blade type", value: "Razor / cross-blade" },
      { label: "Mounting", value: "Y angle or wall brackets" },
    ],
    highlights: [
      "Strong visual deterrent",
      "Quick wall-top install",
      "Multiple diameter options",
    ],
  },
  "razor-wire": {
    tagline: "Flat razor wire — maximum deterrence",
    description:
      "Razor wire is a flat barbed tape stretched along compound walls or fences. Used where maximum deterrence is required.",
    uses: [
      "High-security walls and gates",
      "Industrial and government sites",
      "Top reinforcement on chain link",
    ],
    specs: [
      { label: "Material", value: "GI tape with steel core" },
      { label: "Blade pattern", value: "Razor / barbed" },
      { label: "Install", value: "Stretched and clipped" },
    ],
    highlights: [
      "Highest deterrence factor",
      "Pairs with concertina for layered security",
      "Long service life",
    ],
  },
  "welded-mesh": {
    tagline: "Rigid panels, endless uses",
    description:
      "Welded mesh has wires welded at each intersection — creating a stiff, rigid grid that's perfect for enclosures, partitions, gardens and protective fencing.",
    uses: [
      "Garden and plot enclosures",
      "Poultry, livestock and pet runs",
      "Partitions and cages",
      "Window and balcony protection",
    ],
    specs: [
      { label: "Material", value: "GI welded wire" },
      { label: "Mesh sizes", value: "0.5\" / 1\" / 2\" / 3\"" },
      { label: "Sheet sizes", value: "Standard rolls and panels" },
      { label: "Finish", value: "Galvanised or PVC" },
    ],
    highlights: [
      "Rigid, doesn't sag",
      "Wide variety of opening sizes",
      "Easy to fix to posts or frames",
    ],
  },
  "green-mesh": {
    tagline: "Garden-friendly coated mesh",
    description:
      "PVC coated green mesh blends naturally into gardens, parks and landscapes — practical fencing that doesn't fight the greenery around it.",
    uses: [
      "Residential gardens",
      "Parks and public landscapes",
      "Low-visibility boundaries",
    ],
    specs: [
      { label: "Core", value: "GI wire" },
      { label: "Coating", value: "PVC – garden green" },
      { label: "Mesh sizes", value: "Standard" },
      { label: "Lifespan", value: "Long in outdoor settings" },
    ],
    highlights: [
      "Blends into landscaping",
      "Corrosion resistant",
      "Soft, garden-friendly finish",
    ],
  },
  steel: {
    tagline: "Mild steel for frames and gates",
    description:
      "Mild steel sections form the backbone of fence frames, gate structures and supports. Cut to size and fabricated as needed.",
    uses: [
      "Gate frames and panels",
      "Structural fence supports",
      "Custom fabrication",
    ],
    specs: [
      { label: "Material", value: "Mild steel" },
      { label: "Sections", value: "Flat / round / square" },
      { label: "Finish", value: "Mill / painted" },
    ],
    highlights: [
      "Backbone of every gate",
      "Custom cut to project",
      "Welds and bolts cleanly",
    ],
  },
  angle: {
    tagline: "Standard steel angle iron",
    description:
      "Steel angles are the everyday workhorse — bracing, framing, gate construction and edge reinforcement.",
    uses: [
      "Gate construction",
      "Fence bracing and framing",
      "Edge reinforcement",
    ],
    specs: [
      { label: "Section", value: "Equal angle" },
      { label: "Sizes", value: '1" / 1.5" / 2" / 2.5"' },
      { label: "Finish", value: "Mill or painted" },
    ],
    highlights: [
      "Versatile structural section",
      "Strong against bending",
      "Easy to fabricate",
    ],
  },
  "l-angle": {
    tagline: "L-shaped corner and edge support",
    description:
      "L angle iron is used for corner posts, edges and mounting brackets — wherever a clean right-angle support is required.",
    uses: [
      "Corner posts",
      "Mounting brackets",
      "Edge reinforcement on panels",
    ],
    specs: [
      { label: "Section", value: "L-shape" },
      { label: "Sizes", value: "Standard and custom" },
      { label: "Material", value: "Mild steel" },
    ],
    highlights: [
      "Strong right-angle support",
      "Easy to bolt or weld",
      "Custom cutting available",
    ],
  },
  "y-angle": {
    tagline: "Y angle for wall-top security wire",
    description:
      "Y angles sit on top of compound walls and hold concertina coil, razor wire or barbed wire — angled outward for maximum deterrence.",
    uses: [
      "Wall-top concertina or razor wire",
      "Barbed wire toppings",
      "High-security compound walls",
    ],
    specs: [
      { label: "Section", value: "Y-shape (forked)" },
      { label: "Heights", value: "1.5 ft to 3 ft" },
      { label: "Finish", value: "Galvanised / painted" },
    ],
    highlights: [
      "Built for security wire toppings",
      "Forked arms hold multiple lines",
      "Standard on compound walls",
    ],
  },
  "cement-post": {
    tagline: "Precast pillars that last decades",
    description:
      "Precast cement posts are durable, low-maintenance pillars for chain link, mesh and wire fencing. Set in concrete and rated for years of service.",
    uses: [
      "Chain link fence supports",
      "Mesh and wire fencing",
      "Farm, plot and garden boundaries",
    ],
    specs: [
      { label: "Material", value: "Reinforced precast concrete" },
      { label: "Heights", value: "6 ft / 7 ft / 8 ft / 10 ft" },
      { label: "Spacing", value: "Typical 8–10 ft apart" },
    ],
    highlights: [
      "Decades of service life",
      "No painting, no rust",
      "Strong against impact",
    ],
  },
  "bend-post": {
    tagline: "Angled post for security toppings",
    description:
      "Bend posts are pre-bent at the top — built for security wire toppings, custom fence layouts and angled support runs.",
    uses: [
      "Concertina and razor wire toppings",
      "Angled compound layouts",
      "Custom fence reinforcement",
    ],
    specs: [
      { label: "Material", value: "Concrete or steel" },
      { label: "Heights", value: "Standard and custom" },
      { label: "Bend angle", value: "Suited for security wire" },
    ],
    highlights: [
      "Pre-bent for instant install",
      "Holds multiple wire lines",
      "Stronger than retrofitted angles",
    ],
  },
  "white-stone": {
    tagline: "Bright finishing stone",
    description:
      "White stone is used for fence-base finishing, garden edging and bright, clean landscape borders — a simple way to elevate the look of any fenced area.",
    uses: [
      "Fence-base finishing",
      "Garden edging",
      "Pathway borders",
    ],
    specs: [
      { label: "Type", value: "Natural / crushed" },
      { label: "Sizes", value: "Mixed grades" },
      { label: "Colour", value: "White" },
    ],
    highlights: [
      "Brightens any fence base",
      "Low maintenance",
      "Drainage-friendly",
    ],
  },
  "black-stone": {
    tagline: "Premium contrast finishing",
    description:
      "Black stone delivers a modern, premium look — strong contrast against fencing and landscaping for an architectural finish.",
    uses: [
      "Modern fence borders",
      "Landscape contrast features",
      "Premium outdoor finishing",
    ],
    specs: [
      { label: "Type", value: "Natural / crushed" },
      { label: "Sizes", value: "Mixed grades" },
      { label: "Colour", value: "Black" },
    ],
    highlights: [
      "Premium architectural look",
      "Strong contrast finish",
      "Long lasting outdoors",
    ],
  },
  "fiber-stumph": {
    tagline: "Lightweight outdoor supports",
    description:
      "Fiber stumph offers lightweight, easy-to-handle support for outdoor layouts, garden fencing and practical accessory applications.",
    uses: [
      "Garden layouts",
      "Light-duty outdoor supports",
      "Temporary or movable installs",
    ],
    specs: [
      { label: "Material", value: "Composite fiber" },
      { label: "Weight", value: "Lightweight vs concrete" },
      { label: "Finish", value: "Outdoor-rated" },
    ],
    highlights: [
      "Easy to handle and install",
      "Resistant to rust",
      "Practical for gardens",
    ],
  },
  "lactic-sheet": {
    tagline: "Outdoor protective sheeting",
    description:
      "Lactic sheet provides temporary covering and outdoor protection for sites, materials and practical fencing applications.",
    uses: [
      "Site protection",
      "Temporary fence cladding",
      "Outdoor cover for stored material",
    ],
    specs: [
      { label: "Material", value: "Lactic polymer sheet" },
      { label: "Sizes", value: "Standard rolls / sheets" },
      { label: "Use", value: "Outdoor, temporary" },
    ],
    highlights: [
      "Quick site protection",
      "Lightweight and reusable",
      "Weather resistant",
    ],
  },
};

/** Returns a product with its detail content merged in. */
export function getProduct(slug: string): Product | undefined {
  const p = products.find((x) => x.slug === slug);
  if (!p) return undefined;
  return { ...p, details: productDetailsMap[p.slug] };
}

export function relatedProducts(slug: string, limit = 3): Product[] {
  const current = products.find((p) => p.slug === slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.details?.description ?? product.blurb,
    category: product.category,
    brand: { "@type": "Brand", name: company.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${siteUrl}/products/${product.slug}`,
      seller: { "@type": "LocalBusiness", name: company.name },
    },
  };
}

export const homeFaqs: Faq[] = [
  {
    question: "Which areas in Tamil Nadu do you serve?",
    answer:
      "Navi Fencing is based in Avinashi and primarily serves Avinashi, Tiruppur, Coimbatore, and all districts across Tamil Nadu for residential, agricultural, commercial, and industrial fencing.",
  },
  {
    question: "Do you supply only materials or also install?",
    answer:
      "Both. We supply all fencing materials and also handle expert end-to-end installation with quality workmanship.",
  },
  {
    question: "How quickly can a site visit be arranged?",
    answer:
      "Within 24 to 48 hours of your call or WhatsApp message for most locations in Avinashi, Tiruppur, Coimbatore, and surrounding areas.",
  },
  {
    question: "Do you provide a free consultation?",
    answer:
      "Yes. Site measurement, material recommendation and quote are completely free of cost.",
  },
];

/**
 * AEO (Answer Engine Optimization) FAQ blocks.
 *
 * These are written "answer-first": the opening sentence of every answer
 * is a complete, self-contained response to the question on its own —
 * exactly what Google's featured snippets, AI Overviews, ChatGPT/Perplexity
 * answers and voice assistants pull out and quote/read aloud. The
 * follow-up sentence adds supporting detail for the human reader.
 *
 * Deliberately no invented rupee figures — pricing is genuinely site- and
 * spec-dependent, so a fabricated number would be inaccurate and could
 * misquote us in an AI answer. "Free quote after site visit" is the
 * honest, still-answerable version of a pricing question.
 */
export function productFaqs(product: Product): Faq[] {
  const details = product.details;
  const useList = details?.uses?.slice(0, 3).join(", ") ?? undefined;
  const faqs: Faq[] = [];

  faqs.push({
    question: `What is ${product.title} fencing used for?`,
    answer: useList
      ? `${product.title} is mainly used for ${useList}. ${product.blurb}`
      : product.blurb,
  });

  faqs.push({
    question: `How much does ${product.title} fencing cost?`,
    answer:
      `${product.title} pricing depends on the length, height, mesh size/gauge and site conditions, so we don't quote a fixed rate online. ` +
      `Navi Fencing gives a free site visit and a clear per-foot quote — usually within 24–48 hours of your call or WhatsApp message.`,
  });

  faqs.push({
    question: `Does Navi Fencing supply and install ${product.title}?`,
    answer:
      `Yes — Navi Fencing both supplies the material and handles expert installation for ${product.title} across Avinashi, Tiruppur, Coimbatore, and every district of Tamil Nadu.`,
  });

  if (details?.specs && details.specs.length > 0) {
    const specLine = details.specs
      .slice(0, 3)
      .map((s) => `${s.label.toLowerCase()}: ${s.value}`)
      .join("; ");
    faqs.push({
      question: `What are the specifications of ${product.title}?`,
      answer: `Standard ${product.title} specifications are — ${specLine}. Final specification is confirmed on-site to match your project.`,
    });
  }

  return faqs;
}

/**
 * Location-page FAQ generator. Kept generic and honest (no fabricated
 * pricing or turnaround claims per area) but answer-first for AEO.
 */
export function locationFaqs(
  name: string,
  kind: "district" | "area",
  districtName: string | undefined,
  featuredProductNames: string[],
): Faq[] {
  const areaLabel =
    kind === "area" && districtName ? `${name}, ${districtName} district` : name;

  return [
    {
      question: `Does Navi Fencing install fencing in ${name}?`,
      answer: `Yes — Navi Fencing supplies and installs fencing in ${areaLabel}, covering chain link, barbed wire, concertina coil, razor wire and welded mesh fencing for residential, commercial and industrial sites.`,
    },
    {
      question: `How much does fencing cost in ${name}?`,
      answer: `Fencing cost in ${name} depends on the length, fence height, material and mesh gauge chosen. Navi Fencing offers a free site visit and gives a clear per-foot quote, usually within 24–48 hours.`,
    },
    {
      question: `What fencing materials are available in ${name}?`,
      answer:
        featuredProductNames.length > 0
          ? `Navi Fencing supplies ${featuredProductNames.join(", ")} and more in ${name} — see the full catalogue on our Products page.`
          : `Navi Fencing supplies chain link, barbed wire, concertina coil, razor wire, welded mesh and PVC-coated fencing in ${name}.`,
    },
    {
      question: `Is Navi Fencing a local contractor in ${name}?`,
      answer: `Navi Fencing is based in Avinashi (Tiruppur district) and runs site visits and installation crews across Avinashi, Tiruppur, Coimbatore, and the rest of Tamil Nadu — we're a regional and statewide contractor, not a single-city outfit.`,
    },
  ];
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: company.phones[0],
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avinashi",
      addressLocality: "Avinashi",
      addressRegion: company.state,
      postalCode: "641654",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.1932,
      longitude: 77.2687,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Avinashi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tiruppur",
      },
      {
        "@type": "AdministrativeArea",
        name: "Coimbatore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
      },
    ],
    description: company.tagline,
    priceRange: "₹₹",
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
