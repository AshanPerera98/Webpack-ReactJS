const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.DEV_FEATURE": JSON.stringify(false),
      "process.env.PROD_FEATURE": JSON.stringify(true),
      "process.env.SERVICE_URL": JSON.stringify("https://prod.example.com"),
    }),
  ],
};
