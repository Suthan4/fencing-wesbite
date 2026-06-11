import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  getProduct,
  localBusinessJsonLd,
  productJsonLd,
  products,
  whatsappUrl,
} from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.metaTitle,
    description: product.description,
    keywords: product.keywords,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.metaTitle} | Navi Fencing`,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 900,
          alt: `${product.title} by Navi Fencing`,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const path = `/products/${product.slug}`;

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          productJsonLd(product),
          faqJsonLd(product.faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fencing Products", path: "/products" },
            { name: product.title, path },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="bg-[#f8faf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <nav className="text-sm font-semibold text-[#6f8f2f]">
                <Link href="/">Home</Link>
                <span className="px-2">/</span>
                <Link href="/products">Products</Link>
              </nav>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                {product.category}
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.98] text-[#172118] sm:text-6xl">
                {product.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52604c]">
                {product.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#25d366] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white"
                >
                  WhatsApp quote
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#b6c7a5] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#314a26]"
                >
                  Contact Navi Fencing
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#dbe5d1] bg-white shadow-2xl shadow-[#314a26]/10">
              <Image
                src={product.image}
                alt={`${product.title} product image`}
                width={1200}
                height={900}
                priority
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Common uses
              </p>
              <div className="mt-6 grid gap-4">
                {product.uses.map((use) => (
                  <div
                    key={use}
                    className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-5 text-lg font-semibold text-[#172118]"
                  >
                    {use}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Product notes
              </p>
              <div className="mt-6 grid gap-4">
                {product.specs.map((spec) => (
                  <div
                    key={spec}
                    className="rounded-lg bg-[#172118] p-5 text-lg font-semibold text-white"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#edf4e6] py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
              Product FAQ
            </p>
            <h2 className="mt-4 text-center font-serif text-4xl font-semibold text-[#172118]">
              {product.title} questions
            </h2>
            <div className="mt-10 grid gap-4">
              {product.faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#172118]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-[#52604c]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
