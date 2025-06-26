import gsap from "@/lib/animation/gsap/init";
import Link from "next/link";

import MainButton from "../shared/button";

const handleCreditLeave = () => {
  // First animate out the credit items
  gsap.to(".credit-item", {
    opacity: 0,
    y: 20,
    duration: 0.4,
    stagger: 0.05,
    ease: "power2.in",
    onComplete: () => {
      // Then animate out the credit resource
      gsap.to(".cc-credit-resource", {
        opacity: 0,
        visibility: "hidden",
        duration: 0.3,
        onComplete: () => {
          // Finally animate out the credit panels
          gsap.to(".cc-credit", {
            width: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power3.in",
          });
        },
      });
    },
  });
};

export const Credit = () => {
  return (
    <>
      {/* Credit Overlay - Hidden by default */}
      {/* Four animated segments */}
      <div className="cc-credit fixed top-0 left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[25%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[50%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />
      <div className="cc-credit fixed top-[75%] left-0 z-[999] h-[25%] w-0 bg-gray-900" />

      {/* Credit Content - appears after animation */}
      <div className="cc-credit-resource fixed top-0 left-0 z-[9999] hidden h-screen w-screen overflow-y-auto p-4 text-center text-white opacity-0 md:top-1/2 md:left-1/2 md:h-auto md:w-full md:-translate-x-1/2 md:-translate-y-1/2 md:p-8">
        <div className="mx-auto max-w-4xl rounded-xl bg-gray-900/95 p-6 backdrop-blur-lg md:bg-gray-800/50">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-5xl">Credits</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {/* Credit Item 1 */}
            <Link
              href="https://gsap.com/docs/v3/"
              target={`_blank`}
              className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6"
            >
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">GSAP</h3>
              <p className="text-sm text-gray-300 md:text-base">
                For the amazing animation library that powers these transitions
              </p>
            </Link>

            {/* Credit Item 2 */}
            <Link
              href="https://youtube.com/@olivierlarose1"
              target={`_blank`}
              className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6"
            >
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">Olivier Larose</h3>
              <p className="text-sm text-gray-300 md:text-base">For inspiring UI/UX designs and animations</p>
              <span
                className="mt-1 inline-block text-sm text-blue-400 hover:underline md:mt-2 md:text-base"
                rel="noopener noreferrer"
              >
                @olivierlarose1
              </span>
            </Link>

            {/* Credit Item 3 */}
            <Link
              href="https://www.pngegg.com/"
              target={`_blank`}
              className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6"
            >
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">PNG Egg</h3>
              <p className="text-sm text-gray-300 md:text-base">For high-quality transparent PNG resources</p>
            </Link>

            {/* Credit Item 4 */}
            <Link
              href={`https://www.reactbits.dev/`}
              target={`_blank`}
              className="credit-item translate-y-10 rounded-lg bg-gray-800 p-4 opacity-0 backdrop-blur-lg md:rounded-xl md:p-6"
            >
              <h3 className="text-primary-400 mb-2 text-xl font-semibold md:mb-3 md:text-2xl">React Bit</h3>
              <p className="text-sm text-gray-300 md:text-base">
                They&apos;ve got some cool pre-defined animation for text and component and lots more!
              </p>
            </Link>
          </div>

          <MainButton
            onClick={handleCreditLeave}
            className="bg-primary-600 hover:bg-primary-700 mt-6 w-full px-4 py-2 text-base transition-all md:mt-10 md:w-auto md:px-8 md:py-3 md:text-lg"
          >
            Close Credits
          </MainButton>
        </div>
      </div>
    </>
  );
};
