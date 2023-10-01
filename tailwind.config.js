/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        blue: "#0079ff",
        blue2: "#60ABFF",
        text1: "#4B6A9B",
        text2: "#697C9A",
        textBold: "#2B3442",
        bg1: "#F6F8FF",
        bg2: "#FEFEFE",
      },
      dark: {
        text1: "#FFFFFF",
        bg1: "#141D2F",
        bg2: "#1E2A47",
      },
    },
    extend: {},
  },
  plugins: [],
};
