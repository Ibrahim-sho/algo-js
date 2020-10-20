const readlineSync = require("readline-sync");

let i=0;
let num=0;
let sum=0;

let n = readlineSync.question("Enter a number!" + " ");

while(i<n){
    num=readlineSync.question("Enter a number "+(i+1)+" : ");
    sum=sum+parseInt(num);
    i++;
}

console.log(sum);