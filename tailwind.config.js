/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: false,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
