/*global $*/
/*global CONF*/
/*global Post*/
/*global Board*/
/*global Screens*/
/*global Apprise*/
/*global isMobile*/
/*global Settings*/
/*global Template*/
/*global PostWindow*/
/*global Timeline*/
/*global showMessage*/
/*global Dropzone*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// General Navigation Handling
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Show navigation tooltip
(function () {
    "use strict";
    $(document).on('mouseover', 'nav#cmd > ul > li > a', function () {
        // Show navigation Information layer
        if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
            var sTranslate = $(this).attr('id').toUpperCase() + '_INFO';
            CONF.DOM.CMD_INFO.text(sTranslate.translate()).fadeIn(CONF.PROPS.INT.FAST);
        }
    })
        // Hide navigation Tooltip
        .on('mouseout', 'nav#cmd > ul > li > a', function () {
            // Hide navigation Information layer
            if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
                CONF.DOM.CMD_INFO.text('').fadeOut(CONF.PROPS.INT.FAST);
            }
        })
        // Activate button on navigation
        .on(CONF.EVENTS.CLICK, 'nav#cmd > ul > li > a', function () {
            // handle comands
            if (!$(this).hasClass(CONF.PROPS.STRING.ACTIVE)) {
                // Trigger disable currently active element
                $(this).closest('ul').find('.active').trigger(CONF.EVENTS.CLICK);

                // Make element active
                $(this).addClass(CONF.PROPS.STRING.ACTIVE);
            }

        })
        // Disable button on navigation
        .on(CONF.EVENTS.CLICK, 'nav#cmd > ul > li > a.active', function () {
            // remove navigation active state
            $(this).removeClass(CONF.PROPS.STRING.ACTIVE);
        })
        // Leave subnavigation level
        .on(CONF.EVENTS.CLICK, '#back', function () {
            CONF.DOM.CMD.trigger('setMainNav');

            CONF.DOM.CMD.find('.active').trigger(CONF.EVENTS.CLICK);
            CONF.DOM.CMD.find('#back').trigger(CONF.EVENTS.CLICK);
            CONF.DOM.UIWINDOW.trigger('hideUi');

        })


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Main Navigaton
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Open create new post view
        .on(CONF.EVENTS.CLICK, '#new_post', function (event, oSettings) {
            var oPostConfig;
            var oOrigin = false;
            var oPostPos = {
                left: 0,
                top: 0
            };

            if (oSettings === undefined) {
                oSettings = {};
            }
            if (oSettings.origin !== undefined) {
                oOrigin = oSettings.origin;

            }

            if (oSettings.left !== undefined) {
                oPostPos.left = oSettings.left;
            }

            if (oSettings.top !== undefined) {
                oPostPos.top = oSettings.top;
            }

            if (oOrigin) {
                var oPost = new Post(oOrigin);
                oPostConfig = {
                    defaultcolor: oPost.getColor(),
                    content: oPost.getContent(),
                    headline: 'EDIT_POST'.translate(),
                    origin: oPost.getId()
                };
            }

            if ($(this).hasClass('active')) {
                CONF.DOM.UIWINDOW.trigger('showUi');
                CONF.DOM.CMD.trigger('setPostNav', oPostPos);
                CONF.DOM.UIWINDOW.children('.cmd').html(new PostWindow(oPostConfig).deliver());
                var oTextarea = CONF.DOM.UIWINDOW.find('textarea');
                oTextarea.val(oTextarea.val().toString().br2nl());
                oTextarea.focus();
            }
        })

        .on(CONF.EVENTS.CLICK, '#timeline', function () {
            var sActiveScreen;
            var oTimeline;

            if ($(this).hasClass('active')) {
                sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
                CONF.DOM.UIWINDOW.trigger('showUi');
                CONF.DOM.CMD.trigger('setTimelineNav');


                oTimeline = new Timeline(CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS);
                oTimeline.getTimespan().getTimelineModel();

                // CONF.DOM.UIWINDOW.children('.cmd').html();

                CONF.DOM.UIWINDOW.children('.cmd').css({
                        margin: 0,
                        padding: 0,
                        width: 100 + '%',
                        minHeight: 100 + '%',
                        maxWidth: 'none'
                    }
                );
            }
        })

        // Sort posts chronological
        .on(CONF.EVENTS.CLICK, '#chrono', function () {

            var oNormalScreen = $('.screen');

            if ($(this).hasClass('active')) {

                oNormalScreen.addClass('tinysort').removeClass('normal');

                CONF.DOM.BOARD.trigger('tinySortBoard');
                CONF.DOM.UIWINDOW.trigger('hideUi');

                oNormalScreen.tsort("", {
                    order: "desc",
                    attr: "id"
                });

                showMessage('ORDERED_POSTS_CHRONOLOGICAL');

            } else {
                oNormalScreen.addClass('normal').removeClass('tinysort');
                CONF.DOM.BOARD.trigger('normalBoard');
            }
        })

        // Open screen view
        .on(CONF.EVENTS.CLICK, '#screen', function () {
            if ($(this).hasClass('active')) {
                CONF.DOM.UIWINDOW.trigger('showUi');
                CONF.DOM.CMD.trigger('setScreenNav');
                CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Screens().getOverview()).toHtml());
            }
        })

        // open settongs view
        .on(CONF.EVENTS.CLICK, '#settings', function () {

            if ($(this).hasClass('active')) {
                CONF.DOM.UIWINDOW.trigger('showUi');
                CONF.DOM.CMD.trigger('setSettingsNav');
                CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Settings(CONF.BOARD.SETTINGS).getTemplate()).toHtml());
            }
        })

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // New Post view
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Store created post
        .on(CONF.EVENTS.CLICK, '#store_post', function () {

            if ($(this).hasClass('active')) {
                var iTimestamp = new Date().getTime();
                var oPostWindow = $('#post-window');
                var oTextarea = oPostWindow.children('textarea');
                var sActiveScreen = CONF.DOM.BOARDPOSTS.data('activescreen');
                var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{"' + sActiveScreen + '":{"POSTS":{"' + iTimestamp + '":{}}}}}}');
                var oBackButton = $('#back');
                var oChange;
                var oColorchange;
                var oContentchange;

                if (oTextarea.val().trim().length > 0) {

                    // Modified post

                    if (oTextarea.attr('id') !== undefined && oTextarea.attr('id').indexOf('origin') === 0) {
                        var iTarget = parseInt(oTextarea.attr('id').replace('origin-', ''), 10);
                        var oSelectedColrVal = $('.color_select').data('beforechange');
                        var sPostSelectedClass = oPostWindow.find('a.selected').parent().attr('class');
                        if (typeof(iTarget) === CONF.PROPS.STRING.NUM) {

                            if (oSelectedColrVal !== undefined && sPostSelectedClass !== oSelectedColrVal) {
                                oColorchange = {
                                    BY: CONF.PROPS.INT.WHO,
                                    TGT: iTarget,
                                    ACN: "color",
                                    TO: oPostWindow.find('a.selected').parent().attr('class')
                                };
                            }

                            if (oTextarea.val().trim() !== oTextarea.data('beforechange').trim()) {
                                oContentchange = {
                                    BY: CONF.PROPS.INT.WHO,
                                    TGT: iTarget,
                                    ACN: "content",
                                    TO: oTextarea.val().trim().escapeHtml().nl2br().urlToLink()
                                };


                            }

                            // If only color changed set change color object
                            if (oColorchange !== undefined) {
                                oChange = oColorchange;
                            }

                            // If only content changed set change content object
                            if (oContentchange !== undefined) {
                                oChange = oContentchange;
                            }

                            // If both changed create color/content array
                            if (oColorchange !== undefined && oContentchange !== undefined) {
                                oChange = [oColorchange, oContentchange];
                            }

                            if (oChange === undefined) {
                                showMessage('NOTHING_CHANGED', 'error');
                                oBackButton.trigger(CONF.EVENTS.CLICK);
                            } else {
                                // Add changes to board
                                oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                                CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                            }

                        }

                        if (oChange !== undefined) {
                            showMessage('STRORE_MODIFIED_POST');
                        }
                    }
                    // New Post
                    else {
                        oChange = [
                            {
                                BY: CONF.PROPS.INT.WHO,
                                TGT: iTimestamp,
                                ACN: "color",
                                TO: oPostWindow.find('a.selected').parent().attr('class')
                            },
                            {
                                BY: CONF.PROPS.INT.WHO,
                                TGT: iTimestamp,
                                ACN: "content",
                                TO: oTextarea.val().escapeHtml().urlToLink().nl2br()
                            },
                            {
                                BY: CONF.PROPS.INT.WHO,
                                TGT: iTimestamp,
                                ACN: "position",
                                TO: [oTextarea.data('postposition').left, oTextarea.data('postposition').top]
                            }
                        ];

                        oDiff.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;
                        CONF.BOARD.PRIVATE.SCREENS[sActiveScreen].POSTS[iTimestamp] = oChange;

                        showMessage('STRORE_NEW_POST');

                    }

                    oBackButton.trigger(CONF.EVENTS.CLICK);

                    CONF.COM.SOCKET.saveChanges(oDiff);

                    var oBoard = new Board({
                        NAME: CONF.DOM.BOARDPOSTS.data('activescreen'),
                        SCREEN: CONF.BOARD.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data('activescreen')],
                        FROMTIME: false
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
        .on(CONF.EVENTS.CLICK, '#new_screen', function () {
            var sCurrentBgVal;

            if ($(this).hasClass('active')) {
                CONF.DOM.UIWINDOW.children('.cmd').prepend(new Template(new Screens().newScreen()).toHtml());

                // Attach dropzone support
                $("#dropImage").dropzone({
                    url: "/upload-wp",
                    paramName: "file", // The name that will be used to transfer the file
                    maxFilesize: CONF.PROPS.INT.MAX_UPLOAD, // MB,
                    maxFiles: 1,
                    accept: function (file, done) {
                        if (CONF.PROPS.ARRAY.ALLOWED_FILES.indexOf(file.name.substring(file.name.length - 4, file.name.length)) === -1) {

                            showMessage('FILETYPE_NOT_ALLOWED', 'error');

                        }
                        else {
                            sCurrentBgVal = $('#screen-bg-url').val().trim().split('/').pop();

                            if (sCurrentBgVal.length > 0) {
                                $.post('/unlink-wp', {image: sCurrentBgVal});
                            }

                            showMessage('UPLOADING_FILE');
                            done();

                            $('#create-screen, #abort-create-screen').fadeOut(250);
                        }
                    },
                    uploadprogress: function (file, uploaded) {
                        var oUploadProgress = $('#uploadProgress');

                        if (!oUploadProgress.hasClass('active')) {
                            oUploadProgress.addClass('active');
                            $('#dropImage').hide();
                        }

                        oUploadProgress.children('div.bar').css('width', uploaded + '%');

                        if (uploaded >= 100) {
                            oUploadProgress.removeClass('active');
                            oUploadProgress.children('div.bar').removeAttr('style');
                            $('#dropImage').show();
                        }


                    },
                    complete: function (file) {
                        this.removeFile(file);
                    },
                    success: function (response, data) {
                        showMessage('UPLOADING_FINISH');

                        $('#screen-bg-url').val(data);
                        $('#create-screen, #abort-create-screen').fadeIn(250);
                    },
                    error: function () {
                        showMessage('UPLOADING_ERROR');
                        $('#create-screen, #abort-create-screen').fadeIn(250);
                    }});


            } else {
                $('#new_screen-ui').fadeOut(CONF.PROPS.INT.MASTERCLOCK / 4, function () {
                    $(this).remove();
                });
            }
        })

        // Switch in delete screen mode
        .on(CONF.EVENTS.CLICK, '#trash_empty', function () {
            if ($(this).hasClass('active')) {
                if (CONF.DOM.UIWINDOW.children('.cmd').find('.screen').length > 1) {
                    showMessage('SELECT_SCREENS_TO_DELETE');
                    CONF.DOM.UIWINDOW.children('.cmd').find('.screen').addClass('removable');
                } else {
                    $(this).removeClass('active');
                    showMessage('CANT_DELETE_ACTIVE_SCREEN', 'warning');
                }
            } else {
                CONF.DOM.UIWINDOW.children('.cmd').find('.screen').removeClass('removable');
            }
        })

        // Remove screens to delete
        .on(CONF.EVENTS.CLICK, '#trash_full', function () {
            var oTrash = $(this);
            if (CONF.DOM.UIWINDOW.children('.cmd').find('.do').length > 0) {

                Apprise('REALLY_DELETE_THE_SELECTED_SCREENS'.translate(), {

                    animation: 250, // Animation speed
                    buttons: {
                        confirm: {
                            action: function () {
                                var sScreenName;
                                var bSaveChanges = false;
                                var oDiff = JSON.parse('{"PRIVATE":{"SCREENS":{}},"TRASH":{}}');
                                var iTime = new Date().getTime();
                                // Iterate screens to delete and check if exist
                                $.each(CONF.DOM.UIWINDOW.children('.cmd').find('.do'), function (i, oRemove) {
                                    sScreenName = $(oRemove).find('.screen-name').text();

                                    if (CONF.BOARD.PRIVATE.SCREENS[sScreenName] !== undefined) {
                                        bSaveChanges = true;
                                        sScreenName = $(oRemove).find('.screen-name').text();

                                        if (CONF.BOARD.TRASH === undefined) {
                                            CONF.BOARD.TRASH = {};
                                        }

                                        // Create a backup if there is any post on screen (including deleted screens)
                                        if (Object.keys(CONF.BOARD.PRIVATE.SCREENS[sScreenName].POSTS).length > 0) {

                                            var oChange = {
                                                BY: CONF.PROPS.INT.WHO,
                                                NAME: sScreenName,
                                                POSTS: CONF.BOARD.PRIVATE.SCREENS[sScreenName]
                                            };

                                            oDiff.TRASH[iTime] = oChange;
                                            CONF.BOARD.TRASH[iTime] = oChange;

                                            // Update time if software is too fast ;-)
                                            iTime += 1;
                                        }

                                        oDiff.PRIVATE.SCREENS[sScreenName] = false;


                                        $.post('/unlink-wp', {image: CONF.BOARD.PRIVATE.SCREENS[sScreenName].META.BG.split('/').pop()});

                                        delete CONF.BOARD.PRIVATE.SCREENS[sScreenName];
                                    }

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
                            className: 'red', // Custom class name(s)
                            id: 'confirm', // Element ID
                            text: 'OK'.translate() // Button text
                        },
                        abort: {
                            action: function () {
                                CONF.DOM.UIWINDOW.children('.cmd').find('.removable').removeClass('do removable');
                                oTrash.attr('id', oTrash.attr('id').replace('full', 'empty'));
                                $('.counter').remove();
                                Apprise('close');
                            },
                            id: 'abort', // Element ID
                            className: 'blue',
                            text: 'ABORT'.translate() // Button text
                        }
                    },
                    input: false, // input dialog
                    override: true // Override browser navigation while Apprise is visible
                });
            }
        });
})
    ();
