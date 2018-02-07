var http = require('http');
var PORT = 8080;
var messages = [];

var server = http.createServer(function(request, response) {
  console.log('request got ' + request.method + ' ' + request.url);
  if (request.method === 'POST') {
    var body = '';
    request.on('data', function(chunk) {
      body += chunk;
    });
    request.on('end', function() {
      messages.push(JSON.parse(body));
    });
  } else if (request.method === 'GET') {
    response.end('Got your request!');
  }
  response.end('hi');
});

server.listen(PORT);