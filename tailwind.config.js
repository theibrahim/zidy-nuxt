/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      handwritten: ['Jost']
    },
    extend: {
      colors: {
        primary: "rgb(72 194 182)",
        primaryblue: "rgb(73 174 233)",
      },
    },
  },
  plugins: [],
};
