/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
      },
      fontFamily:{
        JetBrains:['JetBrains Mono', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

