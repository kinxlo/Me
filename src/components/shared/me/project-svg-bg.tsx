"use client";

import { useProjects } from "@/context/global-context";
import gsap from "@/lib/animation/gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { PJ1 } from "./paths/pj-1";
import { PJ2 } from "./paths/pj-2";
import { PJ3 } from "./paths/pj-3";
import { PJ4 } from "./paths/pj-4";

if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, useGSAP);
}

export const ProjectSVGBG = ({ className }: { className?: string }) => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathReference = useRef<SVGPathElement>(null);
  const { projects } = useProjects();

  useGSAP(
    () => {
      if (!svgReference.current || !pathReference.current) return;

      // Clear previous animations
      for (const t of ScrollTrigger.getAll()) t.kill();
      gsap.killTweensOf(pathReference.current);

      // Project paths in order
      const projectPaths = [PJ1, PJ2, PJ3, PJ4];

      // Initial setup - start with first project's path
      gsap.set(pathReference.current, {
        attr: { d: projectPaths[0] },
        drawSVG: "0%",
        visibility: "visible",
      });

      // Initial animation
      gsap.to(pathReference.current, {
        drawSVG: "100%",
        duration: 3,
        ease: "power2.inOut",
      });

      // Setup scroll triggers after a small delay to ensure DOM is ready
      const timeout = setTimeout(() => {
        for (const [index, project] of projects.entries()) {
          if (index >= projectPaths.length) continue;

          const section = document.querySelector(`#project-${project.id}`);
          if (!section) {
            continue;
          }

          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => animateToPath(index),
            onEnterBack: () => animateToPath(index),
            markers: true, // Set to true to debug trigger positions
          });
        }
      }, 100);

      function animateToPath(index: number) {
        if (index < 0 || index >= projectPaths.length) return;

        gsap
          .timeline()
          .to(pathReference.current, {
            drawSVG: "0%",
            duration: 3,
            ease: "power2.inOut",
          })
          .set(pathReference.current, {
            attr: { d: projectPaths[index] },
          })
          .to(pathReference.current, {
            drawSVG: "100%",
            duration: 1,
            ease: "power2.inOut",
          });
      }

      return () => clearTimeout(timeout);
    },
    { dependencies: [projects], scope: svgReference },
  );

  return (
    <svg
      ref={svgReference}
      width="100%"
      height="100%"
      viewBox="0 0 1100 1576"
      className={cn(className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        ref={pathReference}
        className="fill-none stroke-black stroke-[3px]"
        style={{ visibility: "visible" }} // Changed to visible
      />
    </svg>
  );
};
