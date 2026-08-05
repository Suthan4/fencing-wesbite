import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { company, faqJsonLd, siteUrl, whatsappUrl } from "@/lib/site";
import {
  services,
  getService,
  relatedServices,
  serviceLocationJsonLd,
  serviceLocationFaqs,
} from "@/lib/services";
import {
  getLocation,
  getDistricts,
  getNearbyLocations,
  getDistrictHighlight,
} from "@/lib/locations";
import { FaqSection } from "@/components/FaqSection";

type Props = { params: Promise<{ slug: string; location: string }> };

// Pre-render every service x district combo at build time (45 x 38 ≈
// 1,710 pages) — these are the highest-value, highest-search-volume
// combos. Service x area combos (45 x 174 ≈ 7,830) are NOT pre-rendered
// here to keep build time sane; dynamicParams stays enabled below so
// those still render (and get cached) the first time they're requested —
// e.g. when Googlebot crawls them from the sitemap, or a visitor lands
// on one from search/WhatsApp.
export async function generateStaticParams() {
  const districts = getDistricts();
  const params: { slug: string; location: string }[] = [];
  for (const s of services) {
    for (const loc of districts) {
      params.push({ slug: s.slug, location: loc.slug });
    }
  }
  return params;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: serviceSlug, location: locationSlug } = await params;
  const service = getService(serviceSlug);
  const location = getLocation(locationSlug);
  if (!service || !location) return { title: "Not found" };

  const title = `${service.title} in ${location.name} | Navi Fencing`;
  const description = `${service.blurb} ${company.name} supplies and installs ${service.title.toLowerCase()} in ${location.name}${location.kind === "area" ? `, ${location.districtName} district` : ""} — free site visit, expert crew.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}/${location.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { slug: serviceSlug, location: locationSlug } = await params;
  const service = getService(serviceSlug);
  const location = getLocation(locationSlug);
  if (!service || !location) notFound();

  const related = relatedServices(service.slug, 3);
  const nearby = getNearbyLocations(location.slug, 6);
  const highlight = getDistrictHighlight(location.districtSlug);
  const faqs = serviceLocationFaqs(service, location);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: location.name,
        item: `${siteUrl}/services/${service.slug}/${location.slug}`,
      },
    ],
  };

  const enquireMsg = `Hi Navi Fencing, I'd like a quote for ${service.title} in ${location.name}. Please share rates and availability.`;

  const highlights = [
    "Free on-site measurement and consultation",
    `Material supply and expert installation in ${location.name}`,
    "Usually completed within a few days of the site visit",
    "Tamil Nadu-wide crews, single point of contact",
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceLocationJsonLd(service, location),
          breadcrumbJsonLd,
          faqJsonLd(faqs),
        ]}
      />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        <section className="bg-white pt-[100px] sm:pt-[120px] pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              className="flex flex-wrap items-center gap-2 text-xs text-[#86868b]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#1d1d1f]">
                Home
              </Link>
              <ArrowRight size={11} />
              <Link href="/services" className="hover:text-[#1d1d1f]">
                Services
              </Link>
              <ArrowRight size={11} />
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-[#1d1d1f]"
              >
                {service.title}
              </Link>
              <ArrowRight size={11} />
              <span className="text-[#1d1d1f]">{location.name}</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-7" data-reveal>
                <p className="eyebrow flex items-center gap-2">
                  <MapPin size={13} />
                  {location.kind === "area"
                    ? `${location.name} · ${location.districtName} District`
                    : `${location.name} District · Tamil Nadu`}
                </p>
                <h1 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                  {service.title}
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    in {location.name}.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-[#515154] leading-relaxed">
                  {highlight} {service.blurb} {company.name} supplies and
                  installs it across {location.name} and every district of Tamil
                  Nadu.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl(enquireMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa"
                  >
                    <MessageCircle size={15} /> WhatsApp Enquiry
                  </a>
                  <a
                    href={`tel:${company.phones[0]}`}
                    className="btn btn-primary"
                  >
                    <Phone size={14} /> Call us
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:pt-4" data-reveal>
                <p className="eyebrow">What&apos;s included</p>
                <ul className="mt-6 space-y-3">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[#1d1d1f] card-soft bg-[#f5f5f7] p-4"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#1d1d1f]"
                        strokeWidth={1.7}
                      />
                      <span className="text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas — internal linking + local relevance */}
        {nearby.length > 0 && (
          <section className="bg-[#f5f5f7] py-16 border-t border-[#e5e5ea]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <p className="eyebrow">Also serving</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl text-[#1d1d1f]">
                {service.title} near {location.name}.
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/services/${service.slug}/${n.slug}`}
                    className="text-sm bg-white border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ — AEO: answer-first Q&A backed by FAQPage schema above */}
        <FaqSection
          faqs={faqs}
          eyebrow={`FAQ — ${service.title} in ${location.name}`}
          title={
            <>
              {service.title} in {location.name} —{" "}
              <span className="italic font-normal text-[#86868b]">
                common questions.
              </span>
            </>
          }
        />

        {/* Quote CTA */}
        <section className="bg-white py-24">
          <div
            className="mx-auto max-w-5xl px-5 sm:px-8 text-center"
            data-reveal
          >
            <p className="eyebrow">Free consultation</p>
            <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
              Get a quote
              <br />
              <span className="italic font-normal text-[#86868b]">
                for {location.name}.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#515154] max-w-xl mx-auto">
              Share your site details in {location.name} and we&apos;ll come
              back with a clear quote — usually the same day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <Link href="/contact" className="btn btn-primary">
                Contact Page <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Related services, same location */}
        {related.length > 0 && (
          <section className="bg-[#f5f5f7] py-24 border-t border-[#e5e5ea]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mb-12 flex items-end justify-between" data-reveal>
                <div>
                  <p className="eyebrow">More in {location.name}</p>
                  <h2 className="display mt-3 text-4xl sm:text-5xl text-[#1d1d1f]">
                    Related services.
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="link-arrow !text-sm hidden sm:inline-flex"
                >
                  All services <ArrowRight size={14} />
                </Link>
              </div>
              <div
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                data-stagger
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}/${location.slug}`}
                    data-stagger-item
                    className="group card-soft card-hover bg-white p-7 flex flex-col gap-4"
                  >
                    <span className="text-2xl">{r.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                        {r.title} in {location.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#515154] leading-relaxed line-clamp-2">
                        {r.blurb}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="bg-white py-10 border-t border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href={`/services/${service.slug}`}
              className="link-arrow !text-sm"
            >
              <ArrowLeft size={14} /> Back to {service.title}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
