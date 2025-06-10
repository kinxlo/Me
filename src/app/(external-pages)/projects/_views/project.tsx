"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { initProjectAnimationList, showProjectTextAnimation } from "@/lib/animation/project-animation";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { PlainCard } from "../../_components/plain-card";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  const containerReference = useRef<HTMLDivElement>(null);
  const sectionReference = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = showProjectTextAnimation();
    timeline.eventCallback(`onComplete`, () => {
      initProjectAnimationList(projects);
    });
  }, []);

  if (!projects || projects?.length === 0) {
    return (
      <Wrapper>
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <div ref={containerReference}>
      <Wrapper className={"mt-0 space-y-4 p-0"}>
        <section ref={sectionReference} className={`show mt-[5rem] max-w-(--breakpoint-md) space-y-2 px-2`}>
          <h1 className={`project-text cc-init text-primary translate-x-[50%] underline`}>Showcase</h1>
          <p className={`project-text font-sea cc-init translate-x-[50%] text-xl text-black`}>
            Here you will find some of the personal and clients projects that I created with each project containing its
            own case study
          </p>
        </section>

        <section className={`my-[5rem] space-y-[5rem] lg:space-y-[10rem]`}>
          {projects.map((project, index) => {
            return (
              <Wrapper key={project.id} className={`p-0 project-${index}`}>
                <Wrapper className={`py-0`}>
                  <p className={`project-title font-head text-primary text-2xl font-medium`}>
                    {project.id}. {project.name}
                  </p>
                  <p className={`project-title font-sea max-w-(--breakpoint-md) text-xl text-black`}>{project.desc}</p>
                </Wrapper>

                <Wrapper className={`cc-border my-2 p-0`}>
                  <Link referrerPolicy={`no-referrer`} target={`_blank`} href={project?.url || ""}>
                    <PlainCard className="project-image-container group h-[273px] rounded-none border-none mix-blend-multiply transition-all lg:h-[483px]">
                      <div
                        className={cn(
                          `image-marquee-container relative grid scale-200 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 gap-2 grayscale-50 transform-3d lg:left-[20rem] lg:scale-200 lg:gap-4`,
                        )}
                      >
                        <BlurImage
                          src={project?.imageDesktop1}
                          width={1000}
                          height={1000}
                          alt={"project"}
                          className="marquee-image-1 h-full w-full border object-cover transition-all group-hover:border-black"
                        />
                        <BlurImage
                          src={project?.imageDesktop2}
                          width={1000}
                          height={1000}
                          alt={"project"}
                          className="marquee-image-2 h-full w-full border object-cover transition-all group-hover:border-black"
                        />
                        <BlurImage
                          src={project?.imageDesktop2}
                          width={1000}
                          height={1000}
                          alt={"project"}
                          className="marquee-image-3 h-full w-full border object-cover transition-all group-hover:border-black"
                        />
                      </div>
                    </PlainCard>
                  </Link>
                </Wrapper>
              </Wrapper>
            );
          })}
        </section>
      </Wrapper>
    </div>
  );
};
