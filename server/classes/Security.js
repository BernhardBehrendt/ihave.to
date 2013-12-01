/*global module*/
/*global require*/
/*global __dirname*/
var Security = null;
(function () {
    "use strict";

    Security = function () {
        this.__oFs = require('fs');
        this.__oCrypto = require('crypto');
        this.__oString = require(__dirname + '/String');
        this.__salt = ":F1E-C!^QK`c9nI:wRq r*d/v3gs&I.&BlLGC=KOyRV7>5o  G~;0|2~3R`*dQ{Y')";
    };

    Security.prototype.createVerifier = function (sBase) {
        var sBaseRev = new this.__oString(sBase).reverse();
        var sBaseTime = new this.__oString(new Date().getTime().toString()).reverse();
        var sPreHash = this.__salt + sBaseRev + sBaseTime;

        return this.__oCrypto.createHash('sha512').update(sPreHash).digest('hex');
    };

    Security.prototype.getVerifier = function (sVerifierFile) {
        return this.__oFs.readFileSync(sVerifierFile, 'UTF-8');
    };
})();
module.exports = Security;

