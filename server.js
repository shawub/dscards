var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;
var publicPath = path.resolve(__dirname, 'public');
var distPath = path.resolve(__dirname, 'dist');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});