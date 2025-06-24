import gsap from "@/lib/animation/gsap/init";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Create a master timeline

export const runProjectsEntranceAnimation = (projects: Project[]) => {
  const projectTimeline = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5 },
  });
  // Set initial states - MORE DRAMATIC FOR PARALLAX
  gsap.set(".ptl-header", { y: 60, opacity: 0 });
  gsap.set(".project-section", { autoAlpha: 0, y: 50 });
  gsap.set(".reveal-title", { y: 40, opacity: 0 });
  gsap.set(".reveal-text", { y: 30, opacity: 0 });
  gsap.set(".reveal-button", { y: 30, opacity: 0 });
  gsap.set(".reveal-image", { y: 50, opacity: 0, scale: 0.85, rotation: 3 });
  gsap.set(".tech-stack span", {
    y: 50,
    opacity: 0,
    scale: 0.7,
    rotation: 5,
    transformOrigin: "center center",
  });

  // Header animation
  projectTimeline.to(".ptl-header", {
    y: 80,
    opacity: 1,
    // duration: 1.2,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  // Project animations
  for (const [index, project] of projects.entries()) {
    const section = `#project-${project.id}`;
    const delay = index * 0.2;

    // Section container
    projectTimeline.to(
      section,
      {
        autoAlpha: 1,
        y: 0,
        // duration: 0.9,
        ease: "power3.out",
      },
      delay,
    );

    // Content animations
    projectTimeline.to(
      `${section} .reveal-title`,
      {
        y: 0,
        opacity: 1,
        // duration: 0.8,
        ease: "power3.out",
      },
      delay + 0.1,
    );

    projectTimeline.to(
      `${section} .reveal-text`,
      {
        y: 0,
        opacity: 1,
        // duration: 0.7,
        ease: "power3.out",
      },
      delay + 0.2,
    );

    projectTimeline.to(
      `${section} .reveal-button`,
      {
        y: 0,
        opacity: 1,
        // duration: 0.6,
        ease: "back.out(2)",
      },
      delay + 0.3,
    );

    // Language tags with dramatic stagger
    projectTimeline.to(
      `${section} .tech-stack span`,
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        // duration: 0.8,
        stagger: {
          each: 0.1,
          from: "center",
          ease: "back.out(2)",
        },
        // ease: "back.out(1.5)",
      },
      delay + 0.5,
    );

    // Image with strong parallax effect
    projectTimeline.to(
      `${section} .reveal-image`,
      {
        y: 0,
        opacity: 1,
        scale: 0.85,
        rotation: 3,
        // duration: 1.4,
        // ease: "elastic.out(1, 0.8)",
      },
      delay + 0.4,
    );
  }

  // Continuous parallax on scroll
  for (const project of projects) {
    const section = `#project-${project.id}`;

    projectTimeline.to(`${section} .reveal-image`, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // Crucial for SPA navigation
      },
    });

    projectTimeline.to(`${section} .tech-stack`, {
      y: -20,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });
  }
  return projectTimeline;
  // IMPORTANT: Return cleanup function
  // return cleanup;
};

export const runProjectsExitAnimation = (projects: Project[]) => {
  const projectsExitTimeline = gsap.timeline({ paused: true });
  projectsExitTimeline.clear();

  // First, kill any active ScrollTriggers to prevent conflicts
  for (const trigger of ScrollTrigger.getAll()) trigger.kill();

  // Animate out projects in reverse order (last in, first out)
  for (let index = projects.length - 1; index >= 0; index--) {
    const project = projects[index];
    const section = `#project-${project.id}`;
    const delay = (projects.length - 1 - index) * 0.15;

    // Image exit (most prominent element)
    projectsExitTimeline.to(
      `${section} .reveal-image`,
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
        rotation: -5,
        duration: 0.4,
        ease: "back.in(1.7)",
      },
      `start+=${delay}`,
    );

    // Tech stack exit
    projectsExitTimeline.to(
      `${section} .tech-stack span`,
      {
        y: 30,
        opacity: 0,
        scale: 0.7,
        rotation: 5,
        stagger: {
          each: 0.05,
          from: "end",
          ease: "back.in(1.5)",
        },
        duration: 0.3,
      },
      `start+=${delay + 0.1}`,
    );

    // Button exit
    projectsExitTimeline.to(
      `${section} .reveal-button`,
      {
        y: 30,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.5)",
      },
      `start+=${delay + 0.2}`,
    );

    // Text exit
    projectsExitTimeline.to(
      `${section} .reveal-text`,
      {
        y: 40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      `start+=${delay + 0.2}`,
    );

    // Title exit
    projectsExitTimeline.to(
      `${section} .reveal-title`,
      {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "back.in(1.7)",
      },
      `start+=${delay + 0.3}`,
    );

    // Section container exit
    projectsExitTimeline.to(
      section,
      {
        autoAlpha: 0,
        y: 60,
        duration: 0.4,
        ease: "power2.in",
      },
      `start+=${delay + 0.3}`,
    );
  }

  // Header exit (last to leave)
  projectsExitTimeline.to(
    ".ptl-header",
    {
      y: 80,
      opacity: 0,
      duration: 0.5,
      ease: "back.in(1.7)",
    },
    `start+=${projects.length * 0.15 + 0.2}`,
  );

  return projectsExitTimeline;
};
