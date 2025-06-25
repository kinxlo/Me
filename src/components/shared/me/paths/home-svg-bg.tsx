"use client";

import { useResponsiveLayout } from "@/hooks/use-media-query";
import { runHomeBGEntranceAnimation } from "@/lib/animation/pages/home/background";
import { logoVariants } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export const HomeSVGBG = () => {
  const [currentLayout, setCurrentLayout] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const { isMobile, isTablet } = useResponsiveLayout();
  const svgBG = useRef<HTMLDivElement>(null);
  const svgReference = useRef<SVGSVGElement>(null);
  const pathsReference = useRef<(SVGPathElement | null)[]>([]);

  // Update layout state based on media queries
  useEffect(() => {
    if (isMobile) {
      setCurrentLayout("mobile");
    } else if (isTablet) {
      setCurrentLayout("tablet");
    } else {
      setCurrentLayout("desktop");
    }
  }, [isMobile, isTablet]);

  useGSAP(
    () => {
      runHomeBGEntranceAnimation(svgReference.current, pathsReference)?.play();
    },
    { scope: svgBG },
  );

  const getSVGPositioning = () => {
    switch (currentLayout) {
      case "mobile": {
        return "fixed border border-primary md:hidden";
      }
      case "tablet": {
        return "fixed right-[-10rem] bottom-[-10rem] w-fit xl:hidden";
      }
      case "desktop": {
        return "fixed top-0 right-0 w-fit";
      }
      default: {
        return "fixed top-0 right-0 w-fit";
      }
    }
  };

  return (
    <section ref={svgBG} className="svgBG">
      <svg
        ref={svgReference}
        className={cn("animated-element", getSVGPositioning())}
        width="100%"
        height="100%"
        viewBox="85 0 400 400"
        // viewBox="85 -55 500 500"
        preserveAspectRatio="xMinYMin meet"
      >
        {logoVariants[0].paths.map((path, index) => (
          <path
            key={`initial-path-${index}`}
            ref={(element) => {
              pathsReference.current[index] = element;
            }}
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            fillOpacity={path.fillOpacity}
            strokeWidth={path.strokeWidth}
            className={cn(
              `origin-top-right translate-x-[3rem] translate-y-[-1rem] scale-110`,
              `scale-80 md:translate-x-[3rem] md:translate-y-[-3rem]`,
              `scale-100 lg:translate-x-[3rem] lg:translate-y-[-1rem]`,
              `scale-90 xl:translate-x-[4rem] xl:translate-y-[-2rem]`,
            )}
          />
        ))}
      </svg>
    </section>
  );
};
