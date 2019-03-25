function add(num1: number, num2: number): number{
   return num1 + num2
}

function sub(num1: number, num2: number): number{
   return num1 - num2
}

function mul(num1: number, num2: number): number{
   return num1 * num2
}

function div(num1: number, num2: number): number{
   return num1 / num2
}

function calculator( num1: number, num2: number, operation: (num1, num2) => number ): any {
   try{
      return `The result of '${operation.name}' between ${num1} and ${num2} equals to: ${operation(num1, num2)}`
   }catch(err){
      return `[ERROR] function calculator: Invalid parameters (${num1}, ${num2}, ${operation})`
   }
}

console.log(
   calculator(111, 7, mul)
)