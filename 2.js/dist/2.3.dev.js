"use strict";

var readlineSync = require("readline-sync");
/*let i=0;
while(i<=100){
    console.log(i);
    i+=2;
} 
*/


var i = 1;

while (i <= 100) {
  if (i % 2 == 0) {
    console.log(i);
  }

  i += 1;
}