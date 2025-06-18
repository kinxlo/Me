"use client";

import { useProjects } from "@/context/global-context";
import gsap from "@/lib/animation/gsap/init";
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

      // Initial animation - more elegant entrance
      gsap
        .timeline()
        .to(pathReference.current, {
          drawSVG: "100%",
          duration: 3,
          ease: "sine.inOut",
        })
        .to(
          pathReference.current,
          {
            // strokeOpacity: 0.8,
            duration: 0.5,
          },
          "-=0.5",
        );

      // Setup scroll triggers
      const timeout = setTimeout(() => {
        for (const [index, project] of projects.entries()) {
          if (index >= projectPaths.length) continue;

          const section = document.querySelector(`#project-${project.id}`);
          if (!section) continue;

          ScrollTrigger.create({
            trigger: section,
            start: "top 60%", // Earlier trigger for anticipation
            end: "bottom 40%",
            onEnter: () => animateToPath(index),
            onEnterBack: () => animateToPath(index),
            markers: false,
          });
        }
      }, 300); // Slightly longer delay for DOM readiness

      function animateToPath(index: number) {
        if (index < 0 || index >= projectPaths.length) return;

        gsap
          .timeline()
          // First fade out current path smoothly
          .to(pathReference.current, {
            // strokeOpacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          })
          // Then animate drawing out
          .to(pathReference.current, {
            drawSVG: "0%",
            duration: 1.2,
            ease: "sine.inOut",
          })
          // Change path
          .set(pathReference.current, {
            attr: { d: projectPaths[index] },
          })
          // Animate new path drawing in
          .to(pathReference.current, {
            drawSVG: "100%",
            duration: 2.5,
            ease: "sine.inOut",
          })
          // Fade back in
          .to(
            pathReference.current,
            {
              // strokeOpacity: 0.8,
              duration: 0.8,
            },
            "-=1",
          ); // Overlap with draw animation
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
        style={{
          visibility: "visible",
          // strokeOpacity: 0, // Start transparent
          strokeLinecap: "round", // Smoother line ends
          strokeLinejoin: "round", // Smoother corners
        }}
      />
    </svg>
  );
};
