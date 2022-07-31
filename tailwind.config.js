/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',

],
  theme: {
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')],
}