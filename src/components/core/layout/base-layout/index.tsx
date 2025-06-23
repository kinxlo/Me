"use client";

import { runSmoothScroll } from "@/lib/animation/pages/smoth-scroll";
import { useGSAP } from "@gsap/react";

// import { usePathname } from "next/navigation";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();

  // Handle route changes
  useGSAP(() => {
    window.scrollTo(0, 0);
    runSmoothScroll();
  }, []);

  return (
    <main className={`relative max-w-screen overflow-hidden`}>
      <section className="container mx-auto px-4 md:px-10 xl:px-0">{children}</section>
    </main>
  );
}
