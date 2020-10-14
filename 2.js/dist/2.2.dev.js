"use strict";

var readlineSync = require("readline-sync");

var min = Number(readlineSync.question("give me a minimum number "));
var max = Number(readlineSync.question("give me a maximum number "));
var current = Number(readlineSync.question("give me a number "));

if (current > min && current < max) {
  console.log("You are in between");
} else {
  console.log("Youre not in between");
}