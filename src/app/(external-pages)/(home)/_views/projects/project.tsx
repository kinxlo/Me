"use client";

import { Wrapper } from "@/components/core/layout/wrapper";

import { ProjectCard } from "../../_components/project-card";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  if (!projects || projects.length === 0) {
    return (
      <Wrapper>
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper id={`projects`} className={`cc-3d-group`}>
      <div>
        <span className="cc-border font-mono text-lg font-medium tracking-wider">Showcase</span>

        <figure className={`cc-border-down`}>
          <h3 className="text-4xl font-black tracking-tighter">Proof of Competence</h3>
          <p className="text-high-grey-III max-w-(--breakpoint-md) font-sans text-lg font-medium">
            Its the little things, a padding here, a margin there, a border here, a shadow there. It all adds up to make
            a great experience.
          </p>
        </figure>
      </div>

      <div className="mt-10">
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </Wrapper>
  );
};
