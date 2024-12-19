// FILTER: filter condition lagata hai
// 
// // const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 5) // yha => ke baad condition dena hota hai
// console.log(newNums) // [6,7,8,9,10]

// agar aise try karo to:
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num > 5 // return lagana hoga, otherwise ek empty array ([]) de dega output
// })
// console.log(newNums)

// using forEach loop:
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []
myNums.forEach( (num) => {
    if(num > 5){
        newNums.push(num)
    }
})
console.log(newNums)