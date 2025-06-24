import Transition from "@/components/shared/transition/transition";
import { GlobalProvider } from "@/context/global-context";
import type { AppProps } from "next/app";

import "../styles/global.css";

import { Navbar } from "@/components/shared/navbar";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <GlobalProvider>
      <Navbar />
      <Transition>
        <Component key={router.route} {...pageProps} />;
      </Transition>
    </GlobalProvider>
  );
}
