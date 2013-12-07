function Apprise(a, b) {
    if (void 0 === a || !a) return !1;
    var c = this, d = $('<div class="apprise-inner">'), e = $('<div class="apprise-buttons">'), f = $('<input type="text">'), g = {
        animation: 700,
        buttons: {
            confirm: {
                action: function() {
                    c.dissapear();
                },
                className: null,
                id: "confirm",
                text: "Ok"
            }
        },
        input: !1,
        override: !0
    };
    return $.extend(g, b), "close" == a ? ($cA.dissapear(), void 0) : $Apprise.is(":visible") ? (AppriseQueue.push({
        text: a,
        options: g
    }), void 0) : (this.adjustWidth = function() {
        var a = $window.width(), b = "20%", c = "40%";
        800 >= a ? (b = "90%", c = "5%") : 1400 >= a && a > 800 ? (b = "70%", c = "15%") : 1800 >= a && a > 1400 ? (b = "50%", 
        c = "25%") : 2200 >= a && a > 1800 && (b = "30%", c = "35%"), $Apprise.css("width", b).css("left", c);
    }, this.dissapear = function() {
        $Apprise.animate({
            top: "-100%"
        }, g.animation, function() {
            $overlay.fadeOut(300), $Apprise.hide(), $window.unbind("beforeunload"), $window.unbind("keydown"), 
            AppriseQueue[0] && (Apprise(AppriseQueue[0].text, AppriseQueue[0].options), AppriseQueue.splice(0, 1));
        });
    }, this.keyPress = function() {
        $window.bind("keydown", function(a) {
            27 === a.keyCode ? g.buttons.cancel ? $("#apprise-btn-" + g.buttons.cancel.id).trigger("click") : c.dissapear() : 13 === a.keyCode && (g.buttons.confirm ? $("#apprise-btn-" + g.buttons.confirm.id).trigger("click") : c.dissapear());
        });
    }, $.each(g.buttons, function(a, b) {
        if (b) {
            var c = $('<button id="apprise-btn-' + b.id + '">').append(b.text);
            b.className && c.addClass(b.className), e.append(c), c.on("click", function() {
                var a = {
                    clicked: b,
                    input: f.val() ? f.val() : null
                };
                b.action(a);
            });
        }
    }), g.override && $window.bind("beforeunload", function() {
        return "An alert requires attention";
    }), c.adjustWidth(), $window.resize(function() {
        c.adjustWidth();
    }), $Apprise.html("").append(d.append('<div class="apprise-content">' + a + "</div>")).append(e), 
    $cA = this, g.input && d.find(".apprise-content").append($('<div class="apprise-input">').append(f)), 
    $overlay.fadeIn(300), $Apprise.show().animate({
        top: "20%"
    }, g.animation, function() {
        c.keyPress();
    }), g.input && f.focus(), void 0);
}

var LANGUAGE = {
    DE: {
        MOBILE_TITLE: "iHave.to",
        POSTS: "Memos",
        SIGN_IN: "Lege Dein neues Board an.",
        LOGIN_SHORT_DESC: "Name &amp; Passwort eintragen — Fertig.",
        YOUR_PREFERED_BOARDNAME: "Boardname Deiner Wahl",
        PASSWORD: "",
        NOTICE: "Hinweis:",
        NOTICE_TEXT: "<br/>Dein Board wird zur maximalen Sicherheit auf deinem Rechner verschlüsselt. Deshalb ist es sehr wichtig, dass du dein Passwort nicht vergisst da es sonst keiner wiederherstellen kann",
        DO_LOGIN: "[Öffne | Erstelle] Dein Board",
        CONNECTING: "verbinde...",
        TO_SHORT: "zu kurz",
        WEAK: "schwach",
        GOOD: "gut",
        STRONG: "sicher",
        NOGO: "verboten",
        ENTER_YOUR_NAME: "Gebe für die Timeline deine Namen ein. (Mit ESC/ENTER kannst du diesen Schritt überspringen)",
        REALLY_DELETE_THE_SELECTED_SCREENS: "Sollen die gewählten Boards wirklich gelöscht werden?",
        CONFIRM_DELETE_POST: "Soll dieses Memo wirklich gelöscht werden? (Du kannst es in deiner Timeline immer wieder finden)",
        OK: "Ok",
        ABORT: "Abbrechen",
        BOARD_WAS_ENCRYPTED: "Dein Memoboard wurde entschlüsselt",
        WELCOME_ON_IHAVETO: "Hallo und viel Spass mit dem iHave.to Memoboard ",
        WELCOME_BACK: "Hallo zurück ",
        PLEASE_ENTER_A_VALID_PASSWORD: "Das Passwort ist zu kurz",
        SYNC_FINISHED: "Deine Änderung(en) wurden gespeichert",
        INVALID_SCREEN_NAME: "Du hast keinen Boardnamen eingegeben",
        INVALID_IMAGE_URL: "Die Bild URL enthält Fehler",
        SCREEN_WAS_CREATED: "Der Workspace wurde angelegt",
        ORDERED_POSTS_CHRONOLOGICAL: "Deine Memos wurden von neu nach alt sortiret",
        ENTERED_BOARD: "hat das Board betreten",
        LEFT_BOARD: "hat das Board verlassen",
        RESTORE_CONSISTENCY_NOW: "Das Board wird synchronisiert",
        RECEIVED_CHANGES_WICH_DONT_AFFECT_CURRENT_SCREEN: "Dein Board wurde synchronisiert",
        A_USER_DELETED_THIS_SCREEN_CHANGE_NOW: "Das Board auf dem du gerade bist wurde gelöscht.",
        REMOVE_POST: "Das Memo wurde gelöscht",
        CANT_DELETE_ACTIVE_SCREEN: "Boards auf denen du gerade aktiv bist können nicht gelösct werden",
        SELECT_SCREENS_TO_DELETE: "Wähle die zu löschenden Boards aus",
        RECONNECTING: "Verbindung wird wiederhergestellt",
        CANT_STORE_EMPTY_POST: "Es können keine leeren Memos gespeichert werden",
        CHANGED: "änderte",
        POSTS_POSITION: "änderte die Position eines Memos",
        POSTS_CONTENT: "änderte den Inhalt eines Memos",
        POSTS_COLOR: "änderte die Farbe eines Memos",
        DELETED_POST: "hat ein Memo gelöscht",
        STRORE_NEW_POST: "Memo wurde angelegt",
        STRORE_MODIFIED_POST: "Memo wurde gespeichert",
        NOTHING_CHANGED: "Es wurden keine Änderungen vorgenommen",
        SCREEN_ALREADY_EXISTS: "existiert bereits",
        IOS_ERROR_OPENWINDOW: "In der Webbapp kannst du keine neuen Tabs öffnen",
        CHANGED_PRIO_NAME: "Farbbedeeutung wurde geändert",
        WAS_ADDED_TO_BOARD: "wurde zum Board hinzugefügt",
        PLEASE_ENTER_VALID_PASSWORD: "Dein Passwort ist zu kurz",
        HOME_INFO: "Hier gehts zur Starseite von iHave.to",
        LOGIN_INFO: "Hier kannst du auf deine Memoboard zugreifen bzw. ein neues erstellen",
        HELP_INFO: "Hier erfährst du wie iHave.to funktioniert",
        NEW_POST_INFO: "Hier kannst du einen neuen Memos anlegen",
        CHRONO_INFO: "Hier kannst du deine Memos von neu nach alt sortieren",
        SCREEN_INFO: "Hier kannst du weitere Boards anlegen & aufrufen",
        SETTINGS_INFO: "Hier kannst du die den Memofarben Bedeutungen zuweisen",
        SYSTEM_INFO: "iHave.to ist ein Projekt von Bernhard Bezdek &copy; 2013",
        STORE_POST_INFO: "Hier wird das neue/bearbeitete Memo gespeichert",
        CANCEL_INFO: "Hier kannst du den aktuellen Vorgang abbrechen",
        BACK_INFO: "Hier gehts zurück zu den Memos",
        NEW_SCREEN_INFO: "Hier kannst du ein neues Board anlegen",
        WORKSPACE: "Arbeitsfläche",
        TRASH_EMPTY_INFO: "Hier kannst du deine alten Board löschen",
        TRASH_FULL_INFO: "Hier kannst deine zum löschen gewählten Board(s) löschen",
        TIMELINE_INFO: "Hier kannst du alle Änderungen an deinem Board nachvollziehen",
        ENCRYPT_SELECTED_SCREEN: "Das Board wird entschlüsselt.",
        POST_WITH_COLOR_BLUE: "Blaue Memos stehen für:",
        POST_WITH_COLOR_TURKIS: "Türkise Memos stehen für:",
        POST_WITH_COLOR_GREEN: "Grüne Memos stehen für:",
        POST_WITH_COLOR_YELLOW: "Gelbe Memos stehen für:",
        POST_WITH_COLOR_ORANGE: "Orangene Memos stehen für:",
        POST_WITH_COLOR_RED: "Rote Memos stehen für:",
        POST_WITH_COLOR_PINK: "Pinke Memos stehen für:",
        POST_WITH_COLOR_GREY: "Graue Memos stehen für:",
        POST_WITH_COLOR_WHITE: "Weiße Memos stehen für:",
        BLUE: "Blau",
        TURKIS: "Türkis",
        GREEN: "Grün",
        YELOW: "Gelb",
        ORANGE: "Orange",
        RED: "Rot",
        PINK: "Pink",
        GREY: "Grau",
        WHITE: "Weiß",
        IS_MARKED_AS: "steht für",
        NEW_SCREEN_NAME: "Name des neuen Boards",
        NEW_BG_URL: "URL zu deinem Hintergrundbild",
        SET_PRIOTITIES_HERE: "Hier kannst du den Farben eine Bedeutung geben",
        DESCRIPTION_PRIORITIES_SETTINGS: "Wenn du den Farben Namen gibst fällt es dir leichter deine Memos zu sortieren und strukturieren",
        NEW_POST: "Neues Memo anlegen",
        EDIT_POST: "Memo bearbeiten",
        EXAMPLE_TEXT: 'Das ist das erste Memo auf deinem Board.<br>Lege deine Notizen, Links  <a style="background-image:url(http://www.iHave.to/favicon.ico)" title="http://www.iHave.to" target="_blank" href="http://www.iHave.to"></a> oder youtube Videos hier ab.<br><br>Viel Spass mit iHave.to.<br><br>Bernhard Bezdek'
    },
    EN: {
        MOBILE_TITLE: "iHave.to",
        POSTS: "Memos",
        SIGN_IN: "Create your new Board",
        LOGIN_SHORT_DESC: "Choose name and password and start your memo taking",
        YOUR_PREFERED_BOARDNAME: "Your prefered boardname",
        PASSWORD: "",
        NOTICE: "Notice:",
        NOTICE_TEXT: "<br/>To ensure your privacy the board is en/decrypted on your local device. So it's very important you never loose your login data because it's impossible to restore your board.",
        DO_LOGIN: "[open | create] your board",
        CONNECTING: "connect...",
        TO_SHORT: "to short",
        WEAK: "weak",
        GOOD: "good",
        STRONG: "safe",
        NOGO: "forbidden",
        ENTER_YOUR_NAME: "Enter your name for best timeline support (Press ESC/ENTER to skip this step)",
        REALLY_DELETE_THE_SELECTED_SCREENS: "Really delete selected boards?",
        CONFIRM_DELETE_POST: "Really delete this memo? (you have also access after deletion via timeline)",
        OK: "Ok",
        ABORT: "Cancel",
        BOARD_WAS_ENCRYPTED: "Your memoboard was encrypted",
        WELCOME_ON_IHAVETO: "Have fun using iHave.to",
        WELCOME_BACK: "Welcome back",
        PLEASE_ENTER_A_VALID_PASSWORD: "The password is to short",
        SYNC_FINISHED: "Stored changes",
        INVALID_SCREEN_NAME: "Missing boardname",
        INVALID_IMAGE_URL: "Image url is invalid",
        SCREEN_WAS_CREATED: "Workspace was created",
        ORDERED_POSTS_CHRONOLOGICAL: "Your memos were ordered in descending order",
        ENTERED_BOARD: "entered Board",
        LEFT_BOARD: "left Board",
        RESTORE_CONSISTENCY_NOW: "synchronizing Board",
        RECEIVED_CHANGES_WICH_DONT_AFFECT_CURRENT_SCREEN: "Board was synchronized",
        A_USER_DELETED_THIS_SCREEN_CHANGE_NOW: "The board you're staying on was deleted ",
        REMOVE_POST: "Memo was removed",
        CANT_DELETE_ACTIVE_SCREEN: "You cannot delete Boards you're actually staying on",
        SELECT_SCREENS_TO_DELETE: "Choose board(s) to delete",
        RECONNECTING: "Reconnecting",
        CANT_STORE_EMPTY_POST: "You can't create empty memos",
        CHANGED: "changed",
        POSTS_POSITION: "changed memo position",
        POSTS_CONTENT: "changed memo text",
        POSTS_COLOR: "changed memo color",
        DELETED_POST: "deleted a memo",
        STRORE_NEW_POST: "Memo was created",
        STRORE_MODIFIED_POST: "Memo was stored",
        NOTHING_CHANGED: "Noting was changed",
        SCREEN_ALREADY_EXISTS: "already exists",
        IOS_ERROR_OPENWINDOW: "In webapp you can't open links in new window",
        CHANGED_PRIO_NAME: "Colormeaning was changed",
        WAS_ADDED_TO_BOARD: "was added to board",
        PLEASE_ENTER_VALID_PASSWORD: "Password to short",
        HOME_INFO: "Home",
        LOGIN_INFO: "Here you can create and/or access your memoboard",
        HELP_INFO: "Here yo get information abot iHave.to is working",
        NEW_POST_INFO: "Create your new memo here",
        CHRONO_INFO: "Order your memo by date descending here",
        SCREEN_INFO: "Create new subboards here",
        SETTINGS_INFO: "Here you can change the colormeaning",
        SYSTEM_INFO: "iHave.to is was found by Bernhard Bezdek &copy; 2013",
        STORE_POST_INFO: "Here you can save changes made on a memo",
        CANCEL_INFO: "Here you can abort your current modification",
        BACK_INFO: "Back to memo view",
        NEW_SCREEN_INFO: "Create your new subboard here",
        WORKSPACE: "Workspace",
        TRASH_EMPTY_INFO: "Delete your old Boards here",
        TRASH_FULL_INFO: "Remove marked sub boards finally here",
        TIMELINE_INFO: "You can open a full qualified timeline here for current board",
        ENCRYPT_SELECTED_SCREEN: "Board was decrypted",
        POST_WITH_COLOR_BLUE: "Blue means:",
        POST_WITH_COLOR_TURKIS: "Turkis mens:",
        POST_WITH_COLOR_GREEN: "Green means:",
        POST_WITH_COLOR_YELLOW: "Yellow means:",
        POST_WITH_COLOR_ORANGE: "Orange means:",
        POST_WITH_COLOR_RED: "Red means:",
        POST_WITH_COLOR_PINK: "Pink means:",
        POST_WITH_COLOR_GREY: "Grey means:",
        POST_WITH_COLOR_WHITE: "White means:",
        BLUE: "Blue",
        TURKIS: "Turkis",
        GREEN: "Green",
        YELOW: "Yellow",
        ORANGE: "Orange",
        RED: "Red",
        PINK: "Pink",
        GREY: "Grey",
        WHITE: "White",
        IS_MARKED_AS: "marked as",
        NEW_SCREEN_NAME: "New boards name",
        NEW_BG_URL: "url to your custom background image",
        SET_PRIOTITIES_HERE: "Here you can assign a meaning to colors",
        DESCRIPTION_PRIORITIES_SETTINGS: "For a better transparency you can give each color a meaning",
        NEW_POST: "Create a new Memo",
        EDIT_POST: "Modify an existing memo",
        EXAMPLE_TEXT: 'This is the first Memo on your board.<br>Place your notices, links  <a style="background-image:url(http://www.iHave.to/favicon.ico)" title="http://www.iHave.to" target="_blank" href="http://www.iHave.to"></a> or youtube videos here<br><br>Have fun.<br><br>Yours Bernhard Bezdek'
    }
}, CONF;

