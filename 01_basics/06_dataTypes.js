// defining symbols:
const id = Symbol('123')
const id1 = Symbol('123')
console.log(id === id1); // false

// bigInt:
const bigNumber = 214213132534n

// arrays:
const heroes = ["a", "b", "c"]

// objects:
let myObject = {
    name : "sushant",
    age : 20,
}

// functions:
const myFunction = function(){
    console.log("Hello Sushant")
}

// use of typeof:
console.log(typeof null) // object
console.log(typeof heroes) // object
console.log(typeof undefined) // undefined
console.log(typeof myObject) // Object
console.log(typeof Boolean) // Boolean
console.log(typeof id) // symbol
console.log(typeof myFunction) // function
