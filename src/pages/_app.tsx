import Transition from "@/components/shared/transition/transition";
import { GlobalProvider } from "@/context/global-context";
import type { AppProps } from "next/app";

import "../styles/global.css";

import ThemeProvider from "@/components/core/layout/ThemeToggle/theme-provider";
import LoadingProvider from "@/components/shared/loader/loader-provider";
import { Navbar } from "@/components/shared/navbar";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <GlobalProvider>
        <LoadingProvider>
          <Navbar />
          <Transition>
            <Component key={router.route} {...pageProps} />
          </Transition>
        </LoadingProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}
