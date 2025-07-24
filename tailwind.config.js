/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  darkMode: 'class', // <-- important
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // update according to your folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
