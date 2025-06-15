"use client";

// import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { NAV_ITEMS } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { NavItem } from "./navbar-item";

type NavItemsProperties = {
  isMobile?: boolean;
  onItemClick?: () => void;
};

export const NavItems = ({ isMobile = false, onItemClick }: NavItemsProperties) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        `flex -rotate-2 flex-col items-center justify-center gap-8 md:gap-4 lg:items-start`,
        `md:flex-row`,
        // pathname.includes(`/project`) && `md:flex-row`,
      )}
    >
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={index}
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
      {/* <ModeToggle /> */}
    </div>
  );
};
