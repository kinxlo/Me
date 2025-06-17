"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import ReactLogo from "./paths/react";
import { ProjectSVGBG } from "./project-svg-bg";

// import { me } from "./path";

export const Me = () => {
  const pathname = usePathname();
  return (
    <div className="pointer-events-none fixed right-0 bottom-0 z-0 h-[100vh] w-[50%] overflow-hidden !mix-blend-multiply">
      {/* SVG Background - maintains position with responsive scaling */}
      {pathname === "/" ? (
        <ReactLogo />
      ) : (
        <ProjectSVGBG
          // path={me}
          className={cn(
            `absolute right-0 translate-x-[25%] translate-y-[35%] scale-[1.5] opacity-20 md:translate-y-[25%] lg:translate-x-[20%] lg:translate-y-[20%]`,
            pathname.includes(`/project`) && `hidden translate-0 scale-[1] lg:block lg:translate-0`,
          )}
        />
      )}

      {/* Main Image - maintains bottom-right position with responsive scaling */}
      <BlurImage
        className={cn(
          `absolute right-0 bottom-0 origin-bottom-right translate-x-[25%] translate-y-[25%] scale-75 md:scale-90 lg:translate-x-[35%] lg:translate-y-[35%] lg:scale-100`,
          pathname.includes(`/projects`) && `hidden`,
        )}
        src="/images/me.svg"
        alt="Illustration shadow effect"
        width={500}
        height={800}
        priority
      />
    </div>
  );
};
