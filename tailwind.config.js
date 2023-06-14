/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': 'rgb(214, 214, 231)',
      },
      fontFamily:{
        'customPlayfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

