// REDUCE: 

// const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (accumulator, currentValue){
//     console.log(`Accumulator is: ${accumulator} and current value is: ${currentValue}`)
//     return accumulator + currentValue // 6 jo ki 1+2+3 se aaya
// }, 0) // here 0 is the initial value

// console.log(myTotal)

// using arrow function:

// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal) // 6

// one more example:

const shoppingCart = [
    {
        itemName : "JS",
        price: 2999
    },
    {
        itemName : "DS",
        price: 4999
    },
    {
        itemName : "PY",
        price: 8999
    }
]
// maan lo sare shopping cart ke sare items ke price ko add karo:
const totalCost = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalCost)