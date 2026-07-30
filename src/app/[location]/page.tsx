import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Shield,
  Home as HomeIcon,
  Building2,
  Wrench,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import {
  company,
  products,
  siteUrl,
  whatsappUrl,
  localBusinessJsonLd,
  locationFaqs,
} from "@/lib/site";
import {
  getAllLocationSlugs,
  getLocation,
  getNearbyLocations,
  getDistrictHighlight,
  getDistricts,
} from "@/lib/locations";
import { FaqSection } from "@/components/faqSection";

type Props = { params: Promise<{ location: string }> };

const galleryImages = [
  "IMG20200221154145.jpg",
  "IMG20200221154149.jpg",
  "IMG20200221154151.jpg",
  "IMG20201016163148.jpg",
  "IMG20201022082702_01.jpg",
  "IMG20201103104802.jpg",
  "IMG20201106115628.jpg",
  "IMG20201125153549.jpg",
  "IMG20201215113309.jpg",
  "IMG20210321074206_01.jpg",
  "IMG20210901071903.jpg",
  "IMG20210928151334.jpg",
];

const serviceTemplates = [
  {
    icon: HomeIcon,
    title: "Residential Fencing",
    descFor: (name: string) =>
      `Privacy and security fencing for homes, villas and farmhouses in ${name}.`,
  },
  {
    icon: Building2,
    title: "Commercial Fencing",
    descFor: (name: string) =>
      `Perimeter security for factories, warehouses and offices around ${name}.`,
  },
  {
    icon: Shield,
    title: "Security Fencing",
    descFor: () =>
      "Concertina coil, razor wire and high-security wall toppings.",
  },
  {
    icon: Wrench,
    title: "Installation & Supply",
    descFor: (name: string) =>
      `Materials supplied and installed on-site by our ${name} project crew.`,
  },
];

/** Simple deterministic hash so each location gets a stable but varied
 *  slice of images/products without needing hand-picked content per page. */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

