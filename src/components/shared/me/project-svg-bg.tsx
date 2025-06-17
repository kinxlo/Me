"use client";

import { useProjects } from "@/context/global-context";
import gsap from "@/lib/animation/gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import PJ1 from "./paths/pj-1";
import PJ2 from "./paths/pj-2";
import PJ3 from "./paths/pj-3";
import PJ4 from "./paths/pj-4";

export const ProjectSVGBG = ({ className }: { className?: string }) => {
  const svgReference = useRef<SVGSVGElement>(null);
  const pathname = usePathname();
  const { projects } = useProjects();
  useGSAP(
    () => {
      if (!svgReference.current) return;

      for (const trigger of ScrollTrigger.getAll()) trigger.kill();

      // Route targets
      const routeTargets = {
        "/projects": "#pj-1",
      } as const;

      const targetPath = routeTargets[pathname as keyof typeof routeTargets] || "#pj-1";

      if (pathname === "/projects") {
        gsap.to("#pj-1", {
          duration: 1,
          delay: 1,
          morphSVG: targetPath,
          ease: "power2.inOut",
        });
        for (const [index, project] of projects.entries()) {
          const projectSection = document.querySelector(`#project-${project.id}`);
          if (!projectSection) continue;

          ScrollTrigger.create({
            trigger: projectSection,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              gsap.to("#pj-1", {
                delay: 1,
                duration: 0.8,
                morphSVG: `#pj-${index + 1}`,
                ease: "power2.inOut",
                overwrite: "auto",
              });
            },
            onEnterBack: () => {
              gsap.to("#pj-1", {
                duration: 0.8,
                delay: 1,
                morphSVG: `#pj-${index + 1}`,
                ease: "power2.inOut",
                overwrite: "auto",
              });
            },
          });
        }
      }
    },
    { dependencies: [pathname, projects], scope: svgReference },
  );
  return (
    <svg ref={svgReference} width="100%" height="100%" viewBox="0 0 1100 1576" className={cn(className)}>
      <PJ1 />
      <PJ2 />
      <PJ3 />
      <PJ4 />
    </svg>
  );
};
