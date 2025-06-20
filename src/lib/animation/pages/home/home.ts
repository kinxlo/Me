import gsap from "gsap";

import { timelineRegistry } from "../../timeline-registery";

export const initHomeHeroAnimation = ({
  subtitle,
  cardsContainer,
  socialsContainer,
}: {
  subtitle: HTMLElement | null;
  cardsContainer: HTMLElement | null;
  socialsContainer: HTMLElement | null;
}) => {
  if (!subtitle || !cardsContainer || !socialsContainer) return;

  // Get all h1 elements (assuming they're siblings)
  const cards = [...cardsContainer.children];
  const socialButtons = [...socialsContainer.children];
  const subtitleText = subtitle.querySelector("p");

  gsap.set([subtitleText, cards, socialButtons], {
    opacity: 0,
    y: 20,
  });

  // Create master timeline
  const masterTL = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  // Subtitle animation
  masterTL.to(
    subtitleText,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    },
    ">0.4",
  );

  // Cards animation
  masterTL.to(
    cards,
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "back.out(1.7)",
    },
    ">0.3",
  );

  // Social buttons
  masterTL.to(
    socialButtons,
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
    },
    ">0.2",
  );

  timelineRegistry.set("home-hero", masterTL);
};
