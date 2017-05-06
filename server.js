var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var config = require("./webpack.config");
var path = require('path');

var app = express();
var compiler = webpack(config);
console.log(compiler);


const middleware = webpackDevMiddleware(compiler,{
  publicPath: path.resolve(__dirname, 'public'),
  stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
  }
});

app.use(middleware);
app.listen(3000, function () {
  console.log("Listening on port 3000!");
});
