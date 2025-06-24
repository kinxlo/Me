import gsap from "@/lib/animation/gsap/init";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Create master timeline
export const PBGTL = gsap.timeline({
  paused: false,
  defaults: { ease: "power3.out" },
});

export const runProjectsBGEntranceAnimation = (svgReference: SVGSVGElement | null, projects: Project[]) => {
  if (!svgReference) return;

  // Clear previous animations
  for (const trigger of ScrollTrigger.getAll()) trigger.kill();

  PBGTL.to(".animated-element", {
    opacity: 1,
    visibility: "visible",
  });

  PBGTL.to("#pj-1", {
    duration: 1,
    delay: 1,
    morphSVG: "#pj-1",
    ease: "power2.inOut",
  });

  // Setup scroll triggers for each project
  for (const [index, project] of projects.entries()) {
    const projectSection = document.querySelector(`#project-${project.id}`);
    if (!projectSection) continue;

    ScrollTrigger.create({
      trigger: projectSection,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        PBGTL.to("#pj-1", {
          duration: 0.8,
          delay: 1,
          morphSVG: `#pj-${index + 1}`,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      },
      onEnterBack: () => {
        PBGTL.to("#pj-1", {
          duration: 0.8,
          delay: 1,
          morphSVG: `#pj-${index + 1}`,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      },
    });
  }

  return PBGTL;
};
