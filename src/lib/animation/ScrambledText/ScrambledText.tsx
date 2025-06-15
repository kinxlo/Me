/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProperties {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProperties> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}) => {
  const rootReference = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootReference.current) return;

    const split = SplitText.create(rootReference.current.querySelector("p"), {
      type: "chars",
      charsClass: "inline-block will-change-transform",
    });

    for (const element_ of split.chars) {
      const c = element_ as HTMLElement;
      gsap.set(c, { attr: { "data-content": c.innerHTML } });
    }

    const handleMove = (event: PointerEvent) => {
      for (const element_ of split.chars) {
        const c = element_ as HTMLElement;
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = event.clientX - (left + width / 2);
        const dy = event.clientY - (top + height / 2);
        const distribution = Math.hypot(dx, dy);

        if (distribution < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - distribution / radius),
            scrambleText: {
              text: c.dataset.content || "",
              chars: scrambleChars,
              speed,
            },
            ease: "none",
          });
        }
      }
    };

    const element = rootReference.current;
    element.addEventListener("pointermove", handleMove);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div
      ref={rootReference}
      className={`m-[7vw] max-w-[800px] font-mono text-[clamp(14px,4vw,32px)] text-white ${className}`}
      style={style}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
