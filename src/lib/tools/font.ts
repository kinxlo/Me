// @/lib/tools/font.ts
import { cn } from "@/lib/utils";
import { East_Sea_Dokdo, Fira_Code, Inter, Raleway } from "next/font/google";

// Primary sans-serif font (clean, modern, highly readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const eastSeaDokdo = East_Sea_Dokdo({
  subsets: ["latin"],
  variable: "--font-sea",
  weight: "400",
});

// Monospace font for code blocks/technical content
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Secondary sans-serif font for headings/accent
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontVariables = cn(eastSeaDokdo.variable, inter.variable, firaCode.variable, raleway.variable);
