/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
    colors:{
      primary:"#023D6D",
      secondary:"#FDA513",
       },
       backgroundImage: {
        
          'logomakerbgimg':"url('../app/assets/imges/logomakerbg.png')"
      },
      backgroundSize:{
        coverfull:"100% 100%"
      },

      fontFamily:{
        ubuntu:["Ubuntu"],
       

      }

    },
  },
  plugins: [
    flowbite.plugin()
  ],
};