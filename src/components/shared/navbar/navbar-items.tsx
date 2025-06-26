"use client";

import { useResponsiveLayout } from "@/hooks/use-media-query";
import { NAV_ITEMS } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { NavItem } from "./navbar-item";

type NavItemsProperties = {
  isMobile?: boolean;
  onItemClick?: () => void;
  className?: string;
  itemClassName?: string;
};

export const NavItems = ({ onItemClick, className, itemClassName }: NavItemsProperties) => {
  const { isMobile } = useResponsiveLayout();
  const pathname = usePathname();

  return (
    <ul className={cn("flex flex-col lg:items-start", className)}>
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={index}
          className={cn(itemClassName)}
          content={item.content}
          path={item.path}
          variant={item.variant}
          isActive={item.path === "/" ? pathname === "/" : pathname.startsWith(item.path) && item.path !== "/"}
          isMobile={isMobile}
          onClick={() => {
            if (isMobile && onItemClick) {
              onItemClick();
            }
          }}
          isExternal={item.isExternal}
        />
      ))}
    </ul>
  );
};
