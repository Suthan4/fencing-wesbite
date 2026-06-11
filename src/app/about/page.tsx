import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import { breadcrumbJsonLd, company, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Navi Fencing, a detail-focused fencing company built around clean installs, durable materials, and clear communication.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="bg-[#f8faf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                About {company.name}
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.98] text-[#172118] sm:text-6xl">
                Fencing built with clean planning, strong lines, and honest
                guidance.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52604c]">
                Navi Fencing is designed around the work customers value:
                practical recommendations, durable materials, clear estimates,
                and installation details that make the finished property feel
                complete.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex h-12 items-center rounded-md bg-[#314a26] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Request a quote
              </Link>
            </div>
            <VisualPanel label="About" />
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 md:grid-cols-3 lg:px-10">
            {[
              "Material guidance without confusing upsells.",
              "SEO-first content that explains services clearly.",
              "Aesthetic pages with strong headings and local trust signals.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-7"
              >
                <p className="text-lg font-bold leading-8 text-[#172118]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
