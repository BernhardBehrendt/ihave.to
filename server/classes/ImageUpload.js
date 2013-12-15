/*global require*/
/*global module*/

var ImageUpload = null;

(function () {
    ImageUpload = function (oRessourceFile, response) {

        this.gm = require('gm');
        this.fs = require('fs');
        this.file = oRessourceFile;
        this.response = response;
    };

    ImageUpload.prototype.gm = null;

    ImageUpload.prototype.fs = null;

    ImageUpload.prototype.file = null;

    ImageUpload.prototype.response = null;


    ImageUpload.prototype.process = function () {
        if (this.checkFileType()) {
            this.checkSizeLimits();
        } else {
            this.sendResponse('UNKNOWN_FILE_TYPE');
        }
    };

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

    ImageUpload.prototype.createThumb = function (sTarget, sDestination) {
        self = this;

        this.gm(sTarget).thumb(CONFIG.THUMB_WID, CONFIG.THUMB_HGT, sDestination, CONFIG.GM_QUALITY, function (error) {
            if (!error) {
                self.sendResponse(CONFIG.IMG_ROOT + '/' + sTarget.split('/').pop());
            } else {
                self.sendResponse('500 INTERNAL SERVER ERROR', 500);
            }
        });
    };

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

    ImageUpload.prototype.sendResponse = function (message, code) {

        if (code === undefined) {
            code = 200;
        }

        this.response.send(code, message);
    };

})();

module.exports = ImageUpload;