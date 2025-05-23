"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { useIntersection } from "@/hooks/use-observer";
import { cn } from "@/lib/utils";

import { ProjectCard } from "../../_components/project-card";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  const _title1 = useIntersection({
    threshold: 0.9,
  });

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
        <span className="cc-border text-primary font-mono text-xl/5 font-medium tracking-wider">Showcase</span>

        <figure className={`cc-border`}>
          <div className={cn(_title1.isIntersecting && `cc-3d-item-move`)} ref={_title1.ref}>
            <h3 className="mt-4 text-4xl/9 font-black tracking-tighter">Proof of Competence</h3>
            <p className="text-high-grey-III mt-5 font-sans text-lg leading-8 font-medium">
              Its the little things, a padding here, a margin there, a border here, a shadow there. It all adds up to
              make a great experience.
            </p>
          </div>
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
