
server:
	@node_modules/nodemon/bin/nodemon.js bin/server.js

test:
	@node_modules/.bin/tape test.js

.PHONY: server test


