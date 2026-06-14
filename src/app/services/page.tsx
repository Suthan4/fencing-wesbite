import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GsapAnimations } from "@/components/GsapAnimations";
import { VisualPanel } from "@/components/VisualPanel";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  services,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fencing Services in Chennai & Tamil Nadu",
  description:
    "Explore residential fence installation, commercial fencing, fence repair, and custom gate services from Navi Fencing across Chennai and Tamil Nadu.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Fencing Services | Navi Fencing Chennai",
    description:
      "Residential, commercial, repair, and gate fencing services across Tamil Nadu.",
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
            { name: "Services", path: "/services" },
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
                <span className="eyebrow">Fencing services</span>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                  Every fencing need,
                  <br />
                  <span className="text-gradient">one call away.</span>
                </h1>
                <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                  From residential compound fences to industrial security
                  perimeters, Navi Fencing installs and repairs across Tamil
                  Nadu.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get a Quote
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
              <VisualPanel label="Services" tone="dark" />
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-stagger-parent className="grid sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <article
                  key={service.slug}
                  data-stagger-child
                  className="group rounded-2xl border border-[#e8e8e2] bg-[#f5f5f0] p-8 card-hover"
                >
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d] bg-[#a8e63d]/10 px-3 py-1 rounded-full">
                    {service.eyebrow}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-[#080c08] leading-snug">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm text-[#6a7d62] leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1a3a12] hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
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
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold max-w-xl">
              Serving Chennai and all of Tamil Nadu. Get a free estimate.
            </h2>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
