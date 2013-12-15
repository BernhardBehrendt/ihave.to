/*global module*/
/*global console*/
/*global require*/
/*global __dirname*/
var Board = null;
(function () {
    "use strict";

    /**
     * The iHave.to
     * Board Class which requires to be called inside the sockt.io framework
     * @author Bernhard Bezdek
     * @module Server
     * @submodule Classes
     * @class Board
     * @contructor
     * @param {String} sBoard The computet name of the requested board
     * @param {Object} oSocket The created socket connection
     */
    Board = function (sBoard, oSocket) {
        //this._verifier = false;

        this.oSocket = oSocket;

        this.sBoardFolder = __dirname + '/../../boards/' + sBoard + '/';
        this.sVerifierFile = this.sBoardFolder + 'VERIFIER';
        this.sBoardFile = this.sBoardFolder + 'BOARD';

        this.initialize(new this._oSecurity().createVerifier(sBoard));
    };

    /**
     * Node js filesystem opartion class
     * @property fs
     * @type {Function}
     */
    Board.prototype.fs = require('fs');

    /**
     * The socket connection
     * @property oSocket
     * @type {Object}
     */
    Board.prototype.oSocket = null;


    /**
     * The name of the current board fiolder on filesystem
     * @property sBoardFolder
     * @type {String}
     */
    Board.prototype.sBoardFolder = null;

    /**
     * The filename of the verifier
     * @property sVerifierFile
     * @type {String}
     */
    Board.prototype.sVerifierFile = null;

    /**
     * The boards file name
     * @property sBoardFile
     * @type {String}
     */
    Board.prototype.sBoardFile = null;

    /**
     * The name of the acting user (only required for multiuser purposes)
     * @property who
     * @type {null}
     */
    Board.prototype.who = null;

    /**
     * The verifier which is required to accept write operations
     * @property _verifier
     * @type {String}
     * @private
     */
    Board.prototype._verifier = false;

    /**
     * The security instance for the current board context
     * @property _oSecurity
     * @type {Function}
     * @private
     */
    Board.prototype._oSecurity = require(__dirname + '/Security');

    /**
     * Read the verifier which was stored in file and set as property
     * @method setVerifier
     */
    Board.prototype.setVerifier = function () {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        this.fs.readFile(this.sVerifierFile, 'UTF-8', function (error, data) {
            oProxBoardObj._verifier = data;

            oProxBoardObj.getBoard();
            // Starts the storage change listener
            oProxBoardObj.listenBoard();
        });
    };

    /**
     * Read the file
     * @method getBoard
     */
    Board.prototype.getBoard = function () {
        // Create a temporary copy of that class
        var self = this;

        // Read the File
        this.fs.readFile(this.sBoardFile, 'UTF-8', function (error, data) {
            // Emmit data to client
            self.oSocket.emit('connected', data);
        });
    };

    /**
     * Put changes into the boardfile
     * @method setBoard
     * @param {String} sBoardData the Board string data
     */
    Board.prototype.setBoard = function (sBoardData) {
        // Create a temporary copy of that class
        var self = this;

        this.fs.writeFile(this.sBoardFile, sBoardData, 'UTF-8', function () {
            self.oSocket.emit('notify', {
                message: 'SYNC_FINISHED',
                type: 'notice'
            });
        });
    };

    /**
     * Initialize the board connection and create a new board if there is no one or the given userdata
     * @method initialize
     * @param {String} verifier the verifier SHA-3 checksum
     */
    Board.prototype.initialize = function (verifier) {
        // Create a temporary copy of that class
        var self = this;

        // Check if the requested boardfile already exists
        this.fs.exists(this.sBoardFolder, function (exists) {
            // Exists not so we create a new one
            if (!exists) {
                // Create boardfolder
                self.fs.mkdir(self.sBoardFolder, '0777', function () {
                    // Create verfier file
                    self.fs.writeFile(self.sVerifierFile, verifier, 'UTF-8', function () {

                        // Create Board file
                        self.fs.writeFile(self.sBoardFile, JSON.stringify({
                            META: {
                                CREATED: new Date().getTime(),
                                MODIFIED: null,
                                VERIFIER: verifier
                            },
                            SETTINGS: {
                                COLORS: {
                                    BLUE: null,
                                    TURKIS: null,
                                    GREEN: null,
                                    YELLOW: null,
                                    ORANGE: null,
                                    RED: null,
                                    PINK: null,
                                    GREY: null,
                                    WHITE: null
                                },
                                PRIVATE: {},
                                PUBLIC: {}
                            },
                            USERS: {
                                Anonymous: 0
                            },
                            PRIVATE: {
                                SCREENS: {
                                }
                            }
                        }), 'UTF-8', function () {
                            console.log('New Board created');

                            // Start running board in regulary mode
                            self.setVerifier();
                        });
                    });
                });
            } else {
                // Start running board in regulary mode
                self.setVerifier();

                self.setAccessData();
            }
        });
    };

    /**
     * Set the last access date on a boards folder
     * @method setAccessData
     */
    Board.prototype.setAccessData = function () {
        var iAccessTime = Math.round(new Date().getTime() / 1000);

        this.fs.utimes(this.sBoardFolder, iAccessTime, iAccessTime, function (error) {
            if (error) {
                console.log(error);
            }
        });
    };

    /**
     * The listener which is stores the updated version to server
     * @method listenBoard
     */
    Board.prototype.listenBoard = function () {
        // Create a temporary copy of that class
        var self = this;

        // Listen for the verifier
        this.oSocket.on(this._verifier, function (board) {
            self.setBoard(board);
        });

        // Enable the broadcast for further clients
        this.pushChanges();
    };

    /**
     * The pusher to send new commits to other clients
     * Note it's not final because the whole board is sent on change
     * In future only the diff should be placed here
     * @method pushChanges
     */
    Board.prototype.pushChanges = function () {
        // Create a temporary copy of that class
        var self = this;

        // Send broadcast to other clients on that board
        this.oSocket.on('sync', function (data) {
            self.oSocket.broadcast.emit('bc-' + self._verifier, data);
        });

        // Listen for new users to inform other people curently online
        this.oSocket.on('enter', function (data) {
            self.who = data;
            self.oSocket.broadcast.emit('enter-' + self._verifier, data);
        });
    };

    /**
     * Shutdown the current board instance after user has disconnected
     * @method goodBye
     */
    Board.prototype.goodBye = function () {
        if (this.who !== null) {
            this.oSocket.broadcast.emit('goodbye-' + this._verifier, this.who);
        }
    };
})();
module.exports = Board;
