var http = require('http');
var express = require('express');
var expressServer = express();
expressServer.get('/article/save/', function(req, res, next) {
	debugger;
  res.send('Hello from article save');
});
expressServer.get('/article/list/', function(req, res, next) {
  res.send('Hello from article list');
});
// var server = http.createServer(expressServer);
expressServer.listen(3000);


console.log('server corriendo en localhost:3000');
