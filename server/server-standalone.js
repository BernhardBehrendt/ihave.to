/*global require*/
/*global console*/
/*global __dirname*/
/*global oBoard*/
(function () {
    "use strict";

    var cluster = require('cluster');
    var numCPUs = require('os').cpus().length;
    var fs = require('fs');

    if (!fs.existsSync(__dirname + '/../boards/')) {
        fs.mkdirSync(__dirname + '/../boards/');
    }

// store must be initialized for master/worker processes
    var Store = require('socket.io-clusterhub');

    if (cluster.isMaster) {
        var i;
        // Fork workers.
        for (i = 0; i < numCPUs; i += 1) {
            cluster.fork();
        }

        cluster.on('exit', function (worker) {
            console.log('worker ' + worker.process.pid + ' died');
        });
    } else {
        // Board instande
        var Board = require(__dirname + '/classes/Board');
        var http = require('http');
        var express = require('express');
        var app = express();
        var server = http.createServer(app);
        var io = require('socket.io').listen(server);
        io.configure(function () {
            io.set('store', new Store());
        });

        app.use(express.static(__dirname + '/../public/'));

        app.use(function (req, res) {
            res.redirect(302, '/404.html');
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

        server.listen(3000);
        console.log('iHave.to was started on port 3000 (http://localhost:3000)');
    }
})();