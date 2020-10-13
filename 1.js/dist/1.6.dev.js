"use strict";

var readlineSync = require("readline-sync");

var integer1 = readlineSync.question("Give me an integer : ");
var integer2 = readlineSync.question("Give me an other integer : ");
console.log("The rest of the division of those two numbers is : " + integer1 % integer2);