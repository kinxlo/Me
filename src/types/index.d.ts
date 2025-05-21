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
    imageDesktop: string;
    imageMobile: string;
    url: string;
    github: string | null;
    desc: string;
    tools: string | null;
    date: string; // ISO 8601 format (YYYY-MM-DD)
    category: string;
    contributors: Contributor[];
  }

  type ProjectCategory = "Business" | "E-learning" | "Real Estate" | "E-commerce" | string; // Fallback for any other categories

  type Projects = Project[];
}

export {};
