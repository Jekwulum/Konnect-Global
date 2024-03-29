/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-bgColor": "#E6E8E6",
        "custom-green": "#013D1E",
        "custom-light": "#FFFFFF",
        "custom-blue": "#0C1239",
      },
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Montez: ['Montez', 'cursive'],
      GreatVibes: ['Great Vibes', 'cursive'],
      BizUdmincho: ['BIZ UDMincho', 'serif'],
      // Lato: ['Lato', 'sans-serif'],
    }
  },
  plugins: [],
}
