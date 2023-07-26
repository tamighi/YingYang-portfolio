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
        droplet: "droplet 2s ease",
      },
      keyframes: {
        droplet: {
          "0%": {
            transform: "scale(0.8)",
            opacity: 0.8
          },
          "100%": {
            transform: "scale(10)",
            opacity: 0
          },
        },
      },
    },
  },
  plugins: [],
};
