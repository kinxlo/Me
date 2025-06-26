// src/components/shared/me/project-svg-bg.tsx
"use client";

import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { runProjectsBGEntranceAnimation } from "@/lib/animation/pages/project/background";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { PJ1 } from "./paths/pj-1";
import { PJ2 } from "./paths/pj-2";
import { PJ3 } from "./paths/pj-3";
import { PJ4 } from "./paths/pj-4";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
}

export const ProjectSVGBG = ({ className }: { className?: string }) => {
  const { projects } = useGlobalContext();
  const { isMobile } = useResponsiveLayout();
  const svgReference = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (isMobile || !projects?.length || !svgReference.current) return;
      runProjectsBGEntranceAnimation(projects);
    },
    { dependencies: [projects, isMobile] },
  );

  if (isMobile) {
    return null;
  }

  return (
    <svg
      ref={svgReference}
      width="100%"
      height="100%"
      viewBox="0 0 1100 1576"
      className={cn(className, "svg-morph-container")}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Ensure all paths have the same structure and point count */}
      <g id="morph-group">
        <PJ1 />
        <PJ2 />
        <PJ3 />
        <PJ4 />
      </g>
    </svg>
  );
};
