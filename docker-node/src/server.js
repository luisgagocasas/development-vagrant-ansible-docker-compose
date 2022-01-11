
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static('./public'));
require('./app/routes.js')(app, path);

app.listen(port);
console.log("App listening on port " + port);
