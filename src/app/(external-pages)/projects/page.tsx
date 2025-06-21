// src/app/projects/page.tsx
"use client";

import { useProjects } from "@/context/global-context";

import { ProjectsClient } from "./_views/project";

export default function Projects() {
  const { projects, loading, error } = useProjects();

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

  return <ProjectsClient projects={projects} />;
}
