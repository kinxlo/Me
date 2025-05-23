export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    // 3D transform classes
    "cc-3d-container",
    "cc-3d-item-move",
    "cc-3d-item",
    "cc-3d-group",
    "cc-3d-flat",

    // Animation classes
    "animate-float",
    "animate-float-slow",
    "animate-float-gentle",
    "animate-fade-out",

    // Transform utilities
    "preserve-3d",
    "backface-hidden",
    "transform-gpu",
    "perspective-[2000px]",
    "perspective-[1800px]",
    "rotate-y-[10deg]",
    "rotate-y-[20deg]",
    "translate-z-[120px]",
    "translate-x-[1rem]",
    "-translate-y-[1rem]",
  ],
  theme: {
    extend: {
      // Register your custom animations
      animation: {
        float: "float 3s ease-in-out infinite alternate",
        "float-slow": "float-slow 4s ease-in-out infinite",
        "float-gentle": "float-gentle 2.5s ease-in-out infinite",
        "fade-out": "fadeOut 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      // Define your keyframes
      keyframes: {
        float: {
          "50%": {
            transform: "translateZ(120px) translateX(1rem) translateY(-20px)",
          },
          "100%": {
            transform: "translateZ(120px) translateX(1rem) translateY(0px)",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            "animation-timing-function": "cubic-bezier(0.4, 0, 0.6, 1)",
          },
          "50%": {
            transform: "translateY(-15px) rotate(2deg)",
            "animation-timing-function": "cubic-bezier(0.4, 0, 0.6, 1)",
          },
        },
        "float-gentle": {
          "0%, 100%": {
            transform: "translateY(0px)",
            "animation-timing-function": "ease-in-out",
          },
          "50%": {
            transform: "translateY(-10px)",
            "animation-timing-function": "ease-in-out",
          },
        },
        fadeOut: {
          to: { opacity: "0" },
        },
      },
      // Add 3D transform utilities
      transformStyle: {
        "preserve-3d": "preserve-3d",
        flat: "flat",
      },
      backfaceVisibility: {
        hidden: "hidden",
        visible: "visible",
      },
    },
  },
  plugins: [
    // Add any necessary plugins
  ],
};
