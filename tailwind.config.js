/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./views/**/*.{html,ejs,js}",
     "./public/**/*.{js,css}",
     "./src/**/*.{html,js,css}"            // Views folder (EJS templates)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
