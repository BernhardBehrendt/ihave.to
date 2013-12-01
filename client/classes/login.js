/*global Buttons*/
var Login;
(function () {
    "use strict";
    /**
     * The login window template
     * 
     * @module Client
     * @submodule Classes
     * @class Login
     * @constructor
     * @return {Object} The Loginwindow template instance
     */
    Login = function () {
        return {
            DIV: {
                ID: 'login-window',
                CONTENT: {
                    DIV: {
                        ID: 'login-content',
                        CONTENT: {
                            H: {
                                NO: 1,
                                CONTENT: 'SIGN_IN'.translate()
                            },
                            P: {
                                CONTENT: 'LOGIN_SHORT_DESC'.translate()
                            },
                            DIV: {
                                ID: 'login-form',
                                CONTENT: {
                                    INPUT: [
                                        {
                                            TYPE: 'text',
                                            NAME: 'boardname',
                                            ID: 'boardname',
                                            VALUE: 'YOUR_PREFERED_BOARDNAME'.translate()
                                        },
                                        {
                                            TYPE: 'password',
                                            NAME: 'boardpw',
                                            ID: 'boardpw',
                                            VALUE: 'PASSWORD'.translate()
                                        }
                                    ],
                                    PIPE: {
                                        CONTENT: new Buttons([
                                            {
                                                LABEL: 'DO_LOGIN',
                                                TYPE: 'ok',
                                                ID: 'do-login'
                                            }
                                        ], 'xwide')
                                    },
                                    SPAN: {
                                        CLASSES: 'notice',
                                        CONTENT: {
                                            STRONG: {
                                                CONTENT: 'NOTICE'.translate()
                                            },
                                            PIPE: {
                                                CONTENT: 'NOTICE_TEXT'.translate()
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
})();