!function() {
    "use strict";
    var a = (navigator.language ? navigator.language : navigator.userLanguage).toUpperCase().slice(0, 2);
    CONF = {
        BOARD: null,
        DOM: {
            CMD: null,
            CMD_INFO: null,
            BOARD: null,
            BOARDPOSTS: null,
            BOARDSCREENS: null,
            POST: null,
            SCREENS: null,
            SCREENOVERVIEW: null,
            UIMESSAGING: null,
            UILOADER: null,
            UIWINDOW: null
        },
        COM: {
            SOCKET: null
        },
        EVENTS: {
            CLICK: null,
            FORCED_CLICK: "click"
        },
        PROPS: {
            BOOLEAN: {
                LOG: !1,
                DRAGGING: !1
            },
            INT: {
                CMD_INFO_MIN_WIDTH: 300,
                DEF_MARGIN_UNIT: 16,
                FAST: 125,
                NORMAL: 250,
                SLOW: 500,
                SCREENWIDTH: null,
                MASTERCLOCK: 1e3,
                TMP_A: null,
                TMP_B: null,
                WHO: null
            },
            STRING: {
                LANGUAGE: "undefined" !== LANGUAGE[a] ? a : "EN",
                ENABLED: "enabled",
                ACTIVE: "active",
                DROPON_ACTIVE: "dropon_active",
                DROPON_HOVER: "dropon_hover",
                INVISIBLE: "invisible",
                UD: "undefined",
                OBJ: "object",
                NUM: "number",
                SALT: "/pC|-}t@Go<gV-8Cs9]S-62lxfIfkp$XsjYqMR%5}7w(,jjoSCe1Z!.~;o?ZH%o;",
                SCREEN_DEFAULT_BG: "http://212.224.109.247/img/welcome-d.jpg",
                BLOCKRESIZE: 'input[type="text"]:focus, textarea'
            },
            ARRAY: {
                COLORS: [ "blue", "turkis", "green", "yellow", "orange", "red", "pink", "grey", "white" ]
            },
            OBJECT: {
                STORAGE: null
            }
        }
    };
}(), function() {
    "use strict";
    function a(b) {
        for (var c = a.options, d = c.parser[c.strictMode ? "strict" : "loose"].exec(b.toString()), e = {}, f = 14; f--; ) e[c.key[f]] = d[f] || "";
        return e[c.q.name] = {}, e[c.key[12]].replace(c.q.parser, function(a, b, d) {
            b && (e[c.q.name][b] = d);
        }), e;
    }
    "undefined" == typeof String && (String = {}), String.prototype.toHtml = function(a) {
        var b, c = this;
        if ("object" == typeof a) for (b in a) if (a.hasOwnProperty(b)) {
            var d = new RegExp("{" + b + "}", "g");
            c = c.replace(d, a[b]);
        }
        return c.replace(/{[A-Z_]*}/gi, "").toString();
    }, String.prototype.translate = function(a) {
        if (void 0 === a && (a = LANGUAGE), "object" == typeof a && null === CONF.PROPS.STRING.LANGUAGE) {
            var b = "GERMAN";
            log("No language was set"), log("Set language to " + b), CONF.PROPS.STRING.LANGUAGE = b;
        }
        return void 0 !== a[CONF.PROPS.STRING.LANGUAGE] ? void 0 !== a[CONF.PROPS.STRING.LANGUAGE][this] ? a[CONF.PROPS.STRING.LANGUAGE][this].toString() : (CONF.PROPS.BOOLEAN.LOG && log("No translation found for " + this + " in language " + CONF.PROPS.STRING.LANGUAGE), 
        this.toString()) : (log("No translation object was given"), "");
    }, String.prototype.isImageURL = function() {
        var a = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?/;
        return a.test(this.toString());
    }, String.prototype.escapeHtml = function() {
        return this.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }, String.prototype.br2nl = function() {
        return this.toString().replace(/<br\/>/g, "\n").replace(/<br>/g, "\n");
    }, String.prototype.nl2br = function() {
        return this.toString().replace(/\n/g, "<br/>");
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }, String.prototype.urlToLink = function() {
        var b = this;
        b = b.replace(/Www/g, "www").replace(/WWw/g, "www").replace(/WWW/, "www"), (null !== b.match(/https:\/\//) || null !== b.match(/http:\/\//) || null !== b.match(/www\./)) && (b = b.replace(/https:\/\//g, "http://"), 
        null !== b.match(/www\./) && (b = b.replace(/www./g, "http://www.")), b = b.replace(/http:\/\/http:\/\/http:\/\/http:\/\/http:\/\//g, "http://"), 
        b = b.replace(/http:\/\/http:\/\/http:\/\/http:\/\//g, "http://"), b = b.replace(/http:\/\/http:\/\/http:\/\//g, "http://"), 
        b = b.replace(/http:\/\/http:\/\//g, "http://"));
        var c = /\b((http:\/\/|https:\/\/)[\S]*)/g;
        return b = b.replace(c, function(b) {
            var d = a(b), e = "$1";
            return null !== b.match("http://youtube.com") || null !== b.match("http://youtu.be") || null !== b.match("http://www.youtube.com") || null !== b.match("http://www.youtu.be") ? (e = b.match("&") ? b.substr(0, b.search(/&/)) + " " + b.substr(b.search(/&/), b.length) : b, 
            e = e.replace(/&[\S]*/, ""), e = e.replace("youtube.com/watch?v=", "youtube.com/embed/"), 
            e = e.replace("youtu.be", "youtube.com/embed/"), (0 === b.indexOf("http://youtube.com") || 0 === b.indexOf("http://www.youtube.com") || 0 === b.indexOf("http://youtu.be") || 0 === b.indexOf("http://www.youtu.be")) && (e = e.replace(c, '<iframe width="100%" height="114" src="$1" frameborder="0" allowfullscreen></iframe><br/>'))) : e = '<a href="' + b + '" target="_blank" title="' + b + '" style="background-image:url(' + (d.protocol + "://" + d.host) + '/favicon.ico)"></a>', 
            e;
        });
    }, a.options = {
        strictMode: !1,
        key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
}();

var Board;

!function() {
    "use strict";
    Board = function(a) {
        this._oScreen = a, this._setDeleted = {}, this._oScreenPost = {};
    }, Board.prototype.iFromTime = !1, Board.prototype._oScreen = null, Board.prototype._oScreen = null, 
    Board.prototype._oScreenPost = null, Board.prototype.getTemplate = function() {
        return this.setBackground(), {
            DIV: this._createTemplate()
        };
    }, Board.prototype._createTemplate = function() {
        var a, b, c, d, e, f = [];
        if (void 0 !== this._oScreen.SCREEN.POSTS) {
            c = this._oScreen.SCREEN.POSTS;
            for (d in c) if (c.hasOwnProperty(d)) if (b = c[d], b instanceof Array) for (var g = 0; g < b.length; g += 1) this._addPost(this._createPost(b[g])); else this._addPost(this._createPost(b));
        }
        e = this._oScreenPost;
        for (a in e) if (e.hasOwnProperty(a)) {
            if (this._setDeleted[a] === !0) {
                delete e[a];
                continue;
            }
            f.push(this._oScreenPost[a]);
        }
        return f;
    }, Board.prototype._createPost = function(a) {
        var b = !1, c = "", d = "", e = !1, f = !1;
        return void 0 !== a.TGT && (e = a.TGT), "color" === a.ACN && (d = a.TO), "content" === a.ACN && (b = a.TO), 
        "position" === a.ACN && (f = "left:" + a.TO[0] + "%; top:" + a.TO[1] + "%;"), "deleted" === a.ACN && (c = "deleted"), 
        {
            ID: e,
            CLASSES: "post " + d + c,
            STYLE: f,
            CONTENT: {
                DIV: {
                    CLASSES: "content",
                    CONTENT: {
                        P: {
                            CONTENT: b
                        }
                    }
                }
            }
        };
    }, Board.prototype._addPost = function(a) {
        void 0 === this._oScreenPost[a.ID] ? this._oScreenPost[a.ID] = a : (a.CONTENT.DIV.CONTENT.P.CONTENT !== !1 && (this._oScreenPost[a.ID].CONTENT.DIV.CONTENT.P.CONTENT = a.CONTENT.DIV.CONTENT.P.CONTENT, 
        void 0 !== this._setDeleted[a.ID] && delete this._setDeleted[a.ID]), a.CLASSES.length > 5 && (-1 !== a.CLASSES.indexOf("deleted") ? this._setDeleted[a.ID] = !0 : (this._oScreenPost[a.ID].CLASSES = a.CLASSES, 
        void 0 !== this._setDeleted[a.ID] && delete this._setDeleted[a.ID])), a.STYLE !== !1 && void 0 !== this._oScreenPost[a.ID] && (this._oScreenPost[a.ID].STYLE = a.STYLE, 
        void 0 !== this._setDeleted[a.ID] && delete this._setDeleted[a.ID]));
    }, Board.prototype.setBackground = function() {
        $("body").css("background-image", "url(" + this._oScreen.SCREEN.META.BG + ")");
    };
}();

var Buttons;

!function() {
    "use strict";
    Buttons = function(a, b) {
        var c, d = [];
        if (void 0 === b && (b = "slim"), void 0 !== a) for (c = 0; c < a.length; c += 1) d[c] = {
            CLASSES: "button " + a[c].TYPE,
            CONTENT: {
                LINK: {
                    ID: a[c].ID,
                    URL: "#",
                    CONTENT: a[c].LABEL.translate()
                }
            }
        };
        return {
            UL: {
                CLASSES: "buttons " + b,
                CONTENT: {
                    LI: d
                }
            }
        };
    };
}();

var Connection;

!function() {
    "use strict";
    Connection = function() {
        this.socket = io.connect(), this.socket.on("disconnect", function() {
            showMessage("RECONNECTING".translate(), "error"), $(".screen, #cmd").empty(), CONF.COM.SOCKET.connect();
        });
    }, Connection.prototype.socket = null, Connection.prototype._encryption = null, 
    Connection.prototype._data = null, Connection.prototype._verifier = null, Connection.prototype._board = null, 
    Connection.prototype.connect = function(a) {
        var b = this;
        this._board = a, void 0 !== this._board ? (this.socket.emit("connect", this._board), 
        this.socket.on("connected", function(a) {
            $("#cmd").removeAttr("style"), b.setData(a), b.handleData();
        })) : window.location.reload();
    }, Connection.prototype.initBroadcast = function(a) {
        var b = this;
        this.socket.on("enter-" + a, function(a) {
            showMessage(b.decrypt(a) + " " + "ENTERED_BOARD".translate());
        }), this.socket.on("goodbye-" + a, function(a) {
            showMessage(b.decrypt(a) + " " + "LEFT_BOARD".translate(), "error");
        }), this.socket.on("bc-" + a, function(a) {
            var c, d, e, f, g, h = JSON.parse(CONF.COM.SOCKET.decrypt(a));
            if ($.extend(!0, CONF.BOARD, h), g = CONF.DOM.BOARDPOSTS.data("activescreen"), void 0 !== h.PRIVATE && void 0 !== h.PRIVATE.SCREENS) {
                for (e in CONF.BOARD.PRIVATE.SCREENS) CONF.BOARD.PRIVATE.SCREENS.hasOwnProperty(e) && !CONF.BOARD.PRIVATE.SCREENS[e] && delete CONF.BOARD.PRIVATE.SCREENS[e];
                if (void 0 !== h.PRIVATE.SCREENS[g]) if (void 0 !== CONF.BOARD.PRIVATE.SCREENS[g]) {
                    var i = !1;
                    for (d in h.PRIVATE.SCREENS[g].POSTS) if (h.PRIVATE.SCREENS[g].POSTS.hasOwnProperty(d)) {
                        var j = h.PRIVATE.SCREENS[g].POSTS[d];
                        i = b.updateScreen(j);
                    }
                    i || (c = CONF.BOARD.PRIVATE.SCREENS[g], showMessage("RESTORE_CONSISTENCY_NOW"), 
                    k = new Board({
                        NAME: g,
                        SCREEN: c,
                        FROMTIME: !1
                    }), CONF.DOM.BOARDSCREENS.html(new Template(k.getTemplate()).toHtml()), CONF.DOM.BOARD.trigger("uiBoard"));
                } else {
                    f = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0], CONF.DOM.BOARDPOSTS.data("activescreen", f), 
                    c = CONF.BOARD.PRIVATE.SCREENS[f], showMessage("A_USER_DELETED_THIS_SCREEN_CHANGE_NOW"), 
                    $("#back, .mobile").trigger("click"), 1 === $("#edit").length && CONF.DOM.CMD.trigger("setMainNav");
                    var k = new Board({
                        NAME: f,
                        SCREEN: c,
                        FROMTIME: !1
                    });
                    CONF.DOM.BOARDSCREENS.html(new Template(k.getTemplate()).toHtml()), CONF.DOM.BOARD.trigger("uiBoard");
                } else showMessage("RECEIVED_CHANGES_WICH_DONT_AFFECT_CURRENT_SCREEN");
            }
            if (void 0 !== h.USERS) {
                var l = Object.keys(h.USERS)[0];
                showMessage(l + " " + "WAS_ADDED_TO_BOARD".translate());
            }
        });
    }, Connection.prototype.updateScreen = function(a) {
        var b, c, d, e, f, g = !1;
        if (a instanceof Array) for (b = 0; b < a.length; b += 1) g ? this.updateScreen(a[b]) : g = this.updateScreen(a[b]); else if (void 0 !== a.TGT && (d = $("#" + a.TGT), 
        e = "", 1 === d.length)) {
            g = !0, "position" === a.ACN && ($(d).animate({
                left: a.TO[0] + "%",
                top: a.TO[1] + "%"
            }, 750), e = "POSTS_POSITION"), "content" === a.ACN && ($(d).find(".content").children("p").html(a.TO), 
            e = "POSTS_CONTENT"), "deleted" === a.ACN && ($(d).fadeOut(250, function() {
                $(this).remove();
            }), e = "DELETED_POST"), "color" === a.ACN && (f = Object.keys(CONF.BOARD.SETTINGS.COLORS).join(" ").toLowerCase(), 
            f = f.replace(a.TO, ""), $(d).removeClass(f).addClass(a.TO), e = "POSTS_COLOR");
            for (c in CONF.BOARD.USERS) if (CONF.BOARD.USERS.hasOwnProperty(c) && CONF.BOARD.USERS[c] === a.BY) break;
            showMessage(c + " " + e.translate(), "warning");
        }
        return g;
    }, Connection.prototype.handleData = function() {
        var a, b, c, d, e;
        -1 === this.getData().indexOf("{") ? (CONF.BOARD = JSON.parse(this.decrypt()), this.initBroadcast(CONF.BOARD.META.VERIFIER), 
        window.lock || this.personalize(), CONF.DOM.UIWINDOW.trigger("hideUi"), CONF.DOM.CMD.trigger("setMainNav"), 
        showMessage("BOARD_WAS_ENCRYPTED"), null !== CONF.DOM.BOARDPOSTS && (a = CONF.DOM.BOARDPOSTS.data("activescreen")), 
        b = Object.keys(CONF.BOARD.PRIVATE.SCREENS)[0], void 0 !== a && void 0 !== CONF.BOARD.PRIVATE.SCREENS[a] && (b = a), 
        CONF.DOM.BOARD.trigger("setupBoard", {
            NAME: b,
            SCREEN: CONF.BOARD.PRIVATE.SCREENS[b],
            FROMTIME: !1
        })) : (c = JSON.parse(this.getData()), d = "WORKSPACE".translate(), e = new Date().getTime(), 
        c.PRIVATE.SCREENS[d] = {
            META: {
                BG: CONF.PROPS.STRING.SCREEN_DEFAULT_BG
            },
            POSTS: {}
        }, c.PRIVATE.SCREENS[d].POSTS[e] = [ {
            TGT: e,
            ACN: "color",
            TO: "blue"
        }, {
            TGT: e,
            ACN: "content",
            TO: "EXAMPLE_TEXT".translate()
        }, {
            TGT: e,
            ACN: "position",
            TO: [ 10, 10 ]
        } ], CONF.COM.SOCKET.setData(JSON.stringify(c)), this.setVerifier(c.META.VERIFIER), 
        this.socket.emit(this.getVerifier(), this.encrypt().toString()), $("#do-login").trigger(CONF.EVENTS.CLICK));
    }, Connection.prototype.saveChanges = function(a) {
        this.setData(JSON.stringify(CONF.BOARD)), this.socket.emit(CONF.BOARD.META.VERIFIER, this.encrypt().toString()), 
        void 0 !== a && this.socket.emit("sync", this.encrypt(JSON.stringify(a)).toString());
    }, Connection.prototype.setEncryptionPhrase = function(a) {
        this._encryption = CryptoJS.SHA3(a).toString();
    }, Connection.prototype.getEncryptionPhrase = function() {
        return this._encryption;
    }, Connection.prototype.encrypt = function(a) {
        var b = a;
        return void 0 === b && (b = this.getData()), CryptoJS.AES.encrypt(b, this.getEncryptionPhrase());
    }, Connection.prototype.decrypt = function(a) {
        var b = null, c = !1, d = a;
        for (void 0 === d && (d = this.getData()); !c; ) try {
            b = CryptoJS.AES.decrypt(d, this.getEncryptionPhrase()).toString(CryptoJS.enc.Utf8), 
            c = !0;
        } catch (e) {
            c = !1;
        }
        return b;
    }, Connection.prototype.setData = function(a) {
        this._data = a;
    }, Connection.prototype.getData = function() {
        return this._data;
    }, Connection.prototype.setVerifier = function(a) {
        this._verifier = a;
    }, Connection.prototype.getVerifier = function() {
        return this._verifier;
    }, Connection.prototype.personalize = function() {
        var a = this._board, b = CONF.PROPS.OBJECT.STORAGE.getItem(a), c = this;
        if (null === b) window.lock = !0, Apprise("ENTER_YOUR_NAME".translate(), {
            animation: 250,
            buttons: {
                confirm: {
                    action: function(b) {
                        var d, e, f;
                        $("input").blur(), delete window.lock, d = null !== b.input && b.input.length > 0 ? b.input : "Anonymous", 
                        CONF.PROPS.OBJECT.STORAGE.setItem(a, d), void 0 === CONF.BOARD.USERS[d] && (e = Object.keys(CONF.BOARD.USERS).length, 
                        f = JSON.parse('{"USERS":{}}'), f.USERS[d] = e, CONF.BOARD.USERS[d] = e, c.saveChanges(f)), 
                        CONF.PROPS.INT.WHO = CONF.BOARD.USERS[d], Apprise("close");
                    },
                    className: null,
                    id: "confirm",
                    text: "OK".translate()
                }
            },
            input: !0,
            override: !0
        }); else {
            var d;
            if (void 0 === CONF.BOARD.USERS[b]) CONF.PROPS.OBJECT.STORAGE.removeItem(a), this.personalize(); else for (d in CONF.BOARD.USERS) if (CONF.BOARD.USERS.hasOwnProperty(d) && b === d) {
                CONF.PROPS.INT.WHO = CONF.BOARD.USERS[d], CONF.COM.SOCKET.socket.emit("enter", this.encrypt(b).toString());
                break;
            }
        }
    };
}();

var Login;

!function() {
    "use strict";
    Login = function() {
        return {
            DIV: {
                ID: "login-window",
                CONTENT: {
                    DIV: {
                        ID: "login-content",
                        CONTENT: {
                            H: {
                                NO: 1,
                                CONTENT: "SIGN_IN".translate()
                            },
                            P: {
                                CONTENT: "LOGIN_SHORT_DESC".translate()
                            },
                            DIV: {
                                ID: "login-form",
                                CONTENT: {
                                    INPUT: [ {
                                        TYPE: "text",
                                        NAME: "boardname",
                                        ID: "boardname",
                                        VALUE: "YOUR_PREFERED_BOARDNAME".translate()
                                    }, {
                                        TYPE: "password",
                                        NAME: "boardpw",
                                        ID: "boardpw",
                                        VALUE: "PASSWORD".translate()
                                    } ],
                                    PIPE: {
                                        CONTENT: new Buttons([ {
                                            LABEL: "DO_LOGIN",
                                            TYPE: "ok",
                                            ID: "do-login"
                                        } ], "xwide")
                                    },
                                    SPAN: {
                                        CLASSES: "notice",
                                        CONTENT: {
                                            STRONG: {
                                                CONTENT: "NOTICE".translate()
                                            },
                                            PIPE: {
                                                CONTENT: "NOTICE_TEXT".translate()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    };
}();

var Menu;

!function() {
    "use strict";
    Menu = function() {}, Menu.prototype.getMenuCorpus = function() {
        return {
            UL: {
                CONTENT: {
                    LI: null
                }
            }
        };
    }, Menu.prototype.getMenuCmds = function(a) {
        var b = this.getMenuCorpus();
        return a[a.length] = {
            CLASSES: "fixline",
            AFTER: " "
        }, b.UL.CONTENT.LI = a, b;
    }, Menu.prototype.getLoginsMenue = function(a) {
        var b, c = [], d = [];
        for (void 0 === a && (a = ""), b = 0; b < c.length; b += 1) d[b] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: c[b],
                    CLASSES: c[b] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return d;
    }, Menu.prototype.getPrivateMain = function(a) {
        var b, c = [ "new_post", "chrono", "screen", "settings" ], d = [];
        for (void 0 === a && (a = ""), b = 0; b < c.length; b += 1) d[b] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: c[b],
                    CLASSES: c[b] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return d;
    }, Menu.prototype.getPostMenue = function(a) {
        void 0 === a && (a = "");
        var b, c = [ "back", "store_post" ], d = [];
        for (b = 0; b < c.length; b += 1) d[b] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: c[b],
                    CLASSES: c[b] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return d;
    }, Menu.prototype.getPostEdit = function(a) {
        void 0 === a && (a = "");
        var b, c = [ "edit", "delete" ], d = [];
        for (b = 0; b < c.length; b += 1) d[b] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: c[b],
                    CLASSES: c[b] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return d;
    }, Menu.prototype.getScreenMenue = function(a) {
        var b, c = [ "back", "new_screen", "trash_empty" ], d = [];
        for (void 0 === a && (a = ""), b = 0; b < c.length; b += 1) d[b] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: c[b],
                    CLASSES: c[b] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return d;
    }, Menu.prototype.getSettingsMenue = function(a) {
        void 0 === a && (a = "");
        for (var b = [ "back" ], c = [], d = 0; d < b.length; d += 1) c[d] = {
            CONTENT: {
                LINK: {
                    URL: "#",
                    ID: b[d],
                    CLASSES: b[d] === a ? "active" : ""
                }
            },
            AFTER: " "
        };
        return c;
    };
}();

var Post;

!function() {
    "use strict";
    Post = function(a) {
        this.oPost = void 0 !== a ? a : !1, this.oPost && (this.getColor = function() {
            var a, b = !1;
            for (a = 0; a < CONF.PROPS.ARRAY.COLORS.length; a += 1) this.oPost.hasClass(CONF.PROPS.ARRAY.COLORS[a]) && (b = CONF.PROPS.ARRAY.COLORS[a]);
            return b;
        }, this.getId = function() {
            return this.oPost.attr("id");
        });
    }, Post.prototype.getContent = function() {
        var a, b = this.oPost.children(".content").children("p");
        $("<div/>", {
            id: "temp_content_grep",
            html: b.html()
        }).appendTo(b), a = $("#temp_content_grep"), $.each(a.find("a"), function() {
            $(this).after($(this).attr("href")), $(this).remove();
        }), $.each(a.find("iframe"), function() {
            $(this).after($(this).attr("src")), $(this).remove();
        });
        var c = a.html();
        return a.remove(), c;
    }, Post.prototype.getTools = function() {
        return $("#post-functions").remove(), new Template({
            DIV: {
                ID: "post-functions",
                CONTENT: {
                    LINK: [ {
                        ID: "edit",
                        CLASSES: "post-function",
                        URL: "#"
                    }, {
                        ID: "move",
                        CLASSES: "post-function",
                        URL: "#"
                    }, {
                        ID: "callendar",
                        CLASSES: "post-function",
                        URL: "#"
                    }, {
                        ID: "delete",
                        CLASSES: "post-function",
                        URL: "#"
                    } ]
                }
            }
        }).toHtml();
    };
}();

var PostWindow;

!function() {
    "use strict";
    PostWindow = function(a) {
        var b, c, d = [], e = "";
        for (void 0 === a ? a = {
            defaultcolor: "yellow",
            content: "",
            headline: "NEW_POST".translate(),
            origin: ""
        } : (void 0 === a.origin && (a.origin = ""), void 0 === a.defaultcolor && (a.defaultcolor = "yellow"), 
        void 0 === a.content && (a.content = ""), void 0 === a.headline && (a.headline = "NEW_POST".translate())), 
        b = 0; b < CONF.PROPS.ARRAY.COLORS.length; b += 1) c = CONF.BOARD.SETTINGS.COLORS[CONF.PROPS.ARRAY.COLORS[b].toUpperCase()], 
        null !== c && (e = CONF.PROPS.ARRAY.COLORS[b].toUpperCase().translate() + " " + "IS_MARKED_AS".translate() + " " + c), 
        d[d.length] = CONF.PROPS.ARRAY.COLORS[b] === a.defaultcolor ? {
            CLASSES: CONF.PROPS.ARRAY.COLORS[b],
            CONTENT: {
                LINK: {
                    TITLE: e,
                    CLASSES: "selected",
                    URL: "#"
                }
            }
        } : {
            CLASSES: CONF.PROPS.ARRAY.COLORS[b],
            CONTENT: {
                LINK: {
                    TITLE: e,
                    URL: "#"
                }
            }
        };
        this.postTemplate = new Template({
            DIV: {
                ID: "post-window",
                CONTENT: {
                    H: {
                        NO: 2,
                        CONTENT: a.headline
                    },
                    TEXTAREA: {
                        ID: a.origin.length > 0 ? "origin-" + a.origin : "",
                        CLASS: a.defaultcolor,
                        INSERT: a.content
                    },
                    UL: {
                        CLASSES: "color_select",
                        CONTENT: {
                            LI: d
                        }
                    }
                }
            }
        }).toHtml();
    }, PostWindow.prototype.deliver = function() {
        return this.postTemplate;
    };
}();

var Screens;

!function() {
    "use strict";
    Screens = function() {}, Screens.prototype.getStats = function(a) {
        var b, c, d, e = "", f = {}, g = {};
        for (c in a.POSTS) a.POSTS.hasOwnProperty(c) && (a.POSTS[c] instanceof Array ? e.search(-1 === a.POSTS[c][0].TGT) && (e += a.POSTS[c][0].TGT + "|", 
        "color" === a.POSTS[c][0].ACN && (f[a.POSTS[c][0].TGT] = a.POSTS[c][0].TO)) : -1 === e.search(a.POSTS[c].TGT) ? (e += a.POSTS[c].TGT + "|", 
        "color" === a.POSTS[c].ACN && (f[a.POSTS[c].TGT] = a.POSTS[c].TO)) : (("move" === a.POSTS[c].ACN || "deleted" === a.POSTS[c].ACN) && (e = e.replace(a.POSTS[c].TGT + "|", "")), 
        "color" === a.POSTS[c].ACN && (f[a.POSTS[c].TGT] = a.POSTS[c].TO), "deleted" === a.POSTS[c].ACN && void 0 !== f[a.POSTS[c].TGT] && delete f[a.POSTS[c].TGT]));
        for (b in f) f.hasOwnProperty(b) && (void 0 === g[f[b]] ? g[f[b]] = 1 : g[f[b]] += 1);
        for (d in g) g.hasOwnProperty(d) && (g[d] = Math.floor(100 * g[d] / Object.keys(f).length));
        return {
            items: e.split("|").length - 1,
            steepening: g
        };
    }, Screens.prototype.getOverview = function() {
        var a, b, c, d, e, f = [];
        for (c in CONF.BOARD.PRIVATE.SCREENS) if (CONF.BOARD.PRIVATE.SCREENS.hasOwnProperty(c)) {
            b = CONF.BOARD.PRIVATE.SCREENS[c], d = this.getStats(b), e = [];
            for (a in d.steepening) d.steepening.hasOwnProperty(a) && e.push({
                PART: d.steepening[a],
                CLASSES: a,
                STYLE: "width:" + d.steepening[a] + "%;"
            });
            e = _.sortBy(e, function(a) {
                return a.PART;
            }), f[f.length] = {
                ID: c,
                CLASSES: "screen " + (CONF.DOM.BOARDPOSTS.data("activescreen") === c ? "curent" : ""),
                CONTENT: {
                    IMG: {
                        SRC: "img/textures/onboard.png",
                        CLASSES: "screen-icon",
                        STYLE: "background-image:url(" + b.META.BG + ");"
                    },
                    H: {
                        NO: 4,
                        CLASSES: "screen-name",
                        CONTENT: c
                    },
                    SPAN: {
                        CLASSES: "screen-posts",
                        CONTENT: d.items + " " + "POSTS".translate()
                    },
                    DIV: {
                        CLASSES: "screenStats",
                        CONTENT: {
                            DIV: e.reverse()
                        }
                    }
                }
            };
        }
        return {
            DIV: f
        };
    }, Screens.prototype.newScreen = function() {
        return {
            DIV: {
                ID: "new_screen-ui",
                CONTENT: {
                    IMG: {
                        ID: "new_screen-preview",
                        SRC: "img/textures/screen-preview.png"
                    },
                    INPUT: [ {
                        TYPE: "text",
                        NAME: "screen-name",
                        ID: "screen-name",
                        VALUE: "NEW_SCREEN_NAME".translate()
                    }, {
                        TYPE: "text",
                        NAME: "screen-bg-url",
                        ID: "screen-bg-url",
                        VALUE: "NEW_BG_URL".translate()
                    } ],
                    LINK: [ {
                        ID: "create-screen",
                        URL: "#",
                        CLASSES: "button"
                    }, {
                        ID: "abort-create-screen",
                        URL: "#",
                        CLASSES: "button"
                    } ]
                }
            }
        };
    };
}();

var Settings;

!function() {
    "use strict";
    Settings = function(a) {
        this.oSettings = a;
    }, Settings.prototype.oSettings = null, Settings.prototype.getTemplate = function() {
        var a, b = {
            DIV: []
        };
        void 0 === this.oSettings && (this.oSettings = {}), void 0 === this.oSettings.COLORS && (this.oSettings.COLORS = {});
        for (a in this.oSettings.COLORS) if (this.oSettings.COLORS.hasOwnProperty(a)) {
            var c = null !== this.oSettings.COLORS[a] ? this.oSettings.COLORS[a] : "";
            b.DIV[b.DIV.length] = {
                ID: "legend-" + a.toLowerCase(),
                CLASSES: "legend-item",
                CONTENT: {
                    IMG: {
                        SRC: "img/textures/onboard.png",
                        CLASSES: "legend_icon " + a.toLowerCase()
                    },
                    SPAN: {
                        CLASSES: "legend-desc",
                        CONTENT: ("POST_WITH_COLOR_" + a).translate()
                    },
                    INPUT: {
                        TYPE: "text",
                        CLASSES: "legend-name",
                        VALUE: c
                    }
                }
            };
        }
        return {
            DIV: {
                ID: "settings-window",
                CONTENT: {
                    H: [ {
                        NO: 2,
                        CONTENT: "SET_PRIOTITIES_HERE".translate(),
                        AFTER: {
                            P: {
                                CLASSES: "settings-desc",
                                CONTENT: "DESCRIPTION_PRIORITIES_SETTINGS".translate()
                            },
                            DIV: [ {
                                ID: "legend",
                                CONTENT: b
                            } ]
                        }
                    } ]
                }
            }
        };
    };
}();

var Template;

!function() {
    "use strict";
    Template = function(a, b) {
        this.oTpls = !1, this.debug = b, this.debug !== !0 && (this.debug = !1), this.debug === !0 && "function" != typeof log && (alert("FOR DEBUGGING A FUNCTION NAMED LOG IS REQUIRED [function log(message, msgtype);]"), 
        this.debug = !1), this.config = !1, void 0 !== a && this.setConfig(a), this.getTpls() || this.setTpls({
            ABBR: '{BEFORE}<abbr accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</abbr>{AFTER}',
            ADDRESS: '{BEFORE}<address accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</address>{AFTER}',
            AREA: '{BEFORE}<area alt="{ALT}" coords="{COORDS}" shape="{SHAPE}" href="{HREF}" target="{TARGET}" ping="{PING}" rel="{REL}" media="{MEDIA}" hreflang="{HREFLANG}" type="{TYPE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            A: '{BEFORE}<a href="{HREF}" target="{TARGET}" ping="{PING}" rel="{REL}" media="{MEDIA}" hreflang="{HREFLANG}" type="{TYPE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</a>{AFTER}',
            ARTICLE: '{BEFORE}<article accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</article>{AFTER}',
            ASIDE: '{BEFORE}<aside accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</aside>{AFTER}',
            AUDIO: '{BEFORE}<audio src="{SRC}" crossorigin="{CROSSORIGIN}" preload="{PRELOAD}" autoplay="{AUTOPLAY}" mediagroup="{MEDIAGROUP}" loop="{LOOP}" controls="{CONTROLS}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</audio>{AFTER}',
            B: '{BEFORE}<b accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</b>{AFTER}',
            BASE: "{BEFORE}<base />{AFTER}",
            BDI: '{BEFORE}<bdi none*="{NONE*}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</bdi>{AFTER}',
            BDO: '{BEFORE}<bdo dir*="{DIR*}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</bdo>{AFTER}',
            BLOCKQUOTE: '{BEFORE}<blockquote cite="{CITE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</blockquote>{AFTER}',
            BODY: "{BEFORE}<body >{INSERT}</body>{AFTER}",
            BR: '{BEFORE}<br accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            BUTTON: '{BEFORE}<button autofocus="{AUTOFOCUS}" disabled="{DISABLED}" form="{FORM}" formaction="{FORMACTION}" formenctype="{FORMENCTYPE}" formmethod="{FORMMETHOD}" formnovalidate="{FORMNOVALIDATE}" formtarget="{FORMTARGET}" name="{NAME}" type="{TYPE}" value="{VALUE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</button>{AFTER}',
            CANVAS: "{BEFORE}<canvas >{INSERT}</canvas>{AFTER}",
            CAPTION: '{BEFORE}<caption accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</caption>{AFTER}',
            CITE: '{BEFORE}<cite accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</cite>{AFTER}',
            CODE: '{BEFORE}<code accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</code>{AFTER}',
            COL: '{BEFORE}<col span="{SPAN}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</col>{AFTER}',
            COLGROUP: '{BEFORE}<colgroup span="{SPAN}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</colgroup>{AFTER}',
            COMMAND: '{BEFORE}<command type="{TYPE}" label="{LABEL}" icon="{ICON}" disabled="{DISABLED}" checked="{CHECKED}" radiogroup="{RADIOGROUP}" command="{COMMAND}" title="{TITLE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            DATA: '{BEFORE}<data value="{VALUE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</data>{AFTER}',
            DATAGRID: '{BEFORE}<datagrid disabled="{DISABLED}" multiple="{MULTIPLE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</datagrid>{AFTER}',
            DATALIST: '{BEFORE}<datalist data="{DATA}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</datalist>{AFTER}',
            DD: '{BEFORE}<dd accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</dd>{AFTER}',
            DEL: '{BEFORE}<del cite="{CITE}" datetime="{DATETIME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</del>{AFTER}',
            DFN: '{BEFORE}<dfn None, but the title attribute has special semantics for this element. If the <dfn> tag has a title attribute, then the exact value of that attribute is the term being defined.="{NONE, BUT THE TITLE ATTRIBUTE HAS SPECIAL SEMANTICS FOR THIS ELEMENT. IF THE <DFN> TAG HAS A TITLE ATTRIBUTE, THEN THE EXACT VALUE OF THAT ATTRIBUTE IS THE TERM BEING DEFINED.}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</dfn>{AFTER}',
            DL: '{BEFORE}<dl accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</dl>{AFTER}',
            DETAILS: '{BEFORE}<details open="{OPEN}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</details>{AFTER}',
            DIV: '{BEFORE}<div accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</div>{AFTER}',
            DT: '{BEFORE}<dt accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</dt>{AFTER}',
            EM: '{BEFORE}<em accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</em>{AFTER}',
            EVENTSOURCE: '{BEFORE}<eventsource src="{SRC}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            EMBED: '{BEFORE}<embed src="{SRC}" type="{TYPE}" width="{WIDTH}" height="{HEIGHT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            FIELDSET: '{BEFORE}<fieldset disabled="{DISABLED}" form="{FORM}" name="{NAME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</fieldset>{AFTER}',
            FIGCAPTION: '{BEFORE}<figcaption accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</figcaption>{AFTER}',
            FIGURE: '{BEFORE}<figure accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</figure>{AFTER}',
            FOOTER: "{BEFORE}<footer >{INSERT}</footer>{AFTER}",
            FORM: '{BEFORE}<form accept-charset="{ACCEPT-CHARSET}" action="{ACTION}" autocomplete="{AUTOCOMPLETE}" enctype="{ENCTYPE}" method="{METHOD}" name="{NAME}" novalidate="{NOVALIDATE}" target="{TARGET}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</form>{AFTER}',
            H1: '{BEFORE}<h1 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h1>{AFTER}',
            H2: '{BEFORE}<h2 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h2>{AFTER}',
            H3: '{BEFORE}<h3 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h3>{AFTER}',
            H4: '{BEFORE}<h4 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h4>{AFTER}',
            H5: '{BEFORE}<h5 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h5>{AFTER}',
            H6: '{BEFORE}<h6 accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</h6>{AFTER}',
            HEAD: "{BEFORE}<head >{INSERT}</head>{AFTER}",
            HEADER: "{BEFORE}<header >{INSERT}</header>{AFTER}",
            HGROUP: "{BEFORE}<hgroup >{INSERT}</hgroup>{AFTER}",
            HR: '{BEFORE}<hr accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            HTML: "{BEFORE}<html >{INSERT}</html>{AFTER}",
            I: '{BEFORE}<i accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</i>{AFTER}',
            IFRAME: '{BEFORE}<iframe src="{SRC}" srcdoc="{SRCDOC}" name="{NAME}" sandbox="{SANDBOX}" seamless="{SEAMLESS}" width="{WIDTH}" height="{HEIGHT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</iframe>{AFTER}',
            IMG: '{BEFORE}<img alt="{ALT}" src="{SRC}" crossorigin="{CROSSORIGIN}" ismap="{ISMAP}" usemap="{USEMAP}" width="{WIDTH}" height="{HEIGHT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            INS: '{BEFORE}<ins cite="{CITE}" datetime="{DATETIME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</ins>{AFTER}',
            INPUT: '{BEFORE}<input accept="{ACCEPT}" alt="{ALT}" autocomplete="{AUTOCOMPLETE}" autofocus="{AUTOFOCUS}" checked="{CHECKED}" disabled="{DISABLED}" dirname="{DIRNAME}" form="{FORM}" formaction="{FORMACTION}" formenctype="{FORMENCTYPE}" formmethod="{FORMMETHOD}" formnovalidate="{FORMNOVALIDATE}" formtarget="{FORMTARGET}" height="{HEIGHT}" list="{LIST}" max="{MAX}" maxlength="{MAXLENGTH}" min="{MIN}" multiple="{MULTIPLE}" name="{NAME}" pattern="{PATTERN}" placeholder="{PLACEHOLDER}" readonly="{READONLY}" required="{REQUIRED}" size="{SIZE}" src="{SRC}" step="{STEP}" type="{TYPE}" value="{VALUE}" width="{WIDTH}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            KBD: '{BEFORE}<kbd accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</kbd>{AFTER}',
            KEYGEN: '{BEFORE}<keygen autofocus="{AUTOFOCUS}" challenge="{CHALLENGE}" disabled="{DISABLED}" form="{FORM}" keytype="{KEYTYPE}" name="{NAME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            LABEL: '{BEFORE}<label for="{FOR}" form="{FORM}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</label>{AFTER}',
            LEGEND: '{BEFORE}<legend none="{NONE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</legend>{AFTER}',
            LI: '{BEFORE}<li value="{VALUE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</li>{AFTER}',
            MARK: '{BEFORE}<mark accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</mark>{AFTER}',
            LINK: "{BEFORE}<link />{AFTER}",
            MAP: '{BEFORE}<map name="{NAME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</map>{AFTER}',
            MENU: '{BEFORE}<menu type="{TYPE}" label="{LABEL}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</menu>{AFTER}',
            META: "{BEFORE}<meta />{AFTER}",
            METER: '{BEFORE}<meter value="{VALUE}" min="{MIN}" low="{LOW}" high="{HIGH}" max="{MAX}" optimum="{OPTIMUM}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</meter>{AFTER}',
            NOSCRIPT: '{BEFORE}<noscript accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</noscript>{AFTER}',
            NAV: '{BEFORE}<nav accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</nav>{AFTER}',
            OBJECT: '{BEFORE}<object data="{DATA}" type="{TYPE}" typemustmatch="{TYPEMUSTMATCH}" name="{NAME}" usemap="{USEMAP}" form="{FORM}" width="{WIDTH}" height="{HEIGHT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</object>{AFTER}',
            OL: '{BEFORE}<ol reversed="{REVERSED}" start="{START}" type="{TYPE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</ol>{AFTER}',
            OPTGROUP: '{BEFORE}<optgroup disabled="{DISABLED}" label="{LABEL}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</optgroup>{AFTER}',
            OPTION: '{BEFORE}<option disabled="{DISABLED}" label="{LABEL}" selected="{SELECTED}" value="{VALUE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</option>{AFTER}',
            P: '{BEFORE}<p accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</p>{AFTER}',
            OUTPUT: '{BEFORE}<output for="{FOR}" form="{FORM}" name="{NAME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            PARAM: '{BEFORE}<param name="{NAME}" value="{VALUE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            PRE: '{BEFORE}<pre accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</pre>{AFTER}',
            PROGRESS: '{BEFORE}<progress value="{VALUE}" max="{MAX}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</progress>{AFTER}',
            Q: '{BEFORE}<q cite="{CITE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</q>{AFTER}',
            RUBY: '{BEFORE}<ruby none="{NONE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</ruby>{AFTER}',
            RP: '{BEFORE}<rp none="{NONE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</rp>{AFTER}',
            RT: '{BEFORE}<rt none="{NONE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</rt>{AFTER}',
            S: '{BEFORE}<s accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</s>{AFTER}',
            SAMP: '{BEFORE}<samp accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</samp>{AFTER}',
            SCRIPT: '{BEFORE}<script src="{SRC}" async="{ASYNC}" defer="{DEFER}" type="{TYPE}" charset="{CHARSET}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</script>{AFTER}',
            SECTION: '{BEFORE}<section accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</section>{AFTER}',
            SELECT: '{BEFORE}<select autofocus="{AUTOFOCUS}" disabled="{DISABLED}" form="{FORM}" multiple="{MULTIPLE}" name="{NAME}" size="{SIZE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</select>{AFTER}',
            SMALL: '{BEFORE}<small accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</small>{AFTER}',
            SOURCE: '{BEFORE}<source src="{SRC}" type="{TYPE}" media="{MEDIA}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            SPAN: '{BEFORE}<span accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</span>{AFTER}',
            STRONG: '{BEFORE}<strong accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</strong>{AFTER}',
            STYLE: "{BEFORE}<style >{INSERT}</style>{AFTER}",
            SUB: '{BEFORE}<sub accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</sub>{AFTER}',
            SUMMARY: '{BEFORE}<summary accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</summary>{AFTER}',
            SUP: '{BEFORE}<sup accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</sup>{AFTER}',
            TABLE: '{BEFORE}<table border="{BORDER}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</table>{AFTER}',
            TBODY: '{BEFORE}<tbody accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</tbody>{AFTER}',
            TD: '{BEFORE}<td colspan="{COLSPAN}" rowspan="{ROWSPAN}" headers="{HEADERS}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</td>{AFTER}',
            TEXTAREA: '{BEFORE}<textarea autofocus="{AUTOFOCUS}" disabled="{DISABLED}" dirname="{DIRNAME}" form="{FORM}" maxlength="{MAXLENGTH}" name="{NAME}" placeholder="{PLACEHOLDER}" readonly="{READONLY}" required="{REQUIRED}" rows="{ROWS}" cols="{COLS}" wrap="{WRAP}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</textarea>{AFTER}',
            TFOOT: '{BEFORE}<tfoot accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</tfoot>{AFTER}',
            TH: '{BEFORE}<th colspan="{COLSPAN}" rowspan="{ROWSPAN}" headers="{HEADERS}" scope="{SCOPE}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</th>{AFTER}',
            THEAD: '{BEFORE}<thead accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</thead>{AFTER}',
            TIME: '{BEFORE}<time datetime="{DATETIME}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</time>{AFTER}',
            TITLE: "{BEFORE}<title >{INSERT}</title>{AFTER}",
            TR: '{BEFORE}<tr accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</tr>{AFTER}',
            TRACK: '{BEFORE}<track kind="{KIND}" src="{SRC}" srclang="{SRCLANG}" label="{LABEL}" default="{DEFAULT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}',
            UL: '{BEFORE}<ul accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</ul>{AFTER}',
            VAR: '{BEFORE}<var accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</var>{AFTER}',
            VIDEO: '{BEFORE}<video src="{SRC}" crossorigin="{CROSSORIGIN}" poster="{POSTER}" preload="{PRELOAD}" autoplay="{AUTOPLAY}" mediagroup="{MEDIAGROUP}" loop="{LOOP}" muted="{MUTED}" controls="{CONTROLS}" width="{WIDTH}" height="{HEIGHT}" accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" >{INSERT}</video>{AFTER}',
            WBR: '{BEFORE}<wbr accesskey="{ACCESSKEY}" hidden="{HIDDEN}" itemtype="{ITEMTYPE}" class="{CLASS}" id="{ID}" lang="{LANG}" contenteditable="{CONTENTEDITABLE}" inert="{INERT}" spellcheck="{SPELLCHECK}" contextmenu="{CONTEXTMENU}" itemid="{ITEMID}" style="{STYLE}" dir="{DIR}" itemprop="{ITEMPROP}" tabindex="{TABINDEX}" draggable="{DRAGGABLE}" itemref="{ITEMREF}" title="{TITLE}" dropzone="{DROPZONE}" itemscope="{ITEMSCOPE}" translate="{TRANSLATE}" />{AFTER}'
        }), this.extTpls({
            H: '{BEFORE}<h{NO} id="{ID}" class="{CLASSES}">{CONTENT}</h{NO}>{AFTER}',
            LINK: '<a id="{ID}" class="{CLASSES}" href="{URL}" title="{TITLE}" target="{TARGET}">{CONTENT}</a>',
            FORM: '<form method="{METHOD}" action="{ACTION}" id="{ID}">{CONTENT}</form>',
            INPUT: '<input type="{TYPE}" value="{VALUE}" id="{ID}" name="{NAME}" class="{CLASSES}" maxlength="{MAXLENGTH}"/>',
            LABEL: '{BEFORE}<label for="{FOR}" classes="{CLASSES}">{CONTENT}</label>{AFTER}',
            HEADLINE_1: '<h1 id="{ID}" class="{CLASSES}">{TEXT}</h1>',
            TABLE: '<table id="{ID}" class="{CLASSES}"><thead>{HEAD}</thead><tbody>{BODY}</tbody></table>',
            TABLE_TR: '<tr class="{CLASSES}">{TABLE_TDS}</tr>',
            TABLE_TH: '<th class="{CLASSES}">{CONTENT}</th>',
            TABLE_TD: '<td class="{CLASSES}">{CONTENT}</td>',
            IMG: '<img id="{ID}" class="{CLASSES}" alt="{ALT}" src="{SRC}" style="{STYLE}"/>',
            DIV: '<div id="{ID}" class="{CLASSES}" style="{STYLE}">{CONTENT}</div>',
            SPAN: '<span id="{ID}" class="{CLASSES}">{CONTENT}</span>',
            P: '<p class="{CLASSES}">{CONTENT}</p>',
            STRONG: '<strong class="{CLASSES}">{CONTENT}</strong>',
            UL: '<ul id="{ID}" class="{CLASSES}">{CONTENT}</ul>',
            LI: '{BEFORE}<li id="{ID}" class="{CLASSES}">{CONTENT}</li>{AFTER}',
            PIPE: "{CONTENT}"
        }, !0);
    }, Template.prototype.setTpls = function(a) {
        return a instanceof Object && (this.oTpls = a), this;
    }, Template.prototype.getTpls = function() {
        return this.oTpls;
    }, Template.prototype.extTpls = function(a, b) {
        var c;
        if ((void 0 === b || b !== !0) && (b = !1), a instanceof Object) for (c in a) a.hasOwnProperty(c) && (void 0 === this.oTpls[c] || b === !0) && (this.oTpls[c] = a[c]);
        return this;
    }, Template.prototype.toHtml = function() {
        var a, b, c, d = "";
        try {
            d = "";
            for (a in this.config) if (this.config.hasOwnProperty(a)) if (this.config[a] instanceof Array) for (b = 0; b < this.config[a].length; b += 1) d += new Template(JSON.parse('{"' + a + '":' + JSON.stringify(this.config[a][b]) + "}")).setTpls(this.getTpls()).toHtml(); else {
                for (c in this.config[a]) this.config[a].hasOwnProperty(c) && "object" == typeof this.config[a][c] && (this.config[a][c] = new Template(this.config[a][c]).setTpls(this.getTpls()).toHtml());
                d += this.render(this.oTpls[a], this.config[a]);
            }
        } catch (e) {
            this.debug && log(e);
        }
        return this.cleanUp(d);
    }, Template.prototype.render = function(a, b) {
        var c, d;
        for (c in b) b.hasOwnProperty(c) && (d = new RegExp("{" + c + "}", "g"), a = a.replace(d, b[c]));
        return this.debug && log("Cant render data of type " + typeof b, "error"), a;
    }, Template.prototype.cleanUp = function(a) {
        return a = a.replace(/\{[A-Z_]*\}/gi, ""), a = a.replace(/[a-z]+="\s*"/gi, ""), 
        a = a.replace(/\s{2,}/g, " "), a = a.replace(/ >/g, ">"), a.toString();
    }, Template.prototype.setConfig = function(a) {
        return a instanceof Object ? this.config = a : this.debug && log("The given configuration was invalid (Object required)", "notice"), 
        this;
    };
}(), function(a, b) {
    function c(a) {
        var b = a.length, c = fb.type(a);
        return fb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = ob[a] = {};
        return fb.each(a.match(hb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = fb.expando + Math.random();
    }
    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType) if (e = "data-" + c.replace(sb, "-$1").toLowerCase(), 
        d = a.getAttribute(e), "string" == typeof d) {
            try {
                d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : rb.test(d) ? JSON.parse(d) : d;
            } catch (f) {}
            pb.set(a, c, d);
        } else d = b;
        return d;
    }
    function g() {
        return !0;
    }
    function h() {
        return !1;
    }
    function i() {
        try {
            return T.activeElement;
        } catch (a) {}
    }
    function j(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function k(a, b, c) {
        if (fb.isFunction(b)) return fb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return fb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return fb.filter(b, a, c);
            b = fb.filter(b, a);
        }
        return fb.grep(a, function(a) {
            return bb.call(b, a) >= 0 !== c;
        });
    }
    function l(a, b) {
        return fb.nodeName(a, "table") && fb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function n(a) {
        var b = Nb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qb.set(a[d], "globalEval", !b || qb.get(b[d], "globalEval"));
    }
    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qb.hasData(a) && (f = qb.access(a), g = qb.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fb.event.add(b, e, j[e][c]);
            }
            pb.hasData(a) && (h = pb.access(a), i = fb.extend({}, h), pb.set(b, i));
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fb.nodeName(a, c) ? fb.merge([ a ], d) : d;
    }
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Kb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _b.length; e--; ) if (b = _b[e] + c, 
        b in a) return b;
        return d;
    }
    function t(a, b) {
        return a = b || a, "none" === fb.css(a, "display") || !fb.contains(a.ownerDocument, a);
    }
    function u(b) {
        return a.getComputedStyle(b, null);
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qb.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qb.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), 
        (c && "none" !== c || !e) && qb.set(d, "olddisplay", e ? c : fb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function w(a, b, c) {
        var d = Ub.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fb.css(a, c + $b[f], !0, e)), 
        d ? ("content" === c && (g -= fb.css(a, "padding" + $b[f], !0, e)), "margin" !== c && (g -= fb.css(a, "border" + $b[f] + "Width", !0, e))) : (g += fb.css(a, "padding" + $b[f], !0, e), 
        "padding" !== c && (g += fb.css(a, "border" + $b[f] + "Width", !0, e)));
        return g;
    }
    function y(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = u(a), g = fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Vb.test(e)) return e;
            d = g && (fb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function z(a) {
        var b = T, c = Xb[a];
        return c || (c = A(a, b), "none" !== c && c || (Rb = (Rb || fb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (Rb[0].contentWindow || Rb[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = A(a, b), Rb.detach()), Xb[a] = c), c;
    }
    function A(a, b) {
        var c = fb(b.createElement(a)).appendTo(b.body), d = fb.css(c[0], "display");
        return c.remove(), d;
    }
    function B(a, b, c, d) {
        var e;
        if (fb.isArray(b)) fb.each(b, function(b, e) {
            c || bc.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== fb.type(b)) d(a, b); else for (e in b) B(a + "[" + e + "]", b[e], c, d);
    }
    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(hb) || [];
            if (fb.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function D(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, fb.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === sc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function E(a, c) {
        var d, e, f = fb.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fb.extend(!0, a, e), a;
    }
    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break;
                }
                h || (h = f);
            }
            g = g || h;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0;
    }
    function G(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function H() {
        return setTimeout(function() {
            Bc = b;
        }), Bc = fb.now();
    }
    function I(a, b, c) {
        for (var d, e = (Hc[b] || []).concat(Hc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function J(a, b, c) {
        var d, e, f = 0, g = Gc.length, h = fb.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Bc || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: fb.extend({}, b),
            opts: fb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bc || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++) if (d = Gc[f].call(j, a, k, j.opts)) return d;
        return fb.map(k, I, j), fb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        fb.fx.timer(fb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function K(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = fb.camelCase(c), e = b[d], f = a[c], fb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function L(a, c, d) {
        var e, f, g, h, i, j, k = this, l = {}, m = a.style, n = a.nodeType && t(a), o = qb.get(a, "fxshow");
        d.queue || (i = fb._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, 
        j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j();
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fb.queue(a, "fx").length || i.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [ m.overflow, m.overflowX, m.overflowY ], 
        "inline" === fb.css(a, "display") && "none" === fb.css(a, "float") && (m.display = "inline-block")), 
        d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2];
        }));
        for (e in c) if (f = c[e], Dc.exec(f)) {
            if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                if ("show" !== f || !o || o[e] === b) continue;
                n = !0;
            }
            l[e] = o && o[e] || fb.style(a, e);
        }
        if (!fb.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qb.access(a, "fxshow", {}), g && (o.hidden = !n), 
            n ? fb(a).show() : k.done(function() {
                fb(a).hide();
            }), k.done(function() {
                var b;
                qb.remove(a, "fxshow");
                for (b in l) fb.style(a, b, l[b]);
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, 
            h.start = "width" === e || "height" === e ? 1 : 0));
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e);
    }
    function N(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $b[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function O(a) {
        return fb.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var P, Q, R = typeof b, S = a.location, T = a.document, U = T.documentElement, V = a.jQuery, W = a.$, X = {}, Y = [], Z = "2.0.3", $ = Y.concat, _ = Y.push, ab = Y.slice, bb = Y.indexOf, cb = X.toString, db = X.hasOwnProperty, eb = Z.trim, fb = function(a, b) {
        return new fb.fn.init(a, b, P);
    }, gb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, hb = /\S+/g, ib = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, kb = /^-ms-/, lb = /-([\da-z])/gi, mb = function(a, b) {
        return b.toUpperCase();
    }, nb = function() {
        T.removeEventListener("DOMContentLoaded", nb, !1), a.removeEventListener("load", nb, !1), 
        fb.ready();
    };
    fb.fn = fb.prototype = {
        jquery: Z,
        constructor: fb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ib.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fb ? c[0] : c, fb.merge(this, fb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), 
                    jb.test(e[1]) && fb.isPlainObject(c)) for (e in c) fb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
                this.context = T, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), fb.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ab.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = fb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return fb.each(this, a, b);
        },
        ready: function(a) {
            return fb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(ab.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(fb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: _,
        sort: [].sort,
        splice: [].splice
    }, fb.fn.init.prototype = fb.fn, fb.extend = fb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fb.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c], 
        e = a[c], h !== e && (k && e && (fb.isPlainObject(e) || (f = fb.isArray(e))) ? (f ? (f = !1, 
        g = d && fb.isArray(d) ? d : []) : g = d && fb.isPlainObject(d) ? d : {}, h[c] = fb.extend(k, g, e)) : e !== b && (h[c] = e));
        return h;
    }, fb.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === fb && (a.$ = W), b && a.jQuery === fb && (a.jQuery = V), fb;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fb.readyWait++ : fb.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --fb.readyWait : fb.isReady) || (fb.isReady = !0, a !== !0 && --fb.readyWait > 0 || (Q.resolveWith(T, [ fb ]), 
            fb.fn.trigger && fb(T).trigger("ready").off("ready")));
        },
        isFunction: function(a) {
            return "function" === fb.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? X[cb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            if ("object" !== fb.type(a) || a.nodeType || fb.isWindow(a)) return !1;
            try {
                if (a.constructor && !db.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (b) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw new Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || T;
            var d = jb.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = fb.buildFragment([ a ], b, e), e && fb(e).remove(), 
            fb.merge([], d.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(a) {
            var c, d;
            if (!a || "string" != typeof a) return null;
            try {
                d = new DOMParser(), c = d.parseFromString(a, "text/xml");
            } catch (e) {
                c = b;
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fb.error("Invalid XML: " + a), 
            c;
        },
        noop: function() {},
        globalEval: function(a) {
            var b, c = eval;
            a = fb.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), 
            b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(kb, "ms-").replace(lb, mb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : eb.call(a);
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fb.merge(d, "string" == typeof a ? [ a ] : a) : _.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : bb.call(b, a, c);
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return $.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (d = a[c], c = a, a = d), fb.isFunction(a) ? (e = ab.call(arguments, 2), 
            f = function() {
                return a.apply(c || this, e.concat(ab.call(arguments)));
            }, f.guid = a.guid = a.guid || fb.guid++, f) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === fb.type(d)) {
                f = !0;
                for (i in d) fb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, fb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(fb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: Date.now,
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), fb.ready.promise = function(b) {
        return Q || (Q = fb.Deferred(), "complete" === T.readyState ? setTimeout(fb.ready) : (T.addEventListener("DOMContentLoaded", nb, !1), 
        a.addEventListener("load", nb, !1))), Q.promise(b);
    }, fb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        X["[object " + b + "]"] = b.toLowerCase();
    }), P = fb(T), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = tb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",");
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return v(a.replace(kb, "$1"), b, c, d);
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function e(a) {
            return a[N] = !0, a;
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) z.attrHandle[c[d]] = b;
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(kb, " ")
                }), h = h.slice(d.length));
                for (g in z.filter) !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || y, i[1] === !0) return !0;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [ h ] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; ) (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i);
                        }
                        for (k = s.length; k--; ) (l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return cb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = z.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++) ;
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(kb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        t && (P = w, y = ++d);
                    }
                    f && ((l = !n && l) && p--, e && s.push(l));
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; ) n(s, o, h, i);
                    if (e) {
                        if (p > 0) for (;r--; ) s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o);
                    }
                    ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return t && (P = w, D = u), s;
            };
            return f ? e(h) : h;
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); ) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                    break;
                }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c;
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0;
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", gb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", hb = gb.replace("w", "w#"), ib = "\\[" + eb + "*(" + gb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + hb + ")|)|)" + eb + "*\\]", jb = ":(" + gb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ib.replace(3, 8) + ")*)|.*)\\)|)", kb = new RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = new RegExp("^" + eb + "*," + eb + "*"), mb = new RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = new RegExp(eb + "*[+~]"), ob = new RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = new RegExp(jb), qb = new RegExp("^" + hb + "$"), rb = {
            ID: new RegExp("^#(" + gb + ")"),
            CLASS: new RegExp("^\\.(" + gb + ")"),
            TAG: new RegExp("^(" + gb.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ib),
            PSEUDO: new RegExp("^" + jb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + db + ")$", "i"),
            needsContext: new RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
        }, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = new RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType;
        } catch (zb) {
            ab = {
                apply: Z.length ? function(a, b) {
                    _.apply(a, bb.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : O, c = b.defaultView;
            return b !== G && 9 === b.nodeType && b.documentElement ? (G = b, H = b.documentElement, 
            I = !B(b), c && c.attachEvent && c !== c.top && c.attachEvent("onbeforeunload", function() {
                F();
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(b.createComment("")), !a.getElementsByTagName("*").length;
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !b.getElementsByName || !b.getElementsByName(N).length;
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), z.find.TAG = x.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== W ? b.getElementsByTagName(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, z.find.CLASS = x.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== W && I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (x.qsa = sb.test(b.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), 
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), f(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden"), a.appendChild(c).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", jb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = H.compareDocumentPosition ? function(a, c) {
                if (a === c) return U = !0, 0;
                var d = c.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(c);
                return d ? 1 & d || !x.sortDetached && c.compareDocumentPosition(a) === d ? a === b || M(O, a) ? -1 : c === b || M(O, c) ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, c) {
                var d, e = 0, f = a.parentNode, g = c.parentNode, i = [ a ], j = [ c ];
                if (a === c) return U = !0, 0;
                if (!f || !g) return a === b ? -1 : c === b ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, c) : 0;
                if (f === g) return h(a, c);
                for (d = a; d = d.parentNode; ) i.unshift(d);
                for (d = c; d = d.parentNode; ) j.unshift(d);
                for (;i[e] === j[e]; ) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, b) : G;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, G, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += A(b);
            return c;
        }, z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: rb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [ a, a, "", b ], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; ) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, d);
                    }) : f;
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [], c = [], d = C(a.replace(kb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
                    };
                }),
                lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !z.pseudos.empty(a);
                },
                header: function(a) {
                    return vb.test(a.nodeName);
                },
                input: function(a) {
                    return ub.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l(), C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d));
            }
            return f;
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), 
        x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || g("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), f(function(a) {
            return null == a.getAttribute("disabled");
        }) || g(db, function(a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && d.specified ? d.value : a[b] === !0 ? b.toLowerCase() : null;
        }), fb.find = c, fb.expr = c.selectors, fb.expr[":"] = fb.expr.pseudos, fb.unique = c.uniqueSort, 
        fb.text = c.getText, fb.isXMLDoc = c.isXML, fb.contains = c.contains;
    }(a);
    var ob = {};
    fb.Callbacks = function(a) {
        a = "string" == typeof a ? ob[a] || d(a) : fb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fb.each(b, function(b, c) {
                            var e = fb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), f ? h = j.length : c && (g = b, l(c));
                }
                return this;
            },
            remove: function() {
                return j && fb.each(arguments, function(a, b) {
                    for (var c; (c = fb.inArray(b, j, c)) > -1; ) j.splice(c, 1), f && (h >= c && h--, 
                    i >= c && i--);
                }), this;
            },
            has: function(a) {
                return a ? fb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], h = 0, this;
            },
            disable: function() {
                return j = k = c = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, c || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return !j || e && !k || (b = b || [], b = [ a, b.slice ? b.slice() : b ], f ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!e;
            }
        };
        return m;
    }, fb.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", fb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", fb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", fb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return fb.Deferred(function(c) {
                        fb.each(b, function(b, f) {
                            var g = f[0], h = fb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && fb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? fb.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, fb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = ab.call(arguments), g = f.length, h = 1 !== g || a && fb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : fb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? ab.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), fb.support = function(b) {
        var c = T.createElement("input"), d = T.createDocumentFragment(), e = T.createElement("div"), f = T.createElement("select"), g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, 
        b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, 
        b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, 
        c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, 
        c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === e.style.backgroundClip, fb(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            fb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            g.removeChild(c));
        }), b) : b;
    }({});
    var pb, qb, rb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, sb = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0;
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, fb.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (fb.isEmptyObject(f)) fb.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c];
        },
        access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fb.camelCase(c))) : (this.set(a, c, d), 
            d !== b ? d : c);
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a), h = this.cache[g];
            if (c === b) this.cache[g] = {}; else {
                fb.isArray(c) ? e = c.concat(c.map(fb.camelCase)) : (f = fb.camelCase(c), c in h ? e = [ c, f ] : (e = f, 
                e = e in h ? [ e ] : e.match(hb) || [])), d = e.length;
                for (;d--; ) delete h[e[d]];
            }
        },
        hasData: function(a) {
            return !fb.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    }, pb = new e(), qb = new e(), fb.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pb.hasData(a) || qb.hasData(a);
        },
        data: function(a, b, c) {
            return pb.access(a, b, c);
        },
        removeData: function(a, b) {
            pb.remove(a, b);
        },
        _data: function(a, b, c) {
            return qb.access(a, b, c);
        },
        _removeData: function(a, b) {
            qb.remove(a, b);
        }
    }), fb.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0], h = 0, i = null;
            if (a === b) {
                if (this.length && (i = pb.get(g), 1 === g.nodeType && !qb.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; h < d.length; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fb.camelCase(e.slice(5)), 
                    f(g, e, i[e]));
                    qb.set(g, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof a ? this.each(function() {
                pb.set(this, a);
            }) : fb.access(this, function(c) {
                var d, e = fb.camelCase(a);
                if (g && c === b) {
                    if (d = pb.get(g, a), d !== b) return d;
                    if (d = pb.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d;
                } else this.each(function() {
                    var d = pb.get(this, e);
                    pb.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pb.set(this, a, c);
                });
            }, null, c, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                pb.remove(this, a);
            });
        }
    }), fb.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = qb.get(a, b), c && (!d || fb.isArray(c) ? d = qb.access(a, b, fb.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fb.queue(a, b), d = c.length, e = c.shift(), f = fb._queueHooks(a, b), g = function() {
                fb.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qb.get(a, c) || qb.access(a, c, {
                empty: fb.Callbacks("once memory").add(function() {
                    qb.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), fb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? fb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fb.queue(this, a, c);
                fb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                fb.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = fb.fx ? fb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = fb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = qb.get(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var tb, ub, vb = /[\t\r\n\f]/g, wb = /\r/g, xb = /^(?:input|select|textarea|button)$/i;
    fb.fn.extend({
        attr: function(a, b) {
            return fb.access(this, fb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                fb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return fb.access(this, fb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fb.propFix[a] || a];
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                c.className = fb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (fb.isFunction(a)) return this.each(function(b) {
                fb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(hb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? fb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fb.isFunction(a) ? this.each(function(c) {
                fb(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) for (var b, d = 0, e = fb(this), f = a.match(hb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === R || "boolean" === c) && (this.className && qb.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : qb.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            {
                if (arguments.length) return e = fb.isFunction(a), this.each(function(d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fb.isArray(f) && (f = fb.map(f, function(a) {
                        return null == a ? "" : a + "";
                    })), c = fb.valHooks[this.type] || fb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f));
                });
                if (f) return c = fb.valHooks[f.type] || fb.valHooks[f.nodeName.toLowerCase()], 
                c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wb, "") : null == d ? "" : d);
            }
        }
    }), fb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (fb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fb(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = fb.inArray(fb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return typeof a.getAttribute === R ? fb.prop(a, c, d) : (1 === g && fb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = fb.attrHooks[c] || (fb.expr.match.bool.test(c) ? ub : tb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : (fb.removeAttr(a, c), void 0));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(hb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = fb.propFix[c] || c, fb.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fb.support.radioValue && "radio" === b && fb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !fb.isXMLDoc(a), g && (c = fb.propFix[c] || c, 
            f = fb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xb.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? fb.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, fb.each(fb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fb.expr.attrHandle[c] || fb.find.attr;
        fb.expr.attrHandle[c] = function(a, c, e) {
            var f = fb.expr.attrHandle[c], g = e ? b : (fb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fb.expr.attrHandle[c] = f, g;
        };
    }), fb.support.optSelected || (fb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), fb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fb.propFix[this.toLowerCase()] = this;
    }), fb.each([ "radio", "checkbox" ], function() {
        fb.valHooks[this] = {
            set: function(a, b) {
                return fb.isArray(b) ? a.checked = fb.inArray(fb(a).val(), b) >= 0 : void 0;
            }
        }, fb.support.checkOn || (fb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var yb = /^key/, zb = /^(?:mouse|contextmenu)|click/, Ab = /^(?:focusinfocus|focusoutblur)$/, Bb = /^([^.]*)(?:\.(.+)|)$/;
    fb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qb.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fb.guid++), 
                (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                    return typeof fb === R || a && fb.event.triggered === a.type ? b : fb.event.dispatch.apply(h.elem, arguments);
                }, h.elem = a), c = (c || "").match(hb) || [ "" ], k = c.length; k--; ) i = Bb.exec(c[k]) || [], 
                o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fb.event.special[o] || {}, 
                o = (f ? m.delegateType : m.bindType) || o, m = fb.event.special[o] || {}, l = fb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), 
                m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                fb.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qb.hasData(a) && qb.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(hb) || [ "" ], j = b.length; j--; ) if (h = Bb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fb.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) fb.event.remove(a, n + b[j], c, d, !0);
                fb.isEmptyObject(i) && (delete q.handle, qb.remove(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || T ], o = db.call(c, "type") ? c.type : c, p = db.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Ab.test(o + fb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), k = o.indexOf(":") < 0 && "on" + o, c = c[fb.expando] ? c : new fb.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : fb.makeArray(d, [ c ]), 
            m = fb.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fb.isWindow(e)) {
                    for (j = m.delegateType || o, Ab.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), 
                    i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a);
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped(); ) c.type = g > 1 ? j : m.bindType || o, 
                l = (qb.get(h, "events") || {})[c.type] && qb.get(h, "handle"), l && l.apply(h, d), 
                l = k && h[k], l && fb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fb.acceptData(e) || k && fb.isFunction(e[o]) && !fb.isWindow(e) && (i = e[k], 
                i && (e[k] = null), fb.event.triggered = o, e[o](), fb.event.triggered = b, i && (e[k] = i)), 
                c.result;
            }
        },
        dispatch: function(a) {
            a = fb.event.fix(a);
            var c, d, e, f, g, h = [], i = ab.call(arguments), j = (qb.get(this, "events") || {})[a.type] || [], k = fb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((fb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j !== this; j = j.parentNode || this) if (j.disabled !== !0 || "click" !== a.type) {
                for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fb(f, this).index(j) >= 0 : fb.find(f, this, null, [ j ]).length), 
                e[f] && e.push(g);
                e.length && h.push({
                    elem: j,
                    handlers: e
                });
            }
            return i < c.length && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, 
                e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[fb.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = zb.test(e) ? this.mouseHooks : yb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new fb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fb.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return fb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fb.extend(new fb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fb.event.trigger(e, null, b) : fb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, fb.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, fb.Event = function(a, b) {
        return this instanceof fb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, 
        b && fb.extend(this, b), this.timeStamp = a && a.timeStamp || fb.now(), this[fb.expando] = !0, 
        void 0) : new fb.Event(a, b);
    }, fb.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation();
        }
    }, fb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !fb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), fb.support.focusinBubbles || fb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            fb.event.simulate(b, a.target, fb.event.fix(a), !0);
        };
        fb.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0);
            }
        };
    }), fb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = h; else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return fb().off(a), g.apply(this, arguments);
            }, e.guid = g.guid || (g.guid = fb.guid++)), this.each(function() {
                fb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), 
            this.each(function() {
                fb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                fb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fb.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Cb = /^.[^:#\[\.,]*$/, Db = /^(?:parents|prev(?:Until|All))/, Eb = fb.expr.match.needsContext, Fb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(fb(a).filter(function() {
                for (b = 0; e > b; b++) if (fb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) fb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b = fb(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fb.contains(this, b[a])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1));
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Eb.test(a) ? fb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Eb.test(a) || "string" != typeof a ? fb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? fb.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? bb.call(fb(a), this[0]) : bb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fb(a, b) : fb.makeArray(a && a.nodeType ? [ a ] : a), d = fb.merge(this.get(), c);
            return this.pushStack(fb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), fb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return fb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return fb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return j(a, "nextSibling");
        },
        prev: function(a) {
            return j(a, "previousSibling");
        },
        nextAll: function(a) {
            return fb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return fb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return fb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return fb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return fb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return fb.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || fb.merge([], a.childNodes);
        }
    }, function(a, b) {
        fb.fn[a] = function(c, d) {
            var e = fb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fb.filter(d, e)), 
            this.length > 1 && (Fb[a] || fb.unique(e), Db.test(a) && e.reverse()), this.pushStack(e);
        };
    }), fb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fb.find.matchesSelector(d, a) ? [ d ] : [] : fb.find.matches(a, fb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (f && fb(a).is(d)) break;
                e.push(a);
            }
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Gb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Hb = /<([\w:]+)/, Ib = /<|&#?\w+;/, Jb = /<(?:script|style|link)/i, Kb = /^(?:checkbox|radio)$/i, Lb = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, Nb = /^true\/(.*)/, Ob = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Pb = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Pb.optgroup = Pb.option, Pb.tbody = Pb.tfoot = Pb.colgroup = Pb.caption = Pb.thead, 
    Pb.th = Pb.td, fb.fn.extend({
        text: function(a) {
            return fb.access(this, function(a) {
                return a === b ? fb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? fb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fb.cleanData(q(c)), 
            c.parentNode && (b && fb.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fb.cleanData(q(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fb.clone(this, a, b);
            });
        },
        html: function(a) {
            return fb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Jb.test(a) && !Pb[(Hb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Gb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fb.cleanData(q(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = fb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, o = k - 1, p = a[0], r = fb.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fb.support.checkClone) && Lb.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (d = fb.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 
            1 === d.childNodes.length && (d = e), e)) {
                for (f = fb.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fb.clone(h, !0, !0), 
                g && fb.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, fb.map(f, n), j = 0; g > j; j++) h = f[j], 
                Mb.test(h.type || "") && !qb.access(h, "globalEval") && fb.contains(i, h) && (h.src ? fb._evalUrl(h.src) : fb.globalEval(h.textContent.replace(Ob, "")));
            }
            return this;
        }
    }), fb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fb.fn[a] = function(a) {
            for (var c, d = [], e = fb(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            fb(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d);
        };
    }), fb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = fb.contains(a.ownerDocument, a);
            if (!(fb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fb.isXMLDoc(a))) for (g = q(h), 
            f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b) if (c) for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]); else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++) if (e = a[k], 
            e || 0 === e) if ("object" === fb.type(e)) fb.merge(n, e.nodeType ? [ e ] : e); else if (Ib.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Hb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = Pb[g] || Pb._default, f.innerHTML = h[1] + e.replace(Gb, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                fb.merge(n, f.childNodes), f = m.firstChild, f.textContent = "";
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++]; ) if ((!d || -1 === fb.inArray(e, d)) && (i = fb.contains(e.ownerDocument, e), 
            f = q(m.appendChild(e), "script"), i && o(f), c)) for (j = 0; e = f[j++]; ) Mb.test(e.type || "") && c.push(e);
            return m;
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fb.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qb.expando], h && (c = qb.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length) for (i = 0; (g = f[i]) !== b; i++) j[g] ? fb.event.remove(d, g) : fb.removeEvent(d, g, c.handle);
                    qb.cache[h] && delete qb.cache[h];
                }
                delete pb.cache[d[pb.expando]];
            }
        },
        _evalUrl: function(a) {
            return fb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), fb.fn.extend({
        wrapAll: function(a) {
            var b;
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = fb(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return fb.isFunction(a) ? this.each(function(b) {
                fb(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = fb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = fb.isFunction(a);
            return this.each(function(c) {
                fb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                fb.nodeName(this, "body") || fb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var Qb, Rb, Sb = /^(none|table(?!-c[ea]).+)/, Tb = /^margin/, Ub = new RegExp("^(" + gb + ")(.*)$", "i"), Vb = new RegExp("^(" + gb + ")(?!px)[a-z%]+$", "i"), Wb = new RegExp("^([+-])=(" + gb + ")", "i"), Xb = {
        BODY: "block"
    }, Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Zb = {
        letterSpacing: 0,
        fontWeight: 400
    }, $b = [ "Top", "Right", "Bottom", "Left" ], _b = [ "Webkit", "O", "Moz", "ms" ];
    fb.fn.extend({
        css: function(a, c) {
            return fb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (fb.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fb.css(a, c[h], !1, e);
                    return g;
                }
                return d !== b ? fb.style(a, c, d) : fb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return v(this, !0);
        },
        hide: function() {
            return v(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? fb(this).show() : fb(this).hide();
            });
        }
    }), fb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Qb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fb.camelCase(c), j = a.style;
                return c = fb.cssProps[i] || (fb.cssProps[i] = s(j, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
                d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, 
                "string" === g && (f = Wb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fb.css(a, c)), 
                g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fb.cssNumber[i] || (d += "px"), 
                fb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), void 0);
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fb.camelCase(c);
            return c = fb.cssProps[i] || (fb.cssProps[i] = s(a.style, i)), h = fb.cssHooks[c] || fb.cssHooks[i], 
            h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qb(a, c, e)), "normal" === f && c in Zb && (f = Zb[c]), 
            "" === d || d ? (g = parseFloat(f), d === !0 || fb.isNumeric(g) ? g || 0 : f) : f;
        }
    }), Qb = function(a, c, d) {
        var e, f, g, h = d || u(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || fb.contains(a.ownerDocument, a) || (i = fb.style(a, c)), 
        Vb.test(i) && Tb.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }, fb.each([ "height", "width" ], function(a, b) {
        fb.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Sb.test(fb.css(a, "display")) ? fb.swap(a, Yb, function() {
                    return y(a, b, d);
                }) : y(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && u(a);
                return w(a, c, d ? x(a, b, d, fb.support.boxSizing && "border-box" === fb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), fb(function() {
        fb.support.reliableMarginRight || (fb.cssHooks.marginRight = {
            get: function(a, b) {
                return b ? fb.swap(a, {
                    display: "inline-block"
                }, Qb, [ a, "marginRight" ]) : void 0;
            }
        }), !fb.support.pixelPosition && fb.fn.position && fb.each([ "top", "left" ], function(a, b) {
            fb.cssHooks[b] = {
                get: function(a, c) {
                    return c ? (c = Qb(a, b), Vb.test(c) ? fb(a).position()[b] + "px" : c) : void 0;
                }
            };
        });
    }), fb.expr && fb.expr.filters && (fb.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, fb.expr.filters.visible = function(a) {
        return !fb.expr.filters.hidden(a);
    }), fb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + $b[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Tb.test(a) || (fb.cssHooks[a + b].set = w);
    });
    var ac = /%20/g, bc = /\[\]$/, cc = /\r?\n/g, dc = /^(?:submit|button|image|reset|file)$/i, ec = /^(?:input|select|textarea|keygen)/i;
    fb.fn.extend({
        serialize: function() {
            return fb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fb.prop(this, "elements");
                return a ? fb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !fb(this).is(":disabled") && ec.test(this.nodeName) && !dc.test(a) && (this.checked || !Kb.test(a));
            }).map(function(a, b) {
                var c = fb(this).val();
                return null == c ? null : fb.isArray(c) ? fb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(cc, "\r\n")
                };
            }).get();
        }
    }), fb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = fb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = fb.ajaxSettings && fb.ajaxSettings.traditional), fb.isArray(a) || a.jquery && !fb.isPlainObject(a)) fb.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(ac, "+");
    }, fb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), fb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var fc, gc, hc = fb.now(), ic = /\?/, jc = /#.*$/, kc = /([?&])_=[^&]*/, lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, mc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, nc = /^(?:GET|HEAD)$/, oc = /^\/\//, pc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, qc = fb.fn.load, rc = {}, sc = {}, tc = "*/".concat("*");
    try {
        gc = S.href;
    } catch (uc) {
        gc = T.createElement("a"), gc.href = "", gc = gc.href;
    }
    fc = pc.exec(gc.toLowerCase()) || [], fb.fn.load = function(a, c, d) {
        if ("string" != typeof a && qc) return qc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fb.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments, h.html(e ? fb("<div>").append(fb.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, g || [ a.responseText, b, a ]);
        }), this;
    }, fb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        fb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), fb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gc,
            type: "GET",
            isLocal: mc.test(fc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fb.parseJSON,
                "text xml": fb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? E(E(a, fb.ajaxSettings), b) : E(fb.ajaxSettings, a);
        },
        ajaxPrefilter: C(rc),
        ajaxTransport: C(sc),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), 
                j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fb.lastModified[f] = v), 
                v = w.getResponseHeader("etag"), v && (fb.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [ w, m, j ? l : s ]), 
                q.fireWith(n, [ w, x ]), k && (o.trigger("ajaxComplete", [ w, m ]), --fb.active || fb.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? fb(n) : fb.event, p = fb.Deferred(), q = fb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = lc.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gc) + "").replace(jc, "").replace(oc, fc[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = fb.trim(m.dataType || "*").toLowerCase().match(hb) || [ "" ], 
            null == m.crossDomain && (j = pc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fc[1] && j[2] === fc[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fc[3] || ("http:" === fc[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = fb.param(m.data, m.traditional)), 
            D(rc, m, c, w), 2 === u) return w;
            k = m.global, k && 0 === fb.active++ && fb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !nc.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ic.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = kc.test(f) ? f.replace(kc, "$1_=" + hc++) : f + (ic.test(f) ? "&" : "?") + "_=" + hc++)), 
            m.ifModified && (fb.lastModified[f] && w.setRequestHeader("If-Modified-Since", fb.lastModified[f]), 
            fb.etag[f] && w.setRequestHeader("If-None-Match", fb.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = D(sc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, e.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return fb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return fb.get(a, b, c, "script");
        }
    }), fb.each([ "get", "post" ], function(a, c) {
        fb[c] = function(a, d, e, f) {
            return fb.isFunction(d) && (f = f || e, e = d, d = b), fb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), fb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fb.globalEval(a), a;
            }
        }
    }), fb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), fb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fb("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), T.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var vc = [], wc = /(=)\?(?=&|$)|\?\?/;
    fb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vc.pop() || fb.expando + "_" + hc++;
            return this[a] = !0, a;
        }
    }), fb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(wc, "$1" + f) : c.jsonp !== !1 && (c.url += (ic.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || fb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vc.push(f)), h && fb.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : void 0;
    }), fb.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var xc = fb.ajaxSettings.xhr(), yc = {
        0: 200,
        1223: 204
    }, zc = 0, Ac = {};
    a.ActiveXObject && fb(a).on("unload", function() {
        for (var a in Ac) Ac[a]();
        Ac = b;
    }), fb.support.cors = !!xc && "withCredentials" in xc, fb.support.ajax = xc = !!xc, 
    fb.ajaxTransport(function(a) {
        var c;
        return fb.support.cors || xc && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (f in a.xhrFields) h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ac[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yc[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), h.onerror = c("error"), c = Ac[g = zc++] = c("abort"), h.send(a.hasContent && a.data || null);
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    });
    var Bc, Cc, Dc = /^(?:toggle|show|hide)$/, Ec = new RegExp("^(?:([+-])=|)(" + gb + ")([a-z%]*)$", "i"), Fc = /queueHooks$/, Gc = [ L ], Hc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ec.exec(b), f = e && e[3] || (fb.cssNumber[a] ? "" : "px"), g = (fb.cssNumber[a] || "px" !== f && +d) && Ec.exec(fb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, fb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    fb.Animation = fb.extend(J, {
        tweener: function(a, b) {
            fb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hc[c] = Hc[c] || [], Hc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Gc.unshift(a) : Gc.push(a);
        }
    }), fb.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (fb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : M.propHooks._default.set(this), this;
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                fb.fx.step[a.prop] ? fb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fb.cssProps[a.prop]] || fb.cssHooks[a.prop]) ? fb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, fb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = fb.fn[b];
        fb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e);
        };
    }), fb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = fb.isEmptyObject(a), f = fb.speed(b, c, d), g = function() {
                var b = J(this, fb.extend({}, a), f);
                (e || qb.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = fb.timers, g = qb.get(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && Fc.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && fb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qb.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = fb.timers, g = d ? d.length : 0;
                for (c.finish = !0, fb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), fb.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), fb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fb.extend({}, a) : {
            complete: c || !c && b || fb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fb.isFunction(b) && b
        };
        return d.duration = fb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fb.fx.speeds ? fb.fx.speeds[d.duration] : fb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fb.isFunction(d.old) && d.old.call(this), d.queue && fb.dequeue(this, d.queue);
        }, d;
    }, fb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, fb.timers = [], fb.fx = M.prototype.init, fb.fx.tick = function() {
        var a, c = fb.timers, d = 0;
        for (Bc = fb.now(); d < c.length; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fb.fx.stop(), Bc = b;
    }, fb.fx.timer = function(a) {
        a() && fb.timers.push(a) && fb.fx.start();
    }, fb.fx.interval = 13, fb.fx.start = function() {
        Cc || (Cc = setInterval(fb.fx.tick, fb.fx.interval));
    }, fb.fx.stop = function() {
        clearInterval(Cc), Cc = null;
    }, fb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fb.fx.step = {}, fb.expr && fb.expr.filters && (fb.expr.filters.animated = function(a) {
        return fb.grep(fb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), fb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fb.offset.setOffset(this, a, b);
        });
        var c, d, e = this[0], f = {
            top: 0,
            left: 0
        }, g = e && e.ownerDocument;
        if (g) return c = g.documentElement, fb.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), 
        d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f;
    }, fb.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fb.css(a, "position"), l = fb(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fb.css(a, "top"), 
            i = fb.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            fb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, fb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fb.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), fb.nodeName(a[0], "html") || (d = a.offset()), d.top += fb.css(a[0], "borderTopWidth", !0), 
                d.left += fb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fb.css(c, "marginTop", !0),
                    left: b.left - d.left - fb.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fb.nodeName(a, "html") && "static" === fb.css(a, "position"); ) a = a.offsetParent;
                return a || U;
            });
        }
    }), fb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fb.fn[c] = function(f) {
            return fb.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, 
                void 0);
            }, c, f, arguments.length, null);
        };
    }), fb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            fb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fb.access(this, function(c, d, e) {
                    var f;
                    return fb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fb.css(c, d, h) : fb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), fb.fn.size = function() {
        return this.length;
    }, fb.fn.andSelf = fb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fb : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fb;
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fb);
}(window), function(a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], 
        !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b);
    }
    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility");
        }).length;
    }
    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b);
                    }, c);
                }) : b.apply(this, arguments);
            };
        }(a.fn.focus),
        scrollParent: function() {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b;
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document; ) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), 
                !isNaN(e) && 0 !== e)) return e;
                f = f.parent();
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++e);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                f.test(this.id) && a(this).removeAttr("id");
            });
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")));
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e);
        }
    }), a("<a>").outerWidth(1).jquery || a.each([ "Width", "Height" ], function(c, d) {
        function e(b, c, d, e) {
            return a.each(f, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), 
                e && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }), c;
        }
        var f = "Width" === d ? [ "Left", "Right" ] : [ "Top", "Bottom" ], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px");
            });
        }, a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px");
            });
        };
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
        };
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), 
    a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([ c, d[e] ]);
            },
            call: function(a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c);
            }
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
        }
    });
}(jQuery), function(a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function(b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove");
        } catch (f) {}
        e(b);
    }, a.widget = function(b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e);
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b);
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c(), h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? (i[b] = function() {
                var a = function() {
                    return c.prototype[b].apply(this, arguments);
                }, e = function(a) {
                    return c.prototype[b].apply(this, a);
                };
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, 
                    this._superApply = f, b;
                };
            }(), void 0) : (i[b] = d, void 0);
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto);
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g);
    }, a.widget.extend = function(c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e], 
        g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c;
    }, a.widget.bridge = function(c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function(g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [ g ].concat(i)) : g, h ? this.each(function() {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, 
                !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'");
            }) : this.each(function() {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this));
            }), j;
        };
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), 
            this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy();
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c) if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, 
                f = f[e[g]];
                if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                f[c] = d;
            } else {
                if (d === b) return this.options[c] === b ? null : this.options[c];
                h[c] = d;
            }
            return this._setOptions(h), this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this;
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
            this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, 
            c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^(\w+)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h);
            });
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            a.unbind(b).undelegate(b);
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), 
            c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [ c ].concat(d)) === !1 || c.isDefaultPrevented());
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c();
            });
        };
    });
}(jQuery), function(a) {
    var b = !1;
    a(document).mouseup(function() {
        b = !1;
    }), a.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).bind("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), 
                c.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    d.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, 
                !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(a) {
                    return d._mouseMove(a);
                }, this._mouseUpDelegate = function(a) {
                    return d._mouseUp(a);
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                c.preventDefault(), b = !0, !0)) : !0;
            }
        },
        _mouseMove: function(b) {
            return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), 
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, 
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function(b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(b)), !1;
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery), function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
            this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
            this._mouseInit();
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), 
            this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body");
            }), !0) : !1);
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), 
            this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
            this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), 
            this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), 
            this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), 
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
        },
        _mouseDrag: function(b, c) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), 
            this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            !c) {
                var d = this._uiHash();
                if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                this.position = d.position;
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
        },
        _mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), 
            this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                c._trigger("stop", b) !== !1 && c._clear();
            }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1;
        },
        _mouseUp: function(b) {
            return a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this);
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
            this;
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0;
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b ])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), 
            d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            return e.containment ? "window" === e.containment ? (this.containment = [ a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ], 
            void 0) : "document" === e.containment ? (this.containment = [ 0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ], 
            void 0) : e.containment.constructor === Array ? (this.containment = e.containment, 
            void 0) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), 
            c = a(e.containment), d = c[0], d && (b = "hidden" !== c.css("overflow"), this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relative_container = c), void 0) : (this.containment = null, void 0);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }), {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e, f, g = this.options, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = b.pageX, j = b.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), 
            c = [ this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top ]) : c = this.containment, 
            b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, 
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, 
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, 
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), 
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1;
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [ c, d ]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), 
            a.Widget.prototype._trigger.call(this, b, c, d);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("ui-draggable"), e = d.options, f = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(e.connectToSortable).each(function() {
                var c = a.data(this, "ui-sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c.refreshPositions(), c._trigger("activate", b, f));
            });
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable"), e = a.extend({}, c, {
                item: d.element
            });
            a.each(d.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), 
                this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e));
            });
        },
        drag: function(b, c) {
            var d = a(this).data("ui-draggable"), e = this;
            a.each(d.sortables, function() {
                var f = !1, g = this;
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, 
                a.each(d.sortables, function() {
                    return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, 
                    this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), 
                    f;
                })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), 
                this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0];
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), 
                this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, 
                this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, 
                this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, 
                d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, 
                this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, 
                this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), 
                this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, 
                this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
                d._trigger("fromSortable", b), d.dropped = !1);
            });
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var b = a("body"), c = a(this).data("ui-draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor);
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor);
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._opacity && a(c.helper).css("opacity", d._opacity);
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset());
        },
        drag: function(b) {
            var c = a(this).data("ui-draggable"), d = c.options, e = !1;
            c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), 
            d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), 
            d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), 
            e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b);
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var b = a(this).data("ui-draggable"), c = b.options;
            b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function() {
                var c = a(this), d = c.offset();
                this !== b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                });
            });
        },
        drag: function(b, c) {
            var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"), o = n.options, p = o.snapTolerance, q = c.offset.left, r = q + n.helperProportions.width, s = c.offset.top, t = s + n.helperProportions.height;
            for (l = n.snapElements.length - 1; l >= 0; l--) h = n.snapElements[l].left, i = h + n.snapElements[l].width, 
            j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = Math.abs(j - t) <= p, 
            e = Math.abs(k - s) <= p, f = Math.abs(h - r) <= p, g = Math.abs(i - q) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = Math.abs(j - s) <= p, 
            e = Math.abs(k - t) <= p, f = Math.abs(h - q) <= p, g = Math.abs(i - r) <= p, d && (c.position.top = n._convertPositionTo("relative", {
                top: j,
                left: 0
            }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                top: k - n.helperProportions.height,
                left: 0
            }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: i - n.helperProportions.width
            }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {
                snapItem: n.snapElements[l].item
            })), n.snapElements[l].snapping = d || e || f || g || m);
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
            });
            d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function(c) {
                a(this).css("zIndex", b + c);
            }), this.css("zIndex", b + d.length));
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            var d = a(c.helper), e = a(this).data("ui-draggable").options;
            d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex);
        },
        stop: function(b, c) {
            var d = a(this).data("ui-draggable").options;
            d._zIndex && a(c.helper).css("zIndex", d._zIndex);
        }
    });
}(jQuery), function(a) {
    function b(a, b, c) {
        return a > b && b + c > a;
    }
    a.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b = this.options, c = b.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], 
            a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable");
        },
        _destroy: function() {
            for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; b < c.length; b++) c[b] === this && c.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled");
        },
        _setOption: function(b, c) {
            "accept" === b && (this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }), a.Widget.prototype._setOption.apply(this, arguments);
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            c && this._trigger("deactivate", b, this.ui(c));
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), 
            this._trigger("over", b, this.ui(c)));
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), 
            this._trigger("out", b, this.ui(c)));
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current, e = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var b = a.data(this, "ui-droppable");
                return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                    offset: b.element.offset()
                }), b.options.tolerance) ? (e = !0, !1) : void 0;
            }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), 
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), 
            this.element) : !1) : !1;
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            };
        }
    }), a.ui.intersect = function(a, c, d) {
        if (!c.offset) return !1;
        var e, f, g = (a.positionAbs || a.position.absolute).left, h = g + a.helperProportions.width, i = (a.positionAbs || a.position.absolute).top, j = i + a.helperProportions.height, k = c.offset.left, l = k + c.proportions.width, m = c.offset.top, n = m + c.proportions.height;
        switch (d) {
          case "fit":
            return g >= k && l >= h && i >= m && n >= j;

          case "intersect":
            return k < g + a.helperProportions.width / 2 && h - a.helperProportions.width / 2 < l && m < i + a.helperProportions.height / 2 && j - a.helperProportions.height / 2 < n;

          case "pointer":
            return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, 
            f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, 
            b(f, m, c.proportions.height) && b(e, k, c.proportions.width);

          case "touch":
            return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);

          default:
            return !1;
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; d < f.length; d++) if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; e < h.length; e++) if (h[e] === f[d].element[0]) {
                    f[d].proportions.height = 0;
                    continue a;
                }
                f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), 
                f[d].offset = f[d].element.offset(), f[d].proportions = {
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                });
            }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, c)));
            }), d;
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").bind("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
            });
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a.data(this, "ui-droppable").options.scope === e;
                    }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), 
                    d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, 
                    this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), 
                    d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
                }
            });
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
        }
    };
}(jQuery), function(a) {
    function b(a) {
        return parseInt(a, 10) || 0;
    }
    function c(a) {
        return !isNaN(parseInt(a, 10));
    }
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var b, c, d, e, f, g = this, h = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !!h.aspectRatio,
                aspectRatio: h.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), 
            this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), 
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            b = this.handles.split(","), this.handles = {}, c = 0; c < b.length; c++) d = a.trim(b[c]), 
            f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), 
            e.css({
                zIndex: h.zIndex
            }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, 
            this.element.append(e);
            this._renderAxis = function(b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles) this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), 
                this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), 
                f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = [ "padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left" ].join(""), 
                b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length;
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), 
            this._handles.mouseover(function() {
                g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                g.axis = e && e[1] ? e[1] : "se");
            }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show());
            }).mouseleave(function() {
                h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide());
            })), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var b, c = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            c(this.originalElement), this;
        },
        _mouseCapture: function(b) {
            var c, d, e = !1;
            for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e;
        },
        _mouseStart: function(c) {
            var d, e, f, g = this.options, h = this.element.position(), i = this.element;
            return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                position: "absolute",
                top: i.css("top"),
                left: i.css("left")
            }) : i.is(".ui-draggable") && i.css({
                position: "absolute",
                top: h.top,
                left: h.left
            }), this._renderProxy(), d = b(this.helper.css("left")), e = b(this.helper.css("top")), 
            g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), 
            this.offset = this.helper.offset(), this.position = {
                left: d,
                top: e
            }, this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalPosition = {
                left: d,
                top: e
            }, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), 
            i.addClass("ui-resizable-resizing"), this._propagate("start", c), !0;
        },
        _mouseDrag: function(b) {
            var c, d = this.helper, e = {}, f = this.originalMousePosition, g = this.axis, h = this.position.top, i = this.position.left, j = this.size.width, k = this.size.height, l = b.pageX - f.left || 0, m = b.pageY - f.top || 0, n = this._change[g];
            return n ? (c = n.apply(this, [ b, l, m ]), this._updateVirtualBoundaries(b.shiftKey), 
            (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), 
            this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), 
            this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), 
            this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1;
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options, k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), 
            e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, 
            g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, 
            i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, 
            j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), 
            a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), 
            this._propagate("stop", b), this._helper && this.helper.remove(), !1;
        },
        _updateVirtualBoundaries: function(a) {
            var b, d, e, f, g, h = this.options;
            g = {
                minWidth: c(h.minWidth) ? h.minWidth : 0,
                maxWidth: c(h.maxWidth) ? h.maxWidth : 1/0,
                minHeight: c(h.minHeight) ? h.minHeight : 0,
                maxHeight: c(h.maxHeight) ? h.maxHeight : 1/0
            }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, 
            d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), 
            e > g.minHeight && (g.minHeight = e), d < g.maxWidth && (g.maxWidth = d), f < g.maxHeight && (g.maxHeight = f)), 
            this._vBoundaries = g;
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), 
            c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), 
            c(a.width) && (this.size.width = a.width);
        },
        _updateRatio: function(a) {
            var b = this.position, d = this.size, e = this.axis;
            return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), 
            "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (d.height - a.height), 
            a.left = b.left + (d.width - a.width)), a;
        },
        _respectSize: function(a) {
            var b = this._vBoundaries, d = this.axis, e = c(a.width) && b.maxWidth && b.maxWidth < a.width, f = c(a.height) && b.maxHeight && b.maxHeight < a.height, g = c(a.width) && b.minWidth && b.minWidth > a.width, h = c(a.height) && b.minHeight && b.minHeight > a.height, i = this.originalPosition.left + this.originalSize.width, j = this.position.top + this.size.height, k = /sw|nw|w/.test(d), l = /nw|ne|n/.test(d);
            return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), 
            f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), 
            h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, 
            a;
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var a, b, c, d, e, f = this.helper || this.element;
                for (a = 0; a < this._proportionallyResizeElements.length; a++) {
                    if (e = this._proportionallyResizeElements[a], !this.borderDif) for (this.borderDif = [], 
                    c = [ e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth") ], 
                    d = [ e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft") ], 
                    b = 0; b < c.length; b++) this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                    e.css({
                        height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                    });
                }
            }
        },
        _renderProxy: function() {
            var b = this.element, c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), 
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                };
            },
            w: function(a, b) {
                var c = this.originalSize, d = this.originalPosition;
                return {
                    left: d.left + b,
                    width: c.width - b
                };
            },
            n: function(a, b, c) {
                var d = this.originalSize, e = this.originalPosition;
                return {
                    top: e.top + c,
                    height: d.height - c
                };
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                };
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [ c, this.ui() ]), "resize" !== b && this._trigger(b, c, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var c = a(this).data("ui-resizable"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                width: c.size.width - h,
                height: c.size.height - g
            }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {
                top: k,
                left: j
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b);
                }
            });
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"), k = j.options, l = j.element, m = k.containment, n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
            n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                left: 0,
                top: 0
            }, j.containerPosition = {
                left: 0,
                top: 0
            }, j.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (c = a(n), d = [], a([ "Top", "Right", "Left", "Bottom" ]).each(function(a, e) {
                d[a] = b(c.css("padding" + e));
            }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                height: c.innerHeight() - d[3],
                width: c.innerWidth() - d[1]
            }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, 
            h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, 
            j.parentData = {
                element: n,
                left: e.left,
                top: e.top,
                width: h,
                height: i
            }));
        },
        resize: function(b) {
            var c, d, e, f, g = a(this).data("ui-resizable"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {
                top: 0,
                left: 0
            }, m = g.containerElement;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), 
            k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), 
            j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), 
            k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), 
            g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, 
            c = Math.abs((g._helper ? g.offset.left - l.left : g.offset.left - l.left) + g.sizeDiff.width), 
            d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), 
            e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), 
            e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, 
            k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, 
            k && (g.size.width = g.size.height * g.aspectRatio));
        },
        stop: function() {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            });
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = a(this).data("ui-resizable"), c = b.options, d = function(b) {
                a(b).each(function() {
                    var b = a(this);
                    b.data("ui-resizable-alsoresize", {
                        width: parseInt(b.width(), 10),
                        height: parseInt(b.height(), 10),
                        left: parseInt(b.css("left"), 10),
                        top: parseInt(b.css("top"), 10)
                    });
                });
            };
            "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], 
            d(c.alsoResize)) : a.each(c.alsoResize, function(a) {
                d(a);
            });
        },
        resize: function(b, c) {
            var d = a(this).data("ui-resizable"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            }, i = function(b, d) {
                a(b).each(function() {
                    var b = a(this), e = a(this).data("ui-resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                    a.each(g, function(a, b) {
                        var c = (e[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (f[b] = c || null);
                    }), b.css(f);
                });
            };
            "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function(a, b) {
                i(a, b);
            });
        },
        stop: function() {
            a(this).removeData("resizable-alsoresize");
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), 
            b.ghost.appendTo(b.helper);
        },
        resize: function() {
            var b = a(this).data("ui-resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            });
        },
        stop: function() {
            var b = a(this).data("ui-resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b = a(this).data("ui-resizable"), c = b.options, d = b.size, e = b.originalSize, f = b.originalPosition, g = b.axis, h = "number" == typeof c.grid ? [ c.grid, c.grid ] : c.grid, i = h[0] || 1, j = h[1] || 1, k = Math.round((d.width - e.width) / i) * i, l = Math.round((d.height - e.height) / j) * j, m = e.width + k, n = e.height + l, o = c.maxWidth && c.maxWidth < m, p = c.maxHeight && c.maxHeight < n, q = c.minWidth && c.minWidth > m, r = c.minHeight && c.minHeight > n;
            c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, 
            b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, 
            b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, 
            b.position.top = f.top - l, b.position.left = f.left - k);
        }
    });
}(jQuery), function(a) {
    a.widget("ui.selectable", a.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var b, c = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function() {
                    var b = a(this), c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), 
            this.helper = a("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), 
            this._mouseDestroy();
        },
        _mouseStart: function(b) {
            var c = this, d = this.options;
            this.opos = [ b.pageX, b.pageY ], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), 
            this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                left: b.pageX,
                top: b.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var d = a.data(this, "selectable-item");
                d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), 
                d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                    unselecting: d.element
                }));
            }), a(b.target).parents().addBack().each(function() {
                var d, e = a.data(this, "selectable-item");
                return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), 
                e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), 
                e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                    selecting: e.element
                }) : c._trigger("unselecting", b, {
                    unselecting: e.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, i = b.pageY;
                return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                    left: f,
                    top: g,
                    width: h - f,
                    height: i - g
                }), this.selectees.each(function() {
                    var c = a.data(this, "selectable-item"), j = !1;
                    c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || c.right < f || c.top > i || c.bottom < g) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i), 
                    j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), 
                    c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, 
                    d._trigger("selecting", b, {
                        selecting: c.element
                    }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), 
                    c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), 
                    c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), 
                    d._trigger("unselecting", b, {
                        unselecting: c.element
                    }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), 
                    c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {
                        unselecting: c.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, 
                c._trigger("unselected", b, {
                    unselected: d.element
                });
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, 
                d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                });
            }), this._trigger("stop", b), this.helper.remove(), !1;
        }
    });
}(jQuery), function(a) {
    function b(a, b, c) {
        return a > b && b + c > a;
    }
    function c(a) {
        return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
    }
    a.widget("ui.sortable", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
            this.floating = this.items.length ? "x" === a.axis || c(this.items[0].item) : !1, 
            this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this;
        },
        _setOption: function(b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments);
        },
        _mouseCapture: function(b, c) {
            var d = null, e = !1, f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), 
            a(b.target).parents().each(function() {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0;
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d ? !this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function() {
                this === b.target && (e = !0);
            }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1);
        },
        _mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), 
            this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), 
            g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !d) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), 
            !0;
        },
        _mouseDrag: function(b) {
            var c, d, e, f, g = this.options, h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), 
            b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), 
            h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            c = this.items.length - 1; c >= 0; c--) if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), 
            f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                break;
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), 
            this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), 
                this.options.revert) {
                    var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), 
                    f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b);
                    });
                } else this._clear(b, c);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), 
                this.containers[b].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
            }), !d.length && b.key && d.push(b.key + "="), d.join("&");
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "");
            }), d;
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i;
        },
        _intersectsWithPointer: function(a) {
            var c = "x" === this.options.axis || b(this.positionAbs.top + this.offset.click.top, a.top, a.height), d = "y" === this.options.axis || b(this.positionAbs.left + this.offset.click.left, a.left, a.width), e = c && d, f = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
            return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1;
        },
        _intersectsWithSides: function(a) {
            var c = b(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), d = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
            return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && c || "up" === e && !c);
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left");
        },
        refresh: function(a) {
            return this._refreshItems(a), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [ a.connectWith ] : a.connectWith;
        },
        _getItemsAsjQuery: function(b) {
            var c, d, e, f, g = [], h = [], i = this._connectWith();
            if (i && b) for (c = i.length - 1; c >= 0; c--) for (e = a(i[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), 
            f && f !== this && !f.options.disabled && h.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f ]);
            for (h.push([ a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            c = h.length - 1; c >= 0; c--) h[c][0].each(function() {
                g.push(this);
            });
            return a(g);
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; c < b.length; c++) if (b[c] === a.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [ this ];
            var c, d, e, f, g, h, i, j, k = this.items, l = [ [ a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                item: this.currentItem
            }) : a(this.options.items, this.element), this ] ], m = this._connectWith();
            if (m && this.ready) for (c = m.length - 1; c >= 0; c--) for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), 
            f && f !== this && !f.options.disabled && (l.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                item: this.currentItem
            }) : a(f.options.items, f.element), f ]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--) for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), 
            i.data(this.widgetName + "-item", g), k.push({
                item: i,
                instance: g,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, 
            b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, 
            d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), 
            this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, 
            this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), 
            this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === d ? b.currentItem.children().each(function() {
                        a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e);
                    }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), 
                    e;
                },
                update: function(a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), 
                    e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), 
            d.placeholder.update(b, b.placeholder);
        },
        _contactContainers: function(d) {
            var e, f, g, h, i, j, k, l, m, n, o = null, p = null;
            for (e = this.containers.length - 1; e >= 0; e--) if (!a.contains(this.currentItem[0], this.containers[e].element[0])) if (this._intersectsWith(this.containers[e].containerCache)) {
                if (o && a.contains(this.containers[e].element[0], o.element[0])) continue;
                o = this.containers[e], p = e;
            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", d, this._uiHash(this)), 
            this.containers[e].containerCache.over = 0);
            if (o) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", d, this._uiHash(this)), 
            this.containers[p].containerCache.over = 1); else {
                for (g = 1e4, h = null, n = o.floating || c(this.currentItem), i = n ? "left" : "top", 
                j = n ? "width" : "height", k = this.positionAbs[i] + this.offset.click[i], f = this.items.length - 1; f >= 0; f--) a.contains(this.containers[p].element[0], this.items[f].item[0]) && this.items[f].item[0] !== this.currentItem[0] && (!n || b(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) && (l = this.items[f].item.offset()[i], 
                m = !1, Math.abs(l - k) > Math.abs(l + this.items[f][j] - k) && (m = !0, l += this.items[f][j]), 
                Math.abs(l - k) < g && (g = Math.abs(l - k), h = this.items[f], this.direction = m ? "up" : "down"));
                if (!h && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return;
                h ? this._rearrange(d, h, null, !0) : this._rearrange(d, null, this.containers[p].element, !0), 
                this._trigger("change", d, this._uiHash()), this.containers[p]._trigger("change", d, this._uiHash(this)), 
                this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[p]._trigger("over", d, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b, this.currentItem ])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), 
            d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), 
            (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), 
            d = "hidden" !== a(b).css("overflow"), this.containment = [ c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), 
            b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), 
            e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], 
            g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, 
            d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], 
            f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), 
            {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            };
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d);
            });
        },
        _clear: function(a, b) {
            this.reverting = !1;
            var c, d = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (c in this._storedCSS) ("auto" === this._storedCSS[c] || "static" === this._storedCSS[c]) && (this._storedCSS[c] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !b && d.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || d.push(function(a) {
                this._trigger("update", a, this._uiHash());
            }), this !== this.currentContainer && (b || (d.push(function(a) {
                this._trigger("remove", a, this._uiHash());
            }), d.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), d.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), c = this.containers.length - 1; c >= 0; c--) b || d.push(function(a) {
                return function(b) {
                    a._trigger("deactivate", b, this._uiHash(this));
                };
            }.call(this, this.containers[c])), this.containers[c].containerCache.over && (d.push(function(a) {
                return function(b) {
                    a._trigger("out", b, this._uiHash(this));
                };
            }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, this.cancelHelperRemoval) {
                if (!b) {
                    for (this._trigger("beforeStop", a, this._uiHash()), c = 0; c < d.length; c++) d[c].call(this, a);
                    this._trigger("stop", a, this._uiHash());
                }
                return this.fromOutside = !1, !1;
            }
            if (b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, 
            !b) {
                for (c = 0; c < d.length; c++) d[c].call(this, a);
                this._trigger("stop", a, this._uiHash());
            }
            return this.fromOutside = !1, !0;
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            };
        }
    });
}(jQuery), function(a, b) {
    var c = "ui-effects-";
    a.effects = {
        effect: {}
    }, function(a, b) {
        function c(a, b, c) {
            var d = l[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), 
            isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a);
        }
        function d(b) {
            var c = j(), d = c._rgba = [];
            return b = b.toLowerCase(), o(i, function(a, e) {
                var f, g = e.re.exec(b), h = g && e.parse(g), i = e.space || "rgba";
                return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0;
            }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b];
        }
        function e(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a;
        }
        var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", h = /^([\-+])=\s*(\d+\.?\d*)/, i = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ a[1], a[2], a[3], a[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ 2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(a) {
                return [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(a) {
                return [ parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(a) {
                return [ a[1], a[2] / 100, a[3] / 100, a[4] ];
            }
        } ], j = a.Color = function(b, c, d, e) {
            return new a.Color.fn.parse(b, c, d, e);
        }, k = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, l = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, m = j.support = {}, n = a("<p>")[0], o = a.each;
        n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, 
        o(k, function(a, b) {
            b.cache = "_" + a, b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), j.fn = a.extend(j.prototype, {
            parse: function(e, g, h, i) {
                if (e === b) return this._rgba = [ null, null, null, null ], this;
                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                var l = this, m = a.type(e), n = this._rgba = [];
                return g !== b && (e = [ e, g, h, i ], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                    n[b.idx] = c(e[b.idx], b);
                }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                    e[b.cache] && (l[b.cache] = e[b.cache].slice());
                }) : o(k, function(b, d) {
                    var f = d.cache;
                    o(d.props, function(a, b) {
                        if (!l[f] && d.to) {
                            if ("alpha" === a || null == e[a]) return;
                            l[f] = d.to(l._rgba);
                        }
                        l[f][b.idx] = c(e[a], b, !0);
                    }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])));
                }), this) : void 0;
            },
            is: function(a) {
                var b = j(a), c = !0, d = this;
                return o(k, function(a, e) {
                    var f, g = b[e.cache];
                    return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                        return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0;
                    })), c;
                }), c;
            },
            _space: function() {
                var a = [], b = this;
                return o(k, function(c, d) {
                    b[d.cache] && a.push(c);
                }), a.pop();
            },
            transition: function(a, b) {
                var d = j(a), e = d._space(), f = k[e], g = 0 === this.alpha() ? j("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
                return d = d[f.cache], o(f.props, function(a, e) {
                    var f = e.idx, g = h[f], j = d[f], k = l[e.type] || {};
                    null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), 
                    i[f] = c((j - g) * b + g, e)));
                }), this[e](i);
            },
            blend: function(b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(), d = c.pop(), e = j(b)._rgba;
                return j(a.map(c, function(a, b) {
                    return (1 - d) * e[b] + d * a;
                }));
            },
            toRgbaString: function() {
                var b = "rgba(", c = a.map(this._rgba, function(a, b) {
                    return null == a ? b > 2 ? 1 : 0 : a;
                });
                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")";
            },
            toHslaString: function() {
                var b = "hsla(", c = a.map(this.hsla(), function(a, b) {
                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), 
                    a;
                });
                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")";
            },
            toHexString: function(b) {
                var c = this._rgba.slice(), d = c.pop();
                return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, 
            c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [ Math.round(b) % 360, c, l, null == g ? 1 : g ];
        }, k.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
            return [ Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f ];
        }, o(k, function(d, e) {
            var f = e.props, g = e.cache, i = e.to, k = e.from;
            j.fn[d] = function(d) {
                if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                var e, h = a.type(d), l = "array" === h || "object" === h ? d : arguments, m = this[g].slice();
                return o(f, function(a, b) {
                    var d = l["object" === h ? a : b.idx];
                    null == d && (d = m[b.idx]), m[b.idx] = c(d, b);
                }), k ? (e = j(k(m)), e[g] = m, e) : j(m);
            }, o(f, function(b, c) {
                j.fn[b] || (j.fn[b] = function(e) {
                    var f, g = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](), k = j[c.idx];
                    return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), 
                    null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), 
                    j[c.idx] = e, this[i](j)));
                });
            });
        }), j.hook = function(b) {
            var c = b.split(" ");
            o(c, function(b, c) {
                a.cssHooks[c] = {
                    set: function(b, e) {
                        var f, g, h = "";
                        if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                            if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style; ) try {
                                    h = a.css(g, "backgroundColor"), g = g.parentNode;
                                } catch (i) {}
                                e = e.blend(h && "transparent" !== h ? h : "_default");
                            }
                            e = e.toRgbaString();
                        }
                        try {
                            b.style[c] = e;
                        } catch (i) {}
                    }
                }, a.fx.step[c] = function(b) {
                    b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos));
                };
            });
        }, j.hook(g), a.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                return o([ "Top", "Right", "Bottom", "Left" ], function(c, d) {
                    b["border" + d + "Color"] = a;
                }), b;
            }
        }, f = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(jQuery), function() {
        function c(b) {
            var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, f = {};
            if (e && e.length && e[0] && e[e[0]]) for (d = e.length; d--; ) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]); else for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
            return f;
        }
        function d(b, c) {
            var d, e, g = {};
            for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
            return g;
        }
        var e = [ "add", "remove", "toggle" ], f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        a.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(b, c) {
            a.fx.step[c] = function(a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (jQuery.style(a.elem, c, a.end), 
                a.setAttr = !0);
            };
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }), a.effects.animateClass = function(b, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function() {
                var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").addBack() : g;
                j = j.map(function() {
                    var b = a(this);
                    return {
                        el: b,
                        start: c(this)
                    };
                }), f = function() {
                    a.each(e, function(a, c) {
                        b[c] && g[c + "Class"](b[c]);
                    });
                }, f(), j = j.map(function() {
                    return this.end = c(this.el[0]), this.diff = d(this.start, this.end), this;
                }), g.attr("class", h), j = j.map(function() {
                    var b = this, c = a.Deferred(), d = a.extend({}, i, {
                        queue: !1,
                        complete: function() {
                            c.resolve(b);
                        }
                    });
                    return this.el.animate(this.diff, d), c.promise();
                }), a.when.apply(a, j.get()).done(function() {
                    f(), a.each(arguments, function() {
                        var b = this.el;
                        a.each(this.diff, function(a) {
                            b.css(a, "");
                        });
                    }), i.complete.call(g[0]);
                });
            });
        }, a.fn.extend({
            addClass: function(b) {
                return function(c, d, e, f) {
                    return d ? a.effects.animateClass.call(this, {
                        add: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.addClass),
            removeClass: function(b) {
                return function(c, d, e, f) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {
                        remove: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.removeClass),
            toggleClass: function(c) {
                return function(d, e, f, g, h) {
                    return "boolean" == typeof e || e === b ? f ? a.effects.animateClass.call(this, e ? {
                        add: d
                    } : {
                        remove: d
                    }, f, g, h) : c.apply(this, arguments) : a.effects.animateClass.call(this, {
                        toggle: d
                    }, e, f, g);
                };
            }(a.fn.toggleClass),
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f);
            }
        });
    }(), function() {
        function d(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                effect: b
            }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, 
            d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, 
            b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, 
            b.complete = e || c.complete, b;
        }
        function e(b) {
            return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0;
        }
        a.extend(a.effects, {
            version: "1.10.3",
            save: function(a, b) {
                for (var d = 0; d < b.length; d++) null !== b[d] && a.data(c + b[d], a[0].style[b[d]]);
            },
            restore: function(a, d) {
                var e, f;
                for (f = 0; f < d.length; f++) null !== d[f] && (e = a.data(c + d[f]), e === b && (e = ""), 
                a.css(d[f], e));
            },
            setMode: function(a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b;
            },
            getBaseline: function(a, b) {
                var c, d;
                switch (a[0]) {
                  case "top":
                    c = 0;
                    break;

                  case "middle":
                    c = .5;
                    break;

                  case "bottom":
                    c = 1;
                    break;

                  default:
                    c = a[0] / b.height;
                }
                switch (a[1]) {
                  case "left":
                    d = 0;
                    break;

                  case "center":
                    d = .5;
                    break;

                  case "right":
                    d = 1;
                    break;

                  default:
                    d = a[1] / b.width;
                }
                return {
                    x: d,
                    y: c
                };
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    "float": b.css("float")
                }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {
                    width: b.width(),
                    height: b.height()
                }, f = document.activeElement;
                try {
                    f.id;
                } catch (g) {
                    f = document.body;
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), 
                "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each([ "top", "left", "bottom", "right" ], function(a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show();
            },
            removeWrapper: function(b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), 
                b;
            },
            setTransition: function(b, c, d, e) {
                return e = e || {}, a.each(c, function(a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1]);
                }), e;
            }
        }), a.fn.extend({
            effect: function() {
                function b(b) {
                    function d() {
                        a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b();
                    }
                    var e = a(this), f = c.complete, h = c.mode;
                    (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), d()) : g.call(e[0], c, d);
                }
                var c = d.apply(this, arguments), e = c.mode, f = c.queue, g = a.effects.effect[c.effect];
                return a.fx.off || !g ? e ? this[e](c.duration, c.complete) : this.each(function() {
                    c.complete && c.complete.call(this);
                }) : f === !1 ? this.each(b) : this.queue(f || "fx", b);
            },
            show: function(a) {
                return function(b) {
                    if (e(b)) return a.apply(this, arguments);
                    var c = d.apply(this, arguments);
                    return c.mode = "show", this.effect.call(this, c);
                };
            }(a.fn.show),
            hide: function(a) {
                return function(b) {
                    if (e(b)) return a.apply(this, arguments);
                    var c = d.apply(this, arguments);
                    return c.mode = "hide", this.effect.call(this, c);
                };
            }(a.fn.hide),
            toggle: function(a) {
                return function(b) {
                    if (e(b) || "boolean" == typeof b) return a.apply(this, arguments);
                    var c = d.apply(this, arguments);
                    return c.mode = "toggle", this.effect.call(this, c);
                };
            }(a.fn.toggle),
            cssUnit: function(b) {
                var c = this.css(b), d = [];
                return a.each([ "em", "px", "%", "pt" ], function(a, b) {
                    c.indexOf(b) > 0 && (d = [ parseFloat(c), b ]);
                }), d;
            }
        });
    }(), function() {
        var b = {};
        a.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(a, c) {
            b[c] = function(b) {
                return Math.pow(b, a + 2);
            };
        }), a.extend(b, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2);
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a);
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(a) {
                return a * a * (3 * a - 2);
            },
            Bounce: function(a) {
                for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11; ) ;
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2);
            }
        }), a.each(b, function(b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                return 1 - c(1 - a);
            }, a.easing["easeInOut" + b] = function(a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2;
            };
        });
    }();
}(jQuery), function(a) {
    var b = 0, c = {}, d = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", 
    d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "show", 
    a.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var b = this.options;
            this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), 
            b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), 
            b.active < 0 && (b.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a(),
                content: this.active.length ? this.active.next() : a()
            };
        },
        _createIcons: function() {
            var b = this.options.icons;
            b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), 
            this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), 
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), 
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
            }), "content" !== this.options.heightStyle && a.css("height", "");
        },
        _setOption: function(a, b) {
            return "active" === a ? (this._activate(b), void 0) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), 
            "icons" === a && (this._destroyIcons(), b && this._createIcons()), "disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b), 
            void 0);
        },
        _keydown: function(b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
                switch (b.keyCode) {
                  case c.RIGHT:
                  case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;

                  case c.LEFT:
                  case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;

                  case c.SPACE:
                  case c.ENTER:
                    this._eventHandler(b);
                    break;

                  case c.HOME:
                    f = this.headers[0];
                    break;

                  case c.END:
                    f = this.headers[d - 1];
                }
                f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault());
            }
        },
        _panelKeyDown: function(b) {
            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus();
        },
        refresh: function() {
            var b = this.options;
            this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, 
            this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, 
            this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), 
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
        },
        _refresh: function() {
            var c, d = this.options, e = d.heightStyle, f = this.element.parent(), g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
            this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), 
            this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(b) {
                var c = a(this), d = c.attr("id"), e = c.next(), f = e.attr("id");
                d || (d = g + "-header-" + b, c.attr("id", d)), f || (f = g + "-panel-" + b, e.attr("id", f)), 
                c.attr("aria-controls", f), e.attr("aria-labelledby", d);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(d.event), 
            "fill" === e ? (c = f.height(), this.element.siblings(":visible").each(function() {
                var b = a(this), d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0));
            }), this.headers.each(function() {
                c -= a(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (c = 0, this.headers.next().each(function() {
                c = Math.max(c, a(this).css("height", "").height());
            }).height(c));
        },
        _activate: function(b) {
            var c = this._findActive(b)[0];
            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return "number" == typeof b ? this.headers.eq(b) : a();
        },
        _setupEvents: function(b) {
            var c = {
                keydown: "_keydown"
            };
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(b) {
            var c = this.options, d = this.active, e = a(b.currentTarget), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : e.next(), i = d.next(), j = {
                oldHeader: d,
                oldPanel: i,
                newHeader: g ? a() : e,
                newPanel: h
            };
            b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), 
            this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), 
            c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), 
            f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), 
            c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), 
            e.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function(b) {
            var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, 
            this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), 
            d.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function() {
                return 0 === a(this).attr("tabIndex");
            }).attr("tabIndex", -1), c.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _animate: function(a, b, e) {
            var f, g, h, i = this, j = 0, k = a.length && (!b.length || a.index() < b.index()), l = this.options.animate || {}, m = k && l.down || l, n = function() {
                i._toggleComplete(e);
            };
            return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, 
            h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), 
            b.animate(c, {
                duration: h,
                easing: g,
                step: function(a, b) {
                    b.now = Math.round(a);
                }
            }), a.hide().animate(d, {
                duration: h,
                easing: g,
                complete: n,
                step: function(a, c) {
                    c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), 
                    j = 0);
                }
            }), void 0) : b.animate(c, h, g, n) : a.animate(d, h, g, n);
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), 
            b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a);
        }
    });
}(jQuery), function(a) {
    var b = 0;
    a.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, g = "input" === e;
            this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], 
            this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, c = !0, void 0;
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                      case f.PAGE_UP:
                        b = !0, this._move("previousPage", e);
                        break;

                      case f.PAGE_DOWN:
                        b = !0, this._move("nextPage", e);
                        break;

                      case f.UP:
                        b = !0, this._keyEvent("previous", e);
                        break;

                      case f.DOWN:
                        b = !0, this._keyEvent("next", e);
                        break;

                      case f.ENTER:
                      case f.NUMPAD_ENTER:
                        this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                        break;

                      case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;

                      case f.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                        break;

                      default:
                        c = !0, this._searchTimeout(e);
                    }
                },
                keypress: function(d) {
                    if (b) return b = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault(), 
                    void 0;
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                          case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;

                          case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;

                          case e.UP:
                            this._keyEvent("previous", d);
                            break;

                          case e.DOWN:
                            this._keyEvent("next", d);
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, a.preventDefault(), void 0) : (this._searchTimeout(a), void 0);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(a) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), 
                    this.close(a), this._change(a), void 0);
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                    });
                    var c = this.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                        var b = this;
                        this.document.one("mousedown", function(d) {
                            d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close();
                        });
                    });
                },
                menufocus: function(b, c) {
                    if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), 
                    this.document.one("mousemove", function() {
                        a(b.target).trigger(b.originalEvent);
                    }), void 0;
                    var d = c.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", b, {
                        item: d
                    }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value);
                },
                menuselect: function(a, b) {
                    var c = b.item.data("ui-autocomplete-item"), d = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, 
                    this._delay(function() {
                        this.previous = d, this.selectedItem = c;
                    })), !1 !== this._trigger("select", a, {
                        item: c
                    }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c;
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
            this.menu.element.remove(), this.liveRegion.remove();
        },
        _setOption: function(a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === a && b && this.xhr && this.xhr.abort();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), 
            b.length || (b = this.document[0].body), b;
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                d(a.ui.autocomplete.filter(b, c.term));
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function(a) {
                        e(a);
                    },
                    error: function() {
                        e([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, a));
            }, this.options.delay);
        },
        search: function(a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0;
        },
        _search: function(a) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: a
            }, this._response());
        },
        _response: function() {
            var a = this, c = ++b;
            return function(d) {
                c === b && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading");
            };
        },
        __response: function(a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), 
            this._trigger("open")) : this._close();
        },
        close: function(a) {
            this.cancelSearch = !0, this._close(a);
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
            this.isNewMenu = !0, this._trigger("close", a));
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            });
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b);
            });
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), 
            c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next();
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b);
        },
        _renderItem: function(b, c) {
            return a("<li>").append(a("<a>").text(c.label)).appendTo(b);
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), 
            this.menu.blur(), void 0) : (this.menu[a](b), void 0) : (this.search(null, b), void 0);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(a, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault());
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(b, c) {
            var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a);
            });
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(a) {
            var b;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, 
            this.liveRegion.text(b));
        }
    });
}(jQuery), function(a) {
    var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all", g = "ui-state-hover ui-state-active ", h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", i = function() {
        var b = a(this);
        setTimeout(function() {
            b.find(":ui-button").button("refresh");
        }, 1);
    }, j = function(b) {
        var c = b.name, d = b.form, e = a([]);
        return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
            return !this.form;
        })), e;
    };
    a.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), 
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), 
            this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var g = this, h = this.options, k = "checkbox" === this.type || "radio" === this.type, l = k ? "" : "ui-state-active", m = "ui-state-focus";
            null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), 
            this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                h.disabled || this === b && a(this).addClass("ui-state-active");
            }).bind("mouseleave" + this.eventNamespace, function() {
                h.disabled || a(this).removeClass(l);
            }).bind("click" + this.eventNamespace, function(a) {
                h.disabled && (a.preventDefault(), a.stopImmediatePropagation());
            }), this.element.bind("focus" + this.eventNamespace, function() {
                g.buttonElement.addClass(m);
            }).bind("blur" + this.eventNamespace, function() {
                g.buttonElement.removeClass(m);
            }), k && (this.element.bind("change" + this.eventNamespace, function() {
                e || g.refresh();
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
                h.disabled || (e = !1, c = a.pageX, d = a.pageY);
            }).bind("mouseup" + this.eventNamespace, function(a) {
                h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0);
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return h.disabled || e ? !1 : void 0;
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (h.disabled || e) return !1;
                a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                var b = g.element[0];
                j(b).not(b).map(function() {
                    return a(this).button("widget")[0];
                }).removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return h.disabled ? !1 : (a(this).addClass("ui-state-active"), b = this, g.document.one("mouseup", function() {
                    b = null;
                }), void 0);
            }).bind("mouseup" + this.eventNamespace, function() {
                return h.disabled ? !1 : (a(this).removeClass("ui-state-active"), void 0);
            }).bind("keydown" + this.eventNamespace, function(b) {
                return h.disabled ? !1 : ((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"), 
                void 0);
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                a(this).removeClass("ui-state-active");
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                b.keyCode === a.ui.keyCode.SPACE && a(this).click();
            })), this._setOption("disabled", h.disabled), this._resetButton();
        },
        _determineButtonType: function() {
            var a, b, c;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", 
            "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), 
            b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), 
            this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), 
            this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), 
            this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), 
            c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element;
        },
        widget: function() {
            return this.buttonElement;
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + g + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), 
            this.hasTitle || this.buttonElement.removeAttr("title");
        },
        _setOption: function(a, b) {
            return this._super(a, b), "disabled" === a ? (b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), 
            void 0) : (this._resetButton(), void 0);
        },
        refresh: function() {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function() {
                a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), 
            void 0;
            var b = this.buttonElement.removeClass(h), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
            d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), 
            d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), 
            d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), 
            this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), 
            this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "));
        }
    }), a.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset");
        },
        _init: function() {
            this.refresh();
        },
        _setOption: function(a, b) {
            "disabled" === a && this.buttons.button("option", a, b), this._super(a, b);
        },
        refresh: function() {
            var b = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return a(this).button("widget")[0];
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end();
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return a(this).button("widget")[0];
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        }
    });
}(jQuery), function(a, b) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function d(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.delegate(c, "mouseout", function() {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover");
        }).delegate(c, "mouseover", function() {
            a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
            a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function e(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b;
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var f, g = "datepicker";
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(a) {
            return e(this._defaults, a || {}), this;
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, 
            b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), 
            "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f);
        },
        _newInst: function(b, c) {
            var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: e,
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), 
            d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), 
            this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b));
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), 
            b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), 
            d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), 
            ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), 
            c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), 
                a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1;
            }));
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function(a) {
                    for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, 
                    d = e);
                    return d;
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), 
                a.input.attr("size", this._formatDate(a, f).length);
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), 
            a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), 
            this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(b, c, d, f, h) {
            var i, j, k, l, m, n = this._dialogInst;
            return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), 
            n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), 
            e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, 
            this._dialogInput.val(c), this._pos = h ? h.length ? h : [ h.pageX, h.pageY ] : null, 
            this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, 
            l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ j / 2 - 100 + l, k / 2 - 150 + m ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), 
            a.data(this._dialogInput[0], g, n), this;
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b), e = a.data(b, g);
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), 
            "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty());
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, 
            f.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }));
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, g);
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, 
            f.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }), this._disabledInputs[this._disabledInputs.length] = b);
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] === a) return !0;
            return !1;
        },
        _getInst: function(b) {
            try {
                return a.data(b, g);
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(c, d, f) {
            var g, h, i, j, k = this._getInst(c);
            return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, 
            "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), 
            h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), 
            e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), 
            null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), 
            "disabled" in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), 
            this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), 
            this._updateDatepicker(k)), void 0);
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c);
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b);
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
              case 9:
                a.datepicker._hideDatepicker(), g = !1;
                break;

              case 13:
                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), 
                e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), 
                c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [ d, f ])) : a.datepicker._hideDatepicker(), 
                !1;

              case 27:
                a.datepicker._hideDatepicker();
                break;

              case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              default:
                g = !1;
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation());
        },
        _doKeyPress: function(b) {
            var c, d, e = a.datepicker._getInst(b.target);
            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), 
            d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0;
        },
        _doKeyUp: function(b) {
            var c, d = a.datepicker._getInst(b.target);
            if (d.input.val() !== d.lastVal) try {
                c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), 
                c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d));
            } catch (e) {}
            return !0;
        },
        _showDatepicker: function(b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), 
            !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var c, d, f, g, h, i, j;
                c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), 
                c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), 
                d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [ b, c ]) : {}, f !== !1 && (e(c.settings, f), 
                c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), 
                a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), 
                a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
                    return g |= "fixed" === a(this).css("position"), !g;
                }), h = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), 
                c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), 
                a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c));
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), 
            b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var c, d = this._getNumberOfMonths(b), e = d[1], g = 17;
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), 
            b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), 
            b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), 
                c = b.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, 
            c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, 
            c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), 
            c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c;
        },
        _findPos: function(b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b)); ) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [ c.left, c.top ];
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, h = this._curInst;
            !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), 
            d = this._get(h, "duration"), e = function() {
                a.datepicker._tidyDialog(h);
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), 
            c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [ h.input ? h.input.val() : "", h ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(b) {
            if (a.datepicker._curInst) {
                var c = a(b.target), d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), 
            this._updateDatepicker(f));
        },
        _gotoToday: function(b) {
            var c, d = a(b), e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, 
            e.drawYear = e.selectedYear = e.currentYear) : (c = new Date(), e.selectedDay = c.getDate(), 
            e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), 
            this._notifyChange(e), this._adjustDate(d);
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), 
            this._notifyChange(f), this._adjustDate(e);
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), 
            f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, 
            f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "");
        },
        _selectDate: function(b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), 
            d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [ c, f ]) : f.input && f.input.trigger("change"), 
            f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], 
            "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), 
            e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
                a(this).val(e);
            }));
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [ b > 0 && 6 > b, "" ];
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), 
            c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1;
        },
        parseDate: function(b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            if (c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
            var e, f, g, h, i = 0, j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = "string" != typeof j ? j : new Date().getFullYear() % 100 + parseInt(j, 10), l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, m = (d ? d.dayNames : null) || this._defaults.dayNames, n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, o = (d ? d.monthNames : null) || this._defaults.monthNames, p = -1, q = -1, r = -1, s = -1, t = !1, u = function(a) {
                var c = e + 1 < b.length && b.charAt(e + 1) === a;
                return c && e++, c;
            }, v = function(a) {
                var b = u(a), d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = new RegExp("^\\d{1," + d + "}"), f = c.substring(i).match(e);
                if (!f) throw "Missing number at position " + i;
                return i += f[0].length, parseInt(f[0], 10);
            }, w = function(b, d, e) {
                var f = -1, g = a.map(u(b) ? e : d, function(a, b) {
                    return [ [ b, a ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                if (a.each(g, function(a, b) {
                    var d = b[1];
                    return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, 
                    !1) : void 0;
                }), -1 !== f) return f + 1;
                throw "Unknown name at position " + i;
            }, x = function() {
                if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                i++;
            };
            for (e = 0; e < b.length; e++) if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1; else switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;

              case "D":
                w("D", l, m);
                break;

              case "o":
                s = v("o");
                break;

              case "m":
                q = v("m");
                break;

              case "M":
                q = w("M", n, o);
                break;

              case "y":
                p = v("y");
                break;

              case "@":
                h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                break;

              case "!":
                h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, 
                r = h.getDate();
                break;

              case "'":
                u("'") ? x() : t = !0;
                break;

              default:
                x();
            }
            if (i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if (-1 === p ? p = new Date().getFullYear() : 100 > p && (p += new Date().getFullYear() - new Date().getFullYear() % 100 + (k >= p ? 0 : -100)), 
            s > -1) for (q = 1, r = s; ;) {
                if (f = this._getDaysInMonth(p, q - 1), f >= r) break;
                q++, r -= f;
            }
            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
            return h;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function(b) {
                var c = d + 1 < a.length && a.charAt(d + 1) === b;
                return c && d++, c;
            }, j = function(a, b, c) {
                var d = "" + b;
                if (i(a)) for (;d.length < c; ) d = "0" + d;
                return d;
            }, k = function(a, b, c, d) {
                return i(a) ? d[b] : c[b];
            }, l = "", m = !1;
            if (b) for (d = 0; d < a.length; d++) if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
              case "d":
                l += j("d", b.getDate(), 2);
                break;

              case "D":
                l += k("D", b.getDay(), e, f);
                break;

              case "o":
                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                l += j("m", b.getMonth() + 1, 2);
                break;

              case "M":
                l += k("M", b.getMonth(), g, h);
                break;

              case "y":
                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                break;

              case "@":
                l += b.getTime();
                break;

              case "!":
                l += 1e4 * b.getTime() + this._ticksTo1970;
                break;

              case "'":
                i("'") ? l += "'" : m = !0;
                break;

              default:
                l += a.charAt(d);
            }
            return l;
        },
        _possibleChars: function(a) {
            var b, c = "", d = !1, e = function(c) {
                var d = b + 1 < a.length && a.charAt(b + 1) === c;
                return d && b++, d;
            };
            for (b = 0; b < a.length; b++) if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                e("'") ? c += "'" : d = !0;
                break;

              default:
                c += a.charAt(b);
            }
            return c;
        },
        _get: function(a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c];
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e;
                } catch (h) {
                    d = b ? "" : d;
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), 
                a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, 
                this._adjustInstDate(a);
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date();
                return b.setDate(b.getDate() + a), b;
            }, f = function(c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                } catch (d) {}
                for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date(), f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j; ) {
                    switch (j[2] || "d") {
                      case "d":
                      case "D":
                        h += parseInt(j[1], 10);
                        break;

                      case "w":
                      case "W":
                        h += 7 * parseInt(j[1], 10);
                        break;

                      case "m":
                      case "M":
                        g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                        break;

                      case "y":
                      case "Y":
                        f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                    }
                    j = i.exec(c);
                }
                return new Date(f, g, h);
            }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), 
            g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g);
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
        },
        _setDate: function(a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), 
            a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), 
            this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a));
        },
        _getDate: function(a) {
            var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return b;
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M");
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M");
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker();
                    },
                    today: function() {
                        a.datepicker._gotoToday(d);
                    },
                    selectDay: function() {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1;
                    },
                    selectYear: function() {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1;
                    }
                };
                a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date(), P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, ab = a.drawYear;
            if (0 > _ && (_ += 12, ab--), $) for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), 
            b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b; ) _--, 
            0 > _ && (_ = 11, ab--);
            for (a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a)) : c, 
            d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", 
            e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a)) : e, 
            f = this._canAdjustMonth(a, 1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", 
            g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, 
            g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", 
            j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", 
            k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), 
            m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), 
            p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), 
            s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
                for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
                    if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", 
                    B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                          case 0:
                            B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                            break;

                          case U[1] - 1:
                            B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                            break;

                          default:
                            B += " ui-datepicker-group-middle", A = "";
                        }
                        B += "'>";
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", 
                    v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), 
                    F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X ? this.maxRows > G ? this.maxRows : G : G, 
                    this.maxRows = H, I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", 
                        v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [ I ]) : [ !0, "" ], 
                        M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", 
                        I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>";
                    }
                    _++, _ > 11 && (_ = 0, ab++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    x += B;
                }
                u += x;
            }
            return u += j, a._keyEvent = !1, u;
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                k = 0; 12 > k; k++) (!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>";
            }
            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml) if (a.yearshtml = "", 
            f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                for (l = this._get(a, "yearRange").split(":"), m = new Date().getFullYear(), n = function(a) {
                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(b) ? m : b;
                }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, 
                p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null;
            }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), 
            t += "</div>";
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), 
            ("M" === c || "Y" === c) && this._notifyChange(a);
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
            return d && e > d ? d : e;
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [ a.selectedYear, a.selectedMonth + 1, a ]);
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [ 1, 1 ] : "number" == typeof b ? [ 1, b ] : b;
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null);
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay();
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), 
            this._isInRange(a, f);
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = new Date().getFullYear(), g = parseInt(c[0], 10), 
            h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), 
            (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h);
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : new Date().getFullYear() % 100 + parseInt(b, 10), 
            {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            };
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
        }
    }), a.fn.datepicker = function(b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), 
        a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c)) : this.each(function() {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this ].concat(c)) : a.datepicker._attachDatepicker(this, b);
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
    }, a.datepicker = new c(), a.datepicker.initialized = !1, a.datepicker.uuid = new Date().getTime(), 
    a.datepicker.version = "1.10.3";
}(jQuery), function(a) {
    var b = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, c = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    a.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(b) {
                    var c = a(this).css(b).offset().top;
                    0 > c && a(this).css("top", b.top - c);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, 
            this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), 
            this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), 
            this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1;
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0);
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), 
            this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: a.noop,
        enable: a.noop,
        close: function(b) {
            var c = this;
            this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._destroyOverlay(), 
            this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), 
            this._hide(this.uiDialog, this.options.hide, function() {
                c._trigger("close", b);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(a, b) {
            var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return c && !b && this._trigger("focus", a), c;
        },
        open: function() {
            var b = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, 
            this.opener = a(this.document[0].activeElement), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                b._focusTabbable(), b._trigger("focus");
            }), this._trigger("open"), void 0);
        },
        _focusTabbable: function() {
            var a = this.element.find("[autofocus]");
            a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), 
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), 
            a.eq(0).focus();
        },
        _keepFocus: function(b) {
            function c() {
                var b = this.document[0].activeElement, c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                c || this._focusTabbable();
            }
            b.preventDefault(), c.call(this), this._delay(c);
        },
        _createWrapper: function() {
            this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), 
                    this.close(b), void 0;
                    if (b.keyCode === a.ui.keyCode.TAB) {
                        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
                        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (e.focus(1), 
                        b.preventDefault()) : (d.focus(1), b.preventDefault());
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var b;
            this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(b) {
                    a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
                }
            }), this.uiDialogTitlebarClose = a("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault(), this.close(a);
                }
            }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), 
            this._title(b), this.uiDialog.attr({
                "aria-labelledby": b.attr("id")
            });
        },
        _title: function(a) {
            this.options.title || a.html("&#160;"), a.text(this.options.title);
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), 
            this._createButtons();
        },
        _createButtons: function() {
            var b = this, c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), 
            void 0) : (a.each(c, function(c, d) {
                var e, f;
                d = a.isFunction(d) ? {
                    click: d,
                    text: c
                } : d, d = a.extend({
                    type: "button"
                }, d), e = d.click, d.click = function() {
                    e.apply(b.element[0], arguments);
                }, f = {
                    icons: d.icons,
                    text: d.showText
                }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet);
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), 
            void 0);
        },
        _makeDraggable: function() {
            function b(a) {
                return {
                    position: a.position,
                    offset: a.offset
                };
            }
            var c = this, d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, e) {
                    a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e));
                },
                drag: function(a, d) {
                    c._trigger("drag", a, b(d));
                },
                stop: function(e, f) {
                    d.position = [ f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop() ], 
                    a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f));
                }
            });
        },
        _makeResizable: function() {
            function b(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                };
            }
            var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function(d, e) {
                    a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e));
                },
                resize: function(a, d) {
                    c._trigger("resize", a, b(d));
                },
                stop: function(e, f) {
                    d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), 
                    c._unblockFrames(), c._trigger("resizeStop", e, b(f));
                }
            }).css("position", f);
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height);
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide();
        },
        _setOptions: function(d) {
            var e = this, f = !1, g = {};
            a.each(d, function(a, d) {
                e._setOption(a, d), a in b && (f = !0), a in c && (g[a] = d);
            }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g);
        },
        _setOption: function(a, b) {
            var c, d, e = this.uiDialog;
            "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), 
            "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), 
            "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + b
            }), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), 
            !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), 
            d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), 
            d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", 
            "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var b = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }).appendTo(b.parent()).offset(b.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(b) {
            return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var b = this, c = this.widgetFullName;
                a.ui.dialog.overlayInstances || this._delay(function() {
                    a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(d) {
                        b._allowInteraction(d) || (d.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable());
                    });
                }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), a.ui.dialog.overlayInstances++;
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), 
            this.overlay.remove(), this.overlay = null);
        }
    }), a.ui.dialog.overlayInstances = 0, a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
        _position: function() {
            var b, c = this.options.position, d = [], e = [ 0, 0 ];
            c ? (("string" == typeof c || "object" == typeof c && "0" in c) && (d = c.split ? c.split(" ") : [ c[0], c[1] ], 
            1 === d.length && (d[1] = d[0]), a.each([ "left", "top" ], function(a, b) {
                +d[a] === d[a] && (e[a] = d[a], d[a] = b);
            }), c = {
                my: d[0] + (e[0] < 0 ? e[0] : "+" + e[0]) + " " + d[1] + (e[1] < 0 ? e[1] : "+" + e[1]),
                at: d.join(" ")
            }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, 
            b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), 
            b || this.uiDialog.hide();
        }
    });
}(jQuery), function(a) {
    var b = /up|down|vertical/, c = /up|left|vertical|horizontal/;
    a.effects.effect.blind = function(d, e) {
        var f, g, h, i = a(this), j = [ "position", "top", "bottom", "left", "right", "height", "width" ], k = a.effects.setMode(i, d.mode || "hide"), l = d.direction || "up", m = b.test(l), n = m ? "height" : "width", o = m ? "top" : "left", p = c.test(l), q = {}, r = "show" === k;
        i.parent().is(".ui-effects-wrapper") ? a.effects.save(i.parent(), j) : a.effects.save(i, j), 
        i.show(), f = a.effects.createWrapper(i).css({
            overflow: "hidden"
        }), g = f[n](), h = parseFloat(f.css(o)) || 0, q[n] = r ? g : 0, p || (i.css(m ? "bottom" : "right", 0).css(m ? "top" : "left", "auto").css({
            position: "absolute"
        }), q[o] = r ? h : g + h), r && (f.css(n, 0), p || f.css(o, h + g)), f.animate(q, {
            duration: d.duration,
            easing: d.easing,
            queue: !1,
            complete: function() {
                "hide" === k && i.hide(), a.effects.restore(i, j), a.effects.removeWrapper(i), e();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.bounce = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "height", "width" ], i = a.effects.setMode(g, b.mode || "effect"), j = "hide" === i, k = "show" === i, l = b.direction || "up", m = b.distance, n = b.times || 5, o = 2 * n + (k || j ? 1 : 0), p = b.duration / o, q = b.easing, r = "up" === l || "down" === l ? "top" : "left", s = "up" === l || "left" === l, t = g.queue(), u = t.length;
        for ((k || j) && h.push("opacity"), a.effects.save(g, h), g.show(), a.effects.createWrapper(g), 
        m || (m = g["top" === r ? "outerHeight" : "outerWidth"]() / 3), k && (f = {
            opacity: 1
        }, f[r] = 0, g.css("opacity", 0).css(r, s ? 2 * -m : 2 * m).animate(f, p, q)), j && (m /= Math.pow(2, n - 1)), 
        f = {}, f[r] = 0, d = 0; n > d; d++) e = {}, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q).animate(f, p, q), 
        m = j ? 2 * m : m / 2;
        j && (e = {
            opacity: 0
        }, e[r] = (s ? "-=" : "+=") + m, g.animate(e, p, q)), g.queue(function() {
            j && g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c();
        }), u > 1 && t.splice.apply(t, [ 1, 0 ].concat(t.splice(u, o + 1))), g.dequeue();
    };
}(jQuery), function(a) {
    a.effects.effect.clip = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "height", "width" ], i = a.effects.setMode(g, b.mode || "hide"), j = "show" === i, k = b.direction || "vertical", l = "vertical" === k, m = l ? "height" : "width", n = l ? "top" : "left", o = {};
        a.effects.save(g, h), g.show(), d = a.effects.createWrapper(g).css({
            overflow: "hidden"
        }), e = "IMG" === g[0].tagName ? d : g, f = e[m](), j && (e.css(m, 0), e.css(n, f / 2)), 
        o[m] = j ? f : 0, o[n] = j ? 0 : f / 2, e.animate(o, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                j || g.hide(), a.effects.restore(g, h), a.effects.removeWrapper(g), c();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.drop = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], g = a.effects.setMode(e, b.mode || "hide"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i ? "pos" : "neg", l = {
            opacity: h ? 1 : 0
        };
        a.effects.save(e, f), e.show(), a.effects.createWrapper(e), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0) / 2, 
        h && e.css("opacity", 0).css(j, "pos" === k ? -d : d), l[j] = (h ? "pos" === k ? "+=" : "-=" : "pos" === k ? "-=" : "+=") + d, 
        e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.explode = function(b, c) {
        function d() {
            t.push(this), t.length === l * m && e();
        }
        function e() {
            n.css({
                visibility: "visible"
            }), a(t).remove(), p || n.hide(), c();
        }
        var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, m = l, n = a(this), o = a.effects.setMode(n, b.mode || "hide"), p = "show" === o, q = n.show().css("visibility", "hidden").offset(), r = Math.ceil(n.outerWidth() / m), s = Math.ceil(n.outerHeight() / l), t = [];
        for (f = 0; l > f; f++) for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, 
        j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -g * r,
            top: -f * s
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: r,
            height: s,
            left: h + (p ? j * r : 0),
            top: i + (p ? k * s : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: h + (p ? 0 : j * r),
            top: i + (p ? 0 : k * s),
            opacity: p ? 1 : 0
        }, b.duration || 500, b.easing, d);
    };
}(jQuery), function(a) {
    a.effects.effect.fade = function(b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "toggle");
        d.animate({
            opacity: e
        }, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    };
}(jQuery), function(a) {
    a.effects.effect.fold = function(b, c) {
        var d, e, f = a(this), g = [ "position", "top", "bottom", "left", "right", "height", "width" ], h = a.effects.setMode(f, b.mode || "hide"), i = "show" === h, j = "hide" === h, k = b.size || 15, l = /([0-9]+)%/.exec(k), m = !!b.horizFirst, n = i !== m, o = n ? [ "width", "height" ] : [ "height", "width" ], p = b.duration / 2, q = {}, r = {};
        a.effects.save(f, g), f.show(), d = a.effects.createWrapper(f).css({
            overflow: "hidden"
        }), e = n ? [ d.width(), d.height() ] : [ d.height(), d.width() ], l && (k = parseInt(l[1], 10) / 100 * e[j ? 0 : 1]), 
        i && d.css(m ? {
            height: 0,
            width: k
        } : {
            height: k,
            width: 0
        }), q[o[0]] = i ? e[0] : k, r[o[1]] = i ? e[1] : 0, d.animate(q, p, b.easing).animate(r, p, b.easing, function() {
            j && f.hide(), a.effects.restore(f, g), a.effects.removeWrapper(f), c();
        });
    };
}(jQuery), function(a) {
    a.effects.effect.highlight = function(b, c) {
        var d = a(this), e = [ "backgroundImage", "backgroundColor", "opacity" ], f = a.effects.setMode(d, b.mode || "show"), g = {
            backgroundColor: d.css("backgroundColor")
        };
        "hide" === f && (g.opacity = 0), a.effects.save(d, e), d.show().css({
            backgroundImage: "none",
            backgroundColor: b.color || "#ffff99"
        }).animate(g, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === f && d.hide(), a.effects.restore(d, e), c();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.pulsate = function(b, c) {
        var d, e = a(this), f = a.effects.setMode(e, b.mode || "show"), g = "show" === f, h = "hide" === f, i = g || "hide" === f, j = 2 * (b.times || 5) + (i ? 1 : 0), k = b.duration / j, l = 0, m = e.queue(), n = m.length;
        for ((g || !e.is(":visible")) && (e.css("opacity", 0).show(), l = 1), d = 1; j > d; d++) e.animate({
            opacity: l
        }, k, b.easing), l = 1 - l;
        e.animate({
            opacity: l
        }, k, b.easing), e.queue(function() {
            h && e.hide(), c();
        }), n > 1 && m.splice.apply(m, [ 1, 0 ].concat(m.splice(n, j + 1))), e.dequeue();
    };
}(jQuery), function(a) {
    a.effects.effect.puff = function(b, c) {
        var d = a(this), e = a.effects.setMode(d, b.mode || "hide"), f = "hide" === e, g = parseInt(b.percent, 10) || 150, h = g / 100, i = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        };
        a.extend(b, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: e,
            complete: c,
            percent: f ? g : 100,
            from: f ? i : {
                height: i.height * h,
                width: i.width * h,
                outerHeight: i.outerHeight * h,
                outerWidth: i.outerWidth * h
            }
        }), d.effect(b);
    }, a.effects.effect.scale = function(b, c) {
        var d = a(this), e = a.extend(!0, {}, b), f = a.effects.setMode(d, b.mode || "effect"), g = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === f ? 0 : 100), h = b.direction || "both", i = b.origin, j = {
            height: d.height(),
            width: d.width(),
            outerHeight: d.outerHeight(),
            outerWidth: d.outerWidth()
        }, k = {
            y: "horizontal" !== h ? g / 100 : 1,
            x: "vertical" !== h ? g / 100 : 1
        };
        e.effect = "size", e.queue = !1, e.complete = c, "effect" !== f && (e.origin = i || [ "middle", "center" ], 
        e.restore = !0), e.from = b.from || ("show" === f ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : j), e.to = {
            height: j.height * k.y,
            width: j.width * k.x,
            outerHeight: j.outerHeight * k.y,
            outerWidth: j.outerWidth * k.x
        }, e.fade && ("show" === f && (e.from.opacity = 0, e.to.opacity = 1), "hide" === f && (e.from.opacity = 1, 
        e.to.opacity = 0)), d.effect(e);
    }, a.effects.effect.size = function(b, c) {
        var d, e, f, g = a(this), h = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], i = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], j = [ "width", "height", "overflow" ], k = [ "fontSize" ], l = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], m = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], n = a.effects.setMode(g, b.mode || "effect"), o = b.restore || "effect" !== n, p = b.scale || "both", q = b.origin || [ "middle", "center" ], r = g.css("position"), s = o ? h : i, t = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === n && g.show(), d = {
            height: g.height(),
            width: g.width(),
            outerHeight: g.outerHeight(),
            outerWidth: g.outerWidth()
        }, "toggle" === b.mode && "show" === n ? (g.from = b.to || t, g.to = b.from || d) : (g.from = b.from || ("show" === n ? t : d), 
        g.to = b.to || ("hide" === n ? t : d)), f = {
            from: {
                y: g.from.height / d.height,
                x: g.from.width / d.width
            },
            to: {
                y: g.to.height / d.height,
                x: g.to.width / d.width
            }
        }, ("box" === p || "both" === p) && (f.from.y !== f.to.y && (s = s.concat(l), g.from = a.effects.setTransition(g, l, f.from.y, g.from), 
        g.to = a.effects.setTransition(g, l, f.to.y, g.to)), f.from.x !== f.to.x && (s = s.concat(m), 
        g.from = a.effects.setTransition(g, m, f.from.x, g.from), g.to = a.effects.setTransition(g, m, f.to.x, g.to))), 
        ("content" === p || "both" === p) && f.from.y !== f.to.y && (s = s.concat(k).concat(j), 
        g.from = a.effects.setTransition(g, k, f.from.y, g.from), g.to = a.effects.setTransition(g, k, f.to.y, g.to)), 
        a.effects.save(g, s), g.show(), a.effects.createWrapper(g), g.css("overflow", "hidden").css(g.from), 
        q && (e = a.effects.getBaseline(q, d), g.from.top = (d.outerHeight - g.outerHeight()) * e.y, 
        g.from.left = (d.outerWidth - g.outerWidth()) * e.x, g.to.top = (d.outerHeight - g.to.outerHeight) * e.y, 
        g.to.left = (d.outerWidth - g.to.outerWidth) * e.x), g.css(g.from), ("content" === p || "both" === p) && (l = l.concat([ "marginTop", "marginBottom" ]).concat(k), 
        m = m.concat([ "marginLeft", "marginRight" ]), j = h.concat(l).concat(m), g.find("*[width]").each(function() {
            var c = a(this), d = {
                height: c.height(),
                width: c.width(),
                outerHeight: c.outerHeight(),
                outerWidth: c.outerWidth()
            };
            o && a.effects.save(c, j), c.from = {
                height: d.height * f.from.y,
                width: d.width * f.from.x,
                outerHeight: d.outerHeight * f.from.y,
                outerWidth: d.outerWidth * f.from.x
            }, c.to = {
                height: d.height * f.to.y,
                width: d.width * f.to.x,
                outerHeight: d.height * f.to.y,
                outerWidth: d.width * f.to.x
            }, f.from.y !== f.to.y && (c.from = a.effects.setTransition(c, l, f.from.y, c.from), 
            c.to = a.effects.setTransition(c, l, f.to.y, c.to)), f.from.x !== f.to.x && (c.from = a.effects.setTransition(c, m, f.from.x, c.from), 
            c.to = a.effects.setTransition(c, m, f.to.x, c.to)), c.css(c.from), c.animate(c.to, b.duration, b.easing, function() {
                o && a.effects.restore(c, j);
            });
        })), g.animate(g.to, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                0 === g.to.opacity && g.css("opacity", g.from.opacity), "hide" === n && g.hide(), 
                a.effects.restore(g, s), o || ("static" === r ? g.css({
                    position: "relative",
                    top: g.to.top,
                    left: g.to.left
                }) : a.each([ "top", "left" ], function(a, b) {
                    g.css(b, function(b, c) {
                        var d = parseInt(c, 10), e = a ? g.to.left : g.to.top;
                        return "auto" === c ? e + "px" : d + e + "px";
                    });
                })), a.effects.removeWrapper(g), c();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.shake = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "height", "width" ], g = a.effects.setMode(e, b.mode || "effect"), h = b.direction || "left", i = b.distance || 20, j = b.times || 3, k = 2 * j + 1, l = Math.round(b.duration / k), m = "up" === h || "down" === h ? "top" : "left", n = "up" === h || "left" === h, o = {}, p = {}, q = {}, r = e.queue(), s = r.length;
        for (a.effects.save(e, f), e.show(), a.effects.createWrapper(e), o[m] = (n ? "-=" : "+=") + i, 
        p[m] = (n ? "+=" : "-=") + 2 * i, q[m] = (n ? "-=" : "+=") + 2 * i, e.animate(o, l, b.easing), 
        d = 1; j > d; d++) e.animate(p, l, b.easing).animate(q, l, b.easing);
        e.animate(p, l, b.easing).animate(o, l / 2, b.easing).queue(function() {
            "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
        }), s > 1 && r.splice.apply(r, [ 1, 0 ].concat(r.splice(s, k + 1))), e.dequeue();
    };
}(jQuery), function(a) {
    a.effects.effect.slide = function(b, c) {
        var d, e = a(this), f = [ "position", "top", "bottom", "left", "right", "width", "height" ], g = a.effects.setMode(e, b.mode || "show"), h = "show" === g, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i, l = {};
        a.effects.save(e, f), e.show(), d = b.distance || e["top" === j ? "outerHeight" : "outerWidth"](!0), 
        a.effects.createWrapper(e).css({
            overflow: "hidden"
        }), h && e.css(j, k ? isNaN(d) ? "-" + d : -d : d), l[j] = (h ? k ? "+=" : "-=" : k ? "-=" : "+=") + d, 
        e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                "hide" === g && e.hide(), a.effects.restore(e, f), a.effects.removeWrapper(e), c();
            }
        });
    };
}(jQuery), function(a) {
    a.effects.effect.transfer = function(b, c) {
        var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"), h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(), k = {
            top: j.top - h,
            left: j.left - i,
            height: e.innerHeight(),
            width: e.innerWidth()
        }, l = d.offset(), m = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
            top: l.top - h,
            left: l.left - i,
            height: d.innerHeight(),
            width: d.innerWidth(),
            position: f ? "fixed" : "absolute"
        }).animate(k, b.duration, b.easing, function() {
            m.remove(), c();
        });
    };
}(jQuery), function(a) {
    a.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, a.proxy(function(a) {
                this.options.disabled && a.preventDefault();
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
            this._on({
                "mousedown .ui-menu-item > a": function(a) {
                    a.preventDefault();
                },
                "click .ui-state-disabled > a": function(a) {
                    a.preventDefault();
                },
                "click .ui-menu-item:has(a)": function(b) {
                    var c = a(b.target).closest(".ui-menu-item");
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, 
                    this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(b) {
                    var c = a(b.currentTarget);
                    c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.children(".ui-menu-item").eq(0);
                    b || this.focus(a, c);
                },
                blur: function(b) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(b) {
                    a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove();
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
        },
        _keydown: function(b) {
            function c(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            }
            var d, e, f, g, h, i = !0;
            switch (b.keyCode) {
              case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;

              case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;

              case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;

              case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;

              case a.ui.keyCode.UP:
                this.previous(b);
                break;

              case a.ui.keyCode.DOWN:
                this.next(b);
                break;

              case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;

              case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;

              case a.ui.keyCode.ENTER:
              case a.ui.keyCode.SPACE:
                this._activate(b);
                break;

              case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;

              default:
                i = !1, e = this.previousFilter || "", f = String.fromCharCode(b.keyCode), g = !1, 
                clearTimeout(this.filterTimer), f === e ? g = !0 : f = e + f, h = new RegExp("^" + c(f), "i"), 
                d = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return h.test(a(this).children("a").text());
                }), d = g && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, 
                d.length || (f = String.fromCharCode(b.keyCode), h = new RegExp("^" + c(f), "i"), 
                d = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return h.test(a(this).children("a").text());
                })), d.length ? (this.focus(b, d), d.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
            }
            i && b.preventDefault();
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a));
        },
        refresh: function() {
            var b, c = this.options.icons.submenu, d = this.element.find(this.options.menus);
            d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this), d = b.prev("a"), e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"));
            }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), b.children(":not(.ui-menu-item)").each(function() {
                var b = a(this);
                /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider");
            }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), 
            this._super(a, b);
        },
        focus: function(a, b) {
            var c, d;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), 
            d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), 
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), 
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), 
            this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            });
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, 
            f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), 
            this.active = null, this._trigger("blur", a, {
                item: this.active
            }));
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a);
            }, this.delay));
        },
        _open: function(b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d;
            }, this.delay);
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b));
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b);
            }));
        },
        next: function(a) {
            this._move("next", "first", a);
        },
        previous: function(a) {
            this._move("prev", "last", a);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), 
            d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), 
            this.focus(c, d);
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d - e < 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), 
            void 0) : (this.next(b), void 0);
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first())), 
            void 0) : (this.next(b), void 0);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c);
        }
    });
}(jQuery), function(a, b) {
    function c(a, b, c) {
        return [ parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1) ];
    }
    function d(b, c) {
        return parseInt(a.css(b, c), 10) || 0;
    }
    function e(b) {
        var c = b[0];
        return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {
                top: b.scrollTop(),
                left: b.scrollLeft()
            }
        } : c.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: c.pageY,
                left: c.pageX
            }
        } : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
        };
    }
    a.ui = a.ui || {};
    var f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
    a.position = {
        scrollbarWidth: function() {
            if (f !== b) return f;
            var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = e.children()[0];
            return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, 
            c === d && (d = e[0].clientWidth), e.remove(), f = c - d;
        },
        getScrollInfo: function(b) {
            var c = b.isWindow ? "" : b.element.css("overflow-x"), d = b.isWindow ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
            return {
                width: f ? a.position.scrollbarWidth() : 0,
                height: e ? a.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(b) {
            var c = a(b || window), d = a.isWindow(c[0]);
            return {
                element: c,
                isWindow: d,
                offset: c.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d ? c.width() : c.outerWidth(),
                height: d ? c.height() : c.outerHeight()
            };
        }
    }, a.fn.position = function(b) {
        if (!b || !b.of) return o.apply(this, arguments);
        b = a.extend({}, b);
        var f, n, p, q, r, s, t = a(b.of), u = a.position.getWithinInfo(b.within), v = a.position.getScrollInfo(u), w = (b.collision || "flip").split(" "), x = {};
        return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, 
        q = s.offset, r = a.extend({}, q), a.each([ "my", "at" ], function() {
            var a, c, d = (b[this] || "").split(" ");
            1 === d.length && (d = j.test(d[0]) ? d.concat([ "center" ]) : k.test(d[0]) ? [ "center" ].concat(d) : [ "center", "center" ]), 
            d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), 
            c = l.exec(d[1]), x[this] = [ a ? a[0] : 0, c ? c[0] : 0 ], b[this] = [ m.exec(d[0])[0], m.exec(d[1])[0] ];
        }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), 
        "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), 
        r.left += f[0], r.top += f[1], this.each(function() {
            var e, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = d(this, "marginLeft"), s = d(this, "marginTop"), y = l + o + d(this, "marginRight") + v.width, z = m + s + d(this, "marginBottom") + v.height, A = a.extend({}, r), B = c(x.my, k.outerWidth(), k.outerHeight());
            "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), 
            A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), 
            A.top = i(A.top)), e = {
                marginLeft: o,
                marginTop: s
            }, a.each([ "left", "top" ], function(c, d) {
                a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                    targetWidth: n,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: e,
                    collisionWidth: y,
                    collisionHeight: z,
                    offset: [ f[0] + B[0], f[1] + B[1] ],
                    my: b.my,
                    at: b.at,
                    within: u,
                    elem: k
                });
            }), b.using && (j = function(a) {
                var c = q.left - A.left, d = c + n - l, e = q.top - A.top, f = e + p - m, i = {
                    target: {
                        element: t,
                        left: q.left,
                        top: q.top,
                        width: n,
                        height: p
                    },
                    element: {
                        element: k,
                        left: A.left,
                        top: A.top,
                        width: l,
                        height: m
                    },
                    horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                    vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                };
                l > n && h(c + d) < n && (i.horizontal = "center"), m > p && h(e + f) < p && (i.vertical = "middle"), 
                i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i);
            }), k.offset(a.extend(A, {
                using: j
            }));
        });
    }, a.ui.position = {
        fit: {
            left: function(a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, 
                a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left);
            },
            top: function(a, b) {
                var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, 
                a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top);
            }
        },
        flip: {
            left: function(a, b) {
                var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, 
                (d > 0 || h(d) < l) && (a.left += m + n + o));
            },
            top: function(a, b) {
                var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, 
                a.top + n + o + p > l && (c > 0 || h(c) < l) && (a.top += n + o + p));
            }
        },
        flipfit: {
            left: function() {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
        b = document.createElement(g ? "div" : "body"), d = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, g && a.extend(d, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (f in d) b.style[f] = d[f];
        b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), 
        h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, 
        a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b);
    }();
}(jQuery), function(a, b) {
    a.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), 
            this._refreshValue();
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.valueDiv.remove();
        },
        value: function(a) {
            return a === b ? this.options.value : (this.options.value = this._constrainedValue(a), 
            this._refreshValue(), void 0);
        },
        _constrainedValue: function(a) {
            return a === b && (a = this.options.value), this.indeterminate = a === !1, "number" != typeof a && (a = 0), 
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, a));
        },
        _setOptions: function(a) {
            var b = a.value;
            delete a.value, this._super(a), this.options.value = this._constrainedValue(b), 
            this._refreshValue();
        },
        _setOption: function(a, b) {
            "max" === a && (b = Math.max(this.min, b)), this._super(a, b);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var b = this.options.value, c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(c.toFixed(0) + "%"), 
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), 
            this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": b
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, 
            this._trigger("change")), b === this.options.max && this._trigger("complete");
        }
    });
}(jQuery), function(a) {
    var b = 5;
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var b, c, d = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", g = [];
            for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), 
            e = e.slice(0, c)), b = e.length; c > b; b++) g.push(f);
            this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), 
            this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b);
            });
        },
        _createRange: function() {
            var b = this.options, c = "";
            b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [ b.values[0], b.values[0] ] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : this.range = a([]);
        },
        _setupEvents: function() {
            var a = this.handles.add(this.range).filter("a");
            this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a);
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c, d, e, f, g, h, i, j, k = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(b) {
                var c = Math.abs(d - k.values(b));
                (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, 
                f = a(this), g = b);
            }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, 
            f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), 
            this._clickOffset = j ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1;
        },
        _mouseStop: function(a) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), 
            this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, 
            this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, 
            c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), 
            e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("start", a, c);
        },
        _slide: function(a, b, c) {
            var d, e, f;
            this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 
            2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), 
            c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c,
                values: e
            }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, {
                handle: this.handles[b],
                value: c
            }), f !== !1 && this.value(c));
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), 
            c.values = this.values()), this._trigger("stop", a, c);
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), 
                c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c);
            }
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), 
            this._change(null, 0), void 0) : this._value();
        },
        values: function(b, c) {
            var d, e, f;
            if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), 
            this._refreshValue(), this._change(null, b), void 0;
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), 
            this._change(null, f);
            this._refreshValue();
        },
        _setOption: function(b, c) {
            var d, e = 0;
            switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), 
            a.Widget.prototype._setOption.apply(this, arguments), b) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue();
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1) this._change(null, d);
                this._animateOff = !1;
                break;

              case "min":
              case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a);
        },
        _values: function(a) {
            var b, c, d;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(), d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c;
            }
            return [];
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.options.max;
        },
        _refreshValue: function() {
            var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
            this.options.values && this.options.values.length ? this.handles.each(function(d) {
                c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", 
                a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    left: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    width: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    bottom: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    height: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))), b = c;
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, 
            k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), 
            "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: c + "%"
            }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                width: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: c + "%"
            }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                height: 100 - c + "%"
            }, {
                queue: !1,
                duration: h.animate
            }));
        },
        _handleEvents: {
            keydown: function(c) {
                var d, e, f, g, h = a(c.target).data("ui-slider-handle-index");
                switch (c.keyCode) {
                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_UP:
                  case a.ui.keyCode.PAGE_DOWN:
                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), 
                    d = this._start(c, h), d === !1)) return;
                }
                switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), 
                c.keyCode) {
                  case a.ui.keyCode.HOME:
                    f = this._valueMin();
                    break;

                  case a.ui.keyCode.END:
                    f = this._valueMax();
                    break;

                  case a.ui.keyCode.PAGE_UP:
                    f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                    break;

                  case a.ui.keyCode.PAGE_DOWN:
                    f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                    if (e === this._valueMax()) return;
                    f = this._trimAlignValue(e + g);
                    break;

                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (e === this._valueMin()) return;
                    f = this._trimAlignValue(e - g);
                }
                this._slide(c, h, f);
            },
            click: function(a) {
                a.preventDefault();
            },
            keyup: function(b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), 
                a(b.target).removeClass("ui-state-active"));
            }
        }
    });
}(jQuery), function(a) {
    function b(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change");
        };
    }
    a.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var b = {}, c = this.element;
            return a.each([ "min", "max", "step" ], function(a, d) {
                var e = c.attr(d);
                void 0 !== e && e.length && (b[d] = e);
            }), b;
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(a) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), 
                this.previous !== this.element.val() && this._trigger("change", a), void 0);
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a);
                    }, 100), a.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(b) {
                function c() {
                    var a = this.element[0] === this.document[0].activeElement;
                    a || (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d;
                    }));
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), 
                b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, c.call(this);
                }), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(b) {
                return a(b.currentTarget).hasClass("ui-state-active") ? this._start(b) === !1 ? !1 : (this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b), 
                void 0) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), 
            this.buttons.height() > Math.ceil(.5 * a.height()) && a.height() > 0 && a.height(a.height()), 
            this.options.disabled && this.disable();
        },
        _keydown: function(b) {
            var c = this.options, d = a.ui.keyCode;
            switch (b.keyCode) {
              case d.UP:
                return this._repeat(null, 1, b), !0;

              case d.DOWN:
                return this._repeat(null, -1, b), !0;

              case d.PAGE_UP:
                return this._repeat(null, c.page, b), !0;

              case d.PAGE_DOWN:
                return this._repeat(null, -c.page, b), !0;
            }
            return !1;
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>";
        },
        _start: function(a) {
            return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), 
            this.spinning = !0, !0) : !1;
        },
        _repeat: function(a, b, c) {
            a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, b, c);
            }, a), this._spin(b * this.options.step, c);
        },
        _spin: function(a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), 
            this.spinning && this._trigger("spin", b, {
                value: c
            }) === !1 || (this._value(c), this.counter++);
        },
        _increment: function(b) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1;
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), 
            a;
        },
        _precisionOf: function(a) {
            var b = a.toString(), c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1;
        },
        _adjustValue: function(a) {
            var b, c, d = this.options;
            return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, 
            a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a;
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", a));
        },
        _setOption: function(a, b) {
            if ("culture" === a || "numberFormat" === a) {
                var c = this._parse(this.element.val());
                return this.options[a] = b, this.element.val(this._format(c)), void 0;
            }
            ("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), 
            "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), 
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), 
            this._super(a, b), "disabled" === a && (b ? (this.element.prop("disabled", !0), 
            this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")));
        },
        _setOptions: b(function(a) {
            this._super(a), this._value(this.element.val());
        }),
        _parse: function(a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), 
            "" === a || isNaN(a) ? null : a;
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        _value: function(a, b) {
            var c;
            "" !== a && (c = this._parse(a), null !== c && (b || (c = this._adjustValue(c)), 
            a = this._format(c))), this.element.val(a), this._refresh();
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: b(function(a) {
            this._stepUp(a);
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop());
        },
        stepDown: b(function(a) {
            this._stepDown(a);
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop());
        },
        pageUp: b(function(a) {
            this._stepUp((a || 1) * this.options.page);
        }),
        pageDown: b(function(a) {
            this._stepDown((a || 1) * this.options.page);
        }),
        value: function(a) {
            return arguments.length ? (b(this._value).call(this, a), void 0) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    });
}(jQuery), function(a, b) {
    function c() {
        return ++e;
    }
    function d(a) {
        return a.hash.length > 1 && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""));
    }
    var e = 0, f = /#.*$/;
    a.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var b = this, c = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault();
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a);
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), 
            this._refresh(), this.active.length && this.load(c.active);
        },
        _initialActive: function() {
            var b = this.options.active, c = this.options.collapsible, d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function(c, e) {
                return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0;
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), 
            b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), 
            !c && b === !1 && this.anchors.length && (b = 0), b;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            };
        },
        _tabKeydown: function(b) {
            var c = a(this.document[0].activeElement).closest("li"), d = this.tabs.index(c), e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                    d++;
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.LEFT:
                    e = !1, d--;
                    break;

                  case a.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;

                  case a.ui.keyCode.HOME:
                    d = 0;
                    break;

                  case a.ui.keyCode.SPACE:
                    return b.preventDefault(), clearTimeout(this.activating), this._activate(d), void 0;

                  case a.ui.keyCode.ENTER:
                    return b.preventDefault(), clearTimeout(this.activating), this._activate(d === this.options.active ? !1 : d), 
                    void 0;

                  default:
                    return;
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), 
                b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", d);
                }, this.delay));
            }
        },
        _panelKeydown: function(b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), 
            this.active.focus());
        },
        _handlePageNav: function(b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(b, c) {
            function d() {
                return b > e && (b = 0), 0 > b && (b = e), b;
            }
            for (var e = this.tabs.length - 1; -1 !== a.inArray(d(), this.options.disabled); ) b = c ? b + 1 : b - 1;
            return b;
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a;
        },
        _setOption: function(a, b) {
            return "active" === a ? (this._activate(b), void 0) : "disabled" === a ? (this._setupDisabled(b), 
            void 0) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), 
            b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), 
            "heightStyle" === a && this._setupHeightStyle(b), void 0);
        },
        _tabId: function(a) {
            return a.attr("aria-controls") || "ui-tabs-" + c();
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var b = this.options, c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a);
            }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, 
            this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, 
            this.active = a()), this._refresh();
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var b = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), 
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return a("a", this)[0];
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = a(), this.anchors.each(function(c, e) {
                var f, g, h, i = a(e).uniqueId().attr("id"), j = a(e).closest("li"), k = j.attr("aria-controls");
                d(e) ? (f = e.hash, g = b.element.find(b._sanitizeSelector(f))) : (h = b._tabId(j), 
                f = "#" + h, g = b.element.find(f), g.length || (g = b._createPanel(h), g.insertAfter(b.panels[c - 1] || b.tablist)), 
                g.attr("aria-live", "polite")), g.length && (b.panels = b.panels.add(g)), k && j.data("ui-tabs-aria-controls", k), 
                j.attr({
                    "aria-controls": f.substring(1),
                    "aria-labelledby": i
                }), g.attr("aria-labelledby", i);
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0);
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
        },
        _setupDisabled: function(b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b;
        },
        _setupEvents: function(b) {
            var c = {
                click: function(a) {
                    a.preventDefault();
                }
            };
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, c), 
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var b = a(this), d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                c -= a(this).outerHeight(!0);
            }), this.panels.each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                c = Math.max(c, a(this).height("").height());
            }).height(c));
        },
        _eventHandler: function(b) {
            var c = this.options, d = this.active, e = a(b.currentTarget), f = e.closest("li"), g = f[0] === d[0], h = g && c.collapsible, i = h ? a() : this._getPanelForTab(f), j = d.length ? this._getPanelForTab(d) : a(), k = {
                oldTab: d,
                oldPanel: j,
                newTab: h ? a() : f,
                newPanel: i
            };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), 
            this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            i.length && this.load(this.tabs.index(f), b), this._toggle(b, k));
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c);
            }
            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), 
                d());
            }
            var f = this, g = c.newPanel, h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e();
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), 
            e()), h.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), c.oldTab.attr("aria-selected", "false"), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex");
            }).attr("tabIndex", -1), g.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), c.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },
        _activate: function(b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return b === !1 ? a() : this.tabs.eq(b);
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), 
            a;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), 
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), 
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), 
            this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
            }), this.tabs.each(function() {
                var b = a(this), c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(c) {
            var d = this.options.disabled;
            d !== !1 && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function(a) {
                return a !== c ? a : null;
            }) : a.map(this.tabs, function(a, b) {
                return b !== c ? b : null;
            })), this._setupDisabled(d));
        },
        disable: function(c) {
            var d = this.options.disabled;
            if (d !== !0) {
                if (c === b) d = !0; else {
                    if (c = this._getIndex(c), -1 !== a.inArray(c, d)) return;
                    d = a.isArray(d) ? a.merge([ c ], d).sort() : [ c ];
                }
                this._setupDisabled(d);
            }
        },
        load: function(b, c) {
            b = this._getIndex(b);
            var e = this, f = this.tabs.eq(b), g = f.find(".ui-tabs-anchor"), h = this._getPanelForTab(f), i = {
                tab: f,
                panel: h
            };
            d(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, c, i)), this.xhr && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), 
            h.attr("aria-busy", "true"), this.xhr.success(function(a) {
                setTimeout(function() {
                    h.html(a), e._trigger("load", c, i);
                }, 1);
            }).complete(function(a, b) {
                setTimeout(function() {
                    "abort" === b && e.panels.stop(!1, !0), f.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), 
                    a === e.xhr && delete e.xhr;
                }, 1);
            })));
        },
        _ajaxSettings: function(b, c, d) {
            var e = this;
            return {
                url: b.attr("href"),
                beforeSend: function(b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d));
                }
            };
        },
        _getPanelForTab: function(b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c));
        }
    });
}(jQuery), function(a) {
    function b(b, c) {
        var d = (b.attr("aria-describedby") || "").split(/\s+/);
        d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")));
    }
    function c(b) {
        var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = a.inArray(c, d);
        -1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), 
        d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby");
    }
    var d = 0;
    a.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var b = a(this).attr("title") || "";
                return a("<a>").text(b).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable();
        },
        _setOption: function(b, c) {
            var d = this;
            return "disabled" === b ? (this[c ? "_disable" : "_enable"](), this.options[b] = c, 
            void 0) : (this._super(b, c), "content" === b && a.each(this.tooltips, function(a, b) {
                d._updateContent(b);
            }), void 0);
        },
        _disable: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d[0], b.close(e, !0);
            }), this.element.find(this.options.items).addBack().each(function() {
                var b = a(this);
                b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "");
            });
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var b = a(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"));
            });
        },
        open: function(b) {
            var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), 
            d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                var b, d = a(this);
                d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, 
                c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                }, d.attr("title", ""));
            }), this._updateContent(d, b));
        },
        _updateContent: function(a, b) {
            var c, d = this.options.content, e = this, f = b ? b.type : null;
            return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
                a.data("ui-tooltip-open") && e._delay(function() {
                    b && (b.type = f), this._open(b, a, c);
                });
            }), c && this._open(b, a, c), void 0);
        },
        _open: function(c, d, e) {
            function f(a) {
                j.of = a, g.is(":hidden") || g.position(j);
            }
            var g, h, i, j = a.extend({}, this.options.position);
            if (e) {
                if (g = this._find(d), g.length) return g.find(".ui-tooltip-content").html(e), void 0;
                d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), 
                g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), 
                this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {
                    mousemove: f
                }), f(c)) : g.position(a.extend({
                    of: d
                }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function() {
                    g.is(":visible") && (f(j.of), clearInterval(i));
                }, a.fx.interval)), this._trigger("open", c, {
                    tooltip: g
                }), h = {
                    keyup: function(b) {
                        if (b.keyCode === a.ui.keyCode.ESCAPE) {
                            var c = a.Event(b);
                            c.currentTarget = d[0], this.close(c, !0);
                        }
                    },
                    remove: function() {
                        this._removeTooltip(g);
                    }
                }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), 
                this._on(!0, d, h);
            }
        },
        close: function(b) {
            var d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
            this.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), 
            c(e), f.stop(!0), this._hide(f, this.options.hide, function() {
                d._removeTooltip(a(this));
            }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), 
            e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), 
            b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                a(c.element).attr("title", c.title), delete d.parents[b];
            }), this.closing = !0, this._trigger("close", b, {
                tooltip: f
            }), this.closing = !1);
        },
        _tooltip: function(b) {
            var c = "ui-tooltip-" + d++, e = a("<div>").attr({
                id: c,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), 
            this.tooltips[c] = b, e;
        },
        _find: function(b) {
            var c = b.data("ui-tooltip-id");
            return c ? a("#" + c) : a();
        },
        _removeTooltip: function(a) {
            a.remove(), delete this.tooltips[a.attr("id")];
        },
        _destroy: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), 
                d.removeData("ui-tooltip-title"));
            });
        }
    });
}(jQuery), function(a) {
    function b(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), 
            a.target.dispatchEvent(d);
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var c, d = a.ui.mouse.prototype, e = d._mouseInit;
        d._touchStart = function(a) {
            var d = this;
            !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, 
            b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"));
        }, d._touchMove = function(a) {
            c && (this._touchMoved = !0, b(a, "mousemove"));
        }, d._touchEnd = function(a) {
            c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1);
        }, d._mouseInit = function() {
            var b = this;
            b.element.bind("touchstart", a.proxy(b, "_touchStart")).bind("touchmove", a.proxy(b, "_touchMove")).bind("touchend", a.proxy(b, "_touchEnd")), 
            e.call(b);
        };
    }
}(jQuery), function(a, b) {
    function c(a, b, c) {
        var d = l[b.type] || {};
        return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), 
        isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a);
    }
    function d(b) {
        var c = j(), d = c._rgba = [];
        return b = b.toLowerCase(), o(i, function(a, e) {
            var f, g = e.re.exec(b), h = g && e.parse(g), i = e.space || "rgba";
            return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0;
        }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b];
    }
    function e(a, b, c) {
        return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a;
    }
    var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", h = /^([\-+])=\s*(\d+\.?\d*)/, i = [ {
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(a) {
            return [ a[1], a[2], a[3], a[4] ];
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(a) {
            return [ 2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4] ];
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(a) {
            return [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ];
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(a) {
            return [ parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16) ];
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(a) {
            return [ a[1], a[2] / 100, a[3] / 100, a[4] ];
        }
    } ], j = a.Color = function(b, c, d, e) {
        return new a.Color.fn.parse(b, c, d, e);
    }, k = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }, l = {
        "byte": {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }, m = j.support = {}, n = a("<p>")[0], o = a.each;
    n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, 
    o(k, function(a, b) {
        b.cache = "_" + a, b.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        };
    }), j.fn = a.extend(j.prototype, {
        parse: function(e, g, h, i) {
            if (e === b) return this._rgba = [ null, null, null, null ], this;
            (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
            var l = this, m = a.type(e), n = this._rgba = [];
            return g !== b && (e = [ e, g, h, i ], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                n[b.idx] = c(e[b.idx], b);
            }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                e[b.cache] && (l[b.cache] = e[b.cache].slice());
            }) : o(k, function(b, d) {
                var f = d.cache;
                o(d.props, function(a, b) {
                    if (!l[f] && d.to) {
                        if ("alpha" === a || null == e[a]) return;
                        l[f] = d.to(l._rgba);
                    }
                    l[f][b.idx] = c(e[a], b, !0);
                }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])));
            }), this) : void 0;
        },
        is: function(a) {
            var b = j(a), c = !0, d = this;
            return o(k, function(a, e) {
                var f, g = b[e.cache];
                return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                    return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0;
                })), c;
            }), c;
        },
        _space: function() {
            var a = [], b = this;
            return o(k, function(c, d) {
                b[d.cache] && a.push(c);
            }), a.pop();
        },
        transition: function(a, b) {
            var d = j(a), e = d._space(), f = k[e], g = 0 === this.alpha() ? j("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
            return d = d[f.cache], o(f.props, function(a, e) {
                var f = e.idx, g = h[f], j = d[f], k = l[e.type] || {};
                null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), 
                i[f] = c((j - g) * b + g, e)));
            }), this[e](i);
        },
        blend: function(b) {
            if (1 === this._rgba[3]) return this;
            var c = this._rgba.slice(), d = c.pop(), e = j(b)._rgba;
            return j(a.map(c, function(a, b) {
                return (1 - d) * e[b] + d * a;
            }));
        },
        toRgbaString: function() {
            var b = "rgba(", c = a.map(this._rgba, function(a, b) {
                return null == a ? b > 2 ? 1 : 0 : a;
            });
            return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")";
        },
        toHslaString: function() {
            var b = "hsla(", c = a.map(this.hsla(), function(a, b) {
                return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), 
                a;
            });
            return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")";
        },
        toHexString: function(b) {
            var c = this._rgba.slice(), d = c.pop();
            return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a;
            }).join("");
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
        }
    }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
        var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
        return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, 
        c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [ Math.round(b) % 360, c, l, null == g ? 1 : g ];
    }, k.hsla.from = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
        var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
        return [ Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f ];
    }, o(k, function(d, e) {
        var f = e.props, g = e.cache, i = e.to, k = e.from;
        j.fn[d] = function(d) {
            if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
            var e, h = a.type(d), l = "array" === h || "object" === h ? d : arguments, m = this[g].slice();
            return o(f, function(a, b) {
                var d = l["object" === h ? a : b.idx];
                null == d && (d = m[b.idx]), m[b.idx] = c(d, b);
            }), k ? (e = j(k(m)), e[g] = m, e) : j(m);
        }, o(f, function(b, c) {
            j.fn[b] || (j.fn[b] = function(e) {
                var f, g = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](), k = j[c.idx];
                return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), 
                null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), 
                j[c.idx] = e, this[i](j)));
            });
        });
    }), j.hook = function(b) {
        var c = b.split(" ");
        o(c, function(b, c) {
            a.cssHooks[c] = {
                set: function(b, e) {
                    var f, g, h = "";
                    if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                        if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                            for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style; ) try {
                                h = a.css(g, "backgroundColor"), g = g.parentNode;
                            } catch (i) {}
                            e = e.blend(h && "transparent" !== h ? h : "_default");
                        }
                        e = e.toRgbaString();
                    }
                    try {
                        b.style[c] = e;
                    } catch (i) {}
                }
            }, a.fx.step[c] = function(b) {
                b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos));
            };
        });
    }, j.hook(g), a.cssHooks.borderColor = {
        expand: function(a) {
            var b = {};
            return o([ "Top", "Right", "Bottom", "Left" ], function(c, d) {
                b["border" + d + "Color"] = a;
            }), b;
        }
    }, f = a.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [ null, null, null, 0 ],
        _default: "#ffffff"
    };
}(jQuery), $.fn.setCursorPosition = function(a) {
    return 0 == this.length ? this : $(this).setSelection(a, a);
}, $.fn.setSelection = function(a, b) {
    if (0 == this.length) return this;
    if (input = this[0], input.createTextRange) {
        var c = input.createTextRange();
        c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select();
    } else input.setSelectionRange && (input.focus(), input.setSelectionRange(a, b));
    return this;
}, $.fn.focusEnd = function() {
    return this.setCursorPosition(this.val().length), this;
}, function(a) {
    a.fn.shortPass = "TO_SHORT".translate(), a.fn.badPass = "WEAK".translate(), a.fn.goodPass = "GOOD".translate(), 
    a.fn.strongPass = "STRONG".translate(), a.fn.samePassword = "NOGO".translate(), 
    a.fn.resultStyle = "", a.fn.passStrength = function(b) {
        var c = {
            shortPass: "shortPass",
            badPass: "badPass",
            goodPass: "goodPass",
            strongPass: "strongPass",
            baseStyle: "testresult",
            userid: "",
            messageloc: 1
        }, d = a.extend(c, b);
        return this.each(function() {
            var b = a(this);
            a(b).unbind().keyup(function() {
                var b = a.fn.teststrength(a(this).val(), a(d.userid).val(), d);
                1 === d.messageloc ? (a(this).next("." + d.baseStyle).remove(), a(this).after('<span class="' + d.baseStyle + '"><span></span></span>'), 
                a(this).next("." + d.baseStyle).addClass(a(this).resultStyle).find("span").text(b)) : (a(this).prev("." + d.baseStyle).remove(), 
                a(this).before('<span class="' + d.baseStyle + '"><span></span></span>'), a(this).prev("." + d.baseStyle).addClass(a(this).resultStyle).find("span").text(b));
            }), a.fn.teststrength = function(b, c, d) {
                var e = 0;
                return b.length < 4 ? (this.resultStyle = d.shortPass, a(this).shortPass) : b.toLowerCase() == c.toLowerCase() ? (this.resultStyle = d.badPass, 
                a(this).samePassword) : (e += 4 * b.length, e += 1 * (a.fn.checkRepetition(1, b).length - b.length), 
                e += 1 * (a.fn.checkRepetition(2, b).length - b.length), e += 1 * (a.fn.checkRepetition(3, b).length - b.length), 
                e += 1 * (a.fn.checkRepetition(4, b).length - b.length), b.match(/(.*[0-9].*[0-9].*[0-9])/) && (e += 5), 
                b.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/) && (e += 5), b.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (e += 10), 
                b.match(/([a-zA-Z])/) && b.match(/([0-9])/) && (e += 15), b.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && b.match(/([0-9])/) && (e += 15), 
                b.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && b.match(/([a-zA-Z])/) && (e += 15), (b.match(/^\w+$/) || b.match(/^\d+$/)) && (e -= 10), 
                0 > e && (e = 0), e > 100 && (e = 100), 34 > e ? (this.resultStyle = d.badPass, 
                a(this).badPass) : 68 > e ? (this.resultStyle = d.goodPass, a(this).goodPass) : (this.resultStyle = d.strongPass, 
                a(this).strongPass));
            };
        });
    };
}(jQuery), $.fn.checkRepetition = function(a, b) {
    for (var c = "", d = 0; d < b.length; d++) {
        for (var e = !0, f = 0; a > f && f + d + a < b.length; f++) e = e && b.charAt(f + d) == b.charAt(f + d + a);
        a > f && (e = !1), e ? (d += a - 1, e = !1) : c += b.charAt(d);
    }
    return c;
}, function(a) {
    function b(a) {
        return a && a.toLowerCase ? a.toLowerCase() : a;
    }
    function c(a, b) {
        for (var c = 0, e = a.length; e > c; c++) if (a[c] == b) return !d;
        return d;
    }
    var d = !1, e = null, f = parseFloat, g = Math.min, h = /(-?\d+\.?\d*)$/g, i = [], j = [];
    a.tinysort = {
        id: "TinySort",
        version: "1.4.29",
        copyright: "Copyright (c) 2008-2012 Ron Valstar",
        uri: "http://tinysort.sjeiti.com/",
        licensed: {
            MIT: "http://www.opensource.org/licenses/mit-license.php",
            GPL: "http://www.gnu.org/licenses/gpl.html"
        },
        plugin: function(a, b) {
            i.push(a), j.push(b);
        },
        defaults: {
            order: "asc",
            attr: e,
            data: e,
            useVal: d,
            place: "start",
            returns: d,
            cases: d,
            forceStrings: d,
            sortFunction: e
        }
    }, a.fn.extend({
        tinysort: function(k, l) {
            k && "string" != typeof k && (l = k, k = e);
            var m, n = a.extend({}, a.tinysort.defaults, l), o = this, p = a(this).length, q = {}, r = !(!k || "" == k), s = !(n.attr === e || "" == n.attr), t = n.data !== e, u = r && ":" == k[0], v = u ? o.filter(k) : o, w = n.sortFunction, x = "asc" == n.order ? 1 : -1, y = [];
            a.each(i, function(a, b) {
                b.call(b, n);
            }), w || (w = "rand" == n.order ? function() {
                return Math.random() < .5 ? 1 : -1;
            } : function(c, e) {
                var g = d, i = n.cases ? c.s : b(c.s), k = n.cases ? e.s : b(e.s);
                if (!n.forceStrings) {
                    var l = i && i.match(h), m = k && k.match(h);
                    if (l && m) {
                        var o = i.substr(0, i.length - l[0].length), p = k.substr(0, k.length - m[0].length);
                        o == p && (g = !d, i = f(l[0]), k = f(m[0]));
                    }
                }
                var q = x * (k > i ? -1 : i > k ? 1 : 0);
                return a.each(j, function(a, b) {
                    q = b.call(b, g, i, k, q);
                }), q;
            }), o.each(function(b, c) {
                var d = a(c), e = r ? u ? v.filter(c) : d.find(k) : d, f = t ? "" + e.data(n.data) : s ? e.attr(n.attr) : n.useVal ? e.val() : e.text(), g = d.parent();
                q[g] || (q[g] = {
                    s: [],
                    n: []
                }), e.length > 0 ? q[g].s.push({
                    s: f,
                    e: d,
                    n: b
                }) : q[g].n.push({
                    e: d,
                    n: b
                });
            });
            for (m in q) q[m].s.sort(w);
            for (m in q) {
                var z, A = q[m], B = [], C = p, D = [ 0, 0 ];
                switch (n.place) {
                  case "first":
                    a.each(A.s, function(a, b) {
                        C = g(C, b.n);
                    });
                    break;

                  case "org":
                    a.each(A.s, function(a, b) {
                        B.push(b.n);
                    });
                    break;

                  case "end":
                    C = A.n.length;
                    break;

                  default:
                    C = 0;
                }
                for (z = 0; p > z; z++) {
                    var E = c(B, z) ? !d : z >= C && z < C + A.s.length, F = (E ? A.s : A.n)[D[E ? 0 : 1]].e;
                    F.parent().append(F), (E || !n.returns) && y.push(F.get(0)), D[E ? 0 : 1]++;
                }
            }
            return o.length = 0, Array.prototype.push.apply(o, y), o;
        }
    }), a.fn.TinySort = a.fn.Tinysort = a.fn.tsort = a.fn.tinysort;
}(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
    var b = this.length, c = Number(arguments[1]) || 0;
    for (c = 0 > c ? Math.ceil(c) : Math.floor(c), 0 > c && (c += b); b > c; c++) if (c in this && this[c] === a) return c;
    return -1;
}), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? (this._wrapped = a, void 0) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.5.2";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && d.push(a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b];
        });
    }, x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? void 0 : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b) if (b[c] !== a[c]) return !1;
            return !0;
        });
    }, x.findWhere = function(a, b) {
        return x.where(a, b, !0);
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1/0;
        var d = {
            computed: -1/0,
            value: -1/0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g > d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1/0;
        var d = {
            computed: 1/0,
            value: 1/0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    }, x.sample = function(a, b, c) {
        return arguments.length < 2 || c ? a[x.random(a.length - 1)] : x.shuffle(a).slice(0, Math.max(0, b));
    };
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a];
        };
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {}, f = null == c ? x.identity : B(c);
            return y(b, function(c, g) {
                var h = f.call(d, c, g, b);
                a(e, h, c);
            }), e;
        };
    };
    x.groupBy = C(function(a, b, c) {
        (x.has(a, b) ? a[b] : a[b] = []).push(c);
    }), x.indexBy = C(function(a, b, c) {
        a[b] = c;
    }), x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++ : a[b] = 1;
    }), x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a, function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c);
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0;
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError();
        return c = h.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E();
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e;
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)));
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : new Date(), g = null, f = a.apply(d, e);
        };
        return function() {
            var j = new Date();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e)) : g || c.trailing === !1 || (g = setTimeout(i, k)), 
            f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e, f, g, h;
        return function() {
            f = this, e = arguments, g = new Date();
            var i = function() {
                var j = new Date() - g;
                b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e)));
            }, j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e)), h;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return function() {
            var c = [ a ];
            return g.apply(c, arguments), b.apply(this, c);
        };
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b;
    }, x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d;
    }, x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [ b[e], a[b[e]] ];
        return d;
    }, x.invert = function(a) {
        for (var b = {}, c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        var g = a.constructor, h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h)) return !1;
        c.push(a), d.push(b);
        var i = 0, k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (;i-- && (k = F(a[i], b[i], c, d)); ) ;
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i;
            }
        }
        return c.pop(), d.pop(), k;
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(H[a], function(b) {
                return G[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), M.call(this, c.apply(x, a));
            };
        });
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/, K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L, function(a) {
                return "\\" + K[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            M.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this);

var $Apprise = null, $overlay = null, $body = null, $window = null, $cA = null, AppriseQueue = [];

$(function() {
    $Apprise = $('<div class="apprise">'), $overlay = $('<div class="apprise-overlay">'), 
    $body = $("body"), $window = $(window), $body.append($overlay.css("opacity", ".94")).append($Apprise);
});

var CryptoJS = CryptoJS || function(a, b) {
    var c = {}, d = c.lib = {}, e = function() {}, f = d.Base = {
        extend: function(a) {
            e.prototype = this;
            var b = new e();
            return a && b.mixIn(a), b.hasOwnProperty("init") || (b.init = function() {
                b.$super.init.apply(this, arguments);
            }), b.init.prototype = b, b.$super = this, b;
        },
        create: function() {
            var a = this.extend();
            return a.init.apply(a, arguments), a;
        },
        init: function() {},
        mixIn: function(a) {
            for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, g = d.WordArray = f.extend({
        init: function(a, c) {
            a = this.words = a || [], this.sigBytes = c != b ? c : 4 * a.length;
        },
        toString: function(a) {
            return (a || i).stringify(this);
        },
        concat: function(a) {
            var b = this.words, c = a.words, d = this.sigBytes;
            if (a = a.sigBytes, this.clamp(), d % 4) for (var e = 0; a > e; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4); else if (65535 < c.length) for (e = 0; a > e; e += 4) b[d + e >>> 2] = c[e >>> 2]; else b.push.apply(b, c);
            return this.sigBytes += a, this;
        },
        clamp: function() {
            var b = this.words, c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4), b.length = a.ceil(c / 4);
        },
        clone: function() {
            var a = f.clone.call(this);
            return a.words = this.words.slice(0), a;
        },
        random: function(b) {
            for (var c = [], d = 0; b > d; d += 4) c.push(4294967296 * a.random() | 0);
            return new g.init(c, b);
        }
    }), h = c.enc = {}, i = h.Hex = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; a > d; d++) {
                var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                c.push((e >>> 4).toString(16)), c.push((15 & e).toString(16));
            }
            return c.join("");
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; b > d; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
            return new g.init(c, b / 2);
        }
    }, j = h.Latin1 = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; a > d; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
            return c.join("");
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; b > d; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - 8 * (d % 4);
            return new g.init(c, b);
        }
    }, k = h.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(j.stringify(a)));
            } catch (b) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(a) {
            return j.parse(unescape(encodeURIComponent(a)));
        }
    }, l = d.BufferedBlockAlgorithm = f.extend({
        reset: function() {
            this._data = new g.init(), this._nDataBytes = 0;
        },
        _append: function(a) {
            "string" == typeof a && (a = k.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes;
        },
        _process: function(b) {
            var c = this._data, d = c.words, e = c.sigBytes, f = this.blockSize, h = e / (4 * f), h = b ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0);
            if (b = h * f, e = a.min(4 * b, e), b) {
                for (var i = 0; b > i; i += f) this._doProcessBlock(d, i);
                i = d.splice(0, b), c.sigBytes -= e;
            }
            return new g.init(i, e);
        },
        clone: function() {
            var a = f.clone.call(this);
            return a._data = this._data.clone(), a;
        },
        _minBufferSize: 0
    });
    d.Hasher = l.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a), this.reset();
        },
        reset: function() {
            l.reset.call(this), this._doReset();
        },
        update: function(a) {
            return this._append(a), this._process(), this;
        },
        finalize: function(a) {
            return a && this._append(a), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, c) {
                return new a.init(c).finalize(b);
            };
        },
        _createHmacHelper: function(a) {
            return function(b, c) {
                return new m.HMAC.init(a, c).finalize(b);
            };
        }
    });
    var m = c.algo = {};
    return c;
}(Math);

