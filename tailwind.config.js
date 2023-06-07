/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'x-sm': '500px',
        'custom-xl': '1180px'
      }
    },
    fontFamily: {
      signature: ["Kaushan Script"]
    },
  },
  plugins: [],
}

