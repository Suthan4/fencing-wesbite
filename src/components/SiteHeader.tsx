import Image from "next/image";
import Link from "next/link";
import { services, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#dfe8d4] bg-[#f8faf7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Navi Fencing logo"
            width={54}
            height={54}
            priority
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#314a26]">
            Navi Fencing
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-semibold text-[#314a26] lg:flex"
        >
          <Link href="/services">Services</Link>
          {services.slice(0, 3).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.navTitle}
            </Link>
          ))}
          <Link href="/products">Products</Link>
          <Link href="/materials">Materials</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Navi Fencing on WhatsApp"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#25d366] text-white shadow-lg shadow-[#25d366]/20 transition hover:scale-105"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-6 w-6 fill-current"
            >
              <path d="M16.02 4.8A11.09 11.09 0 0 0 6.6 21.74L5.2 27l5.38-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.04 9.04 0 0 1 7.62 13.9 9.01 9.01 0 0 1-11.98 3.01l-.39-.23-3.18.8.82-3.09-.25-.4A9.04 9.04 0 0 1 16.02 6.85Zm-4.3 4.8c-.2 0-.52.08-.8.38-.28.31-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.08 3.34 5.14 4.55 2.54 1 3.06.8 3.61.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.25-.58-.5-.5-.68-.51h-.58Z" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="hidden rounded-md bg-[#314a26] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#314a26]/15 transition hover:bg-[#24371c] sm:inline-flex"
          >
            Get quote
          </Link>
        </div>
      </div>
    </header>
  );
}
