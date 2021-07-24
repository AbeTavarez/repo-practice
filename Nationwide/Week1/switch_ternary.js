
// Create a new Date object
var date = new Date()
console.log(date)

// logs the month
var month = date.getMonth() + 1
console.log(month)

switch (month){
    case 1:
        console.log("It's Mike's birthday")
        break;
    case 2:
        console.log("Ana")
        break;
    case 3:
        console.log("Abraham's Birthday")
        break;
    default:
        console.log("no birthday month")
}

// if (month == 1){
//     console.log("It's Mike's birthday")
// } else if(month == 2){
//     console.log("Ana")
// } else {
//     console.log("no birthday")
// }