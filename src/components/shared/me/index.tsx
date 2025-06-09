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
        `fixed right-0 bottom-0 isolate object-cover object-top mix-blend-multiply transition-all duration-500 ease-out`,
        `max-h-[40%] max-w-[30%]`,
        `xl:max-h-[70%] xl:max-w-[60%]`,
        `origin-bottom-right`,
        `opacity-50`,
      )}
    >
      <BlurImage src={"/images/me.svg"} alt={"Illustration of me"} width={507} height={469.32} priority />

      <Skills
        className={`font-sea -xl:left-[20%] bottom-[15%] -left-[40%] z-10 hidden -rotate-10 lg:absolute lg:block`}
      />
    </section>
  );
};
