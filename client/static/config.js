/*global LANGUAGE*/
var CONF;
(function () {
    "use strict";
    var sLang = ((navigator.language) ? navigator.language : navigator.userLanguage).toUpperCase().slice(0, 2);

    //sLang = 'EN';
    CONF = {
        BOARD: null,
        DOM: {
            CMD: null,
            CMD_INFO: null,
            BOARD: null,
            BOARDPOSTS: null,
            BOARDSCREENS: null,
            POST: null,
            SCREENS: null,
            SCREENOVERVIEW: null,
            UIMESSAGING: null,
            UILOADER: null,
            UIWINDOW: null
        },
        COM: {
            SOCKET: null
        },
        EVENTS: {
            CLICK: null,
            FORCED_CLICK: 'click'
        },
        PROPS: {
            BOOLEAN: {
                LOG: false,
                DRAGGING: false
            },
            INT: {
                MAX_UPLOAD:14,
                CMD_INFO_MIN_WIDTH: 300,
                DEF_MARGIN_UNIT: 16,
                FAST: 125,
                NORMAL: 250,
                SLOW: 500,
                SCREENWIDTH: null,
                MASTERCLOCK: 1000,
                TMP_A: null,
                TMP_B: null,
                WHO: null
            },
            STRING: {
                LANGUAGE: ( LANGUAGE[sLang] !== 'undefined') ? sLang : 'EN',
                ENABLED: 'enabled',
                ACTIVE: 'active',
                DROPON_ACTIVE: 'dropon_active',
                DROPON_HOVER: 'dropon_hover',
                INVISIBLE: 'invisible',
                UD: 'undefined',
                OBJ: 'object',
                NUM: 'number',
                SALT: '/pC|-}t@Go<gV-8Cs9]S-62lxfIfkp$XsjYqMR%5}7w(,jjoSCe1Z!.~;o?ZH%o;',
                SCREEN_DEFAULT_BG: 'http://5.45.102.42/img/wallpaper-default.jpg',
                BLOCKRESIZE: 'input[type="text"]:focus, textarea'
            },
            ARRAY: {
                COLORS: ['blue', 'turkis', 'green', 'yellow', 'orange', 'red', 'pink', 'grey', 'white'],
                ALLOWED_FILES: ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.GIF', '.svg', '.SVG']
            },
            OBJECT: {
                STORAGE: null
            }
        }
    };
})();