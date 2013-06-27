// The Messaging holder
CONF.DOM.UIMESSAGING = $('#messaging');

/**
 * Setup the messaging layer
 */
CONF.DOM.UIMESSAGING.bind('setupMessaging', function() {
	$(this).css({
		top : $(this).outerHeight() * -1,
		display : 'block'
	}).empty();
});

/**
 * Shows the messaging layer and update its content and message level
 */
CONF.DOM.UIMESSAGING.bind('showMessaging', function() {

	CONF.DOM.UIMESSAGING.trigger('setupMessaging');

	if ( typeof ($(this).data('type')) == CONF.PROPS.STRING.UD)
		$(this).data('type', 'notice');

	if ( typeof ($(this).data('content')) != CONF.PROPS.STRING.UD) {

		if ( typeof (window.messagingTimeout) != 'undefined')
			window.clearTimeout(window.messagingTimeout);

		$(this).html(new Template({
			H : {
				NO : 1,
				CLASSES : $(this).data('type'),
				CONTENT : $(this).data('content').translate()
			}
		}).toHtml()).animate({
			top : 0
		});
		$(this).removeData('content');

		window.messagingTimeout = window.setTimeout(function() {
			CONF.DOM.UIMESSAGING.trigger('hideMessaging');
		}, CONF.PROPS.INT.MASTERCLOCK * 3);
	} else {
		log('No massage was given before');
	}
	$(this).removeData('type');
});

/**
 * Hides the messaging layer
 */
CONF.DOM.UIMESSAGING.bind('hideMessaging', function() {
	$(this).animate({
		top : $(this).outerHeight() * -1
	}, CONF.PROPS.INT.MASTERCLOCK / 4);
});

function showMessage(content, type) {
	if ( typeof (type) == CONF.PROPS.STRING.UD) {
		type = 'notice';
	}

	CONF.DOM.UIMESSAGING.data('content', content).data('type', type).trigger('showMessaging');
}

// Handle resize event
$(window).resize(function() {
	if (!isMobile() || (isMobile() && $(CONF.PROPS.STRING.BLOCKRESIZE).length == 0))
		CONF.DOM.UIMESSAGING.trigger('setupMessaging');
});

// Handle Ajax errors
$(document).ajaxError(function(event, xhr, settings, thrownError) {
	showMessage(thrownError, 'error');
});

// Setup messaging layer
CONF.DOM.UIMESSAGING.trigger('setupMessaging');

/**
 * Handle Initial messaging
 */
var sUrl = window.location.href;
if (sUrl.indexOf('#') != -1) {

	var sMessage = sUrl.substring(sUrl.indexOf("#") + 1);

	if ( typeof (LANGUAGE[CONF.PROPS.STRING.LANGUAGE][sMessage]) != CONF.PROPS.STRING.UD) {
		showMessage(sMessage, 'notice');
	}
}