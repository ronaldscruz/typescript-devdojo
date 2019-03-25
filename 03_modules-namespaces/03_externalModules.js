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
