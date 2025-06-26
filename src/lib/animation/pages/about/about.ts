import gsap from "@/lib/animation/gsap/init";

export const runAboutAnimation = () => {
  const AboutTL = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5 },
  });

  AboutTL.to(".animated-element", {
    opacity: 1,
    visibility: "visible",
  });

  // Initial reveal
  AboutTL.to(".business-card", {
    opacity: 1,
    visibility: "visible",
  });

  // Header section animation - modified to match home page h1 effect
  AboutTL.from(".title-word", {
    y: 80, // Increased y value for more "coming out" effect
    opacity: 0,
    // duration: 0.3,
    // ease: "back.out(1.7)",
  });

  AboutTL.from(
    ".business-card p",
    {
      y: 40, // Increased y value
      opacity: 0,
      // stagger: 0.15,
      // ease: "back.out(1.7)", // Same easing as home page
    },
    "-=0.8", // Adjusted timing to match home page sequence
  );

  // Experience section animation - modified to match home page style
  AboutTL.from(
    ".section-3",
    {
      y: 40, // Increased y value
      opacity: 0,
      // duration: 0.3, // Added duration
      // ease: "back.out(1.7)", // Same easing as home page
    },
    "-=0.6", // Adjusted timing
  );

  // Highlights grid animation - modified to match home page style
  AboutTL.from(
    ".section-5 > div",
    {
      y: 30,
      opacity: 0,
      stagger: 0.15, // Matched stagger timing
      // duration: 0.3, // Added duration
      // ease: "back.out(1.7)", // Same easing
    },
    "-=0.5", // Adjusted timing
  );

  // Personal touch section animation - modified to match home page style
  AboutTL.from(
    ".section-7",
    {
      y: 40, // Increased y value
      opacity: 0,
      // duration: 0.3, // Added duration
      // ease: "back.out(1.7)", // Same easing
    },
    "-=0.4", // Adjusted timing
  );

  // Special animation for the TrueFocus component - modified to match home page style
  AboutTL.from(
    ".true-focus",
    {
      y: 30, // Added y movement
      scale: 0.8,
      opacity: 0,
      // duration: 0.3, // Added duration
      // ease: "back.out(1.7)", // Changed to match home page style
    },
    "-=0.3", // Adjusted timing
  );

  return AboutTL;
};

export const runAboutExitAnimation = () => {
  const aboutExitTimeline = gsap.timeline({ paused: true });

  aboutExitTimeline.clear();

  aboutExitTimeline
    // Animate out the TrueFocus component first
    .to(
      ".true-focus",
      {
        y: 30,
        scale: 0.8,
        opacity: 0,
        // duration: 0.3,
        ease: "back.in(1.5)",
      },
      "start",
    )

    // Personal touch section exit
    .to(
      ".section-7",
      {
        y: 40,
        opacity: 0,
        // duration: 0.3,
        ease: "power2.in",
      },
      "start+=0.1",
    )

    // Highlights grid exit
    .to(
      ".section-5 > div",
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        // duration: 0.3,
        ease: "back.in(1.5)",
      },
      "start+=0.2",
    )

    // Experience section exit
    .to(
      ".section-3",
      {
        y: 40,
        opacity: 0,
        // duration: 0.3,
        ease: "power2.in",
      },
      "start+=0.3",
    )

    // Business card text exit
    .to(
      ".business-card p",
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        // duration: 0.3,
        ease: "back.in(1.5)",
      },
      "start+=0.4",
    )

    // Header title exit
    .to(
      ".title-word",
      {
        y: 80,
        opacity: 0,
        // duration: 0.4,
        stagger: 0.1,
        ease: "back.in(1.5)",
      },
      "start+=0.5",
    )

    // Business card container exit
    // .to(
    //   ".cc-container",
    //   {
    //     borderLeftWidth: 0,
    //     opacity: 0,
    //     duration: 0.4,
    //     ease: "power2.in",
    //   },
    //   "start+=0.6",
    // )

    // Final fade out of entire business card
    .to(
      ".business-card",
      {
        opacity: 0,
        visibility: "hidden",
        // duration: 0.3,
      },
      "start+=0.7",
    );

  return aboutExitTimeline;
};
