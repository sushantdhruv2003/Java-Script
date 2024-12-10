const accountId = 7352
let accountEmail = "sushantdhruv2003@gmail.com"
var accountPassword = "12345"
// Don't use var , because it is an old methods
accountCity = "Mysore"

accountEmail = "abc@gmail.com"
accountPassword = "212121"
let accState; // this is also true, check the output, it will show undefined
accountCity = "Gaya"  // this is also right
// accountId = 2 : this is not correct as accountId is of const type

console.log(accountId);

// to add the data in table form:
console.table([accountId, accountEmail, accountPassword, accountCity, accState])