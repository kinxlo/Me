// components/shared/Animator.tsx
"use client";

import { useLayoutEffect, useRef } from "react";

type AnimatorProperties = {
  children: React.ReactNode;
  animation: (element: HTMLDivElement) => void;
  // timeline: gsap.core.Timeline;
};

export const Animator = ({ children, animation }: AnimatorProperties) => {
  const reference = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reference.current) {
      animation(reference.current);
    }
  }, [animation]);

  return <div ref={reference}>{children}</div>;
};
