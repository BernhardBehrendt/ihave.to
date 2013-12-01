/*global $*/
/*global CONF*/
var animateColorByClass;
(function () {
    "use strict";

    /**
     * Animate a jQuery objects backgroundColor by a given class
     * The jquery ui colorplugin is required
     *
     *
     * You can get it at:
     * https://github.com/jquery/jquery-color
     *
     * @author Bernahrd Bezdek
     *
     * @param {Object} oTarget        a jQuery object to animate
     * @param {String} sFinalClass  a class containing the final backgroundColor
     * @param {Number} iDuration    the time in ms animation sould go (default 250ms)
     */
    animateColorByClass = function (oTarget, sFinalClass, iDuration) {
        var sToBackgroundColor;
        var sOldInline = oTarget.attr('style');
        var sCurBgColor = oTarget.css('backgroundColor');

        // Set the default duration value
        if (iDuration === undefined) {
            iDuration = 250;
        }

        // Prepare Target for animation
        oTarget.removeAttr('class').addClass(sFinalClass);

        // Set old BG color as inlinestyle
        sToBackgroundColor = oTarget.css('backgroundColor');

        oTarget.css('backgroundColor', sCurBgColor).animate({
            backgroundColor: sToBackgroundColor
        }, iDuration, function () {
            $(this).removeAttr('style').removeAttr('class').addClass(sFinalClass);

            if (sOldInline !== undefined) {
                $(this).attr('style', sOldInline);
            }
        });
    };
})();