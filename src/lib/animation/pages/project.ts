import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { timelineRegistry } from "../timeline-registery";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export const initMobileRevealAnimations = () => {
  // First, kill any existing animations to prevent conflicts
  const existingTimeline = timelineRegistry.get("project-animation");
  if (existingTimeline) {
    existingTimeline.kill();
    // timelineRegistry.delete("project-animation");
  }

  // Select all project sections
  const projects = gsap.utils.toArray<HTMLElement>(".project-section");

  // Reset all elements to initial state before creating new animations
  gsap.set(".project-section *", {
    opacity: 1,
    y: 0,
    clearProps: "all", // Clears any inline styles GSAP might have added
  });

  for (const project of projects) {
    // Text elements to animate
    const title = project.querySelector(".project-title");
    const description = project.querySelector(".project-p");
    const techStack = project.querySelectorAll(".tech-stack span");
    const buttons = project.querySelectorAll(".project-buttons a");
    const image = project.querySelector(".project-image");

    // Set initial state
    gsap.set([title, description, ...techStack, ...buttons, image], {
      opacity: 0,
      y: 30,
    });

    // Create timeline for this project
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
        markers: false,
        // Add refresh options to ensure it works with page transitions
        refreshPriority: 1,
        invalidateOnRefresh: true,
      },
    });

    // Staggered reveal animation
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        techStack,
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        "-=0.2",
      )
      .to(
        buttons,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.2",
      )
      .to(
        image,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );

    timelineRegistry.set(`project-animation-${project.id}`, tl);
  }

  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();

  // Cleanup function
  return () => {
    // Kill all ScrollTriggers and animations when component unmounts
    for (const trigger of ScrollTrigger.getAll()) trigger.kill();
    gsap.killTweensOf(".project-section *");

    // Clear all project timelines from registry
    for (const project of projects) {
      const projectId = project.id || project.dataset.id;
      const timeline = timelineRegistry.get(`project-animation-${projectId}`);
      if (timeline) {
        timeline.kill();
        // timelineRegistry.delete(`project-animation-${projectId}`);
      }
    }
  };
};
