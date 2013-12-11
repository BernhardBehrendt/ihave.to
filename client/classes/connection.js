/*global $*/
/*global io*/
/*global CONF*/
/*global Board*/
/*global Apprise*/
/*global CryptoJS*/
/*global Template*/
/*global Screens*/
/*global showMessage*/
var Connection;
(function () {
    "use strict";

    /**
     * The handler for websocket connection and sync
     * The initial creating of an board and further security usages are placed here
     * After init a new board the data is encrypted in AES before push them to server
     *
     * @module Client
     * @submodule Classes
     * @class Connection
     * @constructor
     */
    Connection = function () {

        this.socket = io.connect();

        this.socket.on('disconnect', function () {

            showMessage('RECONNECTING'.translate(), 'error');
            $('.screen, #cmd').empty();
            CONF.COM.SOCKET.connect();
        });

    };

    /**
     * The socket.io connection
     * @property socket
     * @type {null}
     */
    Connection.prototype.socket = null;

    /**
     * Here the encryption phrase is stored
     * @param _encryption
     * @type {null}
     * @private
     */
    Connection.prototype._encryption = null;

    /**
     * The whole board as AES encrypted string
     * AES encryption is enabled after first initialisation of a board
     * @param _data
     * @type {String}
     * @private
     */
    Connection.prototype._data = null;

    /**
     * The verifier which is required for write permissins after handshake
     * and need to be decrypted out of the requested boardfile
     * @type {String}
     * @private
     */
    Connection.prototype._verifier = null;

    /**
     * The SHA-3 hashed name of the board
     *
     * @param _board
     * @type {String}
     * @private
     */
    Connection.prototype._board = null;

    /**
     * Connect to Socket.io server
     *
     * @method connect
     * @param {Object} board
     */
    Connection.prototype.connect = function (board) {
        var self = this;
        this._board = board;
        if (this._board !== undefined) {
            // console.log('connect now');
            this.socket.emit('connect', this._board);

            this.socket.on('connected', function (data) {
                $('#cmd').removeAttr('style');
                // regulary this._data is an crypted string and need to be decrypted for further use
                self.setData(data);
                self.handleData();
            });

            //this.socket.on('notify', function (data) {
            //showMessage(data.message, data.type);
            //});
        } else {
            window.location.reload();
        }
    };

    /**
     * Initialize all listeners to merge diffs on change on other clients which have the same
     * board openened and do a change on it
     *
     * @method initBroadcast
     * @param {String} sVerifier
     */
    Connection.prototype.initBroadcast = function (sVerifier) {
        var self = this;

        // Notify about entrance of person
        this.socket.on('enter-' + sVerifier, function (data) {
            showMessage(self.decrypt(data) + ' ' + 'ENTERED_BOARD'.translate());
        });

        // Notify about exit of person
        this.socket.on('goodbye-' + sVerifier, function (data) {
            showMessage(self.decrypt(data) + ' ' + 'LEFT_BOARD'.translate(), 'error');
        });

        this.socket.on('bc-' + sVerifier, function (data) {
            var oScreen;
            var iTimeEntry;
            var sScreenName;
            var sFirstScreen;
            var sActiveScreen;
            var oDiff = JSON.parse(CONF.COM.SOCKET.decrypt(data));

            // Patch the local board representation
            $.extend(true, CONF.BOARD, oDiff);

            sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');

            // Detect if screen object contains changes and if so cleanup screen object
            if (oDiff.PRIVATE !== undefined && oDiff.PRIVATE.SCREENS !== undefined) {
                for (sScreenName in CONF.BOARD.PRIVATE.SCREENS) {
                    if (CONF.BOARD.PRIVATE.SCREENS.hasOwnProperty(sScreenName) && !CONF.BOARD.PRIVATE.SCREENS[sScreenName]) {
                        delete CONF.BOARD.PRIVATE.SCREENS[sScreenName];
                    }
                }


                // Detect if the change affected the active screen
                if (oDiff.PRIVATE.SCREENS[sActiveScreen] !== undefined) {
                    // Not good implementation (everything is recreated)
                    if (CONF.BOARD.PRIVATE.SCREENS[sActiveScreen] !== undefined) {
                        var bUpdated = false;
                        // Update the existing posts
                        for (iTimeEntry in oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS) {
                            if (oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS.hasOwnProperty(iTimeEntry)) {
                                var oItem = oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimeEntry];

                                bUpdated = self.updateScreen(oItem);
                            }
                        }

                        // Only handle a fully recreation if there are new Posts
                        if (!bUpdated) {
                            oScreen = CONF.BOARD.PRIVATE.SCREENS[sActiveScreen];

                            showMessage('RESTORE_CONSISTENCY_NOW');

                            oBoard = new Board({
                                NAME: sActiveScreen,
                                SCREEN: oScreen,
                                FROMTIME: false
                            });

                            CONF.DOM.BOARDSCREENS.html(new Template(oBoard.getTemplate()).toHtml());
                            CONF.DOM.BOARD.trigger('uiBoard');
                        }

                    } else {
                        sFirstScreen = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0];

                        CONF.DOM.BOARDPOSTS.data('activescreen', sFirstScreen);

                        oScreen = CONF.BOARD.PRIVATE.SCREENS[sFirstScreen];

                        showMessage('A_USER_DELETED_THIS_SCREEN_CHANGE_NOW');

                        $('#back, .mobile').trigger('click');

                        if ($('#edit').length === 1) {
                            CONF.DOM.CMD.trigger('setMainNav');
                        }


                        var oBoard = new Board({
                            NAME: sFirstScreen,
                            SCREEN: oScreen,
                            FROMTIME: false
                        });

                        CONF.DOM.BOARDSCREENS.html(new Template(oBoard.getTemplate()).toHtml());

                        CONF.DOM.BOARD.trigger('uiBoard');
                    }
                }

                self.updateCurrentView();
            }

            // Detect if a user was added
            if (oDiff.USERS !== undefined) {
                var sUserName = Object.keys(oDiff.USERS)[0];

                showMessage(sUserName + ' ' + 'WAS_ADDED_TO_BOARD'.translate());
            }
        });
    };

    /**
     * The handler for serveral view updates
     * @method updateCurrentView
     */
    Connection.prototype.updateCurrentView = function () {

        if (CONF.DOM.UIWINDOW.children('.cmd').children('.screen').length > 0) {
            this.updateScreenOverview();
        }
    };

    /**
     * Update the ScreenOverview and create an updated expected Screenoverview
     * @method updateScreenOverview
     */
    Connection.prototype.updateScreenOverview = function () {

        var i;
        var aScreens = [];
        var oCurrentScreenItem;
        var oTrashVButton = $('#trash_empty.active, #trash_full');


        if (oTrashVButton.length === 1) {
            $.each(CONF.DOM.UIWINDOW.children('.cmd').children('.screen.do'), function () {
                aScreens.push($(this).attr('id'));
            });

            oTrashVButton.prev().remove();
            oTrashVButton.removeAttr('id').attr('id', 'trash_empty').removeClass('active');

        }

        CONF.DOM.UIWINDOW.children('.cmd').children('.screen').remove();

        CONF.DOM.UIWINDOW.children('.cmd').append(new Template(new Screens().getOverview()).toHtml());

        if (aScreens.length > 0) {
            $('#trash_empty').trigger(CONF.EVENTS.CLICK);

            for (i = 0; i < aScreens.length; i += 1) {
                oCurrentScreenItem = $('#' + aScreens[i]);

                if (oCurrentScreenItem.length === 1) {
                    oCurrentScreenItem.trigger(CONF.EVENTS.CLICK);
                }
            }
        }
    };

    /**
     * Update the curretn screen if theres an incoming change
     * @method updateScreen
     * @param {Object} oItem
     * @returns {Boolean}
     */
    Connection.prototype.updateScreen = function updateScreen(oItem) {
        var i;
        var sUser;
        var oTarget;
        var sChange;
        var sRMClasses;
        var bUpdated = false;

        // Array means new Post (content and color)
        if (!( oItem instanceof Array)) {
            if (oItem.TGT !== undefined) {

                oTarget = $('#' + oItem.TGT);
                sChange = '';

                // If Target exists
                if (oTarget.length === 1) {

                    // Tell further process no further consistency operations are required
                    bUpdated = true;

                    // Update Position
                    if (oItem.ACN === 'position') {
                        $(oTarget).animate({
                            left: oItem.TO[0] + '%',
                            top: oItem.TO[1] + '%'
                        }, 750);
                        sChange = 'POSTS_POSITION';
                    }

                    // Update the Content
                    if (oItem.ACN === 'content') {
                        $(oTarget).find('.content').children('p').html(oItem.TO);
                        sChange = 'POSTS_CONTENT';
                    }

                    // Handle Post deletion (if an update comes after the postit willl be recreated)
                    if (oItem.ACN === 'deleted') {
                        $(oTarget).fadeOut(250, function () {
                            $(this).remove();
                        });
                        sChange = 'DELETED_POST';
                    }

                    if (oItem.ACN === 'color') {
                        sRMClasses = Object.keys(CONF.BOARD.SETTINGS.COLORS).join(' ').toLowerCase();
                        // Remove class to change to from string
                        sRMClasses = sRMClasses.replace(oItem.TO, '');
                        $(oTarget).removeClass(sRMClasses).addClass(oItem.TO);
                        sChange = 'POSTS_COLOR';
                    }

                    for (sUser in CONF.BOARD.USERS) {
                        if (CONF.BOARD.USERS.hasOwnProperty(sUser) && CONF.BOARD.USERS[sUser] === oItem.BY) {
                            break;
                        }
                    }

                    // Tells who did what but i think it not nice
                    //showMessage(sUser + ' ' + sChange.translate(), 'warning');
                }
            }
        } else {
            for (i = 0; i < oItem.length; i += 1) {
                if (!bUpdated) {
                    bUpdated = this.updateScreen(oItem[i]);
                }
                else {
                    this.updateScreen(oItem[i]);
                }

            }
        }

        return bUpdated;
    };

    /**
     * Handle the data to get synced to server and other online clients
     * @method handleData
     */
    Connection.prototype.handleData = function () {
        var sActiveScreen;
        var sFirstScreen;
        var oInitialBoard;
        var sInitScreenName;
        var iTargetId;

        // Will fail if get data is already aes crypte
        if (this.getData().indexOf('{') === -1) {
            // Actually aes crypted so encrypt it with the before entered password

            CONF.BOARD = JSON.parse(this.decrypt());

            // ADD BROADCAST LISTNER
            this.initBroadcast(CONF.BOARD.META.VERIFIER);

            if (!window.lock) {
                this.personalize();
            }

            // Setup initial screen
            CONF.DOM.UIWINDOW.trigger('hideUi');
            CONF.DOM.CMD.trigger('setMainNav');

            showMessage('BOARD_WAS_ENCRYPTED');


            if (CONF.DOM.BOARDPOSTS !== null) {
                sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
            }

            // Get the First screen name on Board
            //@LOCALSTORAGE (the last screen used on this machine)
            sFirstScreen = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0];

            // If the board is reconnecting get the currently active screen
            if (sActiveScreen !== undefined) {
                if (CONF.BOARD.PRIVATE.SCREENS[sActiveScreen] !== undefined) {
                    sFirstScreen = sActiveScreen;
                }
            }
            // Render the Board
            CONF.DOM.BOARD.trigger('setupBoard', {
                NAME: sFirstScreen,
                SCREEN: CONF.BOARD.PRIVATE.SCREENS[sFirstScreen],
                FROMTIME: false
            });
        } else {
            // If parsing as json wil not fail its a new Board and
            // further execution is ensured
            oInitialBoard = JSON.parse(this.getData());

            // Here the initial settings could be made
            sInitScreenName = 'WORKSPACE'.translate();
            iTargetId = new Date().getTime();

            // Setup the First Workspace with a First postit on it
            oInitialBoard.PRIVATE.SCREENS[sInitScreenName] = {
                META: {
                    BG: CONF.PROPS.STRING.SCREEN_DEFAULT_BG
                },
                POSTS: {}
            };
            oInitialBoard.PRIVATE.SCREENS[sInitScreenName].POSTS[iTargetId] = [
                {
                    TGT: iTargetId,
                    ACN: 'color',
                    TO: 'blue'
                },
                {
                    TGT: iTargetId,
                    ACN: 'content',
                    TO: 'EXAMPLE_TEXT'.translate()
                },
                {
                    TGT: iTargetId,
                    ACN: 'position',
                    TO: [10, 10]
                }
            ];

            // Convert board back to String before crypt it first time back
            CONF.COM.SOCKET.setData(JSON.stringify(oInitialBoard));

            // The verifier is required to verify the permisson to write into the Board file
            this.setVerifier(oInitialBoard.META.VERIFIER);
            this.socket.emit(this.getVerifier(), this.encrypt().toString());


            $('#do-login').trigger(CONF.EVENTS.CLICK);
        }
    };

    /**
     * Saves the changes and push it on the server (after encryption)
     *
     * @method saveChanges
     * @param {Object} oDiff (optional) The difference to share with all current viewers
     */
    Connection.prototype.saveChanges = function (oDiff) {

        this.setData(JSON.stringify(CONF.BOARD));

        // Push to server
        this.socket.emit(CONF.BOARD.META.VERIFIER, this.encrypt().toString());

        // Syncing diff to the clients (best would be in the right direction)
        if (oDiff !== undefined) {
            this.socket.emit('sync', this.encrypt(JSON.stringify(oDiff)).toString());
        }
    };

    /**
     * Set the Passphrase for decrypt/encrypt the board
     * @method setEncryptionPhrase
     * @param {String} sEncryption
     */
    Connection.prototype.setEncryptionPhrase = function (sEncryption) {
        this._encryption = CryptoJS.SHA3(sEncryption).toString();
    };

    /**
     * Get the user defined password
     * @method getEncryptionPhrase
     * @return {String} the useres selected password
     */
    Connection.prototype.getEncryptionPhrase = function () {
        return this._encryption;
    };

    /**
     * Encrypt the diffdata or if no diff given the complete board code (JSON reperesentation)
     * @method encrypt
     * @param {String} diffdata (only required if not the complete board should be crypted e.g. the diffdata)
     * @return {String} the AES crypted Board representation
     */
    Connection.prototype.encrypt = function (diffdata) {
        var diffInternal = diffdata;
        // If no data was given take the whole board
        if (diffInternal === undefined) {
            diffInternal = this.getData();
        }

        return CryptoJS.AES.encrypt(diffInternal, this.getEncryptionPhrase());
    };

    /**
     * Decrypt the diffdata or the complete board
     * @method decrypt
     * @param {String} diffdata
     */
    Connection.prototype.decrypt = function (diffdata) {
        var sJson = null;
        var bSuccess = false;
        var diffInternal = diffdata;

        // If no diffdata was given take the complete data (whole board) in memory
        if (diffInternal === undefined) {
            diffInternal = this.getData();
        }


        while (!bSuccess) {
            try {
                sJson = CryptoJS.AES.decrypt(diffInternal, this.getEncryptionPhrase()).toString(CryptoJS.enc.Utf8);
                bSuccess = true;
            } catch (e) {
                bSuccess = false;
            }

        }

        return sJson;
    };

    /**
     * Fill the holder for the board representation
     * Note:
     * Normally this string is the AES crypted representation of the whole board BUT initially it's the unencrypted initial Board
     * @method setData
     * @param {String} data
     */
    Connection.prototype.setData = function (data) {
        this._data = data;
    };

    /**
     * Return the AES crypted representation of the board
     * @method getData
     * @return {String} the representation of the Board normally AES crypted
     */
    Connection.prototype.getData = function () {
        return this._data;
    };

    /**
     * The Verifier of the Board (the file the is stored in)
     * The verifier is generated on the serverside and will be stored inside the crypted boardfile
     * So a successfull decryption is required to get write privileges
     * @method setVerifier
     * @param {String} verifier is a SHA3 representation
     */
    Connection.prototype.setVerifier = function (verifier) {
        this._verifier = verifier;
    };

    /**
     * Gives the verifier back wich was generated on the server and stored inside the Boardfile
     * @method getVerifier
     * @return {String} the verifier
     */
    Connection.prototype.getVerifier = function () {
        return this._verifier;
    };

    /**
     * Get the username
     * @method personalize
     */
    Connection.prototype.personalize = function () {
        var sBoardName = this._board;
        var sUserName = CONF.PROPS.OBJECT.STORAGE.getItem(sBoardName);
        var self = this;

        if (sUserName === null) {
            window.lock = true;
            Apprise('ENTER_YOUR_NAME'.translate(), {

                animation: 250, // Animation speed
                buttons: {
                    confirm: {
                        action: function (e) {
                            var sName;
                            var iIdUser;
                            var oDiff;
                            // For better mobile integration
                            $('input').blur();
                            delete window.lock;

                            sName = (e.input !== null && e.input.length > 0) ? e.input : 'Anonymous';

                            CONF.PROPS.OBJECT.STORAGE.setItem(sBoardName, sName);

                            if (CONF.BOARD.USERS[sName] === undefined) {
                                iIdUser = Object.keys(CONF.BOARD.USERS).length;
                                oDiff = JSON.parse('{"USERS":{}}');

                                oDiff.USERS[sName] = iIdUser;

                                CONF.BOARD.USERS[sName] = iIdUser;

                                self.saveChanges(oDiff);
                            }

                            // Set the User ID
                            CONF.PROPS.INT.WHO = CONF.BOARD.USERS[sName];

                            Apprise('close');
                        },
                        className: null,
                        id: 'confirm',
                        text: 'OK'.translate()
                    }
                },
                input: true,
                override: true
            });
        } else {
            var sStoredName;
            // reset if a user comes back with name from deleted board
            if (CONF.BOARD.USERS[sUserName] === undefined) {
                CONF.PROPS.OBJECT.STORAGE.removeItem(sBoardName);
                this.personalize();
            }
            // If user is known set User id and send welcome message
            else {
                for (sStoredName in CONF.BOARD.USERS) {
                    if (CONF.BOARD.USERS.hasOwnProperty(sStoredName)) {
                        if (sUserName === sStoredName) {
                            CONF.PROPS.INT.WHO = CONF.BOARD.USERS[sStoredName];
                            CONF.COM.SOCKET.socket.emit('enter', this.encrypt(sUserName).toString());

                            break;
                        }
                    }
                }
            }
        }
    };
})();