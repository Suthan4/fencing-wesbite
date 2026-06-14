import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  company,
  materials,
  products,
  services,
  whatsappUrl,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#050805] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top strip */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 border-b border-white/[0.07]">
          <div className="lg:col-span-2">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#a8e63d]">
              {company.name}
            </p>
            <p className="mt-4 text-2xl font-semibold text-white/90 leading-snug max-w-sm">
              Secure Boundaries.
              <br />
              Modern Fencing.
              <br />
              Expert Installation.
            </p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Serving homeowners, businesses, and industries across Chennai and
              Tamil Nadu with durable fencing solutions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {company.displayPhones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${company.phones[i]}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#a8e63d]" />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#a8e63d]" />
                {company.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={14} className="text-[#a8e63d] mt-0.5 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M16.02 4.8A11.09 11.09 0 0 0 6.6 21.74L5.2 27l5.38-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.04 9.04 0 0 1 7.62 13.9 9.01 9.01 0 0 1-11.98 3.01l-.39-.23-3.18.8.82-3.09-.25-.4A9.04 9.04 0 0 1 16.02 6.85Zm-4.3 4.8c-.2 0-.52.08-.8.38-.28.31-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.08 3.34 5.14 4.55 2.54 1 3.06.8 3.61.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.25-.58-.5-.5-.68-.51h-.58Z" />
              </svg>
              WhatsApp Quote
            </a>
          </div>

          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors animated-underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#a8e63d] hover:text-[#bdf250] transition-colors"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
              Products
            </p>
            <ul className="space-y-3">
              {products.slice(0, 9).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors animated-underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm font-semibold text-[#a8e63d] hover:text-[#bdf250] transition-colors"
                >
                  View all 18 →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Materials row */}
        <div className="py-8 border-b border-white/[0.07]">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">
            Materials
          </p>
          <div className="flex flex-wrap gap-3">
            {materials.map((m) => (
              <Link
                key={m.slug}
                href={`/materials/${m.slug}`}
                className="px-4 py-2 rounded-full border border-white/[0.1] text-sm text-white/60 hover:border-[#a8e63d] hover:text-[#a8e63d] transition-all"
              >
                {m.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-white/30">
          <p>
            © {new Date().getFullYear()} Navi Fencing. All rights reserved.
            Chennai, Tamil Nadu, India.
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="hover:text-white/60 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-white/60 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-white/60 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
