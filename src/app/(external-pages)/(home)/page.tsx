import { Me } from "@/components/shared/me";

// import { ThemeSlider } from "./_components/theme-slider";
import { About } from "./_views/about";
import { Hero } from "./_views/hero";
import Projects from "./_views/projects";

const Page = () => {
  return (
    <>
      <Me />
      <Hero />
      <Projects />
      <About />
      {/* <ThemeSlider /> */}
    </>
  );
};
export default Page;
