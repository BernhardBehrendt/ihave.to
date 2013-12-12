/*global module*/
/*global __dirname*/
var CONF = null;

(function () {
    "use strict";

    CONF = {
        PORT: 3000,
        ROOT: __dirname + '/../',
        MAX_UPLOAD_SIZE: 6,
        GM_QUALITY: 80
    };
})();

module.exports = CONF;