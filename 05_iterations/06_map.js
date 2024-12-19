// MAP: map value change karta hai kuch operation karke
// 
// // const nums = [1,2,3,4,5,6]
// const newNums = nums.map( (num) => num + 10)
// console.log(newNums)

// chaining method:

const nums = [1,2,3,4]
const newNums = nums
               .map( (num) => num * 10)
               .map( (num) => num + 1)
               .filter( (num) => num > 20)

console.log(newNums)