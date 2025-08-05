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
        dark: '#0a0a0a',
        gray: '#171717',
        light: '#f8f8f0',
        accent: '#10b981',
        accentLight: '#34d399',
      }
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      serif: ['var(--font-dm-serif)', 'serif'],
    }
  }
},
  plugins: [],
}
