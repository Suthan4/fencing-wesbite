"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        data-testid="site-header"
        className="fixed top-0 inset-x-0 z-50 glass-nav"
      >
        <div className="mx-auto flex h-[52px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            data-testid="nav-logo"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Navi Fencing Logo"
              width={50}
              height={50}
              className="h-20 w-20 object-contain"
              priority
            />
            <span className="text-[0.95rem] font-semibold tracking-tight text-[#1d1d1f]">
              Navi Fencing
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className="text-[0.82rem] font-medium text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919176337014"
              data-testid="header-call"
              className="hidden sm:inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f]"
            >
              <Phone size={13} />
              +91 91763 37014
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp"
              className="btn btn-primary !py-2 !px-4 !text-[0.78rem]"
            >
              Get Quote
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-[#f5f5f7]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 z-40 bg-white pt-[52px] md:hidden"
        >
          <nav className="flex flex-col px-6 pt-6 pb-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                className="border-b border-[#e5e5ea] py-5 text-2xl font-semibold tracking-tight text-[#1d1d1f]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-whatsapp"
              className="btn btn-wa mt-8 w-full"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919094909918"
              data-testid="mobile-call"
              className="btn btn-ghost mt-3 w-full"
            >
              Call +91 90949 09918
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