!function() {
    var a = CryptoJS, b = a.lib.WordArray;
    a.enc.Base64 = {
        stringify: function(a) {
            var b = a.words, c = a.sigBytes, d = this._map;
            a.clamp(), a = [];
            for (var e = 0; c > e; e += 3) for (var f = (b[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 16 | (b[e + 1 >>> 2] >>> 24 - 8 * ((e + 1) % 4) & 255) << 8 | b[e + 2 >>> 2] >>> 24 - 8 * ((e + 2) % 4) & 255, g = 0; 4 > g && c > e + .75 * g; g++) a.push(d.charAt(f >>> 6 * (3 - g) & 63));
            if (b = d.charAt(64)) for (;a.length % 4; ) a.push(b);
            return a.join("");
        },
        parse: function(a) {
            var c = a.length, d = this._map, e = d.charAt(64);
            e && (e = a.indexOf(e), -1 != e && (c = e));
            for (var e = [], f = 0, g = 0; c > g; g++) if (g % 4) {
                var h = d.indexOf(a.charAt(g - 1)) << 2 * (g % 4), i = d.indexOf(a.charAt(g)) >>> 6 - 2 * (g % 4);
                e[f >>> 2] |= (h | i) << 24 - 8 * (f % 4), f++;
            }
            return b.create(e, f);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
}(), function(a) {
    function b(a, b, c, d, e, f, g) {
        return a = a + (b & c | ~b & d) + e + g, (a << f | a >>> 32 - f) + b;
    }
    function c(a, b, c, d, e, f, g) {
        return a = a + (b & d | c & ~d) + e + g, (a << f | a >>> 32 - f) + b;
    }
    function d(a, b, c, d, e, f, g) {
        return a = a + (b ^ c ^ d) + e + g, (a << f | a >>> 32 - f) + b;
    }
    function e(a, b, c, d, e, f, g) {
        return a = a + (c ^ (b | ~d)) + e + g, (a << f | a >>> 32 - f) + b;
    }
    for (var f = CryptoJS, g = f.lib, h = g.WordArray, i = g.Hasher, g = f.algo, j = [], k = 0; 64 > k; k++) j[k] = 4294967296 * a.abs(a.sin(k + 1)) | 0;
    g = g.MD5 = i.extend({
        _doReset: function() {
            this._hash = new h.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(a, f) {
            for (var g = 0; 16 > g; g++) {
                var h = f + g, i = a[h];
                a[h] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
            }
            var g = this._hash.words, h = a[f + 0], i = a[f + 1], k = a[f + 2], l = a[f + 3], m = a[f + 4], n = a[f + 5], o = a[f + 6], p = a[f + 7], q = a[f + 8], r = a[f + 9], s = a[f + 10], t = a[f + 11], u = a[f + 12], v = a[f + 13], w = a[f + 14], x = a[f + 15], y = g[0], z = g[1], A = g[2], B = g[3], y = b(y, z, A, B, h, 7, j[0]), B = b(B, y, z, A, i, 12, j[1]), A = b(A, B, y, z, k, 17, j[2]), z = b(z, A, B, y, l, 22, j[3]), y = b(y, z, A, B, m, 7, j[4]), B = b(B, y, z, A, n, 12, j[5]), A = b(A, B, y, z, o, 17, j[6]), z = b(z, A, B, y, p, 22, j[7]), y = b(y, z, A, B, q, 7, j[8]), B = b(B, y, z, A, r, 12, j[9]), A = b(A, B, y, z, s, 17, j[10]), z = b(z, A, B, y, t, 22, j[11]), y = b(y, z, A, B, u, 7, j[12]), B = b(B, y, z, A, v, 12, j[13]), A = b(A, B, y, z, w, 17, j[14]), z = b(z, A, B, y, x, 22, j[15]), y = c(y, z, A, B, i, 5, j[16]), B = c(B, y, z, A, o, 9, j[17]), A = c(A, B, y, z, t, 14, j[18]), z = c(z, A, B, y, h, 20, j[19]), y = c(y, z, A, B, n, 5, j[20]), B = c(B, y, z, A, s, 9, j[21]), A = c(A, B, y, z, x, 14, j[22]), z = c(z, A, B, y, m, 20, j[23]), y = c(y, z, A, B, r, 5, j[24]), B = c(B, y, z, A, w, 9, j[25]), A = c(A, B, y, z, l, 14, j[26]), z = c(z, A, B, y, q, 20, j[27]), y = c(y, z, A, B, v, 5, j[28]), B = c(B, y, z, A, k, 9, j[29]), A = c(A, B, y, z, p, 14, j[30]), z = c(z, A, B, y, u, 20, j[31]), y = d(y, z, A, B, n, 4, j[32]), B = d(B, y, z, A, q, 11, j[33]), A = d(A, B, y, z, t, 16, j[34]), z = d(z, A, B, y, w, 23, j[35]), y = d(y, z, A, B, i, 4, j[36]), B = d(B, y, z, A, m, 11, j[37]), A = d(A, B, y, z, p, 16, j[38]), z = d(z, A, B, y, s, 23, j[39]), y = d(y, z, A, B, v, 4, j[40]), B = d(B, y, z, A, h, 11, j[41]), A = d(A, B, y, z, l, 16, j[42]), z = d(z, A, B, y, o, 23, j[43]), y = d(y, z, A, B, r, 4, j[44]), B = d(B, y, z, A, u, 11, j[45]), A = d(A, B, y, z, x, 16, j[46]), z = d(z, A, B, y, k, 23, j[47]), y = e(y, z, A, B, h, 6, j[48]), B = e(B, y, z, A, p, 10, j[49]), A = e(A, B, y, z, w, 15, j[50]), z = e(z, A, B, y, n, 21, j[51]), y = e(y, z, A, B, u, 6, j[52]), B = e(B, y, z, A, l, 10, j[53]), A = e(A, B, y, z, s, 15, j[54]), z = e(z, A, B, y, i, 21, j[55]), y = e(y, z, A, B, q, 6, j[56]), B = e(B, y, z, A, x, 10, j[57]), A = e(A, B, y, z, o, 15, j[58]), z = e(z, A, B, y, v, 21, j[59]), y = e(y, z, A, B, m, 6, j[60]), B = e(B, y, z, A, t, 10, j[61]), A = e(A, B, y, z, k, 15, j[62]), z = e(z, A, B, y, r, 21, j[63]);
            g[0] = g[0] + y | 0, g[1] = g[1] + z | 0, g[2] = g[2] + A | 0, g[3] = g[3] + B | 0;
        },
        _doFinalize: function() {
            var b = this._data, c = b.words, d = 8 * this._nDataBytes, e = 8 * b.sigBytes;
            c[e >>> 5] |= 128 << 24 - e % 32;
            var f = a.floor(d / 4294967296);
            for (c[(e + 64 >>> 9 << 4) + 15] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), 
            c[(e + 64 >>> 9 << 4) + 14] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), 
            b.sigBytes = 4 * (c.length + 1), this._process(), b = this._hash, c = b.words, d = 0; 4 > d; d++) e = c[d], 
            c[d] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8);
            return b;
        },
        clone: function() {
            var a = i.clone.call(this);
            return a._hash = this._hash.clone(), a;
        }
    }), f.MD5 = i._createHelper(g), f.HmacMD5 = i._createHmacHelper(g);
}(Math), function() {
    var a = CryptoJS, b = a.lib, c = b.Base, d = b.WordArray, b = a.algo, e = b.EvpKDF = c.extend({
        cfg: c.extend({
            keySize: 4,
            hasher: b.MD5,
            iterations: 1
        }),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
        },
        compute: function(a, b) {
            for (var c = this.cfg, e = c.hasher.create(), f = d.create(), g = f.words, h = c.keySize, c = c.iterations; g.length < h; ) {
                i && e.update(i);
                var i = e.update(a).finalize(b);
                e.reset();
                for (var j = 1; c > j; j++) i = e.finalize(i), e.reset();
                f.concat(i);
            }
            return f.sigBytes = 4 * h, f;
        }
    });
    a.EvpKDF = function(a, b, c) {
        return e.create(c).compute(a, b);
    };
}(), CryptoJS.lib.Cipher || function(a) {
    var b = CryptoJS, c = b.lib, d = c.Base, e = c.WordArray, f = c.BufferedBlockAlgorithm, g = b.enc.Base64, h = b.algo.EvpKDF, i = c.Cipher = f.extend({
        cfg: d.extend(),
        createEncryptor: function(a, b) {
            return this.create(this._ENC_XFORM_MODE, a, b);
        },
        createDecryptor: function(a, b) {
            return this.create(this._DEC_XFORM_MODE, a, b);
        },
        init: function(a, b, c) {
            this.cfg = this.cfg.extend(c), this._xformMode = a, this._key = b, this.reset();
        },
        reset: function() {
            f.reset.call(this), this._doReset();
        },
        process: function(a) {
            return this._append(a), this._process();
        },
        finalize: function(a) {
            return a && this._append(a), this._doFinalize();
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(a) {
            return {
                encrypt: function(b, c, d) {
                    return ("string" == typeof c ? o : n).encrypt(a, b, c, d);
                },
                decrypt: function(b, c, d) {
                    return ("string" == typeof c ? o : n).decrypt(a, b, c, d);
                }
            };
        }
    });
    c.StreamCipher = i.extend({
        _doFinalize: function() {
            return this._process(!0);
        },
        blockSize: 1
    });
    var j = b.mode = {}, k = function(b, c, d) {
        var e = this._iv;
        e ? this._iv = a : e = this._prevBlock;
        for (var f = 0; d > f; f++) b[c + f] ^= e[f];
    }, l = (c.BlockCipherMode = d.extend({
        createEncryptor: function(a, b) {
            return this.Encryptor.create(a, b);
        },
        createDecryptor: function(a, b) {
            return this.Decryptor.create(a, b);
        },
        init: function(a, b) {
            this._cipher = a, this._iv = b;
        }
    })).extend();
    l.Encryptor = l.extend({
        processBlock: function(a, b) {
            var c = this._cipher, d = c.blockSize;
            k.call(this, a, b, d), c.encryptBlock(a, b), this._prevBlock = a.slice(b, b + d);
        }
    }), l.Decryptor = l.extend({
        processBlock: function(a, b) {
            var c = this._cipher, d = c.blockSize, e = a.slice(b, b + d);
            c.decryptBlock(a, b), k.call(this, a, b, d), this._prevBlock = e;
        }
    }), j = j.CBC = l, l = (b.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, f = [], g = 0; c > g; g += 4) f.push(d);
            c = e.create(f, c), a.concat(c);
        },
        unpad: function(a) {
            a.sigBytes -= 255 & a.words[a.sigBytes - 1 >>> 2];
        }
    }, c.BlockCipher = i.extend({
        cfg: i.cfg.extend({
            mode: j,
            padding: l
        }),
        reset: function() {
            i.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, 
            this._minBufferSize = 1;
            this._mode = c.call(a, this, b && b.words);
        },
        _doProcessBlock: function(a, b) {
            this._mode.processBlock(a, b);
        },
        _doFinalize: function() {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0);
            } else b = this._process(!0), a.unpad(b);
            return b;
        },
        blockSize: 4
    });
    var m = c.CipherParams = d.extend({
        init: function(a) {
            this.mixIn(a);
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this);
        }
    }), j = (b.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            return a = a.salt, (a ? e.create([ 1398893684, 1701076831 ]).concat(a).concat(b) : b).toString(g);
        },
        parse: function(a) {
            a = g.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = e.create(b.slice(2, 4));
                b.splice(0, 4), a.sigBytes -= 16;
            }
            return m.create({
                ciphertext: a,
                salt: c
            });
        }
    }, n = c.SerializableCipher = d.extend({
        cfg: d.extend({
            format: j
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var e = a.createEncryptor(c, d);
            return b = e.finalize(b), e = e.cfg, m.create({
                ciphertext: b,
                key: c,
                iv: e.iv,
                algorithm: a,
                mode: e.mode,
                padding: e.padding,
                blockSize: a.blockSize,
                formatter: d.format
            });
        },
        decrypt: function(a, b, c, d) {
            return d = this.cfg.extend(d), b = this._parse(b, d.format), a.createDecryptor(c, d).finalize(b.ciphertext);
        },
        _parse: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a;
        }
    }), b = (b.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            return d || (d = e.random(8)), a = h.create({
                keySize: b + c
            }).compute(a, d), c = e.create(a.words.slice(b), 4 * c), a.sigBytes = 4 * b, m.create({
                key: a,
                iv: c,
                salt: d
            });
        }
    }, o = c.PasswordBasedCipher = n.extend({
        cfg: n.cfg.extend({
            kdf: b
        }),
        encrypt: function(a, b, c, d) {
            return d = this.cfg.extend(d), c = d.kdf.execute(c, a.keySize, a.ivSize), d.iv = c.iv, 
            a = n.encrypt.call(this, a, b, c.key, d), a.mixIn(c), a;
        },
        decrypt: function(a, b, c, d) {
            return d = this.cfg.extend(d), b = this._parse(b, d.format), c = d.kdf.execute(c, a.keySize, a.ivSize, b.salt), 
            d.iv = c.iv, n.decrypt.call(this, a, b, c.key, d);
        }
    });
}(), function() {
    for (var a = CryptoJS, b = a.lib.BlockCipher, c = a.algo, d = [], e = [], f = [], g = [], h = [], i = [], j = [], k = [], l = [], m = [], n = [], o = 0; 256 > o; o++) n[o] = 128 > o ? o << 1 : o << 1 ^ 283;
    for (var p = 0, q = 0, o = 0; 256 > o; o++) {
        var r = q ^ q << 1 ^ q << 2 ^ q << 3 ^ q << 4, r = r >>> 8 ^ 255 & r ^ 99;
        d[p] = r, e[r] = p;
        var s = n[p], t = n[s], u = n[t], v = 257 * n[r] ^ 16843008 * r;
        f[p] = v << 24 | v >>> 8, g[p] = v << 16 | v >>> 16, h[p] = v << 8 | v >>> 24, i[p] = v, 
        v = 16843009 * u ^ 65537 * t ^ 257 * s ^ 16843008 * p, j[r] = v << 24 | v >>> 8, 
        k[r] = v << 16 | v >>> 16, l[r] = v << 8 | v >>> 24, m[r] = v, p ? (p = s ^ n[n[n[u ^ s]]], 
        q ^= n[n[q]]) : p = q = 1;
    }
    var w = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], c = c.AES = b.extend({
        _doReset: function() {
            for (var a = this._key, b = a.words, c = a.sigBytes / 4, a = 4 * ((this._nRounds = c + 6) + 1), e = this._keySchedule = [], f = 0; a > f; f++) if (c > f) e[f] = b[f]; else {
                var g = e[f - 1];
                f % c ? c > 6 && 4 == f % c && (g = d[g >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & 255] << 8 | d[255 & g]) : (g = g << 8 | g >>> 24, 
                g = d[g >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & 255] << 8 | d[255 & g], 
                g ^= w[f / c | 0] << 24), e[f] = e[f - c] ^ g;
            }
            for (b = this._invKeySchedule = [], c = 0; a > c; c++) f = a - c, g = c % 4 ? e[f] : e[f - 4], 
            b[c] = 4 > c || 4 >= f ? g : j[d[g >>> 24]] ^ k[d[g >>> 16 & 255]] ^ l[d[g >>> 8 & 255]] ^ m[d[255 & g]];
        },
        encryptBlock: function(a, b) {
            this._doCryptBlock(a, b, this._keySchedule, f, g, h, i, d);
        },
        decryptBlock: function(a, b) {
            var c = a[b + 1];
            a[b + 1] = a[b + 3], a[b + 3] = c, this._doCryptBlock(a, b, this._invKeySchedule, j, k, l, m, e), 
            c = a[b + 1], a[b + 1] = a[b + 3], a[b + 3] = c;
        },
        _doCryptBlock: function(a, b, c, d, e, f, g, h) {
            for (var i = this._nRounds, j = a[b] ^ c[0], k = a[b + 1] ^ c[1], l = a[b + 2] ^ c[2], m = a[b + 3] ^ c[3], n = 4, o = 1; i > o; o++) var p = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[255 & m] ^ c[n++], q = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[255 & j] ^ c[n++], r = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & 255] ^ g[255 & k] ^ c[n++], m = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[255 & l] ^ c[n++], j = p, k = q, l = r;
            p = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & m]) ^ c[n++], 
            q = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[255 & j]) ^ c[n++], 
            r = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[255 & k]) ^ c[n++], 
            m = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[255 & l]) ^ c[n++], 
            a[b] = p, a[b + 1] = q, a[b + 2] = r, a[b + 3] = m;
        },
        keySize: 8
    });
    a.AES = b._createHelper(c);
}();

