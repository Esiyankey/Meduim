/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "rgb(214, 214, 231)",
      },
      color: {
        color: "#f5f5f5",
      },
      fontFamily: {
        display: ["Caladea", "serif"],
      },
      fontFamily:{
        display2:["PT Serif"],
      },
      boxShadow: {
        'custom': ['rgba(0, 0, 0, 0.1) 0px 4px 12px'],
      },
    },
  },
  plugins: [],
};
