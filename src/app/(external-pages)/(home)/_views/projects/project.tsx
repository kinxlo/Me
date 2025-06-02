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

  if (!projects || projects?.length === 0) {
    return (
      <Wrapper>
        <div className="py-10 text-center">
          <p className="text-muted-foreground">No projects found</p>
        </div>
      </Wrapper>
    );
  }

  const handleSelectProject = (name: string) => {
    projects?.find((project) => project?.name === name && setSelectedProjects(project));
  };

  return (
    <Wrapper className={"mt-12 flex min-h-[calc(100dvh-48px)] items-center p-0 mix-blend-multiply"}>
      <Wrapper className={`flex flex-col-reverse items-center gap-10 xl:flex-row`}>
        <Wrapper className={`grid grid-cols-2 xl:grid-cols-1`}>
          {projects?.map((project) => {
            return (
              <div
                key={project?.name}
                onClick={() => handleSelectProject(project.name)}
                className={cn(
                  `relative z-10 flex cursor-pointer flex-col items-center justify-center gap-4 px-2 py-2 text-center max-sm:px-4`,
                )}
              >
                <Image
                  width={"500"}
                  height={"500"}
                  src={project?.logo}
                  alt={""}
                  className={`size-[50px] rounded-full grayscale-60`}
                />
                <div className={`flex flex-col`}>
                  <h2
                    className={cn(
                      `font-sea text-primary text-xl font-bold capitalize`,
                      project?.name === selectedProject?.name && "underline",
                    )}
                  >
                    {project?.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </Wrapper>
        <Link referrerPolicy={`no-referrer`} target={`_blank`} href={selectedProject?.url || ""}>
          <PlainCard className="h-[273px] rounded-lg border-none lg:h-[583px] lg:w-[944px]">
            <div
              className={cn(
                `relative grid scale-200 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 gap-2 grayscale-50 transform-3d lg:left-[20rem] lg:scale-200 lg:gap-4`,
              )}
            >
              <BlurImage
                src={selectedProject?.imageDesktop1}
                width={1000}
                height={1000}
                alt={"project"}
                className="h-full w-full border object-cover"
              />
              <BlurImage
                src={selectedProject?.imageDesktop2}
                width={1000}
                height={1000}
                alt={"project"}
                className="h-full w-full border object-cover"
              />
              <BlurImage
                src={selectedProject?.imageDesktop2}
                width={1000}
                height={1000}
                alt={"project"}
                className="h-full w-full border object-cover"
              />
            </div>
          </PlainCard>
        </Link>
      </Wrapper>
    </Wrapper>
  );
};
