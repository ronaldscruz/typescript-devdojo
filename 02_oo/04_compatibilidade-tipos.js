var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    return Beverage;
}());
var Clothes = /** @class */ (function () {
    function Clothes() {
    }
    return Clothes;
}());
var soda;
soda = new Beverage(); // soda (StoredProduct) contains all the required attributes of Beverage (id, description).
// so they are compatible
var tshirt;
// tshirt = new Clothes() >> [ERROR]: Missing 'description' required in StoredProduct interface
