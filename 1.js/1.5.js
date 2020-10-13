const readlineSync = require("readline-sync");

let Number1 = new Number(readlineSync.question('Give first decimal number?'));
let Number2 = new Number(readlineSync.question('Give second decimal number?'));
console.log("The integer part of " + Number1 + " multiplied by " + Number2 + " equals" + Math.trunc(Number1)*(Number2)); 