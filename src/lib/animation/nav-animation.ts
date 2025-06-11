import { gsap } from "gsap";

export const navAnimation = (isMobile: boolean) => {
  gsap.to(".cc-nav", {
    opacity: 1,
    y: isMobile ? 20 : 10,
    duration: 0.1,
    ease: "power2.out",
    stagger: isMobile ? 0.15 : 0.1,
  });
};
