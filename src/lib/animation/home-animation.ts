import gsap from "./gsap";

export const heroTimeline = gsap.timeline();

export const initHeroAnimation = () => {
  heroTimeline
    .to(`.title`, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
    })
    .to(`.developer`, {
      opacity: 1,
      y: 5,
      duration: 1.4,
      ease: "power2.out",
    })
    .to(
      `.software`,
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=2",
    )
    .to(`.line`, {
      width: "100%",
      ease: "power3.out",
    });

  return heroTimeline;
};

// lib/animations/tag-animation.ts

export const textTimeline = gsap.timeline();
export const textAnimation = () => {
  textTimeline
    .to(`.hero-text`, {
      text: {
        value: "I like to craft solid and scalable frontend products with great user experiences.",
        newClass: "text-black",
        speed: 1,
      },
      ease: "none",
    })
    .to(`.hero-text-1`, {
      text: {
        value: "Highly skilled at progressive enhancement, design systems & UI Engineering.",
        newClass: "text-black",
        speed: 1,
      },
      ease: "none",
    })
    .to(`.hero-text-2`, {
      text: {
        value: "Proven experience building successful products for clients across several countries.",
        newClass: "text-black",
        speed: 1,
      },
      ease: "none",
    });
  return textTimeline;
};

export const showTimeline = gsap.timeline();
export const showAnimation = () => {
  showTimeline
    .to(`.show`, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
    })
    .to(`.show-tag`, {
      opacity: 1,
      width: "44px",
      paddingLeft: "4px",
      paddingRight: "4px",
      stagger: 0.2,
      duration: 0.5,
      ease: "bounce.out",
    });
  return showTimeline;
};

export const tagTimeline = gsap.timeline();
export const tagAnimation = (tag: HTMLElement) => {
  tagTimeline.to(tag, {
    opacity: 1,
    ease: "none",
    text: {
      value: "Ifijeh Kingsley Solomon",
    },
  });
  return tagTimeline;
};
