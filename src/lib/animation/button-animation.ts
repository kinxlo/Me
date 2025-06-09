// lib/animations/buttonHover.ts
import gsap from "./gsap";

export const buttonHover = (button: Element) => {
  const context = gsap.context(() => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        width: "5rem",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        width: "",
      });
    });
  }, button);

  return () => context.revert();
};
