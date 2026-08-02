import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { company, whatsappUrl } from "@/lib/site";
import { getCurrentLocation } from "@/lib/get-location";

export async function generateMetadata(): Promise<Metadata> {
  const location = await getCurrentLocation();
  return {
    title: `Contact Navi Fencing — ${location.name}`,
    description: `Contact Navi Fencing for a free fencing consultation and quote. Call, WhatsApp or email — serving ${location.name} and all of Tamil Nadu.`,
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage() {
  const location = await getCurrentLocation();
  return (
    <>
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main>
        <section className="bg-white pt-[110px] pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              {/* Left Content */}
              <div>
                <p className="eyebrow" data-reveal>
                  Free consultation
                </p>

                <h1
                  className="display mt-4 text-5xl sm:text-6xl lg:text-7xl text-[#1d1d1f]"
                  data-reveal
                >
                  Contact
                  <br />
                  <span className="italic font-normal text-[#86868b]">
                    Navi Fencing
                  </span>
                </h1>

                <p
                  className="mt-6 max-w-xl text-lg text-[#515154] leading-relaxed"
                  data-reveal
                >
                  The fastest way to reach us is WhatsApp or a phone call. We
                  respond personally, usually within minutes during work hours.
                </p>
              </div>

              {/* Right Cards */}
              <div className="space-y-4" data-stagger>
                {/* WhatsApp */}
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp"
                  className="block rounded-3xl bg-[#25d366] p-6 text-white card-hover"
                >
                  <MessageCircle size={24} strokeWidth={1.5} />

                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/70">
                    Fastest Reply
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">WhatsApp</h2>

                  <p className="mt-2 text-white/90">
                    Send a photo of your site and receive a same-day quote.
                  </p>

                  <p className="mt-4 text-sm underline underline-offset-4">
                    Open chat →
                  </p>
                </a>

                {/* Phone */}
                <div className="rounded-3xl bg-[#1d1d1f] p-6 text-white card-hover">
                  <Phone size={24} strokeWidth={1.5} />

                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/60">
                    Call Us
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    Talk to a person
                  </h2>

                  <ul className="mt-4 space-y-2">
                    {company.displayPhones.map((p, i) => (
                      <li key={p}>
                        <a
                          href={`tel:${company.phones[i]}`}
                          data-testid={`contact-call-${i}`}
                          className="underline underline-offset-4 text-white/90 hover:text-white"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Email */}
                <div className="rounded-3xl bg-[#f5f5f7] p-6 card-hover">
                  <Mail
                    size={24}
                    strokeWidth={1.5}
                    className="text-[#1d1d1f]"
                  />

                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#86868b]">
                    Email & Location
                  </p>

                  <a
                    href={`mailto:${company.email}`}
                    data-testid="contact-email"
                    className="mt-2 block text-lg font-semibold text-[#1d1d1f] underline underline-offset-4 break-all"
                  >
                    {company.email}
                  </a>

                  <p className="mt-4 flex items-start gap-2 text-sm text-[#515154]">
                    <MapPin size={14} className="mt-1 shrink-0" />
                    Chennai, Tamil Nadu, India — serving all of Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Width Info Strip */}
            <div
              className="mt-12 rounded-3xl border border-[#e5e5ea] p-6 sm:p-8"
              data-reveal
            >
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="eyebrow">Working Hours</p>
                  <p className="mt-2 text-lg font-medium text-[#1d1d1f]">
                    Mon — Sat
                  </p>
                  <p className="text-sm text-[#515154]">9:00 AM – 7:00 PM</p>
                </div>

                <div>
                  <p className="eyebrow">Response Time</p>
                  <p className="mt-2 text-lg font-medium text-[#1d1d1f]">
                    Under 30 Minutes
                  </p>
                  <p className="text-sm text-[#515154]">
                    On WhatsApp during business hours
                  </p>
                </div>

                <div>
                  <p className="eyebrow">Site Visit</p>
                  <p className="mt-2 text-lg font-medium text-[#1d1d1f]">
                    24 – 48 Hours
                  </p>
                  <p className="text-sm text-[#515154]">
                    Across {location.name} & nearby areas
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
