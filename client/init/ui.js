/*global $*/
/*global CONF*/
/*global Template*/
/*global isMobile*/

(function () {
    "use strict";
    // The UI window each userinterface is places in
    CONF.DOM.UIWINDOW = $('#ui');

    // Show the main ui interface
    CONF.DOM.UIWINDOW.bind('showUi', function () {
        $(this).removeClass('closed').addClass('opened');
    });

    // Hide the main ui interface
    CONF.DOM.UIWINDOW.bind('hideUi', function () {
        CONF.DOM.UIWINDOW.children('.cmd').empty();
        CONF.DOM.UIWINDOW.children('.cmd').removeAttr('style');

        $(this).removeClass('opened').addClass('closed');
    });

    // Empty the actually inserted UI Elements
    CONF.DOM.UIWINDOW.bind('cleanUi', function () {
        $(this).empty();
    });

    // The main UI Setup
    CONF.DOM.UIWINDOW.bind('setupUi', function () {
        if (!isMobile()) {
            $(this).css({
                'height': $(window).height() - CONF.DOM.CMD.outerHeight() + 'px'
            });
        }
    });

    // Handle resize event
    $(window).on('resize', function () {
        if (!isMobile() || (isMobile() && $(CONF.PROPS.STRING.BLOCKRESIZE).length === 0)) {
            CONF.DOM.UIWINDOW.trigger('setupUi');
        }
    });

    // Startup UI
    CONF.DOM.UIWINDOW.trigger('setupUi');
})();