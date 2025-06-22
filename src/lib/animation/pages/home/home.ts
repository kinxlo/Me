import gsap from "@/lib/animation/gsap/init";

export const HTL = gsap.timeline({
  paused: true,
  defaults: { duration: 1.5 },
});

export const runHomeAnimation = () => {
  // HTL.fromTo(
  //   ".gsap-social-button",
  //   {
  //     y: 50,
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     visibility: "visible",
  //   },
  // );
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
      duration: 0.8,
    },
    "-=0.8",
  );

  // Description paragraphs
  HTL.from(
    ".hero-description:nth-child(1)",
    {
      x: -40,
      opacity: 0,
      duration: 0.8,
    },
    "-=0.6",
  );

  HTL.from(
    ".hero-description:nth-child(2)",
    {
      x: 40,
      opacity: 0,
      duration: 0.8,
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
      duration: 0.6,
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
      duration: 0.6,
      stagger: 0.1,
    },
    "-=0.3",
  );

  // Continuous subHTLe animation for social buttons
  HTL.to(
    ".social-button",
    {
      y: -3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    "+=1",
  );
};
