import Link from "next/link";
import { ArrowRight, Shield, Wrench, Building2, DoorOpen } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  faqJsonLd,
  localBusinessJsonLd,
  materials,
  products,
  services,
  whatsappUrl,
} from "@/lib/site";

const faqs = [
  {
    question: "Which fencing contractor serves Chennai and Tamil Nadu?",
    answer:
      "Navi Fencing operates across Chennai and all districts of Tamil Nadu, offering residential, commercial, and industrial fencing installation.",
  },
  {
    question: "What fencing products does Navi Fencing supply?",
    answer:
      "We supply chain link, twisted chain link, PVC chainlink, barbed wire, PVC barbed wire, concertina coil, razor wire, welded mesh, green mesh, steel angles, L angles, Y angles, cement posts, bend posts, white stone, black stone, fiber stumph, and lactic sheet.",
  },
  {
    question: "How long does a fence installation take in Tamil Nadu?",
    answer:
      "Most residential fence installations are completed in two to four days after materials are ready. Commercial projects are scoped based on perimeter length and complexity.",
  },
  {
    question:
      "Do you install concertina coil and razor wire on compound walls?",
    answer:
      "Yes. We install concertina coil, razor wire, and barbed wire on existing compound walls using Y angle brackets for maximum perimeter security.",
  },
];

const serviceIcons = [Shield, Building2, Wrench, DoorOpen];

