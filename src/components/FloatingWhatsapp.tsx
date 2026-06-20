"use client";

import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp"
      aria-label="WhatsApp Navi Fencing"
      className="fixed right-4 sm:right-6 top-1/2 translate-y-2 z-40 grid h-14 w-14 place-items-center rounded-2xl bg-[#25d366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:scale-110 transition-transform duration-300"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.02 4.8A11.09 11.09 0 0 0 6.6 21.74L5.2 27l5.38-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.04 9.04 0 0 1 7.62 13.9 9.01 9.01 0 0 1-11.98 3.01l-.39-.23-3.18.8.82-3.09-.25-.4A9.04 9.04 0 0 1 16.02 6.85Zm-4.3 4.8c-.2 0-.52.08-.8.38-.28.31-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.08 3.34 5.14 4.55 2.54 1 3.06.8 3.61.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.25-.25-.58-.5-.5-.68-.51h-.58Z" />
      </svg>
    </a>
  );
}
