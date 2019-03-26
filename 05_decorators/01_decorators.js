var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Product = /** @class */ (function () {
    function Product() {
    }
    Product = __decorate([
        Category({
            category: "Clothing"
        })
    ], Product);
    return Product;
}());
function Category(config) {
    return function (target) {
        Object.defineProperty(target.prototype, "category", {
            value: function () { return config.category; }
        });
    };
}
var p1 = new Product();
console.log(p1.category());
