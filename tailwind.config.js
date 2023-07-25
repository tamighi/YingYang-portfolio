/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifica: ["Pacifica", "cursive"],
      },
      animation: {
        "spin-slow": "spin 2.5s linear infinite",
      },
      transitionProperty: {
        yinYang: "top, left, width, height",
      },
    },
  },
  plugins: [],
};
