/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#008080',
          dark: '#0f172a', // Slate 900 for dark mode background
          light: '#ffffff'
        }
      }
    },
  },
  plugins: [],
}
