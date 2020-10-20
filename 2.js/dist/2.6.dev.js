"use strict";

var readlineSync = require("readline-sync");

var numb = readlineSync.question("enter a number between 1 and 7!");

while (numb < 1 || numb > 7) {
  numb = readlineSync.question("enter a number between 1 and 7!");
}

if (numb == 1) {
  console.log("It's monday");
} else if (numb == 2) {
  console.log("It's tuesday");
} else if (numb == 3) {
  console.log(" It's wednesday");
} else if (numb == 4) {
  console.log("It's thursday");
} else if (numb == 5) {
  console.log("It's friday");
} else if (numb == 6) {
  console.log("It's saturday");
} else if (numb == 7) {
  console.log("It's sunday!");
} else {
  console.log("error");
}