var CryptoJS = CryptoJS || function(a, b) {
    var c = {}, d = c.lib = {}, e = function() {}, f = d.Base = {
        extend: function(a) {
            e.prototype = this;
            var b = new e();
            return a && b.mixIn(a), b.hasOwnProperty("init") || (b.init = function() {
                b.$super.init.apply(this, arguments);
            }), b.init.prototype = b, b.$super = this, b;
        },
        create: function() {
            var a = this.extend();
            return a.init.apply(a, arguments), a;
        },
        init: function() {},
        mixIn: function(a) {
            for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, g = d.WordArray = f.extend({
        init: function(a, c) {
            a = this.words = a || [], this.sigBytes = c != b ? c : 4 * a.length;
        },
        toString: function(a) {
            return (a || i).stringify(this);
        },
        concat: function(a) {
            var b = this.words, c = a.words, d = this.sigBytes;
            if (a = a.sigBytes, this.clamp(), d % 4) for (var e = 0; a > e; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4); else if (65535 < c.length) for (e = 0; a > e; e += 4) b[d + e >>> 2] = c[e >>> 2]; else b.push.apply(b, c);
            return this.sigBytes += a, this;
        },
        clamp: function() {
            var b = this.words, c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4), b.length = a.ceil(c / 4);
        },
        clone: function() {
            var a = f.clone.call(this);
            return a.words = this.words.slice(0), a;
        },
        random: function(b) {
            for (var c = [], d = 0; b > d; d += 4) c.push(4294967296 * a.random() | 0);
            return new g.init(c, b);
        }
    }), h = c.enc = {}, i = h.Hex = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; a > d; d++) {
                var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                c.push((e >>> 4).toString(16)), c.push((15 & e).toString(16));
            }
            return c.join("");
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; b > d; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
            return new g.init(c, b / 2);
        }
    }, j = h.Latin1 = {
        stringify: function(a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], d = 0; a > d; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
            return c.join("");
        },
        parse: function(a) {
            for (var b = a.length, c = [], d = 0; b > d; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - 8 * (d % 4);
            return new g.init(c, b);
        }
    }, k = h.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(j.stringify(a)));
            } catch (b) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(a) {
            return j.parse(unescape(encodeURIComponent(a)));
        }
    }, l = d.BufferedBlockAlgorithm = f.extend({
        reset: function() {
            this._data = new g.init(), this._nDataBytes = 0;
        },
        _append: function(a) {
            "string" == typeof a && (a = k.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes;
        },
        _process: function(b) {
            var c = this._data, d = c.words, e = c.sigBytes, f = this.blockSize, h = e / (4 * f), h = b ? a.ceil(h) : a.max((0 | h) - this._minBufferSize, 0);
            if (b = h * f, e = a.min(4 * b, e), b) {
                for (var i = 0; b > i; i += f) this._doProcessBlock(d, i);
                i = d.splice(0, b), c.sigBytes -= e;
            }
            return new g.init(i, e);
        },
        clone: function() {
            var a = f.clone.call(this);
            return a._data = this._data.clone(), a;
        },
        _minBufferSize: 0
    });
    d.Hasher = l.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a), this.reset();
        },
        reset: function() {
            l.reset.call(this), this._doReset();
        },
        update: function(a) {
            return this._append(a), this._process(), this;
        },
        finalize: function(a) {
            return a && this._append(a), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, c) {
                return new a.init(c).finalize(b);
            };
        },
        _createHmacHelper: function(a) {
            return function(b, c) {
                return new m.HMAC.init(a, c).finalize(b);
            };
        }
    });
    var m = c.algo = {};
    return c;
}(Math);

