import { gsap } from "gsap";

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
