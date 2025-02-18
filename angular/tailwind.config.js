/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'sims': 'url("/images/haru-cafe-sims.jfif")'
      },
      fontFamily: {
        'font-comic-sans': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}

