"use client";

import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

export const socials = [
  {
    type: "icon",
    src: "/images/github.png",
    alt: "github",
    mobileScale: "scale-90",
    content: "Github",
    icon: <VscGithub />,
    link: `https://github.com/kinxlo`,
  },
  {
    type: "icon",
    src: "/images/twitter.png",
    alt: "Twitter",
    mobileScale: "scale-90",
    content: "Twitter",
    icon: <FaXTwitter />,
    link: `https://x.com/kinxlo`,
  },
  {
    type: "icon",
    src: "/images/linkedin.png",
    alt: "LinkedIn",
    mobileScale: "scale-90",
    content: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: `https://www.linkedin.com/in/kingsley-ifijeh-b90339b2/`,
  },
];

export const NAV_ITEMS = [
  {
    content: "Home",
    path: "/",
    variant: "link" as const,
  },
  {
    content: "Projects",
    path: "/projects",
    variant: "link" as const,
  },
  {
    content: "About",
    path: "/about",
    variant: "link" as const,
  },
  {
    content: "Résumé",
    path: "https://drive.google.com/file/d/1-emFvqL9-gs6v7DitqyR8aLxfZmb52Fz/view?usp=sharing",
    variant: "link" as const,
    isExternal: true,
  },
];
