module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.js" },
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 500,
      unitPrecision: 5,
      propList: ["*"],
      viewportUnit: "vmin",
      fontViewportUnit: "vmin",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
      landscapeUnit: "vmin",
      landscapeWidth: 500,
    },
    autoprefixer: {},
  },
};
