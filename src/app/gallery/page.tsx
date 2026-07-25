import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { products, whatsappUrl } from "@/lib/site";
import { GalleryImages } from "@/components/GalleryImage";
import { getCurrentLocation } from "@/lib/get-location";

export async function generateMetadata(): Promise<Metadata> {
  const location = await getCurrentLocation();
  return {
    title: `Gallery — Fencing Projects in ${location.name} & Tamil Nadu`,
    description: `Browse Navi Fencing's project gallery — chain link, barbed wire, concertina coil, razor wire, welded mesh and more, installed across ${location.name} and Tamil Nadu.`,
    alternates: { canonical: "/gallery" },
  };
}

export default async function GalleryPage() {
  const location = await getCurrentLocation();
  return (
    <>
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        {/* Hero — two-column full-width layout */}
        <section className="bg-white pt-[80px] pb-16 sm:pt-[120px] sm:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: headline */}
              <div>
                <p className="eyebrow" data-reveal>
                  Our Work
                </p>
                <h1
                  className="display mt-6 text-6xl sm:text-7xl md:text-8xl text-[#1d1d1f]"
                  data-reveal
                >
                  Every fence
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    we've built.
                  </span>
                </h1>
                <p
                  className="mt-6 text-lg text-[#515154] leading-relaxed"
                  data-reveal
                >
                  From residential compound walls to industrial perimeters —
                  every project we've completed across {location.name} and Tamil
                  Nadu.
                </p>
                <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa"
                  >
                    <MessageCircle size={15} /> Get a free quote
                  </a>
                  <Link href="/products" className="btn btn-ghost">
                    Full catalog <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right: stats + feature card */}
              <div className="flex flex-col gap-4" data-reveal>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      num: `${products.length}+`,
                      label: "Products supplied & installed",
                    },
                    { num: "32+", label: "Districts across Tamil Nadu" },
                    { num: "500+", label: "Installations completed" },
                    { num: "1 day", label: "Same-day quote turnaround" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#f5f5f7] rounded-2xl p-5">
                      <p className="text-4xl font-light text-[#1d1d1f] font-serif">
                        {s.num}
                      </p>
                      <p className="mt-1 text-xs text-[#86868b]">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1d1d1f] rounded-2xl p-7 flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[11px] uppercase tracking-widest text-white/70">
                      Free consultation
                    </span>
                  </span>
                  <p className="text-xl text-white font-serif font-normal leading-snug">
                    Honest pricing, no surprises.
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-white/60">
                    {[
                      "Chain link, barbed wire, concertina coil",
                      "Razor wire, welded mesh & more",
                      "Send site photos on WhatsApp for a quote",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 text-[10px]">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real project photos from /public/gallery/ */}
        <GalleryImages />

        {/* Gallery Grid */}
        <section className="bg-[#f5f5f7] py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8" data-stagger>
            {/* First featured card */}
            {products[0] && (
              <Link
                href={`/products/${products[0].slug}`}
                data-stagger-item
                className="group mb-3 block overflow-hidden rounded-2xl bg-white relative"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={products[0].image}
                    alt={products[0].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 bg-gradient-to-t from-black/80 via-black/25 to-transparent">
                    <p className="text-[0.5rem] sm:text-[0.6rem] uppercase tracking-[0.18em] text-white/70 mb-1">
                      {products[0].category}
                    </p>
                    <h2 className="text-sm sm:text-lg font-semibold text-white">
                      {products[0].title}
                    </h2>
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining cards */}
            <div className="columns-2 gap-3 sm:columns-2 lg:columns-3">
              {products.slice(1).map((product, i) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  data-stagger-item
                  className="group mb-3 block break-inside-avoid overflow-hidden rounded-2xl bg-white relative"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      i % 4 === 0
                        ? "aspect-[4/5]"
                        : i % 4 === 1
                          ? "aspect-square"
                          : i % 4 === 2
                            ? "aspect-[3/4]"
                            : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />

                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 bg-gradient-to-t from-black/80 via-black/25 to-transparent">
                      <p className="text-[0.5rem] sm:text-[0.6rem] uppercase tracking-[0.18em] text-white/70 mb-1">
                        {product.category}
                      </p>
                      <h2 className="text-xs sm:text-lg font-semibold text-white leading-tight">
                        {product.title}
                      </h2>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white text-[#1d1d1f]">
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Count strip */}
        <section className="bg-white border-y border-[#e5e5ea] py-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="display text-5xl sm:text-6xl text-[#1d1d1f]">
                {products.length}
                <span className="italic font-normal text-[#86868b]">
                  {" "}
                  products.
                </span>
              </p>
              <p className="mt-2 text-sm text-[#86868b]">
                Supplied &amp; installed across all Tamil Nadu districts.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={15} /> Get a free quote
              </a>
              <Link href="/products" className="btn btn-ghost">
                Full catalog <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f5f5f7] py-32">
          <div
            className="mx-auto max-w-5xl px-5 sm:px-8 text-center"
            data-reveal
          >
            <p className="eyebrow">Let's build yours</p>
            <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
              Like what you see?
              <br />
              <span className="italic font-normal text-[#86868b]">
                We'll do it for you.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#515154] max-w-xl mx-auto leading-relaxed">
              Send us your site photos on WhatsApp and get a same-day quote.
              Free consultation, honest pricing.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl()}
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
      </main>

      <SiteFooter />
    </>
  );
}
