/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-reservar':'#DC2D35',
        'naranja-custom':'#DC2D35'
      }
    },
  },
  plugins: [],
}