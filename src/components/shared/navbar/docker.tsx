"use client";

import Dock from "@/lib/animation/Dock/Dock";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { VscAccount, VscFile, VscHome, VscProject } from "react-icons/vsc";

const DockerNav = ({ visible }: { visible: boolean }) => {
  const router = useRouter();
  const items = [
    { icon: <VscHome className={`text-secondary`} size={16} />, label: "Home", onClick: () => router.push("/") },
    {
      icon: <VscProject className={`text-secondary`} size={16} />,
      label: "Archive",
      onClick: () => router.push("/projects"),
    },
    {
      icon: <VscAccount className={`text-secondary`} size={16} />,
      label: "Profile",
      onClick: () => router.push("/about"),
    },
    {
      icon: <VscFile className={`text-secondary`} size={16} />,
      label: "Settings",
      onClick: () => router.push("/resume"),
    },
  ];

  return (
    <Dock
      className={cn(
        "fixed bottom-4 left-1/2 z-[999] -translate-x-1/2",
        "rounded-full border-3 border-gray-300 bg-gray-800 px-4 py-2 shadow-lg backdrop-blur-sm",
        "transform transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
      )}
      items={items}
      panelHeight={50}
      baseItemSize={30}
      magnification={50}
    />
  );
};

export default DockerNav;
