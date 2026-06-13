"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          delay,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%", // Increased threshold to ensure visibility
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  );
}
