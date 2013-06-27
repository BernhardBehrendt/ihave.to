/**
 * The Postwindow masterclass
 * Creates the Templates engine required object to create the postwindow with all required bindings (Plugins later...)
 * @requires Template The default TEmplate engine
 * @param {Object} config
 */
PostWindow = function(config) {
	// Set default config if no config was given before
	if ( typeof (config) == CONF.PROPS.STRING.UD) {
		config = {
			defaultcolor : 'yellow',
			content : '',
			headline : 'NEW_POST'.translate(),
			origin : ''
		}
	} else {

		if ( typeof (config.origin) == CONF.PROPS.STRING.UD)
			config.origin = '';

		// Set the initial particualry values if there are some entries missing
		// Color
		if ( typeof (config.defaultcolor) == CONF.PROPS.STRING.UD)
			config.defaultcolor = 'yellow';

		// The default content
		if ( typeof (config.content) == CONF.PROPS.STRING.UD)
			config.content = '';

		// The headline
		if ( typeof (config.headline) == CONF.PROPS.STRING.UD)
			config.headline = 'NEW_POST'.translate();
	}

	if ( typeof (Template) == 'function') {

		var aColorList = new Array();

		// Processs the existing colors for colorselection
		for (var i = 0; i < CONF.PROPS.ARRAY.COLORS.length; i++) {
			var sColorTitle = '';
			var sPrioName = CONF.BOARD.SETTINGS.COLORS[CONF.PROPS.ARRAY.COLORS[i].toUpperCase()];

			if (sPrioName != null)
				sColorTitle = CONF.PROPS.ARRAY.COLORS[i].toUpperCase().translate() + ' ' + 'IS_MARKED_AS'.translate() + ' ' + sPrioName;

			if (CONF.PROPS.ARRAY.COLORS[i] == config.defaultcolor)
				aColorList[aColorList.length] = {
					CLASSES : CONF.PROPS.ARRAY.COLORS[i],
					CONTENT : {
						LINK : {
							TITLE : sColorTitle,
							CLASSES : 'selected',
							URL : '#'
						}
					}
				};
			else
				aColorList[aColorList.length] = {
					CLASSES : CONF.PROPS.ARRAY.COLORS[i],
					CONTENT : {
						LINK : {
							TITLE : sColorTitle,
							URL : '#'
						}
					}
				};
		}
		// create the structure for the template engine
		this.postTemplate = new Template({
			DIV : {
				ID : 'post-window',
				CONTENT : {
					H : {
						NO : 2,
						CONTENT : config.headline
					},
					TEXTAREA : {
						ID : (config.origin.length > 0) ? 'origin-' + config.origin : '',
						CLASSES : config.defaultcolor,
						CONTENT : config.content
					},
					UL : {
						CLASSES : 'color_select',
						CONTENT : {
							LI : aColorList
						}
					}
				}
			}
		}).toHtml();
	}
};
/**
 * Gives back the templates engine required object
 * @return {Object} the representation for the templete engine
 */
PostWindow.prototype.create = function() {
	return this.postTemplate;
};
