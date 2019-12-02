var express = require("express");
var proxy = require("http-proxy-middleware");

var app = express();

app.use(
  "/api",
  proxy({ target: "https://api.imgur.com", changeOrigin: true, pathRewrite: { "^/api": "" } })
);
app.listen(3000);
