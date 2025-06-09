import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

// Modified Animator component
export const Animator = ({
  children,
  animation,
  timeline,
}: {
  children: React.ReactNode;
  animation: (tl: gsap.core.Timeline) => void;
  timeline: gsap.core.Timeline;
}) => {
  const reference = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reference.current) {
      animation(timeline);
    }
  }, [animation, timeline]);

  return <div ref={reference}>{children}</div>;
};
