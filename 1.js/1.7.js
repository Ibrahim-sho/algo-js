const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("What is your shoe size? ");
let birthYear = readlineSync.question("And what is your birth year? ");
console.log((shoeSize*2+5)*50-birthYear+1766);