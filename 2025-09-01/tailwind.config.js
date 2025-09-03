/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f5f5ed',
          DEFAULT: '#e3d8b7',
          dark: '#b9a583',
        },
        accent: {
          DEFAULT: '#927240',
          dark: '#7a5a2c',
        },
      },
      fontFamily: {
        handwriting: ['"Caveat"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};