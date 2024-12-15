// {} isi ko scope bolte hai
// 
// // {paranthesis ke andr kuch v likho wo hota hai "BLOCK SCOPE"}
// {} paranthesis ke bahar wale ko bolte hai "GLOBAL SCOPE"


// if(true){
//     let a = 10
//     const b = 20
//     var c = 30 // var can be accessed outside the scope
//     d = 40 // this can also be accessed outside
// }

// // console.log(a) // can not be accessed outside the scope
// // console.log(b) // can not be accessed outside the scope
// console.log(c) // 30
// console.log(d) // 40

// let a = 100
// if(true){
//     let a = 50
//     console.log("Inner a: ", a) // 50
// }
// console.log("Outer a: ", a) // 100

// NESTED SCOPE:

function one(){
    const userName = "Sushant"
    function two(){
        const age = 22
        console.log(userName) // yes it can be accessed
    }
    // console.log(age) // it can not be accessed
    two()
}
one() // Sushant


// ************ INTERESTING EXAMPLE ****************
console.log(addOne(5)) // this will work // 6
function addOne(num){
    return num + 1
}

// another way of initializing functions:
// addTwo(5) // this will not work, as calling the function before write the function is
// not allowed for this as we are storing the function into a value
const addTwo = function(num){
    return num + 1
}