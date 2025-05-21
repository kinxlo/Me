"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import MainButton from "../../button";
import { NavItems } from "../nav-menu-item";

// import { usePathname } from "next/navigation";

export const Navbar = () => {
  // const pathname = usePathname();

  return (
    <nav className={cn(`cc-border w-full border-y backdrop-blur-sm transition-transform duration-300`)} role="navbar">
      <section className="flex w-full items-center justify-between">
        <div>
          <NavItems links={NAV_LINKS} />
        </div>
        <div className={`flex items-center`}>
          <div className={`flex items-center gap-4`}>
            <SidebarTrigger className={cn(`h-8 w-8`)} />
          </div>
          <MainButton variant={`ghost`} className={`cc-border border-l`}>
            Contact Me
          </MainButton>
        </div>
      </section>
    </nav>
  );
};
