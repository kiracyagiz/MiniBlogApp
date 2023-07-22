/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '25' : '630px',
        'mar' : '630px',
        '97' : '420px'
      }
    },
  },
  plugins: [],
}