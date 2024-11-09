import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
        secondary: colors.gray,
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
