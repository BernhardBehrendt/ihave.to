/*global module*/
/*global __dirname*/
var CONFIG = null;

(function () {
    "use strict";

    CONFIG = {
        PORT: 3000,
        ROOT: __dirname + '/../',
        MAX_UPLOAD_SIZE: 16,
        GM_QUALITY: 95,
        ALLOWED_UPLOAD_FILES: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'],
        MAX_DAYS_UNUSED: 60,
        THUMB_HGT: 64,
        THUMB_WID: 64,
        IMG_ROOT: 'upload',
        RUN_CLEANUP: 10000
    };
})();

module.exports = CONFIG;