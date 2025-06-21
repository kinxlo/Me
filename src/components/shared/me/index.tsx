"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { AboutSVGBG } from "./paths/about-svg-bg";
import { HomeSVGBG } from "./paths/home-svg-bg";
import { ProjectSVGBG } from "./project-svg-bg";

// import { me } from "./path";

export const Me = () => {
  const pathname = usePathname();
  return (
    <div className="pointer-events-none fixed right-0 bottom-0 z-0 h-[100vh] w-[100%] overflow-hidden !mix-blend-multiply lg:w-[50%]">
      {(() => {
        switch (pathname) {
          case "/": {
            return <HomeSVGBG />;
          }
          case "/about": {
            // return;
            return <AboutSVGBG />;
          }
          case "/projects": {
            return (
              <ProjectSVGBG
                className={cn(
                  `absolute right-0 translate-x-[25%] translate-y-[35%] opacity-20 md:translate-y-[25%] lg:translate-x-[20%] lg:translate-y-[20%]`,
                  "translate-0 scale-[1] lg:block lg:translate-0",
                )}
              />
            );
          }
          default: {
            return null;
          }
        }
      })()}
    </div>
  );
};
