/*global log*/
/*global CONF*/
/*global String*/
/*global LANGUAGE*/
(function () {
    "use strict";
    /**
     * Lightweight templating "engine" for client side html rendering
     * Replaces each locastring found in sTpl variable with it's replacement
     *
     * Copyright 2012, Bernhard Bezdek
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * @param {Object} INSERTS an object with the key(s) as the locastring to replace and the value(s) for the replacement
     */
    String.prototype.toHtml = function (INSERTS) {
        var LOCA;
        var tmp = this;
        if (typeof (INSERTS) === 'object') {
            for (LOCA in INSERTS) {
                if (INSERTS.hasOwnProperty(LOCA)) {
                    var oRegExp = new RegExp('{' + LOCA + '}', 'g');
                    tmp = tmp.replace(oRegExp, INSERTS[LOCA]);
                }
            }
        }
        return tmp.replace(/{[A-Z_]*}/ig, '').toString();
    };
    /**
     * Translate a string into a language which was overgiven or defined before
     * Notice You have to define the property CONF.PROPS.STRING.LANGUAGE
     * with a language key existing in the TRANSLATIONS
     * e.g.
     *
     * LANGUAGE -> TRANSLATIONS/LANGUAGE:{
     *     GERMAN -> CONF.PROPS.STRING.LANGUAGE :{
     *         HELLO:'Hallo',
     *         WORLD:'Welt'
     *         }
     * }
     *
     * @param {Object} TRANSLATIONS An object with the translations
     * @return the translated string
     */
    String.prototype.translate = function (TRANSLATIONS) {
        if (TRANSLATIONS === undefined) {
            TRANSLATIONS = LANGUAGE;
        }

        if (typeof (TRANSLATIONS) === 'object') {
            if (CONF.PROPS.STRING.LANGUAGE === null) {
                var sDefaultLanguage = 'GERMAN';

                log('No language was set');
                log('Set language to ' + sDefaultLanguage);
                CONF.PROPS.STRING.LANGUAGE = sDefaultLanguage;
            }
        }
        if (TRANSLATIONS[CONF.PROPS.STRING.LANGUAGE] !== undefined) {
            if (TRANSLATIONS[CONF.PROPS.STRING.LANGUAGE][this] !== undefined) {
                return TRANSLATIONS[CONF.PROPS.STRING.LANGUAGE][this].toString();
            }
            else {
                if (CONF.PROPS.BOOLEAN.LOG) {
                    log('No translation found for ' + this + ' in language ' + CONF.PROPS.STRING.LANGUAGE);
                }
                return this.toString();
            }
        } else {
            log('No translation object was given');
        }
        return '';
    };
    /**
     * Detect if given string is an Url to an Image
     * @return boolean is / is not an image url
     */
    String.prototype.isImageURL = function () {
        var mRegex = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?/;

        return mRegex.test(this.toString());
    };
    /**
     * Escapes HTML into readable code text (Required if some html should be "human" readable and not parsed as HTML)
     *
     * @return the escaped html
     */
    String.prototype.escapeHtml = function () {
        return this.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };
    /**
     * Convert linebreaks into HTML Linebreaks
     * e.g. required if the linbreaks sould be kept in html code
     */
    String.prototype.br2nl = function () {
        return this.toString().replace(/<br\/>/g, "\n").replace(/<br>/g, "\n");
    };
    /**
     * Converts html linebreaks (<br/>) into linebreaks
     */
    String.prototype.nl2br = function () {
        return this.toString().replace(/\n/g, "<br/>");
    };

    /**
     * The first char to upper case
     */
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    String.prototype.urlToLink = /**
     * Converts an string into a clickable link
     * NOTCE (youtube Links are converted into an embed video)
     */
        function urlToLink() {

        var text = this;
        text = text.replace(/Www/g, 'www').replace(/WWw/g, 'www').replace(/WWW/, 'www');
        if (text.match('https://') !== null || text.match('http://') !== null || text.match('www.') !== null) {
            text = text.replace(/https:\/\//g, 'http://');
            if (text.match('www.') !== null) {
                text = text.replace(/www./g, 'http://www.');
            }
            text = text.replace(/http:\/\/http:\/\/http:\/\/http:\/\/http:\/\//g, 'http://');
            text = text.replace(/http:\/\/http:\/\/http:\/\/http:\/\//g, 'http://');
            text = text.replace(/http:\/\/http:\/\/http:\/\//g, 'http://');
            text = text.replace(/http:\/\/http:\/\//g, 'http://');
        }
        var exp = /\b((http:\/\/|https:\/\/)[\S]*)/g;

        text = text.replace(exp, function ($1) {
            var oUri = parseUri($1);
            var sReturn = '$1';
            if ($1.match('youtube.com') !== null || $1.match('youtu.be') !== null) {
                sReturn = ($1.match('&')) ? $1.substr(0, $1.search(/&/)) + ' ' + $1.substr($1.search(/&/), $1.length) : $1;
                sReturn = sReturn.replace(/&[\S]*/, '');
                sReturn = sReturn.replace('youtube.com/watch?v=', 'youtube.com/embed/');
                sReturn = sReturn.replace('youtu.be', 'youtube.com/embed/');
                sReturn = sReturn.replace(exp, '<iframe width="100%" height="114" src="$1" frameborder="0" allowfullscreen></iframe><br/>');
            } else {
                sReturn = "<a href=\"" + $1 + "\" target=\"_blank\" title=\"" + $1 + "\" style=\"background-image:url(" + (oUri.protocol + '://' + oUri.host) + "/favicon.ico)\"></a>";
            }
            return sReturn;
        });

        return text;
    };

    function parseUri(str) {
        var o = parseUri.options, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str.toString()), uri = {}, i = 14;

        while (i--) {
            uri[o.key[i]] = m[i] || "";
        }
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
            if ($1) {
                uri[o.q.name][$1] = $2;
            }
        });

        return uri;
    }

    parseUri.options = {
        strictMode: false,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
})();