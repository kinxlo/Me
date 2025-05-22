import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface ProjectCardProperties extends React.HTMLProps<HTMLDivElement> {
  project: {
    id: number;
    name: string;
    language: string[];
    status: string;
    imageDesktop: string;
    imageMobile: string;
    url: string;
    github: string | null;
    desc: string;
    date: string;
    category: string;
    contributors: {
      name: string;
      img: string;
    }[];
  };
  className?: string;
}

export const ProjectCard: FC<ProjectCardProperties> = ({ project, className }) => {
  if (!project) return null;
  return (
    <div
      className={cn(
        "group dark:border-bg-white/10 relative isolate border-x border-gray-950/10 transition-colors hover:bg-gray-950/10 max-sm:border-0 sm:max-lg:nth-[2n]:border-r-0 sm:max-lg:nth-[2n+1]:border-l-0 lg:max-xl:nth-[4n]:border-r-0 lg:max-xl:nth-[4n+1]:border-l-0 xl:nth-[4n]:border-r-0 xl:nth-[4n+1]:border-l-0 dark:border-white/10 dark:hover:bg-white/2.5",
        className,
      )}
    >
      <article className={cn(`cc-border-responsive p-2`)}>
        <a href={project?.url} target="_blank" rel="noopener noreferrer">
          <div className={`relative aspect-[672/494] overflow-hidden rounded-xl outline outline-gray-950/5`}>
            <BlurImage
              src={project?.imageDesktop}
              width={672}
              height={492}
              alt={project?.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </a>
      </article>
      <article className={cn(`cc-border-responsive bg-accent/30 mt-2 p-2 backdrop-blur-sm`, className)}>
        <div className={`flex flex-wrap items-center`}>
          <h2 className={`font-mono text-sm/6 font-bold capitalize`}>{project.name}</h2>
          <p className={`font-code line-clamp-1 w-full flex-none text-xs/6`}>{project.desc}</p>
        </div>
      </article>
    </div>
  );
};
