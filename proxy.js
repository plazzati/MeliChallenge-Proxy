var http = require('http');
var https = require('https');
const util = require('util');

http.createServer(onRequest).listen(8080, "127.0.0.1");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

  console.log('Escuchando en puerto :8080');

function onRequest(client_req, client_res) {
//  console.log('url: ' + client_req.url);
//  console.log('method: ' + client_req.method);
//  console.log('headers: ' + util.inspect(client_req.headers, {showHidden: false, depth: null}));

   var options = {
    hostname: 'api.mercadolibre.com',
    port: 443,
    path: client_req.url,
    method: client_req.method
    /*,headers: client_req.headers Lo saco para evitar el 403 de cloudfront*/
  };

 
  var proxy = https.request(options, function (res) {
   // console.log('response: ' + util.inspect(res, {showHidden: false, depth: null}));
    client_res.writeHead(res.statusCode, res.headers);
    res.pipe(client_res, {
      end: true
    });
  });

 console.log('Redirigido a: ' + options.hostname + client_req.url)

  client_req.pipe(proxy, {
    end: true
  });

}