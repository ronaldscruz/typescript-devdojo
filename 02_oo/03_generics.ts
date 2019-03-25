function reverseList<T>(list: Array<T>): Array<T> {
   return list.reverse()
} 

let numbersArray = [1, 2, 3, 4, 5]
let stringsArray = ['B. Fraga', 'L. Palas', 'Zoro']

console.log(
   reverseList<number>(numbersArray)
)

console.log(
   reverseList<string>(stringsArray)
)