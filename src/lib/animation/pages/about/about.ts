import gsap from "@/lib/animation/gsap/init";

export const AboutTL = gsap.timeline({
  paused: true,
  defaults: { duration: 0.3, ease: "power2.out" },
});

export const runAboutAnimation = () => {
  // Initial reveal
  AboutTL.to(".business-card", {
    opacity: 1,
    visibility: "visible",
  });

  // Header section animation
  AboutTL.from(".business-card h3", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  AboutTL.from(
    ".business-card p",
    {
      y: 20,
      opacity: 0,
      stagger: 0.1,
    },
    "-=0.5",
  );

  // Experience section animation
  AboutTL.from(
    ".section-3",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3",
  );

  // Highlights grid animation
  AboutTL.from(
    ".section-5 > div",
    {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.4)",
    },
    "-=0.2",
  );

  // Personal touch section animation
  AboutTL.from(
    ".section-7",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3",
  );

  // Special animation for the TrueFocus component
  AboutTL.from(
    ".TrueFocus",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    },
    "-=0.4",
  );
};
