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
        `fixed right-0 bottom-0 object-cover object-top opacity-20 dark:invert`,
        isOnAboutMe && `lg:opacity-100`,
      )}
    />
  );
};
