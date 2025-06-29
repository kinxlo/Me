"use client";

import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { runAboutExitAnimation } from "@/lib/animation/pages/about/about";
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
  const { setTimeline } = useGlobalContext();

  useGSAP(
    () => {
      if (!svgReference.current || !pathReference.current) return;
      // Run the background animation
      initAboutBGAnimation(svgReference.current, pathReference.current, isMobile, isTablet, () =>
        setIsInitialized(true),
      );
      setTimeline(runAboutExitAnimation());
    },
    { dependencies: [isMobile], scope: svgReference },
  );

  return (
    <svg
      ref={svgReference}
      className={cn(
        "about-svg",
        "md:translate-x-0[20%] fixed h-[1100px] w-[1576px] lg:translate-x-[50%]",
        !isInitialized && "invisible",
      )}
      viewBox="0 0 1100 1576"
      preserveAspectRatio="xMinYMin meet"
    >
      <path className={"about-svg-path"} d={MePath} ref={pathReference} />
    </svg>
  );
};
