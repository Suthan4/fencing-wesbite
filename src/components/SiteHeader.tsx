"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { services, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#080c08]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-8 w-8">
              <Image
                src="/logo.png"
                alt="Navi Fencing"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="text-[0.72rem] font-black uppercase tracking-[0.22em] text-white">
              Navi Fencing
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            <Link href="/services" className="nav-link animated-underline">
              Services
            </Link>
            {services.slice(0, 2).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="nav-link animated-underline"
              >
                {s.navTitle}
              </Link>
            ))}
            <Link href="/products" className="nav-link animated-underline">
              Products
            </Link>
            <Link href="/materials" className="nav-link animated-underline">
              Materials
            </Link>
            <Link href="/about" className="nav-link animated-underline">
              About
            </Link>
            <Link href="/contact" className="nav-link animated-underline">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Navi Fencing"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg wa-pulse"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-5 w-5 fill-current"
                aria-hidden="true"
              >
                <path d="M16.02 4.8A11.09 11.09 0 0 0 6.6 21.74L5.2 27l5.38-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.04 9.04 0 0 1 7.62 13.9 9.01 9.01 0 0 1-11.98 3.01l-.39-.23-3.18.8.82-3.09-.25-.4A9.04 9.04 0 0 1 16.02 6.85Zm-4.3 4.8c-.2 0-.52.08-.8.38-.28.31-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.08 3.34 5.14 4.55 2.54 1 3.06.8 3.61.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.25-.58-.5-.5-.68-.51h-.58Z" />
              </svg>
            </a>
            <a
              href="tel:+919176337014"
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              +91 91763 37014
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex h-9 items-center gap-2 rounded-full bg-[#a8e63d] px-5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#080c08] transition hover:bg-[#bdf250]"
            >
              Get Quote
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#080c08]/98 backdrop-blur-2xl pt-[60px] lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-1 p-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              {
                href: "/services/residential-fence-installation",
                label: "Residential Fencing",
              },
              {
                href: "/services/commercial-fencing",
                label: "Commercial Fencing",
              },
              { href: "/services/fence-repair", label: "Fence Repair" },
              { href: "/services/custom-gates", label: "Custom Gates" },
              { href: "/products", label: "Products" },
              { href: "/materials", label: "Materials" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl font-semibold text-white/80 hover:text-white border-b border-white/[0.06] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center bg-[#25d366] text-white hover:bg-[#20be5a]"
              >
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+919176337014"
                className="text-center py-3 text-white/60 text-sm"
              >
                +91 91763 37014
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
