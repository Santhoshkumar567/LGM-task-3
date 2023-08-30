/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hellow:"#0d0d26",
      }
    },
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("@tailwindcss/typography"),require('@tailwindcss/forms'), require("daisyui")],
}
