'use strict';
var loopback = require('loopback');
var history = require('connect-history-api-fallback')
module.exports = function(server) {
  // Install a `/` route that returns server status
  server.use('/chat', loopback.static('dist/chat.html'));
  server.use(history());
  server.use(loopback.static('dist'));

};
