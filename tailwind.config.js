/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        wine: {
          DEFAULT: '#6B1A2A',
          dark: '#4A0F1C',
          deep: '#2D0910',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          pale: '#F5E8C4',
        },
      },
      scale: {
        98: '0.98',
      },
    },
  },
  plugins: [],
};
