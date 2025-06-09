import gsap from "./gsap";

export const heroTextAnimation = () => {
  const tl = gsap.timeline();

  tl.from(`.title`, {
    opacity: 1,
    y: 0,
    ease: "power3.out",
  })
    .from(
      `.developer`,
      {
        opacity: 1,
        y: 0, // from translateY(100%) to 0
        duration: 1.4,
        ease: "power2.out",
      },
      // "-=1.5",
    )
    .from(
      `.software`,
      {
        opacity: 1,
        y: 0, // from translateY(-100%) to 0
        duration: 1.4,
        ease: "power2.out",
      },
      "-=2",
    )
    .to(`.line`, {
      width: "100%",
      ease: "power3.out",
    });
  // .from(`.cc-nav`, {
  //   x: `-100vw`,
  //   stagger: 0.2,
  // });

  return tl;
};
