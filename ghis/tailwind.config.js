/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
    },
    extend: {
      colors:{
        ghisRed:'hsl(12,88%,59%)',
        ghisDarkRed:'hsl(1,99%,99%)'

      }
    },
  },
  plugins: [],
}

