/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAnimation } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

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

export const NavItem = ({ content, path, variant, isActive, isMobile = false, onClick }: NavItemProperties) => {
  // Animation setup
  const { play } = useAnimation((tl) => {
    tl.from(`.cc-nav`, {
      duration: 1,
      x: 0,
      stagger: 2,
    });
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    play();
  }, [play]);

  return (
    <MainButton
      href={path}
      variant={variant}
      className={cn(
        "cc-nav relative text-2xl transition-opacity duration-300 hover:opacity-100 md:text-xl",
        "text-black/50 hover:text-black dark:text-white/70 dark:hover:text-white",
        isActive && "!text-primary font-bold underline underline-offset-4",
        isMobile && "text-4xl",
      )}
      onClick={onClick}
    >
      {content}
    </MainButton>
  );
};
