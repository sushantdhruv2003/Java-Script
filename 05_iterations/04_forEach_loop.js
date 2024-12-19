const arr = ['js', 'py', 'cpp', 'rb']

// using functions in forEach loop in 3 different ways:

// 1: (using normal function):

// arr.forEach( function (i){
//     console.log(i)
// })


// 2: (using arrow function):

// arr.forEach( (i) => {
//     console.log(i)
// })


// 3: (by calling the other function)

// function printMe(i){
//     console.log(i)
// }
// arr.forEach(printMe)

// forEach contains other parameters also:
// arr.forEach( (item, index, array) => {
//     console.log(item, index, array)
// })

// objects inside array:
const myArr = [
    {
        language: "Java",
        lang: "java"
    },
    {
        language: "Python",
        lang: "py"
    },
    {
        language: "JavaScript",
        lang: "js"
    }
]

myArr.forEach( (i) => {
    console.log(i.language)  
})