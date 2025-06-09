// lib/animations/scrollReveal.ts

import gsap from "./gsap";

export const scrollReveal = (selector: string | Element) => {
  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
      },
    },
  );
};
