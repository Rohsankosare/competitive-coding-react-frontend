/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'eh':'750px',
        '90%':'90%'
      },
      height:{
        'eh':'420px'
      }
    },
   
  },
  plugins: [],
}
