"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import {
  initProjectAnimationList,
  projectTextAnimation,
  showProjectTextAnimation,
} from "@/lib/animation/project-animation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Link from "next/link";

// import { PlainCard } from "../../_components/plain-card";
import { ProjectsCarousel } from "../../_components/project-carousel";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  useGSAP(() => {
    const timeline = showProjectTextAnimation();
    timeline.eventCallback(`onComplete`, () => {
      initProjectAnimationList(projects);
      projectTextAnimation();
    });
  }, []);

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
        <section className="show mt-[5rem] max-w-(--breakpoint-md) -rotate-2 space-y-1 px-2">
          <h1 className="project-text cc-border cc-init text-primary translate-x-[50%]">Showcase</h1>
          <p className="project-text cc-border font-sea cc-init translate-x-[50%] text-2xl text-black">
            Here you will find some project that made it from development to production. <br /> <span>Note:</span> that
            this previews are interactive to a point. if you want to have the full experience, click the link attached
            to the project.
          </p>
        </section>

        <section className="cc-border my-[5rem] space-y-[5rem] lg:space-y-[10rem]">
          <ProjectsCarousel projects={projects} />
        </section>
      </Wrapper>
    </div>
  );
};
