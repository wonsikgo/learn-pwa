var path = require("path");
var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  mode: "none",

  entry: {
    main: path.resolve(__dirname, "js/app.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundles.js",
    publicPath: "/dist/",
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: "pwa-tutorial",
      filename: "service-worker.js",
      staticFileGlobsIgnorePatterns: [
        "index.html",
        "manifest.json",
        "css/*.css",
        "images/**.*",
      ],
      mergeStaticsConfig: true,
    }),
  ],
};
