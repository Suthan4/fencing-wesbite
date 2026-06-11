import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualPanel } from "@/components/VisualPanel";
import { breadcrumbJsonLd, company, localBusinessJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a fencing estimate from Navi Fencing for installation, repair, replacement, commercial fencing, or custom gates.",
  alternates: {
    canonical: "/contact",
  },
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
      <main>
        <section className="bg-[#f8faf7] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#6f8f2f]">
                Get a fencing estimate
              </p>
              <h1 className="mt-4 font-serif text-5xl font-semibold leading-[0.98] text-[#172118] sm:text-6xl">
                Tell us what your fence needs to solve.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#52604c]">
                Use this page as the conversion endpoint for organic visitors.
                Swap the placeholder details with the real phone, email, and
                form provider when ready.
              </p>
            </div>
            <VisualPanel label="Quote" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div className="rounded-lg bg-[#314a26] p-8 text-white">
              <h2 className="font-serif text-3xl font-semibold">
                Contact details
              </h2>
              <div className="mt-6 space-y-4 text-white/80">
                <p>
                  Phone:{" "}
                  <a href={`tel:${company.phone}`}>{company.displayPhone}</a>
                </p>
                <p>
                  Email: <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
                <p>Service area: {company.area}</p>
              </div>
            </div>
            <form className="grid gap-4 rounded-lg border border-[#dbe5d1] bg-[#f8faf7] p-8">
              <label className="grid gap-2 text-sm font-bold text-[#314a26]">
                Name
                <input
                  className="h-12 rounded-md border border-[#cddbc1] bg-white px-4 font-normal text-[#172118]"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#314a26]">
                Phone or email
                <input
                  className="h-12 rounded-md border border-[#cddbc1] bg-white px-4 font-normal text-[#172118]"
                  placeholder="Best way to reach you"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#314a26]">
                Project details
                <textarea
                  className="min-h-36 rounded-md border border-[#cddbc1] bg-white px-4 py-3 font-normal text-[#172118]"
                  placeholder="Fence type, approximate length, repair needs, gates, or timeline"
                />
              </label>
              <button
                type="button"
                className="h-12 rounded-md bg-[#314a26] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Placeholder submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
