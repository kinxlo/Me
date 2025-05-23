import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import "../styles/theme.css";
import "../styles/global.css";

import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import { ModeToggle } from "@/components/core/layout/ThemeToggle/theme-toggle";
import { Wrapper } from "@/components/core/layout/wrapper";
import MainButton from "@/components/shared/button";
import { Me } from "@/components/shared/me";
import { Toast } from "@/components/shared/Toast";
import { AppProvider } from "@/context/app-provider";
import SmoothScrollProvider, { SmoothAnchorLinks } from "@/context/scroll-provider";

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon Portfolio",
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
  width: "device-width",
  initialScale: 0.5,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "bg-background font-sans antialiased", // Default to Inter
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : "",
          fontVariables,
        )}
      >
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <Toast />
            <BaseLayout>{children}</BaseLayout>
            {/* <Footer /> */}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`min-h-[100dvh] max-w-screen overflow-hidden`}>
      <div className={`fixed top-0 right-0 z-[999] cursor-default space-x-4 text-black lg:hidden`}>
        <MainButton href={`#about-section`} variant={`accent`}>
          About Me
        </MainButton>
        <MainButton href={`#projects`} variant={`accent`}>
          Projects
        </MainButton>
        <MainButton href={`#contact`} variant={`accent`}>
          Contact Me
        </MainButton>
        <ModeToggle />
      </div>
      <section className="grid grid-cols-1 justify-center md:-mx-4 md:grid-cols-[2rem_minmax(0,80rem)] lg:mx-0">
        <div className="hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:5px_5px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10" />
        <section className={"lg:mt-0 lg:mb-50 dark:text-white"}>
          <Me />
          <Wrapper className="cc-3d-container space-y-[10rem] p-0 lg:space-y-[20rem]">
            <SmoothScrollProvider>
              <SmoothAnchorLinks />
              {children}
            </SmoothScrollProvider>
          </Wrapper>
        </section>
      </section>
    </main>
  );
}
