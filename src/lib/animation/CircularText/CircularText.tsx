/* eslint-disable react-hooks/exhaustive-deps */
/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { motion, MotionValue, Transition, useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";

interface CircularTextProperties {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProperties> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = [...text];
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleValue = 1;

    switch (onHover) {
      case "slowDown": {
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      }
      case "speedUp": {
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      }
      case "pause": {
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      }
      case "goBonkers": {
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleValue = 0.8;
        break;
      }
      default: {
        transitionConfig = getTransition(spinDuration, start);
      }
    }

    controls.start({
      rotate: start + 360,
      scale: scaleValue,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, index) => {
        const rotationDeg = (360 / letters.length) * index;
        const factor = Math.PI / letters.length;
        const x = factor * index;
        const y = factor * index;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={index}
            className="absolute inset-0 inline-block text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
