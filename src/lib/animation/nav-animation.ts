// lib/animations/tag-animation.ts

import gsap from "./gsap";

export const navAnimation = () => {
  const tl = gsap.timeline();
  tl.from(`.cc-nav`, {
    duration: 1,
    x: 0,
    stagger: 2,
  });
  return tl;
};
