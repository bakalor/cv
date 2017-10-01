const path = require("path");
const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./app/bootstrap.tsx",
    vandor: "./app/vendor.ts"
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
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
        use: ["awesome-typescript-loader"]
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
  
  devServer: {
    port: 4004,
    contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
  },

  plugins: [
    new HtmlPlugin({
      template: "./app/index.html"
    })
  ]
}