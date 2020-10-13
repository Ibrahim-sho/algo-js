const readlineSync = require("readline-sync");

let question4 = 4;
let insect  = readlineSync.question(" What's the first insect that crosses your mind ? (" + question4 + " questions left) : ");
question3 = 3;
let city= readlineSync.question(" What's the first city that crosses your mind ? (" + question3 + " questions left) : ");
question2 = 2;
let species= readlineSync.question(" What's the first species that crosses your mind ? (" + question2 + " questions left) : ");
question1 = 1;
let day= readlineSync.question(" Mass destruction or apocalypse? (" + question1 + " questions left) : ");
console.log("Once upon a time there was a " + insect + " That invaded " + city + " Before " + species + " did. It was the beginning of the " + day + ".");