let name1 = "sushant"
let name2 = name1
name2 = "dhruv"
console.log(name2) // dhruv
console.log(name1) // sushant
// this is because String is Pass by value (Stack), so the original data will not be updated, it will just send a copy

let userOne = {
    name: "sushant",
    id: 225
}
let userTwo = userOne
userTwo.name = "rohit"
console.log(userOne.name) // rohit
console.log(userTwo.name) // rohit
// this is because Object is Pass by Reference(Heap), so the original data will also get updated