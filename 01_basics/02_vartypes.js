var num = 10;
var bool = true;
var str = "The game";
var str2 = "You've lost " + str;
function x() { }
var list = [3, 14, 15];
// tuples (fixed length and types)
var profile;
profile = ["Ronald", "Programmer", 18];
// optional parameters && type: any
function addContact(phoneNumber, contactName, nickname) {
    if (!nickname)
        return console.log("Friend " + contactName + " added. Phone: " + phoneNumber);
    return console.log("Friend " + contactName + " (" + nickname + ") added. Phone: " + phoneNumber);
}
addContact(1191231234, "Vitão"); // Friend Vitão added. Phone: 1191231234}
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = numbers.reduce(function (res, next) {
        return res + next;
    });
    return result;
}
console.log(sum(1, 2, 3, 4)); // 10
