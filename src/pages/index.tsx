import { HomeSVGBG } from "@/components/shared/me/paths/home-svg-bg";
import { Hero } from "@/components/views/hero";

export default function Page() {
  return (
    <main className={`mt-[5rem] lg:mt-0`}>
      <HomeSVGBG />
      <Hero />
    </main>
  );
}
