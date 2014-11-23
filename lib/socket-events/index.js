'use strict';

exports = [{
  route: function route(data){
    if (data.page && data.page == 'main') return true;
  },
  handle: function handler(stream, data) {
    stream.pipe(null);
  }
}];
