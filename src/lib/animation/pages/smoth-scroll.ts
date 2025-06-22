import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import gsap from "../gsap/init";

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export const runSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: isTouchDevice() ? 0.8 : 1.2,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
    gsap.ticker.remove((time) => {
      lenis.raf(time * 1000);
    });
  };
};
