// Handle device/browser/client specific properties
if (isMobile()) {

	CONF.EVENTS.CLICK = 'touchstart';
	//CONF.EVENTS.CLICK = 'click';

	window.addEventListener('load', function() {
		setTimeout(function() {
			window.scrollTo(0, 1);
		}, 0);
	});

	$(window).on('resize', function() {
		if ($(CONF.PROPS.STRING.BLOCKRESIZE).length == 0)
			setTimeout(function() {
				window.scrollTo(0, 1);
			}, 0);
	});
} else {
	CONF.EVENTS.CLICK = 'click';
}
