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
Buttons = function(aButtonset, sPanel) {
	// Set the default with of an button
	if ( typeof (sPanel) == CONF.PROPS.STRING.UD)
		sPanel = 'slim';

	// Process the Buttonset
	if ( typeof (aButtonset) != CONF.PROPS.STRING.UD) {
		var aButtons = new Array();

		for (var i = 0; i < aButtonset.length; i++) {
			aButtons[i] = {
				CLASSES : 'button ' + aButtonset[i].TYPE,
				CONTENT : {
					LINK : {
						ID : aButtonset[i].ID,
						URL : '#',
						CONTENT : aButtonset[i].LABEL.translate()
					}
				}
			}
		}

		return {
			UL : {
				CLASSES : 'buttons ' + sPanel,
				CONTENT : {
					LI : aButtons
				}
			}
		};
	}
};
