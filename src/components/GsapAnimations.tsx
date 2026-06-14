"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scroll progress bar
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        gsap.to(progressBar, {
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

      // Hero stagger reveal
      gsap.from("[data-hero-word]", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.1,
      });

      gsap.from("[data-hero-sub]", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from("[data-hero-cta]", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.85,
      });

      // Hero visual parallax
      gsap.to("[data-hero-visual]", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-section]",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Apple-style pinned text sections
      const pinSections = gsap.utils.toArray<HTMLElement>("[data-pin-section]");
      pinSections.forEach((section) => {
        const items = section.querySelectorAll("[data-pin-item]");
        if (items.length === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${items.length * 400}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        items.forEach((item, i) => {
          if (i > 0) {
            tl.from(item, { opacity: 0, y: 40, duration: 0.5 }, `+=0.3`);
          }
        });
      });

      // Scroll reveal elements
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Staggered grid reveals
      gsap.utils
        .toArray<HTMLElement>("[data-stagger-parent]")
        .forEach((parent) => {
          const children = parent.querySelectorAll("[data-stagger-child]");
          gsap.from(children, {
            y: 60,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              once: true,
            },
          });
        });

      // Horizontal scroll for products
      const hTrack = document.querySelector("[data-h-track]") as HTMLElement;
      if (hTrack) {
        const wrapper = hTrack.parentElement;
        if (wrapper) {
          const totalWidth = hTrack.scrollWidth - wrapper.clientWidth;
          gsap.to(hTrack, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper.parentElement,
              start: "top top",
              end: `+=${totalWidth + 600}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });
        }
      }

      // Parallax sections
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.3");
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Counter animation
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseInt(el.dataset.count || "0", 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
          onUpdate() {
            el.textContent =
              Math.round(obj.val).toString() + (el.dataset.suffix || "");
          },
        });
      });

      // Marquee ticker
      const ticker = document.querySelector("[data-ticker]") as HTMLElement;
      if (ticker) {
        const clone = ticker.cloneNode(true) as HTMLElement;
        ticker.parentElement?.appendChild(clone);
        gsap.to("[data-ticker]", {
          xPercent: -100,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            xPercent: gsap.utils.wrap(-100, 0),
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
