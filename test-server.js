var http = require('http');
var PORT = 8080;
var ip = '127.0.0.1';

var server = http.createServer(function(request, response) {
  console.log('request got ' + request.method + ' ' + request.url);
  response.end('hi');
});

server.listen(PORT, ip);