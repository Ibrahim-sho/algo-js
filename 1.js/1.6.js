const readlineSync = require("readline-sync");

let integer1 = readlineSync.question("Give me an integer : ");
let integer2 = readlineSync.question("Give me an other integer : ");
console.log("The rest of the division of those two numbers is : " + integer1%integer2);