// Syntax of Switch statement:

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2
switch(month){
    case 1:
        console.log("January")
        break; // break use karte nahi to phla correct milte hi niche ka sara print kar deta hai, BUT Default ko chorke
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break;
    default:
        console.log("Default hai ye")
        break
}