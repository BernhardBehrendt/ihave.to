/**
 * Creates defined menues
 */
Menu = function() {

};
/**
 * The menue corpus
 */
Menu.prototype.getMenuCorpus = function() {
	return {
		UL : {
			CONTENT : {
				LI : null
			}
		}
	}
};
/**
 * The finalisation of the menu items
 * @param {Array} aCmds
 */
Menu.prototype.getMenuCmds = function(aCmds) {
	var oMenuCorpus = this.getMenuCorpus();

	aCmds[aCmds.length] = {
		CLASSES : 'fixline',
		AFTER : ' '
	};

	oMenuCorpus.UL.CONTENT.LI = aCmds;

	return oMenuCorpus;
};
/**
 * The login menue before start
 * @param {String} the Actice menu item
 */
Menu.prototype.getLoginsMenue = function(sActiveOne) {
	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';

	var aMenuCmds =  [];  // ['home', 'login', 'help', 'system'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};
/**
 * The main menue after start
 * @param {String} the Actice menu item
 */
Menu.prototype.getPrivateMain = function(sActiveOne) {

	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';
    // 'timeline'
	var aMenuCmds = ['new_post', 'chrono', 'screen', 'settings'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};
/**
 * The Navigation for the post view
 * @param {String} the Actice menu item
 */
Menu.prototype.getPostMenue = function(sActiveOne) {

	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';

	var aMenuCmds = ['back', 'store_post', 'cancel'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};
/**
 * The Navigation for the post edit view
 * @param {String} the Actice menu item
 */
Menu.prototype.getPostEdit = function(sActiveOne) {

	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';

	var aMenuCmds = ['edit', 'delete'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};
/**
 * The Navigation for the screen view
 * @param {String} the Actice menu item
 */
Menu.prototype.getScreenMenue = function(sActiveOne) {

	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';

	var aMenuCmds = ['back', 'new_screen', 'trash_empty'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};
/**
 * The Navigation for the screen view
 * @param {String} the Actice menu item
 */
Menu.prototype.getSettingsMenue = function(sActiveOne) {

	if ( typeof (sActiveOne) == CONF.PROPS.STRING.UD)
		sActiveOne = '';

	var aMenuCmds = ['back'];
	var aCmds = new Array();

	for (var i = 0; i < aMenuCmds.length; i++) {
		aCmds[i] = {
			CONTENT : {
				LINK : {
					URL : '#',
					ID : aMenuCmds[i],
					CLASSES : ((aMenuCmds[i] == sActiveOne) ? 'active' : '')
				}
			},
			AFTER : ' '
		}
	}

	return aCmds;
};