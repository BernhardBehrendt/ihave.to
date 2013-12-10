/*global CONF*/
var Menu;
(function () {
    "use strict";
    /**
     * Creates defined menues
     * @module Client
     * @submodule Classes
     * @class Menu
     * @constructor
     */
    Menu = function () {
    };

    /**
     * The menu holding template
     * @method getMenuCorpus
     * @return {Object} The menu parent element
     */
    Menu.prototype.getMenuCorpus = function () {
        return {
            UL: {
                CONTENT: {
                    LI: null
                }
            }
        };
    };

    /**
     * Create the menu command icons
     * @method getMenuCmds
     * @param {Array} aCmds The Commands to show in menu
     * @return {Object} The complete menu tempate
     */
    Menu.prototype.getMenuCmds = function (aCmds) {
        var oMenuCorpus = this.getMenuCorpus();

        aCmds[aCmds.length] = {
            CLASSES: 'fixline',
            AFTER: ' '
        };

        oMenuCorpus.UL.CONTENT.LI = aCmds;

        return oMenuCorpus;
    };

    /**
     * The login menue before start
     * @method getLoginsMenue
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getLoginsMenue = function (sActiveOne) {
        var i;
        var aMenuCmds = [];  // ['home', 'login', 'help', 'system'];
        var aCmds = [];

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };

    /**
     * The main menue after start
     * @method getPrivateMain
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getPrivateMain = function (sActiveOne) {
        var i;
        var aMenuCmds = ['new_post', 'screen', 'timeline', 'chrono', 'settings'];
        var aCmds = [];

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };

    /**
     * The main menue for timeline
     * @method getTimelineMenu
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getTimelineMenu = function (sActiveOne) {
        var i;
        var aMenuCmds = ['back'];
        var aCmds = [];

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }
        return aCmds;
    };

    /**
     * The Navigation for the post view
     * @method getPostMenue
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getPostMenue = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }
        var i;
        var aMenuCmds = ['back', 'store_post'];
        var aCmds = [];

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };

    /**
     * The Navigation for the post edit view
     * @method getPostEdit
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getPostEdit = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }
        var i;
        var aMenuCmds = ['edit', 'delete'];
        var aCmds = [];

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };

    /**
     * The Navigation for the screen view
     * @method getScreenMenue
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getScreenMenue = function (sActiveOne) {
        var i;
        var aMenuCmds = ['back', 'new_screen', 'trash_empty'];
        var aCmds = [];

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        for (i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };

    /**
     * The Navigation for the screen view
     * @method getSettingsMenue
     * @param {String} sActiveOne the Actice menu item
     * @return {Array} The commands for menubar
     */
    Menu.prototype.getSettingsMenue = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        var aMenuCmds = ['back'];
        var aCmds = [];

        for (var i = 0; i < aMenuCmds.length; i += 1) {
            aCmds[i] = {
                CONTENT: {
                    LINK: {
                        URL: '#',
                        ID: aMenuCmds[i],
                        CLASSES: ((aMenuCmds[i] === sActiveOne) ? 'active' : '')
                    }
                },
                AFTER: ' '
            };
        }

        return aCmds;
    };
})();