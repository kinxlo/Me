import gsap from "@/lib/animation/gsap/init";

import { HBGTL } from "./background";

export const HTL = gsap.timeline({
  paused: true,
  defaults: { duration: 0.2 },
});

export const runHomeAnimation = () => {
  HTL.to(".htl-page", {
    opacity: 1,
    visibility: "visible",
    // duration: 0.5,
  });
  // Main tiHTLe animation
  HTL.from(".title-word", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  // Rotating text
  HTL.from(
    ".rotating-text-container",
    {
      x: 100,
      opacity: 0,
      // duration: 0.8,
    },
    "-=0.8",
  );

  // Description paragraphs
  HTL.from(
    ".hero-description:nth-child(1)",
    {
      x: -40,
      opacity: 0,
      // duration: 0.8,
    },
    "-=0.6",
  );

  HTL.from(
    ".hero-description:nth-child(2)",
    {
      x: 40,
      opacity: 0,
      // duration: 0.8,
    },
    "-=0.5",
  );

  // Social buttons
  HTL.from(
    ".social-button",
    {
      y: 30,
      opacity: 0,
      scale: 0.8,
      // duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "-=0.4",
  );

  // Footer elements
  HTL.from(
    ".hero-footer > *",
    {
      y: 20,
      opacity: 0,
      // duration: 0.6,
      stagger: 0.1,
    },
    "-=0.3",
  );

  HTL.eventCallback("onComplete", () => {
    HBGTL.play();
  });
};
