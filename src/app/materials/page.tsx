import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import { breadcrumbJsonLd, localBusinessJsonLd, materials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fence Materials",
  description:
    "Compare wood, vinyl, aluminum, and chain link fencing by privacy, maintenance, security, curb appeal, and budget.",
  alternates: {
    canonical: "/materials",
  },
  openGraph: {
    title: "Fence Materials | Navi Fencing",
    description:
      "Material-specific fencing pages for wood, vinyl, aluminum, and chain link search intent.",
    url: "/materials",
  },
};

export default function MaterialsPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Fence Materials", path: "/materials" },
          ]),
        ]}
      />
      <SiteHeader />
      <main>
        <section className="bg-[#172118] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#b6db6b]">
                Fence material guide
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl">
                Material pages that answer what customers actually search.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
                Wood, vinyl, aluminum, and chain link each solve a different
                problem. These pages help customers choose with clarity.
              </p>
            </div>
            <VisualPanel label="Materials" tone="dark" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:px-8 md:grid-cols-2 lg:px-10">
            {materials.map((material) => (
              <article
                key={material.slug}
                className="rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-7"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6f8f2f]">
                  {material.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-bold text-[#172118]">
                  {material.title}
                </h2>
                <p className="mt-4 leading-7 text-[#52604c]">
                  {material.description}
                </p>
                <Link
                  href={`/materials/${material.slug}`}
                  className="mt-6 inline-flex font-bold text-[#314a26] underline"
                >
                  Compare {material.navTitle.toLowerCase()} fencing
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
