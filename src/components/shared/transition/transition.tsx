/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseLayout } from "@/components/core/layout/base-layout";
import { useGlobalContext } from "@/context/global-context";
import { useGSAP } from "@gsap/react";
import { ReactNode, useState } from "react";

const Transition = ({ children }: { children: ReactNode }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline } = useGlobalContext();

  useGSAP(() => {
    const childrenArray = Array.isArray(children) ? children : [children];
    const displayChildrenArray = Array.isArray(displayChildren) ? displayChildren : [displayChildren];

    if (
      childrenArray[0] &&
      displayChildrenArray[0] &&
      (childrenArray[0] as any).key !== (displayChildrenArray[0] as any).key
    ) {
      timeline.play().then(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        timeline.pause().clear();
      });
    }
  }, [children]);

  // This ensures we don't show new content until exit animation is done
  return <BaseLayout>{displayChildren}</BaseLayout>;
};

export default Transition;
