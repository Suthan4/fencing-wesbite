import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GsapAnimations } from "@/components/GsapAnimations";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  getProduct,
  localBusinessJsonLd,
  productJsonLd,
  products,
  whatsappUrl,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.metaTitle,
    description: product.description,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.metaTitle} | Navi Fencing`,
      description: product.description,
      url: `/products/${product.slug}`,
      images: [
        { url: product.image, width: 1200, height: 900, alt: product.title },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
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
            { name: "Products", path: "/products" },
            { name: product.title, path },
          ]),
        ]}
      />
      <SiteHeader />
      <GsapAnimations />
      <main>
        {/* Hero */}
        <section className="relative bg-[#080c08] pt-[60px] pb-20 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#a8e63d 1px, transparent 1px), linear-gradient(90deg, #a8e63d 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-12">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-10">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <ArrowRight size={12} />
              <Link
                href="/products"
                className="hover:text-white/70 transition-colors"
              >
                Products
              </Link>
              <ArrowRight size={12} />
              <span className="text-white/60">{product.title}</span>
            </nav>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div>
                <span className="eyebrow">{product.category}</span>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl font-semibold leading-[1] tracking-tight">
                  {product.title}
                </h1>
                <p className="mt-7 text-lg text-white/60 leading-relaxed">
                  {product.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-[#25d366] text-white hover:bg-[#20be5a]"
                  >
                    WhatsApp Quote
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* Product image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a3a12] to-[#080c08] aspect-[4/3] shadow-2xl shadow-[#a8e63d]/5">
                <Image
                  src={product.image}
                  alt={`${product.title} by Navi Fencing`}
                  fill
                  className="object-cover opacity-80"
                  priority
                  onError={() => {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c08]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Uses & specs */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div data-reveal>
                <span className="eyebrow text-[#6a7d62] mb-6 block">
                  Common uses
                </span>
                <div className="grid gap-3">
                  {product.uses.map((use) => (
                    <div
                      key={use}
                      className="flex items-start gap-3 rounded-xl bg-[#f5f5f0] border border-[#e8e8e2] p-5"
                    >
                      <div className="mt-1.5 h-3 w-3 rounded-full bg-[#a8e63d] shrink-0" />
                      <p className="font-medium text-[#080c08]">{use}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div data-reveal>
                <span className="eyebrow text-[#6a7d62] mb-6 block">
                  Product notes
                </span>
                <div className="grid gap-3">
                  {product.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-start gap-3 rounded-xl bg-[#080c08] p-5"
                    >
                      <div className="mt-1.5 h-3 w-3 rounded-full bg-[#a8e63d]/60 shrink-0" />
                      <p className="font-medium text-white/80">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f5f5f0] py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div data-reveal className="text-center mb-12">
              <span className="eyebrow text-[#6a7d62]">Product FAQ</span>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#080c08]">
                {product.title} questions
              </h2>
            </div>
            <div className="grid gap-4">
              {product.faqs.map((faq) => (
                <article
                  key={faq.question}
                  data-reveal
                  className="rounded-2xl bg-white border border-[#e8e8e2] p-7"
                >
                  <h3 className="text-lg font-bold text-[#080c08] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#6a7d62] leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="bg-white py-8 border-t border-[#e8e8e2]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a3a12] hover:gap-3 transition-all"
            >
              <ArrowLeft size={14} /> Back to all products
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
