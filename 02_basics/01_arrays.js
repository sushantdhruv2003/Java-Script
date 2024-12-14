// JavaScript Arrays are Resizable
// contains a mix of different Data Types
// while copying, it creates Shallow Copy

// declaration:
const arr = [2,1,3,6,4]
const arr1 = ["A", "B"]
const arr2 = new Array(10,20,1,8)
// accessing:
console.log(arr)
console.log(arr2[2]); // 1

// array methods:
// arr.push(6)
// console.log(arr) // add 6 to last

// arr.pop() // remove the last element

// arr.unshift(50) // add 50 to the start
// console.log(arr) // [50,2,1,3,6,4]

// arr.shift() // removes the first element
// console.log(arr); // [2,1,3,6,4]

// console.log(arr.includes(4)) // true

// console.log(arr.indexOf(200)) // if not exist then -1
// console.log(arr.indexOf(6)) // 3

// join() method converts into string after joining
const newArr = arr.join()
console.log(arr) // [2,1,3,6,4]
console.log(typeof arr); // object

console.log(newArr) // 2,1,3,6,4
console.log(typeof newArr); // string

//     **** slice and splice(VVI FOR INTERVIEWS) ****   

const myArr = [0,1,2,3,4,5]
console.log("A", myArr); // A [0,1,2,3,4,5]

const myNew1 = myArr.slice(1,3)
console.log(myNew1); // [1,2] // index 3 is exclusive here
console.log("B", myArr) // B [0,1,2,3,4,5] // no change in original array

const myNew2 = myArr.splice(1,3)
console.log(myNew2) // [1,2,3] // index 3 is inclusive here
console.log("C", myArr) // C [0,4,5] // bcha hua elements print hoga
