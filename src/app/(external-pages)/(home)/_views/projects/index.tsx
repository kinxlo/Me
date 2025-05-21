"use server";

import { getProjects } from "@/action/project.action";
import { Wrapper } from "@/components/core/layout/wrapper";

import { ProjectCard } from "../../_components/project-card/project-card";

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
    <section>
      <Wrapper className="py-0">
        <span className={`cc-border text-high-grey-III font-mono text-xl/5 font-medium tracking-wider uppercase`}>
          Showcase
        </span>
        <h3 className={`cc-border-down mt-4 text-4xl/9 font-black tracking-tighter`}>Proof of Competence</h3>
        <p className={`cc-border text-high-grey-III mt-10 pt-4 font-sans text-lg leading-8 font-medium`}>
          I was previlaged to encountered several fantastic developers while searching for ways to challenge and improve
          myself. We spoke, sipped tea (coffee was during debugging), and here are some of the concepts we made into
          reality.
        </p>
      </Wrapper>
      <Wrapper className="bg-accent/5 mt-10 p-0">
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </Wrapper>
    </section>
  );
};
