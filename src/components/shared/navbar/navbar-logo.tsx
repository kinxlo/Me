"use client";

import { cn } from "@/lib/utils";

// import { tagAnimation } from "@/lib/animation/tag-animation";

// import { usePathname } from "next/navigation";
// import { useRef } from "react";

export const NavLogo = ({ className }: { className?: string }) => {
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
    <div
      className={cn(
        `font-sea w-fit rounded-full border-2 border-gray-800 bg-black/10 px-2.5 text-xl font-medium text-gray-800 backdrop-blur-3xl`,
        className,
      )}
    >
      I19N
    </div>
  );
};
