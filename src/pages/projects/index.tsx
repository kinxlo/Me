// src/app/projects/page.tsx
"use client";

import { ProjectSVGBG } from "@/components/shared/me/project-svg-bg";
import { ProjectsClient } from "@/components/views/project";
import { useGlobalContext } from "@/context/global-context";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { projects, loading, error } = useGlobalContext();

  if (loading) {
    return (
      <div className={`flex h-[100dvh] w-full items-center justify-center`}>
        <p className={`text-primary font-head text-3xl font-black`}>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="relative">
      <section className={`fixed right-0 bottom-0 z-0 h-[100vh] w-full overflow-hidden lg:w-[50%]`}>
        <ProjectSVGBG
          className={cn(
            `absolute right-0 translate-x-[25%] translate-y-[35%] opacity-20 md:translate-y-[25%] lg:translate-x-[20%] lg:translate-y-[20%]`,
            "scale-[1] lg:block",
          )}
        />
      </section>
      <ProjectsClient projects={projects} />
    </section>
  );
}
