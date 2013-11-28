/*global $*/
/*global CONF*/
/*global log*/
/*global Menu*/
/*global Template*/
/*global isMobile*/
(function () {
    "use strict";

    CONF.DOM.CMD = $('#cmd');
    // The tooltip holder (only working on desctop/pad devices)
    CONF.DOM.CMD_INFO = $('#cmdinfo');

    // The main navigation
    CONF.DOM.CMD.bind('setMainNav', function () {
        var oMenu = new Menu();
        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getPrivateMain())).toHtml());

        CONF.DOM.CMD_INFO.empty();

    });

    // The new Post navigation
    CONF.DOM.CMD.bind('setPostNav', function (event, oPostPos) {

        var oMenu = new Menu();
        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getPostMenue())).toHtml());

        // Browser wasn't ready at this point
        setTimeout(function () {
            $('textarea').data('postposition', oPostPos);
        }, 10);

        CONF.DOM.CMD_INFO.empty();
    });

    // The new Post edit navigation
    CONF.DOM.CMD.bind('setPostEditNav', function () {

        var oMenu = new Menu();

        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getPostEdit())).toHtml());


        CONF.DOM.CMD_INFO.empty();
    });

    // the screen navigation
    CONF.DOM.CMD.bind('setScreenNav', function () {
        var oMenu = new Menu();
        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getScreenMenue())).toHtml());

        CONF.DOM.CMD_INFO.empty();
    });

    // The settings navigation
    CONF.DOM.CMD.bind('setSettingsNav', function () {
        var oMenu = new Menu();
        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getSettingsMenue())).toHtml());

        CONF.DOM.CMD_INFO.empty();
    });

    // The Login navigation
    CONF.DOM.CMD.bind('setLoginNav', function () {
        var oMenu = new Menu();
        $(this).html(new Template(oMenu.getMenuCmds(oMenu.getLoginsMenue('login'))).toHtml());

        CONF.DOM.CMD_INFO.empty();
    });

    // The Tooltip navigation
    CONF.DOM.CMD.bind('setupNavinfo', function () {
        if ($(this).parent().outerWidth() > ($(this).outerWidth() + CONF.PROPS.INT.CMD_INFO_MIN_WIDTH)) {
            CONF.DOM.CMD_INFO.width(Math.floor($(window).outerWidth() - $(this).outerWidth()) - CONF.PROPS.INT.DEF_MARGIN_UNIT).addClass(CONF.PROPS.STRING.ENABLED);
            log('Enabled navigation infolayer');
        } else {
            if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
                CONF.DOM.CMD_INFO.removeClass(CONF.PROPS.STRING.ENABLED);
            }
            log('Disabled navigation infolayer');
        }
    });

    // Update Navigation on resize
    $(window).resize(function () {
        if (!isMobile() || (isMobile() && $(CONF.PROPS.STRING.BLOCKRESIZE).length === 0)) {
            CONF.DOM.CMD.trigger('setupNavinfo');
        }
    });

    CONF.DOM.CMD.trigger('setLoginNav');
    CONF.DOM.CMD.trigger('setupNavinfo');
})();