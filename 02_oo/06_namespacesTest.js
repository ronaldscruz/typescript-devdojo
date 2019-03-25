var EmailValidator = Validation.EmailValidator;
var UrlValidator = Validation.UrlValidator;
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
    console.log("Email: " + email + " | " + (EmailValidator.isValid(email) ? "Valid" : "Invalid"));
});
// Email: ronald@ | Invalid 
// Email: lpalas@email | Invalid 
// Email: bfrag@email.com | Valid 
urls.map(function (url) {
    console.log("URL: " + url + " | " + (UrlValidator.isValid(url) ? "Valid" : "Invalid"));
});
// URL: totaljerkface.com | Invalid
// URL: www.fastcoding.com.br | Valid
// URL: https:///randomurl.com | Invalid
