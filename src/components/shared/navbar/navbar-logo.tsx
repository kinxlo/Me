"use client";

import { Badge } from "@/components/ui/badge";
import { tagAnimation } from "@/lib/animation/tag-animation";
import { useRef } from "react";

export const NavLogo = () => {
  const nameReference = useRef<HTMLHeadingElement>(null);

  const handleMouseEnter = () => {
    if (nameReference.current) {
      tagAnimation(nameReference.current);
    }
  };

  const handleMouseLeave = () => {
    if (nameReference.current) {
      nameReference.current.textContent = "I19N";
    }
  };

  return (
    <Badge
      ref={nameReference}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="absolute bottom-[20%] rounded-none bg-black"
    >
      I19N
    </Badge>
  );
};
