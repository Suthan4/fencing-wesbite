import Image from "next/image";
import Link from "next/link";
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
    question: "How long does a fence installation take?",
    answer:
      "Most residential fence installations are completed in two to five days after materials and permits are ready.",
  },
  {
    question: "Do you handle fence repairs?",
    answer:
      "Yes. Navi Fencing repairs leaning posts, broken panels, gate hardware, storm damage, and aging sections.",
  },
  {
    question: "Which fence material is best for privacy?",
    answer:
      "Wood and vinyl privacy fences are the most popular choices when the priority is screening, height, and curb appeal.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), faqJsonLd(faqs)]} />
      <SiteHeader />
      <main className="overflow-hidden">
        <GsapAnimations />

        <section className="relative isolate bg-[#f8faf7]">
          <div className="absolute inset-x-0 top-0 h-2 bg-[#8fb339]" />
          <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div className="max-w-3xl">
              <p
                data-hero-reveal
                className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]"
              >
                Fence installation, repair, and custom gates
              </p>
              <h1
                data-hero-reveal
                className="font-serif text-5xl font-semibold leading-[0.96] text-[#172118] sm:text-6xl lg:text-7xl"
              >
                Built-right fencing for privacy, security, and lasting curb
                appeal.
              </h1>
              <p
                data-hero-reveal
                className="mt-7 max-w-2xl text-lg leading-8 text-[#52604c] sm:text-xl"
              >
                Navi Fencing helps homeowners and businesses choose the right
                fence, plan the layout, and install it with careful
                craftsmanship from first post to final gate swing.
              </p>
              <div
                data-hero-reveal
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#314a26] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#314a26]/20 transition hover:bg-[#24371c]"
                >
                  WhatsApp quote
                </a>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#b6c7a5] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#314a26] transition hover:border-[#314a26]"
                >
                  View services
                </Link>
              </div>
            </div>

            <div data-hero-reveal className="relative">
              <div className="absolute -inset-6 rounded-full bg-[#dce8ce]" />
              <div className="relative grid grid-cols-2 gap-4 rounded-[2rem] bg-[#314a26] p-4 text-white shadow-2xl shadow-[#314a26]/20">
                {products.slice(0, 4).map((product, index) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className={`group overflow-hidden rounded-2xl bg-white ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.title} by Navi Fencing`}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                        index === 0 ? "h-64" : "h-40"
                      }`}
                    />
                    <div className="bg-[#172118] px-4 py-3">
                      <p className="text-sm font-bold">{product.title}</p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["18", "products"],
                    ["500+", "projects"],
                    ["4.9", "rated"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/10 px-3 py-4 backdrop-blur"
                    >
                      <p className="text-2xl font-bold">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/75">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                data-fence-line
                className="absolute -bottom-8 left-4 right-4 h-3 rounded-full bg-[#8fb339]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#edf4e6] py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div
              data-scroll-reveal
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                  Product catalog
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-[#172118] sm:text-5xl">
                  Fencing materials displayed like a premium product showroom.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#314a26] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                View all products
              </Link>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.slice(0, 8).map((product) => (
                <Link
                  data-scroll-reveal
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-lg border border-[#dbe5d1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#314a26]/10"
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} product`}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6f8f2f]">
                      {product.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#172118]">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div data-scroll-reveal className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                SEO-friendly fencing services
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#172118] sm:text-5xl">
                The fence contractor people search for when quality matters.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  data-scroll-reveal
                  key={service.slug}
                  className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-7"
                >
                  <h3 className="text-xl font-bold text-[#172118]">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#52604c]">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex font-bold text-[#314a26] underline"
                  >
                    Learn more
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          data-rail-wrap
          className="relative bg-[#172118] py-24 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div data-scroll-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6db6b]">
                Materials and styles
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                Sharp lines, resilient materials, and a style that fits the
                property.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {materials.map((material) => (
                <Link
                  data-scroll-reveal
                  key={material.slug}
                  href={`/materials/${material.slug}`}
                  className="rounded-lg border border-white/15 bg-white/8 px-5 py-4 text-lg font-semibold"
                >
                  {material.title}
                </Link>
              ))}
            </div>
          </div>
          <div
            data-rail
            aria-hidden="true"
            className="mt-16 flex w-[120%] gap-4 text-7xl font-black uppercase leading-none text-white/5"
          >
            <span>Fence</span>
            <span>Gate</span>
            <span>Repair</span>
            <span>Install</span>
            <span>Privacy</span>
          </div>
        </section>

        <section className="bg-[#edf4e6] py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div data-scroll-reveal>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                  Simple project flow
                </p>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-[#172118] sm:text-5xl">
                  From estimate to finished fence without confusion.
                </h2>
              </div>
              <ol className="grid gap-4">
                {[
                  "Measure the property and talk through privacy, security, and style goals.",
                  "Recommend materials, layout, gate placement, and a clear installation scope.",
                  "Install posts, panels, rails, and hardware with careful cleanup at completion.",
                ].map((step, index) => (
                  <li
                    data-scroll-reveal
                    key={step}
                    className="flex gap-5 rounded-lg bg-white p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#314a26] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-lg leading-8 text-[#52604c]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <div data-scroll-reveal className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Fence installation FAQ
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#172118] sm:text-5xl">
                Answers that help customers find you in search.
              </h2>
            </div>
            <div className="mt-12 grid gap-4">
              {faqs.map((faq) => (
                <article
                  data-scroll-reveal
                  key={faq.question}
                  className="rounded-lg border border-[#dbe5d1] p-6"
                >
                  <h3 className="text-xl font-bold text-[#172118]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-[#52604c]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#314a26] py-20 text-white">
          <div
            data-scroll-reveal
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:px-10"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6db6b]">
                Ready for a stronger property line?
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
                Get a fencing quote built around your property, timeline, and
                budget.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-white px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#314a26] transition hover:bg-[#edf4e6]"
            >
              Start quote
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
