import gsap from "../../gsap/init";

export const runHomeEntranceAnimation = () => {
  const enttranceTimeline = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });

  // Clear any existing animations
  enttranceTimeline.clear();

  // Set up home animations directly on the shared enttranceTimeline
  enttranceTimeline.to(".animated-element", {
    opacity: 1,
    visibility: "visible",
  });

  enttranceTimeline.from(".title-word", {
    y: 80,
    opacity: 0,
    // duration: 1.2,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  enttranceTimeline.from(".rotating-text-container", { x: 100, opacity: 0 }, "-=0.8");

  enttranceTimeline.from(".hero-description:nth-child(1)", { x: -40, opacity: 0 }, "-=0.6");

  enttranceTimeline.from(".hero-description:nth-child(2)", { x: 40, opacity: 0 }, "-=0.5");

  enttranceTimeline.from(
    ".social-button",
    {
      y: 30,
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "-=0.4",
  );

  enttranceTimeline.from(
    ".hero-footer > *",
    {
      y: 20,
      opacity: 0,
      stagger: 0.1,
    },
    "-=0.3",
  );

  return enttranceTimeline;
};

export const runHomeExitAnimation = () => {
  const exitTimeline = gsap.timeline({ paused: true });
  // exitTimeline.clear();
  exitTimeline
    .to(
      ".hero-footer > *",
      {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        // duration: 0.3,
        ease: "power2.in",
      },
      "start",
    )
    .to(
      ".social-button",
      {
        y: 30,
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        // duration: 0.4,
        ease: "back.in(1.5)",
      },
      "start+=0.1",
    )
    .to(
      ".hero-description:nth-child(2)",
      {
        x: 40,
        opacity: 0,
        // duration: 0.5,
        ease: "power2.in",
      },
      "start+=0.2",
    )
    .to(
      ".hero-description:nth-child(1)",
      {
        x: -40,
        opacity: 0,
        // duration: 0.5,
        ease: "power2.in",
      },
      "start+=0.2",
    )
    .to(
      ".rotating-text-container",
      {
        x: 100,
        opacity: 0,
        // duration: 0.6,
        ease: "power2.in",
      },
      "start+=0.3",
    )
    .to(
      ".title-word",
      {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.in(1.5)",
      },
      "start+=0.4",
    );

  return exitTimeline;
};
