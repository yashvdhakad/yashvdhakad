/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 7s linear infinite',
        marquee2: 'marquee2 7s linear infinite',
        marqueeLg1: 'marqueeLg1 7s linear infinite',
        marqueeLg2: 'marqueeLg2 7s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueeLg1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-105%)' },
        },
        marqueeLg2: {
          '0%': { transform: 'translateX(105%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

