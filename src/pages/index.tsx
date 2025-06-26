import { HomeSVGBG } from "@/components/shared/me/paths/home-svg-bg";
import { ScrollIndicator } from "@/components/shared/navbar";
import { Hero } from "@/components/views/hero";

export default function Page() {
  return (
    <main className={`lg:mt-0`}>
      <HomeSVGBG />
      <ScrollIndicator />
      <Hero />
    </main>
  );
}
