// src/lib/animation/pages/project/project.ts
import gsap from "@/lib/animation/gsap/init";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export const runProjectsEntranceAnimation = (projects: Project[]) => {
  const projectTimeline = gsap.timeline({
    paused: true,
    defaults: { duration: 0.8, ease: "power3.out" },
  });

  // Initial states
  // gsap.set(".animated-element", { autoAlpha: 0 });
  // gsap.set(".ptl-header", { y: 60, opacity: 0 });
  gsap.set(".project-section", { autoAlpha: 0, y: 80 });
  gsap.set(".reveal-title", { y: 40, opacity: 0 });
  gsap.set(".reveal-text", { y: 30, opacity: 0 });
  gsap.set(".reveal-button", { y: 30, opacity: 0 });
  gsap.set(".reveal-image", { y: 80, opacity: 0, scale: 0.9 });
  gsap.set(".tech-stack span", { y: 20, opacity: 0, scale: 0.8 });

  // Master animation
  projectTimeline
    .to(".animated-element", {
      opacity: 1,
      visibility: "visible",
    })
    .from(".title-word", {
      y: 80,
      opacity: 0,
      // duration: 1.2,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });

  // Project animations
  for (const [index, project] of projects.entries()) {
    const section = `#project-${project.id}`;
    const delay = index * 0.15;

    projectTimeline.to(section, { autoAlpha: 1, y: 0, duration: 0.9, ease: "elastic.out(1, 0.8)" }, delay);

    projectTimeline.fromTo(
      `${section} .reveal-title`,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
      delay + 0.1,
    );

    projectTimeline.fromTo(
      `${section} .reveal-text`,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      delay + 0.2,
    );

    projectTimeline.fromTo(
      `${section} .reveal-button`,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" },
      delay + 0.3,
    );

    projectTimeline.fromTo(
      `${section} .tech-stack span`,
      { y: 20, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(2)",
      },
      delay + 0.4,
    );

    projectTimeline.fromTo(
      `${section} .reveal-image`,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.8)" },
      delay + 0.3,
    );

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        gsap.to(`${section} .reveal-image`, {
          y: -30,
          duration: 0.8,
          ease: "power1.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(`${section} .reveal-image`, {
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      },
    });
  }

  return projectTimeline;
};

export const runProjectsExitAnimation = (projects: Project[]) => {
  const exitTimeline = gsap.timeline({ paused: true });

  // Animate out in reverse order
  for (const [index, project] of projects.entries()) {
    const section = `#project-${project.id}`;
    const delay = index * 0.1;

    exitTimeline.to(
      `${section} .reveal-image`,
      { y: 80, opacity: 0, scale: 0.9, duration: 0.5, ease: "back.in(1.7)" },
      delay,
    );

    exitTimeline.to(
      `${section} .tech-stack span`,
      {
        y: 20,
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.05,
        ease: "back.in(1.5)",
      },
      delay + 0.1,
    );

    exitTimeline.to(
      `${section} .reveal-button`,
      { y: 30, opacity: 0, duration: 0.3, ease: "back.in(1.5)" },
      delay + 0.15,
    );

    exitTimeline.to(`${section} .reveal-text`, { y: 40, opacity: 0, duration: 0.3, ease: "power2.in" }, delay + 0.2);

    exitTimeline.to(
      `${section} .reveal-title`,
      { y: 50, opacity: 0, duration: 0.4, ease: "back.in(1.7)" },
      delay + 0.25,
    );

    exitTimeline.to(section, { autoAlpha: 0, y: 60, duration: 0.5, ease: "power2.in" }, delay + 0.3);
  }

  // Header exit
  exitTimeline.to(
    ".ptl-header",
    { y: 60, opacity: 0, duration: 0.6, ease: "back.in(1.7)" },
    projects.length * 0.1 + 0.3,
  );

  return exitTimeline;
};
