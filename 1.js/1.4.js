const readlineSync = require("readline-sync");

let userName = readlineSync.question("What is your name ?");
console.log("my name is" + " " + userName);
let userCity = readlineSync.question("What is your city ?");
console.log("I am from" + " " + userCity)