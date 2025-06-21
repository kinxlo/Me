"use client";

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type MobileMenuButtonProperties = ComponentPropsWithoutRef<"button"> & {
  isOpen: boolean;
};

export const MobileMenuButton = ({ isOpen, ...properties }: MobileMenuButtonProperties) => {
  return (
    <button
      {...properties}
      className="fixed top-4 right-4 z-[1000] mr-1 rounded-full border-2 border-black bg-black/10 p-2 backdrop-blur-3xl transition-all hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className={cn("h-0.5 w-6 bg-black transition-all", isOpen && "translate-y-1.5 rotate-45")} />
      <div className={cn("mt-1.5 h-0.5 w-6 bg-black transition-all", isOpen && "-translate-y-1.5 -rotate-45")} />
    </button>
  );
};
