/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#228a95',
        'primary-color-darker': '#187680',
        'secondary-color': '#ef9c4b',
        'secondary-color-darker': '#fd8030',
        'default-font-color': '#777777',
      },
    },
  },
  plugins: [],
}
