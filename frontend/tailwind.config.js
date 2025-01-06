/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['Zen Kaku Gothic Antique', 'sans-serif'], // Add your font here
      },
      transitionProperty: {
        'stroke-dashoffset': 'stroke-dashoffset',
      },
      strokeDasharray: {
        '100%': '100%',
        '400%': '400%',
      },
      strokeDashoffset: {
        '100%': '100%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
}