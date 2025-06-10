import gsap from "./gsap";

export const aboutTextTimeline = gsap.timeline();
export const skillTimeline = gsap.timeline();

export const aboutTextAnimation = () => {
  aboutTextTimeline.clear();

  aboutTextTimeline
    // Name & Role section
    .from(".business-card section:nth-child(1) h3", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      ".business-card section:nth-child(1) p",
      {
        text: "",
        duration: 1.5,
        ease: "power1.in",
      },
      "<+0.3",
    )

    // Experience section
    .from(
      ".business-card section:nth-child(2) h3",
      {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: "back.out",
      },
      "+=0.5",
    )
    .from(
      ".business-card section:nth-child(2) p",
      {
        text: "",
        duration: 2,
        ease: "power1.in",
      },
      "<+0.2",
    )

    // Highlights section
    .from(
      ".business-card section:nth-child(3) div",
      {
        opacity: 0,
        y: 10,
        stagger: 0.3,
        duration: 0.6,
        ease: "power1.out",
      },
      "+=0.3",
    )
    .from(
      ".business-card section:nth-child(3) p",
      {
        text: "",
        duration: 1.8,
        stagger: 0.3,
        ease: "power1.in",
      },
      "<",
    )

    // Personal Touch section
    .from(
      ".business-card section:nth-child(4) p",
      {
        opacity: 0,
        text: "",
        duration: 1.5,
        ease: "power1.in",
      },
      "+=0.5",
    );

  return aboutTextTimeline;
};
