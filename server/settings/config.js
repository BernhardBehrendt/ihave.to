/*global module*/
/*global __dirname*/
var CONFIG = null;

(function () {
    "use strict";
    CONFIG = {
        PORT: 3000,
        PASS_REFERER: '*',           // Determine which calls are passed to uploaded data
        // (* means everything and domain without "http://www." (e.g. mydomain.com)
        // means only calls from given domain which is recommended)

        ROOT: __dirname + '/../',   // The servers root folder
        MAX_UPLOAD_SIZE: 16,        // Determine the max upload file size in MB
        MAX_DAYS_UNUSED: 60,        // Determine after how many days a non uses borad/image gets deleted by system
        IMG_ROOT: 'upload',         // The folder where image uploads are stored in
        THUMB_HGT: 128,             // The Thumb width (double size fox retina displays)
        THUMB_WID: 128,             // The Thumb width (double size fox retina displays)
        GM_QUALITY: 95,             // Set the quality level for image optimisations
        RUN_CLEANUP: 21600000,      // Means 4 times a day
        SSL_PORT: 4433,             // The port which provides SSL
        SSL_KEY: '/Users/bernhardbezdek/Desktop/ssl/key.pem',   // The absolute path to a ssl key file
        SSL_CERT: '/Users/bernhardbezdek/Desktop/ssl/cert.pem',             // The absolute path to a ssl certificates
        ALLOWED_UPLOAD_FILES: ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'] // The allowed image upload formats
    };
})();

module.exports = CONFIG;