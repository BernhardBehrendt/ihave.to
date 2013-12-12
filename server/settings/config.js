/*global module*/
/*global __dirname*/
var CONF = null;

(function () {
    "use strict";

    CONF = {
        PORT: 3000,
        ROOT: __dirname + '/../',
        MAX_UPLOAD_SIZE: 16,
        GM_QUALITY: 95
    };
})();

module.exports = CONF;