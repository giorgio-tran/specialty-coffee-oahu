/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#D9BCA3',
        'brown': '#A6754B',
        'darkbrown': '#6a4b30',
      },
      screens: {
        'xs': {'min': '300px', 'max': '640px'}
      }
    },
  },
  plugins: [],
}
