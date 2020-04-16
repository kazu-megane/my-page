const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: "[local]_[hash:base64:5]",
  },
  distDir: "build",
  webpack(config, _options) {
    // '~'でrootを参照
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "."),
    };
    return config;
  },
});
