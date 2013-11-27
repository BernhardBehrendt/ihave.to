///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// General Navigation Handling
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Show navigation tooltip
$(document).on('mouseover', 'nav#cmd > ul > li > a', function() {
    // Show navigation Information layer
    if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
        var sTranslate = $(this).attr('id').toUpperCase() + '_INFO';
        CONF.DOM.CMD_INFO.text(sTranslate.translate()).fadeIn(CONF.PROPS.INT.FAST);
    }
})
// Hide navigation Tooltip
.on('mouseout', 'nav#cmd > ul > li > a', function() {
    // Hide navigation Information layer
    if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
        CONF.DOM.CMD_INFO.text('').fadeOut(CONF.PROPS.INT.FAST);
    }
})
// Activate button on navigation
.on(CONF.EVENTS.CLICK, 'nav#cmd > ul > li > a', function() {
    // handle comands
    if (!$(this).hasClass(CONF.PROPS.STRING.ACTIVE)) {
        // Trigger disable currently active element
        $(this).closest('ul').find('.active').trigger(CONF.EVENTS.CLICK);

        // Make element active
        $(this).addClass(CONF.PROPS.STRING.ACTIVE);
    }

})
// Disable button on navigation
.on(CONF.EVENTS.CLICK, 'nav#cmd > ul > li > a.active', function() {
    // remove navigation active state
    $(this).removeClass(CONF.PROPS.STRING.ACTIVE);
})
// Leave subnavigation level
.on(CONF.EVENTS.CLICK, '#back', function() {
    CONF.DOM.CMD.trigger('setMainNav');
    CONF.DOM.UIWINDOW.children('.controls').children('.close').trigger(CONF.EVENTS.CLICK);

})
// Cancel current view action and go back to main view
.on(CONF.EVENTS.CLICK, '#cancel', function() {
    $('#ui > .controls > .close').trigger(CONF.EVENTS.CLICK);
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Navigaton
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Open create new post view
.on(CONF.EVENTS.CLICK, '#new_post', function(event, oSettings) {

    var oPostPos = {
        left : 0,
        top : 0
    };

    var oOrigin = false;
    var oPostConfig = undefined;

    if ( typeof (oSettings) == CONF.PROPS.STRING.UD)
        oSettings = {};

    if ( typeof (oSettings.origin) != CONF.PROPS.STRING.UD)
        oOrigin = oSettings.origin;

    if ( typeof (oSettings.left) != CONF.PROPS.STRING.UD)
        oPostPos.left = oSettings.left;

    if ( typeof (oSettings.top) != CONF.PROPS.STRING.UD)
        oPostPos.top = oSettings.top;

    if (oOrigin) {
        var oPost = new Post(oOrigin);
        oPostConfig = {
            defaultcolor : oPost.getColor(),
            content : oPost.getContent(),
            headline : 'EDIT_POST'.translate(),
            origin : oPost.getId()
        }
    }

    if ($(this).is('.active')) {
        CONF.DOM.UIWINDOW.trigger('showUi');
        CONF.DOM.CMD.trigger('setPostNav', oPostPos);
        CONF.DOM.UIWINDOW.children('.cmd').html(new PostWindow(oPostConfig).create());
        CONF.DOM.UIWINDOW.find('textarea').focus();
    }
})
// Sort posts chronological
.on(CONF.EVENTS.CLICK, '#chrono', function() {
    if ($(this).is('.active')) {

        $('.screen.normal').addClass('tinysort').removeClass('normal');

        CONF.DOM.BOARD.trigger('tinySortBoard');
        CONF.DOM.UIWINDOW.trigger('hideUi');

        $('.screen > .post').tsort("", {
            order : "desc",
            attr : "id"
        });

        showMessage('ORDERED_POSTS_CHRONOLOGICAL');

    } else {
        $('.screen.tinysort').addClass('normal').removeClass('tinysort');
        CONF.DOM.BOARD.trigger('normalBoard');
    }
})
// Open screen view
.on(CONF.EVENTS.CLICK, '#screen', function() {
    if ($(this).is('.active')) {
        CONF.DOM.UIWINDOW.trigger('showUi');
        CONF.DOM.CMD.trigger('setScreenNav');
        CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Screens().getOverview()).toHtml());
    }
})
// open settongs view
.on(CONF.EVENTS.CLICK, '#settings', function() {

    if ($(this).is('.active')) {
        CONF.DOM.UIWINDOW.trigger('showUi');
        CONF.DOM.CMD.trigger('setSettingsNav');
        CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Settings(CONF.BOARD.SETTINGS).getTemplate()).toHtml());
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// New Post view
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Store created post
.on(CONF.EVENTS.CLICK, '#store_post', function() {

    if ($(this).is('.active')) {
        var iTimestamp = new Date().getTime();
        var oPostWindow = $('#post-window');
        var oTextarea = oPostWindow.children('textarea');
        var sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
        var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{"' + sActiveScreen + '":{"POSTS":{"' + iTimestamp + '":{}}}}}}');

        if (oTextarea.val().trim().length > 0) {

            // Modified post

            if (oTextarea.attr('id') !== undefined && oTextarea.attr('id').indexOf('origin') == 0) {
                var iTarget = parseInt(oTextarea.attr('id').replace('origin-', ''));

                if ( typeof (iTarget) == CONF.PROPS.STRING.NUM) {
                    if ( typeof ($('.color_select').data('beforechange')) != CONF.PROPS.STRING.UD) {
                        if (oPostWindow.find('a.selected').parent().attr('class') != $('.color_select').data('beforechange'))
                            var oColorchange = {
                                BY : CONF.PROPS.INT.WHO,
                                TGT : iTarget,
                                ACN : "color",
                                TO : oPostWindow.find('a.selected').parent().attr('class')
                            };
                    }
                    if (oTextarea.val().trim() != oTextarea.data('beforechange').trim()) {
                        var oContentchange = {
                            BY : CONF.PROPS.INT.WHO,
                            TGT : iTarget,
                            ACN : "content",
                            TO : oTextarea.val().trim().escapeHtml().nl2br().urlToLink()
                        };
                    }

                    // If only color changed set change color object
                    if ( typeof (oColorchange) != CONF.PROPS.STRING.UD)
                        var oChange = oColorchange;

                    // If only content changed set change content object
                    if ( typeof (oContentchange) != CONF.PROPS.STRING.UD)
                        var oChange = oContentchange;

                    // If both changed create color/content array
                    if ( typeof (oColorchange) != CONF.PROPS.STRING.UD && typeof (oContentchange) != CONF.PROPS.STRING.UD)
                        var oChange = new Array(oColorchange, oContentchange);

                    if ( typeof (oChange) == CONF.PROPS.STRING.UD) {
                        showMessage('NOTHING_CHANGED', 'error');
                        $('#back').trigger('click');
                        return false;
                    }
                    // Add changes to board
                    oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                    CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                }

                showMessage('STRORE_MODIFIED_POST');

            }
            // New Post
            else {
                var oChange = new Array({
                    BY : CONF.PROPS.INT.WHO,
                    TGT : iTimestamp,
                    ACN : "color",
                    TO : oPostWindow.find('a.selected').parent().attr('class')
                }, {
                    BY : CONF.PROPS.INT.WHO,
                    TGT : iTimestamp,
                    ACN : "content",
                    TO : oTextarea.val().escapeHtml().nl2br().urlToLink()
                }, {
                    BY : CONF.PROPS.INT.WHO,
                    TGT : iTimestamp,
                    ACN : "position",
                    TO : [oTextarea.data('postposition').left, oTextarea.data('postposition').top]
                });

                oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;

                showMessage('STRORE_NEW_POST');

            }

            $('#ui > .controls > .close').trigger(CONF.EVENTS.CLICK);

            CONF.COM.SOCKET.saveChanges(oDiff);

            var oBoard = new Board({
                NAME : CONF.DOM.BOARDPOSTS.data('activescreen'),
                SCREEN : CONF.BOARD.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data('activescreen')],
                FROMTIME : false
            });

            CONF.DOM.BOARDSCREENS.html(new Template(oBoard.getTemplate()).toHtml());

            CONF.DOM.BOARD.trigger('uiBoard');
        } else {
            showMessage('CANT_STORE_EMPTY_POST', 'error');
            $(this).removeClass('active');
        }
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Screen views Navigation
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create new screen
.on(CONF.EVENTS.CLICK, '#new_screen', function() {
    if ($(this).is('.active')) {
        CONF.DOM.UIWINDOW.children('.cmd').prepend(new Template(new Screens().newScreen()).toHtml());
    } else {
        $('#new_screen-ui').fadeOut(CONF.PROPS.INT.MASTERCLOCK / 4, function() {
            $(this).remove();
        });
    }
})
// Switch in delete screen mode
.on(CONF.EVENTS.CLICK, '#trash_empty', function() {
    if ($(this).is('.active')) {
        if (CONF.DOM.UIWINDOW.children('.cmd').find('.screen').length > 1) {
            showMessage('SELECT_SCREENS_TO_DELETE');
            CONF.DOM.UIWINDOW.children('.cmd').find('.screen').addClass('removable');
        } else {
            $(this).removeClass('active');
            showMessage('CANT_DELETE_ACTIVE_SCREEN', 'warning');
        }
    } else
        CONF.DOM.UIWINDOW.children('.cmd').find('.screen').removeClass('removable');

})
// Remove screens to delete
.on(CONF.EVENTS.CLICK, '#trash_full', function() {
    var oTrash = $(this);
    if (CONF.DOM.UIWINDOW.children('.cmd').find('.do').length > 0) {

        Apprise('REALLY_DELETE_THE_SELECTED_SCREENS'.translate(), {

            animation : 250, // Animation speed
            buttons : {
                confirm : {
                    action : function() {

                        var bSaveChanges = false;
                        var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{}},"TRASH":{}}');
                        var iTime = new Date().getTime();
                        // Iterate screens to delete and check if exist
                        $.each(CONF.DOM.UIWINDOW.children('.cmd').find('.do'), function(i, oRemove) {
                            var sScreenName = $(oRemove).find('.screen-name').text();

                            if ( typeof (CONF.BOARD.PRIVATE.SCREENS[sScreenName]) != CONF.PROPS.STRING.UD) {
                                bSaveChanges = true;
                                var sScreenName = $(oRemove).find('.screen-name').text();

                                if ( typeof (CONF.BOARD.TRASH) == CONF.PROPS.STRING.UD)
                                    CONF.BOARD.TRASH = {};

                                // Create a backup if there is any post on screen (including deleted screens)
                                if (Object.size(CONF.BOARD.PRIVATE.SCREENS[sScreenName].POSTS) > 0) {

                                    var oChange = {
                                        BY : CONF.PROPS.INT.WHO,
                                        NAME : sScreenName,
                                        POSTS : CONF.BOARD.PRIVATE.SCREENS[sScreenName]
                                    };

                                    oDiff.TRASH[iTime] = oChange;
                                    CONF.BOARD.TRASH[iTime] = oChange;

                                    // Update time if software is too fast ;-)
                                    iTime++;
                                }

                                oDiff.PRIVATE.SCREENS[sScreenName] = false;
                                delete CONF.BOARD.PRIVATE.SCREENS[sScreenName];
                            }i
                        });

                        // If changes were made start sync
                        if (bSaveChanges) {
                            CONF.COM.SOCKET.saveChanges(oDiff);
                        }

                        // Create the visual representation
                        CONF.DOM.UIWINDOW.children('.cmd').find('.do').remove();

                        CONF.DOM.UIWINDOW.children('.cmd').find('.removable').removeClass('do removable');
                        oTrash.attr('id', oTrash.attr('id').replace('full', 'empty'));
                        $('.counter').remove();

                        Apprise('close');
                    }, // Callback function
                    className : null, // Custom class name(s)
                    id : 'confirm', // Element ID
                    text : 'OK'.translate(), // Button text
                },
                abort : {
                    action : function() {
                        CONF.DOM.UIWINDOW.children('.cmd').find('.removable').removeClass('do removable');
                        oTrash.attr('id', oTrash.attr('id').replace('full', 'empty'));
                        $('.counter').remove();
                        Apprise('close');
                    },
                    id : 'abort', // Element ID
                    text : 'ABORT'.translate(), // Button text
                }
            },
            input : false, // input dialog
            override : true, // Override browser navigation while Apprise is visible
        });
    }
});
