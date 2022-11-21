/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./client/index.html",
    "./client/pages/**/*.{js,ts,jsx,tsx}",
    "./client/components/**/*.{js,ts,jsx,tsx}",
    "./client/features/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
