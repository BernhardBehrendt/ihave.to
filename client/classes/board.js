/*global $*/
/*global CONF*/
var Board;
(function () {
    "use strict";

    /**
     * This class converts a screentimline into the currently valid screen
     *
     * @author Bernhard Bezdek
     */

    /**
     * Constructor
     *
     * @param {Object} oScreen the representation and some metadate for workig on one (selected) screen
     */
    Board = function (oScreen) {
        this._oScreen = oScreen;
        this.iFromTime = false;
        this._oScreenPost = {};
        this._setDeleted = {};
    };
    /**
     * Return the template and set the background of the Screen
     *
     * @return {Object} the HTML TEmplate representation of the current (selected) screen from given / first timecode
     */
    Board.prototype.getTemplate = function () {

        // A better way must be found because there maybe other use of that method
        this.setBackground();

        // Create the Template code
        return{
            DIV: this._createTemplate()
        };
    };


    /**
     * Render the html Tempate structure out of the given timeline representaiton
     */
    Board.prototype._createTemplate = function () {
        var oCurPost;
        var oTimeline;
        var iTimestamp;

        // Detect if an initial time was set before
        if (this.iFromTime !== undefined) {
            this.iFromTime = (Object.keys(this._oScreen.SCREEN.POSTS)[0]);
        }
        // Start screen posts preprocess
        if (this._oScreen.SCREEN.POSTS === undefined) {

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

        // Start screen posts postprocess (convert to numeric array)
        var iPostId;
        var aPosts = [];
        var oScreenPosts = this._oScreenPost;
        // Convert the Processed object into a numeric array (for the Template Engine)

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
     * @param {Object} oPost the timeline entry to get parsed
     * @return {Object} the template engines representation to create HTML from it
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
     * Adds a Post to current screen object
     *
     * @param {Object} oPost
     * @return void
     */
    Board.prototype._addPost = function (oPost) {
        if (this._oScreenPost[oPost.ID] === undefined) {
            // Create the post corpus
            this._oScreenPost[oPost.ID] = oPost;
        }
        else {
            // Exchange existing values with replacement in oPost object

            // Detect content
            //alert(oPost.CONTENT.DIV.CONTENT.P.CONTENT);

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
     * @requires jQuery
     */
    Board.prototype.setBackground = function () {
        $('body').css('background-image', 'url(' + this._oScreen.SCREEN.META.BG + ')');
    };

})();