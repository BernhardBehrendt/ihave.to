/*global $*/
/*global io*/
/*global CONF*/
/*global Board*/
/*global Apprise*/
/*global CryptoJS*/
/*global Template*/
/*global showMessage*/
var Connection;
(function () {
    "use strict";

    /**
     * The handler for persistence (websocket connection and sync)
     * The initial creating of an board and further security usages are placed here
     * Genrerally the data is encrypted in AES and will be pushed onto the server
     *
     * Further the Integration of push to members shuould be placed here and should autopush the dif to other online users
     */
    Connection = function () {

        this.socket = io.connect();
        this.__encryption = null;
        this.__data = null;
        this.__verifier = null;
        this.__board = null;

        this.socket.on('disconnect', function () {

            showMessage('RECONNECTING'.translate(), 'error');
            $('.screen, #cmd').empty();
            CONF.COM.SOCKET.connect();
        });

    };
    /**
     * The socket handler
     * Maybae a real class property makes or sense if there are multiple connections
     * @FINDOUT
     */
    Connection.prototype.socket = null;
    /**
     * Connect to Socket server and set initial listeners/emiters
     * @param {Object} board
     */
    Connection.prototype.connect = function (board) {

        this.__board = board;

        if (this.__board !== null) {
            // console.log('connect now');
            this.socket.emit('connect', this.__board);

            // Created a temporary copy because I dont know where the real instance is
            var oThis = this;

            this.socket.on('connected', function (data) {
                $('#cmd').removeAttr('style');
                // regulary this._data is an crypted string and need to be decrypted for further use
                oThis.setData(data);
                oThis.handleData();
            });

            this.socket.on('notify', function (data) {
                //showMessage(data.message, data.type);
            });
        }
    };
    /**
     * broadcast listener
     * patch the current board instance to new version from server by integrating the
     * received diff and do that also on frontend if received diff affected current screen
     */
    Connection.prototype.initBroadcast = function (sVerifier) {
        var oSelf = this;

        // Notify about entrance of person
        this.socket.on('enter-' + sVerifier, function (data) {
            showMessage(oSelf.decrypt(data) + ' ' + 'ENTERED_BOARD'.translate());
        });

        // Notify about exit of person
        this.socket.on('goodbye-' + sVerifier, function (data) {
            showMessage(oSelf.decrypt(data) + ' ' + 'LEFT_BOARD'.translate(), 'error');
        });

        this.socket.on('bc-' + sVerifier, function (data) {
            var oScreen;
            var iTimeEntry;
            var sScreenName;
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


                                /**
                                 * A fucntion to also patch the board with multichanges (e.g. content & color in one action)
                                 * Then function is called recursivley
                                 */
                                function updateScreen(oItem) {
                                    var bUpdated = false;

                                    // Array means new Post (content and color)
                                    if (!( oItem instanceof Array)) {
                                        if (oItem.TGT !== undefined) {
                                            // The target to update
                                            //var oTarget = $('#board > .posts > .screen > #' + oItem.TGT);

                                            var oTarget = $('#' + oItem.TGT);
                                            var sChange = '';

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
                                                    var sRMClasses = Object.keys(CONF.BOARD.SETTINGS.COLORS).join(' ').toLowerCase();
                                                    // Remove class to change to from string
                                                    sRMClasses = sRMClasses.replace(oItem.TO, '');
                                                    $(oTarget).removeClass(sRMClasses).addClass(oItem.TO);
                                                    sChange = 'POSTS_COLOR';
                                                }
                                                var sUser;
                                                for (sUser in CONF.BOARD.USERS) {
                                                    if (CONF.BOARD.USERS.hasOwnProperty(sUser) && CONF.BOARD.USERS[sUser] === oItem.BY) {
                                                        break;
                                                    }
                                                }

                                                showMessage(sUser + ' ' + sChange.translate(), 'warning');
                                            }
                                        }
                                    } else {
                                        for (var i = 0; i < oItem.length; i++) {
                                            if (!bUpdated) {
                                                bUpdated = updateScreen(oItem[i]);
                                            }
                                            else {
                                                updateScreen(oItem[i]);
                                            }

                                        }
                                    }

                                    return bUpdated;
                                }

                                bUpdated = updateScreen(oItem);
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
                        var sFirstScreen = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0];

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
                } else {
                    showMessage('RECEIVED_CHANGES_WICH_DONT_AFFECT_CURRENT_SCREEN');
                }
            }

            // Detect if a user was added
            if (oDiff.USERS !== undefined) {
                var sUserName = Object.keys(oDiff.USERS)[0];

                showMessage(sUserName + ' ' + 'WAS_ADDED_TO_BOARD'.translate());
            }
        });
    };
    /**
     * Handle the data to get synced to server and other online clients
     */
    Connection.prototype.handleData = function () {
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

            var sActiveScreen;

            if (CONF.DOM.BOARDPOSTS !== null) {
                sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
            }

            // Get the First screen name on Board
            //@LOCALSTORAGE (the last screen used on this machine)
            var sFirstScreen = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0];

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
            var oInitialBoard = JSON.parse(this.getData());

            // Here the initial settings could be made
            var sInitScreenName = 'WORKSPACE'.translate();
            var iTargetId = new Date().getTime();

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

            // Trigger a Second click to open new created Board
            //@OPTIMIZE
            $('#do-login').trigger(CONF.EVENTS.CLICK);
        }
    };
    /**
     * Saves the changes and push it on the server (after encryption)
     */
    Connection.prototype.saveChanges = function (oDiff) {

        this.setData(JSON.stringify(CONF.BOARD));

        //showMessage('START_SYNC_NOW');
        // Push to server
        this.socket.emit(CONF.BOARD.META.VERIFIER, this.encrypt().toString());

        // Syncing diff to the clients (best would be in the right direction)
        if (oDiff !== undefined) {
            this.socket.emit('sync', this.encrypt(JSON.stringify(oDiff)).toString());
        }
    };
    /**
     * Set the Passphrase for decrypt/encrypt the board
     * @param {String} sEncryption
     */
    Connection.prototype.setEncryptionPhrase = function (sEncryption) {
        this.__encryption = sEncryption;
    };
    /**
     * Get the userdefined password
     * @return {String} the useres selected password
     */
    Connection.prototype.getEncryptionPhrase = function () {
        return this.__encryption;
    };
    /**
     * Encrypt the diffdata or if no diff given the complete board code (JSON reperesentation)
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
     *
     * @param {String} data
     */
    Connection.prototype.setData = function (data) {
        this.__data = data;
    };
    /**
     * Return the AES crypted representation of the board
     * @return {String} the representation of the Board normally AES crypted
     */
    Connection.prototype.getData = function () {
        return this.__data;
    };
    /**
     * The Verifier of the Board (the file the is stored in)
     * The verifier is generated on the serverside and will be stored inside the crypted boardfile
     * So a successfull decryption is required to get write privileges
     *
     * @param {String} verifier is a SHA3 representation
     */
    Connection.prototype.setVerifier = function (verifier) {
        this.__verifier = verifier;
    };
    /**
     * Gives the verifier back wich was generated on the server and stored inside the Boardfile
     * @return {String} the verifier
     */
    Connection.prototype.getVerifier = function () {
        return this.__verifier;
    };

    /**
     * Get the username
     */
    Connection.prototype.personalize = function () {
        var sBoardName = this.__board;
        var sUserName = CONF.PROPS.OBJECT.STORAGE.getItem(sBoardName);
        var oSelf = this;

        if (sUserName === null) {
            window.lock = true;
            Apprise('ENTER_YOUR_NAME'.translate(), {

                animation: 250, // Animation speed
                buttons: {
                    confirm: {
                        action: function (e) {

                            // For better mobile integration
                            $('input').blur();
                            delete window.lock;

                            var sName = (e.input !== null && e.input.length > 0) ? e.input : 'Anonymous';

                            CONF.PROPS.OBJECT.STORAGE.setItem(sBoardName, sName);

                            if (CONF.BOARD.USERS[sName] === undefined) {
                                var iIdUser = Object.keys(CONF.BOARD.USERS).length;
                                var oDiff = JSON.parse('{"USERS":{}}');

                                oDiff.USERS[sName] = iIdUser;

                                CONF.BOARD.USERS[sName] = iIdUser;

                                oSelf.saveChanges(oDiff);
                            }

                            // Set the User ID
                            CONF.PROPS.INT.WHO = CONF.BOARD.USERS[sName];

                            // Show Welcome message
                            setTimeout(function () {
                                showMessage('WELCOME_ON_IHAVETO'.translate() + ' ' + sName);
                            }, 5000);

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
            // reset if a user comes back with name from deleted board
            if (CONF.BOARD.USERS[sUserName] === undefined) {
                CONF.PROPS.OBJECT.STORAGE.removeItem(sBoardName);
                this.personalize();
            }
            // If user is known set User id and send welcome message
            else {
                var sStoredName;
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