!function(a) {
    var b = CryptoJS, c = b.lib, d = c.Base, e = c.WordArray, b = b.x64 = {};
    b.Word = d.extend({
        init: function(a, b) {
            this.high = a, this.low = b;
        }
    }), b.WordArray = d.extend({
        init: function(b, c) {
            b = this.words = b || [], this.sigBytes = c != a ? c : 8 * b.length;
        },
        toX32: function() {
            for (var a = this.words, b = a.length, c = [], d = 0; b > d; d++) {
                var f = a[d];
                c.push(f.high), c.push(f.low);
            }
            return e.create(c, this.sigBytes);
        },
        clone: function() {
            for (var a = d.clone.call(this), b = a.words = this.words.slice(0), c = b.length, e = 0; c > e; e++) b[e] = b[e].clone();
            return a;
        }
    });
}(), function(a) {
    for (var b = CryptoJS, c = b.lib, d = c.WordArray, e = c.Hasher, f = b.x64.Word, c = b.algo, g = [], h = [], i = [], j = 1, k = 0, l = 0; 24 > l; l++) {
        g[j + 5 * k] = (l + 1) * (l + 2) / 2 % 64;
        var m = (2 * j + 3 * k) % 5, j = k % 5, k = m;
    }
    for (j = 0; 5 > j; j++) for (k = 0; 5 > k; k++) h[j + 5 * k] = k + 5 * ((2 * j + 3 * k) % 5);
    for (j = 1, k = 0; 24 > k; k++) {
        for (var n = m = l = 0; 7 > n; n++) {
            if (1 & j) {
                var o = (1 << n) - 1;
                32 > o ? m ^= 1 << o : l ^= 1 << o - 32;
            }
            j = 128 & j ? j << 1 ^ 113 : j << 1;
        }
        i[k] = f.create(l, m);
    }
    for (var p = [], j = 0; 25 > j; j++) p[j] = f.create();
    c = c.SHA3 = e.extend({
        cfg: e.cfg.extend({
            outputLength: 512
        }),
        _doReset: function() {
            for (var a = this._state = [], b = 0; 25 > b; b++) a[b] = new f.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function(a, b) {
            for (var c = this._state, d = this.blockSize / 2, e = 0; d > e; e++) {
                var f = a[b + 2 * e], j = a[b + 2 * e + 1], f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), j = 16711935 & (j << 8 | j >>> 24) | 4278255360 & (j << 24 | j >>> 8), k = c[e];
                k.high ^= j, k.low ^= f;
            }
            for (d = 0; 24 > d; d++) {
                for (e = 0; 5 > e; e++) {
                    for (var l = f = 0, m = 0; 5 > m; m++) k = c[e + 5 * m], f ^= k.high, l ^= k.low;
                    k = p[e], k.high = f, k.low = l;
                }
                for (e = 0; 5 > e; e++) for (k = p[(e + 4) % 5], f = p[(e + 1) % 5], j = f.high, 
                m = f.low, f = k.high ^ (j << 1 | m >>> 31), l = k.low ^ (m << 1 | j >>> 31), m = 0; 5 > m; m++) k = c[e + 5 * m], 
                k.high ^= f, k.low ^= l;
                for (j = 1; 25 > j; j++) k = c[j], e = k.high, k = k.low, m = g[j], 32 > m ? (f = e << m | k >>> 32 - m, 
                l = k << m | e >>> 32 - m) : (f = k << m - 32 | e >>> 64 - m, l = e << m - 32 | k >>> 64 - m), 
                k = p[h[j]], k.high = f, k.low = l;
                for (k = p[0], e = c[0], k.high = e.high, k.low = e.low, e = 0; 5 > e; e++) for (m = 0; 5 > m; m++) j = e + 5 * m, 
                k = c[j], f = p[j], j = p[(e + 1) % 5 + 5 * m], l = p[(e + 2) % 5 + 5 * m], k.high = f.high ^ ~j.high & l.high, 
                k.low = f.low ^ ~j.low & l.low;
                k = c[0], e = i[d], k.high ^= e.high, k.low ^= e.low;
            }
        },
        _doFinalize: function() {
            var b = this._data, c = b.words, e = 8 * b.sigBytes, f = 32 * this.blockSize;
            c[e >>> 5] |= 1 << 24 - e % 32, c[(a.ceil((e + 1) / f) * f >>> 5) - 1] |= 128, b.sigBytes = 4 * c.length, 
            this._process();
            for (var b = this._state, c = this.cfg.outputLength / 8, e = c / 8, f = [], g = 0; e > g; g++) {
                var h = b[g], i = h.high, h = h.low, i = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
                f.push(h), f.push(i);
            }
            return new d.init(f, c);
        },
        clone: function() {
            for (var a = e.clone.call(this), b = a._state = this._state.slice(0), c = 0; 25 > c; c++) b[c] = b[c].clone();
            return a;
        }
    }), b.SHA3 = e._createHelper(c), b.HmacSHA3 = e._createHmacHelper(c);
}(Math);

