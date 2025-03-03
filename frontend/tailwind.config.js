/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bagoss: ['Bagoss Regular', 'sans-serif'],
        bagossMedium: ['Bagoss Medium', 'sans-serif'],
        bagossSemiBold: ['Bagoss SemiBold', 'sans-serif'],
        bagossBold: ['Bagoss Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      };

      addUtilities(newUtilities);
    }
  ],
}