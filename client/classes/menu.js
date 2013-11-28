/*global CONF*/
var Menu;
(function () {
    "use strict";
    /**
     * Creates defined menues
     */
    Menu = function () {

    };
    /**
     * The menue corpus
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
     * The finalisation of the menu items
     * @param {Array} aCmds
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
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getLoginsMenue = function (sActiveOne) {
        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        var aMenuCmds = [];  // ['home', 'login', 'help', 'system'];
        var aCmds = [];

        for (var i = 0; i < aMenuCmds.length; i++) {
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
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getPrivateMain = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }
        // 'timeline'
        var i;
        var aMenuCmds = ['new_post', 'chrono', 'screen', 'settings'];
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
     * The Navigation for the post view
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getPostMenue = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }
        var i;
        var aMenuCmds = ['back', 'store_post', 'cancel'];
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
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getPostEdit = function (sActiveOne) {

        if (typeof (sActiveOne) === CONF.PROPS.STRING.UD) {
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
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getScreenMenue = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        var aMenuCmds = ['back', 'new_screen', 'trash_empty'];
        var aCmds = [];

        for (var i = 0; i < aMenuCmds.length; i++) {
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
     * @param {String} sActiveOne the Actice menu item
     */
    Menu.prototype.getSettingsMenue = function (sActiveOne) {

        if (sActiveOne === undefined) {
            sActiveOne = '';
        }

        var aMenuCmds = ['back'];
        var aCmds = [];

        for (var i = 0; i < aMenuCmds.length; i++) {
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