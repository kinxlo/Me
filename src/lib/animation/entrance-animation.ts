// lib/animations/entrance.ts
import gsap from "gsap";

export const entranceAnimation = (tl: gsap.core.Timeline, container: HTMLElement) => {
  gsap.set(container, { opacity: 0 }); // ensure it's hidden initially

  tl.to(container, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
  });
};
