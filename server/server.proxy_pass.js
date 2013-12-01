/*global module*/
/*global require*/
/*global console*/
/*global __dirname*/
(function () {
    "use strict";

    var i;
    var fs = require('fs');
    var Store = require('socket.io-clusterhub');
    var cluster = require('cluster');
    var numCPUs = require('os').cpus().length;
    var SETTINGS = require(__dirname + '/settings/config');

    if (!fs.existsSync(SETTINGS.ROOT + '../boards/')) {
        fs.mkdirSync(SETTINGS.ROOT + '../boards/');
    }


    if (cluster.isMaster) {
        // Fork workers.
        for (i = 0; i < numCPUs; i += 1) {
            cluster.fork();
        }

        cluster.on('exit', function (worker) {
            console.log('worker ' + worker.process.pid + ' died');
        });
    } else {
        var Board = require(__dirname + '/classes/Board');

        var io = require('socket.io').listen(SETTINGS.PORT);

        io.configure(function () {
            io.set('store', new Store());
        });

        io.enable('browser client etag');
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

                    // Seems to be wrong but necessary to cleanup memory or done by garbage collection???
                    //delete oBoard;
                });
            });
        });
    }
})();