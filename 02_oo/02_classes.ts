class Person {
   fullname: string
   age: number

   constructor( fullname: string, age: number ){
      this.fullname = fullname
      this.age = age
   }

   show(): string {  
      return `> Person
      Fullname: ${this.fullname}
      Age: ${this.age}
   ----------`
   }
}

class Employee extends Person{
   salary: number

   constructor(fullname:string, age: number, salary: number){
      super(fullname, age)

      this.salary = salary
   }

   show(): string {  
      return `> Employee
      Fullname: ${this.fullname}
      Age: ${this.age}
      Salary: $${this.salary}
   ----------`
   }
}

let p1 = new Person( "Tony Hawk", 50 )
console.log(p1.show())

let e1 = new Employee( "Joe Phineas", 18, 3400 )
console.log(e1.show())


// Polymorphism

let p2: Person = new Employee("Van Helsing", 250, 1450)
console.log(p2.show())


// Access modifiers

class Product {
   private _description: string
   private _price: number

   get description(): string {
      return this._description
   }

   set description(newValue: string) {
      this._description = newValue
   }

   get price(): number {
      return this._price
   }

   set price(newValue: number) {
      this._price = newValue
   }

   createAd(): string{
      return `[FOR SALE: ${this.description}]
> ONLY $${this.price} !! <`
   }
}

let product1 = new Product()
product1.description = 'Nice T-shirt'
product1.price = 15.85

console.log(product1.createAd())