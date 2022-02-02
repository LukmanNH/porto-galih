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
        ".icon-down": {
          background: "url(/icon-down.png) 90% / 10% no-repeat ",
        },
        ".icon-up": {
          background: "url(/icon-down.png) 90% / 10% no-repeat ",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
