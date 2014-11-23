#!/usr/bin/env node
process.title = 'featherweight';

require('../index')({
  socketConnection: true
});
