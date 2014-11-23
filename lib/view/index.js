'use strict';

var fs = require('fs');
var render = require('jade-stream');

module.exports = function(page, opts){
  var pages = page.split('/');
  var dir, file;

  if (!!page) {
    dir = 'index';
    file = 'index';
  } else if (pages.length === 1) {
    dir = pages.unshift();
    file = (pages.length === 1) ?  'index' : pages.slice(1).join('/');
  }

  return fs.createReadStream(__dirname +
                    '/../pages/'+ dir + '/templates/'+
                  file  + '.jade').pipe(render(opts || {}));
};


