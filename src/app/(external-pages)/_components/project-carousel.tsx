"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { UniversalSwiper } from "@/components/shared/carousel";

import { PlainCard } from "./plain-card";

export const ProjectsCarousel = ({ projects }: { projects: Project[] }) => {
  return (
    <UniversalSwiper
      className="overflow-hidden !mix-blend-multiply"
      items={projects}
      renderItem={(project: Project) => (
        <Wrapper key={project.id} className={`p-0`}>
          <Wrapper className="cc-bg-dotted -rotate-2 space-y-1 py-0">
            <p className="project-title font-head text-primary h-10 text-2xl font-medium underline">
              {project.id}. {project.name}
            </p>
            <p className="project-p font-sea min-h-[65px] max-w-(--breakpoint-md) text-xl text-black">{project.desc}</p>
          </Wrapper>
          <Wrapper className="p-0">
            <PlainCard className="project-image-container group hover:border-primary relative h-[50dvh] rounded-none !mix-blend-multiply transition-all duration-300">
              <div
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
              </div>
            </PlainCard>
          </Wrapper>
        </Wrapper>
      )}
      showPagination
      showNavigation
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
        1280: { slidesPerView: 1 },
      }}
    />
  );
};
