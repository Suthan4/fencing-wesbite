import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  pageUrl,
  services,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fence Services",
  description:
    "Explore residential fence installation, commercial fencing, fence repair, and custom gate services from Navi Fencing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Fence Services | Navi Fencing",
    description:
      "Residential, commercial, repair, replacement, and gate services built for privacy, security, and curb appeal.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fence Services", path: "/services" },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="bg-[#f8faf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Fence services
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.98] text-[#172118] sm:text-6xl">
                Search-ready fencing pages for every high-intent customer.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52604c]">
                Each service page targets a real buyer intent: privacy fence
                installation, commercial security, damaged fence repair, and
                custom gate access.
              </p>
            </div>
            <VisualPanel label="Services" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 md:grid-cols-2 lg:px-10">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-7"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f8f2f]">
                  {service.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-[#172118]">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-[#52604c]">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex font-bold text-[#314a26] underline"
                >
                  Learn about {service.navTitle.toLowerCase()} fencing
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#314a26] py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <h2 className="max-w-4xl font-serif text-4xl font-semibold">
              Built for Google, written for people, and structured for strong
              local conversion.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Every route has a canonical URL, service-specific metadata, clear
              headings, useful FAQs, internal links, and schema markup.
            </p>
            <p className="mt-5 text-sm text-white/60">{pageUrl("/services")}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
