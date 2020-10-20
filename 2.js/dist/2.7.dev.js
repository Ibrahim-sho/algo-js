"use strict";

var readlineSync = require("readline-sync");

var i = 0;
var num = 0;
var sum = 0;
var n = readlineSync.question("Enter a number!" + " ");

while (i < n) {
  num = readlineSync.question("Enter a number " + (i + 1) + " : ");
  sum = sum + parseInt(num);
  i++;
}

console.log(sum);