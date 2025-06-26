// src/components/views/project.tsx
"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { useGlobalContext } from "@/context/global-context";
import { runProjectsEntranceAnimation, runProjectsExitAnimation } from "@/lib/animation/pages/project/project";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  const projectPage = useRef<HTMLDivElement>(null);
  const { setTimeline } = useGlobalContext();

  useGSAP(
    () => {
      const entrance = runProjectsEntranceAnimation(projects);
      entrance.play();
      setTimeline(runProjectsExitAnimation(projects));

      // Cleanup on unmount
      return () => {
        entrance.kill();
        for (const trigger of ScrollTrigger.getAll()) trigger.kill();
      };
    },
    { scope: projectPage, dependencies: [projects] },
  );

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
    <section ref={projectPage} className="relative z-10">
      <section className="animated-element space-y-4 p-0 opacity-0">
        <section className="max-w-(--breakpoint-md) space-y-1 px-2">
          <h1 className="text-primary ptl-header">Showcase</h1>
          <p className="project-text font-head ptl-header text-2xl text-black/70">
            Here you will find some projects that made it from development to production.
          </p>
        </section>

        <section className="my-[5rem]">
          <section className="space-y-[5rem] lg:space-y-[10rem]">
            {projects.map((project) => (
              <Wrapper
                key={project.id}
                id={`project-${project.id}`}
                className={`project-section cc-border reveal-section overflow-hidden p-0`}
                data-project-id={project.id}
              >
                <Wrapper className="my-2 p-0">
                  <section className="group relative flex min-h-[30rem] max-w-(--breakpoint-md) flex-col items-center justify-center gap-8 rounded-none transition-all duration-300">
                    <Wrapper className="space-y-6 py-0">
                      {/* Project Header */}
                      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                          <p className="project-title reveal-title font-head text-primary text-2xl font-bold">
                            {project.id}. {project.name}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-muted-foreground reveal-title text-sm font-medium">
                              {project.category}
                            </span>
                            <span className="bg-muted-foreground reveal-title h-1 w-1 rounded-full" />
                          </div>
                        </div>
                        {/* project button */}
                        <div className="project-buttons flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:bg-accent reveal-button rounded-md border px-3 py-1.5 text-sm transition-colors"
                            >
                              View Code
                            </a>
                          )}
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary reveal-button text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1.5 text-sm transition-colors"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="project-p reveal-text">{project.desc}</p>

                      {/* Status & Tech Stack */}
                      <div className="reveal-text flex flex-wrap items-center gap-4">
                        <div className="tech-stack flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span
                              className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                project.status.includes("Active") ? "animate-pulse bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                            <span
                              className={`relative inline-flex h-3 w-3 rounded-full ${
                                project.status.includes("Active") ? "bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                          </span>
                          <span className="text-sm font-medium">{project.status}</span>
                        </div>

                        <div className="tech-stack flex flex-wrap items-center gap-2">
                          {project.language.map((lang, index) => (
                            <span
                              key={lang}
                              className="rounded-full border border-black/50 px-2.5 py-1 text-xs font-medium"
                              style={{
                                backgroundColor: project.colorCode[index] || "#f1f5f9",
                                borderColor: project.colorCode[index]
                                  ? `${project.colorCode[index].replace("50", "80")}`
                                  : "#e2e8f0",
                              }}
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Desktop Preview */}
                      <div
                        className={cn(
                          "reveal-image desktop group relative hidden overflow-hidden rounded-lg border border-black/20 shadow-lg backdrop-blur-3xl transition-all hover:shadow-xl",
                          "hover:grayscale-0",
                          "lg:block",
                          "mt-[4rem] ml-[1rem] !rotate-3",
                        )}
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <BlurImage
                            src={project.imageDesktop1}
                            alt={`${project.name} screenshot`}
                            width={1280}
                            height={720}
                            className="h-full w-full object-cover grayscale-70 transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                        <Link
                          href={project.url}
                          target={`_blank`}
                          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <div className="absolute right-0 bottom-0 left-0 translate-y-4 p-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-medium text-white">Click to visit live site</p>
                          </div>
                        </Link>
                      </div>

                      {/* Mobile Preview */}
                      <div
                        className={cn(
                          "reveal-image mobile project-image relative overflow-hidden rounded-lg border border-black/20 shadow-md backdrop-blur-3xl",
                          "lg:hidden",
                          "mt-[-2rem] !scale-80 !rotate-2",
                        )}
                      >
                        <div className="aspect-[8/16] w-full overflow-hidden">
                          <BlurImage
                            src={project.imageDesktop1}
                            alt={`${project.name} mobile screenshot`}
                            width={520}
                            height={980}
                            className="h-full w-full object-cover grayscale-70"
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-muted-foreground text-center text-sm">Swipe for more screenshots →</p>
                        </div>
                      </div>

                      {/* Contributors */}
                      {project.contributors && project.contributors.length > 0 && (
                        <div className="space-y-2">
                          <h3 className="text-muted-foreground text-sm font-medium">Contributors</h3>
                          <div className="flex flex-wrap gap-3">
                            {project.contributors.map((contributor) => (
                              <div key={contributor.name} className="flex items-center gap-2">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                  <BlurImage
                                    src={contributor.img}
                                    alt={contributor.name}
                                    width={32}
                                    height={32}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <span className="text-sm">{contributor.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </Wrapper>
                  </section>
                </Wrapper>
              </Wrapper>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};
