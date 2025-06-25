// src/lib/animation/pages/project/background.ts
import gsap from "@/lib/animation/gsap/init";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export const runProjectsBGEntranceAnimation = (svgReference: SVGSVGElement | null, projects: Project[]) => {
  if (!svgReference || !projects?.length) return;

  // Clear previous triggers
  for (const trigger of ScrollTrigger.getAll()) trigger.kill();

  // Initial setup
  gsap.set("#pj-1", { opacity: 1 });
  gsap.set(["#pj-2", "#pj-3", "#pj-4"], { opacity: 0 });

  const masterTimeline = gsap.timeline({
    defaults: { duration: 1.2, ease: "power2.inOut" },
  });

  // Create scroll triggers for each project
  for (const [index, project] of projects.entries()) {
    const projectId = index + 1;
    const section = document.querySelector(`#project-${project.id}`);

    if (!section) continue;

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => animateSVG(projectId),
      onEnterBack: () => animateSVG(projectId),
      onLeave: () => animateSVG(projectId + 1 > projects.length ? 1 : projectId + 1),
      onLeaveBack: () => animateSVG(projectId - 1 < 1 ? 1 : projectId - 1),
    });
  }

  function animateSVG(targetId: number) {
    masterTimeline.to("#pj-1", {
      morphSVG: `#pj-${targetId}`,
      duration: 1.2,
      ease: "sine.inOut",
      overwrite: true,
    });

    // Smooth opacity transition
    masterTimeline.to(
      ["#pj-1", "#pj-2", "#pj-3", "#pj-4"],
      {
        opacity: (index) => (index + 1 === targetId ? 1 : 0),
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<",
    );
  }

  return masterTimeline;
};
