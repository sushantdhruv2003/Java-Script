const marvelHeroes = ["IronMan", "Thor", "SpiderMan"]
const dcHeroes = ["SuperMan", "Batman", "WonderWomen"]

// using push function will not push the dcHeroes array into marvelHeroes directly,
// it will create an array inside an array

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) // ["IronMan", "Thor", "SpiderMan", ["SuperMan", "Batman", "WonderWomen"]]

// using concat function can solve this problem:
// but it has to be stored in different variable

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes); // ["IronMan", "Thor", "SpiderMan", "SuperMan", "Batman", "WonderWomen"]


// Most used method instead of concat method: (spread method)  ** VVI **

const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes);

// agar array ke andr array ho uske andr v ek array ho aise hi hote jaye, to use karo flat() method ka:
const realArray = [1, 2, [4, 5], [6, 7, [12, 16]], 10]
const realAnsArray = realArray.flat(Infinity) // inside me dena hai parameter ki kitne depth tak karna hai flat, infinity mtlb sare ko
console.log(realAnsArray); // [1, 2, 4, 5, 6, 7, 12, 16, 10]

// converting from string to array:
console.log(Array.isArray("Sushant")) // false

console.log(Array.from("Sushant")); // ['S','u','s','h','a','n','t']

// agar key-value pair ko convert karna chahoge to empty array print hoga:
// thats'why we should specify which is to be changed key or value

console.log(Array.from({name: "Sushant"})) // []  // IMPORTANT AND INTERESTING

// Adding many to array:
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
