/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./assets/**/*.css",
    "./nuxt.config.{js,ts}",
    "./*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
