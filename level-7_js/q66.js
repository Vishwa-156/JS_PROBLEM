function findIndex(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([10,20,30], 20)); 
console.log(findIndex([10,20,30], 40)); 
console.log(findIndex(["a","b"], "b"));










let arr = [1,23,4,56,78];
let value = 4;

console.log(arr.indexOf(value))










function findIndex(arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value){
            console.log(i);
            break;
        }
        else if(i==arr.length-1){
            present=false;
        }
    }
   
}
