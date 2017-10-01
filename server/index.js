/* Stub for ui developig. Migrate to ts when start a server development */

const express = require("express")
const path = require("path")
const app = express();
const DEFAULT_PORT = 4002;
app.use(express.static(path.resolve("./dist")))

app.get("/*", (_, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(DEFAULT_PORT, () => { });