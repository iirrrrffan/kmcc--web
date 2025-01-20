/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(21, 128, 61)', // Primary color
        secondary: 'rgb(15, 76, 36)', // Darker shade for secondary
        light: 'rgb(34, 197, 94)', // Lighter main color
      },
      animation: {
        'zoom-in': 'zoomIn 5s ease-in-out', 
        'fadeInUp': 'fadeInUp 1.5s ease-out', 
        bobble: 'bobble 4s ease-in-out infinite alternate',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bobble: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none", // IE 10+
            "scrollbar-width": "none", // Firefox
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
