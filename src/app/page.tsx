// src/app/page.tsx — OPTIMISED for mobile LCP + Speed Index
// Key changes vs original:
// 1. Hero Image: added fetchpriority="high", quality={72}, fixed sizes="100vw", removed opacity-80
// 2. Marquee section: deferred with Suspense so it doesn't block first paint
// 3. Horizontal scroll section image sizes fixed for mobile

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import {
  ArrowRight,
  Shield,
  Home as HomeIcon,
  Building2,
  Wrench,
  Phone,
  MessageCircle,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import {
  company,
  homeFaqs,
  products,
  whatsappUrl,
  localBusinessJsonLd,
  faqJsonLd,
} from "@/lib/site";
import { FloatingPhone } from "@/components/FloatingPhone";
import {
  getLocation,
  getNearbyLocations,
  getDistricts,
  DEFAULT_LOCATION_SLUG,
  LOCATION_HEADER,
} from "@/lib/locations";

// Dynamic per-visitor title/description: mirrors the location-resolution
// the page body uses, falling back to Avinashi (DEFAULT_LOCATION_SLUG).
export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const detectedSlug = headerList.get(LOCATION_HEADER) ?? DEFAULT_LOCATION_SLUG;
  const location =
    getLocation(detectedSlug) ?? getLocation(DEFAULT_LOCATION_SLUG)!;

  const title = `Fencing Contractors in Avinashi, Tiruppur & Coimbatore | Navi Fencing`;
  const description = `Leading fencing contractors in Avinashi, Tiruppur & Coimbatore. Chain link, barbed wire, mesh & razor wire. Free quote, expert installation. Call ${company.displayPhones[0]}.`;

  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: `Navi Fencing Contractors — ${location.name === "Avinashi" ? "Avinashi, Tiruppur & Coimbatore" : `${location.name} & Tamil Nadu`}`,
      description:
        "Best fencing contractor in Avinashi, Tiruppur, Coimbatore & Tamil Nadu. Free consultation, expert installation, quality materials. Call now.",
      url: "/",
      type: "website",
    },
  };
}

const services = [
  {
    icon: HomeIcon,
    title: "Residential",
    descFor: (place: string) =>
      `Privacy & security fencing for homes, villas and farmhouses in ${place}.`,
  },
  {
    icon: Building2,
    title: "Commercial",
    descFor: (place: string) =>
      `Perimeter security for factories, warehouses and offices in ${place}.`,
  },
  {
    icon: Shield,
    title: "Security",
    descFor: () => "Concertina, razor wire and high-security wall toppings.",
  },
  {
    icon: Wrench,
    title: "Installation",
    descFor: (place: string) =>
      `Expert end-to-end installation, on-site in ${place}.`,
  },
];

