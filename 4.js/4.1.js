const readlineSync = require("readline-sync");
let papa = readlineSync.question("give the length please ");
let mama = readlineSync.question("give the width please ");

function calcSurface(longueur,largeur){
    return longueur*largeur;
}

console.log("The surface is " + calcSurface(papa, mama));