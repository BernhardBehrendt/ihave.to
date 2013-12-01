/*global $*/
/*global CONF*/
/*global isMobile*/
/*global CryptoJS*/
/*global Template*/
/*global Connection*/
/*global showMessage*/
var Post;
(function () {
    "use strict";

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // The ui interactions
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // General interactions
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close ui view
    $(document)
        // Handle input focuses
        .on('focusin', 'input', function () {
            $(this).data('val', $(this).val());
            $(this).val('');
        })

        // handle input blurs (focusout)
        .on('focusout', 'input', function () {
            if ($(this).val().trim().length === 0) {
                $(this).val($(this).data('val'));
            }
        })
        // Handle view aborts
        .on(CONF.EVENTS.CLICK, '.buttons > .button.cancel a', function () {
            CONF.DOM.CMD.find('.active').trigger(CONF.EVENTS.CLICK);
        })

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Login view
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Login form
        .on('keyup', '#boardname, #boardpw', function (event) {
            event.preventDefault();

            var oInput = $(this);

            if (event.keyCode === 13) {
                $(this).blur();
                if ($(this).val().length > 0 && oInput.attr('id') === 'boardname') {
                    $('#boardpw').focus();
                }

                if ($(this).attr('id') === 'boardpw') {
                    $('#do-login').trigger(CONF.EVENTS.CLICK);
                }
            }
        })

        // Open board / create board
        .on(CONF.EVENTS.CLICK, '#do-login', function () {
            var oBoardPw = $('#boardpw');
            var oBoardName = $('#boardname');
            var oLoginContent = $('#login-content');

            var sBoardName = oBoardName.val();
            var sPassword = oBoardPw.val();

            if (sPassword.length > 3 && sPassword !== 'PASSWORD'.translate() && sPassword !== sBoardName && sBoardName.length > 0 && sBoardName !== 'YOUR_PREFERED_BOARDNAME'.translate()) {

                var sHash = CryptoJS.SHA3(sBoardName + CONF.PROPS.STRING.SALT + sPassword);

                if (CONF.PROPS.OBJECT.STORAGE !== null) {
                    var sAllBoards = CONF.PROPS.OBJECT.STORAGE.getItem("boards");
                    if (sAllBoards.search(sBoardName + '-') === -1) {
                        CONF.PROPS.OBJECT.STORAGE.setItem("boards", (sAllBoards + sBoardName + '-'));
                    }

                    CONF.PROPS.OBJECT.STORAGE.setItem("lastboard", sBoardName);
                }

                $('#login-loader, #login-message').remove();
                oLoginContent.children('h1, p, #login-form').hide();
                oLoginContent.prepend(new Template({
                    IMG: {
                        ID: 'login-loader',
                        SRC: 'img/loaders/login.gif'
                    },
                    DIV: {
                        ID: 'login-message',
                        CONTENT: 'CONNECTING'.translate()
                    }
                }).toHtml());

                setTimeout(function () {
                    CONF.COM.SOCKET = new Connection('/');
                    CONF.COM.SOCKET.setEncryptionPhrase(sPassword);
                    CONF.COM.SOCKET.connect(sHash.toString());
                }, 125);

            } else {

                if (sBoardName === 'YOUR_PREFERED_BOARDNAME'.translate() || sBoardName.length === 0) {
                    showMessage('PLEASE_ENTER_A_VALID_BOARDNAME', 'error');

                    if (!isMobile()) {
                        oBoardName.focus();
                    }
                } else if (sPassword === 'PASSWORD'.translate() || sPassword.length < 4) {
                    showMessage('PLEASE_ENTER_VALID_PASSWORD', 'error');
                    if (!isMobile()) {
                        oBoardPw.focus();
                    }
                }

            }

        }
    )
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // New post view
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Select prio color for new post
        .on(CONF.EVENTS.CLICK, '#post-window > .color_select li > a', function () {
            if (!$(this).hasClass('selected')) {

                var oSelected = $(this).closest('ul').find('.selected');
                var oPostWin = $('#post-window');
                var sPostWinId = oPostWin.children('textarea').attr('id');
                var bListenChange = (sPostWinId !== undefined && sPostWinId.indexOf('origin-') !== -1);
                var oTextarea = oPostWin.children('textarea');
                var sAddClassFinal = $(this).closest('li').attr('class');
                var oColorSelect = oPostWin.children('.color_select');

                if (bListenChange && oColorSelect.data('beforechange') === undefined) {
                    oColorSelect.data('beforechange', oSelected.parent().attr('class'));
                }

                oTextarea.removeAttr('class').addClass(sAddClassFinal);

                oSelected.removeClass('selected');

                $(this).addClass('selected');

                if (bListenChange) {
                    if ($(this).parent().attr('class') !== oColorSelect.data('beforechange')) {
                        CONF.DOM.CMD.find('#store_post').removeClass('hidden');
                    }
                    else {
                        CONF.DOM.CMD.find('#store_post').addClass('hidden');

                        oTextarea.trigger('keyup');
                    }
                }
            }
        })

        // Store the initial content of textarea in edit mode
        .on('focusin', '#post-window > textarea', function () {
            if ($(this).attr('id') !== undefined) {
                if ($(this).attr('id').indexOf('origin-') !== -1) {

                    // Add Whitespace
                    $(this).val($(this).val() + ' ');

                    if ($(this).data('beforechange') === undefined) {
                        $(this).data('beforechange', $(this).val());
                        // Set cursor at the end
                        $(this).setCursorPosition($(this).val().length);
                    }
                }
            }

        })

        // Custom change detection for prevent store same taxt as on post
        .on('keyup', '#post-window > textarea', function () {
            var sId = $(this).attr('id');
            if (sId !== undefined) {
                if (sId.indexOf('origin-') !== -1) {
                    if ($(this).val().trim() !== $(this).data('beforechange').trim()) {
                        CONF.DOM.CMD.find('#store_post').removeClass('hidden');
                    } else {
                        CONF.DOM.CMD.find('#store_post').addClass('hidden');
                    }
                }
            }
        })

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Settings view
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // change priority name
        .on('keyup focusout', '.legend-item > input', function (event) {

            var sUpdatePrio = $(this).closest('.legend-item').attr('id').replace('legend-', '').toUpperCase();
            var oDiff = JSON.parse('{"SETTINGS":{"COLORS":{"' + sUpdatePrio + '":{}}}}');

            if (event.type === 'focusout' && CONF.BOARD.SETTINGS.COLORS[sUpdatePrio] !== undefined) {

                oDiff.SETTINGS.COLORS[sUpdatePrio] = $(this).val().trim();

                CONF.BOARD.SETTINGS.COLORS[sUpdatePrio] = $(this).val().trim();
                CONF.COM.SOCKET.saveChanges(oDiff);

                showMessage('CHANGED_PRIO_NAME');
            }

            if (event.type === 'keyup' && event.keyCode === 13) {
                $(this).blur();
            }
        });
})();