import { NavLogo } from "@/components/shared/navbar/navbar-logo";

import { Hero } from "./_views/hero";

export default function Page() {
  return (
    <section className={`space-y-[1rem] lg:space-y-[5rem]`}>
      <NavLogo />
      <Hero />
    </section>
  );
}
