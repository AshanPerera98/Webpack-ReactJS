const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (env) => {
  const { ENVIRONMENT } = env;
  const envConfig = require(`./webpack.${ENVIRONMENT}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
