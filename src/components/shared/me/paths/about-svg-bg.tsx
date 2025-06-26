"use client";

import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import gsap from "@/lib/animation/gsap/init";
import { runAboutAnimation, runAboutExitAnimation } from "@/lib/animation/pages/about/about";
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

      // First run the background animation
      const bgTimeline = initAboutBGAnimation(svgReference.current, pathReference.current, isMobile, isTablet, () =>
        setIsInitialized(true),
      );

      // Create a master timeline
      const masterTL = gsap.timeline();
      masterTL.add(bgTimeline);

      // Wait for elements to be available before animating
      const checkElements = () => {
        const elementsExist =
          document.querySelector(".business-card") &&
          document.querySelector(".title-word") &&
          document.querySelector(".section-3") &&
          document.querySelector(".section-5 > div") &&
          document.querySelector(".section-7") &&
          document.querySelector(".true-focus");

        if (elementsExist) {
          const aboutTimeline = runAboutAnimation().play();
          masterTL.add(aboutTimeline, ">");
          setTimeline(runAboutExitAnimation());
        } else {
          // Try again after a short delay if elements aren't ready
          setTimeout(checkElements, 100);
        }
      };

      checkElements();
    },
    { dependencies: [isMobile, isTablet], scope: svgReference },
  );

  return (
    <svg
      ref={svgReference}
      className={cn(
        "md:translate-x-0[20%] fixed h-[1100px] w-[1576px] lg:translate-x-[50%]",
        !isInitialized && "invisible",
      )}
      viewBox="0 0 1100 1576"
      preserveAspectRatio="xMinYMin meet"
    >
      <path d={MePath} ref={pathReference} />
    </svg>
  );
};
