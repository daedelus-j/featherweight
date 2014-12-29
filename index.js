var http = require('http');
var engine = require('engine.io-stream');
var config = require('./lib/config');

module.exports = function start(opts) {
  var opts = opts || {};

  var router = require('featherweight-router')({
    socketEvents: require('./lib/socket-events'),
    staticFiles: require('./lib/static-requests'),
    requestHandlers: require('./lib/http-requests')
  });

  var server = http
      .createServer(router.http)
      .listen(config.port, function(){
        console.log('listening on: ' + config.port);
      });

  if (opts.socketConnection) {
    engine(router.ws).attach(server, '/ws');
  }

  return {};
};

