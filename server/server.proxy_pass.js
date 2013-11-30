(function(){
    "use strict";
})();
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

// store must be initialized for master/worker processes
var store = new (require('socket.io-clusterhub'));

if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {
	var Board = require(__dirname + '/classes/Board');

	var io = require('socket.io').listen(3000);

	io.configure(function() {
		io.set('store', store);
	});

	io.enable('browser client minification');
	// send minified client
	io.enable('browser client etag');
	// apply etag caching logic based on version number
	io.enable('browser client gzip');
	io.set('log level', 1);

	/**
	 * Initialize the socket connection
	 */
	io.sockets.on('connection', function(socket) {

		// The initial connector for the board api
		socket.on('connect', function(sBoardName) {

			// Initialize Board (and create if not exist)
			var oBoard = new Board(sBoardName, socket);

			// Handle conection lost delete board object
			socket.on('disconnect', function(data) {
				oBoard.goodBye();
				setTimeout(function() {
					delete oBoard;
					console.log('Board object deleted');
				}, 10000);

			});
		});
	});
}