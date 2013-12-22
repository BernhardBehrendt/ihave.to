var Settings;
(function () {
    "use strict";

    /**
     * Settings frontend will be generated
     * @module Client
     * @submodule Classes
     * @class Settings
     * @constructor
     * @param {Object} oSettings The settings object
     */
    Settings = function (oSettings) {
        this.oSettings = oSettings;
    };

    /**
     * Here the settings are stored
     * @property oSettings
     * @type {Object}
     */
    Settings.prototype.oSettings = null;

    /**
     * Creates the JSON Object for the Settings view
     * @method getTemplate
     * @return {Object} The Object reuired for the Template Engine
     */
    Settings.prototype.getTemplate = function () {
        var sColor;
        var aLegendItems = {
            DIV: []
        };

        // Setup the missing configuration parameters
        if (this.oSettings === undefined) {
            this.oSettings = {};
        }

        // Config Global properties
        if (this.oSettings.COLORS === undefined) {
            this.oSettings.COLORS = {};
        }

        // Iterate given colors
        for (sColor in this.oSettings.COLORS) {
            if (this.oSettings.COLORS.hasOwnProperty(sColor)) {
                var sColorName = (this.oSettings.COLORS[sColor] !== null) ? this.oSettings.COLORS[sColor] : '';

                aLegendItems.DIV[aLegendItems.DIV.length] = {
                    ID: 'legend-' + sColor.toLowerCase(),
                    CLASSES: 'legend-item',
                    CONTENT: {
                        IMG: {
                            'SRC': 'img/textures/onboard.png',
                            'CLASSES': 'legend_icon ' + sColor.toLowerCase()
                        },
                        SPAN: {
                            CLASSES: 'legend-desc',
                            CONTENT: ('POST_WITH_COLOR_' + sColor).translate()
                        },

                        INPUT: {
                            TYPE: 'text',
                            CLASSES: 'legend-name',
                            VALUE: sColorName
                        }
                    }
                };
            }
        }

        return {
            DIV: {
                ID: 'settings-window',
                CONTENT: {
                    H: [
                        {
                            NO: 2,
                            CONTENT: 'SET_PRIOTITIES_HERE'.translate(),
                            AFTER: {
                                P: {
                                    CLASSES: 'settings-desc',
                                    CONTENT: 'DESCRIPTION_PRIORITIES_SETTINGS'.translate()
                                },
                                DIV: [
                                    {
                                        ID: 'legend',
                                        CONTENT: aLegendItems

                                    }
                                ]

                            }
                        }
                    ]
                }
            }
        };
    };
})();