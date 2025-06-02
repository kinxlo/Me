import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import "../styles/theme.css";
import "../styles/global.css";

import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import { Wrapper } from "@/components/core/layout/wrapper";
// import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Toast } from "@/components/shared/Toast";
import { AppProvider } from "@/context/app-provider";

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon Portfolio",
};

// export const viewport: Viewport = {
//   themeColor: META_THEME_COLORS.light,
//   width: "device-width",
//   initialScale: 1,
// };

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
          "bg-fixed font-sans antialiased",
          "bg-cover lg:bg-contain", // Default to Inter
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
            <Navbar />
            <BaseLayout>
              {children}
              {/* <Footer /> */}
            </BaseLayout>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`min-h-[100dvh] max-w-screen overflow-hidden`}>
      <section className="grid grid-cols-[1rem_minmax(0,80rem)_1rem] justify-center md:-mx-4 md:grid-cols-[2.5rem_minmax(0,80rem)_2.5rem] lg:mx-0">
        <div className="border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10" />
        <Wrapper className="grid grid-cols-1 gap-[4rem] p-0 lg:gap-[10rem]">{children}</Wrapper>
        <div className="border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10" />
      </section>
    </main>
  );
}
