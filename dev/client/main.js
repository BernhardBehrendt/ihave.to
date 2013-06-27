$(document).ready(function() {
	CONF.DOM.UIWINDOW.trigger('showUi');
	CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Login()).toHtml());

	var aBoards = new Array();
	var sLastBoard = '';

	if ( typeof (Storage) != CONF.PROPS.STRING.UD) {
		CONF.PROPS.OBJECT.STORAGE = localStorage;
		if (CONF.PROPS.OBJECT.STORAGE.getItem("boards") == null) {
			CONF.PROPS.OBJECT.STORAGE.setItem("boards", '');

		}

		if (CONF.PROPS.OBJECT.STORAGE.getItem("lastboard") != null) {
			sLastBoard = CONF.PROPS.OBJECT.STORAGE.getItem("lastboard");
		}

		aBoards = CONF.PROPS.OBJECT.STORAGE.getItem("boards").split('-').filter(String);

		if (sLastBoard.length > 0)
			$('#boardname').val(sLastBoard);

	}

	$('#boardpw').passStrength({
		userid : "#boardname"
	});

	$('#boardpw').trigger('keyup');

	$('#boardname').autocomplete({
		source : aBoards
	});

	// Update the title for mobile devices
	if (isMobile())
		setTimeout(function() {
			$('title').text('MOBILE_TITLE'.translate());
		}, 2000);
	else {
		$('#login-window').css({
			position : 'absolute',
			left : (($(window).width() - $('#login-window').outerWidth()) / 2),
			top : (($(window).height() - $('#login-window').outerHeight()) / 3),
		});

		$('#cmd').css({
			float : 'none',
			margin : '0 auto'
		});
	}
});

