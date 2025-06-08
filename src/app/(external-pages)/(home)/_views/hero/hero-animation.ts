import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// Returns animation function that can be added to a timeline
export const heroStaggerAnimation = (targets: gsap.TweenTarget) => {
  return (tl: gsap.core.Timeline) => {
    return tl.from(targets, {
      duration: 1.5,
      text: "",
      stagger: 0.1,
      ease: "power3.out",
    });
  };
};

export const fadeInAnimation = (targets: gsap.TweenTarget) => {
  return (tl: gsap.core.Timeline) => {
    return tl.from(targets, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out",
    });
  };
};
