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
    var gm = require('gm');
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
            if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg+xml'].indexOf(req.files.file.headers['content-type']) !== -1) {
                var sTmpPath = req.files.file.path;
                var sTargetFile = __dirname + '/../public/upload/' + sTmpPath.split('/').pop();

                fs.stat(sTmpPath, function (err, stats) {
                    if (stats.size <= (SETTINGS.MAX_UPLOAD_SIZE * Math.pow(1024, 2))) {
                        // If image is an jpeg image
                        if (['image/jpg', 'image/jpeg'].indexOf(req.files.file.headers['content-type']) !== -1) {
                            gm(sTmpPath).quality(SETTINGS.GM_QUALITY).autoOrient()
                                .write(sTargetFile, function (err) {
                                    gm(sTargetFile).thumb(64, 64, sTargetFile.replace(/(.[A-Za-z]*)$/, '.thumb$1'), SETTINGS.GM_QUALITY, function (err) {
                                        res.send('upload/' + sTargetFile.split('/').pop());
                                    });
                                });
                        } else {
                            fs.createReadStream(sTmpPath).pipe(fs.createWriteStream(sTargetFile));
                            fs.exists(sTargetFile, function (exists) {
                                if (exists) {
                                    if ('image/svg+xml' !== req.files.file.headers['content-type']) {
                                        gm(sTargetFile).thumb(64, 64, sTargetFile.replace(/(.[A-Za-z]*)$/, '.thumb$1'), 50, function (err) {
                                            res.send('upload/' + sTargetFile.split('/').pop());
                                        });
                                    } else {
                                        res.send('upload/' + sTargetFile.split('/').pop());
                                    }
                                } else {
                                    res.send('FILE_WRITE_ERROR');
                                }
                            });
                        }
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

                    if (sRemoveFile.indexOf('.svg') === -1) {
                        fs.unlink(__dirname + '/../public/upload/' + sRemoveFile.replace(/(.[A-Za-z]*)$/, '.thumb$1'), function (err) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
                res.send('done');

            });
        });

        app.get('/do', function (req, res) {
            res.redirect('/');
        });

        app.get('*', function (req, res) {
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
                });
            });
        });

        server.listen(SETTINGS.PORT);

        console.log('iHave.to was started on port ' + SETTINGS.PORT);
    }
})();