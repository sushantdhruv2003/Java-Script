let score = "225"
console.log(typeof score)  // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)  // number

console.log(valueInNumber);  // 225

let score1 = "225abc"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)  // number
console.log(valueInNumber1); // Nan

let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2); // 0


let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(valueInNumber4); // Nan

let score5 = true
let valueInNumber5 = Number(score5)
console.log(valueInNumber5); // Nan

let isValue = 1
let booleanConversion = Boolean(isValue)
console.log(booleanConversion);  // true

let isValue1 = "Sushant"
let booleanConversion1 = Boolean(isValue1)
console.log(booleanConversion1) // true

let isValue2 = ""
let booleanConversion2 = Boolean(isValue2)
console.log(booleanConversion2) // false

let someNumber = 42;
let toString = String(someNumber)
console.log(toString);  // 42(but it is a string now)
