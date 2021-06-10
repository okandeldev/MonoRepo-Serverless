const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: slsw.lib.entries,
  devtool: "source-map",
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? "dev" : "production",
  optimization: {
    minimize: false
  },

  target: 'node',
  node: {
    __dirname: false,
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  // Run babel on all .js files - skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};