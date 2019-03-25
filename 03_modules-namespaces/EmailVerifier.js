"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var EmailVerifier = /** @class */ (function () {
    function EmailVerifier() {
    }
    EmailVerifier.isValid = function (str) {
        return emailRegex.test(str);
    };
    return EmailVerifier;
}());
exports.EmailVerifier = EmailVerifier;
