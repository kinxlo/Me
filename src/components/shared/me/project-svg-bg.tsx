// src/components/shared/me/project-svg-bg.tsx
"use client";

import { useGlobalContext } from "@/context/global-context";
import { useResponsiveLayout } from "@/hooks/use-media-query";
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
  const animationReference = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (isMobile || !projects?.length || !svgReference.current) return;

      // Clear previous animations
      animationReference.current?.kill();
      for (const t of ScrollTrigger.getAll()) t.kill();

      // Initial setup - make all paths visible but morph to first shape
      gsap.set(["#pj-1", "#pj-2", "#pj-3", "#pj-4"], { opacity: 1 });
      gsap.set("#pj-1", { morphSVG: "#pj-1" });

      // Create master timeline
      animationReference.current = gsap.timeline({
        defaults: { duration: 1.2, ease: "power2.inOut" },
      });

      // Set up scroll triggers for each project
      for (const [index, project] of projects.entries()) {
        const targetId = index + 1; // pj-1, pj-2, etc.
        const projectSection = document.querySelector(`#project-${project.id}`);
        if (!projectSection) continue;

        ScrollTrigger.create({
          trigger: projectSection,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to("#pj-1", {
              morphSVG: `#pj-${targetId}`,
              duration: 1,
              ease: "sine.inOut",
            });
          },
          onEnterBack: () => {
            gsap.to("#pj-1", {
              morphSVG: `#pj-${targetId}`,
              duration: 1,
              ease: "sine.inOut",
            });
          },
          // markers: true // Enable for debugging
        });
      }

      // Initial animation to first project
      gsap.to("#pj-1", {
        morphSVG: "#pj-1",
        duration: 1,
        ease: "sine.inOut",
      });
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
