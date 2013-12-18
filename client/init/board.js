/*global $*/
/*global log*/
/*global CONF*/
/*global Board*/
/*global Template*/
/*global setTimeout*/
/*global isMobile*/
/*global parseInt*/
(function () {
    "use strict";
// Instance of the board
    CONF.DOM.BOARD = $('#board');

    /**
     * Translate the generated board into a webview
     *
     */
    CONF.DOM.BOARD.bind('setupBoard', function (event, oActiveScreen) {

        CONF.DOM.BOARDPOSTS = $(this).children('.posts');
        CONF.DOM.BOARDSCREENS = CONF.DOM.BOARDPOSTS.children('.screen');

        CONF.DOM.BOARD.height($(document).height() - CONF.DOM.CMD.height());
        CONF.DOM.BOARD.width($(document).width());

        if (oActiveScreen !== undefined) {
            CONF.DOM.BOARD.trigger('loadPosts', oActiveScreen);
        }

        $(this).fadeIn(CONF.PROPS.INT.MASTERCLOCK);

        log('Boards height was set to ' + CONF.DOM.BOARD.height());
        log('Boards width was set to ' + CONF.DOM.BOARD.width() * CONF.DOM.BOARDSCREENS.length);

    });

    /**
     * Places the Active Screens posts onto screen
     */
    CONF.DOM.BOARD.bind('loadPosts', function (event, oActiveScreen) {

        if (oActiveScreen !== undefined) {

            if (( oActiveScreen.FROMTIME === undefined || !oActiveScreen.FROMTIME) && ( oActiveScreen.SCREEN.POSTS !== undefined)) {
                oActiveScreen.FROMTIME = Object.keys(oActiveScreen.SCREEN.POSTS)[0];
            }

            if (oActiveScreen.SCREEN.POSTS !== undefined) {
                CONF.DOM.BOARDPOSTS.data('activescreen', oActiveScreen.NAME);

                var oBoard = new Board(oActiveScreen);
                var oCurrentScreen = oBoard.getTemplate();

                CONF.DOM.BOARDSCREENS.html(new Template(oCurrentScreen).toHtml());
                CONF.DOM.BOARD.trigger('uiBoard');

                oBoard.enableDroppable($('.post'));
            }
        }
    });
    /**
     * Hanles drag&drop of the posts for manual reordering
     */
    CONF.DOM.BOARD.bind('uiBoard', function () {
        CONF.DOM.POST = CONF.DOM.BOARDSCREENS.find('.post');

        CONF.DOM.POST.draggable({
            delay: 150,
            containment: '.screen',
            start: function (event, ui) {

                $(this).data('start', $(this).attr('style'));

                ui.helper.children('.content').trigger(CONF.EVENTS.CLICK);

                if (CONF.DOM.UIWINDOW.is('.opened')) {
                    $('#back').trigger('click');
                }

            },
            stop: function (event, ui) {
                if (!$(this).is('.mobile')) {
                    var iCurWidth = ui.helper.closest('.screen').width();
                    var iCurHeight = ui.helper.closest('.screen').height();
                    var iLeft = parseInt(ui.helper.css('left'), 10);
                    var iTop = parseInt(ui.helper.css('top'), 10);

                    var iLeftValue = (iLeft * 100 / iCurWidth);
                    var iTopValue = (iTop * 100 / iCurHeight);

                    var oPercentagePosition = {
                        left: iLeftValue + '%',
                        top: iTopValue + '%'
                    };

                    // Create an object for the change
                    var oChange = {
                        BY: CONF.PROPS.INT.WHO,
                        TGT: $(this).attr('id'),
                        ACN: 'position',
                        TO: [iLeftValue, iTopValue]
                    };

                    var iTime = new Date().getTime();
                    var sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');

                    // Create a prototype diff structure for current case
                    var oDiff = JSON.parse('{"PRIVATE" : {"SCREENS" : {"' + sActiveScreen + '":{"POSTS":{"' + iTime + '":{}}}}}}');

                    // Assign change to diff and board
                    oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTime] = oChange;
                    CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[iTime] = oChange;

                    CONF.COM.SOCKET.saveChanges(oDiff);

                    ui.helper.css(oPercentagePosition);

                    // Remove focus after drag on mobile
                    if (isMobile()) {
                        $(this).removeClass('focused');
                    }

                } else {
                    $(this).attr('style', $(this).data('start'));
                }

                $(this).removeData('start');
            }
        });
    });

    /**
     * Disable the drag&drop
     */
    CONF.DOM.BOARD.bind('tinySortBoard', function () {
        CONF.DOM.POST.draggable({
            disabled: true
        });
    });

    /**
     * Enable drag&drop
     */
    CONF.DOM.BOARD.bind('normalBoard', function () {
        CONF.DOM.POST.draggable("enable");
    });

    /*
     * Fit board params on resize
     */
    $(window).resize(function () {
        CONF.DOM.BOARD.trigger('setupBoard');
    });
})();
