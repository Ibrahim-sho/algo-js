"use strict";

var readlineSync = require("readline-sync");

var Number1 = new Number(readlineSync.question('Give first decimal number?'));
var Number2 = new Number(readlineSync.question('Give second decimal number?'));
console.log("The integer part of " + Number1 + " multiplied by " + Number2 + " equals" + Math.trunc(Number1) * Number2);