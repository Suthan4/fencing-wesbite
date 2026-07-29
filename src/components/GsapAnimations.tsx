"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // ------------------------------------------------------------------
      // Scroll progress bar
      // ------------------------------------------------------------------
      const bar = document.getElementById("scroll-progress");

      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      if (prefersReduced) return;

      // ============================================================
      // HERO
      // ============================================================

      // Hero words
      gsap.set("[data-hero-word]", {
        opacity: 0,
        y: 30,
        willChange: "transform, opacity",
      });

      gsap.to("[data-hero-word]", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.05,
        clearProps: "willChange",
      });

      // Hero subtitle
      gsap.set("[data-hero-sub]", {
        opacity: 0,
        y: 18,
        willChange: "transform, opacity",
      });

      gsap.to("[data-hero-sub]", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power2.out",
        clearProps: "willChange",
      });

      // Hero buttons
      gsap.set("[data-hero-cta]", {
        opacity: 0,
        y: 15,
        willChange: "transform, opacity",
      });

      gsap.to("[data-hero-cta]", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.55,
        ease: "power2.out",
        clearProps: "willChange",
      });

      // ============================================================
      // Hero image parallax
      // ============================================================

      gsap.utils.toArray<HTMLElement>("[data-hero-bg]").forEach((el) => {
        gsap.to(el, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // ============================================================
      // Generic parallax
      // ============================================================

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax ?? 0.3);

        gsap.to(el, {
          yPercent: -(speed * 100),
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // ============================================================
      // Reveal sections
      // ============================================================

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      // ============================================================
      // Stagger items
      // ============================================================

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((parent) => {
        const items = parent.querySelectorAll("[data-stagger-item]");

        if (!items.length) return;

        gsap.from(items, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: parent,
            start: "top 82%",
            once: true,
          },
        });
      });

      // ============================================================
      // Horizontal product scroll
      // ============================================================

      const hScroll = document.querySelector<HTMLElement>("[data-h-scroll]");
      const hTrack = document.querySelector<HTMLElement>("[data-h-track]");

      if (hScroll && hTrack && window.innerWidth >= 900) {
        const distance = () => hTrack.scrollWidth - window.innerWidth + 120;

        gsap.to(hTrack, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: hScroll,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // ============================================================
      // Card stack
      // ============================================================

      const stack = document.querySelector<HTMLElement>("[data-card-stack]");

      if (stack) {
        const cards = stack.querySelectorAll<HTMLElement>("[data-stack-card]");

        cards.forEach((card, index) => {
          if (index === 0) return;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        });
      }

      // ============================================================
      // Counter
      // ============================================================

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || "";
        const decimals = target % 1 ? 1 : 0;

        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate() {
            el.textContent = value.current.toFixed(decimals) + suffix;
          },
        });
      });
    }, document.body);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
