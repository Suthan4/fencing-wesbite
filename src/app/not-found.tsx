// src/app/not-found.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { company, whatsappUrl } from "@/lib/site";
import { getDistricts } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Page Not Found — Navi Fencing",
  description:
    "The page you're looking for doesn't exist. Explore our fencing products, locations across Tamil Nadu, or get in touch.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const popularDistricts = getDistricts().slice(0, 8);

  return (
    <>
      <SiteHeader />

      <main className="bg-white">
        <section className="pt-[140px] sm:pt-[170px] pb-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <svg
              viewBox="0 0 400 140"
              className="mx-auto w-full max-w-sm h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* ground line */}
              <line
                x1="10"
                y1="120"
                x2="390"
                y2="120"
                stroke="#e5e5ea"
                strokeWidth="2"
              />

              {/* left fence section */}
              {[20, 45, 70, 95].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="35"
                  x2={x}
                  y2="120"
                  stroke="#c7c7cc"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              ))}
              <line
                x1="15"
                y1="55"
                x2="100"
                y2="45"
                stroke="#c7c7cc"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="15"
                y1="85"
                x2="100"
                y2="78"
                stroke="#c7c7cc"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* gap in the middle — the "missing panel" */}
              <text
                x="200"
                y="80"
                textAnchor="middle"
                fontFamily="var(--font-fraunces, serif)"
                fontStyle="italic"
                fontSize="46"
                fill="#1d1d1f"
              >
                404
              </text>

              {/* right fence section */}
              {[305, 330, 355, 380].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1="35"
                  x2={x}
                  y2="120"
                  stroke="#c7c7cc"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              ))}
              <line
                x1="300"
                y1="45"
                x2="385"
                y2="55"
                stroke="#c7c7cc"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <line
                x1="300"
                y1="78"
                x2="385"
                y2="85"
                stroke="#c7c7cc"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* a fallen post, lying across the gap */}
              <line
                x1="150"
                y1="112"
                x2="250"
                y2="106"
                stroke="#25d366"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            <p className="eyebrow mt-2">Error 404</p>
            <h1 className="display mt-5 text-6xl sm:text-8xl text-[#1d1d1f]">
              Page not
              <br />
              <span className="italic font-normal text-[#86868b]">found.</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg text-[#515154] leading-relaxed max-w-xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or may have
              moved. Let&apos;s get you back on track.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link
                href="/"
                className="btn bg-[#1d1d1f] text-white hover:bg-black"
              >
                Back to Home <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="btn border border-[#e5e5ea] text-[#1d1d1f] hover:bg-[#f5f5f7]"
              >
                <Search size={16} /> View Products
              </Link>
              <a
                href={whatsappUrl(
                  "Hi Navi Fencing, I couldn't find what I was looking for on your website — can you help?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>

            <div className="mt-16 pt-10 border-t border-[#e5e5ea]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b] mb-5">
                Or find your district
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {popularDistricts.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/${d.slug}`}
                    className="text-sm bg-[#f5f5f7] border border-[#e5e5ea] rounded-full px-4 py-2 text-[#515154] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                  >
                    {d.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="text-sm border border-[#1d1d1f] rounded-full px-4 py-2 text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white transition-colors"
                >
                  All districts <ArrowRight size={12} className="inline ml-1" />
                </Link>
              </div>
            </div>

            <p className="mt-14 text-sm text-[#86868b]">
              Need help right away? Call us at{" "}
              <a
                href={`tel:${company.phones[0]}`}
                className="text-[#1d1d1f] underline"
              >
                {company.displayPhones[0]}
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
