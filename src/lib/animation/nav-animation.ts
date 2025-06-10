import { gsap } from "gsap";

export const navAnimation = (isMobile: boolean = false) => {
  const stagger = isMobile ? 0.15 : 0.1;
  const yOffset = isMobile ? 50 : 20;

  return gsap.fromTo(
    ".cc-nav",
    {
      opacity: 0,
      y: yOffset,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: stagger,
    },
  );
};
