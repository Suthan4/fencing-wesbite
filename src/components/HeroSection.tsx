// "use client";

// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { MessageCircle, ArrowRight } from "lucide-react";
// import { whatsappUrl } from "@/lib/site";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const stats = [
//   { value: "500+", label: "Installs" },
//   { value: "12yrs", label: "Experience" },
//   { value: "4.9★", label: "Rating" },
// ];

// export function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const eyebrowRef = useRef<HTMLSpanElement>(null);
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   const subRef = useRef<HTMLParagraphElement>(null);
//   const actionsRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const scrollCueRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const mm = gsap.matchMedia();

//     mm.add("(prefers-reduced-motion: no-preference)", () => {
//       const ctx = gsap.context(() => {
//         // Video parallax on scroll
//         if (videoRef.current) {
//           gsap.to(videoRef.current, {
//             yPercent: 18,
//             ease: "none",
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top top",
//               end: "bottom top",
//               scrub: true,
//             },
//           });
//         }

//         // Overlay darkens slightly as you scroll
//         gsap.to(overlayRef.current, {
//           opacity: 0.85,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "60% top",
//             scrub: true,
//           },
//         });

//         // Entrance timeline
//         const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//         tl.fromTo(
//           eyebrowRef.current,
//           { opacity: 0, y: 10, filter: "blur(6px)" },
//           { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
//           0.3,
//         );

//         const split = new SplitText(headlineRef.current, {
//           type: "lines,words",
//         });
//         tl.fromTo(
//           split.words,
//           { opacity: 0, y: 40, rotateX: -18 },
//           {
//             opacity: 1,
//             y: 0,
//             rotateX: 0,
//             duration: 0.72,
//             stagger: 0.028,
//             ease: "power4.out",
//             transformOrigin: "0% 50% -30px",
//           },
//           "-=0.3",
//         );

//         tl.fromTo(
//           subRef.current,
//           { opacity: 0, y: 14 },
//           { opacity: 1, y: 0, duration: 0.5 },
//           "-=0.25",
//         );

//         tl.fromTo(
//           actionsRef.current?.children ?? [],
//           { opacity: 0, y: 12, scale: 0.95 },
//           { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.09 },
//           "-=0.2",
//         );

//         tl.fromTo(
//           statsRef.current?.children ?? [],
//           { opacity: 0, y: 8 },
//           { opacity: 1, y: 0, duration: 0.35, stagger: 0.08 },
//           "-=0.15",
//         );

//         tl.fromTo(
//           scrollCueRef.current,
//           { opacity: 0 },
//           { opacity: 0.45, duration: 0.6 },
//           "-=0.1",
//         );

//         // Scroll cue bounce loop
//         gsap.to(scrollCueRef.current, {
//           y: 7,
//           duration: 1.1,
//           ease: "sine.inOut",
//           yoyo: true,
//           repeat: -1,
//           delay: 2,
//         });
//       }, sectionRef);

//       return () => ctx.revert();
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative flex items-center justify-center overflow-hidden"
//       style={{ height: "100svh", minHeight: 600 }}
//     >
//       {/* ── Video background ── */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         className="absolute inset-0 h-full w-full object-cover"
//         style={{ transformOrigin: "center center" }}
//       >
//         <source src="/navi-fencing-video.mp4" type="video/mp4" />
//       </video>

//       {/* ── Overlay ── */}
//       <div
//         ref={overlayRef}
//         aria-hidden="true"
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.88) 100%)",
//           opacity: 0.78,
//         }}
//       />

//       {/* ── Subtle green tint ── */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(34,197,94,0.07) 0%, transparent 70%)",
//         }}
//       />

//       {/* ── Content ── */}
//       <div
//         className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center"
//         style={{ paddingBottom: "6vh" }}
//       >
//         {/* Eyebrow */}
//         <span
//           ref={eyebrowRef}
//           className="mb-5 inline-flex items-center gap-2 rounded-full opacity-0"
//           style={{
//             padding: "5px 14px",
//             background: "rgba(34,197,94,0.12)",
//             border: "0.5px solid rgba(34,197,94,0.28)",
//             fontSize: 11,
//             fontWeight: 600,
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             color: "#4ade80",
//           }}
//         >
//           <span
//             className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0"
//             style={{ boxShadow: "0 0 0 3px rgba(74,222,128,0.25)" }}
//           />
//           Fence Installation · Repair · Custom Gates
//         </span>

