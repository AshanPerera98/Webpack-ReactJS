const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.DEV_FEATURE": JSON.stringify(true),
      "process.env.PROD_FEATURE": JSON.stringify(false),
      "process.env.SERVICE_URL": JSON.stringify("https://dev.example.com"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
