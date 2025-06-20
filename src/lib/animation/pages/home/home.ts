import gsap from "gsap";

// Create master timeline
export const HTL = gsap.timeline({
  paused: false,
  defaults: { ease: "power3.out" },
});

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

  // Subtitle animation
  HTL.to(
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
  HTL.to(
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
  HTL.to(
    socialButtons,
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
    },
    ">0.2",
  );
};