//         {/* Headline */}
//         <h1
//           ref={headlineRef}
//           className="m-0 text-white"
//           style={{
//             fontSize: "clamp(40px, 6.5vw, 84px)",
//             fontWeight: 700,
//             lineHeight: 1.02,
//             letterSpacing: "-0.045em",
//             fontFamily:
//               "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif",
//             perspective: "1000px",
//           }}
//         >
//           Built-right fencing for{" "}
//           <em
//             style={{
//               fontStyle: "normal",
//               color: "#4ade80",
//             }}
//           >
//             privacy,
//           </em>{" "}
//           security,{" "}
//           <span
//             style={{
//               WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
//               color: "transparent",
//             }}
//           >
//             and curb appeal.
//           </span>
//         </h1>

//         {/* Sub */}
//         <p
//           ref={subRef}
//           className="mx-auto mt-5 max-w-[480px] text-white/60 opacity-0"
//           style={{
//             fontSize: "clamp(15px, 1.8vw, 17px)",
//             lineHeight: 1.65,
//             letterSpacing: "-0.01em",
//             fontFamily:
//               "-apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',sans-serif",
//           }}
//         >
//           Navi Fencing helps homeowners and businesses plan, choose, and install
//           the right fence — built carefully, finished cleanly.
//         </p>

//         {/* CTAs */}
//         <div
//           ref={actionsRef}
//           className="mt-8 flex flex-wrap items-center justify-center gap-3"
//         >
//           <a
//             href={whatsappUrl()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 rounded-full font-semibold text-white no-underline"
//             style={{
//               padding: "12px 26px",
//               fontSize: 14,
//               letterSpacing: "-0.01em",
//               background: "#22c55e",
//               boxShadow: "0 2px 20px rgba(34,197,94,0.4)",
//               transition:
//                 "transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
//               (e.currentTarget as HTMLElement).style.boxShadow =
//                 "0 6px 28px rgba(34,197,94,0.55)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLElement).style.boxShadow =
//                 "0 2px 20px rgba(34,197,94,0.4)";
//             }}
//           >
//             <MessageCircle size={14} strokeWidth={2.2} aria-hidden="true" />
//             WhatsApp Quote
//           </a>

//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 rounded-full font-semibold text-white no-underline"
//             style={{
//               padding: "11px 26px",
//               fontSize: 14,
//               letterSpacing: "-0.01em",
//               border: "0.5px solid rgba(255,255,255,0.22)",
//               background: "rgba(255,255,255,0.08)",
//               backdropFilter: "blur(12px)",
//               WebkitBackdropFilter: "blur(12px)",
//               transition:
//                 "transform 0.22s cubic-bezier(0.16,1,0.3,1), background 0.18s",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
//               (e.currentTarget as HTMLElement).style.background =
//                 "rgba(255,255,255,0.14)";
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLElement).style.transform = "scale(1)";
//               (e.currentTarget as HTMLElement).style.background =
//                 "rgba(255,255,255,0.08)";
//             }}
//           >
//             View Services
//             <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
//           </Link>
//         </div>

//         {/* Stats */}
//         <div ref={statsRef} className="mt-10 flex gap-10">
//           {stats.map(({ value, label }, i) => (
//             <div key={label} className="text-center">
//               {i > 0 && (
//                 <div
//                   aria-hidden="true"
//                   className="absolute -left-5 top-1/2 -translate-y-1/2"
//                   style={{
//                     width: 1,
//                     height: 24,
//                     background: "rgba(255,255,255,0.12)",
//                   }}
//                 />
//               )}
//               <div
//                 className="font-bold text-white"
//                 style={{ fontSize: 22, letterSpacing: "-0.045em" }}
//               >
//                 {value}
//               </div>
//               <div
//                 className="text-white/40"
//                 style={{
//                   fontSize: 10.5,
//                   letterSpacing: "0.04em",
//                   textTransform: "uppercase",
//                   marginTop: 2,
//                 }}
//               >
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Scroll cue ── */}
//       <div
//         ref={scrollCueRef}
//         aria-hidden="true"
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0"
//       >
//         <span
//           className="text-white/40"
//           style={{
//             fontSize: 9.5,
//             letterSpacing: "0.12em",
//             textTransform: "uppercase",
//           }}
//         >
//           Scroll
//         </span>
//         <svg
//           width="16"
//           height="22"
//           viewBox="0 0 16 22"
//           fill="none"
//           className="text-white/30"
//         >
//           <rect
//             x="0.5"
//             y="0.5"
//             width="15"
//             height="21"
//             rx="7.5"
//             stroke="currentColor"
//           />
//           <rect
//             className="scroll-dot"
//             x="6.5"
//             y="4"
//             width="3"
//             height="5"
//             rx="1.5"
//             fill="currentColor"
//             style={{ opacity: 0.6 }}
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, SplitText);

