"use client";

import { BlurImage } from "@/components/core/miscellaneous/blur-image";
// import { useSearchParameters } from "@/hooks/use-search-parameters";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// import { Skills } from "./skills";

export const Me = () => {
  const view = usePathname();
  return (
    <section
      className={cn(
        `fixed right-0 bottom-0 isolate object-cover object-top mix-blend-multiply transition-all duration-500 ease-out lg:opacity-50`,
        `max-h-[40%] max-w-[30%]`,
        `xl:max-h-[70%] xl:max-w-[60%]`,
        `origin-bottom-right`,
        view.includes(`/about`) && `opacity-30`,
      )}
    >
      <BlurImage src={"/images/me.svg"} alt={"Illustration of me"} width={507} height={469.32} priority />

      {/* {!view.includes(`/about`) && (
        <Skills
          className={`font-sea -xl:left-[20%] bottom-[10%] -left-[20%] z-10 hidden -rotate-10 lg:absolute lg:block`}
        />
      )} */}
    </section>
  );
};
