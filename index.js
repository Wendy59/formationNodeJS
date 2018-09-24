var httpServer = require("http");
var urlServer = require("url");

var server = httpServer.createServer(function(req, res){
  var page = urlServer.parse(req.url).pathname;

  if(page !== '/lien1' && page !== '/lien2'){
    // if(page == "/lien1" ){
    res.writeHead(404);
    res.end('Erreur 404!!');
    return;
  }
  res.writeHead(200, {"Content-Type":"text/html"});

  let html = '<!DOCTYPE html>';
  html += '<html>';
  html += '<head>';
  html += '<title>NodeJS</title>';
  html += '<meta charset="utf_8" />';
  html += '</head>';
  html += '<body>';
  html += '<h1>'+page+'</h1>';
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
