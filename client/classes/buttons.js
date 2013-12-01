/**
 * Create a buttonpanel with the given configuration:
 * An example configuration is as follow:
 *
 * [{
 *	LABEL : 'fdsfsd',
 *	TYPE : 'ok',
 *	ID : 'create-post'
 * }]
 * @see scss/ui/_buttons.scss
 * @param {Array} aButtonset an Array with objects
 * @param {String} sPanel the layouts of the panel
 */
var Buttons;
(function () {
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