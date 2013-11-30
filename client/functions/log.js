/*global CONF*/
/*global console*/
/**
 * A proxy to console.log
 * And it's controlled by a global config value (CONF.PROPS.BOOLEAN.LOG)
 * So logging can be disabled if your application is going into production mode
 *
 * @param {String} logdata
 */
var log;
(function () {
    "use strict";

    log = function (logdata) {
        if (console !== undefined && CONF.PROPS.BOOLEAN.LOG === true) {
            console.log(logdata);
        }
    };
})();