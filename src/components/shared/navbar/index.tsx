"use client";

import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import { NAV_LINKS } from "@/lib/tools/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MainButton from "../button";
import { NavItems } from "./nav-menu-item";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={cn(`cc-shades text-primary sticky top-0 z-[500] border-b backdrop-blur-2xl`)} role="navbar">
      <Wrapper className="flex w-full max-w-[1280px] items-center justify-between p-0 pr-4 lg:pr-0">
        <div className={`flex items-center gap-4`}>
          <MainButton variant={`accent`} className={`cursor-default`}>
            I19N
          </MainButton>
          <ModeToggle />
          <NavItems className={`hidden lg:block`} links={NAV_LINKS} />
        </div>
        <div className={`hidden items-center lg:flex`}>
          <MainButton variant={`accent`}>Contact Me</MainButton>
        </div>
        <MainButton
          variant="ghost"
          size="icon"
          className="lg:hidden"
          isIconOnly
          icon={isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        />
      </Wrapper>
      {isMobileMenuOpen && (
        <div className={cn("fixed inset-x-0 z-40 w-full bg-white shadow-none lg:hidden")}>
          <div>
            <NavItems className={``} links={NAV_LINKS} isMobile />
          </div>
        </div>
      )}
    </nav>
  );
};
