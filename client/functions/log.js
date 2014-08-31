/*global CONF*/
/*global console*/

var log;
(function () {
    "use strict";

    /**
     * A proxy to console.log
     * And it's controlled by a global config value (CONF.PROPS.BOOLEAN.LOG)
     * So logging can be disabled if your application is going into production mode
     * @module Client
     * @submodule Funtions
     * @class log
     * @constructor
     * @param {String} logdata
     */
    log = function (logdata) {
        if (console !== undefined && CONF.PROPS.BOOLEAN.LOG === true) {
            console.log(logdata);
        }
    };
})();
