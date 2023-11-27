/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#29ADB2",
      secondary: "#F2FFE9",
      dark: "#0766AD",
      light: "#C5E898",
      white: colors.white,
      red: colors.red,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};
