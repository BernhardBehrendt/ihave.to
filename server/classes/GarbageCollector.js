/*global CONFIG*/
/*global logging*/
var GarbageCollector = null;
(function () {
    "use strict";

    /**
     * GarbageCollector class which work cronjob like
     * and ensure that images and board filew which are outdated are deleted
     *
     * @author Bernhard Behrendt
     * @module Server
     * @submodule Classes
     * @class GarbageCollector
     * @constructor
     */
    GarbageCollector = function () {
        this.fs = require('fs');
        this.cp = require('child_process');
    };

    /**
     * Initialize observing of relevant folders (Upload Folder and board Folder) and check folders in defined times
     * @method observe
     */
    GarbageCollector.prototype.observe = function () {
        var self = this;

        setInterval(function () {
            self.observeBoards();
            self.observeUploads();

            logging.warning('Outdating board observer finished @ ' + new Date());

        }, CONFIG.RUN_CLEANUP);

        this.observeBoards();
        this.observeUploads();

        logging.warning('Outdating board observer started @ ' + new Date());
    };

    /**
     * Observe the boards folder for outdated boards
     * @method observeBoards
     */
    GarbageCollector.prototype.observeBoards = function () {
        var i;
        var self = this;
        var sBoardDir = CONFIG.ROOT + '../boards/';
        var sCurrentRef;

        this.fs.readdir(sBoardDir, function (error, folders) {
            if (!error) {
                if (folders instanceof Array) {
                    for (i = 0; i < folders.length; i += 1) {

                        sCurrentRef = sBoardDir + folders[i];

                        self.checkStats(sCurrentRef, 0);
                    }
                }
            }
        });
    };

    /**
     * Observe the Upload folder for outdated files
     * @method observeUplods
     */
    GarbageCollector.prototype.observeUploads = function () {
        var i;
        var self = this;
        var sUploadDir = CONFIG.ROOT + '../' + CONFIG.IMG_ROOT + '/';
        var sCurrentRef;

        this.fs.readdir(sUploadDir, function (error, files) {
            if (!error) {
                if (files instanceof Array) {
                    for (i = 0; i < files.length; i += 1) {

                        sCurrentRef = sUploadDir + files[i];

                        self.checkStats(sCurrentRef, 10);
                    }
                }
            }
        });
    };

    /**
     * Fetch stats of given resource and handle decision to remove that folder
     * @method checkStats
     * @param {String} sReference Path to reference
     * @param {Number} iDaysOffset Offset for deletion (CONFIG.MAX_DAYS_UNUSED+iDaysOffset)
     */
    GarbageCollector.prototype.checkStats = function (sReference, iDaysOffset) {

        var iAgeInDays;
        var self = this;
        var iDay = 86400000;    // Milliseconds in a day

        if (iDaysOffset === undefined || isNaN(iDaysOffset)) {
            iDaysOffset = 0;
        }

        this.fs.stat(sReference, function (error, stats) {
            if (!error) {

                iAgeInDays = Math.floor((new Date().getTime() - new Date(stats.mtime).getTime()) / iDay);

                if (iAgeInDays >= CONFIG.MAX_DAYS_UNUSED + iDaysOffset) {
                    if (stats.isDirectory()) {
                        self.removeFolder(sReference);
                    } else if (stats.isFile()) {
                        self.removeFile(sReference);
                    }
                }
            }
        });
    };

    /**
     * Remove a file from disk
     * @method removeFile
     * @param {String} sFile The path to file to remove
     */
    GarbageCollector.prototype.removeFile = function (sFile) {
        this.fs.unlink(sFile, function (err) {
            if (err) {
                logging.error(err);
            }
        });
    };

    /**
     * Remove a folder from disk
     * @method removeFolder
     * @param {String} sFolder The path to folder to remove
     */
    GarbageCollector.prototype.removeFolder = function (sFolder) {
        this.cp.exec('rm -rf ' + sFolder, function (error) {
            if (error) {
                logging.error(error);
            }
        });
    };
})();
module.exports = GarbageCollector;