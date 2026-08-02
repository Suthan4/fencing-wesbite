"use client";

import { Phone } from "lucide-react";
import { company } from "@/lib/site";

export function FloatingPhone() {
  return (
    <a
      href={`tel:${company.phones[0]}`}
      aria-label="Call Navi Fencing"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-[calc(100%+8px)] z-40 grid h-14 w-14 place-items-center rounded-2xl bg-[#8E8E93] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] hover:scale-110 transition-transform duration-300"
    >
      <Phone className="h-7 w-7" />
    </a>
  );
}
