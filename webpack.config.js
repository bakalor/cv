const path = require("path");
const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "./src/bootstrap.tsx",
      "webpack-hot-middleware/client"
    ],
    vendor: "./src/vendor.ts"
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".css", ".js"],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader"
        ]
      },
      {
        test: /\.svg$|.ttf$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 64000
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              namedExport: true,
              camelCase: true,
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          "postcss-loader"
        ]
      },
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      d3: "d3"
    }),
    new CleanWebpackPlugin("./dist")
  ]
}