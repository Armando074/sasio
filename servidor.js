var http = require('http');
var url = require('url');

var jugadores = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url,true).query;
  if(q.jugador){
  // recibimos
    var jugador = JSON.parse(q.jugador);
    if (typeof jugador.nombre === 'string' && 
       typeof jugador.pos === 'object' &&
       typeof jugador.pos.length === 'number' &&
       jugador.pos.length === 2 && 
       typeof jugador.tam === 'number'){
      // buscar obj
      var indice = -1;
      for (var i = 0; i < jugadores. length; i++){
      if (jugadores[i].nom === jugador.nom;){
      indice = i;
        break;
      }
     }
    if (indice < 0){
      // crear
      jugadores.push(jugador);
      }else{
      //actualizar
        jugadores[indice]=jugador;
        for (var i = 0; i< jugadores.length; i++){
        var dx = jugadores[i].pos[0] - jugador.pos[0];
        var dy = jugadores[i].pos[1] - jugador.pos[1];
          
          var d Marh.sqrt(dx * dx + dy * dy);
        }
        res.end('jugador actualizado')
      }
      
    }else{
    res.end('incorrecto');
    }
  } else {
  res.end('Error');
  }
}).listen(process.env.PORT);
