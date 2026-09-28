import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
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
  serviceJsonLd,
  serviceFaqs,
} from "@/lib/services";
import { getCurrentLocation } from "@/lib/get-location";
import { FaqSection } from "@/components/FaqSection";
import { getDistricts } from "@/lib/locations";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Metadata is built per-request (not statically cached) so the title and
// description reflect the visitor's auto-detected location — set by
// middleware.ts off Vercel's geo headers, or the nf_loc cookie on repeat
// visits, falling back to Avinashi. This mirrors the pattern used on
// /products/[slug] and /[location].
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  const location = await getCurrentLocation();

  const title = `${service.title} in ${location.name} | Navi Fencing`;
  const description = `${service.blurb} ${company.name} supplies and installs ${service.title.toLowerCase()} in ${location.name} — free site visit, expert crew.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const location = await getCurrentLocation();
  const related = relatedServices(service.slug, 3);
  const faqs = serviceFaqs(service, location);

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
    ],
  };

  const enquireMsg = `Hi Navi Fencing, I'd like a quote for ${service.title} in ${location.name}. Please share rates and availability.`;

  const highlights = [
    "Free on-site measurement and consultation",
    `Material supply and expert installation in ${location.name}`,
    "Usually completed within 24–48 hours of your call",
    "Tamil Nadu-wide crews, single point of contact",
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service, location),
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
              className="flex items-center gap-2 text-xs text-[#86868b]"
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
              <span className="text-[#1d1d1f]">{service.title}</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-7" data-reveal>
                <p className="eyebrow flex items-center gap-2">
                  <span className="text-lg">{service.icon}</span>
                  {service.category}
                </p>
                <h1 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                  {service.title}
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    in {location.name}.
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-[#515154] leading-relaxed">
                  {service.blurb} {company.name} supplies and installs it across{" "}
                  {location.name} and every district of Tamil Nadu.
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

        {/* Location links — entry point into /services/[slug]/[location] */}
        <section className="bg-[#f5f5f7] py-16 border-t border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Available across Tamil Nadu</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl text-[#1d1d1f]">
              {service.title} by district.
            </h2>
            <p className="mt-4 max-w-2xl text-[#515154]">
              Pick your district for local pricing context and nearby areas we
              cover.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {getDistricts().map((d) => (
                <Link
                  key={d.slug}
                  href={`/services/${service.slug}/${d.slug}`}
                  className="text-sm bg-white border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — AEO: answer-first Q&A backed by FAQPage schema above */}
        <FaqSection
          faqs={faqs}
          eyebrow={`FAQ — ${service.title}`}
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
                for {service.title.toLowerCase()}.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#515154] max-w-xl mx-auto">
              Share your site location in {location.name}, approximate length
              and we&apos;ll come back with a clear quote — usually the same
              day.
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

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-[#f5f5f7] py-24 border-t border-[#e5e5ea]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mb-12 flex items-end justify-between" data-reveal>
                <div>
                  <p className="eyebrow">More in {service.category}</p>
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
                    href={`/services/${r.slug}`}
                    data-stagger-item
                    className="group card-soft card-hover bg-white p-7 flex flex-col gap-4"
                  >
                    <span className="text-2xl">{r.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                        {r.title}
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
            <Link href="/services" className="link-arrow !text-sm">
              <ArrowLeft size={14} /> Back to all services
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
