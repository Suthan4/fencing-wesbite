import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { products, productCategories, whatsappUrl, siteUrl } from "@/lib/site";
import { FloatingPhone } from "@/components/FloatingPhone";

export const metadata: Metadata = {
  title: "Products — Fencing Materials, Wire, Mesh, Posts",
  description:
    "Browse Navi Fencing's full product range: chain link, twisted chain link, PVC chainlink, barbed wire, concertina coil, razor wire, welded mesh, green mesh, steel, angles, cement posts and more.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${siteUrl}/products/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        <section className="bg-white pt-[120px] pb-20 sm:pt-[160px] sm:pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow" data-reveal>
              Catalog · 19 products
            </p>
            <h1
              className="display mt-6 text-6xl sm:text-8xl md:text-[10rem] text-[#1d1d1f]"
              data-reveal
            >
              Every fence,
              <br />
              <span className="italic font-normal text-[#86868b]">
                every wire,
              </span>
              <br />
              every post.
            </h1>
            <p
              className="mt-10 max-w-2xl text-lg text-[#515154] leading-relaxed"
              data-reveal
            >
              Browse our complete fencing range — supplied and installed across
              Chennai and Tamil Nadu. Tap any product to enquire on WhatsApp.
            </p>
          </div>
        </section>

        {/* Category jump nav */}
        <section className="sticky top-[52px] z-30 bg-white/80 backdrop-blur-xl border-y border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 overflow-x-auto">
            <div className="flex gap-2 w-max">
              {productCategories.map((c) => (
                <a
                  key={c}
                  href={`#cat-${c.replace(/\s|&/g, "-").toLowerCase()}`}
                  data-testid={`cat-link-${c}`}
                  className="rounded-full border border-[#e5e5ea] px-4 py-2 text-xs font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] whitespace-nowrap"
                >
                  {c}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Product grid by category */}
        {productCategories.map((cat) => {
          const items = products.filter((p) => p.category === cat);
          if (!items.length) return null;
          return (
            <section
              key={cat}
              id={`cat-${cat.replace(/\s|&/g, "-").toLowerCase()}`}
              className="bg-white py-20 sm:py-28 border-b border-[#e5e5ea]"
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div
                  className="mb-12 flex items-end justify-between"
                  data-reveal
                >
                  <div>
                    <p className="eyebrow">{`0${productCategories.indexOf(cat) + 1}`}</p>
                    <h2 className="display mt-3 text-4xl sm:text-6xl text-[#1d1d1f]">
                      {cat}
                    </h2>
                  </div>
                  <p className="text-sm text-[#86868b] hidden sm:block">
                    {items.length} {items.length === 1 ? "product" : "products"}
                  </p>
                </div>
                <div
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                  data-stagger
                >
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      id={p.slug}
                      href={`/products/${p.slug}`}
                      data-stagger-item
                      data-testid={`product-card-${p.slug}`}
                      className="group card-soft card-hover scroll-mt-32 block"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover image-zoom"
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-7">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#86868b]">
                          {p.category}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm text-[#515154] leading-relaxed">
                          {p.blurb}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                          <span className="link-arrow !text-sm">
                            View details <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <section className="bg-[#f5f5f7] py-32">
          <div
            className="mx-auto max-w-5xl px-5 sm:px-8 text-center"
            data-reveal
          >
            <p className="eyebrow">Not sure which to pick?</p>
            <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
              We&apos;ll guide you.
            </h2>
            <p className="mt-6 text-lg text-[#515154] max-w-xl mx-auto">
              Free consultation. Honest material recommendation. Quick quote
              across Chennai and Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="products-cta-wa"
                className="btn btn-wa"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                data-testid="products-cta-contact"
                className="btn btn-primary"
              >
                Request a Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
