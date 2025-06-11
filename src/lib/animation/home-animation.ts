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
        value: "I build stuff you see on the internet   &   Apps you use on mobile devices too!",
        newClass: "text-black",
        speed: 1,
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 10,
      ease: "none",
    })
    .to(`.hero-text-1`, {
      text: {
        value: "...using tools like [ REACT.js, VUE.js, TAILWINDCSS, TYPESCRIPT, NEXT.js ]...etc",
        newClass: "text-black",
        speed: 1,
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 10,
      ease: "none",
    })
    .to(`.hero-text-2`, {
      text: {
        value:
          "SCALABLE, EFFICIENT, SECURE, ROBUST, OPTIMIZED...a few of this words have been used to describe my projects.",
        newClass: "text-black",
        speed: 1,
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 10,
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
