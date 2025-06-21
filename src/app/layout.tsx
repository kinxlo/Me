import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "../styles/global.css";

import { BaseLayout } from "@/components/core/layout/base-layout";
import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import { Me } from "@/components/shared/me";
import { Navbar } from "@/components/shared/navbar";
import { GlobalProvider } from "@/context/global-context";
import Noise from "@/lib/animation/Noise/Noise";

// import Noise from "@/lib/animation/Noise/Noise";

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background bg-fixed font-sans antialiased", fontVariables)}>
        <Noise patternSize={500} patternScaleX={1} patternScaleY={1} patternRefreshInterval={2} patternAlpha={10} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
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
