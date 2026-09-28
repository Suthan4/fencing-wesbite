import Link from "next/link";
import { getLocation, slugify } from "@/lib/locations";

const tamilNaduDistricts = [
  "Avinashi",
  "Tiruppur",
  "Coimbatore",
  "Erode",
  "Salem",
  "Karur",
  "Namakkal",
  "Dindigul",
  "Nilgiris",
  "Madurai",
  "Tiruchirappalli",
  "Tirunelveli",
  "Chennai",
  "Vellore",
  "Thoothukudi",
  "Thanjavur",
  "Ranipet",
  "Sivaganga",
  "Virudhunagar",
  "Nagapattinam",
  "Kancheepuram",
  "Chengalpattu",
  "Villupuram",
  "Cuddalore",
  "Ramanathapuram",
  "Tiruvannamalai",
  "Tiruvarur",
  "Krishnagiri",
  "Dharmapuri",
  "Perambalur",
  "Ariyalur",
  "Pudukkottai",
  "Theni",
  "Tenkasi",
  "Kallakurichi",
  "Tirupattur",
  "Mayiladuthurai",
  "Palladam",
  "Kangeyam",
  "Dharapuram",
  "Sulur",
  "Annur",
  "Pollachi",
];

const fencingTypes = [
  "Chain Link Fencing",
  "Barbed Wire Fencing",
  "Concertina Coil Fencing",
  "Razor Wire Fencing",
  "Welded Mesh Fencing",
  "PVC Chain Link Fencing",
  "Security Fencing",
  "Compound Wall Fencing",
  "Agricultural Fencing",
  "Industrial Fencing",
  "Residential Fencing",
  "Commercial Fencing",
  "Farm Fencing",
  "Garden Fencing",
  "Boundary Fencing",
  "Privacy Fencing",
  "GI Wire Fencing",
  "Steel Fencing",
  "Mesh Fencing",
  "Wire Fencing",
];

const serviceKeywords = [
  "Fencing Contractor",
  "Fencing Contractors Near Me",
  "Fencing Company",
  "Fencing Services",
  "Fencing Installation",
  "Fencing Supplier",
  "Fencing Materials",
  "Fencing Dealer",
  "Best Fencing Contractor",
  "Top Fencing Contractor",
  "Fencing Works",
  "Fencing Cost",
  "Cheap Fencing",
  "Affordable Fencing",
  "Quality Fencing",
  "Fencing Quote",
  "Fencing Estimate",
  "Free Fencing Consultation",
];

