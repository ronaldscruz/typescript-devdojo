(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailVerifier_1 = require("./EmailVerifier");
var UrlVerifier_1 = require("./UrlVerifier");
var emails = [
    'ronald@',
    'lpalas@email',
    'bfrag@email.com'
];
var urls = [
    'totaljerkface.com',
    'www.fastcoding.com.br',
    'https:///randomurl.com'
];
emails.map(function (email) {
    console.log("Email: " + email + " | " + (EmailVerifier_1.EmailVerifier.isValid(email) ? "Valid" : "Invalid"));
});
urls.map(function (url) {
    console.log("URL: " + url + " | " + (UrlVerifier_1.UrlVerifier.isValid(url) ? "Valid" : "Invalid"));
});

},{"./EmailVerifier":2,"./UrlVerifier":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
