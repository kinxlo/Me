"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useAppContext } from "@/hooks/use-app-context";
import { cn } from "@/lib/utils";

export const Me = () => {
  const { isOnAboutMe } = useAppContext();
  return (
    <BlurImage
      src={"/images/me.svg"}
      alt={"Me"}
      width={507}
      height={469.32}
      className={cn(
        `fixed right-0 bottom-0 isolate object-cover object-top opacity-20 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] dark:invert`,
        // `-rotate-y-50 transform`, // Counter the 28deg tilt
        isOnAboutMe && `lg:opacity-100`,
      )}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    />
  );
};
