/**
 * The screen class corpus
 * No constructor code required actually
 */
Screens = function() {

};
/**
 * Counts the existing posts inside a screen which aren't deleted or moved
 * @param {Object} oScreen
 * @return {Int} The number of Posts found in screenobject
 */
Screens.prototype.countPosts = function(oScreen) {
	var sPreCount = '';

	for (oTs in oScreen.POSTS) {
		if (oScreen.POSTS[oTs] instanceof Array) {
			if (sPreCount.search(oScreen.POSTS[oTs][0]['TGT']) == -1)
				sPreCount += oScreen.POSTS[oTs][0]['TGT'] + '|';
		} else {
			if (sPreCount.search(oScreen.POSTS[oTs]['TGT']) == -1)
				sPreCount += oScreen.POSTS[oTs]['TGT'] + '|';
			else {
				if (oScreen.POSTS[oTs]['ACN'] == 'move' || oScreen.POSTS[oTs]['ACN'] == 'deleted') {
					sPreCount = sPreCount.replace(oScreen.POSTS[oTs]['TGT'] + '|', '');
				}
			}
		}
	}


	return sPreCount.split('|').length - 1;
};
/**
 * Creates the Object required to create the Overview via template Engine
 * @return {Object} The JSON Representation of the overview
 */
Screens.prototype.getOverview = function() {
	var aScreens = new Array();

	for (var sScreenName in CONF.BOARD.PRIVATE.SCREENS) {
		var oScreen = CONF.BOARD.PRIVATE.SCREENS[sScreenName];

		aScreens[aScreens.length] = {
			ID : sScreenName,
			CLASSES : 'screen ' + ((CONF.DOM.BOARDPOSTS.data('activescreen') == sScreenName) ? 'curent' : ''),
			CONTENT : {
				IMG : {
					SRC : 'img/textures/onboard.png',
					CLASSES : 'screen-icon',
					STYLE : 'background-image:url(' + oScreen.META.BG + ');'
				},
				H : {
					NO : 4,
					CLASSES : 'screen-name',
					CONTENT : sScreenName
				},
				SPAN : {
					CLASSES : 'screen-posts',
					CONTENT : this.countPosts(oScreen)
				}
			}
		};
	}
	return {
		DIV : aScreens
	};
};
/**
 * Creates the JSON represeantation of the new Screen form
 * @return {Object} the JSON represeantation of the Screen Form
 */
Screens.prototype.newScreen = function() {
	return {
		DIV : {
			ID : 'new_screen-ui',
			CONTENT : {
				IMG : {
					ID : 'new_screen-preview',
					SRC : 'img/textures/screen-preview.png'
				},
				INPUT : [{
					TYPE : 'text',
					NAME : 'screen-name',
					ID : 'screen-name',
					VALUE : 'NEW_SCREEN_NAME'.translate()
				}, {
					TYPE : 'text',
					NAME : 'screen-bg-url',
					ID : 'screen-bg-url',
					VALUE : 'NEW_BG_URL'.translate()
				}],
				LINK : [{
					ID : 'create-screen',
					URL : '#',
					CLASSES : 'button'
				}, {
					ID : 'abort-create-screen',
					URL : '#',
					CLASSES : 'button'
				}]
			}
		}
	};
};
