/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { A11y, FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions, Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import { Icons } from "@/components/core/miscellaneous/icons";
import { cn } from "@/lib/utils";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

import MainButton from "../button";

interface UniversalSwiperProperties {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  swiperOptions?: SwiperOptions;
  showNavigation?: boolean;
  showPagination?: boolean;
  showScrollbar?: boolean;
  navigationVariant?: "default" | "minimal" | "none";
  navigationSize?: number;
  navigationOffset?: number;
  className?: string;
  swiperClassName?: string;
  slideClassName?: string;
  thumbsSwiper?: SwiperType | null;
  breakpoints?: any;
  freeMode?: boolean;
  onSwiperInit?: (swiper: SwiperType) => void;
}

export const UniversalSwiper = ({
  items,
  renderItem,
  swiperOptions = {},
  showNavigation = false,
  showPagination = false,
  showScrollbar = false,
  navigationSize = 24,
  className,
  swiperClassName,
  slideClassName,
  thumbsSwiper,
  breakpoints,
  freeMode = false,
  onSwiperInit,
}: UniversalSwiperProperties) => {
  const [isMounted, setIsMounted] = useState(false);
  const swiperReference = useRef<SwiperType | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (swiperReference.current) {
        swiperReference.current.destroy(true, true);
      }
    };
  }, []);

  if (!isMounted || !items?.length) return null;

  const modules = [
    ...(showNavigation ? [Navigation] : []),
    ...(showPagination ? [Pagination] : []),
    ...(showScrollbar ? [Scrollbar] : []),
    ...(freeMode ? [FreeMode] : []),
    ...(thumbsSwiper ? [Thumbs] : []),
    A11y,
  ];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Swiper container */}
      <div className={swiperClassName}>
        <Swiper
          {...swiperOptions}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={modules}
          thumbs={{ swiper: thumbsSwiper }}
          breakpoints={breakpoints}
          freeMode={freeMode}
          onSwiper={(swiper) => {
            swiperReference.current = swiper;
            onSwiperInit?.(swiper);
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={cn(slideClassName, `grayscale-40`)}>
              {renderItem(item, index)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation buttons - positioned below the swiper */}
      {showNavigation && (
        <div className="cc-border flex justify-center gap-4">
          <MainButton
            onClick={() => swiperReference.current?.slidePrev()}
            isIconOnly
            icon={<ChevronLeftCircle size={navigationSize} />}
            variant="outline"
            size="circle"
            aria-label="Previous slide"
            className="hover:bg-primary w-fit translate-x-[50%] rounded-full border-5 bg-black text-white transition-all duration-300 hover:text-white"
          />
          <MainButton
            onClick={() => swiperReference.current?.slideNext()}
            isIconOnly
            icon={<ChevronRightCircle size={navigationSize} />}
            variant="outline"
            size="circle"
            aria-label="Next slide"
            className="hover:bg-primary w-fit translate-x-[50%] rounded-full border-5 bg-black text-white transition-all duration-300 hover:text-white"
          />
        </div>
      )}
    </div>
  );
};
