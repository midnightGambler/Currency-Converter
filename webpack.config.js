const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: "./src/index.tsx",
  // devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  node: {
    fs: "empty",
  },
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "bundle.js",
    chunkFilename: "vendors.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
      hash: true,
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
  },
};
