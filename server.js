/*global require*/
/*global console*/
/*global __dirname*/
/*global CONFIG*/
/*global global*/

(function () {
    "use strict";

    // Set configuration globally
    global.CONFIG = require(__dirname + '/server/settings/config');

    var app;
    var oGarbageCollector;

    var fs = require('fs');
    var http = require('http');
    var mime = require('mime');
    var path = require('path');
    var crypto = require('crypto');
    var express = require('express');
    var socketio = require('socket.io');

    app = express();

    var Board = require(CONFIG.ROOT + 'classes/Board');
    var ImageUpload = require(CONFIG.ROOT + 'classes/ImageUpload');
    var GarbageCollector = require(CONFIG.ROOT + 'classes/GarbageCollector');

    var server = http.createServer(app);
    var io = socketio.listen(server);

    // Setup required folder if not exit
    if (!fs.existsSync(CONFIG.ROOT + '../boards/')) {
        fs.mkdirSync(CONFIG.ROOT + '../boards/');
    }

    if (!fs.existsSync(CONFIG.ROOT + '../' + CONFIG.IMG_ROOT)) {
        fs.mkdirSync(CONFIG.ROOT + '../' + CONFIG.IMG_ROOT);
    }

    // Create the frontend salt
    // Note to never loose this key because it's for setup the requestet boardname
    if (!fs.existsSync(CONFIG.ROOT + '../public/js/salt.js')) {
        fs.writeFileSync(CONFIG.ROOT + '../public/js/salt.js', 'CONF.PROPS.STRING.SALT = "' + crypto.randomBytes(2048).toString('base64') + '";');
        console.log('A CLIENT SALT WAS CREATED AT "public/js/salt.js". Make sure to never loose this file');
    }

    // Express settings
    app.use(express.bodyParser());
    app.use(express[''](CONFIG.ROOT + '../public/'));

    // Socket io settings
    io.enable('browser client etag');
    io.enable('browser client gzip');
    io.set('log level', 1);
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

    // Give access to uploaded images and update the modification date to determine if the image can be deleted if it's
    // older than CONFIG.MAX_DAYS_UNUSED
    app.get('/upload/*', function (req, res, next) {
        var iRefPos;
        var oMediaStream;
        var sFileTarget = __dirname + '/' + req.url;

        var iAccessTime = Math.round(new Date().getTime() / 1000);

        // Check if referer domain is enabled to access ressources
        if (req.headers.referer !== undefined && CONFIG.PASS_REFERER !== '*') {
            iRefPos = req.headers.referer.indexOf(CONFIG.PASS_REFERER);
        }

        // Check the referer domain
        if ((iRefPos <= 11 && iRefPos > -1) || CONFIG.PASS_REFERER === '*') {
            fs.exists(sFileTarget, function (exists) {
                if (exists) {
                    fs.utimes(sFileTarget, iAccessTime, iAccessTime, function (error) {
                        if (!error) {
                            oMediaStream = fs.createReadStream(sFileTarget);
                            res.type(mime.lookup(sFileTarget));
                            oMediaStream.pipe(res);
                        } else {
                            res.send(500, '500 INTERNAL SERVER ERROR');
                        }
                    });
                } else {
                    res.send(401, 'You can access images only via memo board (not directly by URL)');
                }
            });
        } else {
            next();
        }
    });

    // Upload Wallpaper images
    app.post('/upload-wp', function (req, res, next) {
        var iRefPos;
        var oImageUpload;

        // Check if referer domain is enabled to access ressources
        if (req.headers.referer !== undefined && CONFIG.PASS_REFERER !== '*') {
            iRefPos = req.headers.referer.indexOf(CONFIG.PASS_REFERER);
        }

        // Check the referer domain
        if ((iRefPos <= 11 && iRefPos > -1) || CONFIG.PASS_REFERER === '*') {
            if (req.files !== undefined && req.files.file instanceof Object) {
                oImageUpload = new ImageUpload(req.files.file, res);

                oImageUpload.process();
            } else {
                res.send(200, 'OK');
            }
        } else {
            next();
        }
    });

    // Upload memo images images
    app.post('/upload-postimage', function (req, res, next) {
        var iRefPos;
        var oImageUpload;

        // Check if referer domain is enabled to access ressources
        if (req.headers.referer !== undefined && CONFIG.PASS_REFERER !== '*') {
            iRefPos = req.headers.referer.indexOf(CONFIG.PASS_REFERER);
        }

        // Check the referer domain
        if ((iRefPos <= 11 && iRefPos > -1) || CONFIG.PASS_REFERER === '*') {
            if (req.files !== undefined && req.files.file instanceof Object) {
                oImageUpload = new ImageUpload(req.files.file, res);
                oImageUpload.createPostImage();
            } else {
                res.send(200, 'OK');
            }
        } else {
            next();
        }
    });

    // Remove an uploaded image and it's related thumbs
    app.post('/unlink-wp', function (req, res, next) {
        var iRefPos;
        var sRemoveFile = req.body.image.split('/').pop();
        if (req.headers.referer !== undefined && CONFIG.PASS_REFERER !== '*') {
            iRefPos = req.headers.referer.indexOf(CONFIG.PASS_REFERER);
        }

        // Check the referer domain
        if ((iRefPos <= 11 && iRefPos > -1) || CONFIG.PASS_REFERER === '*') {
            fs.exists(CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/' + sRemoveFile, function (exists) {
                if (exists) {
                    fs.unlink(CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/' + sRemoveFile, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });

                    fs.unlink(CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/' + sRemoveFile.replace(/(.[A-Za-z]*)$/, '.thumb$1'), function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }

                // Placed here for faster response
                res.send('done');
            });
        } else {
            next();
        }
    });

    // If you need a custom index page you can place one into public directory
    app.get('/', function (req, res) {
        fs.exists(path.resolve(__dirname + '/../public/index.html'), function (exists) {
            if (exists) {
                res.sendfile(path.resolve(__dirname + '/../public/index.html'));
            } else {
                res.redirect('/do');
            }
        });
    });

    // The dafault path for the memeo board
    app.get('/do', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/public/do.html'));
    });

    // Handle 404 Errors
    app.get('*', function (req, res) {
        res.send(404, '400 NOT FOUND');
    });

    // Set listening port
    server.listen(CONFIG.PORT);

    //Start the garbageCollector for static files
    oGarbageCollector = new GarbageCollector();
    oGarbageCollector.observe();

    console.log('iHave.to was started on port ' + CONFIG.PORT);
})();