var http = require('http');
var url = require('url');

var jugadores = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url,true).query;
  if(q.jugador){
    res.end('recibido')
  // recibimos
  } else {
  res.end('Error');
  }
}).listen(process.env.PORT);
