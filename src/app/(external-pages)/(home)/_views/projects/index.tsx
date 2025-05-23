import { getProjects } from "@/action/project.action";

import { ProjectsClient } from "./project";

async function Projects() {
  const projects = await getProjects();

  return <ProjectsClient projects={projects} />;
}

export default Projects;
