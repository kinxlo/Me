// lib/animations/tag-animation.ts

import gsap from "./gsap";

export const navAnimation = (tl: gsap.core.Timeline) => {
  tl.from(`.cc-nav`, {
    duration: 1,
    x: 0,
    stagger: 2,
  });
};
