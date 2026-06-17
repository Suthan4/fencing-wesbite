// src/components/SeoKeywords.tsx
// Renders visually subtle but crawlable keyword-rich content for local SEO

const tamilNaduDistricts = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Tirunelveli",
  "Tiruppur",
  "Vellore",
  "Erode",
  "Thoothukudi",
  "Dindigul",
  "Thanjavur",
  "Ranipet",
  "Sivaganga",
  "Virudhunagar",
  "Nagapattinam",
  "Kancheepuram",
  "Chengalpattu",
  "Villupuram",
  "Cuddalore",
  "Namakkal",
  "Karur",
  "Ramanathapuram",
  "Tiruvannamalai",
  "Tiruvarur",
  "Nilgiris",
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
  "Chengai",
  "Tambaram",
  "Avadi",
  "Ambattur",
  "Porur",
  "Velachery",
  "OMR",
  "ECR",
  "Sholinganallur",
  "Perambur",
  "Guindy",
  "Adyar",
  "Nungambakkam",
  "Anna Nagar",
  "Mogappair",
  "Maduravoyal",
  "Poonamallee",
  "Sriperumbudur",
  "Maraimalai Nagar",
  "Siruseri",
  "Kelambakkam",
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
      "Fencing Company",
    ].map((s) => `${s} in ${d}`),
  );

  const typeKeywords = fencingTypes.flatMap((t) => [
    `${t} in Tamil Nadu`,
    `${t} in Chennai`,
    `${t} Contractor`,
    `${t} Supplier`,
    `${t} Installation`,
  ]);

  const allKeywords = [
    ...serviceKeywords.map((s) => `${s} in Tamil Nadu`),
    ...serviceKeywords.map((s) => `${s} in Chennai`),
    ...typeKeywords,
    ...districtKeywords,
    // Extra high-value combos
    "Navi Fencing Contractors",
    "Navi Fencing Chennai",
    "Navi Fencing Tamil Nadu",
    "Chain Link Fence Price in Tamil Nadu",
    "Barbed Wire Price in Tamil Nadu",
    "Concertina Coil Price in Tamil Nadu",
    "Fencing Cost Per Foot Tamil Nadu",
    "Fencing Cost Per Metre Tamil Nadu",
    "Chain Link Fence Cost Per Metre Chennai",
    "Best Fencing Rates in Tamil Nadu",
    "Lowest Fencing Rates in Chennai",
    "Fencing Near Me Tamil Nadu",
    "Fencing Near Me Chennai",
    "Wire Fencing Contractor Tamil Nadu",
    "Security Fencing Contractor Chennai",
    "Industrial Fencing Contractor Tamil Nadu",
    "Commercial Fencing Chennai",
    "Residential Fencing Contractor Chennai",
    "Garden Fencing Services Tamil Nadu",
    "Compound Wall Fencing Tamil Nadu",
    "PVC Fencing Contractor Chennai",
    "GI Wire Fencing Supplier Tamil Nadu",
    "Steel Fencing Contractor Chennai",
    "Solar Electric Fencing Tamil Nadu",
    "Electric Fencing Contractor Tamil Nadu",
    "Fence Installation Company Tamil Nadu",
    "Fence Contractor Near Me Chennai",
    "Chain Link Fence Supplier Chennai",
    "Welded Mesh Supplier Tamil Nadu",
    "Razor Wire Supplier Tamil Nadu",
    "Concertina Coil Supplier Chennai",
    "Fencing Material Supplier Tamil Nadu",
    "Wire Mesh Supplier Chennai",
    "Iron Gate Contractor Chennai",
    "Steel Gate Contractor Tamil Nadu",
    "All Types of Fencing in Tamil Nadu",
    "All Types of Fencing in Chennai",
    "Top Quality Fencing Work in Tamil Nadu",
    "Best Fencing Services in Tamil Nadu",
  ];

  return (
    <section
      className="bg-[#f5f5f7] py-14 border-t border-[#e5e5ea]"
      aria-label="Service areas and fencing keywords"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 className="text-xl font-semibold text-[#1d1d1f] mb-3">
          Navi Fencing Contractors — Serving All of Tamil Nadu
        </h2>
        <p className="text-sm text-[#515154] leading-relaxed mb-6 max-w-4xl">
          Navi Fencing is one of Tamil Nadu's most trusted fencing contractors,
          delivering quality fencing installation and supply across Chennai and
          all Tamil Nadu districts. Whether you need chain link fencing, barbed
          wire, concertina coil, razor wire, welded mesh, PVC chainlink,
          security fencing, compound wall fencing, farm fencing, garden fencing
          or industrial perimeter fencing — our expert team covers every
          district, every project.
        </p>

        {/* District coverage grid — visible and useful for users too */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
            Districts &amp; Areas We Serve
          </h3>
          <div className="flex flex-wrap gap-2">
            {tamilNaduDistricts.map((d) => (
              <span
                key={d}
                className="text-xs bg-white border border-[#e5e5ea] rounded-full px-3 py-1 text-[#515154]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Fencing type pills */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
            Fencing Types We Install
          </h3>
          <div className="flex flex-wrap gap-2">
            {fencingTypes.map((t) => (
              <span
                key={t}
                className="text-xs bg-white border border-[#e5e5ea] rounded-full px-3 py-1 text-[#515154]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hidden keyword block — crawlable but not visually intrusive */}
        <p className="text-[0.65rem] text-[#86868b] leading-relaxed">
          {allKeywords.join(" | ")}
        </p>
      </div>
    </section>
  );
}
