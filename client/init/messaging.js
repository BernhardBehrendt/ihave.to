/*global $*/
/*global log*/
/*global CONF*/
/*global LANGUAGE*/
/*global isMobile*/
/*global Template*/
/*global setTimeout*/

var showMessage;
(function () {
    "use strict";
// The Messaging holder
    CONF.DOM.UIMESSAGING = $('#messaging');

    /**
     * Setup the messaging layer
     */
    CONF.DOM.UIMESSAGING.bind('setupMessaging', function () {
        $(this).css({
            top: $(this).outerHeight() * -1,
            display: 'block'
        }).empty();
    });

    /**
     * Shows the messaging layer and update its content and message level
     */
    CONF.DOM.UIMESSAGING.bind('showMessaging', function () {

        CONF.DOM.UIMESSAGING.trigger('setupMessaging');

        if ($(this).data('type') === undefined) {
            $(this).data('type', 'notice');
        }

        if ($(this).data('content') !== undefined) {

            if (window.messagingTimeout !== undefined) {
                clearTimeout(window.messagingTimeout);
            }

            $(this).html(new Template({
                    H: {
                        NO: 1,
                        CLASSES: $(this).data('type'),
                        CONTENT: $(this).data('content').translate()
                    }
                }).toHtml()).animate({
                    top: 0
                });
            $(this).removeData('content');

            window.messagingTimeout = setTimeout(function () {
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
    CONF.DOM.UIMESSAGING.bind('hideMessaging', function () {
        $(this).animate({
            top: $(this).outerHeight() * -1
        }, CONF.PROPS.INT.MASTERCLOCK / 4);
    });

    showMessage = function (content, type) {
        if (type === undefined) {
            type = 'notice';
        }

        CONF.DOM.UIMESSAGING.data('content', content).data('type', type).trigger('showMessaging');
    };

// Handle resize event
    $(window).resize(function () {
        if (!isMobile() || (isMobile() && $(CONF.PROPS.STRING.BLOCKRESIZE).length === 0)) {
            CONF.DOM.UIMESSAGING.trigger('setupMessaging');
        }
    });

// Handle Ajax errors
    $(document).ajaxError(function (event, xhr, settings, thrownError) {
        showMessage(thrownError, 'error');
    });

// Setup messaging layer
    CONF.DOM.UIMESSAGING.trigger('setupMessaging');

    /**
     * Handle Initial messaging
     */
    var sUrl = window.location.href;
    if (sUrl.indexOf('#') !== -1) {

        var sMessage = sUrl.substring(sUrl.indexOf("#") + 1);

        if (LANGUAGE[CONF.PROPS.STRING.LANGUAGE][sMessage] !== undefined) {
            showMessage(sMessage, 'notice');
        }
    }
})();