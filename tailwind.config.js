const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NETLIFY === "true",
    content: ["./src/**/*.html", "./src/**/*.ts"],
    options: {
      whitelist: [/nprogress/, /animate/],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
