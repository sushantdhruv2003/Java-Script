let myDate = new Date()
console.log(myDate) // output will be not in understable format

console.log(myDate.toString()) // day month date year hour:min:sec

// other methods:
console.log(myDate.toDateString()); // without time
console.log(myDate.toLocaleString()); // month/date/year time am/pm

console.log(typeof myDate); // object

// choosing own date:

let myCreatedDate = new Date("12-14-2024")
console.log(myCreatedDate.toLocaleString());

let my2 = new Date(2024,0,14)
console.log(my2.toDateString());

// Time stamp in JS:
let myTimeStamp = Date.now();
console.log(myTimeStamp); // in ms

// conversion in seconds:
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate.getMonth() + 1); // as month starts from index 0 , thatswhy + 1
console.log(newDate.getDay());
