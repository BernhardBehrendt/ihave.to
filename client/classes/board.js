/*global $*/
/*global CONF*/
/*global showMessage*/
var Board;
(function () {
    "use strict";

    /**
     * Board converts a screentimline into a valid screen view
     *
     *
     * @author Bernhard Bezdek <bernahrd.bezdek@googlemail.com>
     * @module Client
     * @submodule Classes
     * @class Board
     * @constructor
     * @param {Object} oScreen The screen object to render
     */
    Board = function (oScreen) {
        this._oScreen = oScreen;
        this._setDeleted = {};
        this._oScreenPost = {};
    };

    /**
     * The instance of the screen to render
     * @property _oScreen
     * @type {Object}
     * @private
     */
    Board.prototype._oScreen = null;

    /**
     * Here all deleted memo instances are placed in
     * @property _setDeleted
     * @type {Object}
     * @private
     */
    Board.prototype._oScreen = null;

    /**
     * The posts of the given Screen
     * @property _oScreenPost
     * @type {Object}
     * @private
     */
    Board.prototype._oScreenPost = null;

    /**
     * Return the template and set the background of the Screen
     * @method getTemplate
     * @return {Object} The HTML TEmplate representation of the current (selected) screen from given / first timecode
     */
    Board.prototype.getTemplate = function () {

        this.setBackground();

        return{
            DIV: this._createTemplate()
        };
    };


    /**
     * Create HTML structure out for given timeline representaiton
     * @method _createTemplate
     * @return {Array} The template which represent the curent screen
     * @private
     */
    Board.prototype._createTemplate = function () {
        var iPostId;
        var oCurPost;
        var oTimeline;
        var iTimestamp;
        var oScreenPosts;
        var aPosts = [];

        // Start screen posts preprocess
        if (this._oScreen.SCREEN.POSTS !== undefined) {

            oTimeline = this._oScreen.SCREEN.POSTS;

            for (iTimestamp in oTimeline) {
                if (oTimeline.hasOwnProperty(iTimestamp)) {
                    oCurPost = oTimeline[iTimestamp];
                    if (oCurPost instanceof Array) {
                        for (var i = 0; i < oCurPost.length; i += 1) {
                            this._addPost(this._createPost(oCurPost[i]));
                        }
                    } else {
                        this._addPost(this._createPost(oCurPost));
                    }
                }
            }
        }

        oScreenPosts = this._oScreenPost;

        for (iPostId in oScreenPosts) {
            if (oScreenPosts.hasOwnProperty(iPostId)) {
                if (this._setDeleted[iPostId] === true) {
                    delete oScreenPosts[iPostId];
                    continue;
                }
                aPosts.push(this._oScreenPost[iPostId]);
            }
        }

        return aPosts;
    };

    /**
     * Creates the Templates required post structure for later working/merging
     * into an existing representation on screen object
     *
     * @method_createPost
     * @param {Object} oPost the timeline entry to get parsed
     * @return {Object} The template engines representation to create HTML from it
     * @private
     */
    Board.prototype._createPost = function (oPost) {
        var sContent = false;
        var sDeleted = '';
        var sColor = '';
        var iId = false;
        var sStyle = false;

        if (oPost.TGT !== undefined) {
            iId = oPost.TGT;
        }

        //color/content/position are handled here
        if (oPost.ACN === 'color') {
            sColor = oPost.TO;
        }

        if (oPost.ACN === 'content') {
            sContent = oPost.TO;
        }

        if (oPost.ACN === 'position') {
            sStyle = 'left:' + oPost.TO[0] + '%; top:' + oPost.TO[1] + '%;';
        }

        if (oPost.ACN === 'deleted') {
            sDeleted = 'deleted';
        }

        return {
            ID: iId,
            CLASSES: 'post ' + sColor + sDeleted,
            STYLE: sStyle,
            CONTENT: {
                DIV: {
                    CLASSES: "content",
                    CONTENT: {
                        P: {
                            CONTENT: sContent
                        }
                    }
                }
            }
        };
    };

    /**
     * Add a post to currently visible screen
     * @method _addPost
     * @param {Object} oPost The postobject to add inside the current screen
     * @private
     */
    Board.prototype._addPost = function (oPost) {
        if (this._oScreenPost[oPost.ID] === undefined) {
            // Create the post corpus
            this._oScreenPost[oPost.ID] = oPost;
        }
        else {
            // Content change
            if (oPost.CONTENT.DIV.CONTENT.P.CONTENT !== false) {
                this._oScreenPost[oPost.ID].CONTENT.DIV.CONTENT.P.CONTENT = oPost.CONTENT.DIV.CONTENT.P.CONTENT;

                if (this._setDeleted[oPost.ID] !== undefined) {
                    delete this._setDeleted[oPost.ID];
                }
            }
            // Color change and handle delete of posts
            if (oPost.CLASSES.length > 5) {
                if (oPost.CLASSES.indexOf('deleted') !== -1) {
                    this._setDeleted[oPost.ID] = true;
                } else {

                    this._oScreenPost[oPost.ID].CLASSES = oPost.CLASSES;

                    // If postit was deleted before
                    if (this._setDeleted[oPost.ID] !== undefined) {
                        delete this._setDeleted[oPost.ID];
                    }
                }
            }
            // Position change
            if (oPost.STYLE !== false) {
                if (this._oScreenPost[oPost.ID] !== undefined) {
                    this._oScreenPost[oPost.ID].STYLE = oPost.STYLE;

                    if (this._setDeleted[oPost.ID] !== undefined) {
                        delete this._setDeleted[oPost.ID];
                    }
                }
            }
        }
    };

    /**
     * Set the background image of the current (selected) screen
     * @method setBackground
     */
    Board.prototype.setBackground = function () {
        $('body').css('background-image', 'url(' + this._oScreen.SCREEN.META.BG + ')');
    };

    /**
     * @method enableDroppable
     * @param {Object} oItems Hte items to make droppable
     *
     */
    Board.prototype.enableDroppable = function (oItems) {
        oItems.dropzone({
            url: "/upload-postimage",
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: CONF.PROPS.INT.MAX_UPLOAD, // MB,
            maxFiles: 1,
            clickable: false,
            accept: function (file, done) {
                if (CONF.PROPS.ARRAY.ALLOWED_FILES.indexOf(file.name.substring(file.name.length - 4, file.name.length)) === -1) {
                    showMessage('FILETYPE_NOT_ALLOWED', 'error');

                }
                else {
                    showMessage('UPLOADING_FILE');
                    done();
                }
            },
            uploadprogress: function (file, uploaded) {


            },
            complete: function (file) {
                this.removeFile(file);

                setTimeout(function () {
                    $('#store_post').trigger('click');
                }, 1000);
            },
            success: function (response, data) {
                showMessage('UPLOADING_FINISH');

                if (data.indexOf('upload/') === 0) {

                    var oPost = $(this.element);


                    CONF.DOM.CMD.trigger('setMainNav');
                    CONF.DOM.BOARD.trigger('normalBoard');

                    //oPost = $('#board').find('div.post.focused');
                    oPost.removeClass('mobile');
                    oPost.removeClass('focused');

                    $('#new_post').trigger(CONF.EVENTS.CLICK, {
                        origin: oPost
                    });

                    $('textarea').val($('textarea').val() + " \n\n" + window.location.toString().replace('/do/', '/').replace('/do', '/') + data);

                }
            },
            error: function () {
                showMessage('UPLOADING_ERROR');
            }});
    };
})();