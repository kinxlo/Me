import { gsap } from "gsap";

export const heroTimeline = gsap.timeline({ paused: true });

export const initHeroAnimation = () => {
  heroTimeline
    .from(`.title`, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
    })
    .from(`.developer`, {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power2.out",
    })
    .from(
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
