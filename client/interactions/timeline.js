/*global $*/
/*global CONF*/
/*global Apprise*/
(function () {
    "use strict";

    $(document)
        .on(CONF.EVENTS.CLICK, 'div.change > .deleted', function () {
            var self = $(this);

            Apprise('CONFIRM_RESTORE_POST'.translate(), {

                animation: 250, // Animation speed
                buttons: {
                    confirm: {
                        action: function () {
                            var sChangeId = parseInt(self.parent().attr('id'), 10);
                            var sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
                            var sPostId = parseInt(self.closest('div.memo').attr('id').replace('change_on_', ''), 10);
                            var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{"' + sActiveScreen + '":{"POSTS":{"' + sChangeId + '":{}}}}}}');
                            var oChange = {
                                ACN: 'restored',
                                BY: CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[sChangeId].BY + '->' + CONF.PROPS.INT.WHO,
                                TGT: sPostId
                            };

                            oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[sChangeId] = oChange;

                            CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[sChangeId] = oChange;
                            CONF.COM.SOCKET.saveChanges(oDiff);

                            self.addClass('restored').removeClass('deleted');

                            CONF.DOM.BOARD.trigger('loadPosts', {
                                NAME: sActiveScreen,
                                SCREEN: CONF.BOARD.PRIVATE.SCREENS[sActiveScreen],
                                FROMTIME: false
                            });

                            $('#back').trigger('click');

                            Apprise('close');
                        }, // Callback function
                        className: 'red', // Custom class name(s)
                        id: 'confirm', // Element ID
                        text: 'OK'.translate() // Button text
                    },
                    abort: {
                        action: function () {
                            Apprise('close');
                        },
                        className: 'blue',
                        id: 'abort', // Element ID
                        text: 'ABORT'.translate() // Button text
                    }
                },
                input: false, // input dialog
                override: true // Override browser navigation while Apprise is visible
            });
        });
}());