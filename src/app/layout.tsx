import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "../styles/global.css";

import { BaseLayout } from "@/components/core/layout/base-layout";
import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import { Me } from "@/components/shared/me";
import { Navbar } from "@/components/shared/navbar";
import { GlobalProvider } from "@/context/global-context";

// import Noise from "@/lib/animation/Noise/Noise";

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-fixed font-sans antialiased", "bg-contain bg-bottom bg-no-repeat lg:bg-cover", fontVariables)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
          {/* <Noise patternSize={250} patternScaleX={2} patternScaleY={2} patternRefreshInterval={2} patternAlpha={25} /> */}
          <GlobalProvider>
            <BaseLayout>
              <Me />
              <Navbar />
              {children}
            </BaseLayout>
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
