"use client";

import { Badge } from "@/components/ui/badge";
// import { tagAnimation } from "@/lib/animation/tag-animation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export const NavLogo = () => {
  const nameReference = useRef<HTMLHeadingElement>(null);
  const path = usePathname();

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
    <Badge
      ref={nameReference}
      // onMouseLeave={handleMouseLeave}
      // onMouseEnter={handleMouseEnter}
      className={cn(
        "cc-init show-tag absolute bottom-[20%] w-0 rounded-none bg-black px-0",
        path.includes(`/about`) || (path.includes(`/projects`) && `hidden`),
      )}
    >
      I19N
    </Badge>
  );
};
