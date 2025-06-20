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
    <Wrapper className={cn(`max-w-(--breakpoint-lg)`)}>
      <span className="border-primary font-sea text-primary rounded-full border-2 bg-black/10 px-2.5 py-1 text-xl font-medium">
        I19N
      </span>
    </Wrapper>
  );
};
