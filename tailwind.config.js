module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sourceSansPro: "Source Sans Pro, sans-serif",
      lato: "Lato, sans-serif",
      ibm: "IBM Plex Mono, sans-serif",
      roboto: "Roboto Mono, sans-serif",
    },
    colors: {
      cream: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FFFFFF",
        500: "#F9F7F0",
        600: "#EAE4CC",
        700: "#DCD0A7",
        800: "#CDBD83",
        900: "#BFA95E",
      },
      black: {
        50: "#949494",
        100: "#878787",
        200: "#6E6E6E",
        300: "#545454",
        400: "#3B3B3B",
        500: "#212121",
        600: "#080808",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      green: {
        500: "#27AE60",
      },
      red: "#ff4365",
      white: "#ffffff",
      transparent: "transparent",
      lightGrey: "#FAFAFA",
      mediumGrey: "6f6f6f",
      yellow: "#ffcb77",
    },
    extend: {
      spacing: {
        108: "27rem",
        120: "30rem",
        134: "33rem",
      },
      translate: {
        double: "200%",
        triple: "300%",
        quad: "400%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
