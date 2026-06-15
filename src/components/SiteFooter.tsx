import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company, whatsappUrl, products } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#fafafa] border-t border-[#e5e5ea] text-[#1d1d1f]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-12">
        {/* Big CTA */}
        <div className="mb-20">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="display mt-4 text-5xl sm:text-7xl md:text-8xl text-[#1d1d1f] max-w-4xl">
            Strong fences,
            <br />
            <span className="italic font-normal text-[#86868b]">
              built right.
            </span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp"
              className="btn btn-wa"
            >
              WhatsApp for a free quote
            </a>
            <a
              href={`tel:${company.phones[0]}`}
              data-testid="footer-call"
              className="btn btn-ghost"
            >
              <Phone size={15} /> Call us
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-4 border-t border-[#e5e5ea] pt-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1d1d1f] text-white text-[10px] font-semibold tracking-wider">
                NF
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight">
                {company.name}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#515154] max-w-md">
              {company.tagline} Residential, commercial and industrial fencing
              supply and installation across {company.area}.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-[#515154]">
              {company.displayPhones.map((p, i) => (
                <a
                  key={p}
                  href={`tel:${company.phones[i]}`}
                  className="flex items-center gap-2.5 hover:text-[#1d1d1f]"
                >
                  <Phone size={13} className="text-[#86868b]" />
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-[#1d1d1f]"
              >
                <Mail size={13} className="text-[#86868b]" />
                {company.email}
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-[#86868b]" />
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow !text-[0.65rem]">Sitemap</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#515154] hover:text-[#1d1d1f]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-[0.65rem]">Top Products</p>
            <ul className="mt-5 space-y-3 text-sm">
              {products.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-[#515154] hover:text-[#1d1d1f]"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e5e5ea] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Crafted with care in Chennai · navifencing.in</p>
        </div>
      </div>
    </footer>
  );
}
