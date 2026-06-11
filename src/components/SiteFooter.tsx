import Link from "next/link";
import { company, materials, products, services, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#172118] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b6db6b]">
            {company.name}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            SEO-ready fencing pages for residential installation, commercial
            fencing, repairs, gates, and material-specific search intent.
          </p>
          <p className="mt-5 text-white/75">
            <a href={`tel:${company.phone}`}>{company.displayPhone}</a>
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md bg-[#25d366] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
          >
            WhatsApp quote
          </a>
        </div>
        <div>
          <h2 className="font-bold">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Products</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {products.slice(0, 8).map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>{product.title}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="/products"
            className="mt-4 inline-flex text-sm font-bold text-[#b6db6b]"
          >
            View all products
          </Link>
        </div>
        <div className="md:col-span-4">
          <h2 className="font-bold">Materials</h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/70">
            {materials.map((material) => (
              <li key={material.slug}>
                <Link href={`/materials/${material.slug}`}>
                  {material.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
