var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    Person.prototype.show = function () {
        return "> Person\n      Fullname: " + this.fullname + "\n      Age: " + this.age + "\n   ----------";
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fullname, age, salary) {
        var _this = _super.call(this, fullname, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.show = function () {
        return "> Employee\n      Fullname: " + this.fullname + "\n      Age: " + this.age + "\n      Salary: $" + this.salary + "\n   ----------";
    };
    return Employee;
}(Person));
var p1 = new Person("Tony Hawk", 50);
console.log(p1.show());
var e1 = new Employee("Joe Phineas", 18, 3400);
console.log(e1.show());
// Polymorphism
var p2 = new Employee("Van Helsing", 250, 1450);
console.log(p2.show());
// Access modifiers
var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (newValue) {
            this._description = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newValue) {
            this._price = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.createAd = function () {
        return "[FOR SALE: " + this.description + "]\n> ONLY $" + this.price + " !! <";
    };
    return Product;
}());
var product1 = new Product();
product1.description = 'Nice T-shirt';
product1.price = 15.85;
console.log(product1.createAd());
