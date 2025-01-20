/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        dmsans: ['DM+Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
