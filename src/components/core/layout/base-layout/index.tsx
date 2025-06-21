"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function BaseLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname.includes("/resume");

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      <section className="grid min-h-[100dvh] grid-cols-[1rem_minmax(0,80rem)_1rem] justify-center md:-mx-4 md:grid-cols-[2.5rem_minmax(0,100rem)_2.5rem] lg:mx-0">
        <div className="border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/50" />
        <section className="ml-[0.5rem] h-fit gap-[4rem] self-center p-0 md:ml-[2rem] lg:gap-[10rem]">
          {children}
        </section>
        {isHome && (
          <div
            className={cn(
              "border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/50",
            )}
          />
        )}
      </section>
    </main>
  );
}
