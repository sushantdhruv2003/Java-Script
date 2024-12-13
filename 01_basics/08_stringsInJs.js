const name = "Sushant"
const count = 225
//console.log(name + count + "blablabla")

// modern approach:
console.log(`Hello my name is ${name} and my usn is ${count}`)

// other way of declaring string:
const name1 = new String('Sushant')
//console.log(name1)

console.log(name1[2])
console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf('s'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());

const newStr = name1.substring(0,4) // 4 is exclusive here
console.log(newStr);

const newStr1 = name1.slice(-6,4) // 4 is exclusive and also u can add negative indexing here
console.log(newStr1) // in .slice negative indexing starts from end(not from -0 but starts from -1)

// trim method:
const newStr2 = "      Sushant     "
console.log(newStr2.trim())  // Sushant

// replace method:
const naam = "Rohit"
console.log(naam.replace('hi','H')) // RoHt
console.log(naam.includes('ps')) // false

// split method:
const hero = "I a-m Sus-hant"
console.log(hero.split('-')); // split on - basis  // check output

