'use strict';

var Hapi = require('hapi');
var Code = require('code');
var Lab = require('lab');

var Routes = require('../routes/routes');

// Declare shortcuts
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('hello', function() {

  it('replies with hello world', function(done) {
    var server = new Hapi.Server();
    server.connection({
      host: 'localhost',
      port: 8000
    });

    server.route(Routes);

    var options = { method: 'GET', url: '/hello' };

    server.inject(options, function(response) {
      expect(response.result).to.equal('hello world');
      done();
    });
  })

})
