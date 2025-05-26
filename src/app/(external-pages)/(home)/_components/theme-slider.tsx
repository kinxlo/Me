import { BlurImage } from "@/components/core/miscellaneous/blur-image";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export function ThemeSlider() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="relative min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel className={`absolute`} defaultSize={25}>
        <BlurImage src={"/images/me.webp"} alt={"Illustration of me"} width={507} height={469.32} priority />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className={`relative`} defaultSize={75}>
        <BlurImage src={"/images/me.svg"} alt={"Illustration of me"} width={507} height={469.32} priority />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
