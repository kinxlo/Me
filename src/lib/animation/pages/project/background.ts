import gsap from "@/lib/animation/gsap/init";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const runProjectsBGEntranceAnimation = (projects: Project[]) => {
  const animationReference = gsap.timeline({
    defaults: { duration: 1.2, ease: "power2.inOut" },
  });
  // Clear previous animations
  animationReference?.current?.kill();
  for (const t of ScrollTrigger.getAll()) t.kill();

  // Initial setup - make all paths visible but morph to first shape
  gsap.set(["#pj-1", "#pj-2", "#pj-3", "#pj-4"], { opacity: 1 });
  gsap.set("#pj-1", { morphSVG: "#pj-1" });

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

  return animationReference;
};
