"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";

import { MySvgPic } from "./my-svg-pic";

export const Me = () => {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 z-0 h-[100vh] w-[50%] overflow-hidden">
      {/* SVG Background - maintains position with responsive scaling */}
      <MySvgPic
        className={`absolute right-0 translate-x-[25%] translate-y-[35%] scale-[2] opacity-10 md:translate-y-[25%] md:scale-[2] lg:translate-x-[20%] lg:translate-y-[20%] lg:scale-[2] xl:opacity-10`}
      />

      {/* Main Image - maintains bottom-right position with responsive scaling */}
      <BlurImage
        className={`absolute right-0 bottom-0 origin-bottom-right translate-x-[25%] translate-y-[25%] scale-75 md:scale-90 lg:translate-x-[35%] lg:translate-y-[35%] lg:scale-100`}
        src="/images/me.svg"
        alt="Illustration shadow effect"
        width={500}
        height={800}
        priority
      />
    </div>
  );
};
