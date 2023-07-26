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
            width: 0,
            height: 0,
            opacity: 0,
          },
          "50%": {
            opacity: 0.4,
          },
          "100%": {
            width: 500,
            height: 500,
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
