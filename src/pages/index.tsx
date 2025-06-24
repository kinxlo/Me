import { HomeSVGBG } from "@/components/shared/me/paths/home-svg-bg";
import { Hero } from "@/components/views/hero";

export default function Page() {
  return (
    <main className={`space-y-[1rem] lg:space-y-[5rem]`}>
      <HomeSVGBG />
      <Hero />
    </main>
  );
}
