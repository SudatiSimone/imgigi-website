// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  extend: {
    colors: {
      brand: {

        black: "#000000",
        sand:  "#D1D0CB",
        white: "#FFFFFF",
        rust:  "#A0381B",
      }
    },
    fontFamily: {
      serif:   ["var(--font-serif)", "serif"],       // Arapey
      display: ["var(--font-display)", "serif"],     // TAN HARMONY
      script:  ["var(--font-script)", "cursive"],    // Beautifully delicious script
    }
  }
},
  plugins: [],
}
