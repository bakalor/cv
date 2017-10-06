/* Stub for ui developig. Migrate to ts when start a server development */

const express = require("express")
const path = require("path")
const app = express();
const DEFAULT_PORT = 4000;
app.use(express.static(path.resolve("./dist")))

const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    children: false
  },
  quiet: true
}));
app.use(require("webpack-hot-middleware")(compiler));
app.get("/*", (_, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(DEFAULT_PORT, () => { });