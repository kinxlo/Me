import gsap from "@/lib/animation/gsap/init";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { PBGTL } from "./background";

// Create a master timeline
export const PTL = gsap.timeline({
  paused: true,
  defaults: {},
});

export const runProjectsAnimation = (projects: Project[]) => {
  // Complete cleanup function
  // const cleanup = () => {
  //   for (const trigger of ScrollTrigger.getAll()) trigger.kill();
  //   gsap.killTweensOf([
  //     ".ptl-header",
  //     ".project-section",
  //     ".reveal-title",
  //     ".reveal-text",
  //     ".reveal-button",
  //     ".reveal-image",
  //     ".tech-stack span",
  //   ]);
  // };

  // // Cleanup previous animations
  // cleanup();

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
  PTL.to(".ptl-header", {
    y: 80,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  // Project animations
  for (const [index, project] of projects.entries()) {
    const section = `#project-${project.id}`;
    const delay = index * 0.2;

    // Section container
    PTL.to(
      section,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      delay,
    );

    // Content animations
    PTL.to(
      `${section} .reveal-title`,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      delay + 0.1,
    );

    PTL.to(
      `${section} .reveal-text`,
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      delay + 0.2,
    );

    PTL.to(
      `${section} .reveal-button`,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(2)",
      },
      delay + 0.3,
    );

    // Language tags with dramatic stagger
    PTL.to(
      `${section} .tech-stack span`,
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
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
    PTL.to(
      `${section} .reveal-image`,
      {
        y: 0,
        opacity: 1,
        scale: 0.85,
        rotation: 3,
        duration: 1.4,
        // ease: "elastic.out(1, 0.8)",
      },
      delay + 0.4,
    );
  }

  // Continuous parallax on scroll
  for (const project of projects) {
    const section = `#project-${project.id}`;

    PTL.to(`${section} .reveal-image`, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true, // Crucial for SPA navigation
      },
    });

    PTL.to(`${section} .tech-stack`, {
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

  // PTL.eventCallback(`onComplete`, () => {
  //   console.log(`PTL completed`);

  //   // PBGTL.play();
  // });

  // IMPORTANT: Return cleanup function
  // return cleanup;
};
