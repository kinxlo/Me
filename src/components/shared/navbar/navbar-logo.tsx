"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
// import { tagAnimation } from "@/lib/animation/tag-animation";
import { cn } from "@/lib/utils";

// import { usePathname } from "next/navigation";
// import { useRef } from "react";

export const NavLogo = () => {
  // const nameReference = useRef<HTMLHeadingElement>(null);
  // const path = usePathname();

  // const handleMouseEnter = () => {
  //   if (nameReference.current) {
  //     tagAnimation(nameReference.current);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (nameReference.current) {
  //     nameReference.current.textContent = "I19N";
  //   }
  // };

  return (
    <Wrapper className={cn(`cc-border max-w-(--breakpoint-lg) py-0`)}>
      <span className="font-sea rounded-full border-2 border-gray-800 bg-black/10 px-2.5 py-1 text-xl font-medium text-gray-800">
        I19N
      </span>
    </Wrapper>
  );
};
