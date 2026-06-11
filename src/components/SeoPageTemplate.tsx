import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import type { SeoPage } from "@/lib/site";

type SeoPageTemplateProps = {
  page: SeoPage;
  parent: {
    title: string;
    path: string;
  };
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
      <main>
        <section className="bg-[#f8faf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <nav className="text-sm font-semibold text-[#6f8f2f]">
                <Link href="/">Home</Link>
                <span className="px-2">/</span>
                <Link href={parent.path}>{parent.title}</Link>
              </nav>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] text-[#172118] sm:text-6xl">
                {page.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52604c]">
                {page.intro}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#314a26] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#24371c]"
                >
                  Request estimate
                </Link>
                <a
                  href="#faq"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#b6c7a5] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#314a26] transition hover:border-[#314a26]"
                >
                  Read FAQs
                </a>
              </div>
            </div>
            <VisualPanel label={page.navTitle} />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Why it ranks and converts
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#172118]">
                Search intent, useful detail, and clear next steps.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-6"
                >
                  <p className="leading-7 text-[#52604c]">{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#172118] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6db6b]">
              Installation process
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold">
              A clean project path from layout to final walkthrough.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {page.process.map((step, index) => (
                <li
                  key={step}
                  className="rounded-lg border border-white/15 bg-white/8 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b6db6b] font-bold text-[#172118]">
                    {index + 1}
                  </span>
                  <p className="mt-5 leading-7 text-white/75">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="bg-[#edf4e6] py-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-center font-serif text-4xl font-semibold text-[#172118]">
              {page.title} FAQ
            </h2>
            <div className="mt-10 grid gap-4">
              {page.faqs.map((faq) => (
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

        <section className="bg-[#314a26] py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-10">
            <h2 className="max-w-3xl font-serif text-4xl font-semibold">
              Need help choosing the right {page.title.toLowerCase()} option?
            </h2>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-white px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#314a26] transition hover:bg-[#edf4e6]"
            >
              Talk to a fence expert
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
