"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
// import { useSearchParameters } from "@/hooks/use-search-parameters";
import { cn } from "@/lib/utils";

import { Skills } from "./skills";

export const Me = () => {
  // const view = useSearchParameters("view");
  return (
    <section
      className={cn(
        `fixed right-0 bottom-0 isolate max-h-[40%] max-w-[30%] object-cover object-top mix-blend-multiply transition-all duration-500 ease-out lg:max-h-[70%] lg:max-w-[60%]`,
        `origin-bottom-right`,
        `opacity-50`,
      )}
    >
      <BlurImage src={"/images/me.svg"} alt={"Illustration of me"} width={507} height={469.32} priority />

      <Skills className={`font-sea -top-[10%] -left-[10%] z-10 hidden -rotate-10 lg:absolute lg:block`} />
    </section>
  );
};
