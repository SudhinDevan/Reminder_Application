/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kode Mono"', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}