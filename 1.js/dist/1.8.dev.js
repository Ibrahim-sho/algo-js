"use strict";

var readlineSync = require("readline-sync");

var question4 = 4;
var insect = readlineSync.question(" What's the first insect that crosses your mind ? (" + question4 + " questions left) : ");
question3 = 3;
var city = readlineSync.question(" What's the first city that crosses your mind ? (" + question3 + " questions left) : ");
question2 = 2;
var species = readlineSync.question(" What's the first species that crosses your mind ? (" + question2 + " questions left) : ");
question1 = 1;
var day = readlineSync.question(" Mass destruction or apocalypse? (" + question1 + " questions left) : ");
console.log("Once upon a time there was a " + insect + " That invaded " + city + " Before " + species + " did. It was the beginning of the " + day + ".");