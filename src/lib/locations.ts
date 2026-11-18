// src/lib/locations.ts
// Data model for location-aware pages: every Tamil Nadu district + key
// local areas within the major districts. Powers /[location] pages and
// the location-aware homepage sections.

// Shared names for the request header (set by middleware.ts) and cookie
// used to pass the detected location down to Server Components.
export const LOCATION_HEADER = "x-nf-location";
export const LOCATION_COOKIE = "nf_loc";

export type LocationKind = "district" | "area";

export interface LocationEntry {
  slug: string;
  name: string;
  kind: LocationKind;
  districtSlug: string;
  districtName: string;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// All 38 Tamil Nadu districts.
const districtNames: string[] = [
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
  "Kanchipuram",
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
  "Tiruvallur",
  "Kanyakumari",
];

// One-line local flavour per district — used in page copy so each
// district page reads as genuinely local, not templated filler.
export const districtHighlights: Record<string, string> = {
  chennai:
    "Tamil Nadu's coastal capital and largest metro — homes, IT parks and industrial estates across the city.",
  coimbatore:
    "Kovai — Tamil Nadu's textile, engineering and manufacturing hub in the foothills of the Western Ghats.",
  madurai:
    "The historic temple city and southern Tamil Nadu's commercial centre.",
  tiruchirappalli:
    "Trichy — a major industrial, educational and transport hub at the heart of Tamil Nadu.",
  salem: "Steel, textiles and mango orchards across the Salem region.",
  tirunelveli:
    "The rice bowl of the south, with a growing industrial and residential belt.",
  tiruppur: "India's knitwear and hosiery export capital.",
  vellore:
    "A leather and tannery hub, home to Vellore Fort and CMC Hospital.",
  erode: "The turmeric trading centre and a major textile town.",
  thoothukudi: "A major port city on Tamil Nadu's southern coast.",
  dindigul: "Known for locks manufacturing and the gateway to Kodaikanal.",
  thanjavur: "The Chola heritage capital, in the heart of the delta.",
  ranipet: "A leather and tannery industrial belt north of Vellore.",
  sivaganga: "An agricultural district known for palm produce.",
  virudhunagar: "Home to Tamil Nadu's fireworks and matchstick industry.",
  nagapattinam: "A coastal fishing and delta agriculture district.",
  kanchipuram: "The silk-weaving heritage town of Tamil Nadu.",
  chengalpattu: "A fast-growing industrial corridor south of Chennai.",
  villupuram: "An agricultural crossroads district in northern Tamil Nadu.",
  cuddalore: "A port town with chemical industries and SEZs.",
  namakkal: "Known for the poultry industry and transport business.",
  karur: "A textile export hub known for bus-body building.",
  ramanathapuram: "A coastal district near Rameswaram.",
  tiruvannamalai: "A temple town and hill pilgrimage centre.",
  tiruvarur: "A delta agriculture district on the Cauvery basin.",
  nilgiris: "The Blue Mountains — Ooty, Coonoor and tea estate country.",
  krishnagiri: "The mango belt on the industrial corridor to Bengaluru.",
  dharmapuri: "An agricultural hill district in northern Tamil Nadu.",
  perambalur: "A central Tamil Nadu agricultural district.",
  ariyalur: "Home to Tamil Nadu's cement and limestone industry.",
  pudukkottai: "An agricultural and granite-quarrying district.",
  theni: "Cardamom hills, grape orchards and mountain country.",
  tenkasi: "Waterfalls and agriculture on the Kerala border.",
  kallakurichi: "A sugarcane and agricultural belt in northern Tamil Nadu.",
  tirupattur: "A gold jewellery trade hub in northern Tamil Nadu.",
  mayiladuthurai: "A delta agriculture and temple town district.",
  tiruvallur: "The industrial belt north-west of Chennai — electronics and auto manufacturing.",
  kanyakumari: "Tamil Nadu's southern tip — coastal and tourism country.",
};

// Local areas within the districts we cover in the most depth. Keys are
// district slugs; values are display names of towns / neighbourhoods.
const localAreasByDistrict: Record<string, string[]> = {
  chennai: [
    "Porur",
    "Velachery",
    "OMR",
    "ECR",
    "Sholinganallur",
    "Tambaram",
    "Avadi",
    "Ambattur",
    "Anna Nagar",
    "Nungambakkam",
    "Adyar",
    "Guindy",
    "Perambur",
    "Mogappair",
    "Maduravoyal",
    "Pallavaram",
    "Chromepet",
    "T Nagar",
    "Mylapore",
  ],

  coimbatore: [
    "Annur",
    "Sulur",
    "Pollachi",
    "Mettupalayam",
    "Karamadai",
    "Kinathukadavu",
    "Madukkarai",
    "Perur",
    "Saravanampatti",
    "Vadavalli",
    "Peelamedu",
    "RS Puram",
    "Gandhipuram",
    "Singanallur",
    "Ganapathy",
    "Kovaipudur",
    "Thudiyalur",
    "Podanur",
  ],

  tiruppur: [
    "Avinashi",
    "Palladam",
    "Kangeyam",
    "Dharapuram",
    "Udumalpet",
    "Avinashipalayam",
    "Uthukuli",
    "Mangalam",
  ],

  madurai: [
    "Melur",
    "Thirumangalam",
    "Usilampatti",
    "Tallakulam",
    "Villapuram",
    "K Pudur",
    "Thiruparankundram",
    "Anna Nagar Madurai",
  ],

  tiruchirappalli: [
    "Manapparai",
    "Lalgudi",
    "Musiri",
    "Srirangam",
    "Thillai Nagar",
    "K K Nagar Trichy",
    "Cantonment",
    "Woraiyur",
  ],

  salem: [
    "Attur",
    "Mettur",
    "Edappadi",
    "Omalur",
    "Sankagiri",
    "Fairlands",
    "Hasthampatti",
    "Ammapet",
    "Suramangalam",
  ],

  tirunelveli: [
    "Sankarankovil",
    "Palayamkottai",
    "Ambasamudram",
    "Cheranmahadevi",
    "Melapalayam",
  ],

  vellore: [
    "Katpadi",
    "Gudiyattam",
    "Walajapet",
  ],

  erode: [
    "Gobichettipalayam",
    "Sathyamangalam",
    "Perundurai",
    "Bhavani",
    "Anthiyur",
    "Kodumudi",
    "Chennimalai",
    "Chithode",
  ],

  thoothukudi: [
    "Kovilpatti",
    "Tiruchendur",
  ],

  dindigul: [
    "Palani",
    "Oddanchatram",
    "Nilakottai",
    "Vedasandur",
    "Kodaikanal",
  ],

  thanjavur: [
    "Kumbakonam",
    "Pattukkottai",
    "Orathanadu",
    "Papanasam",
  ],

  ranipet: [
    "Arcot",
    "Arakkonam",
    "Sholingur",
    "Nemili",
    "Timiri",
  ],

  sivaganga: [
    "Karaikudi",
    "Devakottai",
  ],

  virudhunagar: [
    "Sivakasi",
    "Rajapalayam",
    "Aruppukkottai",
  ],

  nagapattinam: [
    "Vedaranyam",
    "Kilvelur",
  ],

  kanchipuram: [
    "Walajabad",
    "Uthiramerur",
    "Kundrathur",
    "Oragadam",
  ],

  chengalpattu: [
    "Maraimalai Nagar",
    "Guduvancheri",
    "Vandalur",
    "Urapakkam",
    "Singaperumal Koil",
    "Kelambakkam",
    "Siruseri",
  ],

  villupuram: [
    "Tindivanam",
    "Vanur",
    "Gingee",
  ],

  cuddalore: [
    "Neyveli",
    "Panruti",
    "Chidambaram",
  ],

  namakkal: [
    "Tiruchengode",
    "Rasipuram",
    "Paramathi Velur",
    "Kumarapalayam",
  ],

  karur: [
    "Kulithalai",
    "Aravakurichi",
  ],

  ramanathapuram: [
    "Rameswaram",
    "Paramakudi",
  ],

  tiruvannamalai: [
    "Arani",
    "Polur",
    "Chengam",
  ],

  tiruvarur: [
    "Mannargudi",
    "Thiruthuraipoondi",
  ],

  nilgiris: [
    "Ooty",
    "Coonoor",
    "Kotagiri",
    "Gudalur",
  ],

  krishnagiri: [
    "Hosur",
    "Denkanikottai",
  ],

  dharmapuri: [
    "Harur",
    "Palacode",
    "Pappireddipatti",
  ],

  perambalur: [
    "Kunnam",
    "Veppanthattai",
  ],

  ariyalur: [
    "Jayankondam",
    "Sendurai",
  ],

  pudukkottai: [
    "Aranthangi",
    "Illupur",
  ],

  theni: [
    "Bodinayakanur",
    "Cumbum",
    "Periyakulam",
  ],

  tenkasi: [
    "Sankarankovil",
    "Kadayanallur",
    "Courtallam",
  ],

  kallakurichi: [
    "Ulundurpet",
    "Sankarapuram",
  ],

  tirupattur: [
    "Vaniyambadi",
    "Ambur",
  ],

  mayiladuthurai: [
    "Sirkazhi",
    "Tharangambadi",
  ],

  tiruvallur: [
    "Ambattur",
    "Avadi",
    "Poonamallee",
    "Sriperumbudur",
    "Gummidipoondi",
  ],

  kanyakumari: [
    "Nagercoil",
    "Colachel",
    "Marthandam",
  ],
};

// Build the flat list of every district + area entry.
export const locations: LocationEntry[] = (() => {
  const entries: LocationEntry[] = [];
  const seenSlugs = new Set<string>();

  for (const districtName of districtNames) {
    const districtSlug = slugify(districtName);
    if (!seenSlugs.has(districtSlug)) {
      entries.push({
        slug: districtSlug,
        name: districtName,
        kind: "district",
        districtSlug,
        districtName,
      });
      seenSlugs.add(districtSlug);
    }

    const areas = localAreasByDistrict[districtSlug] ?? [];
    for (const areaName of areas) {
      const areaSlug = slugify(areaName);
      if (seenSlugs.has(areaSlug)) continue; // guard against duplicate slugs
      entries.push({
        slug: areaSlug,
        name: areaName,
        kind: "area",
        districtSlug,
        districtName,
      });
      seenSlugs.add(areaSlug);
    }
  }

  return entries;
})();

const locationBySlug: Record<string, LocationEntry> = Object.fromEntries(
  locations.map((l) => [l.slug, l]),
);

export const DEFAULT_LOCATION_SLUG = "avinashi";

/** Primary service districts. Visitor geo-detection and page ordering only
 *  ever surface these (and their local areas); every other district is
 *  still served and has its own page, but is secondary. */
export const PRIMARY_DISTRICT_SLUGS = ["tiruppur", "coimbatore"] as const;
export const PRIMARY_DISPLAY = "Avinashi, Tiruppur & Coimbatore";

/** True for Avinashi, Tiruppur, Coimbatore and the local areas within
 *  the Tiruppur / Coimbatore districts. */
export function isPrimaryLocation(slug: string | null | undefined): boolean {
  if (!slug) return false;
  const loc = locationBySlug[slugify(slug)];
  if (!loc) return false;
  return (
    loc.slug === DEFAULT_LOCATION_SLUG ||
    (PRIMARY_DISTRICT_SLUGS as readonly string[]).includes(loc.districtSlug)
  );
}

/** Returns the location only if primary; otherwise the default (Avinashi). */
export function getPrimaryLocation(slug: string | null | undefined): LocationEntry {
  return isPrimaryLocation(slug)
    ? locationBySlug[slugify(slug as string)]
    : locationBySlug[DEFAULT_LOCATION_SLUG];
}

export function getLocation(slug: string): LocationEntry | undefined {
  return locationBySlug[slugify(slug)];
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

export function getDistricts(): LocationEntry[] {
  const all = locations.filter((l) => l.kind === "district");
  const rank = (l: LocationEntry) => (isPrimaryLocation(l.slug) ? 0 : 1);
  // Stable sort: primary districts (Tiruppur, Coimbatore) first.
  return [...all].sort((a, b) => rank(a) - rank(b));
}

/** Areas + the district itself, other than the given slug — used for
 *  the "areas we also cover nearby" links on a location page. */
export function getNearbyLocations(slug: string, limit = 8): LocationEntry[] {
  const current = getLocation(slug);
  if (!current) return [];
  const siblings = locations.filter(
    (l) => l.districtSlug === current.districtSlug && l.slug !== current.slug,
  );
  return siblings.slice(0, limit);
}

export function getDistrictHighlight(districtSlug: string): string {
  return (
    districtHighlights[districtSlug] ??
    "Trusted fencing supply and installation across this district."
  );
}

/** Resolve a raw geolocation string (e.g. from an IP-geolocation header)
 *  to the closest known location entry. Falls back to the default. */
export function resolveLocationFromCityString(
  city: string | null | undefined,
): LocationEntry {
  if (city && isPrimaryLocation(slugify(city))) {
    return locationBySlug[slugify(city)];
  }
  return locationBySlug[DEFAULT_LOCATION_SLUG];
}