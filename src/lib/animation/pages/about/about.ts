import gsap from "../../gsap/init";

export const runAboutAnimation = () => {
  const AboutTL = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5 },
  });

  // Safely animate elements if they exist
  const elements = {
    animatedElement: document.querySelector(".animated-element"),
    businessCard: document.querySelector(".business-card"),
    titleWords: document.querySelectorAll(".title-word"),
    businessCardPs: document.querySelectorAll(".business-card p"),
    section3: document.querySelector(".section-3"),
    section5Divs: document.querySelectorAll(".section-5 > div"),
    section7: document.querySelector(".section-7"),
    trueFocus: document.querySelector(".true-focus"),
  };

  if (elements.animatedElement) {
    AboutTL.fromTo(
      elements.animatedElement,
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
      },
    );
  }

  if (elements.businessCard) {
    AboutTL.to(elements.businessCard, {
      opacity: 1,
      visibility: "visible",
    });
  }

  if (elements.titleWords.length > 0) {
    AboutTL.from(
      elements.titleWords,
      {
        y: 80,
        opacity: 0,
      },
      "-=0.2",
    );
  }

  if (elements.businessCardPs.length > 0) {
    AboutTL.from(
      elements.businessCardPs,
      {
        y: 40,
        opacity: 0,
      },
      "-=0.8",
    );
  }

  if (elements.section3) {
    AboutTL.from(
      elements.section3,
      {
        y: 40,
        opacity: 0,
      },
      "-=0.6",
    );
  }

  if (elements.section5Divs.length > 0) {
    AboutTL.from(
      elements.section5Divs,
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
      },
      "-=0.5",
    );
  }

  if (elements.section7) {
    AboutTL.from(
      elements.section7,
      {
        y: 40,
        opacity: 0,
      },
      "-=0.4",
    );
  }

  if (elements.trueFocus) {
    AboutTL.from(
      elements.trueFocus,
      {
        y: 30,
        scale: 0.8,
        opacity: 0,
      },
      "-=0.3",
    );
  }

  return AboutTL;
};

export const runAboutExitAnimation = () => {
  const aboutExitTimeline = gsap.timeline({ paused: true });

  const elements = {
    trueFocus: document.querySelector(".true-focus"),
    section7: document.querySelector(".section-7"),
    section5Divs: document.querySelectorAll(".section-5 > div"),
    section3: document.querySelector(".section-3"),
    businessCardPs: document.querySelectorAll(".business-card p"),
    titleWords: document.querySelectorAll(".title-word"),
    businessCard: document.querySelector(".business-card"),
  };

  if (elements.trueFocus) {
    aboutExitTimeline.to(
      elements.trueFocus,
      {
        y: 30,
        scale: 0.8,
        opacity: 0,
        ease: "back.in(1.5)",
      },
      "start",
    );
  }

  if (elements.section7) {
    aboutExitTimeline.to(
      elements.section7,
      {
        y: 40,
        opacity: 0,
        ease: "power2.in",
      },
      "start+=0.1",
    );
  }

  if (elements.section5Divs.length > 0) {
    aboutExitTimeline.to(
      elements.section5Divs,
      {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "back.in(1.5)",
      },
      "start+=0.2",
    );
  }

  if (elements.section3) {
    aboutExitTimeline.to(
      elements.section3,
      {
        y: 40,
        opacity: 0,
        ease: "power2.in",
      },
      "start+=0.3",
    );
  }

  if (elements.businessCardPs.length > 0) {
    aboutExitTimeline.to(
      elements.businessCardPs,
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: "back.in(1.5)",
      },
      "start+=0.4",
    );
  }

  if (elements.titleWords.length > 0) {
    aboutExitTimeline.to(
      elements.titleWords,
      {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        ease: "back.in(1.5)",
      },
      "start+=0.5",
    );
  }

  if (elements.businessCard) {
    aboutExitTimeline.to(
      elements.businessCard,
      {
        opacity: 0,
        visibility: "hidden",
      },
      "start+=0.7",
    );
  }

  return aboutExitTimeline;
};
