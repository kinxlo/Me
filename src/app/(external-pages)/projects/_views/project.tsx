"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import InfiniteScroll from "@/lib/animation/InfiniteScroll/InfiniteScroll";
// import Noise from "@/lib/animation/Noise/Noise";
import { cn } from "@/lib/utils";

import { PlainCard } from "../../_components/plain-card";

// const items = [
//   {
//     content: (
//       <BlurImage
//         src={project?.imageDesktop1}
//         width={1000}
//         height={1000}
//         alt="project"
//         className="h-full w-full border object-cover transition-all group-hover:border-black"
//       />
//     ),
//   },
// ];

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

        <section className="cc-border my-[5rem]">
          {/* <ProjectsCarousel projects={projects} /> */}

          <section className="space-y-[5rem] lg:space-y-[10rem]">
            {projects.map((project) => (
              <Wrapper key={project.id} className={`overflow-hidden p-0`}>
                {/* <Noise
                  patternSize={250}
                  patternScaleX={1}
                  patternScaleY={1}
                  patternRefreshInterval={2}
                  patternAlpha={15}
                /> */}
                <Wrapper className="space-y-1 py-0">
                  <p className="project-title font-head text-primary h-10 text-2xl font-bold">
                    {project.id}. {project.name}
                  </p>
                  <p className="project-p font-head min-h-[65px] max-w-(--breakpoint-md) text-xl text-black">
                    {project.desc}
                  </p>
                </Wrapper>
                <Wrapper className="my-2 p-0">
                  <PlainCard className="group hover:border-primary relative rounded-none !mix-blend-multiply backdrop-blur-xs transition-all duration-300">
                    {/* <div
                      className={`!mix-blend-multiply`}
                      style={{ position: "relative", height: `100%`, overflow: "hidden" }}
                    >
                      <iframe
                        className={``}
                        sandbox="allow-same-origin allow-scripts allow-popups"
                        src={project.url}
                        title="Responsive iframe"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          mixBlendMode: `multiply`,
                        }}
                        allowFullScreen
                      />
                    </div> */}
                    <InfiniteScroll
                      items={[
                        {
                          content: (
                            <div className={cn("grid grid-cols-3 gap-4 !mix-blend-multiply will-change-transform")}>
                              <BlurImage
                                src={project?.imageDesktop1}
                                width={1000}
                                height={1000}
                                alt="project"
                                className="h-full w-full border object-cover transition-all group-hover:border-black"
                              />
                              <BlurImage
                                src={project?.imageDesktop2}
                                width={1000}
                                height={1000}
                                alt="project"
                                className="h-full w-full border object-cover transition-all group-hover:border-black"
                              />
                              <BlurImage
                                src={project?.imageDesktop2}
                                width={1000}
                                height={1000}
                                alt="project"
                                className="h-full w-full border object-cover transition-all group-hover:border-black"
                              />
                            </div>
                          ),
                        },
                      ]}
                      isTilted={false}
                      tiltDirection="left"
                      autoplay={true}
                      autoplaySpeed={0.1}
                      autoplayDirection="up"
                      pauseOnHover={true}
                      itemMinHeight={400}
                      width={`100%`}
                    />
                  </PlainCard>
                </Wrapper>
              </Wrapper>
            ))}
          </section>
        </section>
      </Wrapper>
    </div>
  );
};
