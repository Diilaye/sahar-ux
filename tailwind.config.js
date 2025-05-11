/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#080c17',
          dark: '#050911',
          darker: '#030509',
          lighter: '#0c1120',
        },
        gold: '#d4af37',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};