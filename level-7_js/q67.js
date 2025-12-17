//FREQUENCY OF A VALUE

function frequency(arr, value){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            count++;
        }
    }
    return count;
}

console.log(frequency([1,2,2,3,2], 2)); 

let arr = [1,2,2,3,4];
let value = 2;

let obj={};
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]!=undefined]){
        obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1;
    }
}
console.log(obj[value]);


