"use client";

// app/(external-pages)/(home)/page.tsx
import { Me } from "@/components/shared/me";
import { useSearchParameters } from "@/hooks/use-search-parameters";

import { About } from "./_views/about";
import { Hero } from "./_views/hero";
import Projects from "./_views/projects";

// This becomes a client component since it uses hooks
const HomeClient = () => {
  const view = useSearchParameters("view");

  if (view === "projects") return <Projects />;
  if (view === "about")
    return (
      <>
        <Me />
        <About />
      </>
    );

  return (
    <>
      <Me />
      <Hero />
    </>
  );
};

// The default export remains a server component
export default function Page() {
  return <HomeClient />;
}
