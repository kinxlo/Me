"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import InfiniteScroll from "@/lib/animation/InfiniteScroll/InfiniteScroll";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ProjectsClient = ({ projects }: { projects: Project[] }) => {
  // Track hover state for each project by its ID
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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
      <section className="mt-0 space-y-4 p-0">
        <section className="mt-[5rem] max-w-(--breakpoint-md) space-y-1 px-2">
          <h1 className="cc-border text-primary">Showcase</h1>
          <p className="project-text cc-border font-head text-2xl text-black/90">
            Here you will find some project that made it from development to production.
          </p>
          <p className={`font-sea mt-4 text-xl`}>
            <span className={`text-primary`}>Note:</span> that this previews are interactive to a point. if you want to
            have the full experience, click the link attached to the project.
          </p>
        </section>

        <section className="cc-border my-[5rem]">
          <section className="space-y-[5rem] lg:space-y-[10rem]">
            {projects.map((project) => (
              <Wrapper key={project.id} className={`overflow-hidden p-0`}>
                <Wrapper className="space-y-1 py-0">
                  <p className="project-title font-head text-primary h-10 text-2xl font-bold">
                    {project.id}. {project.name}
                  </p>
                  <p className="project-p font-head min-h-[65px] max-w-(--breakpoint-md) text-xl text-black">
                    {project.desc}
                  </p>
                </Wrapper>
                <Wrapper className="my-2 p-0">
                  <section
                    className={cn(
                      "group hover:border-primary relative max-w-(--breakpoint-md) rounded-none !mix-blend-multiply backdrop-blur-xs transition-all duration-300",
                      hoveredProject === String(project.id) && `max-w-full`,
                    )}
                    onMouseEnter={() => setHoveredProject(String(project.id))}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div
                      className={cn(
                        `relative hidden h-[40rem] overflow-hidden border border-black !mix-blend-multiply grayscale transition-all hover:grayscale-50 lg:block`,
                      )}
                    >
                      <div className={cn("relative h-full w-full overflow-hidden")}>
                        <iframe
                          className={`w-full transition-all duration-500 ease-in-out`}
                          sandbox="allow-same-origin allow-scripts allow-popups"
                          src={project.url}
                          title="Responsive iframe"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            border: "none",
                            mixBlendMode: `multiply`,
                          }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className={`lg:hidden`}>
                      <InfiniteScroll
                        items={[
                          {
                            content: (
                              <div className="grid grid-cols-1 gap-4 mix-blend-multiply backdrop-blur-xs will-change-transform">
                                <BlurImage
                                  width={1000}
                                  height={1000}
                                  src={project?.imageDesktop1}
                                  alt="project"
                                  className="w-full border object-cover transition-all hover:border-black"
                                />
                              </div>
                            ),
                          },
                        ]}
                        isTilted={false}
                        autoplay={true}
                        autoplaySpeed={0.1}
                        pauseOnHover={true}
                        width={`100%`}
                        maxHeight={`300px`}
                        itemMinHeight={500}
                        autoplayDirection={`up`}
                      />
                    </div>
                  </section>
                </Wrapper>
              </Wrapper>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};
