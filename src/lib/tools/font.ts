// @/lib/tools/font.ts
import { cn } from "@/lib/utils";
import { East_Sea_Dokdo, Fira_Code, IM_Fell_English_SC, Inter } from "next/font/google";

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

// Historical fonts — added
const imFell = IM_Fell_English_SC({
  subsets: ["latin"],
  variable: "--font-im-fell",
  weight: "400",
});

export const fontVariables = cn(eastSeaDokdo.variable, inter.variable, firaCode.variable, imFell.variable);
