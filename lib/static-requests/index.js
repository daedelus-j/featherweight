'use strict';

var ecstatic = require('ecstatic');
var allow = /^\/(bundle\.js|(.*)\.html|(.*)\.css|fonts\/|img\/|images\/|js\/|(.*)\.js)/;
var assets = ecstatic({
  root: __dirname + '/assets',
  cache: (process.env.NODE_ENV === 'development') ? 0 : 32e9
});


module.exports = {
  route: function route(method, url) {
    if (method === 'GET' || method === 'HEAD') {
      if (allow.test(url)) return true;
    }
  },
  handle: function handle() {

  }
};
