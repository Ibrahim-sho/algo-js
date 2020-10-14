const readlineSync = require("readline-sync");

let min = Number(readlineSync.question("give me a minimum number " )) ;
let max = Number(readlineSync.question("give me a maximum number ")) ;
let current = Number(readlineSync.question("give me a number ")) ;

if ((current > min) && (current < max )) {

    console.log("You are in between") ;
}

else {
    
    console.log("Youre not in between");

}