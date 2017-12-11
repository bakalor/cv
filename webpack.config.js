const path = require("path");
const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dev = process.env.NODE_ENV !== 'production'

const extractApp = new ExtractTextPlugin("app.css");
const cssLoaders = [
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

module.exports = {
  entry: {
    app: dev
      ? [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client",
        "./src/bootstrap.tsx",
      ]
      : "./src/bootstrap.tsx",

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
        test: /\.svg$|.jpg$|.ttf$/,
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
        use: dev
          ? [{ loader: "style-loader" }].concat(cssLoaders)
          : extractApp.extract({
            fallback: "style-loader",
            use: cssLoaders
          })
      },
    ]
  },

  devtool: dev
    ? "cheap-module-eval-source-map"
    : "nosources-source-map",

  plugins: [
    new HtmlPlugin({
      template: "./src/index.html"
    }),
    new webpack.ProvidePlugin({
      d3: "d3",
      "window.d3": "d3",
    }),
    extractApp
  ].concat(dev
    ? [
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin("./dist"),
    ]
    : [])
}