const stats = [
  { value: "500+", label: "Installs" },
  { value: "12 yrs", label: "Experience" },
  { value: "4.9★", label: "Rating" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Video parallax
        gsap.to(videoRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Entrance
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 12, filter: "blur(5px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55 },
          0.35,
        );

        const split = new SplitText(headlineRef.current, {
          type: "lines,words",
        });
        tl.fromTo(
          split.words,
          { opacity: 0, y: 38, rotateX: -16 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.026,
            ease: "power4.out",
            transformOrigin: "0% 50% -24px",
          },
          "-=0.28",
        );

        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.48 },
          "-=0.22",
        );

        tl.fromTo(
          actionsRef.current?.children ?? [],
          { opacity: 0, y: 10, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.42, stagger: 0.09 },
          "-=0.18",
        );

        tl.fromTo(
          statsRef.current?.children ?? [],
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.32, stagger: 0.08 },
          "-=0.12",
        );

        tl.fromTo(
          scrollCueRef.current,
          { opacity: 0 },
          { opacity: 0.45, duration: 0.6 },
        );

        // Scroll cue bounce
        gsap.to(scrollCueRef.current, {
          y: 7,
          duration: 1.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.2,
        });
      }, sectionRef);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: 580 }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transformOrigin: "center center" }}
      >
        <source src="/navi-fencing-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,rgba(0,0,0,0.38) 0%,rgba(0,0,0,0.6) 40%,rgba(0,0,0,0.78) 100%)",
        }}
      />
      {/* Green ambient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 85%,rgba(34,197,94,0.09) 0%,transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center px-6 text-center"
        style={{ paddingBottom: "5vh" }}
      >
        {/* Eyebrow */}
        <span
          ref={eyebrowRef}
          className="mb-5 inline-flex items-center gap-2 rounded-full"
          style={{
            padding: "5px 14px",
            background: "rgba(34,197,94,0.12)",
            border: "0.5px solid rgba(34,197,94,0.3)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4ade80",
            opacity: 0,
          }}
        >
          <span
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400"
            style={{ boxShadow: "0 0 0 3px rgba(74,222,128,0.22)" }}
          />
          Fence Installation · Repair · Custom Gates
        </span>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="m-0 text-white"
          style={{
            fontSize: "clamp(38px,6.2vw,80px)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif",
            perspective: "1000px",
          }}
        >
          Built-right fencing for{" "}
          <em style={{ fontStyle: "normal", color: "#4ade80" }}>privacy,</em>{" "}
          security,{" "}
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.4)",
              color: "transparent",
            }}
          >
            and curb appeal.
          </span>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="mx-auto mt-5 max-w-[460px] text-white/55"
          style={{
            fontSize: "clamp(14px,1.7vw,16.5px)",
            lineHeight: 1.65,
            letterSpacing: "-0.01em",
            opacity: 0,
          }}
        >
          Navi Fencing helps homeowners and businesses plan, choose, and install
          the right fence — built carefully, finished cleanly.
        </p>

        {/* CTAs */}
        <div
          ref={actionsRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-white no-underline"
            style={{
              padding: "12px 26px",
              fontSize: 14,
              letterSpacing: "-0.01em",
              background: "#22c55e",
              boxShadow: "0 2px 20px rgba(34,197,94,0.4)",
              transition:
                "transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 28px rgba(34,197,94,0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 20px rgba(34,197,94,0.4)";
            }}
          >
            <MessageCircle size={14} strokeWidth={2.2} aria-hidden="true" />
            WhatsApp Quote
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-white no-underline"
            style={{
              padding: "11px 26px",
              fontSize: 14,
              letterSpacing: "-0.01em",
              border: "0.5px solid rgba(255,255,255,0.24)",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition:
                "transform 0.22s cubic-bezier(0.16,1,0.3,1), background 0.18s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.16)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.1)";
            }}
          >
            View Services{" "}
            <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-10 flex gap-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-bold text-white"
                style={{ fontSize: 22, letterSpacing: "-0.045em" }}
              >
                {value}
              </div>
              <div
                className="text-white/38"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ opacity: 0 }}
      >
        <span
          className="text-white/35"
          style={{
            fontSize: 9.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          className="text-white/28"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="21"
            rx="7.5"
            stroke="currentColor"
          />
          <rect
            x="6.5"
            y="4"
            width="3"
            height="5"
            rx="1.5"
            fill="currentColor"
            style={{ opacity: 0.55 }}
          />
        </svg>
      </div>
    </section>
  );
}
