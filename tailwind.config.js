/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100e17',
        secondary: '#0bceaf'
      },
      boxShadow: {
        card: '-16px 0 48px #000000'
      }
    }
  },
  plugins: []
}
