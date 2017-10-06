const path = require("path");
const webpack = require("webpack");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      "./src/bootstrap.tsx",
      "webpack-hot-middleware/client"
    ],
    vandor: "./src/vendor.ts"
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
        use: ["awesome-typescript-loader"]
      },
      {
        test: /\.svg$/,
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
    })
  ]
}