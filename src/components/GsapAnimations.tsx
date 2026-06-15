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
      // Scroll progress bar
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

      // Hero entrance — staggered split words
      gsap.from("[data-hero-word]", {
        y: 90,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.06,
        delay: 0.1,
      });
      gsap.from("[data-hero-sub]", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.55,
        ease: "power3.out",
      });
      gsap.from("[data-hero-cta]", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        delay: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Parallax for any [data-parallax] element (relative to its parent)
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.3");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Hero image parallax + scale
      gsap.utils.toArray<HTMLElement>("[data-hero-bg]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.05, yPercent: 0 },
          {
            scale: 1,
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // Reveal on scroll
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Stagger children
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((parent) => {
        const items = parent.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: parent,
            start: "top 82%",
            once: true,
          },
        });
      });

      // Pinned horizontal product scroll (Apple-style)
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

      // Card stack scroll — pin and reveal cards on top of each other
      const stackContainer =
        document.querySelector<HTMLElement>("[data-card-stack]");
      if (stackContainer) {
        const cards =
          stackContainer.querySelectorAll<HTMLElement>("[data-stack-card]");
        cards.forEach((card, i) => {
          if (i === 0) return;
          gsap.fromTo(
            card,
            { y: 80, scale: 0.94, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
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

      // Counter animation
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = target % 1 !== 0 ? 1 : 0;
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate() {
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
