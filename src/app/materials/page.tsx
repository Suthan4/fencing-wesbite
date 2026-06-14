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
  materials,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Fence Materials Guide – Chain Link, Barbed Wire, Welded Mesh in Chennai",
  description:
    "Compare chain link, barbed wire, welded mesh, and high-security fencing materials for residential, commercial, and industrial use in Tamil Nadu.",
  alternates: { canonical: "/materials" },
  openGraph: {
    title: "Fence Materials | Navi Fencing Chennai",
    description:
      "Material guide for chain link, barbed wire, welded mesh, concertina coil, and security fencing in Tamil Nadu.",
    url: "/materials",
  },
};

export default function MaterialsPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fence Materials", path: "/materials" },
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
                <span className="eyebrow">Fence material guide</span>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                  Right material.
                  <br />
                  <span className="text-gradient">Right fence.</span>
                </h1>
                <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                  Chain link, barbed wire, welded mesh, and high-security
                  fencing. We help you choose the right material for your
                  property and install it right.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get Guidance
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
              <VisualPanel label="Materials" tone="dark" />
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-stagger-parent className="grid sm:grid-cols-2 gap-5">
              {materials.map((material) => (
                <article
                  key={material.slug}
                  data-stagger-child
                  className="group relative rounded-2xl overflow-hidden bg-[#080c08] p-8 min-h-[240px] flex flex-col justify-between card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a12]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]/70">
                      {material.eyebrow}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-white leading-snug">
                      {material.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/50 leading-relaxed">
                      {material.description.slice(0, 110)}…
                    </p>
                  </div>
                  <Link
                    href={`/materials/${material.slug}`}
                    className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#a8e63d] hover:gap-3 transition-all"
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
              Not sure which material to choose? We'll help you decide.
            </h2>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/contact" className="btn-primary">
                Ask an Expert
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
