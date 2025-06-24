// src/context/projects.context.tsx
"use client";

import { getProjects } from "@/action/project.action";
import gsap from "@/lib/animation/gsap/init";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ProjectsContextType = {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refreshProjects: () => Promise<void>;
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
};

export const GlobalContext = createContext<ProjectsContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeline, setTimeline] = useState(() => {
    return gsap.timeline({ paused: true });
  });

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
      setError(null);
    } catch {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        projects,
        loading,
        error,
        refreshProjects: fetchProjects,
        timeline,
        setTimeline,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a GlobalProvider");
  }
  return context;
};
