/*global module*/
/*global __dirname*/
var CONF = null;

(function () {
    "use strict";

    CONF = {
        PORT: 3000,
        ROOT: __dirname + '/../'
    };
})();

module.exports = CONF;