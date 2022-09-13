const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const path = require("path");
const { dependencies } = require("../package.json");

// WIDGET REMOTE
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "widget",
      filename: "remoteEntry.js",
      exposes: {
        "./WidgetIndex": "./src/bootstrap",
      },
      shared: {
        ...dependencies,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
  target: "web",
};

module.exports = merge(commonConfig, devConfig);