function rotate<T>(arr: T[], offset: number, count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) out.push(arr[(offset + i) % arr.length]);
  return out;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((location) => ({ location }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return { title: "Location not found" };

  const title =
    loc.kind === "district"
      ? `Fencing Contractor in ${loc.name} — Navi Fencing`
      : `Fencing Contractor in ${loc.name}, ${loc.districtName} — Navi Fencing`;
  const description = `Navi Fencing supplies and installs chain link, barbed wire, concertina coil, razor wire, welded mesh and PVC chainlink fencing in ${loc.name}${
    loc.kind === "area" ? `, ${loc.districtName}` : ""
  }. Free consultation, expert installation. Call ${company.displayPhones[0]}.`;

  return {
    title,
    description,
    alternates: { canonical: `/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `/${loc.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const hash = hashSlug(loc.slug);
  const heroImages = rotate(galleryImages, hash % galleryImages.length, 3);
  const featuredProducts = rotate(products, hash % products.length, 6);
  const nearby = getNearbyLocations(loc.slug, 8);
  const otherDistricts = getDistricts()
    .filter((d) => d.slug !== loc.districtSlug)
    .slice(hash % 10, (hash % 10) + 8);
  const highlight = getDistrictHighlight(loc.districtSlug);

  const enquireMsg = `Hi Navi Fencing, I'd like a free consultation and quote for fencing in ${loc.name}.`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: loc.name,
        item: `${siteUrl}/${loc.slug}`,
      },
    ],
  };

  const localBusiness = {
    ...localBusinessJsonLd(),
    areaServed: loc.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.name,
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  const faqs = locationFaqs(
    loc.name,
    loc.kind,
    loc.kind === "area" ? loc.districtName : undefined,
    featuredProducts.slice(0, 4).map((p) => p.title),
  );

  return (
    <>
      <JsonLd data={[localBusiness, breadcrumbJsonLd]} />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        <section className="bg-[#0a0a0a] text-white pt-[110px] sm:pt-[130px] pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              className="flex items-center gap-2 text-xs text-white/50"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ArrowRight size={11} />
              <span className="text-white">{loc.name}</span>
            </nav>

            <p className="eyebrow !text-white/60 mt-8 flex items-center gap-2">
              <MapPin size={13} />
              {loc.kind === "area"
                ? `${loc.name} · ${loc.districtName} District`
                : `${loc.name} District · Tamil Nadu`}
            </p>

            <h1 className="display mt-5 text-5xl sm:text-7xl md:text-8xl max-w-4xl">
              Fencing Contractor
              <br />
              <span className="italic font-normal text-white/60">
                in {loc.name}.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              {highlight} Navi Fencing supplies and installs chain link, barbed
              wire, concertina coil, razor wire and welded mesh fencing across{" "}
              {loc.name} — free site consultation, expert installation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={16} /> Free WhatsApp Quote
              </a>
              <a
                href={`tel:${company.phones[0]}`}
                className="btn bg-white text-[#1d1d1f] hover:bg-white/90"
              >
                <Phone size={16} /> {company.displayPhones[0]}
              </a>
              <Link
                href="/products"
                className="btn border border-white/20 text-white hover:bg-white/10"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image strip */}
            <div className="mt-14 grid grid-cols-3 gap-4">
              {heroImages.map((img, i) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#161616]"
                >
                  <Image
                    src={`/gallery/${img}`}
                    alt={`Fencing work in ${loc.name} — Navi Fencing project ${i + 1}`}
                    fill
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-cover"
                    sizes="(max-width:768px) 33vw, 300px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">Why Navi Fencing in {loc.name}</p>
                <h2 className="display mt-5 text-4xl sm:text-6xl text-[#1d1d1f]">
                  Local site visits.
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    Tamil Nadu-wide supply.
                  </span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-lg text-[#515154] leading-relaxed">
                  From compound walls to farm boundaries, we&apos;ve supplied
                  and installed fencing for residential, commercial and
                  industrial sites in {loc.name}
                  {loc.kind === "area"
                    ? ` and across ${loc.districtName} district`
                    : " and every town in the district"}
                  . Free measurement, a clear quote and expert installation —
                  usually within 24–48 hours of your call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#f5f5f7] py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl">
              <p className="eyebrow">Services in {loc.name}</p>
              <h2 className="display mt-5 text-4xl sm:text-6xl text-[#1d1d1f]">
                What we do here.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceTemplates.map((s) => (
                <article
                  key={s.title}
                  className="card-soft card-hover bg-white p-8 min-h-[240px] flex flex-col justify-between"
                >
                  <s.icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#1d1d1f]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[#515154] text-sm leading-relaxed">
                      {s.descFor(loc.name)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Products used here */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="eyebrow">Popular in {loc.name}</p>
                <h2 className="display mt-4 text-4xl sm:text-5xl text-[#1d1d1f]">
                  Fencing materials.
                </h2>
              </div>
              <Link
                href="/products"
                className="link-arrow !text-sm hidden sm:inline-flex"
              >
                All products <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group card-soft card-hover bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} in ${loc.name}`}
                      fill
                      loading="lazy"
                      className="object-cover image-zoom"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#86868b]">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#515154] line-clamp-2">
                      {p.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        {nearby.length > 0 && (
          <section className="bg-[#f5f5f7] py-16 border-t border-[#e5e5ea]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <p className="eyebrow">Nearby</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl text-[#1d1d1f]">
                {loc.kind === "area"
                  ? `Also serving ${loc.districtName} district.`
                  : `Also serving areas near ${loc.name}.`}
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="text-sm bg-white border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other districts across TN */}
        <section className="bg-white py-16 border-t border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Across Tamil Nadu</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl text-[#1d1d1f]">
              Other districts we serve.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {otherDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/${d.slug}`}
                  className="text-sm bg-[#f5f5f7] border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                >
                  {d.name}
                </Link>
              ))}
              <Link
                href="/locations"
                className="text-sm border border-[#1d1d1f] rounded-full px-4 py-2 text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
              >
                View all districts{" "}
                <ArrowRight size={12} className="inline ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — AEO: answer-first Q&A backed by FAQPage schema above */}
        <FaqSection
          faqs={faqs}
          eyebrow={`FAQ — ${loc.name}`}
          title={
            <>
              Common questions
              <br />
              <span className="italic font-normal text-[#86868b]">
                about fencing in {loc.name}.
              </span>
            </>
          }
        />

        {/* CTA */}
        <section className="bg-[#0a0a0a] text-white py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <p className="eyebrow !text-white/60">Free consultation</p>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              Get a fencing quote
              <br />
              <span className="italic font-normal text-white/60">
                for {loc.name}, today.
              </span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-[#1d1d1f] hover:bg-white/90"
              >
                Contact Page <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
