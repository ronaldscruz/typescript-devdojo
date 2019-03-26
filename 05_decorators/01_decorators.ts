@Category({
   category: "Clothing"
})
class Product{
   description: string
}

function Category(config: any){
   return (target: any) => {
      Object.defineProperty(target.prototype, "category", {
         value: () => config.category
      })
   }
}

let p1 = new Product()
console.log(p1.category())

