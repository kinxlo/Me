/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler, FocusEventHandler, HTMLAttributes, MouseEventHandler } from "react";

declare global {
  export interface LogoProperties {
    logo: string;
    width?: number;
    height?: number;
    className?: string;
    alt?: string;
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  }

  interface InputProperties {
    label?: string;
    isRequired?: boolean;
    state?: "default" | "primary" | "error";
    name?: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    isDisabled?: boolean;
    className?: string;
    helpText?: string;
    validate?: (value: string) => boolean;
  }

  interface NavLink {
    id: number;
    title: string;
    href: string;
    type: "link" | "dropdown";
    subLinks?: Array<{
      id: number;
      title: string;
      href: string;
      description: string;
    }> | null;
  }

  interface NavbarProperties extends HTMLAttributes<HTMLDivElement> {
    logo?: React.ReactNode;
    links?: NavLink[];
    cta?: React.ReactNode;
    user?: React.ReactNode;
    sticky?: boolean;
    navbarStyle?: string;
  }

  interface FormFieldProperties {
    label?: string;
    labelDetailedNode?: React.ReactNode;
    name: string;
    type?: "text" | "textarea" | "select" | "number" | "password" | "email";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    options?: { value: string; label: string }[];
    className?: string;
    containerClassName?: string;
    leftAddon?: React.ReactNode; // Add left icon or button
    rightAddon?: React.ReactNode; // Add right icon or button
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  type UniversalSwiperProperties = {
    /**
     * Array of items to render as slides
     */
    items: any[];
    /**
     * Function to render each slide
     * @param item - The current item to render
     * @param index - The index of the current item
     * @returns JSX.Element - The rendered slide
     */
    renderItem: (item: any, index: number) => React.ReactNode;
    /**
     * Swiper configuration options
     * @default {}
     */
    swiperOptions?: SwiperOptions;
    /**
     * Whether to show navigation buttons
     * @default false
     */
    showNavigation?: boolean;
    /**
     * Whether to show pagination dots
     * @default false
     */
    showPagination?: boolean;
    /**
     * Whether to show scrollbar
     * @default false
     */
    showScrollbar?: boolean;
    /**
     * Navigation button variant
     * @default "default"
     */
    navigationVariant?: "default" | "minimal" | "none";
    /**
     * Navigation button size
     * @default 24
     */
    navigationSize?: number;
    /**
     * Navigation button position offset
     * @default 0
     */
    navigationOffset?: number;
    /**
     * Custom className for the container
     */
    className?: string;
    /**
     * Custom className for the swiper wrapper
     */
    swiperClassName?: string;
    /**
     * Custom className for each slide
     */
    slideClassName?: string;
    /**
     * Thumbs swiper instance for gallery pattern
     */
    thumbsSwiper?: SwiperType | null;
    /**
     * Breakpoints configuration
     */
    breakpoints?: SwiperBreakpoints;
    /**
     * Whether to enable free mode
     * @default false
     */
    freeMode?: boolean;
    /**
     * Callback when swiper is initialized
     */
    onSwiperInit?: (swiper: SwiperType) => void;
  };

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
