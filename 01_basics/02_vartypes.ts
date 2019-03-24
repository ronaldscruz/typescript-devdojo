let num: number = 10;

let bool: boolean = true;

let str: string = "The game";

let str2: string = `You've lost ${str}`

function x(): void{}

let list: number[] = [3, 14, 15];


// tuples (fixed length and types)
let profile: [string, string, number]
profile = ["Ronald", "Programmer", 18]


// optional parameters && type: any
function addContact( phoneNumber: number, contactName: string, nickname?: any ){
   if (!nickname)
      return console.log(`Friend ${contactName} added. Phone: ${phoneNumber}`);
   return console.log(`Friend ${contactName} (${nickname}) added. Phone: ${phoneNumber}`);
}

addContact(1191231234, "Vitão") // Friend Vitão added. Phone: 1191231234}



function sum( ...numbers: number[] ): number{

   const result = numbers.reduce((res, next) => {
      return res + next
   })

   return result
}

console.log(sum(1, 2, 3, 4)) // 10

