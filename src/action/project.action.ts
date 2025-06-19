import projects from "./projects.json";

export async function getProjects(): Promise<Project[]> {
  return projects as unknown as Project[];
}
