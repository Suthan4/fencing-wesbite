import type { Faq } from "@/lib/site";

/**
 * Renders a FAQ accordion. Pair with `faqJsonLd(faqs)` inside a <JsonLd />
 * on the same page so the same answer-first copy backs both what a human
 * sees and what an AI/search answer engine can extract (FAQPage schema).
 */
export function FaqSection({
  faqs,
  eyebrow = "FAQ",
  title,
  className = "bg-white py-24 border-t border-[#e5e5ea]",
}: {
  faqs: Faq[];
  eyebrow?: string;
  title: React.ReactNode;
  className?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className={className}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl text-[#1d1d1f]">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-[#e5e5ea] border-y border-[#e5e5ea]">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group py-6 cursor-pointer"
              data-reveal
            >
              <summary className="flex items-center justify-between list-none gap-6">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#1d1d1f]">
                  {f.question}
                </h3>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e5e5ea] text-[#1d1d1f] transition-transform group-open:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 14 14">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-[#515154] text-base leading-relaxed max-w-3xl">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