var io = "undefined" == typeof module ? {} : module.exports;

!function() {
    !function(a, b) {
        var c = a;
        c.version = "0.9.11", c.protocol = 1, c.transports = [], c.j = [], c.sockets = {}, 
        c.connect = function(a, d) {
            var e, f, g = c.util.parseUri(a);
            b && b.location && (g.protocol = g.protocol || b.location.protocol.slice(0, -1), 
            g.host = g.host || (b.document ? b.document.domain : b.location.hostname), g.port = g.port || b.location.port), 
            e = c.util.uniqueUri(g);
            var h = {
                host: g.host,
                secure: "https" == g.protocol,
                port: g.port || ("https" == g.protocol ? 443 : 80),
                query: g.query || ""
            };
            return c.util.merge(h, d), (h["force new connection"] || !c.sockets[e]) && (f = new c.Socket(h)), 
            !h["force new connection"] && f && (c.sockets[e] = f), f = f || c.sockets[e], f.of(g.path.length > 1 ? g.path : "");
        };
    }("object" == typeof module ? module.exports : this.io = {}, this), function(a, b) {
        var c = a.util = {}, d = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, e = [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ];
        c.parseUri = function(a) {
            for (var b = d.exec(a || ""), c = {}, f = 14; f--; ) c[e[f]] = b[f] || "";
            return c;
        }, c.uniqueUri = function(a) {
            var c = a.protocol, d = a.host, e = a.port;
            return "document" in b ? (d = d || document.domain, e = e || ("https" == c && "https:" !== document.location.protocol ? 443 : document.location.port)) : (d = d || "localhost", 
            e || "https" != c || (e = 443)), (c || "http") + "://" + d + ":" + (e || 80);
        }, c.query = function(a, b) {
            var d = c.chunkQuery(a || ""), e = [];
            c.merge(d, c.chunkQuery(b || ""));
            for (var f in d) d.hasOwnProperty(f) && e.push(f + "=" + d[f]);
            return e.length ? "?" + e.join("&") : "";
        }, c.chunkQuery = function(a) {
            for (var b, c = {}, d = a.split("&"), e = 0, f = d.length; f > e; ++e) b = d[e].split("="), 
            b[0] && (c[b[0]] = b[1]);
            return c;
        };
        var f = !1;
        c.load = function(a) {
            return "document" in b && "complete" === document.readyState || f ? a() : (c.on(b, "load", a, !1), 
            void 0);
        }, c.on = function(a, b, c, d) {
            a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c, d);
        }, c.request = function(a) {
            if (a && "undefined" != typeof XDomainRequest && !c.ua.hasCORS) return new XDomainRequest();
            if ("undefined" != typeof XMLHttpRequest && (!a || c.ua.hasCORS)) return new XMLHttpRequest();
            if (!a) try {
                return new (window[[ "Active" ].concat("Object").join("X")])("Microsoft.XMLHTTP");
            } catch (b) {}
            return null;
        }, "undefined" != typeof window && c.load(function() {
            f = !0;
        }), c.defer = function(a) {
            return c.ua.webkit && "undefined" == typeof importScripts ? (c.load(function() {
                setTimeout(a, 100);
            }), void 0) : a();
        }, c.merge = function(a, b, d, e) {
            var f, g = e || [], h = "undefined" == typeof d ? 2 : d;
            for (f in b) b.hasOwnProperty(f) && c.indexOf(g, f) < 0 && ("object" == typeof a[f] && h ? c.merge(a[f], b[f], h - 1, g) : (a[f] = b[f], 
            g.push(b[f])));
            return a;
        }, c.mixin = function(a, b) {
            c.merge(a.prototype, b.prototype);
        }, c.inherit = function(a, b) {
            function c() {}
            c.prototype = b.prototype, a.prototype = new c();
        }, c.isArray = Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        }, c.intersect = function(a, b) {
            for (var d = [], e = a.length > b.length ? a : b, f = a.length > b.length ? b : a, g = 0, h = f.length; h > g; g++) ~c.indexOf(e, f[g]) && d.push(f[g]);
            return d;
        }, c.indexOf = function(a, b, c) {
            for (var d = a.length, c = 0 > c ? 0 > c + d ? 0 : c + d : c || 0; d > c && a[c] !== b; c++) ;
            return c >= d ? -1 : c;
        }, c.toArray = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) b.push(a[c]);
            return b;
        }, c.ua = {}, c.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest();
            } catch (b) {
                return !1;
            }
            return void 0 != a.withCredentials;
        }(), c.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), 
        c.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent);
    }("undefined" != typeof io ? io : module.exports, this), function(a, b) {
        function c() {}
        a.EventEmitter = c, c.prototype.on = function(a, c) {
            return this.$events || (this.$events = {}), this.$events[a] ? b.util.isArray(this.$events[a]) ? this.$events[a].push(c) : this.$events[a] = [ this.$events[a], c ] : this.$events[a] = c, 
            this;
        }, c.prototype.addListener = c.prototype.on, c.prototype.once = function(a, b) {
            function c() {
                d.removeListener(a, c), b.apply(this, arguments);
            }
            var d = this;
            return c.listener = b, this.on(a, c), this;
        }, c.prototype.removeListener = function(a, c) {
            if (this.$events && this.$events[a]) {
                var d = this.$events[a];
                if (b.util.isArray(d)) {
                    for (var e = -1, f = 0, g = d.length; g > f; f++) if (d[f] === c || d[f].listener && d[f].listener === c) {
                        e = f;
                        break;
                    }
                    if (0 > e) return this;
                    d.splice(e, 1), d.length || delete this.$events[a];
                } else (d === c || d.listener && d.listener === c) && delete this.$events[a];
            }
            return this;
        }, c.prototype.removeAllListeners = function(a) {
            return void 0 === a ? (this.$events = {}, this) : (this.$events && this.$events[a] && (this.$events[a] = null), 
            this);
        }, c.prototype.listeners = function(a) {
            return this.$events || (this.$events = {}), this.$events[a] || (this.$events[a] = []), 
            b.util.isArray(this.$events[a]) || (this.$events[a] = [ this.$events[a] ]), this.$events[a];
        }, c.prototype.emit = function(a) {
            if (!this.$events) return !1;
            var c = this.$events[a];
            if (!c) return !1;
            var d = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof c) c.apply(this, d); else {
                if (!b.util.isArray(c)) return !1;
                for (var e = c.slice(), f = 0, g = e.length; g > f; f++) e[f].apply(this, d);
            }
            return !0;
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), 
    function(exports, nativeJSON) {
        "use strict";
        function f(a) {
            return 10 > a ? "0" + a : a;
        }
        function date(a) {
            return isFinite(a.valueOf()) ? a.getUTCFullYear() + "-" + f(a.getUTCMonth() + 1) + "-" + f(a.getUTCDate()) + "T" + f(a.getUTCHours()) + ":" + f(a.getUTCMinutes()) + ":" + f(a.getUTCSeconds()) + "Z" : null;
        }
        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + a + '"';
        }
        function str(a, b) {
            var c, d, e, f, g, h = gap, i = b[a];
            switch (i instanceof Date && (i = date(a)), "function" == typeof rep && (i = rep.call(b, a, i)), 
            typeof i) {
              case "string":
                return quote(i);

              case "number":
                return isFinite(i) ? String(i) : "null";

              case "boolean":
              case "null":
                return String(i);

              case "object":
                if (!i) return "null";
                if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                    for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                    return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", 
                    gap = h, e;
                }
                if (rep && "object" == typeof rep) for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], 
                e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e)); else for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), 
                e && g.push(quote(d) + (gap ? ": " : ":") + e));
                return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", 
                gap = h, e;
            }
        }
        if (nativeJSON && nativeJSON.parse) return exports.JSON = {
            parse: nativeJSON.parse,
            stringify: nativeJSON.stringify
        };
        var JSON = exports.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        JSON.stringify = function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) indent += " "; else "string" == typeof c && (indent = c);
            if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            });
        }, JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e) for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), 
                void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e);
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), 
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse");
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), 
    function(a, b) {
        var c = a.parser = {}, d = c.packets = [ "disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop" ], e = c.reasons = [ "transport not supported", "client not handshaken", "unauthorized" ], f = c.advice = [ "reconnect" ], g = b.JSON, h = b.util.indexOf;
        c.encodePacket = function(a) {
            var b = h(d, a.type), c = a.id || "", i = a.endpoint || "", j = a.ack, k = null;
            switch (a.type) {
              case "error":
                var l = a.reason ? h(e, a.reason) : "", m = a.advice ? h(f, a.advice) : "";
                ("" !== l || "" !== m) && (k = l + ("" !== m ? "+" + m : ""));
                break;

              case "message":
                "" !== a.data && (k = a.data);
                break;

              case "event":
                var n = {
                    name: a.name
                };
                a.args && a.args.length && (n.args = a.args), k = g.stringify(n);
                break;

              case "json":
                k = g.stringify(a.data);
                break;

              case "connect":
                a.qs && (k = a.qs);
                break;

              case "ack":
                k = a.ackId + (a.args && a.args.length ? "+" + g.stringify(a.args) : "");
            }
            var o = [ b, c + ("data" == j ? "+" : ""), i ];
            return null !== k && void 0 !== k && o.push(k), o.join(":");
        }, c.encodePayload = function(a) {
            var b = "";
            if (1 == a.length) return a[0];
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                b += "�" + e.length + "�" + a[c];
            }
            return b;
        };
        var i = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        c.decodePacket = function(a) {
            var b = a.match(i);
            if (!b) return {};
            var c = b[2] || "", a = b[5] || "", h = {
                type: d[b[1]],
                endpoint: b[4] || ""
            };
            switch (c && (h.id = c, h.ack = b[3] ? "data" : !0), h.type) {
              case "error":
                var b = a.split("+");
                h.reason = e[b[0]] || "", h.advice = f[b[1]] || "";
                break;

              case "message":
                h.data = a || "";
                break;

              case "event":
                try {
                    var j = g.parse(a);
                    h.name = j.name, h.args = j.args;
                } catch (k) {}
                h.args = h.args || [];
                break;

              case "json":
                try {
                    h.data = g.parse(a);
                } catch (k) {}
                break;

              case "connect":
                h.qs = a || "";
                break;

              case "ack":
                var b = a.match(/^([0-9]+)(\+)?(.*)/);
                if (b && (h.ackId = b[1], h.args = [], b[3])) try {
                    h.args = b[3] ? g.parse(b[3]) : [];
                } catch (k) {}
                break;

              case "disconnect":
              case "heartbeat":            }
            return h;
        }, c.decodePayload = function(a) {
            if ("�" == a.charAt(0)) {
                for (var b = [], d = 1, e = ""; d < a.length; d++) "�" == a.charAt(d) ? (b.push(c.decodePacket(a.substr(d + 1).substr(0, e))), 
                d += Number(e) + 1, e = "") : e += a.charAt(d);
                return b;
            }
            return [ c.decodePacket(a) ];
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), 
    function(a, b) {
        function c(a, b) {
            this.socket = a, this.sessid = b;
        }
        a.Transport = c, b.util.mixin(c, b.EventEmitter), c.prototype.heartbeats = function() {
            return !0;
        }, c.prototype.onData = function(a) {
            if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), 
            "" !== a) {
                var c = b.parser.decodePayload(a);
                if (c && c.length) for (var d = 0, e = c.length; e > d; d++) this.onPacket(c[d]);
            }
            return this;
        }, c.prototype.onPacket = function(a) {
            return this.socket.setHeartbeatTimeout(), "heartbeat" == a.type ? this.onHeartbeat() : ("connect" == a.type && "" == a.endpoint && this.onConnect(), 
            "error" == a.type && "reconnect" == a.advice && (this.isOpen = !1), this.socket.onPacket(a), 
            this);
        }, c.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var a = this;
                this.closeTimeout = setTimeout(function() {
                    a.onDisconnect();
                }, this.socket.closeTimeout);
            }
        }, c.prototype.onDisconnect = function() {
            return this.isOpen && this.close(), this.clearTimeouts(), this.socket.onDisconnect(), 
            this;
        }, c.prototype.onConnect = function() {
            return this.socket.onConnect(), this;
        }, c.prototype.clearCloseTimeout = function() {
            this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null);
        }, c.prototype.clearTimeouts = function() {
            this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout);
        }, c.prototype.packet = function(a) {
            this.send(b.parser.encodePacket(a));
        }, c.prototype.onHeartbeat = function() {
            this.packet({
                type: "heartbeat"
            });
        }, c.prototype.onOpen = function() {
            this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen();
        }, c.prototype.onClose = function() {
            this.isOpen = !1, this.socket.onClose(), this.onDisconnect();
        }, c.prototype.prepareUrl = function() {
            var a = this.socket.options;
            return this.scheme() + "://" + a.host + ":" + a.port + "/" + a.resource + "/" + b.protocol + "/" + this.name + "/" + this.sessid;
        }, c.prototype.ready = function(a, b) {
            b.call(this);
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), 
    function(a, b, c) {
        function d(a) {
            if (this.options = {
                port: 80,
                secure: !1,
                document: "document" in c ? document : !1,
                resource: "socket.io",
                transports: b.transports,
                "connect timeout": 1e4,
                "try multiple transports": !0,
                reconnect: !0,
                "reconnection delay": 500,
                "reconnection limit": 1/0,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": !1,
                "auto connect": !0,
                "flash policy port": 10843,
                manualFlush: !1
            }, b.util.merge(this.options, a), this.connected = !1, this.open = !1, this.connecting = !1, 
            this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, 
            this.options["sync disconnect on unload"] && (!this.isXDomain() || b.util.ua.hasCORS)) {
                var d = this;
                b.util.on(c, "beforeunload", function() {
                    d.disconnectSync();
                }, !1);
            }
            this.options["auto connect"] && this.connect();
        }
        function e() {}
        a.Socket = d, b.util.mixin(d, b.EventEmitter), d.prototype.of = function(a) {
            return this.namespaces[a] || (this.namespaces[a] = new b.SocketNamespace(this, a), 
            "" !== a && this.namespaces[a].packet({
                type: "connect"
            })), this.namespaces[a];
        }, d.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var a;
            for (var b in this.namespaces) this.namespaces.hasOwnProperty(b) && (a = this.of(b), 
            a.$emit.apply(a, arguments));
        }, d.prototype.handshake = function(a) {
            function c(b) {
                b instanceof Error ? (d.connecting = !1, d.onError(b.message)) : a.apply(null, b.split(":"));
            }
            var d = this, f = this.options, g = [ "http" + (f.secure ? "s" : "") + ":/", f.host + ":" + f.port, f.resource, b.protocol, b.util.query(this.options.query, "t=" + +new Date()) ].join("/");
            if (this.isXDomain() && !b.util.ua.hasCORS) {
                var h = document.getElementsByTagName("script")[0], i = document.createElement("script");
                i.src = g + "&jsonp=" + b.j.length, h.parentNode.insertBefore(i, h), b.j.push(function(a) {
                    c(a), i.parentNode.removeChild(i);
                });
            } else {
                var j = b.util.request();
                j.open("GET", g, !0), this.isXDomain() && (j.withCredentials = !0), j.onreadystatechange = function() {
                    4 == j.readyState && (j.onreadystatechange = e, 200 == j.status ? c(j.responseText) : 403 == j.status ? d.onError(j.responseText) : (d.connecting = !1, 
                    !d.reconnecting && d.onError(j.responseText)));
                }, j.send(null);
            }
        }, d.prototype.getTransport = function(a) {
            for (var c, d = a || this.transports, e = 0; c = d[e]; e++) if (b.Transport[c] && b.Transport[c].check(this) && (!this.isXDomain() || b.Transport[c].xdomainCheck(this))) return new b.Transport[c](this, this.sessionid);
            return null;
        }, d.prototype.connect = function(a) {
            if (this.connecting) return this;
            var c = this;
            return c.connecting = !0, this.handshake(function(d, e, f, g) {
                function h(a) {
                    return c.transport && c.transport.clearTimeouts(), c.transport = c.getTransport(a), 
                    c.transport ? (c.transport.ready(c, function() {
                        c.connecting = !0, c.publish("connecting", c.transport.name), c.transport.open(), 
                        c.options["connect timeout"] && (c.connectTimeoutTimer = setTimeout(function() {
                            if (!c.connected && (c.connecting = !1, c.options["try multiple transports"])) {
                                for (var a = c.transports; a.length > 0 && a.splice(0, 1)[0] != c.transport.name; ) ;
                                a.length ? h(a) : c.publish("connect_failed");
                            }
                        }, c.options["connect timeout"]));
                    }), void 0) : c.publish("connect_failed");
                }
                c.sessionid = d, c.closeTimeout = 1e3 * f, c.heartbeatTimeout = 1e3 * e, c.transports || (c.transports = c.origTransports = g ? b.util.intersect(g.split(","), c.options.transports) : c.options.transports), 
                c.setHeartbeatTimeout(), h(c.transports), c.once("connect", function() {
                    clearTimeout(c.connectTimeoutTimer), a && "function" == typeof a && a();
                });
            }), this;
        }, d.prototype.setHeartbeatTimeout = function() {
            if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                var a = this;
                this.heartbeatTimeoutTimer = setTimeout(function() {
                    a.transport.onClose();
                }, this.heartbeatTimeout);
            }
        }, d.prototype.packet = function(a) {
            return this.connected && !this.doBuffer ? this.transport.packet(a) : this.buffer.push(a), 
            this;
        }, d.prototype.setBuffer = function(a) {
            this.doBuffer = a, !a && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer());
        }, d.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer), this.buffer = [];
        }, d.prototype.disconnect = function() {
            return (this.connected || this.connecting) && (this.open && this.of("").packet({
                type: "disconnect"
            }), this.onDisconnect("booted")), this;
        }, d.prototype.disconnectSync = function() {
            var a = b.util.request(), c = [ "http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, b.protocol, "", this.sessionid ].join("/") + "/?disconnect=1";
            a.open("GET", c, !1), a.send(null), this.onDisconnect("booted");
        }, d.prototype.isXDomain = function() {
            var a = c.location.port || ("https:" == c.location.protocol ? 443 : 80);
            return this.options.host !== c.location.hostname || this.options.port != a;
        }, d.prototype.onConnect = function() {
            this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), 
            this.emit("connect"));
        }, d.prototype.onOpen = function() {
            this.open = !0;
        }, d.prototype.onClose = function() {
            this.open = !1, clearTimeout(this.heartbeatTimeoutTimer);
        }, d.prototype.onPacket = function(a) {
            this.of(a.endpoint).onPacket(a);
        }, d.prototype.onError = function(a) {
            a && a.advice && "reconnect" === a.advice && (this.connected || this.connecting) && (this.disconnect(), 
            this.options.reconnect && this.reconnect()), this.publish("error", a && a.reason ? a.reason : a);
        }, d.prototype.onDisconnect = function(a) {
            var b = this.connected, c = this.connecting;
            this.connected = !1, this.connecting = !1, this.open = !1, (b || c) && (this.transport.close(), 
            this.transport.clearTimeouts(), b && (this.publish("disconnect", a), "booted" != a && this.options.reconnect && !this.reconnecting && this.reconnect()));
        }, d.prototype.reconnect = function() {
            function a() {
                if (c.connected) {
                    for (var a in c.namespaces) c.namespaces.hasOwnProperty(a) && "" !== a && c.namespaces[a].packet({
                        type: "connect"
                    });
                    c.publish("reconnect", c.transport.name, c.reconnectionAttempts);
                }
                clearTimeout(c.reconnectionTimer), c.removeListener("connect_failed", b), c.removeListener("connect", b), 
                c.reconnecting = !1, delete c.reconnectionAttempts, delete c.reconnectionDelay, 
                delete c.reconnectionTimer, delete c.redoTransports, c.options["try multiple transports"] = e;
            }
            function b() {
                return c.reconnecting ? c.connected ? a() : c.connecting && c.reconnecting ? c.reconnectionTimer = setTimeout(b, 1e3) : (c.reconnectionAttempts++ >= d ? c.redoTransports ? (c.publish("reconnect_failed"), 
                a()) : (c.on("connect_failed", b), c.options["try multiple transports"] = !0, c.transports = c.origTransports, 
                c.transport = c.getTransport(), c.redoTransports = !0, c.connect()) : (c.reconnectionDelay < f && (c.reconnectionDelay *= 2), 
                c.connect(), c.publish("reconnecting", c.reconnectionDelay, c.reconnectionAttempts), 
                c.reconnectionTimer = setTimeout(b, c.reconnectionDelay)), void 0) : void 0;
            }
            this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
            var c = this, d = this.options["max reconnection attempts"], e = this.options["try multiple transports"], f = this.options["reconnection limit"];
            this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(b, this.reconnectionDelay), 
            this.on("connect", b);
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), 
    function(a, b) {
        function c(a, b) {
            this.socket = a, this.name = b || "", this.flags = {}, this.json = new d(this, "json"), 
            this.ackPackets = 0, this.acks = {};
        }
        function d(a, b) {
            this.namespace = a, this.name = b;
        }
        a.SocketNamespace = c, b.util.mixin(c, b.EventEmitter), c.prototype.$emit = b.EventEmitter.prototype.emit, 
        c.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments);
        }, c.prototype.packet = function(a) {
            return a.endpoint = this.name, this.socket.packet(a), this.flags = {}, this;
        }, c.prototype.send = function(a, b) {
            var c = {
                type: this.flags.json ? "json" : "message",
                data: a
            };
            return "function" == typeof b && (c.id = ++this.ackPackets, c.ack = !0, this.acks[c.id] = b), 
            this.packet(c);
        }, c.prototype.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1), c = b[b.length - 1], d = {
                type: "event",
                name: a
            };
            return "function" == typeof c && (d.id = ++this.ackPackets, d.ack = "data", this.acks[d.id] = c, 
            b = b.slice(0, b.length - 1)), d.args = b, this.packet(d);
        }, c.prototype.disconnect = function() {
            return "" === this.name ? this.socket.disconnect() : (this.packet({
                type: "disconnect"
            }), this.$emit("disconnect")), this;
        }, c.prototype.onPacket = function(a) {
            function c() {
                d.packet({
                    type: "ack",
                    args: b.util.toArray(arguments),
                    ackId: a.id
                });
            }
            var d = this;
            switch (a.type) {
              case "connect":
                this.$emit("connect");
                break;

              case "disconnect":
                "" === this.name ? this.socket.onDisconnect(a.reason || "booted") : this.$emit("disconnect", a.reason);
                break;

              case "message":
              case "json":
                var e = [ "message", a.data ];
                "data" == a.ack ? e.push(c) : a.ack && this.packet({
                    type: "ack",
                    ackId: a.id
                }), this.$emit.apply(this, e);
                break;

              case "event":
                var e = [ a.name ].concat(a.args);
                "data" == a.ack && e.push(c), this.$emit.apply(this, e);
                break;

              case "ack":
                this.acks[a.ackId] && (this.acks[a.ackId].apply(this, a.args), delete this.acks[a.ackId]);
                break;

              case "error":
                a.advice ? this.socket.onError(a) : "unauthorized" == a.reason ? this.$emit("connect_failed", a.reason) : this.$emit("error", a.reason);
            }
        }, d.prototype.send = function() {
            this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments);
        }, d.prototype.emit = function() {
            this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments);
        };
    }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), 
    function(a, b, c) {
        function d() {
            b.Transport.apply(this, arguments);
        }
        a.websocket = d, b.util.inherit(d, b.Transport), d.prototype.name = "websocket", 
        d.prototype.open = function() {
            var a, d = b.util.query(this.socket.options.query), e = this;
            return a || (a = c.MozWebSocket || c.WebSocket), this.websocket = new a(this.prepareUrl() + d), 
            this.websocket.onopen = function() {
                e.onOpen(), e.socket.setBuffer(!1);
            }, this.websocket.onmessage = function(a) {
                e.onData(a.data);
            }, this.websocket.onclose = function() {
                e.onClose(), e.socket.setBuffer(!0);
            }, this.websocket.onerror = function(a) {
                e.onError(a);
            }, this;
        }, d.prototype.send = b.util.ua.iDevice ? function(a) {
            var b = this;
            return setTimeout(function() {
                b.websocket.send(a);
            }, 0), this;
        } : function(a) {
            return this.websocket.send(a), this;
        }, d.prototype.payload = function(a) {
            for (var b = 0, c = a.length; c > b; b++) this.packet(a[b]);
            return this;
        }, d.prototype.close = function() {
            return this.websocket.close(), this;
        }, d.prototype.onError = function(a) {
            this.socket.onError(a);
        }, d.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws";
        }, d.check = function() {
            return "WebSocket" in c && !("__addTask" in WebSocket) || "MozWebSocket" in c;
        }, d.xdomainCheck = function() {
            return !0;
        }, b.transports.push("websocket");
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), 
    function(a, b, c) {
        function d(a) {
            a && (b.Transport.apply(this, arguments), this.sendBuffer = []);
        }
        function e() {}
        a.XHR = d, b.util.inherit(d, b.Transport), d.prototype.open = function() {
            return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), 
            this;
        }, d.prototype.payload = function(a) {
            for (var c = [], d = 0, e = a.length; e > d; d++) c.push(b.parser.encodePacket(a[d]));
            this.send(b.parser.encodePayload(c));
        }, d.prototype.send = function(a) {
            return this.post(a), this;
        }, d.prototype.post = function(a) {
            function b() {
                4 == this.readyState && (this.onreadystatechange = e, f.posting = !1, 200 == this.status ? f.socket.setBuffer(!1) : f.onClose());
            }
            function d() {
                this.onload = e, f.socket.setBuffer(!1);
            }
            var f = this;
            this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), c.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = d : this.sendXHR.onreadystatechange = b, 
            this.sendXHR.send(a);
        }, d.prototype.close = function() {
            return this.onClose(), this;
        }, d.prototype.request = function(a) {
            var c = b.util.request(this.socket.isXDomain()), d = b.util.query(this.socket.options.query, "t=" + +new Date());
            if (c.open(a || "GET", this.prepareUrl() + d, !0), "POST" == a) try {
                c.setRequestHeader ? c.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : c.contentType = "text/plain";
            } catch (e) {}
            return c;
        }, d.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http";
        }, d.check = function(a, d) {
            try {
                var e = b.util.request(d), f = c.XDomainRequest && e instanceof XDomainRequest, g = a && a.options && a.options.secure ? "https:" : "http:", h = c.location && g != c.location.protocol;
                if (e && (!f || !h)) return !0;
            } catch (i) {}
            return !1;
        }, d.xdomainCheck = function(a) {
            return d.check(a, !0);
        };
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), 
    function(a, b) {
        function c() {
            b.Transport.XHR.apply(this, arguments);
        }
        a.htmlfile = c, b.util.inherit(c, b.Transport.XHR), c.prototype.name = "htmlfile", 
        c.prototype.get = function() {
            this.doc = new (window[[ "Active" ].concat("Object").join("X")])("htmlfile"), this.doc.open(), 
            this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
            var a = this.doc.createElement("div");
            a.className = "socketio", this.doc.body.appendChild(a), this.iframe = this.doc.createElement("iframe"), 
            a.appendChild(this.iframe);
            var c = this, d = b.util.query(this.socket.options.query, "t=" + +new Date());
            this.iframe.src = this.prepareUrl() + d, b.util.on(window, "unload", function() {
                c.destroy();
            });
        }, c.prototype._ = function(a, b) {
            this.onData(a);
            try {
                var c = b.getElementsByTagName("script")[0];
                c.parentNode.removeChild(c);
            } catch (d) {}
        }, c.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank";
                } catch (a) {}
                this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, 
                CollectGarbage();
            }
        }, c.prototype.close = function() {
            return this.destroy(), b.Transport.XHR.prototype.close.call(this);
        }, c.check = function(a) {
            if ("undefined" != typeof window && [ "Active" ].concat("Object").join("X") in window) try {
                var c = new (window[[ "Active" ].concat("Object").join("X")])("htmlfile");
                return c && b.Transport.XHR.check(a);
            } catch (d) {}
            return !1;
        }, c.xdomainCheck = function() {
            return !1;
        }, b.transports.push("htmlfile");
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), 
    function(a, b, c) {
        function d() {
            b.Transport.XHR.apply(this, arguments);
        }
        function e() {}
        a["xhr-polling"] = d, b.util.inherit(d, b.Transport.XHR), b.util.merge(d, b.Transport.XHR), 
        d.prototype.name = "xhr-polling", d.prototype.heartbeats = function() {
            return !1;
        }, d.prototype.open = function() {
            var a = this;
            return b.Transport.XHR.prototype.open.call(a), !1;
        }, d.prototype.get = function() {
            function a() {
                4 == this.readyState && (this.onreadystatechange = e, 200 == this.status ? (f.onData(this.responseText), 
                f.get()) : f.onClose());
            }
            function b() {
                this.onload = e, this.onerror = e, f.retryCounter = 1, f.onData(this.responseText), 
                f.get();
            }
            function d() {
                f.retryCounter++, !f.retryCounter || f.retryCounter > 3 ? f.onClose() : f.get();
            }
            if (this.isOpen) {
                var f = this;
                this.xhr = this.request(), c.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = b, 
                this.xhr.onerror = d) : this.xhr.onreadystatechange = a, this.xhr.send(null);
            }
        }, d.prototype.onClose = function() {
            if (b.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = e;
                try {
                    this.xhr.abort();
                } catch (a) {}
                this.xhr = null;
            }
        }, d.prototype.ready = function(a, c) {
            var d = this;
            b.util.defer(function() {
                c.call(d);
            });
        }, b.transports.push("xhr-polling");
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), 
    function(a, b, c) {
        function d() {
            b.Transport["xhr-polling"].apply(this, arguments), this.index = b.j.length;
            var a = this;
            b.j.push(function(b) {
                a._(b);
            });
        }
        var e = c.document && "MozAppearance" in c.document.documentElement.style;
        a["jsonp-polling"] = d, b.util.inherit(d, b.Transport["xhr-polling"]), d.prototype.name = "jsonp-polling", 
        d.prototype.post = function(a) {
            function c() {
                d(), e.socket.setBuffer(!1);
            }
            function d() {
                e.iframe && e.form.removeChild(e.iframe);
                try {
                    g = document.createElement('<iframe name="' + e.iframeId + '">');
                } catch (a) {
                    g = document.createElement("iframe"), g.name = e.iframeId;
                }
                g.id = e.iframeId, e.form.appendChild(g), e.iframe = g;
            }
            var e = this, f = b.util.query(this.socket.options.query, "t=" + +new Date() + "&i=" + this.index);
            if (!this.form) {
                var g, h = document.createElement("form"), i = document.createElement("textarea"), j = this.iframeId = "socketio_iframe_" + this.index;
                h.className = "socketio", h.style.position = "absolute", h.style.top = "0px", h.style.left = "0px", 
                h.style.display = "none", h.target = j, h.method = "POST", h.setAttribute("accept-charset", "utf-8"), 
                i.name = "d", h.appendChild(i), document.body.appendChild(h), this.form = h, this.area = i;
            }
            this.form.action = this.prepareUrl() + f, d(), this.area.value = b.JSON.stringify(a);
            try {
                this.form.submit();
            } catch (k) {}
            this.iframe.attachEvent ? g.onreadystatechange = function() {
                "complete" == e.iframe.readyState && c();
            } : this.iframe.onload = c, this.socket.setBuffer(!0);
        }, d.prototype.get = function() {
            var a = this, c = document.createElement("script"), d = b.util.query(this.socket.options.query, "t=" + +new Date() + "&i=" + this.index);
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), 
            c.async = !0, c.src = this.prepareUrl() + d, c.onerror = function() {
                a.onClose();
            };
            var f = document.getElementsByTagName("script")[0];
            f.parentNode.insertBefore(c, f), this.script = c, e && setTimeout(function() {
                var a = document.createElement("iframe");
                document.body.appendChild(a), document.body.removeChild(a);
            }, 100);
        }, d.prototype._ = function(a) {
            return this.onData(a), this.isOpen && this.get(), this;
        }, d.prototype.ready = function(a, c) {
            var d = this;
            return e ? (b.util.load(function() {
                c.call(d);
            }), void 0) : c.call(this);
        }, d.check = function() {
            return "document" in c;
        }, d.xdomainCheck = function() {
            return !0;
        }, b.transports.push("jsonp-polling");
    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this), 
    "function" == typeof define && define.amd && define([], function() {
        return io;
    });
}();

