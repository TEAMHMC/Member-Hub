/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hmc: {
          blue: '#233DFF',
          orange: '#FF6E40',
          yellow: '#F9C74F',
          pink: '#FF6F91',
        },
      },
    },
  },
  plugins: [],
};
