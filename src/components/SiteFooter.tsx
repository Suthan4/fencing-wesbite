import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { company, whatsappUrl, products } from "@/lib/site";

// Two branch locations.
// If you'd rather keep this data in lib/site.ts (e.g. company.branches),
// move this array there and import it instead — the rest of this file
// will work unchanged as long as the shape matches.
const branches = [
  {
    label: "Elavadi Branch",
    address: "Elavadi, Chinnasalem Taluk, Kallakurichi Dt, Tamil Nadu 606201",
    mapsQuery: "Elavadi, Chinnasalem, Kallakurichi, Tamil Nadu 606201",
  },
  {
    label: "Avinashi Branch",
    address: "Avinashi, Tiruppur Dt, Tamil Nadu 641654",
    mapsQuery: "Avinashi, Tiruppur, Tamil Nadu 641654",
  },
  {
    label: "Erode Branch",
    address: "kempanaickenpalayam, Erode Dt, Tamil Nadu 638452",
    mapsQuery: "G8H2+FVJ Kempanaickenpalayam Tamil Nadu 638503",
  },
];

function mapsUrlFor(query: string) {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );
}

// NOTE: lucide-react no longer ships brand/logo icons (Instagram, YouTube,
// Facebook, etc.) — they were removed due to trademark concerns. Using
// small inline SVGs instead so we don't depend on a brand-icon package.
type IconProps = { size?: number; strokeWidth?: number };

function InstagramIcon({ size = 16, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 16, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/navi_fencing/",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NaviFencing",
    icon: YoutubeIcon,
  },
];

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
              <Image
                src="/logo.png"
                alt="Navi Fencing Logo"
                width={50}
                height={50}
                className="h-20 w-20 object-contain"
                priority
              />
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
            </div>

            {/* Branch addresses */}
            <div className="mt-6 space-y-4">
              {branches.map((b) => (
                <a
                  key={b.label}
                  href={mapsUrlFor(b.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-address-${b.label
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex items-start gap-2.5 text-sm text-[#515154] hover:text-[#1d1d1f]"
                >
                  <MapPin
                    size={13}
                    className="mt-0.5 shrink-0 text-[#86868b]"
                  />
                  <span>
                    <span className="block font-medium text-[#1d1d1f]">
                      {b.label}
                    </span>
                    {b.address}
                  </span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[#e5e5ea] text-[#515154] transition-colors hover:border-[#1d1d1f] hover:text-[#1d1d1f]"
                >
                  <s.icon size={16} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow !text-[0.65rem]">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["Products", "/products"],
                ["Locations", "/locations"],
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Gallery", "/gallery"],
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
