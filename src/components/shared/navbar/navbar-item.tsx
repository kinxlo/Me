/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";

import MainButton from "../button";

type NavItemProperties = {
  content: string;
  path: string;
  variant: any;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  isExternal?: boolean;
  index?: number; // Added for staggered animations
};

export const NavItem = ({ content, path, variant, isActive, isMobile = false }: NavItemProperties) => {
  return (
    <MainButton
      href={path}
      variant={variant}
      className={cn(
        "cc-nav relative text-2xl transition-opacity duration-300 hover:opacity-100 md:text-xl",
        "text-black/50 transition-all hover:translate-x-10 hover:text-black dark:text-white/70 dark:hover:text-white",
        isActive && "!text-primary font-bold underline underline-offset-4",
        isMobile && "text-4xl",
      )}
    >
      {content}
    </MainButton>
  );
};
