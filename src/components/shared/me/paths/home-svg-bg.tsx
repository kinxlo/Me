"use client";

import { initHomeBGAnimation } from "@/lib/animation/pages/home/background";
import { logoVariants } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const HomeSVGBG = () => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathsReference = useRef<(SVGPathElement | null)[]>([]);

  useGSAP(
    () => {
      initHomeBGAnimation(svgReference.current, pathsReference);
    },
    { scope: svgReference },
  );

  return (
    <section className="relative flex h-[100dvh] w-full items-end justify-end">
      <svg
        ref={svgReference}
        className={cn("absolute top-[0] left-[0] lg:bottom-[-10rem] lg:left-[0]", "h-full w-full")}
        viewBox="0 0 450 450"
        preserveAspectRatio="xMinYMin meet"
      >
        {/* Initial paths - will be managed by GSAP */}
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
              `animated-element home-bg origin-top-right translate-x-[3rem] translate-y-[-1rem] scale-110`,
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
