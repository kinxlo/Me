"use client";

import { useResponsiveLayout } from "@/hooks/use-media-query";
import { initAboutBGAnimation } from "@/lib/animation/pages/about/background";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

import { MePath } from "./me";

export const AboutSVGBG = () => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathReference = useRef<SVGPathElement>(null);
  const { isMobile, isTablet } = useResponsiveLayout();
  const [isInitialized, setIsInitialized] = useState(false);

  useGSAP(() => {
    if (!svgReference.current || !pathReference.current) return;

    const cleanup = initAboutBGAnimation(svgReference.current, pathReference.current, isMobile, isTablet, () =>
      setIsInitialized(true),
    );

    return cleanup;
  }, [isMobile, isTablet]);

  return (
    <section className="relative top-0 right-0 flex h-[100dvh] w-full items-end justify-end">
      <svg
        ref={svgReference}
        className={cn("absolute h-fit w-fit", !isInitialized && "invisible")}
        viewBox="0 0 1100 1576"
        preserveAspectRatio="xMinYMin meet"
      >
        <path d={MePath} ref={pathReference} />
      </svg>
    </section>
  );
};