var isMobile;

!function() {
    "use strict";
    isMobile = function(a) {
        var b;
        void 0 === a && (a = "");
        var c = [ "iphone", "ipad", "android", "blackberry", "nokia", "opera mini", "windows mobile" ];
        for (b = 0; b < c.length; b += 1) if (c[b] !== a && navigator.userAgent.toLowerCase().indexOf(c[b]) > 0) return !0;
        return !1;
    };
}();

var log;

!function() {
    "use strict";
    log = function(a) {
        void 0 !== console && CONF.PROPS.BOOLEAN.LOG === !0 && console.log(a);
    };
}(), function() {
    "use strict";
    CONF.DOM.BOARD = $("#board"), CONF.DOM.BOARD.bind("setupBoard", function(a, b) {
        CONF.DOM.BOARDPOSTS = $(this).children(".posts"), CONF.DOM.BOARDSCREENS = CONF.DOM.BOARDPOSTS.children(".screen"), 
        CONF.DOM.BOARD.height($(document).height() - CONF.DOM.CMD.height()), CONF.DOM.BOARD.width($(document).width()), 
        void 0 !== b && CONF.DOM.BOARD.trigger("loadPosts", b), $(this).fadeIn(CONF.PROPS.INT.MASTERCLOCK), 
        log("Boards height was set to " + CONF.DOM.BOARD.height()), log("Boards width was set to " + CONF.DOM.BOARD.width() * CONF.DOM.BOARDSCREENS.length);
    }), CONF.DOM.BOARD.bind("loadPosts", function(a, b) {
        if (void 0 !== b && (void 0 !== b.FROMTIME && b.FROMTIME || void 0 === b.SCREEN.POSTS || (b.FROMTIME = Object.keys(b.SCREEN.POSTS)[0]), 
        void 0 !== b.SCREEN.POSTS)) {
            CONF.DOM.BOARDPOSTS.data("activescreen", b.NAME);
            var c = new Board(b), d = c.getTemplate();
            CONF.DOM.BOARDSCREENS.html(new Template(d).toHtml()), CONF.DOM.BOARD.trigger("uiBoard");
        }
    }), CONF.DOM.BOARD.bind("uiBoard", function() {
        CONF.DOM.POST = CONF.DOM.BOARDSCREENS.find(".post"), CONF.DOM.POST.draggable({
            delay: 150,
            containment: ".screen",
            start: function(a, b) {
                $(this).data("start", $(this).attr("style")), b.helper.children(".content").trigger(CONF.EVENTS.CLICK), 
                CONF.DOM.UIWINDOW.is(".opened") && $("#back").trigger("click");
            },
            stop: function(a, b) {
                if ($(this).is(".mobile")) $(this).attr("style", $(this).data("start")); else {
                    var c = b.helper.closest(".screen").width(), d = b.helper.closest(".screen").height(), e = parseInt(b.helper.css("left"), 10), f = parseInt(b.helper.css("top"), 10), g = 100 * e / c, h = 100 * f / d, i = {
                        left: g + "%",
                        top: h + "%"
                    }, j = {
                        BY: CONF.PROPS.INT.WHO,
                        TGT: $(this).attr("id"),
                        ACN: "position",
                        TO: [ g, h ]
                    }, k = new Date().getTime(), l = CONF.DOM.BOARDPOSTS.data("activescreen"), m = JSON.parse('{"PRIVATE" : {"SCREENS" : {"' + l + '":{"POSTS":{"' + k + '":{}}}}}}');
                    m.PRIVATE.SCREENS[l].POSTS[k] = j, CONF.BOARD.PRIVATE.SCREENS[l].POSTS[k] = j, CONF.COM.SOCKET.saveChanges(m), 
                    b.helper.css(i), isMobile() && $(this).removeClass("focused");
                }
                $(this).removeData("start");
            }
        });
    }), CONF.DOM.BOARD.bind("tinySortBoard", function() {
        CONF.DOM.POST.draggable({
            disabled: !0
        });
    }), CONF.DOM.BOARD.bind("normalBoard", function() {
        CONF.DOM.POST.draggable("enable");
    }), $(window).resize(function() {
        CONF.DOM.BOARD.trigger("setupBoard");
    });
}(), function() {
    "use strict";
    CONF.DOM.CMD = $("#cmd"), CONF.DOM.CMD_INFO = $("#cmdinfo"), CONF.DOM.CMD.bind("setMainNav", function() {
        var a = new Menu();
        $(this).html(new Template(a.getMenuCmds(a.getPrivateMain())).toHtml()), CONF.DOM.CMD_INFO.empty(), 
        CONF.DOM.CMD.css({
            "float": "none",
            margin: "0 auto"
        });
    }), CONF.DOM.CMD.bind("setPostNav", function(a, b) {
        var c = new Menu();
        $(this).html(new Template(c.getMenuCmds(c.getPostMenue())).toHtml()), setTimeout(function() {
            $("textarea").data("postposition", b);
        }, 10), CONF.DOM.CMD_INFO.empty();
    }), CONF.DOM.CMD.bind("setPostEditNav", function() {
        var a = new Menu();
        $(this).html(new Template(a.getMenuCmds(a.getPostEdit())).toHtml()), CONF.DOM.CMD_INFO.empty();
    }), CONF.DOM.CMD.bind("setScreenNav", function() {
        var a = new Menu();
        $(this).html(new Template(a.getMenuCmds(a.getScreenMenue())).toHtml()), CONF.DOM.CMD_INFO.empty();
    }), CONF.DOM.CMD.bind("setSettingsNav", function() {
        var a = new Menu();
        $(this).html(new Template(a.getMenuCmds(a.getSettingsMenue())).toHtml()), CONF.DOM.CMD_INFO.empty();
    }), CONF.DOM.CMD.bind("setLoginNav", function() {
        var a = new Menu();
        $(this).html(new Template(a.getMenuCmds(a.getLoginsMenue("login"))).toHtml()), CONF.DOM.CMD_INFO.empty();
    }), CONF.DOM.CMD.bind("setupNavinfo", function() {
        $(this).parent().outerWidth() > $(this).outerWidth() + CONF.PROPS.INT.CMD_INFO_MIN_WIDTH ? (CONF.DOM.CMD_INFO.width(Math.floor($(window).outerWidth() - $(this).outerWidth()) - CONF.PROPS.INT.DEF_MARGIN_UNIT).addClass(CONF.PROPS.STRING.ENABLED), 
        log("Enabled navigation infolayer")) : (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED) && CONF.DOM.CMD_INFO.removeClass(CONF.PROPS.STRING.ENABLED), 
        log("Disabled navigation infolayer"));
    }), $(window).resize(function() {
        (!isMobile() || isMobile() && 0 === $(CONF.PROPS.STRING.BLOCKRESIZE).length) && CONF.DOM.CMD.trigger("setupNavinfo");
    }), CONF.DOM.CMD.trigger("setLoginNav"), CONF.DOM.CMD.trigger("setupNavinfo");
}(), function() {
    "use strict";
    CONF.DOM.UILOADER = $("#loader"), CONF.DOM.UILOADER.bind("setupLoader", function() {
        $(this).css({
            top: -1 * $(this).outerHeight(),
            display: "block"
        });
    }), CONF.DOM.UILOADER.bind("showLoader", function() {
        void 0 === $(this).data("requests") ? $(this).data("requests", 1) : $(this).data("requests", $(this).data("requests") + 1), 
        $(this).animate({
            top: 0
        }, CONF.PROPS.INT.MASTERCLOCK / 4);
    }), CONF.DOM.UILOADER.bind("hideLoader", function() {
        $(this).data("requests", $(this).data("requests") - 1), 0 === $(this).data("requests") && $(this).animate({
            top: -1 * $(this).outerHeight()
        }, CONF.PROPS.INT.MASTERCLOCK / 4);
    }), $(window).resize(function() {
        (!isMobile() || isMobile() && 0 === $(CONF.PROPS.STRING.BLOCKRESIZE).length) && CONF.DOM.UILOADER.trigger("setupLoader");
    }), $(document).ajaxStart(function() {
        CONF.DOM.UILOADER.trigger("showLoader");
    }).ajaxStop(function() {
        CONF.DOM.UILOADER.trigger("hideLoader");
    }), CONF.DOM.UILOADER.trigger("setupLoader");
}();

