// src/app/projects/page.tsx
"use client";

import { ProjectsClient } from "@/components/views/project";
import { useGlobalContext } from "@/context/global-context";
import gsap from "@/lib/animation/gsap/init";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Projects() {
  const { projects, loading, error } = useGlobalContext();
  const projectPage = useRef(null);
  const { timeline } = useGlobalContext();
  useGSAP(
    () => {
      gsap.fromTo(projectPage.current, { opacity: 0 }, { opacity: 1 });
      timeline.add(gsap.to(projectPage.current, { opacity: 0 }));
    },
    { scope: projectPage },
  );

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
    <main ref={projectPage}>
      <ProjectsClient projects={projects} />
    </main>
  );
}
