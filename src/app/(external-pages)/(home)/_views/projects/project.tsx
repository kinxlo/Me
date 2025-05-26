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
    <Wrapper className={"min-h-[calc(100dvh-48px)] p-0"} id={`projects`}>
      <Wrapper>
        <span className="cc-border font-mono text-lg font-medium tracking-wider">Showcase</span>

        <figure className={`cc-border-down`}>
          <h3 className="cc-border-down text-primary text-4xl font-black">How its going</h3>
          <p className="font-mediu max-w-(--breakpoint-md) py-2 text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque saepe fugiat cum temporibus suscipit
            nobis, architecto optio odit, velit, voluptatem tenetur facilis excepturi recusandae. Voluptatibus voluptate
            quam nihil ducimus!
          </p>
        </figure>
      </Wrapper>

      <Wrapper className={`mt-10 p-0`}>
        <Wrapper className={`cc-border divide-border grid grid-cols-2 p-0 lg:grid-cols-4 lg:divide-x`}>
          {projects.map((project) => {
            return (
              <div
                key={project.name}
                onClick={() => handleSelectProject(project.name)}
                className={cn(
                  `flex cursor-pointer flex-col items-center justify-center gap-4 p-2 text-center lg:flex-row lg:p-8 lg:text-left`,
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
        <Wrapper className="cc-border mt-4 bg-gray-400/50">
          <Link referrerPolicy={`no-referrer`} target={`_blank`} href={selectedProject.url}>
            <PlainCard className="border-none">
              <div
                className={cn(
                  `relative grid h-[20rem] scale-200 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 gap-2 rounded-xl transform-3d lg:top-[-10rem] lg:left-[-10rem] lg:h-[25rem] lg:scale-100 lg:gap-8`,
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
