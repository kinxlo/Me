// lib/animations/tag-animation.ts

import gsap from "./gsap";

export const tagAnimation = (tag: HTMLElement) => {
  const tl = gsap.timeline();
  tl.to(tag, {
    duration: 1,
    text: "Ifijeh Kingsley Solomon",
    ease: "none",
  });
  return tl;
};
