/*global CONF*/
var Settings;
(function () {
    "use strict";

    /**
     * Here the Settings frontend will be generated but here
     * Storing values is exiting on wrong place but will be stored here in future
     *
     *
     * @param {Object} oSettings
     */
    Settings = function (oSettings) {
        this.oSettings = oSettings;
    };
    /**
     * Creates the JSON Object for the Settings view
     * @return {Object} The Object reuired for the Template Engine
     */
    Settings.prototype.getTemplate = function () {
        var sColor;
        // Setup the missing configuration parameters
        if (this.oSettings === undefined) {
            this.oSettings = {};
        }

        // Config Global properties
        if (this.oSettings.COLORS === undefined) {
            this.oSettings.COLORS = {};
        }

        // Create the legend color inside this Array
        var aLegendItems = {
            DIV: []
        };

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