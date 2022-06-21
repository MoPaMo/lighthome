/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "ack.html", "script.js", "**/*.js"],
minify:true,
  theme: {
    extend: {
      colors: {
        laser: "#d1b879",
        grape:"#381c5c",
        coral:"#ff7477",
        neutral:"#ffb7c3"
      },
    },
  },
  plugins: [],
};
