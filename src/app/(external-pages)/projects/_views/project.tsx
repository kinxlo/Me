"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectsCarousel } from "../../_components/project-carousel";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  if (!projects?.length) {
    return (
      <Wrapper>
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <div>
      <Wrapper className="mt-0 space-y-4 p-0">
        <section className="mt-[5rem] max-w-(--breakpoint-md) -rotate-2 space-y-1 px-2">
          <h1 className="cc-border text-primary">Showcase</h1>
          <p className="project-text cc-border font-head text-2xl text-black/90">
            Here you will find some project that made it from development to production.
          </p>
          <p className={`font-sea mt-4 text-xl`}>
            <span className={`text-primary`}>Note:</span> that this previews are interactive to a point. if you want to
            have the full experience, click the link attached to the project.
          </p>
        </section>

        <section className="cc-border my-[5rem] space-y-[5rem] py-1 lg:space-y-[10rem]">
          <ProjectsCarousel projects={projects} />
        </section>
      </Wrapper>
    </div>
  );
};
