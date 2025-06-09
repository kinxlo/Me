import gsap from "./gsap";

export const heroTextAnimation = ({
  title,
  developer,
  software,
  line,
}: {
  title: HTMLElement;
  developer: HTMLElement;
  software: HTMLElement;
  line: HTMLElement;
}) => {
  const tl = gsap.timeline();

  tl.to(title, {
    opacity: 1,
    y: 0,
    ease: "power3.out",
  })
    .to(
      developer,
      {
        opacity: 1,
        y: 0, // from translateY(100%) to 0
        duration: 1.4,
        ease: "power2.out",
      },
      // "-=1.5",
    )
    .to(
      software,
      {
        opacity: 1,
        y: 0, // from translateY(-100%) to 0
        duration: 1.4,
        ease: "power2.out",
      },
      "-=2",
    )
    .to(line, {
      width: "100%",
      ease: "power3.out",
    });

  return tl;
};
