import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { company, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Navi Fencing, Chennai",
  description:
    "Navi Fencing is a Chennai-based fencing contractor serving Tamil Nadu with reliable craftsmanship, modern techniques and quality materials.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    t: "Craft over shortcuts",
    d: "Every post set, every wire tensioned. We don't cut corners on alignment, finish or hardware.",
  },
  {
    t: "Honest recommendations",
    d: "We suggest what fits your site, budget and climate — not what's most profitable for us.",
  },
  {
    t: "Local, accountable",
    d: "Based in Chennai, serving all of Tamil Nadu. We're around when you need us — before and after the install.",
  },
  {
    t: "Long-term thinking",
    d: "Materials chosen for durability against coastal salt, monsoons and heavy use.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <main>
        {/* Hero */}
        <section className="bg-white pt-[120px] pb-20 sm:pt-[160px] sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow" data-reveal>
              About Navi Fencing
            </p>
            <h1
              className="display mt-6 text-6xl sm:text-8xl md:text-[9rem] text-[#1d1d1f] max-w-5xl"
              data-reveal
            >
              Safe spaces.
              <br />
              <span className="italic font-normal text-[#86868b]">
                Made with care.
              </span>
            </h1>
            <p
              className="mt-10 max-w-2xl text-xl text-[#515154] leading-relaxed"
              data-reveal
            >
              Welcome to Navi Fencing — your trusted partner for strong, stylish
              and secure fencing solutions across Chennai and Tamil Nadu.
            </p>
          </div>
        </section>

        {/* Image + Mission */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1600&q=85"
                alt="Modern fenced property"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
            <div className="lg:col-span-5" data-reveal>
              <p className="eyebrow">Our mission</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl text-[#1d1d1f]">
                Create safe, private and beautiful spaces.
              </h2>
              <p className="mt-6 text-[#515154] leading-relaxed">
                With reliable craftsmanship and modern techniques, we deliver
                fencing solutions that last for years. We specialise in
                Residential &amp; Commercial Fencing, Privacy &amp; Security
                Fencing, Modern &amp; Durable Designs, and Expert Installation
                with Quality Materials.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="btn btn-primary">
                  See Products <ArrowRight size={14} />
                </Link>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="bg-[#f5f5f7] py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl" data-reveal>
              <p className="eyebrow">What we stand for</p>
              <h2 className="display mt-4 text-5xl sm:text-7xl text-[#1d1d1f]">
                Four things,
                <br />
                <span className="italic font-normal text-[#86868b]">
                  always.
                </span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2" data-stagger>
              {values.map((v, i) => (
                <article
                  key={v.t}
                  data-stagger-item
                  className="bg-white rounded-3xl p-10 min-h-[240px] flex flex-col justify-between"
                >
                  <span className="text-xs font-semibold tracking-[0.22em] text-[#86868b]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
                      {v.t}
                    </h3>
                    <p className="mt-3 text-[#515154] leading-relaxed">{v.d}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <p className="eyebrow">Where we work</p>
              <h2 className="display mt-4 text-5xl sm:text-7xl text-[#1d1d1f]">
                Based in Chennai.
                <br />
                <span className="italic font-normal text-[#86868b]">
                  Serving Tamil Nadu.
                </span>
              </h2>
              <p className="mt-6 text-[#515154] leading-relaxed max-w-lg">
                From the city centre out to the farthest districts, we travel
                where the work is. Site visits typically within 24–48 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phones[0]}`}
                  className="btn btn-primary"
                >
                  Call {company.displayPhones[0]}
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div
              className="relative aspect-square rounded-3xl overflow-hidden bg-[#f5f5f7]"
              data-reveal
            >
              <Image
                src="https://images.unsplash.com/photo-1651372152626-401714d6b371?w=1400&q=85"
                alt="Fence detail"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
