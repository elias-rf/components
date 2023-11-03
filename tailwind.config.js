/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './client/pages/**/*.{ts,tsx}',
    './client/components/**/*.{ts,tsx}',
    './client/features/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
