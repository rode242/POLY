/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F8FC',
        card: '#ffffff',
        lav: '#E9E7FF',
        blue: '#E5F1FF',
        tx: '#20243A',
        tx2: '#737991',
        pur: '#8878E9',
        bl: '#78A9E8',
        bd: '#E8EAF2',
        platformLav: '#D8D4FA',
        groundLav: '#F1EFFF',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Figtree', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(120, 130, 190, 0.14)',
        btn: '0 10px 24px rgba(136, 120, 233, 0.35)',
        win: '0 20px 60px rgba(120, 130, 190, 0.28)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(30px)' },
        },
      },
      animation: {
        bob: 'bob 3s ease-in-out infinite',
        'bob-slow': 'bob 4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