export function SeoKeywords() {
  // Build keyword strings
  const districtKeywords = tamilNaduDistricts.flatMap((d) =>
    [
      "Fencing Contractor",
      "Chain Link Fencing",
      "Barbed Wire Fencing",
      "Fencing Supplier",
      "Fencing Company",
    ].map((s) => `${s} in ${d}`),
  );

  const typeKeywords = fencingTypes.flatMap((t) => [
    `${t} in Avinashi`,
    `${t} in Tiruppur`,
    `${t} in Coimbatore`,
    `${t} in Tamil Nadu`,
    `${t} Contractor`,
    `${t} Supplier`,
    `${t} Installation`,
  ]);

  const allKeywords = [
    ...districtKeywords,
    ...typeKeywords,
    ...serviceKeywords.map((s) => `${s} in Avinashi`),
    ...serviceKeywords.map((s) => `${s} in Tiruppur`),
    ...serviceKeywords.map((s) => `${s} in Coimbatore`),
    ...serviceKeywords.map((s) => `${s} in Tamil Nadu`),
    // Extra high-value combos
    "Navi Fencing Contractors",
    "Navi Fencing Avinashi",
    "Navi Fencing Tiruppur",
    "Navi Fencing Coimbatore",
    "Navi Fencing Tamil Nadu",
    "Fencing Contractors in Avinashi",
    "Fencing Suppliers in Avinashi",
    "Fencing Contractors in Tiruppur",
    "Fencing Suppliers in Tiruppur",
    "Fencing Contractors in Coimbatore",
    "Fencing Suppliers in Coimbatore",
    "Chain Link Fencing in Avinashi",
    "Chain Link Fencing in Tiruppur",
    "Chain Link Fencing in Coimbatore",
    "Chain Link Fence Price in Tiruppur",
    "Barbed Wire Price in Coimbatore",
    "Concertina Coil Price in Tamil Nadu",
    "Fencing Cost Per Foot Avinashi",
    "Fencing Cost Per Foot Tiruppur",
    "Fencing Cost Per Foot Coimbatore",
    "Best Fencing Rates in Avinashi",
    "Best Fencing Rates in Tiruppur",
    "Lowest Fencing Rates in Coimbatore",
    "Fencing Near Me Avinashi",
    "Fencing Near Me Tiruppur",
    "Fencing Near Me Coimbatore",
    "Wire Fencing Contractor Tiruppur",
    "Security Fencing Contractor Coimbatore",
    "Industrial Fencing Contractor Tiruppur",
    "Commercial Fencing Coimbatore",
    "Residential Fencing Contractor Avinashi",
    "Farm Fencing Contractor Avinashi",
    "Garden Fencing Services Coimbatore",
    "Compound Wall Fencing Tiruppur",
    "PVC Fencing Contractor Avinashi",
    "GI Wire Fencing Supplier Coimbatore",
    "Steel Fencing Contractor Tiruppur",
    "Solar Electric Fencing Tamil Nadu",
    "Fence Installation Company Avinashi",
    "Fence Contractor Near Me Tiruppur",
    "Chain Link Fence Supplier Avinashi",
    "Welded Mesh Supplier Coimbatore",
    "Razor Wire Supplier Tiruppur",
    "Concertina Coil Supplier Avinashi",
    "Fencing Material Supplier Tiruppur",
    "Wire Mesh Supplier Coimbatore",
    "All Types of Fencing in Avinashi",
    "All Types of Fencing in Tiruppur",
    "All Types of Fencing in Coimbatore",
    "Top Quality Fencing Work in Tamil Nadu",
    "Best Fencing Services in Tamil Nadu",
  ];

  const uniqueKeywords = [...new Set(allKeywords)];

  return (
    <section
      className="bg-[#f5f5f7] py-14 border-t border-[#e5e5ea]"
      aria-label="Service areas and fencing keywords"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-xl font-semibold text-[#1d1d1f] mb-3">
          Navi Fencing Contractors — Serving Avinashi, Tiruppur, Coimbatore &
          Tamil Nadu
        </h2>
        <p className="text-sm text-[#515154] leading-relaxed mb-6 max-w-4xl">
          Navi Fencing is one of the region's most trusted fencing contractors,
          delivering quality fencing installation and supply across Avinashi,
          Tiruppur, Coimbatore, and all Tamil Nadu districts. Whether you need
          chain link fencing, barbed wire, concertina coil, razor wire, welded
          mesh, PVC chainlink, security fencing, compound wall fencing, farm
          fencing, garden fencing or industrial perimeter fencing — our expert
          team covers every location with durable materials and professional
          installation.
        </p>

        {/* District coverage grid — visible and useful for users too */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
            Districts &amp; Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-2">
            {tamilNaduDistricts.map((d) => {
              const loc = getLocation(slugify(d));
              return (
                <Link
                  key={d}
                  href={loc ? `/${loc.slug}` : "/contact"}
                  className="text-xs bg-white border border-[#e5e5ea] rounded-full px-3 py-1 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                >
                  {d}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Fencing type pills */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
            Fencing Types We Install
          </h3>
          <div className="flex flex-wrap gap-2">
            {fencingTypes.map((t) => (
              <Link
                key={t}
                href="/contact"
                className="text-xs bg-white border border-[#e5e5ea] rounded-full px-3 py-1 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>

        {/* Hidden keyword block — crawlable but not visually intrusive */}
        <div className="text-base text-[#515154] leading-relaxed">
          {uniqueKeywords.map((keyword, index) => (
            <span key={`${keyword}-${index}`}>
              <Link
                href="/contact"
                className="
          hover:text-blue-600
          hover:underline
          underline-offset-4
          transition-colors
          duration-200
        "
              >
                {keyword}
              </Link>

              {index < uniqueKeywords.length - 1 && (
                <span className="mx-2 text-[#86868b]">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
