function printName( person: { fullname: string } ): void {
   console.log(`Your name is ${person.fullname}`)
}

let personOne = {
   fullname: "Edward Elric",
   age: 18
}

let personTwo = {
   name: 'Pelé',
}

let personThree = {
   age: 22,
   fullname: 'Henrich'
}

printName(personOne)
// printName(personTwo) ===> Error (missing "fullname" parameter)
printName(personThree)



interface Customer {
   fullname: string
   address: string
}

interface Product {
   category: string
   description: string
   quantity: number
   price: number
   discount?: number // optional
}



function showCustomer( Customer ): string {
   return `
---- Show Customer ----
Name: ${Customer.fullname}
Address: ${Customer.address}
-----------------------
   `
}

let c1: Customer = {
   fullname: 'Joe Andrew',
   address: '80 Delancey St, New York, NY'
}

let c2: Customer = {
   fullname: 'John Phineas',
   address: '129 Sidney Ave, Denver, CO'
}

console.log(showCustomer(c1))
console.log(showCustomer(c2))
console.log(showCustomer( { fullname: 'Ronald S.', address: '1 Ghostgomes St, São Paulo, SP' } ))



let p1: Product = {
   category: 'Beverage',
   description: 'Strawberry juice',
   quantity: 23,
   price: 1.20
}

let p2: Product = {
   category: 'Clothing',
   description: 'GTA San Andreas T-shirt',
   quantity: 5,
   price: 8.95,
   discount: 10
}

function showProduct( Product ): string {
   return `
---- Show Product ----
Category: ${Product.category}
Description: ${Product.description}
Quantity: ${Product.quantity}
Price (US$): ${Product.price}
Discount (%): ${Product.discount ? `${Product.discount}` : `No` }
-----------------------
   `
}

console.log(showProduct(p1))
console.log(showProduct(p2))



// constant values

interface MemberCustomer extends Customer{
   readonly badge: string
}

let mc1: MemberCustomer = {
   fullname: 'L. Palas',
   address: '1323 Saint Mikhail Ave, São Paulo, SP',
   badge: 'Founder'
}
