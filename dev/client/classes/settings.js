/**
 * Here the Settings frontend will be generated but here
 * Storing values is exiting on wrong place but will be stored here in future
 * @TODO
 *
 *
 * @param {Object} oSettings
 */
var Settings = function(oSettings) {
	this.oSettings = oSettings;
};
/**
 * Creates the JSON Object for the Settings view
 * @return {Object} The Object reuired for the Template Engine
 */
Settings.prototype.getTemplate = function() {
	// Setup the missing configuration parameters
	if ( typeof (this.oSettings) == CONF.PROPS.STRING.UD)
		this.oSettings = {};

	// Config Global properties
	if ( typeof (this.oSettings.COLORS) == CONF.PROPS.STRING.UD) {
		this.oSettings.COLORS = {};
	}

	// Create the legend color inside this Array
	var aLegendItems = {
		DIV : new Array()
	};

	// Iterate given colors
	for (sColor in this.oSettings.COLORS) {

		var sColorName = (this.oSettings.COLORS[sColor] != null) ? this.oSettings.COLORS[sColor] : '';

		aLegendItems.DIV[aLegendItems.DIV.length] = {
			ID : 'legend-' + sColor.toLowerCase(),
			CLASSES : 'legend-item',
			CONTENT : {
				IMG : {
					'SRC' : 'img/textures/onboard.png',
					'CLASSES' : 'legend_icon ' + sColor.toLowerCase()
				},
				SPAN : {
					CLASSES : 'legend-desc',
					CONTENT : ('POST_WITH_COLOR_' + sColor).translate()
				},

				INPUT : {
					TYPE : 'text',
					CLASSES : 'legend-name',
					VALUE : sColorName
				}
			}
		};

	}

	return {
		DIV : {
			ID : 'settings-window',
			CONTENT : {
				H : [{
					NO : 2,
					CONTENT : 'SET_PRIOTITIES_HERE'.translate(),
					AFTER : {
						P : {
							CLASSES : 'settings-desc',
							CONTENT : 'DESCRIPTION_PRIORITIES_SETTINGS'.translate()
						},
						DIV : [{
							ID : 'legend',
							CONTENT : aLegendItems

						}]

					}
				}]
			}
		}
	}
};