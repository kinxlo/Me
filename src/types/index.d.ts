declare global {
  interface Contributor {
    name: string;
    img: string;
  }

  interface Project {
    id: number;
    name: string;
    language: string[];
    status: "Production" | "Development (Active)" | "Development (Stale)";
    colorCode: string[];
    values: number[];
    imageDesktop1: string;
    imageDesktop2: string;
    imageDesktop3: string;
    url: string;
    github: string | null;
    logo: string;
    desc: string;
    tools: string | null;
    date: string; // ISO 8601 format (YYYY-MM-DD)
    category: string;
    contributors: Contributor[];
  }

  type ProjectCategory = "Business" | "E-learning" | "Real Estate" | "E-commerce" | string; // Fallback for any other categories

  type Projects = Project[];
}

// This export is needed to make the file a module
export {};