var showMessage;

!function() {
    "use strict";
    CONF.DOM.UIMESSAGING = $("#messaging"), CONF.DOM.UIMESSAGING.bind("setupMessaging", function() {
        $(this).css({
            top: -1 * $(this).outerHeight(),
            display: "block"
        }).empty();
    }), CONF.DOM.UIMESSAGING.bind("showMessaging", function() {
        CONF.DOM.UIMESSAGING.trigger("setupMessaging"), void 0 === $(this).data("type") && $(this).data("type", "notice"), 
        void 0 !== $(this).data("content") ? (void 0 !== window.messagingTimeout && clearTimeout(window.messagingTimeout), 
        $(this).html(new Template({
            H: {
                NO: 1,
                CLASSES: $(this).data("type"),
                CONTENT: $(this).data("content").translate()
            }
        }).toHtml()).animate({
            top: 0
        }), $(this).removeData("content"), window.messagingTimeout = setTimeout(function() {
            CONF.DOM.UIMESSAGING.trigger("hideMessaging");
        }, 3 * CONF.PROPS.INT.MASTERCLOCK)) : log("No massage was given before"), $(this).removeData("type");
    }), CONF.DOM.UIMESSAGING.bind("hideMessaging", function() {
        $(this).animate({
            top: -1 * $(this).outerHeight()
        }, CONF.PROPS.INT.MASTERCLOCK / 4);
    }), showMessage = function(a, b) {
        void 0 === b && (b = "notice"), CONF.DOM.UIMESSAGING.data("content", a).data("type", b).trigger("showMessaging");
    }, $(window).resize(function() {
        (!isMobile() || isMobile() && 0 === $(CONF.PROPS.STRING.BLOCKRESIZE).length) && CONF.DOM.UIMESSAGING.trigger("setupMessaging");
    }), $(document).ajaxError(function(a, b, c, d) {
        showMessage(d, "error");
    }), CONF.DOM.UIMESSAGING.trigger("setupMessaging");
    var a = window.location.href;
    if (-1 !== a.indexOf("#")) {
        var b = a.substring(a.indexOf("#") + 1);
        void 0 !== LANGUAGE[CONF.PROPS.STRING.LANGUAGE][b] && showMessage(b, "notice");
    }
}(), function() {
    "use strict";
    CONF.DOM.UIWINDOW = $("#ui"), CONF.DOM.UIWINDOW.bind("showUi", function() {
        $(this).removeClass("closed").addClass("opened");
    }), CONF.DOM.UIWINDOW.bind("hideUi", function() {
        CONF.DOM.UIWINDOW.children(".cmd").empty(), $(this).removeClass("opened").addClass("closed");
    }), CONF.DOM.UIWINDOW.bind("cleanUi", function() {
        $(this).empty();
    }), CONF.DOM.UIWINDOW.bind("setupUi", function() {
        isMobile() || $(this).css({
            height: $(window).height() - CONF.DOM.CMD.outerHeight() + "px"
        });
    }), $(window).on("resize", function() {
        (!isMobile() || isMobile() && 0 === $(CONF.PROPS.STRING.BLOCKRESIZE).length) && CONF.DOM.UIWINDOW.trigger("setupUi");
    }), CONF.DOM.UIWINDOW.trigger("setupUi");
}(), function() {
    "use strict";
    isMobile() ? (CONF.EVENTS.CLICK = "touchstart", window.addEventListener("load", function() {
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    }), $(window).on("resize", function() {
        0 === $(CONF.PROPS.STRING.BLOCKRESIZE).length && setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    })) : CONF.EVENTS.CLICK = "click";
}(), function() {
    "use strict";
    $(document).on(CONF.EVENTS.FORCED_CLICK, ".post > .content", function(a) {
        a.stopPropagation(), a.preventDefault(), $(this).closest(".screen").find(".focused").removeClass("focused"), 
        $(this).parent(".post").addClass("focused");
    }).on(CONF.EVENTS.CLICK, ".post > .content > p > a", function(a) {
        a.preventDefault(), a.stopPropagation(), isMobile() ? void 0 !== window.navigator.standalone && window.navigator.standalone === !0 ? showMessage("IOS_ERROR_OPENWINDOW") : window.open($(this).attr("href")) : window.open($(this).attr("href"));
    }).on(CONF.EVENTS.FORCED_CLICK, ".focused > .content", function(a) {
        a.preventDefault();
        var b = $(this);
        $(this).hasClass("focused") || (b = $(this).closest(".focused")), isMobile() ? b.hasClass("mobile") ? (b.removeClass("mobile"), 
        b.removeClass("focused"), $(this).closest(".screen").is(".tinysort") || CONF.DOM.BOARD.trigger("normalBoard"), 
        CONF.DOM.CMD.trigger("setMainNav")) : (b.addClass("mobile"), CONF.DOM.BOARD.trigger("tinySortBoard"), 
        CONF.DOM.CMD.trigger("setPostEditNav")) : 0 === $(this).parent().children("#post-functions").length ? $(this).parent().prepend(new Post().getTools()) : $(this).parent().children("#post-functions").remove();
    }).on(CONF.EVENTS.CLICK, "#edit", function() {
        var a, b = $(".screen .focused:eq(0)");
        isMobile() ? (CONF.DOM.CMD.trigger("setMainNav"), CONF.DOM.BOARD.trigger("normalBoard"), 
        b.removeClass("mobile"), b.removeClass("focused")) : a = $(this).closest(".post"), 
        $("#new_post").trigger(CONF.EVENTS.CLICK, {
            origin: a
        }), CONF.DOM.CMD.find("#store_post").addClass("hidden");
    }).on(CONF.EVENTS.CLICK, "#delete", function() {
        var a = !1, b = $(".screen .focused:eq(0)");
        a = isMobile() ? b : $(this).closest(".post"), Apprise("CONFIRM_DELETE_POST".translate(), {
            animation: 250,
            buttons: {
                confirm: {
                    action: function() {
                        isMobile() && (CONF.DOM.CMD.trigger("setMainNav"), b.removeClass("mobile"), CONF.DOM.BOARD.trigger("normalBoard"), 
                        a.removeClass("focused"));
                        var c = {
                            BY: CONF.PROPS.INT.WHO,
                            TGT: a.attr("id"),
                            ACN: "deleted"
                        }, d = new Date().getTime(), e = CONF.DOM.BOARDPOSTS.data("activescreen"), f = JSON.parse('{"PRIVATE":{"SCREENS":{"' + e + '":{"POSTS":{"' + d + '":{}}}}}}');
                        f.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data("activescreen")].POSTS[d] = c, CONF.BOARD.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data("activescreen")].POSTS[d] = c, 
                        showMessage("REMOVE_POST"), CONF.COM.SOCKET.saveChanges(f), a.remove(), Apprise("close");
                    },
                    className: null,
                    id: "confirm",
                    text: "OK".translate()
                },
                abort: {
                    action: function() {
                        Apprise("close");
                    },
                    id: "abort",
                    text: "ABORT".translate()
                }
            },
            input: !1,
            override: !0
        });
    }).on("dblclick", ".post", function(a) {
        a.preventDefault(), a.stopPropagation();
    }).on("dblclick", ".posts", function(a) {
        if (!isMobile()) {
            a.preventDefault(), a.stopPropagation();
            var b, c, d = $(".posts");
            if ($(".post").length > 0) {
                var e = $(".post:eq(0)");
                c = 100 - 100 * e.outerHeight() / d.outerHeight(), b = 100 - 100 * e.outerWidth() / d.outerWidth();
            }
            var f = 100 * a.clientX / d.outerWidth(), g = 100 * a.clientY / d.outerHeight();
            f > b && (f = b), g > c && (g = c), window.lastevent = a, $("#new_post").trigger(CONF.EVENTS.CLICK, {
                left: f,
                top: g
            });
        }
    });
}(), function() {
    "use strict";
    $(document).on("mouseover", "nav#cmd > ul > li > a", function() {
        if (CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED)) {
            var a = $(this).attr("id").toUpperCase() + "_INFO";
            CONF.DOM.CMD_INFO.text(a.translate()).fadeIn(CONF.PROPS.INT.FAST);
        }
    }).on("mouseout", "nav#cmd > ul > li > a", function() {
        CONF.DOM.CMD_INFO.hasClass(CONF.PROPS.STRING.ENABLED) && CONF.DOM.CMD_INFO.text("").fadeOut(CONF.PROPS.INT.FAST);
    }).on(CONF.EVENTS.CLICK, "nav#cmd > ul > li > a", function() {
        $(this).hasClass(CONF.PROPS.STRING.ACTIVE) || ($(this).closest("ul").find(".active").trigger(CONF.EVENTS.CLICK), 
        $(this).addClass(CONF.PROPS.STRING.ACTIVE));
    }).on(CONF.EVENTS.CLICK, "nav#cmd > ul > li > a.active", function() {
        $(this).removeClass(CONF.PROPS.STRING.ACTIVE);
    }).on(CONF.EVENTS.CLICK, "#back", function() {
        CONF.DOM.CMD.trigger("setMainNav"), CONF.DOM.CMD.find(".active").trigger(CONF.EVENTS.CLICK), 
        CONF.DOM.CMD.find("#back").trigger(CONF.EVENTS.CLICK), CONF.DOM.UIWINDOW.trigger("hideUi");
    }).on(CONF.EVENTS.CLICK, "#new_post", function(a, b) {
        var c, d = !1, e = {
            left: 0,
            top: 0
        };
        if (void 0 === b && (b = {}), void 0 !== b.origin && (d = b.origin), void 0 !== b.left && (e.left = b.left), 
        void 0 !== b.top && (e.top = b.top), d) {
            var f = new Post(d);
            c = {
                defaultcolor: f.getColor(),
                content: f.getContent(),
                headline: "EDIT_POST".translate(),
                origin: f.getId()
            };
        }
        if ($(this).hasClass("active")) {
            CONF.DOM.UIWINDOW.trigger("showUi"), CONF.DOM.CMD.trigger("setPostNav", e), CONF.DOM.UIWINDOW.children(".cmd").html(new PostWindow(c).deliver());
            var g = CONF.DOM.UIWINDOW.find("textarea");
            g.val(g.val().toString().br2nl()), g.focus();
        }
    }).on(CONF.EVENTS.CLICK, "#chrono", function() {
        var a = $(".screen");
        $(this).hasClass("active") ? (a.addClass("tinysort").removeClass("normal"), CONF.DOM.BOARD.trigger("tinySortBoard"), 
        CONF.DOM.UIWINDOW.trigger("hideUi"), a.tsort("", {
            order: "desc",
            attr: "id"
        }), showMessage("ORDERED_POSTS_CHRONOLOGICAL")) : (a.addClass("normal").removeClass("tinysort"), 
        CONF.DOM.BOARD.trigger("normalBoard"));
    }).on(CONF.EVENTS.CLICK, "#screen", function() {
        $(this).hasClass("active") && (CONF.DOM.UIWINDOW.trigger("showUi"), CONF.DOM.CMD.trigger("setScreenNav"), 
        CONF.DOM.UIWINDOW.children(".cmd").html(new Template(new Screens().getOverview()).toHtml()));
    }).on(CONF.EVENTS.CLICK, "#settings", function() {
        $(this).hasClass("active") && (CONF.DOM.UIWINDOW.trigger("showUi"), CONF.DOM.CMD.trigger("setSettingsNav"), 
        CONF.DOM.UIWINDOW.children(".cmd").html(new Template(new Settings(CONF.BOARD.SETTINGS).getTemplate()).toHtml()));
    }).on(CONF.EVENTS.CLICK, "#store_post", function() {
        if ($(this).hasClass("active")) {
            var a, b, c, d = new Date().getTime(), e = $("#post-window"), f = e.children("textarea"), g = CONF.DOM.BOARDPOSTS.data("activescreen"), h = JSON.parse('{"PRIVATE":{"SCREENS":{"' + g + '":{"POSTS":{"' + d + '":{}}}}}}'), i = $("#back");
            if (f.val().trim().length > 0) {
                if (void 0 !== f.attr("id") && 0 === f.attr("id").indexOf("origin")) {
                    var j = parseInt(f.attr("id").replace("origin-", ""), 10), k = $(".color_select").data("beforechange"), l = e.find("a.selected").parent().attr("class");
                    typeof j === CONF.PROPS.STRING.NUM && (void 0 !== k && l !== k && (b = {
                        BY: CONF.PROPS.INT.WHO,
                        TGT: j,
                        ACN: "color",
                        TO: e.find("a.selected").parent().attr("class")
                    }), f.val().trim() !== f.data("beforechange").trim() && (c = {
                        BY: CONF.PROPS.INT.WHO,
                        TGT: j,
                        ACN: "content",
                        TO: f.val().trim().escapeHtml().nl2br().urlToLink()
                    }), void 0 !== b && (a = b), void 0 !== c && (a = c), void 0 !== b && void 0 !== c && (a = [ b, c ]), 
                    void 0 === a ? (showMessage("NOTHING_CHANGED", "error"), i.trigger(CONF.EVENTS.CLICK)) : (h.PRIVATE.SCREENS[g].POSTS[d] = a, 
                    CONF.BOARD.PRIVATE.SCREENS[g].POSTS[d] = a)), void 0 !== a && showMessage("STRORE_MODIFIED_POST");
                } else a = [ {
                    BY: CONF.PROPS.INT.WHO,
                    TGT: d,
                    ACN: "color",
                    TO: e.find("a.selected").parent().attr("class")
                }, {
                    BY: CONF.PROPS.INT.WHO,
                    TGT: d,
                    ACN: "content",
                    TO: f.val().escapeHtml().nl2br().urlToLink()
                }, {
                    BY: CONF.PROPS.INT.WHO,
                    TGT: d,
                    ACN: "position",
                    TO: [ f.data("postposition").left, f.data("postposition").top ]
                } ], h.PRIVATE.SCREENS[g].POSTS[d] = a, CONF.BOARD.PRIVATE.SCREENS[g].POSTS[d] = a, 
                showMessage("STRORE_NEW_POST");
                i.trigger(CONF.EVENTS.CLICK), CONF.COM.SOCKET.saveChanges(h);
                var m = new Board({
                    NAME: CONF.DOM.BOARDPOSTS.data("activescreen"),
                    SCREEN: CONF.BOARD.PRIVATE.SCREENS[CONF.DOM.BOARDPOSTS.data("activescreen")],
                    FROMTIME: !1
                });
                CONF.DOM.BOARDSCREENS.html(new Template(m.getTemplate()).toHtml()), CONF.DOM.BOARD.trigger("uiBoard");
            } else showMessage("CANT_STORE_EMPTY_POST", "error"), $(this).removeClass("active");
        }
    }).on(CONF.EVENTS.CLICK, "#new_screen", function() {
        $(this).hasClass("active") ? CONF.DOM.UIWINDOW.children(".cmd").prepend(new Template(new Screens().newScreen()).toHtml()) : $("#new_screen-ui").fadeOut(CONF.PROPS.INT.MASTERCLOCK / 4, function() {
            $(this).remove();
        });
    }).on(CONF.EVENTS.CLICK, "#trash_empty", function() {
        $(this).hasClass("active") ? CONF.DOM.UIWINDOW.children(".cmd").find(".screen").length > 1 ? (showMessage("SELECT_SCREENS_TO_DELETE"), 
        CONF.DOM.UIWINDOW.children(".cmd").find(".screen").addClass("removable")) : ($(this).removeClass("active"), 
        showMessage("CANT_DELETE_ACTIVE_SCREEN", "warning")) : CONF.DOM.UIWINDOW.children(".cmd").find(".screen").removeClass("removable");
    }).on(CONF.EVENTS.CLICK, "#trash_full", function() {
        var a = $(this);
        CONF.DOM.UIWINDOW.children(".cmd").find(".do").length > 0 && Apprise("REALLY_DELETE_THE_SELECTED_SCREENS".translate(), {
            animation: 250,
            buttons: {
                confirm: {
                    action: function() {
                        var b, c = !1, d = JSON.parse('{"PRIVATE":{"SCREENS":{}},"TRASH":{}}'), e = new Date().getTime();
                        $.each(CONF.DOM.UIWINDOW.children(".cmd").find(".do"), function(a, f) {
                            if (b = $(f).find(".screen-name").text(), void 0 !== CONF.BOARD.PRIVATE.SCREENS[b]) {
                                if (c = !0, b = $(f).find(".screen-name").text(), void 0 === CONF.BOARD.TRASH && (CONF.BOARD.TRASH = {}), 
                                Object.keys(CONF.BOARD.PRIVATE.SCREENS[b].POSTS).length > 0) {
                                    var g = {
                                        BY: CONF.PROPS.INT.WHO,
                                        NAME: b,
                                        POSTS: CONF.BOARD.PRIVATE.SCREENS[b]
                                    };
                                    d.TRASH[e] = g, CONF.BOARD.TRASH[e] = g, e += 1;
                                }
                                d.PRIVATE.SCREENS[b] = !1, delete CONF.BOARD.PRIVATE.SCREENS[b];
                            }
                        }), c && CONF.COM.SOCKET.saveChanges(d), CONF.DOM.UIWINDOW.children(".cmd").find(".do").remove(), 
                        CONF.DOM.UIWINDOW.children(".cmd").find(".removable").removeClass("do removable"), 
                        a.attr("id", a.attr("id").replace("full", "empty")), $(".counter").remove(), Apprise("close");
                    },
                    className: null,
                    id: "confirm",
                    text: "OK".translate()
                },
                abort: {
                    action: function() {
                        CONF.DOM.UIWINDOW.children(".cmd").find(".removable").removeClass("do removable"), 
                        a.attr("id", a.attr("id").replace("full", "empty")), $(".counter").remove(), Apprise("close");
                    },
                    id: "abort",
                    text: "ABORT".translate()
                }
            },
            input: !1,
            override: !0
        });
    });
}(), function() {
    "use strict";
    $(document).on(CONF.EVENTS.FORCED_CLICK, "#ui > .cmd > .screen", function() {
        if ($(this).hasClass("removable")) $(this).hasClass("do") ? $(this).hasClass("do") && $(this).removeClass("do") : $(this).addClass("do"), 
        $(".screen.removable.do").length > 0 ? ($("#trash_empty").attr("id", "trash_empty".replace("empty", "full")), 
        $(".counter").remove(), $("#trash_full").parent().prepend(new Template({
            SPAN: {
                CLASSES: "counter",
                CONTENT: $(".do").length
            }
        }).toHtml())) : ($("#trash_full").attr("id", "trash_full".replace("full", "empty")), 
        $(".counter").remove()); else if ($(this).is(".curent")) CONF.DOM.CMD.find("#back").trigger(CONF.EVENTS.CLICK); else {
            var a = $(this).find(".screen-name").text();
            void 0 !== CONF.BOARD.PRIVATE.SCREENS[a] && (CONF.DOM.BOARD.find(".screen").empty(), 
            CONF.DOM.BOARD.trigger("loadPosts", {
                NAME: a,
                SCREEN: CONF.BOARD.PRIVATE.SCREENS[a],
                FROMTIME: !1
            })), CONF.DOM.CMD.find("#back").trigger(CONF.EVENTS.CLICK);
        }
    }).on(CONF.EVENTS.CLICK, "#create-screen", function() {
        var a = $("#screen-name"), b = JSON.parse('{"PRIVATE":{"SCREENS":{"' + a.val() + '":{}}}}');
        if (a.val() !== "NEW_SCREEN_NAME".translate() && a.val().trim().length > 0) if (void 0 !== CONF.BOARD.PRIVATE.SCREENS[a.val().trim()]) showMessage(a.val().trim() + " " + "SCREEN_ALREADY_EXISTS".translate(), "error"), 
        $("#abort-create-screen").trigger("click"); else {
            if (void 0 === CONF.BOARD.PRIVATE.SCREENS[a.val()]) {
                var c = $("#screen-bg-url").val(), d = c.isImageURL() ? c : CONF.PROPS.STRING.SCREEN_DEFAULT_BG, e = {
                    BY: CONF.PROPS.INT.WHO,
                    META: {
                        BG: d
                    },
                    POSTS: {}
                };
                b.PRIVATE.SCREENS[a.val()] = e, CONF.BOARD.PRIVATE.SCREENS[a.val()] = e;
            }
            $("#abort-create-screen").trigger("click"), CONF.DOM.UIWINDOW.children(".cmd").html(new Template(new Screens().getOverview()).toHtml()), 
            CONF.COM.SOCKET.saveChanges(b), showMessage("SCREEN_WAS_CREATED".translate(), "notice");
        } else showMessage("INVALID_SCREEN_NAME".translate(), "error");
    }).on("click", "#abort-create-screen", function() {
        $("#new_screen-ui").fadeOut(CONF.PROPS.INT.MASTERCLOCK / 4, function() {
            $(this).remove(), $("#new_screen").removeClass("active");
        });
    }).on("focusout", "#screen-bg-url", function() {
        var a = $(this).val().trim();
        a.isImageURL() ? $("#new_screen-preview").css("background-image", "url(" + a + ")") : showMessage("INVALID_IMAGE_URL".translate(), "error");
    }).on("keyup", "#screen-bg-url", function(a) {
        13 === a.which && $(this).blur();
    });
}();

var Post;

!function() {
    "use strict";
    $(document).on("focusin", "input", function() {
        $(this).data("val", $(this).val()), $(this).val("");
    }).on("focusout", "input", function() {
        0 === $(this).val().trim().length && $(this).val($(this).data("val"));
    }).on(CONF.EVENTS.CLICK, ".buttons > .button.cancel a", function() {
        CONF.DOM.CMD.find(".active").trigger(CONF.EVENTS.CLICK);
    }).on("keyup", "#boardname, #boardpw", function(a) {
        a.preventDefault();
        var b = $(this);
        13 === a.keyCode && ($(this).blur(), $(this).val().length > 0 && "boardname" === b.attr("id") && $("#boardpw").focus(), 
        "boardpw" === $(this).attr("id") && $("#do-login").trigger(CONF.EVENTS.CLICK));
    }).on(CONF.EVENTS.CLICK, "#do-login", function() {
        var a = $("#boardpw"), b = $("#boardname"), c = $("#login-content"), d = b.val(), e = a.val();
        if (e.length > 3 && e !== "PASSWORD".translate() && e !== d && d.length > 0 && d !== "YOUR_PREFERED_BOARDNAME".translate()) {
            var f = CryptoJS.SHA3(d + CONF.PROPS.STRING.SALT + e);
            if (null !== CONF.PROPS.OBJECT.STORAGE) {
                var g = CONF.PROPS.OBJECT.STORAGE.getItem("boards");
                -1 === g.search(d + "-") && CONF.PROPS.OBJECT.STORAGE.setItem("boards", g + d + "-"), 
                CONF.PROPS.OBJECT.STORAGE.setItem("lastboard", d);
            }
            $("#login-loader, #login-message").remove(), c.children("h1, p, #login-form").hide(), 
            c.prepend(new Template({
                IMG: {
                    ID: "login-loader",
                    SRC: "img/loaders/login.gif"
                },
                DIV: {
                    ID: "login-message",
                    CONTENT: "CONNECTING".translate()
                }
            }).toHtml()), CONF.COM.SOCKET = new Connection("/"), CONF.COM.SOCKET.setEncryptionPhrase(e), 
            CONF.COM.SOCKET.connect(f.toString());
        } else d === "YOUR_PREFERED_BOARDNAME".translate() || 0 === d.length ? (showMessage("PLEASE_ENTER_A_VALID_BOARDNAME", "error"), 
        isMobile() || b.focus()) : (e === "PASSWORD".translate() || e.length < 4) && (showMessage("PLEASE_ENTER_VALID_PASSWORD", "error"), 
        isMobile() || a.focus());
    }).on(CONF.EVENTS.CLICK, "#post-window > .color_select li > a", function() {
        if (!$(this).hasClass("selected")) {
            var a = $(this).closest("ul").find(".selected"), b = $("#post-window"), c = b.children("textarea").attr("id"), d = void 0 !== c && -1 !== c.indexOf("origin-"), e = b.children("textarea"), f = $(this).closest("li").attr("class"), g = b.children(".color_select");
            d && void 0 === g.data("beforechange") && g.data("beforechange", a.parent().attr("class")), 
            e.removeAttr("class").addClass(f), a.removeClass("selected"), $(this).addClass("selected"), 
            d && ($(this).parent().attr("class") !== g.data("beforechange") ? CONF.DOM.CMD.find("#store_post").removeClass("hidden") : (CONF.DOM.CMD.find("#store_post").addClass("hidden"), 
            e.trigger("keyup")));
        }
    }).on("focusin", "#post-window > textarea", function() {
        void 0 !== $(this).attr("id") && -1 !== $(this).attr("id").indexOf("origin-") && ($(this).val($(this).val() + " "), 
        void 0 === $(this).data("beforechange") && ($(this).data("beforechange", $(this).val()), 
        $(this).setCursorPosition($(this).val().length)));
    }).on("keyup", "#post-window > textarea", function() {
        var a = $(this).attr("id");
        void 0 !== a && -1 !== a.indexOf("origin-") && ($(this).val().trim() !== $(this).data("beforechange").trim() ? CONF.DOM.CMD.find("#store_post").removeClass("hidden") : CONF.DOM.CMD.find("#store_post").addClass("hidden"));
    }).on("keyup focusout", ".legend-item > input", function(a) {
        var b = $(this).closest(".legend-item").attr("id").replace("legend-", "").toUpperCase(), c = JSON.parse('{"SETTINGS":{"COLORS":{"' + b + '":{}}}}');
        "focusout" === a.type && void 0 !== CONF.BOARD.SETTINGS.COLORS[b] && (c.SETTINGS.COLORS[b] = $(this).val().trim(), 
        CONF.BOARD.SETTINGS.COLORS[b] = $(this).val().trim(), CONF.COM.SOCKET.saveChanges(c), 
        showMessage("CHANGED_PRIO_NAME")), "keyup" === a.type && 13 === a.keyCode && $(this).blur();
    });
}(), function() {
    "use strict";
    $(document).on("touchmove", "body", function(a) {
        $(".tinysort").has($(a.target)).length || $("#ui").has($(a.target)).length || $(".focused").has($(a.target)).length || a.preventDefault();
    }).on("keydown", "body", function(a) {
        0 === $("#login-window").length && 27 === a.keyCode && (a.preventDefault(), CONF.DOM.UIWINDOW.trigger("hideUi"), 
        CONF.DOM.CMD.find(".active").trigger(CONF.EVENTS.CLICK), CONF.DOM.CMD.trigger("setMainNav"));
    }).on("click", "a", function(a) {
        "#" === $(this).attr("href") && (a.preventDefault(), a.stopPropagation());
    });
}(), function() {
    "use strict";
    $(document).ready(function() {
        function a() {
            f.length > 0 && (isMobile() ? setTimeout(function() {
                $("title").text("MOBILE_TITLE".translate());
            }, 2e3) : (f.css({
                position: "absolute",
                left: ($(window).width() - f.outerWidth()) / 2,
                top: ($(window).height() - f.outerHeight()) / 3
            }), $("#cmd").css({
                "float": "none",
                margin: "0 auto"
            })));
        }
        CONF.DOM.UIWINDOW.trigger("showUi"), CONF.DOM.UIWINDOW.children(".cmd").html(new Template({
            LINK: {
                URL: "https://github.com/BernhardBezdek/ihave.to",
                TARGET: "_blank",
                CONTENT: {
                    IMG: {
                        SRC: "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png",
                        ALT: "Fork me on GitHub",
                        STYLE: "position: absolute; top: 0; right: 0; border: 0;"
                    }
                }
            }
        }).toHtml() + new Template(new Login()).toHtml());
        var b, c = "";
        CONF.PROPS.OBJECT.STORAGE = localStorage, null === CONF.PROPS.OBJECT.STORAGE.getItem("boards") && CONF.PROPS.OBJECT.STORAGE.setItem("boards", ""), 
        null !== CONF.PROPS.OBJECT.STORAGE.getItem("lastboard") && (c = CONF.PROPS.OBJECT.STORAGE.getItem("lastboard"));
        var d = $("#boardpw"), e = $("#boardname"), f = $("#login-window");
        b = CONF.PROPS.OBJECT.STORAGE.getItem("boards").split("-").filter(String), c.length > 0 && e.val(c), 
        d.passStrength({
            userid: "#boardname"
        }), d.trigger("keyup"), e.autocomplete({
            source: b
        }), a(), $(window).resize(function() {
            a();
        });
    });
}();