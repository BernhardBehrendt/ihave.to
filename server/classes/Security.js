/*global module*/
/*global require*/
/*global __dirname*/
var Security = null;
(function () {
    "use strict";

    /**
     * Handles verfifier creation and reading for security purposes
     * @module Server
     * @submodule Classes
     * @class Security
     * @constructor
     */
    Security = function () {
    };

    /**
     * Node js filesystem opertions class
     * @property fs
     * @type {Function}
     */
    Security.prototype.fs = require('fs');

    /**
     * Node js crypto library
     * @property oCrypto
     * @type {Function}
     */
    Security.prototype.oCrypto = require('crypto');

    /**
     * String functions
     *
     * @property oString
     * @type {Function}
     */
    Security.prototype.oString = require(__dirname + '/String');

    /**
     * The salst for creating the verifier
     * @type {String}
     * @private
     */
    Security.prototype._salt = ":F1E-C!^QK`c9nI:wRq r*d/v3gs&I.&BlLGC=KOyRV7>5o  G~;0|2~3R`*dQ{Y')";

    /**
     * Create the verifier by given basestring
     * @method createVerifier
     * @param {String} sBase
     * @return {String} The verifierstring
     */
    Security.prototype.createVerifier = function (sBase) {
        var sBaseRev = new this.oString(sBase).reverse();
        var sBaseTime = new this.oString(new Date().getTime().toString()).reverse();
        var sPreHash = this._salt + sBaseRev + sBaseTime;

        return this.oCrypto.createHash('sha512').update(sPreHash).digest('hex');
    };

    /**
     * Read the verifier from according file
     * @method getVerifier
     * @param {String} sVerifierFile
     * @return {String}
     */
    Security.prototype.getVerifier = function (sVerifierFile) {
        return this.fs.readFileSync(sVerifierFile, 'UTF-8');
    };
})();
module.exports = Security;

