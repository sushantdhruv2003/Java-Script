// singleton

// Object Literals

// inserting a symbol in the object:
const mySym = Symbol("Key1")

const JsUser = {
    name: "Sushant",
    age: 21,
    location: "Mysore",
    email: "sushantdhruv2003@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"],
    "full name": "Sushant Dhruv",
    [mySym]: "My Key" // it is the special syntax for Declaring Symbol
}

// accesing:
console.log(JsUser.email)
//  OR
console.log(JsUser["email"]) // here u have to treat email as string inside the square bracket

// console.log(JsUser.full name); // it can not be accesed using .
console.log(JsUser["full name"])

// accessing the symbol:
console.log(JsUser[mySym]); // My Key

// changing the values:
JsUser.age = 20
console.log(JsUser); // age will be changed to 20

// freezing the value so that it can not be changed:
Object.freeze(JsUser.age)
// OR we can freeze the entire object: Object.freeze(JsUser)
JsUser.age = 24
JsUser.location = "Gaya"
console.log(JsUser); // age will NOT change to 24, but location will change to Gaya

// using functions in Object:
JsUser.greetings = function(){
    console.log("Hello Js User");
}
// if u want to access the Object items here:
JsUser.greetings2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
// accessing:
console.log(JsUser.greetings())
console.log(JsUser.greetings2())