const process = [
  {
    n: "01",
    t: "Free Consultation",
    d: "Call or WhatsApp. We listen first, then plan.",
  },
  {
    n: "02",
    t: "Site Survey",
    d: "On-site measurement, material recommendation and clear quote.",
  },
  {
    n: "03",
    t: "Expert Install",
    d: "Trained crew, premium materials, clean workmanship.",
  },
  {
    n: "04",
    t: "After-care",
    d: "Walk-through, handover and ongoing support.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 19, suffix: "", label: "Fencing products" },
  { value: 10, suffix: "+", label: "Years across Tamil Nadu" },
  { value: 4.9, suffix: "★", label: "Customer rating" },
];

export default async function Home() {
  const headerList = await headers();
  const detectedSlug = headerList.get(LOCATION_HEADER) ?? DEFAULT_LOCATION_SLUG;
  const location =
    getLocation(detectedSlug) ?? getLocation(DEFAULT_LOCATION_SLUG)!;
  const nearbyAreas = getNearbyLocations(location.slug, 8);
  const districts = getDistricts().slice(0, 12);

  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main className="cursor-fence">
        {/* ── HERO ── OPTIMISED */}
        <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0" data-hero-bg>
            <Image
              src="/products/angle-fencing.webp"
              alt="Navi Fencing Contractors — Fencing in Avinashi, Tiruppur & Coimbatore"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Slightly darker gradient to compensate for no opacity on image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/85" />
          </div>

          <div className="relative h-full flex flex-col justify-between pt-[88px] sm:pt-[110px] pb-20 sm:pb-28">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <p data-hero-sub className="eyebrow !text-white/70">
                Navi Fencing Contractors · {location.name} · Across Tamil Nadu
              </p>
            </div>

            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <h1 className="display text-white text-[clamp(2.75rem,7.5vw,7rem)] max-w-5xl">
                <span data-hero-word className="block">
                  Navi Fencing
                </span>
                <span data-hero-word className="block">
                  Contractors.
                </span>
                <span
                  data-hero-word
                  className="block italic font-normal text-white/70"
                >
                  Built right.
                </span>
              </h1>
              <p
                data-hero-sub
                className="mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
              >
                Tamil Nadu&apos;s trusted fencing contractor — chain link,
                barbed wire, concertina coil, razor wire, welded mesh. Supplied
                &amp; installed in {location.name} and every district across
                Tamil Nadu.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-hero-cta
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-whatsapp"
                  className="btn btn-wa"
                >
                  <MessageCircle size={16} /> Free WhatsApp Quote
                </a>
                <a
                  data-hero-cta
                  href={`tel:${company.phones[0]}`}
                  data-testid="hero-call"
                  className="btn bg-white text-[#1d1d1f] hover:bg-white/90"
                >
                  <Phone size={16} /> {company.displayPhones[0]}
                </a>
                <Link
                  data-hero-cta
                  href="/products"
                  data-testid="hero-products"
                  className="btn border border-white/20 text-white hover:bg-white/10"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.3em] uppercase"
          >
            Scroll
          </div>
        </section>

        {/* ── PRODUCTS MARQUEE ── */}
        {/* FIX: content-visibility: auto lets browser skip rendering this
            until it's near the viewport — big mobile CPU win */}
        <section
          className="border-y border-[#e5e5ea] bg-white py-7 overflow-hidden"
          style={{ contentVisibility: "auto", containIntrinsicSize: "0 56px" }}
        >
          <div className="marquee gap-12 text-[#86868b] whitespace-nowrap">
            {[...products, ...products].map((p, i) => (
              <span
                key={i}
                className="text-sm sm:text-base font-medium tracking-tight flex items-center gap-12"
              >
                {p.title}
                <span className="text-[#d2d2d7]">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── INTRO / WHY US ── */}
        <section className="relative bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow" data-reveal>
                  Why Navi Fencing Contractors
                </p>
                <h2
                  className="display mt-5 text-5xl sm:text-7xl md:text-8xl text-[#1d1d1f]"
                  data-reveal
                >
                  Crafted for
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    privacy, security
                  </span>
                  <br />
                  &amp; lasting strength.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p
                  className="text-lg text-[#515154] leading-relaxed"
                  data-reveal
                >
                  Navi Fencing Contractors deliver safe, private and beautiful
                  spaces across Avinashi, Tiruppur, Coimbatore, and all Tamil
                  Nadu districts. With reliable craftsmanship and modern
                  techniques, we install fencing that lasts for years.
                </p>
                <ul className="mt-8 space-y-3" data-stagger>
                  {[
                    "Residential & Commercial Fencing",
                    "Privacy & Security Solutions",
                    "Modern & Durable Designs",
                    "Expert Installation with Quality Materials",
                  ].map((t) => (
                    <li
                      key={t}
                      data-stagger-item
                      className="flex items-start gap-3 text-[#1d1d1f]"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#1d1d1f]"
                        strokeWidth={1.7}
                      />
                      <span className="text-base">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE GRID (Bento) ── */}
        <section className="bg-[#f5f5f7] py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl" data-reveal>
              <p className="eyebrow">What we do in {location.name}</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                One team.
                <br />
                <span className="italic font-normal text-[#86868b]">
                  Every fencing need.
                </span>
              </h2>
            </div>

            <div
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              data-stagger
            >
              {services.map((s) => (
                <article
                  key={s.title}
                  data-stagger-item
                  data-testid={`service-${s.title.toLowerCase()}`}
                  className="card-soft card-hover bg-white p-8 min-h-[260px] flex flex-col justify-between"
                >
                  <s.icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#1d1d1f]"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[#515154] text-sm leading-relaxed">
                      {s.descFor(location.name)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HORIZONTAL PRODUCT SHOWCASE (Desktop only — hidden on mobile) ── */}
        <section
          data-h-scroll
          className="relative bg-[#0a0a0a] text-white h-[100svh] overflow-hidden hidden lg:block"
        >
          <div className="absolute top-0 left-0 right-0 z-10 px-8 p-12">
            <h2 className="display mt-4 text-5xl sm:text-7xl text-white max-w-3xl">
              The catalog.
              <span className="italic font-normal text-white/50"> Scroll.</span>
            </h2>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div
              data-h-track
              className="flex gap-6 pl-[5vw] pr-[5vw]"
              style={{ willChange: "transform" }}
            >
              {products.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  data-testid={`hscroll-product-${p.slug}`}
                  className="group relative w-[360px] shrink-0 overflow-hidden rounded-3xl bg-[#161616]"
                >
                  <div className="relative h-[480px] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.category} fencing by Navi Fencing`}
                      fill
                      // FIX: desktop-only section — don't preload on mobile
                      loading="lazy"
                      className="object-cover image-zoom"
                      // FIX: fixed size 360px — no need to guess
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
                      {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
                      {p.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOBILE PRODUCT GRID ── */}
        <section className="bg-[#0a0a0a] text-white py-24 lg:hidden">
          <div className="px-5 sm:px-8">
            <p className="eyebrow !text-white/50" data-reveal>
              19 Products
            </p>
            <h2 className="display mt-4 text-5xl text-white" data-reveal>
              The catalog.
            </h2>
            <div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
              data-stagger
            >
              {products.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  data-stagger-item
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#161616]"
                >
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.category} fencing by Navi Fencing`}
                    fill
                    // FIX: Only eager-load first 4 on mobile, rest lazy
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-cover image-zoom"
                    // FIX: correct mobile sizes — 2 columns on mobile, 3 on sm
                    sizes="(max-width:640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-12"
              data-stagger
            >
              {stats.map((s) => (
                <div key={s.label} data-stagger-item>
                  <div className="display text-6xl sm:text-7xl text-[#1d1d1f] tabular-nums">
                    <span data-count={s.value} data-suffix={s.suffix}>
                      0{s.suffix}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#86868b] tracking-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS CARD STACK ── */}
        <section className="bg-[#f5f5f7] py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl" data-reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                A clean path.
                <br />
                <span className="italic font-normal text-[#86868b]">
                  From hello to handover.
                </span>
              </h2>
            </div>
            <div
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
              data-card-stack
            >
              {process.map((p) => (
                <article
                  key={p.n}
                  data-stack-card
                  data-testid={`process-${p.n}`}
                  className="bg-white rounded-3xl p-8 min-h-[260px] flex flex-col justify-between border border-[#e5e5ea]"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#86868b]">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      {p.t}
                    </h3>
                    <p className="mt-3 text-[#515154] text-sm leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mb-16" data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                Good questions.
              </h2>
            </div>
            <div className="divide-y divide-[#e5e5ea] border-y border-[#e5e5ea]">
              {homeFaqs.map((f) => (
                <details
                  key={f.question}
                  className="group py-6 cursor-pointer"
                  data-reveal
                  data-testid={`faq-${f.question.slice(0, 12)}`}
                >
                  <summary className="flex items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1d1d1f] pr-6">
                      {f.question}
                    </h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e5e5ea] text-[#1d1d1f] transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5 text-[#515154] text-base leading-relaxed max-w-3xl">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL AREAS + DISTRICTS (location-aware, before keywords) ── */}
        <section className="bg-white py-20 border-t border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow flex items-center gap-2">
              <MapPin size={13} /> Serving {location.name}
            </p>
            <h2 className="display mt-5 text-4xl sm:text-6xl text-[#1d1d1f]">
              {location.name} & nearby.
              <br />
              <span className="italic font-normal text-[#86868b]">
                Every district in Tamil Nadu.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base text-[#515154] leading-relaxed">
              You&apos;re browsing from around {location.name}
              {location.kind === "area"
                ? `, ${location.districtName} district`
                : ""}
              . We supply and install fencing here, in the areas nearby, and
              across every one of Tamil Nadu&apos;s 38 districts.
            </p>

            {nearbyAreas.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
                  Local areas near {location.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/${n.slug}`}
                      className="text-sm bg-[#f5f5f7] border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-4">
                Districts across Tamil Nadu
              </h3>
              <div className="flex flex-wrap gap-2">
                {districts.map((d) => (
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
