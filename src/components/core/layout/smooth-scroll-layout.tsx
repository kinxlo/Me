/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function SmoothScrollLayout({ children }: { children: React.ReactNode }) {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const smoother = useRef<any>(null);

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // enables ScrollTrigger effects
        smoothTouch: 0.1, // shorter smoothing time for touch devices
      });

      // Optional: Add any ScrollTrigger configurations you need
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    },
    { scope: scrollContainer },
  );

  return (
    <div id="smooth-wrapper" ref={scrollContainer}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
