// singleton Object:
// const userJee = new Object()
// OR
// const userJee = {}
// console.log(userJee) // for both output will be {}

// const user1 = {}
// user1.id = 225
// user1.name = "Sushant"
// user1.isLoggedIn = false

// console.log(user1) // sara aajayega object ke andr

// object ke andr object:
// const user2 = {
//     id1: 224,
//     fullName: {
//         userFullName: {
//             firstName: "Suryansh",
//             lastName: "Shahi"
//         }
//     }
// }
// // accessing:
// console.log(user2.fullName)
// console.log(user2.fullName.userFullName.lastName) // Shahi

// merging Objects:
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// // const obj3 = Object.assign({}, obj1, obj2)
// // USE THIS SPREADING SYNTAX:(99% time use this syntax)
// const obj4 = {...obj1, ...obj2}
// console.log(obj4)

// Array ke andr object:
// const user5 = [
//     {

//     },
//     {

//     },
//     {
//         id: 212,
//         email: "s@gmail.com"
//     }
// ]
// accessing: user5[2].email

// accessing keys or values:
const user6 = {}
user6.id3 = 225
user6.name3 = "Sushant"
user6.isLoggedIn3 = false

console.log(Object.keys(user6))
console.log(Object.values(user6));
console.log(Object.entries(user6)); // key-value ka pair bana deta hai
console.log(user6.hasOwnProperty('isLoggedIn3')); // true
