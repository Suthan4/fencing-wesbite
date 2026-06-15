import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { company, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Free Fencing Consultation in Chennai",
  description:
    "Contact Navi Fencing for a free fencing consultation and quote. Call, WhatsApp or email — based in Chennai, serving Tamil Nadu.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />

      <main>
        <section className="bg-white pt-[120px] pb-20 sm:pt-[160px]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow" data-reveal>
              Free consultation
            </p>
            <h1
              className="display mt-6 text-6xl sm:text-8xl md:text-[10rem] text-[#1d1d1f]"
              data-reveal
            >
              Let&apos;s build
              <br />
              <span className="italic font-normal text-[#86868b]">
                your fence.
              </span>
            </h1>
            <p
              className="mt-10 max-w-2xl text-xl text-[#515154] leading-relaxed"
              data-reveal
            >
              The fastest way to reach us is WhatsApp or a phone call. We
              respond personally, usually within minutes during work hours.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-white pb-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              data-stagger
            >
              {/* WhatsApp */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp"
                data-stagger-item
                className="group rounded-3xl bg-[#25d366] p-10 min-h-[300px] flex flex-col justify-between text-white card-hover"
              >
                <MessageCircle size={32} strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                    Fastest reply
                  </p>
                  <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                    WhatsApp
                  </h2>
                  <p className="mt-2 text-white/90">
                    Send a photo of your site, get a same-day quote.
                  </p>
                  <p className="mt-5 text-sm text-white/90 underline underline-offset-4">
                    Open chat →
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div
                data-stagger-item
                className="rounded-3xl bg-[#1d1d1f] p-10 min-h-[300px] flex flex-col justify-between text-white card-hover"
              >
                <Phone size={32} strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Call us
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                    Talk to a person
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {company.displayPhones.map((p, i) => (
                      <li key={p}>
                        <a
                          href={`tel:${company.phones[i]}`}
                          data-testid={`contact-call-${i}`}
                          className="text-base text-white/90 underline underline-offset-4 hover:text-white"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Email / Location */}
              <div
                data-stagger-item
                className="rounded-3xl bg-[#f5f5f7] p-10 min-h-[300px] flex flex-col justify-between card-hover"
              >
                <Mail size={32} strokeWidth={1.5} className="text-[#1d1d1f]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#86868b]">
                    Email & Location
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    data-testid="contact-email"
                    className="mt-3 block text-2xl font-semibold tracking-tight text-[#1d1d1f] underline underline-offset-4"
                  >
                    {company.email}
                  </a>
                  <p className="mt-5 flex items-start gap-2 text-sm text-[#515154]">
                    <MapPin size={14} className="mt-1 shrink-0" />
                    Chennai, Tamil Nadu, India — serving all of Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours strip */}
            <div
              className="mt-10 rounded-3xl border border-[#e5e5ea] p-8 sm:p-10"
              data-reveal
            >
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="eyebrow">Working hours</p>
                  <p className="mt-3 text-lg font-medium text-[#1d1d1f]">
                    Mon — Sat
                  </p>
                  <p className="text-[#515154] text-sm">9:00 AM – 7:00 PM</p>
                </div>
                <div>
                  <p className="eyebrow">Response time</p>
                  <p className="mt-3 text-lg font-medium text-[#1d1d1f]">
                    Under 30 minutes
                  </p>
                  <p className="text-[#515154] text-sm">
                    On WhatsApp during hours
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Site visit</p>
                  <p className="mt-3 text-lg font-medium text-[#1d1d1f]">
                    24 – 48 hours
                  </p>
                  <p className="text-[#515154] text-sm">
                    Across Chennai &amp; nearby
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
