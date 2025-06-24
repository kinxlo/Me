"use client";

// import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
// import gsap from "@/lib/animation/gsap/init";
import { runHomeBGEntranceAnimation } from "@/lib/animation/pages/home/background";
import { logoVariants } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const HomeSVGBG = () => {
  const { isMobile, isTablet } = useResponsiveLayout();
  // const { setTimeline } = useGlobalContext();
  const svgBG = useRef(null);
  const svgReference = useRef<SVGSVGElement>(null);
  const pathsReference = useRef<(SVGPathElement | null)[]>([]);

  useGSAP(
    () => {
      runHomeBGEntranceAnimation(svgReference.current, pathsReference)?.play();
      // setTimeline(runHomeBGExitAnimation(svgReference.current, pathsReference));
    },
    // { scope: svgBG },
  );

  if (isMobile) {
    return (
      <svg
        ref={svgReference}
        className={cn("fixed bottom-[-10rem] left-[-10rem] w-fit")}
        width="100%"
        height="100%"
        viewBox="85 -55 500 500"
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
              `origin-top-right translate-x-[3rem] translate-y-[-1rem] scale-110`,
              `scale-80 md:translate-x-[3rem] md:translate-y-[-3rem]`,
              `scale-100 lg:translate-x-[3rem] lg:translate-y-[-1rem]`,
              `scale-90 xl:translate-x-[4rem] xl:translate-y-[-2rem]`,
            )}
          />
        ))}
      </svg>
    );
  }
  if (isTablet) {
    return (
      <svg
        ref={svgReference}
        className={cn("fixed right-[-10rem] bottom-[-10rem] w-fit")}
        width="100%"
        height="100%"
        viewBox="85 -55 500 500"
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
              `origin-top-right translate-x-[3rem] translate-y-[-1rem] scale-110`,
              `scale-80 md:translate-x-[3rem] md:translate-y-[-3rem]`,
              `scale-100 lg:translate-x-[3rem] lg:translate-y-[-1rem]`,
              `scale-90 xl:translate-x-[4rem] xl:translate-y-[-2rem]`,
            )}
          />
        ))}
      </svg>
    );
  }

  return (
    <section ref={svgBG} className={`svgBG`}>
      <svg
        ref={svgReference}
        className={cn("animated-element fixed top-0 right-0 w-fit")}
        width="100%"
        height="100%"
        viewBox="85 -55 500 500"
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
