function formError(error, bResponseToOverlay) {
	if (bResponseToOverlay) {
		CONF.DOM.UIOVERLAY.show().html(oTpl.HEADLINE_1.toHtml({
			TEXT : 'ERROR_OCCURED'.translate(),
			CLASSES : 'error'
		}));

		setTimeout(function() {
			CONF.DOM.UIOVERLAY.fadeOut(500);
		}, CONF.PROPS.NUMBER.MASTERCLOCK * 5);
	}
}

function formResponse(oResponse, bResponseToOverlay) {
	if (oResponse.response.error === false) {
		if (bResponseToOverlay) {
			CONF.DOM.UIOVERLAY.show().html(oTpl.HEADLINE_1.toHtml({
				TEXT : 'NO_ERROR_OCCURED'.translate(),
				CLASSES : 'success'
			}));
			setTimeout(function() {
				CONF.DOM.UIOVERLAY.fadeOut(500);
			}, CONF.PROPS.NUMBER.MASTERCLOCK * 5);
		}
	} else {
		if (bResponseToOverlay) {
			CONF.DOM.UIOVERLAY.show().html(oTpl.HEADLINE_1.toHtml({
				TEXT : 'ERROR_OCCURED'.translate(),
				CLASSES : 'warning	'
			}));
			setTimeout(function() {
				CONF.DOM.UIOVERLAY.fadeOut(500);
			}, CONF.PROPS.NUMBER.MASTERCLOCK * 5);
		}
	}
}