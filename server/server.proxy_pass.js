/*global module*/
/*global require*/
/*global console*/
/*global __dirname*/
(function () {
    "use strict";

    var i;
    var Store = require('socket.io-clusterhub');
    var cluster = require('cluster');
    var Os = require('os');
    var numCpus = Os.cpus().length;
    if (cluster.isMaster) {
        // Fork workers.
        for (i = 0; i < numCpus; i += 1) {
            cluster.fork();
        }

        cluster.on('exit', function (worker) {
            console.log('worker ' + worker.process.pid + ' died');
        });
    } else {
        var Board = require(__dirname + '/classes/Board');

        var io = require('socket.io').listen(3000);

        io.configure(function () {
            io.set('store', new Store());
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
        io.sockets.on('connection', function (socket) {

            // The initial connector for the board api
            socket.on('connect', function (sBoardName) {

                // Initialize Board (and create if not exist)
                var oBoard = new Board(sBoardName, socket);

                // Handle conection lost delete board object
                socket.on('disconnect', function () {
                    oBoard.goodBye();
                });
            });
        });
    }
})();