/*global CONFIG*/
/*global require*/
/*global module*/

var ImageUpload = null;

(function () {
    "use strict";


    /**
     * Handle the image upload including the jobs which are to do for an upload (crete thumbs etc.)
     * @module Server
     * @submodule Classes
     * @class ImageUpload
     * @constructor
     */
    ImageUpload = function (oRessourceFile, response) {
        this.gm = require('gm');
        this.fs = require('fs');
        this.file = oRessourceFile;
        this.response = response;
    };

    /**
     * The instance of gm (GraphicsMagic)
     * @param gm
     * @type {Function}
     * @see http://aheckmann.github.io/gm/
     */
    ImageUpload.prototype.gm = null;

    /**
     * The instance of node file system api
     * @param fs
     * @type {Function}
     * @see http://nodejs.org/api/fs.html
     */
    ImageUpload.prototype.fs = null;

    /**
     * The reference to a unprocessed file
     * @param file
     * @type {String}
     */
    ImageUpload.prototype.file = null;


    /**
     * The reference to express response object
     * @param response
     * @type {Function}
     * @see http://expressjs.com/api.html#res.send
     */
    ImageUpload.prototype.response = null;

    /**
     * Initiate the whole image process which is required for successfully storing of the image
     * @method process
     */
    ImageUpload.prototype.process = function () {
        if (this.checkFileType()) {
            this.checkSizeLimits();
        } else {
            this.sendResponse('UNKNOWN_FILE_TYPE');
        }
    };

    /**
     * Check the uploads filesize limit which was set in CONFIG.MAX_UPLOAD_SIZE
     * @method checkSizeLimits
     */
    ImageUpload.prototype.checkSizeLimits = function () {
        var self = this;

        this.fs.stat(this.file.path, function (err, stats) {
            if (stats.size <= (CONFIG.MAX_UPLOAD_SIZE * Math.pow(1024, 2))) {
                self.optimizeAndSave();
            } else {
                self.sendResponse('FILE_TO_LARGE');
            }
        });

    };

    /**
     * Check if the file has an allowed file type  configured in CONFIG.ALLOWED_UPLOAD_FILES
     * @method checkSizeLimits
     * @return {Boolean} Is file is a valid filetype
     */
    ImageUpload.prototype.checkFileType = function (excludedFiletypes) {

        var i;
        var iIndex;
        var aLokForFileType = CONFIG.ALLOWED_UPLOAD_FILES.slice(0);

        if (excludedFiletypes !== undefined) {
            if (excludedFiletypes instanceof Array) {
                for (i = 0; i < excludedFiletypes.length; i += 1) {
                    iIndex = aLokForFileType.indexOf(excludedFiletypes[i]);

                    if (iIndex !== -1) {
                        aLokForFileType.splice(iIndex, 1);
                    }
                }
            } else if (typeof excludedFiletypes === 'string') {
                iIndex = aLokForFileType.indexOf(excludedFiletypes);

                if (iIndex !== -1) {
                    aLokForFileType.splice(iIndex, 1);
                }
            }
        }

        return (aLokForFileType.indexOf(this.file.headers['content-type']) !== -1);
    };

    /**
     * Creates the thumb of a given image and store it in given destination
     *
     * @method createThumb
     * @param {String} sTarget The origin size image path
     * @param {String} sDestination location where image should be stored
     */
    ImageUpload.prototype.createThumb = function (sTarget, sDestination) {
        var self = this;

        this.gm(sTarget).thumb(CONFIG.THUMB_WID, CONFIG.THUMB_HGT, sDestination, CONFIG.GM_QUALITY, function (error) {
            if (!error) {
                self.sendResponse(CONFIG.IMG_ROOT + '/' + sTarget.split('/').pop(), 200);
            } else {
                self.sendResponse('500 INTERNAL SERVER ERROR', 500);
            }
        });
    };

    /**
     * Optimize image based on given quality settings out of CONFIG.GM_QUALITY
     * @method optimizeAndSave
     */
    ImageUpload.prototype.optimizeAndSave = function () {
        var self = this;
        var sFileTarget = CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/' + this.file.path.split('/').pop();

        this.gm(this.file.path).quality(CONFIG.GM_QUALITY)
            .autoOrient()
            .write(sFileTarget, function (error) {
                if (!error) {
                    self.createThumb(sFileTarget, sFileTarget.replace(/(.[A-Za-z]*)$/, '.thumb$1'));
                } else {
                    self.sendResponse('500 INTERNAL SERVER ERROR', 500);
                }
            });
    };

    /**
     * Send a response to client after action was done or if an error occured
     * @param {String} message The message to tell client
     * @param {Number} code The HTTP-Status code (default 200)
     */
    ImageUpload.prototype.sendResponse = function (message, code) {

        if (code === undefined) {
            code = 200;
        }

        this.response.send(code, message);
    };

})();

module.exports = ImageUpload;