import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  breadcrumbJsonLd,
  localBusinessJsonLd,
  products,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fencing Products",
  description:
    "Explore Navi Fencing products including chain link, PVC chainlink, barbed wire, concertina coil, welded mesh, steel angles, posts, stones, and fencing accessories.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Fencing Products | Navi Fencing",
    description:
      "SEO-ready fencing product catalog with product pages for mesh, wire, posts, angles, stones, and accessories.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fencing Products", path: "/products" },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="bg-[#172118] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6db6b]">
              Navi Fencing product catalog
            </p>
            <h1 className="mt-4 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
              Fencing products with separate SEO pages for every search intent.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
              Chain link, barbed wire, concertina coil, welded mesh, angles,
              posts, landscape stones, and accessories are organized into clean
              product pages with quote-ready content.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex h-12 items-center rounded-md bg-[#25d366] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white"
            >
              WhatsApp for product quote
            </a>
          </div>
        </section>

        <section className="bg-[#f8faf7] py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-[#dbe5d1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#314a26]/10"
              >
                <Image
                  src={product.image}
                  alt={`${product.title} fencing product`}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6f8f2f]">
                    {product.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-[#172118]">
                    {product.title}
                  </h2>
                  <p className="mt-3 leading-7 text-[#52604c]">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
