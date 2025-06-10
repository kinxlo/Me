/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useAnimation.ts
import gsap from "@/lib/animation/gsap";
import { useEffect, useRef } from "react";

type AnimationSetup = (tl: gsap.core.Timeline, context?: gsap.Context | null) => void;

export const useAnimation = (animationSetup: AnimationSetup, dependencies: any[] = []) => {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const context = useRef<gsap.Context | null>(null);

  // Initialize animation
  useEffect(() => {
    context.current = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });
      animationSetup(timeline.current, context.current);
    });

    return () => {
      // Cleanup
      timeline.current?.kill();
      context.current?.revert();
    };
  }, dependencies);

  // Animation controls
  const play = () => timeline.current?.play();
  const pause = () => timeline.current?.pause();
  const reverse = () => timeline.current?.reverse();
  const restart = () => timeline.current?.restart();
  const seek = (position: number) => timeline.current?.seek(position);
  const timeScale = (rate: number) => {
    if (timeline.current) timeline.current.timeScale(rate);
  };

  return {
    timeline: timeline.current,
    play,
    pause,
    reverse,
    restart,
    seek,
    timeScale,
  };
};
