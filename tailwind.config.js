/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./catalog.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'serif'],
        display: ['Cinzel', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        industrial: ['Oswald', 'sans-serif']
      },
      zIndex: {
        '15': '15',
        '16': '16',
        '25': '25'
      }
    }
  },
  plugins: [],
}
