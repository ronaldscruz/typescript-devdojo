"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
var UrlVerifier = /** @class */ (function () {
    function UrlVerifier() {
    }
    UrlVerifier.isValid = function (str) {
        return urlRegex.test(str);
    };
    return UrlVerifier;
}());
exports.UrlVerifier = UrlVerifier;
