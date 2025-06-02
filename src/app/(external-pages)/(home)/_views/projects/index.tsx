import { getProjects } from "@/action/project.action";
import { useEffect, useState } from "react";

import { ProjectsClient } from "./project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>; // Add a better loading state
  }

  if (error) {
    return <div>{error}</div>; // Add better error handling
  }

  return <ProjectsClient projects={projects} />;
}
