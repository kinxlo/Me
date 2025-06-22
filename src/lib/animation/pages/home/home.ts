import gsap from "@/lib/animation/gsap/init";

export const HTL = gsap.timeline({
  paused: true,
  defaults: { duration: 1.5 },
});

export const runHomeAnimation = () => {
  HTL.fromTo(
    ".gsap-social-button",
    {
      y: 50,
    },
    {
      y: 0,
      opacity: 1,
      visibility: "visible",
    },
  );
};
