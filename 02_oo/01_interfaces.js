function printName(person) {
    console.log("Your name is " + person.fullname);
}
var personOne = {
    fullname: "Edward Elric",
    age: 18
};
var personTwo = {
    name: 'Pelé'
};
var personThree = {
    age: 22,
    fullname: 'Henrich'
};
printName(personOne);
// printName(personTwo) ===> Error (missing "fullname" parameter)
printName(personThree);
function showCustomer(Customer) {
    return "\n---- Show Customer ----\nName: " + Customer.fullname + "\nAddress: " + Customer.address + "\n-----------------------\n   ";
}
var c1 = {
    fullname: 'Joe Andrew',
    address: '80 Delancey St, New York, NY'
};
var c2 = {
    fullname: 'John Phineas',
    address: '129 Sidney Ave, Denver, CO'
};
console.log(showCustomer(c1));
console.log(showCustomer(c2));
console.log(showCustomer({ fullname: 'Ronald S.', address: '1 Ghostgomes St, São Paulo, SP' }));
var p1 = {
    category: 'Beverage',
    description: 'Strawberry juice',
    quantity: 23,
    price: 1.20
};
var p2 = {
    category: 'Clothing',
    description: 'GTA San Andreas T-shirt',
    quantity: 5,
    price: 8.95,
    discount: 10
};
function showProduct(Product) {
    return "\n---- Show Product ----\nCategory: " + Product.category + "\nDescription: " + Product.description + "\nQuantity: " + Product.quantity + "\nPrice (US$): " + Product.price + "\nDiscount (%): " + (Product.discount ? "" + Product.discount : "No") + "\n-----------------------\n   ";
}
console.log(showProduct(p1));
console.log(showProduct(p2));
var mc1 = {
    fullname: 'L. Palas',
    address: '1323 Saint Mikhail Ave, São Paulo, SP',
    badge: 'Founder'
};
