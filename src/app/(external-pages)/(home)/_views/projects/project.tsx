"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PlainCard } from "../../_components/plain-card";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProjects] = useState(projects[1]);

  if (!projects || projects.length === 0) {
    return (
      <Wrapper>
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      </Wrapper>
    );
  }

  const handleSelectProject = (name: string) => {
    projects.find((project) => project.name === name && setSelectedProjects(project));
  };

  return (
    <Wrapper id={`fade-section`} className={"p-0"}>
      <Wrapper>
        <span className="cc-border font-mono text-lg font-medium tracking-wider">Showcase</span>

        <figure className={`cc-border-down`}>
          <h3 className="cc-border-down text-primary text-4xl font-black tracking-[-4px]">How its going</h3>
          <p className="max-w-(--breakpoint-md) py-2 text-justify text-sm font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque saepe fugiat cum temporibus suscipit
            nobis, architecto optio odit, velit, voluptatem tenetur facilis excepturi recusandae. Voluptatibus voluptate
            quam nihil ducimus!
          </p>
        </figure>
      </Wrapper>

      <Wrapper className={`cc-border-up mt-10 flex flex-col-reverse gap-10 p-0 lg:flex-row-reverse`}>
        <Wrapper className={`xl:line-y/half cc-border-down relative grid grid-cols-2 border-l p-0 lg:grid-cols-2`}>
          {projects.map((project) => {
            return (
              <div
                key={project.name}
                onClick={() => handleSelectProject(project.name)}
                className={cn(
                  `flex cursor-pointer flex-col items-center justify-center gap-4 px-2 py-2 text-center odd:border-r max-sm:px-4`,
                  project.name === selectedProject.name && `bg-primary/10`,
                )}
              >
                <Image
                  width={"500"}
                  height={"500"}
                  src={project.logo}
                  alt={""}
                  className={`size-[50px] rounded-full`}
                />
                <div className={`flex flex-col`}>
                  <h2 className={`font-mono text-sm/6 font-bold capitalize`}>{project.name}</h2>
                  <p className={`line-clamp-1 w-full flex-none font-mono text-xs/6`}>{project.desc}</p>
                </div>
              </div>
            );
          })}
        </Wrapper>
        <Wrapper className="bg-secondary">
          <Link referrerPolicy={`no-referrer`} target={`_blank`} href={selectedProject.url}>
            <PlainCard className="bg-foreground border-none">
              <div
                className={cn(
                  `relative grid h-[20rem] scale-200 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 gap-2 rounded-xl transform-3d lg:h-[25rem] lg:scale-200 lg:gap-4`,
                )}
              >
                <BlurImage
                  src={selectedProject.imageDesktop1}
                  width={1000}
                  height={1000}
                  alt={"project"}
                  className="h-full w-full object-cover"
                />
                <BlurImage
                  src={selectedProject.imageDesktop2}
                  width={1000}
                  height={1000}
                  alt={"project"}
                  className="h-full w-full object-cover"
                />
                <BlurImage
                  src={selectedProject.imageDesktop2}
                  width={1000}
                  height={1000}
                  alt={"project"}
                  className="h-full w-full object-cover"
                />
              </div>
            </PlainCard>
          </Link>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
