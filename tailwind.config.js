/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meieScript: ['"Meie Script"', 'cursive'],
        khmer: ['"Konkhmer Sleokchher"', 'cursive'],
      },
      colors: {
        greenAccent: "#46FFAF",
      },  
    },
  },
  plugins: [],
}
