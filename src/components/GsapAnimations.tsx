"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.from("[data-fence-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.out",
        delay: 0.35,
      });

      gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((item) => {
        gsap.from(item, {
          y: 34,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true,
          },
        });
      });

      gsap.to("[data-rail]", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-rail-wrap]",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
