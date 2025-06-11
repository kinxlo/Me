/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

export const NavItem = ({ content, path, variant, isActive, isMobile = false, onClick }: NavItemProperties) => {
  const navItemReference = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      // Animation is now handled by the parent component
    },
    { scope: navItemReference },
  );

  return (
    <MainButton
      ref={navItemReference}
      href={path}
      variant={variant}
      className={cn(
        "cc-nav font-head relative opacity-0 transition-all duration-300 hover:opacity-100 md:text-2xl",
        "text-black/50 hover:text-black",
        isActive && "!text-primary font-bold underline underline-offset-4",
        isMobile && "text-4xl text-white",
      )}
      onClick={() => {
        if (isMobile && onClick) {
          onClick();
        }
      }}
    >
      {content}
      {!isMobile && (
        <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
      )}
    </MainButton>
  );
};
