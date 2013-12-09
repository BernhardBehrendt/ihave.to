/*global require*/
/*global console*/
/*global __dirname*/
/*global oBoard*/
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

    if (!fs.existsSync(SETTINGS.ROOT + '../public/upload')) {
        fs.mkdirSync(SETTINGS.ROOT + '../public/upload');
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
        // Board instande
        var Board = require(SETTINGS.ROOT + 'classes/Board');
        var http = require('http');
        var express = require('express');
        var app = express();
        var server = http.createServer(app);
        var io = require('socket.io').listen(server);

        io.configure(function () {
            io.set('store', new Store());
        });
        app.use(express.bodyParser());
        app.use(express.static(SETTINGS.ROOT + '../public/'));

        app.post('/upload-wp', function (req, res) {


            if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].indexOf(req.files.file.headers['content-type']) !== -1) {
                var sTmpPath = req.files.file.path;
                var sTargetFile = __dirname + '/../public/upload/' + sTmpPath.split('/').pop();

                fs.stat(sTmpPath, function (err, stats) {

                    if (stats.size < (10 * Math.pow(1024, 2))) {
                        fs.readFile(sTmpPath, function (err, image) {
                            //fs.createReadStream(sTmpPath).pipe(fs.createWriteStream(sFileName));

                            if (err === null) {

                                // Fix image rotation and save to target

                                fs.writeFile(sTargetFile, image, function (err) {
                                    if (err === null) {
                                        res.send('upload/' + sTargetFile.split('/').pop());
                                    } else {
                                        res.send('FILE_WRITE_ERROR');
                                    }
                                });
                            } else {
                                res.send('FILE_READ_ERROR');
                            }

                        });
                    } else {
                        res.send('FILE_TO_LARGE');
                    }

                });
            } else {
                res.send('UPLOAD_ERROR');
            }
        });


        app.post('/unlink-wp', function (req, res) {
            var sRemoveFile = req.body.image.split('/').pop();

            fs.exists(__dirname + '/../public/upload/' + sRemoveFile, function (exists) {

                if (exists) {
                    fs.unlink(__dirname + '/../public/upload/' + sRemoveFile, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }

                res.send('done');

            });
        });


            app.get('*', function(req, res){
                res.send(404, 'Not found');
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

        server.listen(SETTINGS.PORT);

        console.log('iHave.to was started on port ' + SETTINGS.PORT);
    }
})();