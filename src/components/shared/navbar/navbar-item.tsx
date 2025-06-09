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
};

export const NavItem = ({
  content,
  path,
  variant,
  isActive,
  isMobile = false,
  onClick,
  isExternal = false,
}: NavItemProperties) => {
  return (
    <MainButton
      href={path}
      variant={variant}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "cc-nav relative text-2xl transition-all duration-300 hover:opacity-100 md:text-xl",
        "text-black/50 hover:text-black dark:text-white/70 dark:hover:text-white",
        isActive && "!text-primary font-bold underline underline-offset-4",
        isMobile && "text-4xl",
        "hover:translate-x-[20%]",
      )}
      onClick={onClick}
    >
      {content}
    </MainButton>
  );
};
