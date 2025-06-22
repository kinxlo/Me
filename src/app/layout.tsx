import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "../styles/global.css";

import { BaseLayout } from "@/components/core/layout/base-layout";
// import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import LoadingProvider from "@/components/shared/loader/loader-provider";
import { Me } from "@/components/shared/me";
import { Navbar } from "@/components/shared/navbar";
import { GlobalProvider } from "@/context/global-context";

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-background bg-auto bg-fixed font-sans antialiased lg:bg-cover", fontVariables)}>
        <LoadingProvider>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          > */}
          <GlobalProvider>
            <BaseLayout>
              <Me />
              <Navbar />

              {children}
            </BaseLayout>
          </GlobalProvider>
          {/* </ThemeProvider> */}
        </LoadingProvider>
      </body>
    </html>
  );
}
