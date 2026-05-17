/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f2f7f2',
          100: '#e0ede0',
          200: '#c2dbc2',
          300: '#9dc39d',
          400: '#8BA888',
          500: '#6e8f6b',
          600: '#587556',
          700: '#455c43',
          800: '#374938',
          900: '#2d3d2e',
        },
      },
    },
  },
  plugins: [],
};
