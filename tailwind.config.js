const colors = require("./src/tokens/colors")
const fontSizes = require("./src/tokens/fontSizes")
const fontFamilies = require("./src/tokens/fontFamilies")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray1: colors.graysGray1,
      gray2: colors.graysGray2,
      gray3: colors.graysGray3,
      gray4: colors.graysGray4,
      gray5: colors.graysGray5,
      primary: colors.primaryInactive,
      brand: colors.brandLeadGen,
      success: colors.alertSuccess,
      danger: colors.alertDanger,
      borderborder: colors.chromeBorder,
      chromebg: colors.chromeBackground,
    },
    fontFamily: {
      sans: [`"${fontFamilies.regular}"`, "sans-serif"],
      sansBold: [`"${fontFamilies.bold}"`, "sans-serif"],
      sansBlack: [`"${fontFamilies.black}"`, "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        mobilevw: "8vw",
        tabletvw: "5vw",
        laptopvw: "3vw",
        dektopvw: "5vw",
        badge: fontSizes.badge,
      },
      screens: {
        mobile: "320px",
        // => @media (min-width: 320px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    margin: ["last"],
    extend: {},
  },
  plugins: [],
}
