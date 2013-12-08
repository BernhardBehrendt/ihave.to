/*global $*/
/*global _*/
/*global CONF*/
var Screens;
(function () {
    "use strict";
    /**
     * The screen class corpus
     * No constructor code required actually
     * @module Client
     * @submodule Classes
     * @class Screens
     * @constructor
     */
    Screens = function () {

    };
    /**
     * Counts the visibe posts inside a screen which aren't deleted or moved
     * @method getStats
     * @param {Object} oScreen
     * @return {Number} The number of visible posts on given screen
     */
    Screens.prototype.getStats = function (oScreen) {
        var id;
        var oTs;
        var color;
        var sPreCount = '';
        var oColorUsage = {};
        var oColorSteepening = {};


        for (oTs in oScreen.POSTS) {
            if (oScreen.POSTS.hasOwnProperty(oTs)) {
                if (oScreen.POSTS[oTs] instanceof Array) {
                    if (sPreCount.search(oScreen.POSTS[oTs][0].TGT === -1)) {
                        sPreCount += oScreen.POSTS[oTs][0].TGT + '|';

                        if (oScreen.POSTS[oTs][0].ACN === 'color') {
                            oColorUsage[oScreen.POSTS[oTs][0].TGT] = oScreen.POSTS[oTs][0].TO;
                        }
                    }
                } else {
                    if (sPreCount.search(oScreen.POSTS[oTs].TGT) === -1) {
                        sPreCount += oScreen.POSTS[oTs].TGT + '|';

                        if (oScreen.POSTS[oTs].ACN === 'color') {
                            oColorUsage[oScreen.POSTS[oTs].TGT ] = oScreen.POSTS[oTs].TO;
                        }
                    }
                    else {
                        if (oScreen.POSTS[oTs].ACN === 'move' || oScreen.POSTS[oTs].ACN === 'deleted') {
                            sPreCount = sPreCount.replace(oScreen.POSTS[oTs].TGT + '|', '');
                        }

                        if (oScreen.POSTS[oTs].ACN === 'color') {
                            oColorUsage[oScreen.POSTS[oTs].TGT ] = oScreen.POSTS[oTs].TO;
                        }

                        if (oScreen.POSTS[oTs].ACN === 'deleted' && oColorUsage[oScreen.POSTS[oTs].TGT] !== undefined) {
                            delete oColorUsage[oScreen.POSTS[oTs].TGT];
                        }
                    }
                }
            }
        }

        // Prepare color usage stat data
        for (id in oColorUsage) {
            if (oColorUsage.hasOwnProperty(id)) {
                if (oColorSteepening[oColorUsage[id]] === undefined) {
                    oColorSteepening[oColorUsage[id]] = 1;
                } else {
                    oColorSteepening[oColorUsage[id]] += 1;
                }
            }
        }


        for (color in oColorSteepening) {
            if (oColorSteepening.hasOwnProperty(color)) {
                oColorSteepening[color] = Math.floor(oColorSteepening[color] * 100 / Object.keys(oColorUsage).length);
            }
        }

        return {
            items: sPreCount.split('|').length - 1,
            steepening: oColorSteepening
        };
    };

    /**
     * Sort the color stats
     *
     * @method sortStats
     * @param {Array} aStats
     */
    Screens.prototype.sortStats = function (aStats) {
        return _.sortBy(aStats, function (arrayElement) {
            return arrayElement.PART;
        });
    };

    /**
     * Creates the Object required to create the Overview via template Engine
     * @method getOverview
     * @return {Object} The HTML Template object of the overview view
     */
    Screens.prototype.getOverview = function () {
        var sColor;
        var oScreen;
        var sScreenName;
        var aScreens = [];
        var oScreenStats;
        var aColorStats;

        for (sScreenName in CONF.BOARD.PRIVATE.SCREENS) {
            if (CONF.BOARD.PRIVATE.SCREENS.hasOwnProperty(sScreenName)) {

                oScreen = CONF.BOARD.PRIVATE.SCREENS[sScreenName];
                oScreenStats = this.getStats(oScreen);
                aColorStats = [];

                for (sColor in oScreenStats.steepening) {
                    if (oScreenStats.steepening.hasOwnProperty(sColor)) {
                        aColorStats.push({PART: oScreenStats.steepening[sColor], CLASSES: sColor, STYLE: "width:" + oScreenStats.steepening[sColor] + "%;"});
                    }
                }

                aColorStats = this.sortStats(aColorStats);

                aScreens[aScreens.length] = {
                    ID: sScreenName,
                    CLASSES: 'screen ' + ((CONF.DOM.BOARDPOSTS.data('activescreen') === sScreenName) ? 'curent' : ''),
                    CONTENT: {
                        IMG: {
                            SRC: 'img/textures/onboard.png',
                            CLASSES: 'screen-icon',
                            STYLE: 'background-image:url(' + oScreen.META.BG + ');'
                        },
                        H: {
                            NO: 4,
                            CLASSES: 'screen-name',
                            CONTENT: sScreenName
                        },
                        SPAN: {
                            CLASSES: 'screen-posts',
                            CONTENT: oScreenStats.items + "&nbsp;" + ((oScreenStats.items === 0 || oScreenStats.items > 1) ? "POSTS".translate() : "POST".translate())
                        },
                        DIV: {
                            CLASSES: "screenStats",
                            CONTENT: {
                                DIV: aColorStats.reverse()
                            }
                        }
                    }
                };
            }
        }
        return {
            DIV: aScreens
        };
    }
    ;

    /**
     * Creates the JSON represeantation of the new Screen form
     * @method newScreen
     * @return {Object} the HTML Object  of the Screen form view
     */
    Screens.prototype.newScreen = function () {
        return {
            DIV: {
                ID: 'new_screen-ui',
                CONTENT: {
                    INPUT: [
                        {
                            TYPE: 'text',
                            NAME: 'screen-name',
                            ID: 'screen-name',
                            VALUE: 'NEW_SCREEN_NAME'.translate()
                        },
                        {
                            TYPE: 'hidden',
                            NAME: 'screen-bg-url',
                            ID: 'screen-bg-url'
                        }
                    ],
                    FORM: {
                        ID: "dropImage",
                        CLASS: "dropzone",
                        CONTENT: "DROP_IMAGEFILE_HERE".translate()

                    },
                    LINK: [
                        {
                            ID: 'create-screen',
                            URL: '#',
                            CLASSES: 'button'
                        },
                        {
                            ID: 'abort-create-screen',
                            URL: '#',
                            CLASSES: 'button'
                        }
                    ]
                }
            }
        };
    };
})();
