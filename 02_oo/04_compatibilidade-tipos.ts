interface StoredProduct {
   id: number
   description: string
}

class Beverage {
   id: number
   description: string
}

class Clothes {
   id: number
   size: string
}

let soda: StoredProduct
soda = new Beverage() // soda (StoredProduct) contains all the required attributes of Beverage (id, description).
                      // so they are compatible

let tshirt: StoredProduct
// tshirt = new Clothes() >> [ERROR]: Missing 'description' required in StoredProduct interface