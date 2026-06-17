"use client";

import { Phone } from "lucide-react";

export function FloatingPhone() {
  return (
    <a
      href="tel:+919176337014"
      aria-label="Call Navi Fencing"
      className="fixed bottom-6 left-8 z-40 grid h-14 w-14 place-items-center rounded-full bg-black text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] hover:scale-110 transition-transform duration-300"
    >
      <Phone className="h-7 w-7" />

      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-black animate-ping opacity-30" />
    </a>
  );
}
