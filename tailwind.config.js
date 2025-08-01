/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: false,
  content: ["**/*.{html, jsx, js}", "**/*.js", "**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#BFFE66",
        secondary: "#3DBDEC",
      },
    },
  },
  plugins: [],
};

