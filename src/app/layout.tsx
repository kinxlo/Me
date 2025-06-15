import { fontVariables } from "@/lib/tools/font";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "../styles/global.css";

import { BaseLayout } from "@/components/core/layout/base-layout";
import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import { Me } from "@/components/shared/me";
import { Navbar } from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Kingsley Solomon",
  description: "Kingsley solomon",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-fixed font-sans antialiased", "bg-bottom lg:bg-cover", fontVariables)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
          <BaseLayout>
            <Me />
            <Navbar />
            {children}
          </BaseLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
