const readlineSync = require("readline-sync");

/*Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42*/

let favNum = readlineSync.question("What's your favorite number? ");

while (favNum!=42){
    console.log("Are you sure?");
    let favNum2 = readlineSync.question("What's your favorite number? ");
    if(favNum2=42){
        console.log("Your favorite number is our favorite number");
        break;
    }

}







/*if(favNum==42){
    console.log("Your favorite number is our favorite number")
} else {
    console.log("Are you sure?")
    while(favNum!==42){
        favNum = readlineSync.question("What's your favorite number? ");
        
    }
} */

