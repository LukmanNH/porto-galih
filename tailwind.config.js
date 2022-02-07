const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/bg-hero.png)",
        },
        ".bg-card": {
          "background-image": "url(/bg-card.png)",
        },
        ".bg-halfcard": {
          "background-image": "url(/bg-halfcard.png)",
        },
        ".icon-down": {
          background: "url(/icon-down.png) 90% / 10% no-repeat ",
        },
        ".shadow-custom-button": {
          "box-shadow": "0px 4px 20px 5px rgba(0, 0, 0, 0.06);",
        },
        ".shadow-custom-card": {
          "box-shadow": "0px 4px 40px rgba(0, 0, 0, 0.08);",
        },
        ".icon-up": {
          background: "url(/icon-up.png) 90% / 10% no-repeat ",
        },
        ".lock-icon": {
          background: "url(/lock-icon.png)",
        },
        ".blueHover": {
          background: "rgba(3, 135, 255, 0.08)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
