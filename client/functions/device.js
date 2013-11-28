/*global $*/
/*global CONF*/
var isMobile;
(function () {
    "use strict";
    /**
     * Detect device type and operating system (in mobile case)
     */
    isMobile = function (not) {
        var i;
        if (not === undefined) {
            not = '';
        }

        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile'];

        for (i = 0; i < mobile.length; i += 1) {
            if (mobile[i] !== not && navigator.userAgent.toLowerCase().indexOf(mobile[i]) > 0) {
                return true;
            }
        }
        return false;
    };
})();