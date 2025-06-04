// @/lib/tools/font.ts
import { cn } from "@/lib/utils";
import {
  Cinzel,
  East_Sea_Dokdo,
  EB_Garamond,
  Fira_Code,
  IM_Fell_English_SC,
  Inter,
  Libre_Baskerville,
  Raleway,
} from "next/font/google";

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
  // variable: "--font-sans",
  variable: "--font-heading",
});

// Secondary sans-serif font for headings/accent
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Historical fonts — added
const imFell = IM_Fell_English_SC({
  subsets: ["latin"],
  variable: "--font-heading",
  // variable: "--font-im-fell",
  weight: "400",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "700"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-baskerville",
  weight: ["400", "700"],
});

export const fontVariables = cn(
  eastSeaDokdo.variable,
  inter.variable,
  firaCode.variable,
  raleway.variable,
  imFell.variable,
  cinzel.variable,
  ebGaramond.variable,
  libreBaskerville.variable,
);
