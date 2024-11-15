/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "rgb(31, 30, 38)",
        customBody: "rgb(23, 22, 30)",
        CoustomText: "rgb(255, 255, 255)",
        roundedBorder: "rgb(76,77,80)",
        backgroundGreen: "rgb(54,201,95)",
        ProfileNavBg: "rgb(33,48,44);",
        bodyHederSubtext: "rgb(130,134,144);",
      },
    },
  },
  plugins: [],
};
