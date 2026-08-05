import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { company, whatsappUrl, siteUrl } from "@/lib/site";
import {
  services,
  serviceCategories,
  servicesByCategory,
} from "@/lib/services";
import { getCurrentLocation } from "@/lib/get-location";

export async function generateMetadata(): Promise<Metadata> {
  const location = await getCurrentLocation();
  const title = `Fencing Services in ${location.name} | Navi Fencing`;
  const description = `${services.length}+ fencing services in ${location.name} — chain link, barbed wire, gates, farm & compound fencing, repair and maintenance. Free site visit.`;
  return {
    title,
    description,
    alternates: { canonical: "/services" },
    openGraph: {
      title,
      description,
      url: "/services",
      type: "website",
    },
  };
}

export default async function ServicesPage() {
  const location = await getCurrentLocation();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${siteUrl}/services/${s.slug}`,
    })),
  };

  const enquireMsg = `Hi Navi Fencing, I'd like a free consultation and quote for fencing services in ${location.name}.`;

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        <section className="bg-white pt-[120px] pb-20 sm:pt-[160px] sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow" data-reveal>
              Services · {location.name}
            </p>
            <h1
              className="display mt-6 text-6xl sm:text-8xl md:text-[9rem] text-[#1d1d1f]"
              data-reveal
            >
              Every fencing
              <br />
              <span className="italic font-normal text-[#86868b]">
                service you need,
              </span>
              <br />
              in {location.name}.
            </h1>
            <p
              className="mt-8 max-w-2xl text-lg text-[#515154] leading-relaxed"
              data-reveal
            >
              From wire and mesh fencing to gates, farm boundaries and repairs —{" "}
              {company.name} supplies, installs and maintains fencing across{" "}
              {location.name} and every district of Tamil Nadu. Free site visit,
              clear quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <a
                href={whatsappUrl(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={16} /> Free WhatsApp Quote
              </a>
              <Link href="/contact" className="btn btn-primary">
                Contact Page <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services by category */}
        {serviceCategories.map((category) => {
          const items = servicesByCategory(category);
          if (items.length === 0) return null;
          return (
            <section
              key={category}
              className="bg-[#f5f5f7] py-16 border-t border-[#e5e5ea] odd:bg-white"
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mb-10 max-w-2xl" data-reveal>
                  <p className="eyebrow">{category}</p>
                  <h2 className="display mt-4 text-3xl sm:text-5xl text-[#1d1d1f]">
                    {category}.
                  </h2>
                </div>
                <div
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  data-stagger
                >
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      data-stagger-item
                      className="group card-soft card-hover bg-white p-7 flex flex-col gap-4"
                    >
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#515154] leading-relaxed line-clamp-2">
                          {s.blurb}
                        </p>
                      </div>
                      <span className="link-arrow !text-xs mt-auto">
                        Learn more <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-[#0a0a0a] text-white py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            <p className="eyebrow !text-white/60">Free consultation</p>
            <h2 className="display mt-5 text-4xl sm:text-6xl">
              Not sure which service
              <br />
              <span className="italic font-normal text-white/60">
                you need?
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
              Tell us about your site in {location.name} and we&apos;ll
              recommend the right fencing type and gate options — free of cost.
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
