import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import {
  company,
  faqJsonLd,
  getProduct,
  productFaqs,
  productJsonLd,
  products,
  relatedProducts,
  siteUrl,
  whatsappUrl,
} from "@/lib/site";
import { FloatingPhone } from "@/components/FloatingPhone";
import { getCurrentLocation } from "@/lib/get-location";
import { FaqSection } from "@/components/FaqSection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product not found" };
  const location = await getCurrentLocation();
  const desc =
    p.details?.description ??
    `${p.title} supplied and installed by Navi Fencing across ${location.name} and Tamil Nadu.`;
  return {
    title: `${p.title} | Navi Fencing`,
    description: desc,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.title} · Navi Fencing`,
      description: desc,
      images: [{ url: p.image, alt: p.title }],
      url: `/products/${p.slug}`,
      type: "article",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const details = product.details;
  const related = relatedProducts(product.slug, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteUrl}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${siteUrl}/products/${product.slug}`,
      },
    ],
  };

  const enquireMsg = `Hi Navi Fencing, I'd like a quote for ${product.title}. Please share rates and availability.`;
  const faqs = productFaqs(product);
  return (
    <>
      <JsonLd
        data={[productJsonLd(product), breadcrumbJsonLd, faqJsonLd(faqs)]}
      />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        {/* Hero */}
        <section className="bg-white pt-[100px] sm:pt-[120px] pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs text-[#86868b]"
              aria-label="Breadcrumb"
              data-testid="product-breadcrumb"
            >
              <Link href="/" className="hover:text-[#1d1d1f]">
                Home
              </Link>
              <ArrowRight size={11} />
              <Link href="/products" className="hover:text-[#1d1d1f]">
                Products
              </Link>
              <ArrowRight size={11} />
              <span className="text-[#1d1d1f]">{product.title}</span>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              {/* Image */}
              <div
                className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#f5f5f7]"
                data-reveal
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="lg:col-span-5 lg:pt-4" data-reveal>
                <p className="eyebrow">{product.category}</p>
                <h1 className="display mt-4 text-5xl sm:text-7xl text-[#1d1d1f]">
                  {product.title}
                </h1>
                {details?.tagline && (
                  <p className="mt-5 text-xl text-[#86868b] italic">
                    {details.tagline}
                  </p>
                )}
                <p className="mt-6 text-base text-[#515154] leading-relaxed">
                  {details?.description ?? product.blurb}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl(enquireMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="product-detail-whatsapp"
                    className="btn btn-wa"
                  >
                    <MessageCircle size={15} /> WhatsApp Enquiry
                  </a>
                  <a
                    href={`tel:${company.phones[0]}`}
                    data-testid="product-detail-call"
                    className="btn btn-primary"
                  >
                    <Phone size={14} /> Call us
                  </a>
                </div>

                {details?.highlights && details.highlights.length > 0 && (
                  <ul className="mt-10 space-y-3">
                    {details.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-[#1d1d1f]"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#1d1d1f]"
                          strokeWidth={1.7}
                        />
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Uses + Specs */}
        {details && (
          <section className="bg-[#f5f5f7] py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-12 lg:grid-cols-2">
              {/* Uses */}
              <div data-reveal>
                <p className="eyebrow">Common applications</p>
                <h2 className="display mt-4 text-4xl sm:text-5xl text-[#1d1d1f]">
                  Where it&apos;s used.
                </h2>
                <ul className="mt-8 divide-y divide-[#e5e5ea] border-y border-[#e5e5ea]">
                  {details.uses.map((u, i) => (
                    <li
                      key={u}
                      className="flex items-center justify-between py-5"
                    >
                      <span className="text-[#1d1d1f] text-base sm:text-lg">
                        {u}
                      </span>
                      <span className="text-xs text-[#86868b] tabular-nums">
                        0{i + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div data-reveal>
                <p className="eyebrow">Specifications</p>
                <h2 className="display mt-4 text-4xl sm:text-5xl text-[#1d1d1f]">
                  What you get.
                </h2>
                <dl className="mt-8 divide-y divide-[#e5e5ea] border-y border-[#e5e5ea]">
                  {details.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-6 py-5"
                    >
                      <dt className="text-xs uppercase tracking-[0.18em] text-[#86868b] pt-0.5">
                        {s.label}
                      </dt>
                      <dd className="text-[#1d1d1f] text-right text-base font-medium max-w-[60%]">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs text-[#86868b]">
                  * Sizes, gauges and finishes are indicative. Final
                  specifications are confirmed at site visit.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQ — AEO: answer-first Q&A backed by FAQPage schema above */}
        <FaqSection
          faqs={faqs}
          eyebrow="FAQ"
          title={
            <>
              {product.title} —{" "}
              <span className="italic font-normal text-[#86868b]">
                common questions.
              </span>
            </>
          }
        />

        {/* Quote CTA */}
        <section className="bg-white py-24">
          <div
            className="mx-auto max-w-5xl px-5 sm:px-8 text-center"
            data-reveal
          >
            <p className="eyebrow">Free consultation</p>
            <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
              Get a quote
              <br />
              <span className="italic font-normal text-[#86868b]">
                for {product.title.toLowerCase()}.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#515154] max-w-xl mx-auto">
              Share your site location, approximate length and we&apos;ll come
              back with a clear quote — usually the same day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappUrl(enquireMsg)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cta-product-whatsapp"
                className="btn btn-wa"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
              <Link
                href="/contact"
                data-testid="cta-product-contact"
                className="btn btn-primary"
              >
                Contact Page <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-[#f5f5f7] py-24 border-t border-[#e5e5ea]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="mb-12 flex items-end justify-between" data-reveal>
                <div>
                  <p className="eyebrow">More in {product.category}</p>
                  <h2 className="display mt-3 text-4xl sm:text-5xl text-[#1d1d1f]">
                    Related products.
                  </h2>
                </div>
                <Link
                  href="/products"
                  className="link-arrow !text-sm hidden sm:inline-flex"
                >
                  All products <ArrowRight size={14} />
                </Link>
              </div>
              <div
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                data-stagger
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/products/${r.slug}`}
                    data-stagger-item
                    data-testid={`related-${r.slug}`}
                    className="group card-soft card-hover bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover image-zoom"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#86868b]">
                        {r.category}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#515154] line-clamp-2">
                        {r.blurb}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="bg-white py-10 border-t border-[#e5e5ea]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link
              href="/products"
              data-testid="back-to-products"
              className="link-arrow !text-sm"
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
