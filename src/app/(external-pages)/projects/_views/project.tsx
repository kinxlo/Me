"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import {
  initProjectAnimationList,
  projectTextAnimation,
  showProjectTextAnimation,
} from "@/lib/animation/project-animation";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import { PlainCard } from "../../_components/plain-card";

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
          <h1 className="project-text cc-border cc-init txt-1 translate-x-[50%]">Showcase</h1>
          <p className="project-text cc-border txt-2 font-sea cc-init translate-x-[50%] text-2xl">
            Here you will find some of the personal and clients projects that I created with each project containing its
            own case study
          </p>
        </section>

        <section className="my-[5rem] space-y-[5rem] lg:space-y-[10rem]">
          {projects.map((project, index) => (
            <Wrapper key={project.id} className={`p-0 project-${index}`}>
              <Wrapper className="space-y-1 py-0">
                <p className="project-title cc-border font-head text-primary text-2xl font-medium">
                  {project.id}. {project.name}
                </p>
                <p className="project-p cc-border font-sea max-w-(--breakpoint-md) text-xl text-black">
                  {project.desc}
                </p>
              </Wrapper>

              <Wrapper className="cc-border my-2 p-0">
                <Link referrerPolicy="no-referrer" target="_blank" href={project?.url || ""}>
                  <PlainCard className="project-image-container group h-[273px] rounded-none border-none mix-blend-multiply transition-all lg:h-[483px]">
                    <div
                      className={cn("image-marquee-container relative grid grid-cols-3 gap-2 will-change-transform")}
                    >
                      <BlurImage
                        src={project?.imageDesktop1}
                        width={1000}
                        height={1000}
                        alt="project"
                        className="marquee-image-1 h-full w-full border object-cover transition-all group-hover:border-black"
                      />
                      <BlurImage
                        src={project?.imageDesktop2}
                        width={1000}
                        height={1000}
                        alt="project"
                        className="marquee-image-2 h-full w-full border object-cover transition-all group-hover:border-black"
                      />
                      <BlurImage
                        src={project?.imageDesktop2}
                        width={1000}
                        height={1000}
                        alt="project"
                        className="marquee-image-3 h-full w-full border object-cover transition-all group-hover:border-black"
                      />
                    </div>
                  </PlainCard>
                </Link>
              </Wrapper>
            </Wrapper>
          ))}
        </section>
      </Wrapper>
    </div>
  );
};
