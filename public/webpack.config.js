const webpack = require("webpack");

module.exports = {
  plugins: [
    // other plugins,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
