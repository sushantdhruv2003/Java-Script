// syntax:

// function printMyName(){
//     console.log("S")
//     console.log("u")
//     console.log("s")
//     console.log("h")
//     console.log("a")
//     console.log("n")
//     console.log("t")
// }
// printMyName()

// // adding two numbers:
// function addition(num1, num2){ // no need to specify data types of these 2 PARAMETERS
//     console.log(num1 + num2)
// }
// addition(4, 6) // 4 and 6 are called ARGUMENTS

// OR
// function addition(num1, num2){
//     return num1 + num2
//     console.log("Hello") // this will never be printed as in JS after return nothing can be printed
// }
// const result = addition(4, 6)
// console.log("Result: ", result); // Result: 10

// function logInMessage(userName){
//     return `${userName} just Logged In`
// }
// // printing the returned value:
// console.log(logInMessage("Sushant")) // Sushant just Logged In

// console.log(logInMessage()) // undefined just Logged In

// OR
// function logInMessage(userName){
//     if(!userName){
//         console.log("Please enter the username")
//         return
//     }
//     return `{userName} just logged In`
// }
// console.log(logInMessage())

// or we can set the default value:
// function logInMessage(userName = "Ravi"){
//     if(!userName){
//         console.log("Please enter the username")
//         return
//     }
//     return `${userName} just logged In`
// }
// console.log(logInMessage()) // agar khali choroge to by default Ravi aayega, agar userName daloge ram to ram aayega

// agar ek se jyada element ko dalna ho:
// function addToCart(num1){
//     return num1
// }
// console.log(addToCart(100)) // 100
// console.log(addToCart(100,200,300)) // 100 aayega bs

// to solve this problem use SPREAD method: in functions ... is called REST operator
// function addToCart(...num1){
//     return num1
// }
// console.log(addToCart(100,200,300)) // array dega: [100, 200, 300]

// function addToCart(val1, val2, ...num1){
//     return num1
// }

// console.log(addToCart(100,200,300,400)) // 100 jayega val1 aur 200 jayega val2 me, bcha hua num1 me
// // output will be: [300, 400]

// handling objects in function:
// const user = {
//     name: "Sushant",
//     age: 22
// }
// function handlingObjects(anyObject){ // anyObject mtlb koi v object ho
//     console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`)
// }
// handlingObjects(user)
// // OR
// handlingObjects({
//     name: "Ravi",
//     age: 24
// }) // name aur age change ho jayega

// handling Arrays:
const newArray = [200, 400, 600, 800]
function returnSecondValue(anyArray){
    return anyArray[1]
}
console.log(returnSecondValue(newArray)) // 400
// OR:
console.log(returnSecondValue([200,300,400,500])) // array change ho jayega // output: 300