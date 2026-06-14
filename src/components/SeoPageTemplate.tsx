import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import { GsapAnimations } from "@/components/GsapAnimations";
import type { SeoPage } from "@/lib/site";
import { whatsappUrl } from "@/lib/site";

type SeoPageTemplateProps = {
  page: SeoPage;
  parent: { title: string; path: string };
  jsonLd: object[];
};

export function SeoPageTemplate({
  page,
  parent,
  jsonLd,
}: SeoPageTemplateProps) {
  return (
    <>
      <JsonLd data={jsonLd} />
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
                href={parent.path}
                className="hover:text-white/70 transition-colors"
              >
                {parent.title}
              </Link>
              <ArrowRight size={12} />
              <span className="text-white/60">{page.navTitle}</span>
            </nav>
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
              <div>
                <span className="eyebrow">{page.eyebrow}</span>
                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                  {page.title}
                </h1>
                <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                  {page.intro}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request Estimate
                  </Link>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    WhatsApp Quote
                  </a>
                </div>
              </div>
              <VisualPanel label={page.navTitle} tone="dark" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="max-w-xl mb-14">
              <span className="eyebrow text-[#6a7d62]">Why choose this</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-[#080c08]">
                What makes it work.
              </h2>
            </div>
            <div data-stagger-parent className="grid sm:grid-cols-2 gap-4">
              {page.benefits.map((benefit) => (
                <article
                  key={benefit}
                  data-stagger-child
                  className="rounded-2xl border border-[#e8e8e2] bg-[#f5f5f0] p-7 flex gap-4 items-start"
                >
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#a8e63d] shrink-0 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#080c08]" />
                  </div>
                  <p className="text-[#080c08] leading-relaxed font-medium">
                    {benefit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#080c08] py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="max-w-xl mb-14">
              <span className="eyebrow">Our process</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
                A clean path from start to finish.
              </h2>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {page.process.map((step, index) => (
                <li
                  key={step}
                  data-reveal
                  className="glass-card rounded-2xl p-8"
                >
                  <div className="h-12 w-12 rounded-full bg-[#a8e63d] flex items-center justify-center mb-6">
                    <span className="text-[0.75rem] font-black text-[#080c08]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#f5f5f0] py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div data-reveal className="text-center mb-14">
              <span className="eyebrow text-[#6a7d62]">Frequently asked</span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-[#080c08]">
                {page.title} FAQ
              </h2>
            </div>
            <div className="grid gap-4">
              {page.faqs.map((faq) => (
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

        {/* Bottom CTA */}
        <section className="bg-[#1a3a12] py-20 text-white">
          <div
            data-reveal
            className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d] mb-3">
                Ready to start?
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold max-w-xl">
                Get a quote for {page.title.toLowerCase()} in Tamil Nadu.
              </h2>
            </div>
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

        {/* Back link */}
        <div className="bg-white py-8 border-t border-[#e8e8e2]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Link
              href={parent.path}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a3a12] hover:gap-3 transition-all"
            >
              <ArrowLeft size={14} /> Back to {parent.title}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
