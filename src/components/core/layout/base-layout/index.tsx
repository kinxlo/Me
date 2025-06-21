"use client";

import gsap from "@/lib/animation/gsap/init";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: isTouchDevice() ? 0.8 : 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <main className={`relative max-w-screen overflow-hidden`}>
      <section className="container mx-auto px-4 md:px-10 xl:px-0">{children}</section>
    </main>
  );
}
