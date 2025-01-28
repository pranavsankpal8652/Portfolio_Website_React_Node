const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      animation:{
        fadIn:'fadeIN 0.6s ease-in-out'
      },      
      keyframes:{
        fadeIN:{
          '0%':{transform:'scale(0)'},
          '100%':{transform:'scale(1)'}
        }
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}