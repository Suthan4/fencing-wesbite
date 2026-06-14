import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GsapAnimations } from "@/components/GsapAnimations";
import { VisualPanel } from "@/components/VisualPanel";
import {
  breadcrumbJsonLd,
  company,
  localBusinessJsonLd,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About Navi Fencing",
  description:
    "Learn about Navi Fencing — Chennai's trusted fencing contractor serving Tamil Nadu with durable, modern fencing solutions and honest expert guidance.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Honest material guidance",
    desc: "We recommend what works for your project and budget — not what costs more.",
  },
  {
    title: "Serving all of Tamil Nadu",
    desc: "Based in Chennai, we take on residential, commercial, and industrial fencing projects across the state.",
  },
  {
    title: "18 products, one supplier",
    desc: "From chain link to concertina coil, cement posts to green mesh — we supply and install.",
  },
  {
    title: "Clean installs",
    desc: "Every project ends with a proper walkthrough and a site left the way we found it.",
  },
];

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
      <GsapAnimations />
      <main>
        <section className="relative bg-[#080c08] pt-[60px] pb-24 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#a8e63d 1px, transparent 1px), linear-gradient(90deg, #a8e63d 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-16">
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
              <div>
                <span className="eyebrow">About {company.name}</span>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                  Fencing built with care,
                  <br />
                  <span className="text-gradient">installed right.</span>
                </h1>
                <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                  Navi Fencing is a Chennai-based fencing contractor serving
                  homeowners, businesses, farms, and industries across Tamil
                  Nadu. We combine quality materials with experienced
                  installation teams to deliver boundaries that last.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Work with us
                  </Link>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <VisualPanel label="About Us" tone="dark" />
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="max-w-xl mb-14">
              <span className="eyebrow text-[#6a7d62]">Our values</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-[#080c08]">
                How we work.
              </h2>
            </div>
            <div data-stagger-parent className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <article
                  key={v.title}
                  data-stagger-child
                  className="rounded-2xl bg-[#f5f5f0] border border-[#e8e8e2] p-8"
                >
                  <div className="h-2 w-8 rounded-full bg-[#a8e63d] mb-6" />
                  <h3 className="text-xl font-bold text-[#080c08] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#6a7d62] leading-relaxed">
                    {v.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1a3a12] py-20 text-white">
          <div
            data-reveal
            className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d] mb-3">
                Get in touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold max-w-xl">
                Start your fencing project today.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
