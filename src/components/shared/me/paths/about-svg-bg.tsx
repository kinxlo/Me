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

  if (isMobile) {
    return (
      <svg
        ref={svgReference}
        className={cn("fixed bottom-0", !isInitialized && "invisible")}
        viewBox="0 0 1100 1576"
        // preserveAspectRatio="xMinYMin meet"
      >
        <path d={MePath} ref={pathReference} />
      </svg>
    );
  }

  if (isTablet) {
    return (
      <svg
        ref={svgReference}
        className={cn("fixed bottom-0", !isInitialized && "invisible")}
        viewBox="0 0 1100 1576"
        // preserveAspectRatio="xMinYMin meet"
      >
        <path d={MePath} ref={pathReference} />
      </svg>
    );
  }

  return (
    <svg
      ref={svgReference}
      className={cn("bottom-0 lg:h-[700px] lg:w-[700px]", !isInitialized && "invisible")}
      viewBox="0 0 500 700"
      preserveAspectRatio="xMinYMin meet"
    >
      <path d={MePath} ref={pathReference} className={`lg:scale-70`} />
    </svg>
  );
};
