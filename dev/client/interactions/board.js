///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The board current screen interactions
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handle interactions on the board
$(document).on(CONF.EVENTS.FORCED_CLICK, '.post > .content', function(event) {
	event.stopPropagation();
	event.preventDefault();

	$(this).closest('.screen').find('.focused').removeClass('focused');
	$(this).parent('.post').addClass('focused');
}).on(CONF.EVENTS.CLICK, '.post > .content > p > a', function(event) {
	event.preventDefault();
	event.stopPropagation();
	if (!isMobile()) {
		window.open($(this).attr('href'));
	} else {
		if (window.navigator.standalone == true)
			showMessage('IOS_ERROR_OPENWINDOW');
		else
			window.open($(this).attr('href'));
	}
})
// Mobile post fullscreen support
.on(CONF.EVENTS.FORCED_CLICK, '.focused > .content', function(event) {
	event.preventDefault();

	var oThis = $(this);

	if (!$(this).hasClass('focused'))
		oThis = $(this).closest('.focused');

	if (isMobile()) {
		if (!oThis.hasClass('mobile')) {
			oThis.addClass('mobile');
			CONF.DOM.BOARD.trigger('tinySortBoard');
			CONF.DOM.CMD.trigger('setPostEditNav');
		} else {
			oThis.removeClass('mobile');
			oThis.removeClass('focused');

			if (!$(this).closest('.screen').is('.tinysort')) {
				CONF.DOM.BOARD.trigger('normalBoard');
			}
			CONF.DOM.CMD.trigger('setMainNav');
		}
	} else {
		if ($(this).parent().children('#post-functions').length == 0)
			$(this).parent().prepend(new Post().getTools());
		else
			$(this).parent().children('#post-functions').remove();
	}
}).on(CONF.EVENTS.CLICK, '#edit', function() {
	var oPost = false;

	if (!isMobile()) {
		oPost = $(this).closest('.post');
	} else {
		CONF.DOM.CMD.trigger('setMainNav');
		$('.screen .focused:eq(0)').removeClass('mobile');
		CONF.DOM.BOARD.trigger('normalBoard');
		oPost = $('.screen .focused:eq(0)');
		oPost.removeClass('focused');
	}

	$('#new_post').trigger(CONF.EVENTS.CLICK, {
		origin : oPost
	});

	// Add hidden class and remove on change
	//$('#store_post').addClass('hidden');
	CONF.DOM.CMD.find('#store_post').addClass('hidden');
})
// Delete a postit
.on(CONF.EVENTS.CLICK, '#delete', function() {

	var oPost = false;

	if (!isMobile()) {
		oPost = $(this).closest('.post');
	} else {
		oPost = $('.screen .focused:eq(0)');
	}

	Apprise('CONFIRM_DELETE_POST'.translate(), {

		animation : 250, // Animation speed
		buttons : {
			confirm : {
				action : function() {
					if (isMobile()) {
						CONF.DOM.CMD.trigger('setMainNav');
						$('.screen .focused:eq(0)').removeClass('mobile');
						CONF.DOM.BOARD.trigger('normalBoard');
						oPost.removeClass('focused');
					}

					var oChange = {
						BY : CONF.PROPS.INT.WHO,
						TGT : oPost.attr('id'),
						ACN : 'deleted',
					};

					var iTimestamp = new Date().getTime();
					var sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
					var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{"' + sActiveScreen + '":{"POSTS":{"' + iTimestamp + '":{}}}}}}');

					oDiff.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data('activescreen')].POSTS[iTimestamp] = oChange;
					CONF.BOARD.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data('activescreen')].POSTS[iTimestamp] = oChange;

					showMessage('REMOVE_POST');

					CONF.COM.SOCKET.saveChanges(oDiff);
					oPost.remove();
					Apprise('close');
				}, // Callback function
				className : null, // Custom class name(s)
				id : 'confirm', // Element ID
				text : 'OK'.translate(), // Button text
			},
			abort : {
				action : function() {
					Apprise('close');
				},
				id : 'abort', // Element ID
				text : 'ABORT'.translate(), // Button text
			}
		},
		input : false, // input dialog
		override : true, // Override browser navigation while Apprise is visible
	});
})
// Prevent open new post window
.on('dblclick', '.post', function(event) {
	event.preventDefault();
	event.stopPropagation();
})
// Create a new post at dblclicked position
.on('dblclick', '.posts', function(event) {
	if (!isMobile()) {
		event.preventDefault();
		event.stopPropagation();

		if ($('.post').length > 0) {
			var oPost = $('.post:eq(0)');
			var iPerPostHgt = 100 - (oPost.outerHeight() * 100 / $('.posts').outerHeight());
			var iPerPostWid = 100 - (oPost.outerWidth() * 100 / $('.posts').outerWidth());
		}

		var iPerLeft = event.clientX * 100 / $('.posts').outerWidth();
		var iPerTop = event.clientY * 100 / $('.posts').outerHeight();

		if ( typeof (iPerPostWid) != CONF.PROPS.STRING.UD && iPerLeft > iPerPostWid)
			iPerLeft = iPerPostWid;

		if ( typeof (iPerPostHgt) != CONF.PROPS.STRING.UD && iPerTop > iPerPostHgt)
			iPerTop = iPerPostHgt;

		window.lastevent = event;

		$('#new_post').trigger(CONF.EVENTS.CLICK, {
			left : iPerLeft,
			top : iPerTop
		});
	}
});
