import gsap from "../gsap/init";
import { timelineRegistry } from "../timeline-registery";

export const initHomeHeroAnimation = (elements: { title: HTMLElement | null; subtitle: HTMLElement | null }) => {
  if (!elements.title || !elements.subtitle) return;

  const tl = gsap.timeline();
  tl.from(elements.title, { y: 50, opacity: 0, duration: 1, ease: "power3.out" }).from(
    elements.subtitle,
    { y: 50, opacity: 0, duration: 1 },
    "-=0.5",
  );
  timelineRegistry.set("home-hero", tl);
};