const stats = [
  { value: 500, suffix: "+", label: "Projects completed" },
  { value: 18, suffix: "", label: "Products available" },
  { value: 10, suffix: "+", label: "Years in Tamil Nadu" },
  { value: 4.9, suffix: "★", label: "Customer rating" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd(faqs)]} />
      <SiteHeader />
      <GsapAnimations />
      <main>
        {/* ── HERO ── */}
        <section
          data-hero-section
          className="relative min-h-screen bg-[#080c08] text-white flex items-center overflow-hidden pt-[60px]"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#a8e63d 1px, transparent 1px), linear-gradient(90deg, #a8e63d 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#a8e63d]/[0.06] blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p data-hero-word className="eyebrow mb-6">
                  Fencing Contractor · Chennai &amp; Tamil Nadu
                </p>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                  <span data-hero-word className="block">
                    Secure
                  </span>
                  <span data-hero-word className="block text-gradient">
                    Boundaries.
                  </span>
                  <span data-hero-word className="block">
                    Built Right.
                  </span>
                </h1>
                <p
                  data-hero-sub
                  className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-lg"
                >
                  Residential, commercial, and industrial fencing across Tamil
                  Nadu. Chain link, concertina coil, razor wire, welded mesh,
                  cement posts, and custom gates — supply and installation.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    data-hero-cta
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-[#25d366] text-white hover:bg-[#20be5a] hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]"
                  >
                    WhatsApp Quote
                  </a>
                  <Link data-hero-cta href="/products" className="btn-outline">
                    Browse Products
                  </Link>
                </div>
                {/* Phones */}
                <div
                  data-hero-cta
                  className="mt-8 flex flex-wrap gap-4 text-sm text-white/40"
                >
                  <a
                    href="tel:+919176337014"
                    className="hover:text-white/70 transition-colors"
                  >
                    +91 91763 37014
                  </a>
                  <span>·</span>
                  <a
                    href="tel:+918248055188"
                    className="hover:text-white/70 transition-colors"
                  >
                    +91 82480 55188
                  </a>
                  <span>·</span>
                  <a
                    href="tel:+919597722813"
                    className="hover:text-white/70 transition-colors"
                  >
                    +91 95977 22813
                  </a>
                </div>
              </div>

              {/* Hero visual */}
              <div data-hero-visual className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f2209] to-[#1a3a12] p-8 shadow-2xl shadow-[#a8e63d]/5">
                  {/* Fence illustration */}
                  <div className="relative h-64 sm:h-80">
                    {/* Sky */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061018] to-[#0d2010] rounded-xl" />
                    {/* Moon */}
                    <div className="absolute top-6 right-8 h-12 w-12 rounded-full bg-white/10 border border-white/20" />
                    {/* Ground */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#1a3a12] rounded-b-xl" />
                    {/* Fence posts */}
                    {[6, 20, 34, 48, 62, 76, 90].map((l, i) => (
                      <div
                        key={i}
                        className="absolute bottom-8 w-2.5 rounded-t bg-[#3a5a2a]"
                        style={{
                          left: `${l}%`,
                          height: `${50 + (i % 3) * 15}%`,
                        }}
                      />
                    ))}
                    {/* Rails */}
                    <div className="absolute bottom-[40%] left-2 right-2 h-2 rounded-full bg-[#4a7a35]" />
                    <div className="absolute bottom-[58%] left-2 right-2 h-2 rounded-full bg-[#4a7a35]" />
                    {/* Razor wire top */}
                    <div className="absolute bottom-[73%] left-2 right-2 h-1 bg-[#a8e63d]/60" />
                    {[...Array(14)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-3 w-0.5 bg-[#a8e63d]/50"
                        style={{
                          left: `${4 + i * 6.8}%`,
                          bottom: "73%",
                          transform: "rotate(45deg)",
                        }}
                      />
                    ))}
                    {/* Location badge */}
                    <div className="absolute top-4 left-4 rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 backdrop-blur">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]">
                        Tamil Nadu
                      </p>
                      <p className="text-xs text-white/70 mt-0.5">
                        Active installations
                      </p>
                    </div>
                  </div>

                  {/* Product grid */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[
                      "Chain Link",
                      "Razor Wire",
                      "Welded Mesh",
                      "Concertina Coil",
                      "Cement Post",
                      "Barbed Wire",
                    ].map((name) => (
                      <div
                        key={name}
                        className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-2.5 text-center"
                      >
                        <p className="text-[0.6rem] text-white/60 leading-tight">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Glow accent */}
                <div className="absolute -bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a8e63d]/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#0d110d] border-y border-white/[0.05] py-10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0d110d] px-8 py-8 text-center"
                >
                  <div className="text-4xl font-bold text-white">
                    {typeof stat.value === "number" &&
                    Number.isInteger(stat.value) ? (
                      <span data-count={stat.value} data-suffix={stat.suffix}>
                        0{stat.suffix}
                      </span>
                    ) : (
                      <span>
                        {stat.value}
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-white/40 uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="max-w-2xl mb-16">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-[#080c08] leading-[1.02]">
                Every fencing need,
                <br />
                one team.
              </h2>
            </div>
            <div
              data-stagger-parent
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((service, i) => {
                const Icon = serviceIcons[i];
                return (
                  <article
                    key={service.slug}
                    data-stagger-child
                    className="group relative rounded-2xl bg-[#f5f5f0] p-7 card-hover overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#a8e63d]/5 translate-x-8 -translate-y-8 group-hover:bg-[#a8e63d]/12 transition-all duration-500" />
                    <Icon
                      className="relative h-8 w-8 text-[#a8e63d] mb-6"
                      strokeWidth={1.5}
                    />
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#6a7d62] mb-3">
                      {service.eyebrow}
                    </p>
                    <h3 className="text-xl font-bold text-[#080c08] mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#6a7d62] leading-relaxed mb-6">
                      {service.description.slice(0, 90)}…
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1a3a12] hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS HORIZONTAL SCROLL ── */}
        <section className="bg-[#080c08] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-12">
            <div
              data-reveal
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
            >
              <div>
                <span className="eyebrow">Product catalog</span>
                <h2 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-white leading-tight">
                  18 products.
                  <br />
                  <span className="text-gradient">One supplier.</span>
                </h2>
              </div>
              <Link href="/products" className="btn-outline shrink-0">
                View all products
              </Link>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div className="overflow-hidden">
            <div
              className="pl-5 sm:pl-8 lg:pl-10 overflow-x-auto scrollbar-none pb-6"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group flex-shrink-0 w-56 rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden hover:border-[#a8e63d]/40 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="h-36 bg-gradient-to-br from-[#1a3a12] to-[#0f2209] flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-[#a8e63d]/10 border border-[#a8e63d]/20 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-[#a8e63d]/40 rounded" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]/70 mb-1">
                        {product.category}
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-[#a8e63d] transition-colors">
                        {product.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MATERIALS ── */}
        <section className="bg-[#f5f5f0] py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="max-w-2xl mb-16">
              <span className="eyebrow">Fencing materials</span>
              <h2 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-[#080c08] leading-tight">
                Choose your material.
                <br />
                We handle the rest.
              </h2>
            </div>
            <div
              data-stagger-parent
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
            >
              {materials.map((material) => (
                <article
                  key={material.slug}
                  data-stagger-child
                  className="group relative rounded-2xl bg-[#080c08] overflow-hidden p-8 min-h-[220px] flex flex-col justify-between card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a12]/80 to-[#080c08] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8e63d]/70">
                      {material.eyebrow}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white leading-tight">
                      {material.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/50 leading-relaxed">
                      {material.description.slice(0, 100)}…
                    </p>
                  </div>
                  <Link
                    href={`/materials/${material.slug}`}
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#a8e63d] hover:gap-3 transition-all"
                  >
                    Explore {material.navTitle} <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="bg-[#080c08] py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div data-reveal className="text-center mb-20">
              <span className="eyebrow">Simple process</span>
              <h2 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-white">
                From enquiry to
                <br />
                <span className="text-gradient">finished fence.</span>
              </h2>
            </div>
            <ol className="relative grid gap-6 md:grid-cols-3">
              {/* Line connector */}
              <div className="hidden md:block absolute top-12 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-[#a8e63d]/20 via-[#a8e63d]/60 to-[#a8e63d]/20" />
              {[
                {
                  step: "01",
                  title: "Contact & Site Visit",
                  desc: "Call, WhatsApp, or message us. We visit your site across Chennai and Tamil Nadu for measurement and consultation.",
                },
                {
                  step: "02",
                  title: "Material & Scope Plan",
                  desc: "We recommend the right materials — chain link, mesh, posts, security wire — with a clear scope and honest price.",
                },
                {
                  step: "03",
                  title: "Install & Handover",
                  desc: "We install, align, and clean up. You get a durable fence with professional workmanship from post to gate.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  data-reveal
                  className="relative glass-card rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto h-14 w-14 rounded-full bg-[#a8e63d] flex items-center justify-center mb-6">
                    <span className="text-[0.7rem] font-black text-[#080c08]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div data-reveal className="text-center mb-16">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 font-serif text-5xl font-semibold text-[#080c08]">
                Common questions
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  data-reveal
                  className="rounded-2xl border border-[#e8e8e2] bg-[#f5f5f0] p-7"
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

        {/* ── CTA ── */}
        <section className="bg-[#1a3a12] py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #a8e63d 0%, transparent 50%), radial-gradient(circle at 70% 50%, #a8e63d 0%, transparent 50%)",
            }}
          />
          <div
            data-reveal
            className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center"
          >
            <span className="eyebrow">Start your project</span>
            <h2 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-3xl mx-auto">
              Ready for a stronger boundary?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-lg mx-auto">
              Get a free consultation for any fencing project in Chennai and
              Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                WhatsApp Us Now
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 justify-center text-white/50 text-sm">
              <a
                href="tel:+919176337014"
                className="hover:text-white/80 transition-colors"
              >
                +91 91763 37014
              </a>
              <span>·</span>
              <a
                href="tel:+918248055188"
                className="hover:text-white/80 transition-colors"
              >
                +91 82480 55188
              </a>
              <span>·</span>
              <a
                href="tel:+919597722813"
                className="hover:text-white/80 transition-colors"
              >
                +91 95977 22813
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
