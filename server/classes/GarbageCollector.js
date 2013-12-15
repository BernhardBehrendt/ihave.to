var GarbageCollector = null;
(function () {
    GarbageCollector = function () {
        this.fs = require('fs');
        this.cp = require('child_process')
    };

    GarbageCollector.prototype.observe = function () {
        var self = this;

        setInterval(function () {
            console.log('Remove outdated files');

            self.observeBoards();
            self.observeUploads();

            console.log('Finished clean process');

        }, 10000);

        this.observeBoards();
        this.observeUploads();
    };

    GarbageCollector.prototype.observeBoards = function () {
        var i;
        var iAgeInDays;
        var self = this;
        var sBoardDir = CONFIG.ROOT + '../boards/';
        var sCurrentRef;

        this.fs.readdir(sBoardDir, function (error, folders) {
            if (!error) {
                if (folders instanceof Array) {
                    for (i = 0; i < folders.length; i += 1) {

                        sCurrentRef = sBoardDir + folders[i];

                        self.checkStats(sCurrentRef);
                    }
                }
            }
        });
    };

    GarbageCollector.prototype.observeUploads = function () {
        var i;
        var iAgeInDays;
        var self = this;
        var sUploadDir = CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/';
        var sCurrentRef;

        this.fs.readdir(sUploadDir, function (error, files) {
            if (!error) {
                if (files instanceof Array) {
                    for (i = 0; i < files.length; i += 1) {

                        sCurrentRef = sUploadDir + files[i];

                        self.checkStats(sCurrentRef);
                    }
                }
            }
        });
    };

    GarbageCollector.prototype.checkStats = function (sReference) {
        var self = this;
        var iDay = 86400000;

        this.fs.stat(sReference, function (error, stats) {
            if (!error) {
                iAgeInDays = (new Date().getTime() - new Date(stats.atime).getTime()) / iDay;

                if (iAgeInDays >= CONFIG.MAX_DAYS_UNUSED) {
                    if (stats.isDirectory()) {
                        self.removeFolder(sReference);
                    } else if (stats.isFile()) {
                        self.removeFile(sReference);
                    }
                }
            }
        });
    };

    GarbageCollector.prototype.removeFile = function (sFile) {
        this.fs.unlink(sFile, function (err) {
            if (err) {
                console.log(err);
            }
        });
    };

    GarbageCollector.prototype.removeFolder = function (sFolder) {
        this.cp.exec('rm -rf ' + sFolder, function (error) {
            if (error) {
                console.log(error);
            }
        });
    };
})();
module.exports = GarbageCollector;