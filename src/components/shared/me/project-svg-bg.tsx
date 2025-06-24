"use client";

import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { runProjectsBGEntranceAnimation } from "@/lib/animation/pages/project/background";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { PJ1 } from "./paths/pj-1";
import { PJ2 } from "./paths/pj-2";
import { PJ3 } from "./paths/pj-3";
import { PJ4 } from "./paths/pj-4";

export const ProjectSVGBG = ({ className }: { className?: string }) => {
  const { projects } = useGlobalContext();
  const { isMobile } = useResponsiveLayout();
  const svgReference = useRef<SVGSVGElement>(null);
  const svgBG = useRef(null);

  useGSAP(
    () => {
      runProjectsBGEntranceAnimation(svgReference.current, projects)?.play();
    },
    { scope: svgBG },
  );

  // Hide the SVG completely on mobile
  if (isMobile) {
    return null;
  }

  return (
    <section ref={svgBG}>
      <svg
        ref={svgReference}
        width="100%"
        height="100%"
        viewBox="0 0 1100 1576"
        className={cn(className, "")}
        preserveAspectRatio="xMidYMid meet"
      >
        <PJ1 />
        <PJ2 />
        <PJ3 />
        <PJ4 />
      </svg>
    </section>
  );
};
