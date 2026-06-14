import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GsapAnimations } from "@/components/GsapAnimations";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  products,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fencing Products in Chennai – Chain Link, Barbed Wire, Mesh & More",
  description:
    "Navi Fencing supplies 18 fencing products in Chennai and Tamil Nadu: chain link, twisted chain link, PVC chainlink, barbed wire, PVC barbed wire, concertina coil, razor wire, welded mesh, green mesh, steel angles, L angles, Y angles, cement posts, bend posts, landscape stones, and accessories.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Fencing Products | Navi Fencing",
    description:
      "18 fencing products available for supply and installation across Tamil Nadu.",
    url: "/products",
  },
};

// Group products by category
const grouped = products.reduce<Record<string, typeof products>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
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
            <div className="max-w-3xl">
              <span className="eyebrow">Product catalog</span>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                18 products.
                <br />
                <span className="text-gradient">Supplied &amp; installed.</span>
              </h1>
              <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                Chain link, barbed wire, concertina coil, razor wire, welded
                mesh, steel angles, posts, stones, and accessories — available
                for supply and installation across Tamil Nadu.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-[#25d366] text-white hover:bg-[#20be5a]"
                >
                  WhatsApp for Product Quote
                </a>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f0] py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-20">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div data-reveal className="mb-8 flex items-center gap-4">
                  <h2 className="text-xl font-bold text-[#080c08]">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-[#e8e8e2]" />
                </div>
                <div
                  data-stagger-parent
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {items.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      data-stagger-child
                      className="group rounded-2xl bg-white border border-[#e8e8e2] overflow-hidden card-hover"
                    >
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1a3a12] to-[#080c08] flex items-center justify-center overflow-hidden">
                        <Image
                          src={product.image}
                          alt={`${product.title} – Navi Fencing`}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                          onError={() => {}}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080c08]/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]/80">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-[#080c08] group-hover:text-[#1a3a12] transition-colors">
                          {product.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#6a7d62] leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                        <p className="mt-4 text-xs font-bold text-[#1a3a12]">
                          View details →
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#080c08] py-20 text-white">
          <div
            data-reveal
            className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d] mb-3">
                Quick quote
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold max-w-xl">
                Need a product quote for Tamil Nadu delivery?
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-[#25d366] text-white hover:bg-[#20be5a]"
              >
                WhatsApp Now
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
