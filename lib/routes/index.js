'use strict';

var view = require('../view');

module.exports = {

  url: function url(url){
    if (url === '/') return true;
  },

  handle: function handle(req, res) {
    view('index').pipe(res);
  }
};
