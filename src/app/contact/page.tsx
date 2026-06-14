import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { GsapAnimations } from "@/components/GsapAnimations";
import {
  breadcrumbJsonLd,
  company,
  localBusinessJsonLd,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Navi Fencing",
  description:
    "Contact Navi Fencing for fencing installation, repair, and supply across Chennai and Tamil Nadu. Call, WhatsApp, or fill the form for a free quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
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
            <div className="max-w-2xl">
              <span className="eyebrow">Get a fencing estimate</span>
              <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1] tracking-tight">
                Tell us what you
                <br />
                <span className="text-gradient">need to fence.</span>
              </h1>
              <p className="mt-7 text-lg text-white/60 leading-relaxed">
                We serve Chennai and all of Tamil Nadu. Call, WhatsApp, or fill
                the form below for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
              {/* Contact info */}
              <div data-reveal className="space-y-5">
                <div className="rounded-2xl bg-[#080c08] text-white p-8">
                  <h2 className="font-serif text-2xl font-semibold mb-7">
                    Contact details
                  </h2>
                  <div className="space-y-5">
                    {company.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone}`}
                        className="flex items-center gap-4 group"
                      >
                        <div className="h-10 w-10 rounded-full bg-[#a8e63d]/10 flex items-center justify-center shrink-0">
                          <Phone size={16} className="text-[#a8e63d]" />
                        </div>
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                          {company.displayPhones[i]}
                        </span>
                      </a>
                    ))}
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="h-10 w-10 rounded-full bg-[#a8e63d]/10 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#a8e63d]" />
                      </div>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                        {company.email}
                      </span>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-[#a8e63d]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={16} className="text-[#a8e63d]" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">
                          Chennai, Tamil Nadu, India
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          Serving all of Tamil Nadu
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-6 py-3 text-sm font-bold text-white hover:bg-[#20be5a] transition-colors"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M16.02 4.8A11.09 11.09 0 0 0 6.6 21.74L5.2 27l5.38-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.04 9.04 0 0 1 7.62 13.9 9.01 9.01 0 0 1-11.98 3.01l-.39-.23-3.18.8.82-3.09-.25-.4A9.04 9.04 0 0 1 16.02 6.85Zm-4.3 4.8c-.2 0-.52.08-.8.38-.28.31-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.08 3.34 5.14 4.55 2.54 1 3.06.8 3.61.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.25-.58-.5-.5-.68-.51h-.58Z" />
                    </svg>
                    WhatsApp for instant quote
                  </a>
                </div>
                <div className="rounded-2xl bg-[#f5f5f0] border border-[#e8e8e2] p-6 text-sm text-[#6a7d62] leading-relaxed">
                  <p className="font-semibold text-[#080c08] mb-2">
                    Service area
                  </p>
                  <p>
                    We serve Chennai, Coimbatore, Madurai, Salem,
                    Tiruchirappalli, Tirunelveli, and all cities and districts
                    across Tamil Nadu for fencing supply and installation.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div
                data-reveal
                className="rounded-2xl border border-[#e8e8e2] bg-[#f5f5f0] p-8"
              >
                <h2 className="font-serif text-2xl font-semibold text-[#080c08] mb-7">
                  Request a quote
                </h2>
                <div className="grid gap-5">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#080c08] mb-2 block">
                      Your name
                    </span>
                    <input
                      className="w-full h-12 rounded-xl border border-[#e8e8e2] bg-white px-4 text-[#080c08] text-sm focus:outline-none focus:ring-2 focus:ring-[#a8e63d]/50 focus:border-[#a8e63d] transition-all"
                      placeholder="Name"
                    />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#080c08] mb-2 block">
                        Phone
                      </span>
                      <input
                        className="w-full h-12 rounded-xl border border-[#e8e8e2] bg-white px-4 text-[#080c08] text-sm focus:outline-none focus:ring-2 focus:ring-[#a8e63d]/50 focus:border-[#a8e63d] transition-all"
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                      />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#080c08] mb-2 block">
                        City / District
                      </span>
                      <input
                        className="w-full h-12 rounded-xl border border-[#e8e8e2] bg-white px-4 text-[#080c08] text-sm focus:outline-none focus:ring-2 focus:ring-[#a8e63d]/50 focus:border-[#a8e63d] transition-all"
                        placeholder="Chennai, Coimbatore…"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#080c08] mb-2 block">
                      Project details
                    </span>
                    <textarea
                      className="w-full min-h-36 rounded-xl border border-[#e8e8e2] bg-white px-4 py-3 text-[#080c08] text-sm focus:outline-none focus:ring-2 focus:ring-[#a8e63d]/50 focus:border-[#a8e63d] transition-all resize-none"
                      placeholder="Fence type (chain link, mesh, concertina coil…), approximate length, purpose, gates, timeline"
                    />
                  </label>
                  <button
                    type="button"
                    className="btn-primary w-full justify-center"
                  >
                    Send enquiry
                  </button>
                  <p className="text-xs text-center text-[#6a7d62]">
                    Or call directly:{" "}
                    <a
                      href="tel:+919176337014"
                      className="font-semibold text-[#1a3a12] hover:underline"
                    >
                      +91 91763 37014
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
