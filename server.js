/*global require*/
/*global console*/
/*global __dirname*/
/*global CONFIG*/
/*global global*/

(function () {
    "use strict";

    // Set configuration globally
    global.CONFIG = require(__dirname + '/server/settings/config');

    var io;
    var app;
    var https;
    var server;
    var oHttpServer;
    var oHttpRouting;
    var sCurrentHost;
    var sTargetHost;
    var oSslConfig;
    var oGarbageCollector;

    var bSslEnabled = (CONFIG.SSL_CERT !== null && CONFIG.SSL_KEY !== null);

    var fs = require('fs');
    var http = require('http');
    var mime = require('mime');
    var path = require('path');
    var crypto = require('crypto');
    //@TODO https://github.com/felixge/node-formidable integration for uploads
    var formidable = require('formidable');
    var express = require('express');
    var bodyParser = require('body-parser');
    var socketio = require('socket.io');

    if (bSslEnabled && fs.existsSync(CONFIG.SSL_CERT) && fs.existsSync(CONFIG.SSL_KEY)) {

        https = require('https');

        oSslConfig = {
            key: fs.readFileSync(CONFIG.SSL_KEY),
            cert: fs.readFileSync(CONFIG.SSL_CERT),
            ca: fs.readFileSync(CONFIG.SSL_CA)
        };
    }

    var Board = require(CONFIG.ROOT + 'classes/Board');
    var ImageUpload = require(CONFIG.ROOT + 'classes/ImageUpload');
    var GarbageCollector = require(CONFIG.ROOT + 'classes/GarbageCollector');

    app = express();

    if (https === undefined) {
        server = http.createServer(app);
        // Test
    } else {
        server = https.createServer(oSslConfig, app);
        oHttpRouting = express();

        //Switch protocols
        oHttpRouting.all('*', function (req, res) {
            sCurrentHost = req.headers.host.toString().replace(':' + CONFIG.PORT, '');
            sTargetHost = 'https://' + sCurrentHost + req.url;

            res.redirect(sTargetHost);
        });

        oHttpServer = http.createServer(oHttpRouting);
        oHttpServer.listen(CONFIG.PORT);

        // Create redirection here for non ssl calls
        console.log('created ssl server');
    }

    io = socketio.listen(server);


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


    // Socket io settings
    //io.enable('browser client gzip');
    //  io.set('log level', 3);
    io.sockets.on('connection', function (socket) {

        // The initial connector for the board api
        socket.on('init', function (sBoardName) {
            // Initialize Board (and create if not exist)
            var oBoard = new Board(sBoardName, socket);

            // Handle conection lost delete board object
            socket.on('disconnect', function () {
                oBoard.goodBye();
            });
        });
    });
// Express settings
    app.use(bodyParser());
    app.use(express.static(CONFIG.ROOT + '../public/'));

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

            var form = new formidable.IncomingForm();

            form.parse(req, function (err, fields, files) {
                if (err === null && files.file !== undefined) {
                    oImageUpload = new ImageUpload(files.file, res);
                    oImageUpload.process();
                } else {
                    res.send(200, 'NOT_ALLOWED');
                }
            });

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

            var form = new formidable.IncomingForm();

            form.parse(req, function (err, fields, files) {
                if (err === null && files.file !== undefined) {
                    oImageUpload = new ImageUpload(files.file, res);
                    oImageUpload.createPostImage();
                } else {
                    res.send(200, 'NOT_ALLOWED');
                }
            });

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
    if (https === undefined) {
        server.listen(CONFIG.PORT);
        console.log('iHave.to was started on port ' + CONFIG.PORT);
    } else {
        server.listen(CONFIG.SSL_PORT);
        console.log('iHave.to was started on port ' + CONFIG.SSL_PORT);
    }

    //Start the garbageCollector for static files
    oGarbageCollector = new GarbageCollector();
    oGarbageCollector.observe();


})();