import gsap from "./gsap";

export const aboutTextTimeline = gsap.timeline();
export const skillTimeline = gsap.timeline();

export const aboutTextAnimation = () => {
  aboutTextTimeline.clear();

  aboutTextTimeline
    // Name & Role section (now section:nth-child(1))
    .from(".business-card > section:nth-child(1) h3", {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.out",
    })
    .from(
      ".business-card > section:nth-child(1) p",
      {
        text: "",
        duration: 1.2,
        ease: "none",
        stagger: {
          each: 0.05,
          from: "start",
        },
      },
      "+=0.2",
    )

    // Experience section (now section:nth-child(3) because of the divider)
    .from(
      ".business-card > section:nth-child(3) h3",
      {
        opacity: 0,
        x: -10,
        duration: 0.4,
        ease: "power2.out",
      },
      "+=0.3",
    )
    .from(
      ".business-card > section:nth-child(3) p",
      {
        text: "",
        duration: 1.8,
        ease: "none",
        stagger: {
          each: 0.08,
          from: "start",
        },
      },
      "<+0.1",
    )

    // Highlights section (now section:nth-child(5))
    .from(
      ".business-card > section:nth-child(5) div",
      {
        opacity: 0,
        y: 5,
        duration: 0.3,
        stagger: {
          each: 0.4,
          from: "start",
        },
        ease: "power2.out",
      },
      "+=0.4",
    )
    .from(
      ".business-card > section:nth-child(5) p",
      {
        text: "",
        duration: 0.8,
        stagger: {
          each: 0.3,
          amount: 0.2,
          from: "start",
        },
        ease: "none",
      },
      "<0.2",
    )

    // Personal Touch section (now section:nth-child(7))
    .from(
      ".business-card > section:nth-child(7) p",
      {
        text: "",
        duration: 1.5,
        ease: "none",
        onStart: () => {
          document.body.classList.add("typing-cursor");
        },
        onComplete: () => {
          document.body.classList.remove("typing-cursor");
        },
      },
      "+=0.5",
    );

  return aboutTextTimeline;
};
