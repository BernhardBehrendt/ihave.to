var Buttons;
(function () {

    /**
     * Create the footerbar buttons from a given buttonset
     *
     * @module Client
     * @submodule Classes
     * @class Buttons
     * @constructor
     * @param {Array} aButtonset The buttons to create
     * @param {String} sPanel The panel style where buttons are rendered ins
     * @return {Object} The HTML representation of a buttonset
     *
     */
    "use strict";
    Buttons = function (aButtonset, sPanel) {
        var i;
        var aButtons = [];

        if (sPanel === undefined) {
            sPanel = 'slim';
        }

        if (aButtonset !== undefined) {
            for (i = 0; i < aButtonset.length; i += 1) {
                aButtons[i] = {
                    CLASSES: 'button ' + aButtonset[i].TYPE,
                    CONTENT: {
                        LINK: {
                            ID: aButtonset[i].ID,
                            URL: '#',
                            CONTENT: aButtonset[i].LABEL.translate()
                        }
                    }
                };
            }
        }

        return {
            UL: {
                CLASSES: 'buttons ' + sPanel,
                CONTENT: {
                    LI: aButtons
                }
            }
        };
    };
})();