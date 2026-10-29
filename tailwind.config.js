/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./catalog.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Cinzel", "serif"],
        display: ["Cinzel", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Inter", "sans-serif"],
        industrial: ["Oswald", "sans-serif"],
      },
      zIndex: {
        15: "15",
        16: "16",
        25: "25",
        50: "50",
        100: "100",
        110: "110",
      },
    },
  },
  safelist: [
    "absolute", "relative", "fixed", "inset-0", "top-4", "right-4", "top-6", "right-6", "left-4", "right-4",
    "top-3", "left-3", "bottom-3", "right-3", "top-1/2", "-translate-y-1/2", "-translate-x-1/2",
    "w-full", "h-full", "w-8", "h-8", "w-9", "h-9", "w-12", "h-12", "max-w-md", "max-w-[92vw]", "max-h-[88vh]",
    "flex", "hidden", "items-center", "justify-center", "justify-between", "items-start", "flex-col",
    "rounded-xl", "rounded-2xl", "rounded-t-3xl", "rounded-full", "overflow-hidden",
    "z-20", "z-30", "z-50", "z-[100]", "z-[110]",
    "aspect-[1/1]", "aspect-[4/3]", "cursor-pointer", "cursor-zoom-in", "cursor-crosshair",
  ],
  plugins: [],
};
