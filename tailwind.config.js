/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifica: ["Pacifica", "cursive"],
      },
      transitionProperty: {
        yinYang: "top, left, width, height",
      },
      animation: {
        droplet: "droplet 1s ease",
      },
      keyframes: {
        droplet: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(3)",
          },
        },
      },
    },
  },
  plugins: [],
};
