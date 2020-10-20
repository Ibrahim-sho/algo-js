let array = [21,69,10,12,90,1];
let min=array[0];
let max=array[0];

for(let i=0; i<array.length; i++){
    if (array[i]<min){
        min = array[i];
    }
    else if(array[i]>max){
        max = array[i];
    }
}

console.log("The minimum is " + min + " and the maximum is " + max);