module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { lobster: ["Lobster"], daughter: ["Architects Daughter"] },
    extend: {
      colors: {
        primary: "#9f5ba4",
        secondary: "#a49f5b",
        tertiary: "#5ba49f",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
};
