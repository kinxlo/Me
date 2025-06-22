import gsap from "@/lib/animation/gsap/init";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Create master timeline
export const PTL = gsap.timeline({
  paused: true,
  defaults: { ease: "power3.out" },
});

export const initRevealAnimations = () => {
  // Wait for the next tick to ensure DOM is ready
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      // Select all sections to animate
      const sections = document.querySelectorAll<HTMLElement>(".reveal-section");

      // Reset all elements to their natural state
      PTL.set(".reveal-section *", {
        opacity: "",
        y: "",
        clearProps: "all",
      });

      let anyAnimationsCreated = false;

      for (const [index, section] of sections.entries()) {
        // Elements to animate
        const title = section.querySelector(".reveal-title");
        const text = section.querySelector(".reveal-text");
        const buttons = section.querySelectorAll(".reveal-button");
        const image = section.querySelector(".reveal-image");

        // Skip if no animatable elements found
        if (!title && !text && buttons.length === 0 && !image) continue;

        anyAnimationsCreated = true;

        // Set initial state
        PTL.set([title, text, ...buttons, image].filter(Boolean), {
          opacity: 0,
          y: 40,
        });

        // Create timeline for this section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            id: `reveal-${index}`,
            markers: false,
            // Better handling for dynamic content
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        });

        // Staggered reveal animation
        if (title) {
          tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }

        if (text) {
          tl.to(
            text,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4",
          );
        }

        if (buttons.length > 0) {
          tl.to(
            buttons,
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "back.out(1.2)",
            },
            "-=0.3",
          );
        }

        if (image) {
          tl.to(
            image,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4",
          );
        }
      }

      if (anyAnimationsCreated) {
        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }

      resolve();
    }, 100); // Small delay to ensure DOM is ready
  });
};

export const cleanupRevealAnimations = () => {
  // Kill only our reveal animations
  for (const trigger of ScrollTrigger.getAll().filter((trigger) => trigger.vars.id?.toString().startsWith("reveal-")))
    trigger.kill();

  // Reset styles
  PTL.set(".reveal-section *", {
    opacity: "",
    y: "",
    clearProps: "all",
  });
};
