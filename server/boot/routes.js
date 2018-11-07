'use strict';
var loopback = require('loopback');
module.exports = function(server) {
  // Install a `/` route that returns server status
  server.use(loopback.static('dist'));

};
