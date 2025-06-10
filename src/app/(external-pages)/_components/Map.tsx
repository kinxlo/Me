import { BlurImage } from "@/components/core/miscellaneous/blur-image";

const Map = () => {
  return (
    <>
      <div className="cc-bg-dotted relative overflow-hidden border-none backdrop-blur-2xl">
        <div className="absolute inset-0 -z-0 blur-md">
          <BlurImage
            src="/images/map.png"
            alt="World map background"
            fill
            className="h-full w-full object-cover dark:invert"
            quality={5}
          />
        </div>

        <div className="relative z-10 h-full w-full">
          <BlurImage
            src="/images/map.png"
            alt="World map"
            width={500}
            height={300}
            className="mix-blend-multipy h-full w-full object-contain dark:mix-blend-screen dark:invert"
          />
          <div className="marker absolute inset-0 top-[-45%] left-[50%] size-1 transform" />
        </div>
      </div>
    </>
  );
};

export default Map;
