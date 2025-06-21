"use client";

import { useProjects } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
import { initProjectBGAnimation } from "@/lib/animation/pages/project/background";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { PJ1 } from "./paths/pj-1";
import { PJ2 } from "./paths/pj-2";
import { PJ3 } from "./paths/pj-3";
import { PJ4 } from "./paths/pj-4";

export const ProjectSVGBG = ({ className }: { className?: string }) => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathname = usePathname();
  const { projects } = useProjects();
  const { isMobile } = useResponsiveLayout();

  useGSAP(
    () => {
      initProjectBGAnimation(svgReference.current, projects);
    },
    {
      dependencies: [pathname, projects, isMobile],
      scope: svgReference,
    },
  );

  // Hide the SVG completely on mobile
  if (isMobile) {
    return null;
  }

  return (
    <svg
      ref={svgReference}
      width="100%"
      height="100%"
      viewBox="0 0 1100 1576"
      className={cn(className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <PJ1 />
      <PJ2 />
      <PJ3 />
      <PJ4 />
    </svg>
  );
};
