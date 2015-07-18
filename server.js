'use strict';

var Hapi = require('hapi');
var Routes = require('./routes/routes');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route(Routes);

// Start the server
server.start(function() {
  console.log('Server running at:', server.info.uri);
});
