"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import MainButton from "@/components/shared/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

import { PlainCard } from "../../_components/plain-card";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
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
    <Wrapper className={"mt-0 space-y-4 p-0 mix-blend-multiply"}>
      <section className={`mt-[5rem] max-w-(--breakpoint-md) space-y-2 px-2`}>
        <h1 className={`text-primary cc-border`}>Project Showcase</h1>
        <p className={`cc-border`}>
          Here you will find some of the personal and clients projects that I created with each project containing its
          own case study
        </p>
      </section>
      <section className={`my-[5rem] space-y-[5rem] lg:space-y-[10rem]`}>
        {projects.map((project) => {
          return (
            <Wrapper key={project.id} className={`p-0`}>
              <Wrapper className={`cc-border flex items-center justify-between py-0`}>
                <p className={`font-head text-2xl text-black`}>
                  {project.id}. {project.name}
                </p>
                <MainButton
                  size="icon"
                  isIconOnly
                  icon={<LuGithub />}
                  className="rounded-full border-3 border-gray-500 transition-all duration-300"
                />
              </Wrapper>
              <Wrapper className={`cc-border my-2 p-0`}>
                <Link referrerPolicy={`no-referrer`} target={`_blank`} href={project?.url || ""}>
                  <PlainCard className="h-[273px] rounded-none border-none lg:h-[483px]">
                    <div
                      className={cn(
                        `relative grid scale-200 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 gap-2 grayscale-50 transform-3d lg:left-[20rem] lg:scale-200 lg:gap-4`,
                      )}
                    >
                      <BlurImage
                        src={project?.imageDesktop1}
                        width={1000}
                        height={1000}
                        alt={"project"}
                        className="h-full w-full border object-cover"
                      />
                      <BlurImage
                        src={project?.imageDesktop2}
                        width={1000}
                        height={1000}
                        alt={"project"}
                        className="h-full w-full border object-cover"
                      />
                      <BlurImage
                        src={project?.imageDesktop2}
                        width={1000}
                        height={1000}
                        alt={"project"}
                        className="h-full w-full border object-cover"
                      />
                    </div>
                  </PlainCard>
                </Link>
              </Wrapper>
              <Wrapper className={`cc-border flex items-center gap-4 py-0`}>
                <Badge
                  className={`className="rounded-full font-head duration-300" h-9 rounded-full border-3 border-gray-500 bg-black px-6 transition-all`}
                >
                  Next.js
                </Badge>
                <Badge
                  className={`className="rounded-full font-head duration-300" h-9 rounded-full border-3 border-gray-500 bg-black px-6 transition-all`}
                >
                  Express.js
                </Badge>
                <Badge
                  className={`className="rounded-full font-head duration-300" h-9 rounded-full border-3 border-gray-500 bg-black px-6 transition-all`}
                >
                  Tailwind CSS
                </Badge>
              </Wrapper>
            </Wrapper>
          );
        })}
      </section>
    </Wrapper>
  );
};

{
  /* {projects?.map((project) => {
            return (
              <div
                key={project?.name}
                onClick={() => handleSelectProject(project.name)}
                className={cn(
                  `relative flex cursor-pointer flex-col items-center justify-center gap-4 px-2 py-2 text-center max-sm:px-4`,
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
          })} */
}
