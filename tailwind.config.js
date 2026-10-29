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
      },
    },
  },
  // Классы, которые собираются в JS строками — иначе build их выкинет
  safelist: [
    "text-[#ECC880]",
    "text-[#FF9933]",
    "text-[#E63946]",
    "text-[#10B981]",
    "bg-amber-400",
    "bg-amber-500/90",
    "text-amber-300",
    "text-amber-400",
    "border-amber-400/80",
    "animate-ping",
  ],
  plugins: [],
};
