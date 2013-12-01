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
        // Set the default with of an button
        if (sPanel === undefined) {
            sPanel = 'slim';
        }

        // Process the Buttonset
        if (aButtonset !== undefined) {
            var i;
            var aButtons = [];

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

            return {
                UL: {
                    CLASSES: 'buttons ' + sPanel,
                    CONTENT: {
                        LI: aButtons
                    }
                }
            };
        }
    };
})();