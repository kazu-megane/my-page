const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                exportGlobals: true,
                localIdentName: "[local]_[hash:base64:5]",
                hashPrefix: "my-custom-hash",
              },
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer"), require("postcss-csso")],
            },
          },
          "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
      }
    );
    config.resolve.extensions.push(".ts", ".tsx");

    // '~'でrootを参照
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../"),
    };
    return config;
  },
};
