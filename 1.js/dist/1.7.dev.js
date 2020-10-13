"use strict";

var readlineSync = require("readline-sync");

var shoeSize = readlineSync.question("What is your shoe size? ");
var birthYear = readlineSync.question("And what is your birth year? ");
console.log((shoeSize * 2 + 5) * 50 - birthYear + 1766);