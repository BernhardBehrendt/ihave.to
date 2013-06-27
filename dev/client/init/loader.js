// The progressbar holder
CONF.DOM.UILOADER = $('#loader');

/**
 * Setup the loading layer
 */

CONF.DOM.UILOADER.bind('setupLoader', function() {
	$(this).css({
		top : $(this).outerHeight() * -1,
		display : 'block'
	});
});

/**
 * Shows the loading layer and update its content and message level
 */
CONF.DOM.UILOADER.bind('showLoader', function() {

	if ( typeof ($(this).data('requests')) == CONF.PROPS.STRING.UD)
		$(this).data('requests', 1);
	else
		$(this).data('requests', $(this).data('requests') + 1);

	$(this).animate({
		top : 0
	}, CONF.PROPS.INT.MASTERCLOCK / 4);
});

/**
 * Hides the loading layer
 */
CONF.DOM.UILOADER.bind('hideLoader', function() {
	$(this).data('requests', $(this).data('requests') - 1);

	if ($(this).data('requests') == 0)
		$(this).animate({
			top : $(this).outerHeight() * -1
		}, CONF.PROPS.INT.MASTERCLOCK / 4);
});

// function for easy loaderaccess
function showMLoader() {
	CONF.DOM.UILOADER.trigger('showLoader');
}

function hideMLoader() {
	CONF.DOM.UILOADER.trigger('hideLoader');
}

// handle resize events
$(window).resize(function() {
	if (!isMobile() || (isMobile() && $(CONF.PROPS.STRING.BLOCKRESIZE).length == 0))
		CONF.DOM.UILOADER.trigger('setupLoader');
});

// Handle AJAX Events
$(document).ajaxStart(function() {
	CONF.DOM.UILOADER.trigger('showLoader');
}).ajaxStop(function() {
	CONF.DOM.UILOADER.trigger('hideLoader');
});

// Setup loader
CONF.DOM.UILOADER.trigger('setupLoader');
