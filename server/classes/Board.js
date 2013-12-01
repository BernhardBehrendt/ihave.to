/*global module*/
/*global console*/
/*global require*/
/*global __dirname*/
var Board = null;
(function () {
    "use strict";

    /**
     *The iHave.to
     *Board Class which requires to be called inside the sockt.io framework
     *@author Bernhard Bezdek
     */
    Board = function (sBoard, oSocket) {
        // Fetch the security class
        this.__oSecurity = require(__dirname + '/Security');
        // Initialize the board class properties

        //this.bIsNew = false;
        this.__verifier = false;
        this.__oSocket = oSocket;
        this.__oFs = require('fs');
        this.sBoardFolder = __dirname + '/../../boards/' + sBoard + '/';
        this.sVerifierFile = this.sBoardFolder + 'VERIFIER';
        this.sBoardFile = this.sBoardFolder + 'BOARD';
        this.who = null;
        // Starts board change listener
        this.initialize(new this.__oSecurity().createVerifier(sBoard));
    };

    /**
     * Read the verifier which was stored in file and set as property
     */
    Board.prototype.setVerifier = function () {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        this.__oFs.readFile(this.sVerifierFile, 'UTF-8', function (error, data) {
            oProxBoardObj.__verifier = data;

            oProxBoardObj.getBoard();
            // Starts the storage change listener
            oProxBoardObj.listenBoard();
        });
    };

    /**
     * Read the file
     */
    Board.prototype.getBoard = function () {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        // Read the File
        this.__oFs.readFile(this.sBoardFile, 'UTF-8', function (error, data) {
            // Emmit data to client
            oProxBoardObj.__oSocket.emit('connected', data);
        });
    };

    /**
     * Put changes into the boardfile
     * @param {String} sBoardData the Board string data
     */
    Board.prototype.setBoard = function (sBoardData) {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        this.__oFs.writeFile(this.sBoardFile, sBoardData, 'UTF-8', function () {
            oProxBoardObj.__oSocket.emit('notify', {
                message: 'SYNC_FINISHED',
                type: 'notice'
            });
        });
    };

    /**
     * Initialize the board connection and create a new board if there is no one or the given userdata
     * @param {String} verifier the verifier SHA-3 checksum
     */
    Board.prototype.initialize = function (verifier) {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        // Check if the requested boardfile already exists
        this.__oFs.exists(this.sBoardFolder, function (exists) {
            // Exists not so we create a new one
            if (!exists) {

                // Create boardfolder
                oProxBoardObj.__oFs.mkdir(oProxBoardObj.sBoardFolder, '0777', function () {
                    // Create verfier file
                    oProxBoardObj.__oFs.writeFile(oProxBoardObj.sVerifierFile, verifier, 'UTF-8', function () {

                        // Create Board file
                        oProxBoardObj.__oFs.writeFile(oProxBoardObj.sBoardFile, JSON.stringify({
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
                            oProxBoardObj.setVerifier();
                        });
                    });
                });
            } else {
                // Start running board in regulary mode
                oProxBoardObj.setVerifier();
            }
        });
    };

    /**
     * The listener which is stores the updated version to server
     */
    Board.prototype.listenBoard = function () {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        // Listen for the verifier
        this.__oSocket.on(this.__verifier, function (board) {
            oProxBoardObj.setBoard(board);
        });

        // Enable the broadcast for further clients
        this.pushChanges();
    };

    /**
     * The pusher to send new commits to other clients
     * Note it's not final because the whole board is sent on change
     * In future only the diff should be placed here
     */
    Board.prototype.pushChanges = function () {
        // Create a temporary copy of that class
        var oProxBoardObj = this;

        // Send broadcast to other clients on that board
        this.__oSocket.on('sync', function (data) {
            oProxBoardObj.__oSocket.broadcast.emit('bc-' + oProxBoardObj.__verifier, data);
        });

        // Listen for new users to inform other people curently online
        this.__oSocket.on('enter', function (data) {
            oProxBoardObj.who = data;
            oProxBoardObj.__oSocket.broadcast.emit('enter-' + oProxBoardObj.__verifier, data);
        });
    };

    Board.prototype.goodBye = function () {
        var oProxBoardObj = this;

        if (oProxBoardObj.who !== null) {
            oProxBoardObj.__oSocket.broadcast.emit('goodbye-' + oProxBoardObj.__verifier, oProxBoardObj.who);
        }
    };
})();
module.exports = Board;
