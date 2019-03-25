var Validation;
(function (Validation) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
    var UrlValidator = /** @class */ (function () {
        function UrlValidator() {
        }
        UrlValidator.isValid = function (str) {
            return urlRegex.test(str);
        };
        return UrlValidator;
    }());
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
