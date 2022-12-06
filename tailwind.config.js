/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut:{
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in 1',
        fadeOut: 'fadeOut  1s ease-in 1'
      }
    },
  },
  plugins: [],
}
