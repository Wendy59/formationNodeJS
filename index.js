var httpServer = require("http");
var urlServer = require("url");

var server = httpServer.createServer(function(req, res){
  var page = urlServer.parse(req.url).pathname;
  var parametre = queryString.parse(urlServer.parse(req.url).query);
  var entete = 200;
  var defaultMessage = "Hello";

  if(page !== '/lien1' && page !== '/lien2'){
    entete = 404;
    defaultMessage = 'Erreur 404!!';
  }
  res.writeHead(entete, {"Content-Type":"text/html"});

  let html = '<!DOCTYPE html>';
  html += '<html>';
  html += '<head>';
  html += '<title>NodeJS</title>';
  html += '<meta charset="utf_8" />';
  html += '</head>';
  html += '<body>';
  html += '<h1>'+page+'</h1>';
  html += '<h2>'+defaultMessage+'</h2>';
  html += '<ul>';
  html += '<li><a href="http://localhost:9999/lien1">Lien1</a></li>';
  html += '<li><a href="http://localhost:9999/lien2">Lien2</a></li>';
  html += '<li><a href="http://localhost:9999/lien3">Lien3</a></li>';
  html += '</ul>';
  html += '</body>';
  html += '</html>';

  res.write(html);
  res.end();
});

server.listen(9999);
