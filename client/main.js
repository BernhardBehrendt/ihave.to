/*global $*/
/*global CONF*/
/*global Login*/
/*global Template*/
/*global setTimeout*/
/*global isMobile*/
(function () {
    "use strict";
    $(document).ready(function () {
        $.getScript('js/salt.js').success(function () {


            CONF.DOM.UIWINDOW.trigger('showUi');
            CONF.DOM.UIWINDOW.children('.cmd').html(new Template(new Login()).toHtml());

            var aBoards;
            var sLastBoard = '';

            CONF.PROPS.OBJECT.STORAGE = localStorage;

            if (CONF.PROPS.OBJECT.STORAGE.getItem("boards") === null) {
                CONF.PROPS.OBJECT.STORAGE.setItem("boards", '');

            }

            if (CONF.PROPS.OBJECT.STORAGE.getItem("lastboard") !== null) {
                sLastBoard = CONF.PROPS.OBJECT.STORAGE.getItem("lastboard");
            }

            var oBoardPw = $('#boardpw');
            var oBoardName = $('#boardname');
            var oLoginWindow = $('#login-window');

            aBoards = CONF.PROPS.OBJECT.STORAGE.getItem("boards").split('-').filter(String);

            if (sLastBoard.length > 0) {
                oBoardName.val(sLastBoard);
            }

            oBoardPw.passStrength({
                userid: "#boardname"
            });

            oBoardPw.trigger('keyup');

            oBoardName.autocomplete({
                source: aBoards
            });

            function handleScreenResize() {
                if (oLoginWindow.length > 0) {
                    // Update the title for mobile devices
                    if (isMobile()) {
                        setTimeout(function () {
                            $('title').text('MOBILE_TITLE'.translate());
                        }, 2000);
                    }
                    else {
                        oLoginWindow.css({
                            position: 'absolute',
                            left: (($(window).width() - oLoginWindow.outerWidth()) / 2),
                            top: (($(window).height() - oLoginWindow.outerHeight()) / 3)
                        });

                        $('#cmd').css({
                            float: 'none',
                            margin: '0 auto'
                        });
                    }
                }
            }

            handleScreenResize();

            $(window).resize(function () {
                handleScreenResize();
            });

        });
    });
})();

