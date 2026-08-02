import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsapp";
import { FloatingPhone } from "@/components/FloatingPhone";
import { getDistricts, locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations — All Tamil Nadu Districts | Navi Fencing",
  description:
    "Navi Fencing serves all 38 Tamil Nadu districts — Chennai, Coimbatore, Madurai, Tiruppur, Salem, Trichy and more, with local area coverage.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const districts = getDistricts();

  return (
    <>
      <SiteHeader />
      <GsapAnimations />
      <FloatingWhatsApp />
      <FloatingPhone />

      <main className="bg-white">
        <section className="pt-[110px] sm:pt-[130px] pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              className="flex items-center gap-2 text-xs text-[#86868b]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#1d1d1f]">
                Home
              </Link>
              <ArrowRight size={11} />
              <span className="text-[#1d1d1f]">Locations</span>
            </nav>
            <p className="eyebrow mt-8">Where we work</p>
            <h1 className="display mt-5 text-5xl sm:text-7xl text-[#1d1d1f] max-w-3xl">
              Every district.
              <br />
              <span className="italic font-normal text-[#86868b]">
                All of Tamil Nadu.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#515154] leading-relaxed">
              Navi Fencing supplies and installs fencing across all 38 Tamil
              Nadu districts. Pick your district below for local details, or a
              local area if you&apos;re in Chennai, Coimbatore or Tiruppur.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {districts.map((d) => {
                const areas = locations.filter(
                  (l) => l.districtSlug === d.slug && l.kind === "area",
                );
                return (
                  <div key={d.slug} className="border-t border-[#e5e5ea] pt-6">
                    <Link
                      href={`/${d.slug}`}
                      className="text-lg font-semibold tracking-tight text-[#1d1d1f] hover:underline"
                    >
                      {d.name}
                    </Link>
                    {areas.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                        {areas.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${a.slug}`}
                            className="text-sm text-[#86868b] hover:text-[#1d1d1f] hover:underline"
                          >
                            {a.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
