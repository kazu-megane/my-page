const path = require("path");
require("dotenv").config();

module.exports = {
  distDir: "build",
  webpack(config, _options) {
    // '~'でrootを参照
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "."),
    };
    return config;
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  },
};
