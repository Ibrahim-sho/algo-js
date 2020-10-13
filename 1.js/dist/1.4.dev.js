"use strict";

var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name ?");
console.log("my name is" + " " + userName);
var userCity = readlineSync.question("What is your city ?");
console.log("I am from" + " " + userCity);