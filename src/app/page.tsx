import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Home as HomeIcon,
  Building2,
  Wrench,
  Phone,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import {
  company,
  homeFaqs,
  products,
  whatsappUrl,
  localBusinessJsonLd,
  faqJsonLd,
} from "@/lib/site";

const services = [
  {
    icon: HomeIcon,
    title: "Residential",
    desc: "Privacy & security fencing for homes, villas and farmhouses.",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Perimeter security for factories, warehouses and offices.",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Concertina, razor wire and high-security wall toppings.",
  },
  {
    icon: Wrench,
    title: "Installation",
    desc: "Expert end-to-end installation with quality materials.",
  },
];

const process = [
  {
    n: "01",
    t: "Free Consultation",
    d: "Call or WhatsApp. We listen first, then plan.",
  },
  {
    n: "02",
    t: "Site Survey",
    d: "On-site measurement, material recommendation and clear quote.",
  },
  {
    n: "03",
    t: "Expert Install",
    d: "Trained crew, premium materials, clean workmanship.",
  },
  {
    n: "04",
    t: "After-care",
    d: "Walk-through, handover and ongoing support.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 19, suffix: "", label: "Fencing products" },
  { value: 10, suffix: "+", label: "Years across Tamil Nadu" },
  { value: 4.9, suffix: "★", label: "Customer rating" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd(homeFaqs)]} />
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />

      <main className="cursor-fence">
        {/* ── HERO ── */}
        <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0" data-hero-bg>
            <Image
              // src="https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=2000&q=85"
              src="/products/angle-fencing.jpg"
              alt="Modern residential fence at dusk"
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
          </div>

          <div className="relative h-full flex flex-col justify-between pt-[88px] sm:pt-[110px] pb-20 sm:pb-28">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <p data-hero-sub className="eyebrow !text-white/70">
                Chennai · Across Tamil Nadu
              </p>
            </div>

            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
              <h1 className="display text-white text-[clamp(2.75rem,7.5vw,7rem)] max-w-5xl">
                <span data-hero-word className="block">
                  Secure
                </span>
                <span data-hero-word className="block">
                  boundaries.
                </span>
                <span
                  data-hero-word
                  className="block italic font-normal text-white/70"
                >
                  Built right.
                </span>
              </h1>
              <p
                data-hero-sub
                className="mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
              >
                Premium fencing for residential, commercial and industrial
                projects. Chain link, mesh, security wire, posts — supplied and
                installed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-hero-cta
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-whatsapp"
                  className="btn btn-wa"
                >
                  <MessageCircle size={16} /> Free WhatsApp Quote
                </a>
                <a
                  data-hero-cta
                  href={`tel:${company.phones[0]}`}
                  data-testid="hero-call"
                  className="btn bg-white text-[#1d1d1f] hover:bg-white/90"
                >
                  <Phone size={16} /> {company.displayPhones[0]}
                </a>
                <Link
                  data-hero-cta
                  href="/products"
                  data-testid="hero-products"
                  className="btn border border-white/20 text-white hover:bg-white/10"
                >
                  Explore Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.3em] uppercase"
          >
            Scroll
          </div>
        </section>

        {/* ── PRODUCTS MARQUEE ── */}
        <section className="border-y border-[#e5e5ea] bg-white py-7 overflow-hidden">
          <div className="marquee gap-12 text-[#86868b] whitespace-nowrap">
            {[...products, ...products].map((p, i) => (
              <span
                key={i}
                className="text-sm sm:text-base font-medium tracking-tight flex items-center gap-12"
              >
                {p.title}
                <span className="text-[#d2d2d7]">·</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── INTRO / WHY US ── */}
        <section className="relative bg-white py-32 sm:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow" data-reveal>
                  Why Navi Fencing
                </p>
                <h2
                  className="display mt-5 text-5xl sm:text-7xl md:text-8xl text-[#1d1d1f]"
                  data-reveal
                >
                  Crafted for
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    privacy, security
                  </span>
                  <br />& lasting strength.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p
                  className="text-lg text-[#515154] leading-relaxed"
                  data-reveal
                >
                  At Navi Fencing, our mission is to create safe, private and
                  beautiful spaces. With reliable craftsmanship and modern
                  techniques, we deliver fencing that lasts for years.
                </p>
                <ul className="mt-8 space-y-3" data-stagger>
                  {[
                    "Residential & Commercial Fencing",
                    "Privacy & Security Solutions",
                    "Modern & Durable Designs",
                    "Expert Installation with Quality Materials",
                  ].map((t) => (
                    <li
                      key={t}
                      data-stagger-item
                      className="flex items-start gap-3 text-[#1d1d1f]"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#1d1d1f]"
                        strokeWidth={1.7}
                      />
                      <span className="text-base">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE GRID (Bento) ── */}
        <section className="bg-[#f5f5f7] py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl" data-reveal>
              <p className="eyebrow">What we do</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                One team.
                <br />
                <span className="italic font-normal text-[#86868b]">
                  Every fencing need.
                </span>
              </h2>
            </div>

            <div
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              data-stagger
            >
              {services.map((s) => (
                <article
                  key={s.title}
                  data-stagger-item
                  data-testid={`service-${s.title.toLowerCase()}`}
                  className="card-soft card-hover bg-white p-8 min-h-[260px] flex flex-col justify-between"
                >
                  <s.icon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#1d1d1f]"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[#515154] text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HORIZONTAL PRODUCT SHOWCASE (Apple-style pinned) ── */}
        <section
          data-h-scroll
          className="relative bg-[#0a0a0a] text-white h-[100svh] overflow-hidden hidden lg:block"
        >
          <div className="absolute top-0 left-0 right-0 z-10 px-8 pt-12">
            <p className="eyebrow !text-white/50">19 Products</p>
            <h2 className="display mt-4 text-5xl sm:text-7xl text-white max-w-3xl">
              The catalog.
              <span className="italic font-normal text-white/50"> Scroll.</span>
            </h2>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div
              data-h-track
              className="flex gap-6 pl-[5vw] pr-[5vw]"
              style={{ willChange: "transform" }}
            >
              {products.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  data-testid={`hscroll-product-${p.slug}`}
                  className="group relative w-[360px] shrink-0 overflow-hidden rounded-3xl bg-[#161616]"
                >
                  <div className="relative h-[480px] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover image-zoom"
                      sizes="360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
                      {String(i + 1).padStart(2, "0")} · {p.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
                      {p.blurb}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOBILE PRODUCT GRID ── */}
        <section className="bg-[#0a0a0a] text-white py-24 lg:hidden">
          <div className="px-5 sm:px-8">
            <p className="eyebrow !text-white/50" data-reveal>
              19 Products
            </p>
            <h2 className="display mt-4 text-5xl text-white" data-reveal>
              The catalog.
            </h2>
            <div
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
              data-stagger
            >
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  data-stagger-item
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#161616]"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover image-zoom"
                    sizes="(max-width:640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-12"
              data-stagger
            >
              {stats.map((s) => (
                <div key={s.label} data-stagger-item>
                  <div className="display text-6xl sm:text-7xl text-[#1d1d1f] tabular-nums">
                    <span data-count={s.value} data-suffix={s.suffix}>
                      0{s.suffix}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#86868b] tracking-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS CARD STACK ── */}
        <section className="bg-[#f5f5f7] py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-16 max-w-2xl" data-reveal>
              <p className="eyebrow">How we work</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                A clean path.
                <br />
                <span className="italic font-normal text-[#86868b]">
                  From hello to handover.
                </span>
              </h2>
            </div>
            <div
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
              data-card-stack
            >
              {process.map((p) => (
                <article
                  key={p.n}
                  data-stack-card
                  data-testid={`process-${p.n}`}
                  className="bg-white rounded-3xl p-8 min-h-[260px] flex flex-col justify-between border border-[#e5e5ea]"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#86868b]">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                      {p.t}
                    </h3>
                    <p className="mt-3 text-[#515154] text-sm leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARALLAX QUOTE ── */}
        <section className="relative h-[80vh] min-h-[520px] overflow-hidden bg-black">
          <div className="absolute inset-0" data-parallax="0.25">
            <Image
              src="https://images.unsplash.com/photo-1532622286598-f87b4290fe22?w=2000&q=85"
              alt="Wire mesh texture"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
              <p
                className="display text-white text-3xl sm:text-5xl md:text-6xl leading-tight"
                data-reveal
              >
                &ldquo;Reliable craftsmanship, modern techniques, fencing that
                lasts for years.&rdquo;
              </p>
              <p className="mt-8 eyebrow !text-white/60" data-reveal>
                — Navi Fencing
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mb-16" data-reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f]">
                Good questions.
              </h2>
            </div>
            <div className="divide-y divide-[#e5e5ea] border-y border-[#e5e5ea]">
              {homeFaqs.map((f) => (
                <details
                  key={f.question}
                  className="group py-6 cursor-pointer"
                  data-reveal
                  data-testid={`faq-${f.question.slice(0, 12)}`}
                >
                  <summary className="flex items-center justify-between list-none">
                    <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1d1d1f] pr-6">
                      {f.question}
                    </h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e5e5ea] text-[#1d1d1f] transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-5 text-[#515154] text-base leading-relaxed max-w-3xl">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
