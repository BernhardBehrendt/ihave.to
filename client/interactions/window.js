/*global $*/
/*global CONF*/
(function () {
    "use strict";

    // Fix for preventing overflow scrolling of the body
    $(document).on('touchmove', 'body', function (e) {
        if (!$('.tinysort').has($(e.target)).length && !$('#ui').has($(e.target)).length && !$('.focused').has($(e.target)).length) {
            e.preventDefault();
        }
    })

        .on('keydown', 'body', function (event) {

            if ($('#login-window').length === 0) {
                if (event.keyCode === 27) {
                    event.preventDefault();
                    CONF.DOM.UIWINDOW.trigger('hideUi');
                    CONF.DOM.CMD.find('.active').trigger(CONF.EVENTS.CLICK);
                    CONF.DOM.CMD.trigger('setMainNav');
                    $('#fullsize').removeClass('active').empty();
                }
            }
        })

        // Globla emptylink eventDefault preventer
        .on('click', 'a', function (event) {
            if ($(this).attr('href') === '#') {
                event.preventDefault();
                event.stopPropagation();
            }
        });
})();