/*global $*/
/*global CONF*/
/*global Template*/
var PostWindow;
(function () {
    "use strict";

    /**
     * The Postwindow masterclass
     * Creates the Templates engine required object to create the postwindow with all required bindings (Plugins later...)
     * @requires Template The default Template engine
     * @module Client
     * @submodule Classes
     * @class PostWindow
     * @constructor
     * @param {Object} config The configuration for the postwindowinstance
     */
    PostWindow = function (config) {
        var i;
        var aColorList = [];
        var sColorTitle = '';
        var sPrioName;

        // Set default config if no config was given before
        if (config === undefined) {
            config = {
                defaultcolor: 'yellow',
                content: '',
                headline: 'NEW_POST'.translate(),
                origin: ''
            };
        } else {

            if (config.origin === undefined) {
                config.origin = '';
            }

            // Set the initial particualry values if there are some entries missing
            // Color
            if (config.defaultcolor === undefined) {
                config.defaultcolor = 'yellow';
            }

            // The default content
            if (config.content === undefined) {
                config.content = '';
            }

            // The headline
            if (config.headline === undefined) {
                config.headline = 'NEW_POST'.translate();
            }
        }


        // Processs the existing colors for colorselection
        for (i = 0; i < CONF.PROPS.ARRAY.COLORS.length; i += 1) {
            sPrioName = CONF.BOARD.SETTINGS.COLORS[CONF.PROPS.ARRAY.COLORS[i].toUpperCase()];

            if (sPrioName !== null) {
                sColorTitle = CONF.PROPS.ARRAY.COLORS[i].toUpperCase().translate() + ' ' + 'IS_MARKED_AS'.translate() + ' ' + sPrioName;
            }

            if (CONF.PROPS.ARRAY.COLORS[i] === config.defaultcolor) {
                aColorList[aColorList.length] = {
                    CLASSES: CONF.PROPS.ARRAY.COLORS[i],
                    CONTENT: {
                        LINK: {
                            TITLE: sColorTitle,
                            CLASSES: 'selected',
                            URL: '#'
                        }
                    }
                };
            }
            else {
                aColorList[aColorList.length] = {
                    CLASSES: CONF.PROPS.ARRAY.COLORS[i],
                    CONTENT: {
                        LINK: {
                            TITLE: sColorTitle,
                            URL: '#'
                        }
                    }
                };
            }
        }

        this.postTemplate = new Template({
            DIV: {
                ID: 'post-window',
                CONTENT: {
                    H: {
                        NO: 2,
                        CONTENT: config.headline
                    },
                    TEXTAREA: {
                        ID: ((config.origin.length > 0) ? 'origin-' + config.origin : ''),
                        CLASS: config.defaultcolor,
                        INSERT: config.content
                    },
                    UL: {
                        CLASSES: 'color_select',
                        CONTENT: {
                            LI: aColorList
                        }
                    }
                }
            }
        }).toHtml();
    };
    /**
     * Deliver the postwindow HTML View
     * @method deliver
     * @return {String} The postwindow HTML String
     */
    PostWindow.prototype.deliver = function () {
        return this.postTemplate;
    };
})();