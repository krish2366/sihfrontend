/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('/src/Images/Rectangle 6.svg')",
      },
      fontFamily: {
        julee: ['Julee', 'cursive'],
      },
    }
  },
  plugins: [],
}

