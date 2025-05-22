"use server";

import { getProjects } from "@/action/project.action";
import { Wrapper } from "@/components/core/layout/wrapper";

import { ProjectCard } from "../../_components/project-card";

export const Projects = async () => {
  const projects = await getProjects();

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
    <Wrapper className={`cc-3d-group`}>
      <div className="">
        {/* Showcase Title */}
        <span className="cc-border text-accent font-mono text-xl/5 font-medium tracking-wider uppercase">Showcase</span>

        {/* Main Heading */}
        <h3 className="cc-border-down mt-4 text-4xl/9 font-black tracking-tighter">Proof of Competence</h3>

        {/* Description */}
        <p className="cc-border text-high-grey-III mt-10 font-sans text-lg leading-8 font-medium">
          Its the little things, a padding here, a margin there, a border here, a shadow there. It all adds up to make a
          great experience.
        </p>
      </div>

      {/* Projects Grid - Outside 3D context for better usability */}
      <div className="mt-10">
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} className="cc-3d-flat" />
          ))}
        </section>
      </div>
    </Wrapper>
  );
};
