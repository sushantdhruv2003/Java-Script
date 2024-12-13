const score = 400
console.log(score) // ye 400 dega
const balance = new Number(100)
console.log(balance) // ye Number: 400 dega

console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)); // 100.00

const number1 = 123.7556
console.log(number1.toPrecision(3)) // 3 number ka precision // 124

const number2 = 23.8774
console.log(number2.toPrecision(3)); // 3 number ka precision // 239

const indianRepresentation = 10000000
console.log(indianRepresentation.toLocaleString('en-IN')); // print the 1 crore in Indian style


//   **** MATHS ****

console.log(Math.abs(-20));  // convert -ve to +ve

console.log(Math.round(4.8)); // roundOff

console.log(Math.ceil(4.2)); // point aagya matlb 4 se jyada wali value(5)

console.log(Math.floor(4.9)); // sbse niche wali value(4)

console.log(Math.min(4,6,1,8,10));

// random method:

console.log(Math.random()); // decimal no. bw 0 and 1
console.log((Math.random()*10) + 1) // decimal no. bw 1 and 10
console.log(Math.floor(Math.random()*10) + 1) // natural no. bw 1 and 10

// if random number to be found is between a given range:
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // natural no. between 10 and 20

