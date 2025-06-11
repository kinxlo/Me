"use client";

import { Wrapper } from "@/components/core/layout/wrapper";
import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { UniversalSwiper } from "@/components/shared/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { PlainCard } from "./plain-card";

export const ProjectsCarousel = ({ projects }: { projects: Project[] }) => {
  return (
    <UniversalSwiper
      className="overflow-hidden !mix-blend-multiply"
      items={projects}
      renderItem={(project: Project) => (
        <Wrapper key={project.id} className={`p-0`}>
          <Wrapper className="cc-bg-dotted flex -rotate-2 flex-col items-center justify-center space-y-1 py-0 text-center">
            <p className="project-title font-head text-primary h-10 text-2xl font-medium underline">
              {project.id}. {project.name}
            </p>
            <p className="project-p font-sea min-h-[65px] max-w-(--breakpoint-md) text-xl text-black">{project.desc}</p>
          </Wrapper>
          <Wrapper className="p-0">
            <Link referrerPolicy="no-referrer" target="_blank" href={project?.url || ""}>
              <PlainCard className="project-image-container group hover:border-primary relative max-h-[30dvh] rounded-none !mix-blend-multiply transition-all duration-300 lg:max-h-[50dvh]">
                <div
                  className={cn(
                    "image-marquee-container relative grid grid-cols-3 gap-2 !mix-blend-multiply will-change-transform",
                  )}
                >
                  <BlurImage
                    src={project?.imageDesktop1}
                    width={1000}
                    height={1000}
                    alt="project"
                    className="marquee-image-1 h-full w-full border object-cover !mix-blend-multiply transition-all group-hover:border-black"
                  />
                  <BlurImage
                    src={project?.imageDesktop2}
                    width={1000}
                    height={1000}
                    alt="project"
                    className="marquee-image-2 h-full w-full border object-cover !mix-blend-multiply transition-all group-hover:border-black"
                  />
                  <BlurImage
                    src={project?.imageDesktop2}
                    width={1000}
                    height={1000}
                    alt="project"
                    className="marquee-image-3 h-full w-full border object-cover !mix-blend-multiply transition-all group-hover:border-black"
                  />
                </div>
              </PlainCard>
            </Link>
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
